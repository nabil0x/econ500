# Supabase Setup — Study Logger v2

These SQL commands set up the backend for the Study Logger widget.
Run them in the **Supabase SQL Editor** (one command at a time or all together).

---

## Step 1: Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → Sign in (GitHub)
2. Click **"New project"** → fill in details → **"Create project"**
3. Wait for the database to provision (1-2 min)

---

## Step 2: Run this SQL in the SQL Editor

Go to **SQL Editor** (left sidebar) → **"New query"** → paste and run:

```sql
-- ═══════════════════════════════════════════════════════════════
-- Table: page_visits
-- ═══════════════════════════════════════════════════════════════
CREATE TABLE public.page_visits (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  path        TEXT NOT NULL,
  title       TEXT,
  referrer    TEXT,
  session_id  TEXT,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX idx_page_visits_path       ON public.page_visits (path);
CREATE INDEX idx_page_visits_created_at ON public.page_visits (created_at DESC);

-- ═══════════════════════════════════════════════════════════════
-- Row Level Security: allow anon role to INSERT and SELECT
-- ═══════════════════════════════════════════════════════════════
ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a page visit (anon key)
CREATE POLICY "anon_insert_page_visits" ON public.page_visits
  FOR INSERT TO anon
  WITH CHECK (true);

-- Anyone can read page visits (needed for aggregation)
CREATE POLICY "anon_select_page_visits" ON public.page_visits
  FOR SELECT TO anon
  USING (true);

-- ═══════════════════════════════════════════════════════════════
-- RPC function: get top pages by visit count (last 30 days)
-- Called by visitor-logger.js → sbRpc('get_top_pages', {limit_count: 20})
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_top_pages(limit_count INT DEFAULT 20)
RETURNS TABLE (
  path        TEXT,
  title       TEXT,
  visit_count BIGINT
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    pv.path,
    MODE() WITHIN GROUP (ORDER BY pv.title) AS title,
    COUNT(*)::BIGINT AS visit_count
  FROM public.page_visits pv
  WHERE pv.created_at > NOW() - INTERVAL '30 days'
  GROUP BY pv.path
  ORDER BY visit_count DESC
  LIMIT limit_count;
$$;

-- Let anon role call this function
GRANT EXECUTE ON FUNCTION public.get_top_pages TO anon;
```

---

## Step 3: Get your API credentials

1. In Supabase, go to **Settings** → **API** (left sidebar)
2. Copy **"Project URL"** — e.g. `https://xyzabcdef.supabase.co`
3. Copy **"anon public"** key (starts with `eyJ...`)

---

## Step 4: Paste into visitor-logger.js

Open `docs/javascripts/visitor-logger.js` and find the `CONFIG` block at the top:

```js
var CONFIG = {
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',  // ← paste Project URL
  supabaseKey: 'your-anon-key-here',                 // ← paste anon key
};
```

---

## Step 5: Rebuild & deploy

```bash
mkdocs build
git add -A && git commit -m "Study Logger v2: Supabase global tracking + local session time"
git push
```

The GitHub Action will redeploy to GitHub Pages.