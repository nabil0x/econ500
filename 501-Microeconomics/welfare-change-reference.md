# Welfare Change: CV, EV & Consumer Surplus — Reference Notes

> ⚠️ **DEPRECATED** — This paper summary is superseded by the comprehensive exam-quality coverage in [`answers-welfare.md`](./answers-welfare.md). Use that file for revision.

> **Source:** *Measuring Welfare Change* — Academic paper (21 pages, 2005)
> **File:** [WelfareChange (CV, EV and CS).pdf](./WelfareChange%20(CV%2C%20EV%20and%20CS).pdf)
> **Related:** [Full Study Notes →](./README.md#welfare-references) | [Basics →](./basics.md)

---

## What This Paper Covers

A rigorous treatment of welfare measurement — how to quantify the impact of price/income changes on consumer well-being. Covers the theoretical foundations, graphical intuition, and practical computation methods.

---

## Paper Structure

| Section | Content |
|---------|---------|
| **1. Introduction** | Welfare economics as a policy science; three requirements for welfare measures |
| **2. Representing Preferences** | Utility functions, indirect utility, cost function, money metric utility, ordinary & Hicksian demand |
| **3. CV & EV** | Definitions (Hicks, 1939), graphical analysis, money metric utility connection, Hicksian demand integration, worked example |
| **4. Consumer Surplus** | Marshallian CS definition, quasilinear & homothetic preferences, small-change approximations, Willig bounds, Vartia's numerical algorithm, integrability |

---

## Key Results

### 1. Definitions

| Measure | What It Measures | Formula |
|---------|-----------------|---------|
| **Equivalent Variation (EV)** | Money you'd need to give *before* the price change to make you as well off as *after* it | EV = e(ψ(p¹,m), p⁰) − e(ψ(p⁰,m), p⁰) |
| **Compensating Variation (CV)** | Money you'd need to take/give *after* the price change to keep you at your *original* utility | CV = e(ψ(p⁰,m), p¹) − e(ψ(p¹,m), p¹) |
| **Consumer Surplus (CS)** | Area under the Marshallian demand curve between old and new prices | CS = ∫_{p⁰}^{p¹} x(p,m) dp |

### 2. The EV > CS > CV Relationship

For a **price decrease** when the good is **normal**:

```
EV > CS > CV
```

- **EV** is measured at the *new* (higher) utility level → largest
- **CS** is measured along the ordinary demand curve → middle
- **CV** is measured at the *original* (lower) utility level → smallest

For a **price increase**, the inequality reverses direction.

### 3. Hicksian Demand Integration

Both CV and EV can be expressed as areas under Hicksian (compensated) demand curves:

```
EV = ∫_{p⁰}^{p¹} h(ψ(p¹,m), p) dp    (at new utility level)
CV = ∫_{p⁰}^{p¹} h(ψ(p⁰,m), p) dp    (at original utility level)
```

### 4. Quasilinear Utility → CS = CV = EV

When utility is **quasilinear** (linear in one good, e.g., u(x₀, x₁, ..., xₙ) = x₀ + f(x₁, ..., xₙ)):
- No income effects for the non-linear goods
- Hicksian and Marshallian demand coincide
- **CS = CV = EV**

### 5. Small Price Changes → CS ≈ CV ≈ EV

For small price changes, CS is a good approximation of CV/EV. **Willig (1976)** derived error bounds showing CS is within a few percent of CV/EV for most realistic scenarios.

### 6. Vartia's Algorithm

For exact CV/EV computation without estimating the full demand system:
1. Solve the differential equation relating the cost function to prices
2. Use the Slutsky equation to convert observable ordinary demand into Hicksian demand
3. Numerically integrate

---

## Connections to Tutorial Questions

| Tutorial Question | Paper Section |
|------------------|---------------|
| Q1a: Distinguish CV, EV, CS | §3.2 (Definitions 1 & 2) |
| Q1b: EV > CS > CV for normal goods | §4.2 (Figures 3-6) |
| Q3b: Compute EV, CV, CS for Cobb-Douglas | §3.6 (worked example) |
| Q4b: Homotheticity | §4.2.1 |

---

## Why This Paper Matters for Your Exam

The exam question on Tutorial 2 (Q1) explicitly asks you to distinguish CV, EV, and CS, and to prove the EV > CS > CV ranking for normal goods. This paper gives you:

1. **Exact definitions** with formal notation — use these in your answer
2. **Graphical intuition** — the paper's figures show exactly how CV, EV, and CS relate on indifference curve diagrams
3. **The worked example** (§3.6) — walks through computing CV and EV from a Cobb-Douglas utility function, directly applicable to Q3b
4. **The special quasilinear case** (§4.2) — useful for understanding when the measures coincide
