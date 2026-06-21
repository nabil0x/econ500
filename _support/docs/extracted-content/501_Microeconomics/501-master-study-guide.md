<!-- Extracted from: 501_Microeconomics/501-MASTER-STUDY-GUIDE.pdf -->

501 Microeconomics — Complete Master Study
                       Guide

  Jahangirnagar University · MSc Economics Advanced Microeconomic Theory — Exam
  preparation source of truth
  Source files: All answer banks, extracted text from PDFs, homework assignments, tutorial sheets,
  and past exam papers (Batch 46, Batch 48)
  Textbook cross-references: Munoz-Garcia (Advanced Microeconomic Theory) Ch.1–11;
  Koutsoyiannis (Modern Microeconomics) Ch.2–4, 9, 11, 22–23
  Last updated: June 2026


Welcome! This guide brings together everything you’ll need for the 501 exam — all the theory,
derivations, practice problems, and past papers in one place. Work through it steadily, and
you’ll walk into that exam room feeling ready.




How to Use This Guide

This is your single-file source of truth for 501 Microeconomics. We’ve packed in:

     Theory & basics — core concepts, definitions, assumptions
     Derivations — step-by-step mathematical derivations with LaTeX
     Solved questions — all answers from the existing answer banks (~80+ questions)
     New practice problems — from homework PDFs, tutorial sheets, and past exams
     Past exam papers — Batch 46 (2020) and Batch 48 (2022, 2023) with solutions
     Advanced textbook content — rigorous proofs from Munoz-Garcia (Ch.1–11) and
     Koutsoyiannis (Ch.2–4, 9, 11, 22–23)
     Munoz-Garcia Insight & Koutsoyiannis Reference callout boxes — embedded in
     each topic for textbook-level depth


Navigation

 Section                        Topic                Key Additions

                                                     Munoz-Garcia Examples 1.3–1.8,
                                Consumer Theory
 Topic 1                                             Lexicographic counterexample, Bordered
                                & Preferences
                                                     Hessian, WARP, Behavioral Economics

                                                     Slutsky Matrix, WARP three-proposition
                                Demand Theory &
 Topic 2                                             chain, Compensated Law of Demand,
                                Elasticities
                                                     Koutsoyiannis empirical estimation

                                                     Hotelling’s Lemma proof, CES nesting,
                                Production &
 Topic 3                                             Cobb-Douglas full CMP, Aggregate supply
                                Supply
                                                     with CRS, GE 2×2×2 connection

                                                     CV/EV Hicksian integration, Willig bounds,
 Topic 4                        Welfare Economics    Welfare theorem proofs, Bergson-
                                                     Samuelson SWF, Scitovsky reversal
Section                    Topic                 Key Additions

                                                 Arrow-Debreu existence, Gross
                           General               substitutability uniqueness, Lagrangian
Topic 5
                           Equilibrium           Pareto conditions, 2×2×2 numerical
                                                 example

                                                 Nash Existence (Kakutani), msNE
                                                 calculation, BNE/PBE definitions, Kreps-
Topic 6                    Game Theory & IO
                                                 Milgrom reputation, Renegotiation-
                                                 proofness

                                                 Steel-fishery numerical, Coase formal proof,
                           Externalities &
Topic 7                                          Samuelson Lagrangian derivation, Lindahl
                           Public Goods
                                                 equilibrium, n-user Commons

                                                 Continuous Lemons model, Spence
                           Information &
Topic 8                                          continuum, Intuitive Criterion, Stiglitz
                           Trade
                                                 screening, Stolper-Samuelson Jones algebra

Appendix A                 Exam Cheat Sheet      All key formulas on one page

Appendix B                 Past Exam Papers      Batch 46 (2020) & Batch 48 (2022, 2023)

                           Workhorse Utility
Appendix C                                       CD, PS, PC, CES, Quasilinear forms
                           Functions

                           Key Textbook          Complete cross-reference index to Munoz-
Appendix D
                           Connections           Garcia and Koutsoyiannis




Exam Pattern (MSc 501 — 70 marks, Answer any 5 from 8)

Topic             Likely Questions                                  Priority

Consumer
Theory
                  2–3 questions (preference axioms, duality,
                  convexity proofs)
                                                                    ⭐⭐⭐
Production &
Supply
                  2 questions (production sets, full CD analysis,
                  competitive eq)
                                                                    ⭐⭐⭐
Welfare &
Pareto
                  1–2 questions (CV/EV/CS, Hicks-Kaldor,
                  welfare theorems)
                                                                    ⭐⭐⭐
General
Equilibrium
                  1 question (Edgeworth box or
                  existence/stability)
                                                                    ⭐⭐
Demand &
Elasticities
                  1 question (elasticities, revenue test, log-
                  linear demand)
                                                                    ⭐⭐
Game Theory
                  1 question (Nash equilibrium, SPNE, Folk
                  Theorem)
                                                                    ⭐⭐
Externalities &
Public Goods
                  1–2 questions (Pigouvian tax, Coase, tragedy
                  of commons)
                                                                    ⭐⭐
Information &
Trade
                  0–1 question (adverse selection, signaling,
                  tariff — rotating topic)
                                                                    ⭐
Question types: ~35% essay, ~25% proof, ~25% numerical, ~10% graphical, ~5% game
theory




Answer Structure Template (14-mark question — 12 minutes)

 Phase                        Time                What to Do

                                                  Classify: Theory/Definition?
 Plan                         2 min
                                                  Derivation/Numerical? Essay/Evaluation?

                                                  Define terms, list assumptions, name
 (a) Definition               1.5 min
                                                  theorem

 (b) Derivation               3 min               Lagrangian → FOCs → solving → SOC note

                                                  Draw labelled graph, equilibrium points,
 (c) Diagram                  3 min
                                                  arrows

 (d) Intuition                1.5 min             Translate maths to plain English

 (e) Evaluation               1 min               Link to other topics, note limitations

                                                  Cite relevant Munoz-Garcia/Koutsoyiannis
 (f) Textbook reference       0.5 min
                                                  proof or example

 Review                       2 min               Check relevance, diagram labels, algebra




Topic 1: Consumer Theory & Preferences


1.1 The Preference-Based Approach

Why this matters for your exam: Every model in microeconomics starts here — how do we
describe what people want? If you don’t understand preferences, you can’t derive demand, and
without demand there’s no market analysis. This is the foundation everything else builds on.
Let’s start with a question you face every day: Given your limited budget, which goods do you
buy? Consumer theory models this by assuming you have well-defined preferences over
consumption bundles and that you choose the most-preferred bundle from those you can
afford. Preferences are the primitive; choices are derived from them.
The preference relation is a binary relation ≽ (weak preference) on the consumption set
𝑋 = ℝ𝑁+ . For any 𝑥, 𝑦 ∈ 𝑋:

      𝑥 ≽ 𝑦 : “x is at least as preferred as y”
      𝑥 ≻ 𝑦 (strict) : 𝑥 ≽ 𝑦 but not 𝑦 ≽ 𝑥
      𝑥 ∼ 𝑦 (indifference) : 𝑥 ≽ 𝑦 and 𝑦 ≽ 𝑥

Rationality Axioms

What does it mean to be “rational”? Here’s the definition: a rational preference relation
satisfies two key assumptions:
1. Completeness – For all 𝑥, 𝑦 ∈ 𝑋: either 𝑥 ≽ 𝑦, or 𝑦 ≽ 𝑥, or both (𝑥 ∼ 𝑦). You can compare
ANY two bundles; no refusal to answer.

      Violation example: “Is the brother of” – if John and Bob are not brothers, neither is the
      brother of the other.
      Real-world violation: You often cannot compare unfamiliar bundles (e.g., a rare wine
      vs. an exotic cheese).

2. Transitivity – For all 𝑥, 𝑦, 𝑧 ∈ 𝑋: if 𝑥 ≽ 𝑦 and 𝑦 ≽ 𝑧 then 𝑥 ≽ 𝑧. Your preferences do not cycle;
they are internally consistent.

      Without transitivity: a money-pump argument can extract infinite wealth from you
      (cycle through preferences, charging a fee at each step).
      Sources of intransitivity: Indistinguishable alternatives (just-noticeable differences),
      framing effects, Condorcet paradox (aggregation of criteria), changing preferences.

Reflexivity (implied by completeness + transitivity): 𝑥 ∼ 𝑥 and 𝑥 ≽ 𝑥 for all 𝑥.



  Exam Tip (Q1, 10/7 marks): Completeness is the most frequently challenged assumption – real
  people often cannot compare unfamiliar bundles. Transitivity is needed for utility representation.
  Always state both when defining rational preferences. A students give the Condorcet paradox and
  money-pump argument; B students merely restate definitions.




  Reference — Munoz-Garcia (§1.2-1.3, Examples 1.3, 1.5, 1.6):
  Example 1.3 (Framing Effects): Rubinstein (2012) presented Master’s students with holiday
  packages and asked which they preferred: (a) A weekend in Paris for $574 at a four-star hotel; (b) A
  weekend in Paris at the four-star hotel for $574; (c) A weekend in Rome at the five-star hotel for
  $612. Alternatives (a) and (b) are identical – most students are indifferent between them. Most
  students strictly prefer (b) to (c). By transitivity, (a) should be preferred to (c). While most students
  exhibit this transitive preference, about 25% of students strictly prefer (c) to (a) – an intransitive
  preference induced by the way options were framed.
  Example 1.5 (Monotonicity – Leontief): 𝑢(𝑥1 , 𝑥2 ) = min⁡{𝑎𝑥1 , 𝑏𝑥2 } satisfies monotonicity
  (increase all arguments → utility increases) but violates strong monotonicity (increase only good
  1 → min⁡{𝑎𝑥1 + 𝛿, 𝑏𝑥2 } is not necessarily larger than min⁡{𝑎𝑥1 , 𝑏𝑥2 } – e.g., when min⁡{𝑎𝑥1 , 𝑏𝑥2 } = 𝑏𝑥2 ).
  Example 1.6 (Strong Monotonicity – Perfect Substitutes): 𝑢(𝑥1 , 𝑥2 ) = 𝑎𝑥1 + 𝑏𝑥2 satisfies both
  monotonicity and strong monotonicity, since increasing any single argument strictly increases
  utility.
  Takeaway: Strong monotonicity ⇒ monotonicity, but the converse fails (Leontief is the
  counterexample).




Indifference Sets & Contour Sets

For a preference relation ≽ and bundle 𝑥 ∈ 𝑋, the following sets partition 𝑋:

      Indifference Set (IND): 𝐼𝑁𝐷(𝑥) = {𝑦 ∈ 𝑋: 𝑦 ∼ 𝑥}
      Upper Contour Set (UCS): 𝑈𝐶𝑆(𝑥) = {𝑦 ∈ 𝑋: 𝑦 ≽ 𝑥}
      Lower Contour Set (LCS): 𝐿𝐶𝑆(𝑥) = {𝑦 ∈ 𝑋: 𝑥 ≽ 𝑦}

These satisfy 𝐼𝑁𝐷(𝑥) = 𝑈𝐶𝑆(𝑥) ∩ 𝐿𝐶𝑆(𝑥).
  Solved Question (Q2, 10/7 marks): Define indifference set. Examine: if preference satisfies
  strong monotonicity, ICs must be downward sloping.


Answer:
Indifference set of a bundle 𝑥 is the set of all bundles 𝑦 such that you are indifferent between
them:


  Let’s walk through this step by step: Starting from the definition of the indifference relation ∼
  (where 𝑥 ∼ 𝑦 means 𝑥 ≽ 𝑦 and 𝑦 ≽ 𝑥): 1. The preference relation ≽ partitions the consumption set
  𝑋 into equivalence classes 2. For a given bundle 𝑥, collect all bundles 𝑦 that are indifferent to 𝑥:
  {𝑦 ∈ 𝑋: 𝑦 ∼ 𝑥} 3. This collection is defined as the indifference set 𝐼𝑁𝐷(𝑥)
  Here’s what’s really going on: 𝐼𝑁𝐷(𝑥) contains every bundle that yields exactly the same
  satisfaction as 𝑥. You’d be equally happy with any bundle in this set — they are perfect substitutes
  in terms of welfare.


                                       𝐼𝑁𝐷(𝑥) = {𝑦 ∈ 𝑋: 𝑦 ∼ 𝑥}
Strong monotonicity: For any 𝑥 ≠ 𝑦, if 𝑥𝑘 ≥ 𝑦 for all 𝑘 and 𝑥𝑙 > 𝑦 for at least one good 𝑙, then
                                                 𝑘                𝑙
𝑥 ≻ 𝑦. (i.e., more of ANY good strictly increases utility.)
Proof by contradiction that SM implies downward-sloping ICs:

   1. Suppose the indifference curve through 𝑥 were upward sloping.
   2. Then there exists a point 𝑦 northeast of 𝑥 on the same IC: 𝑦 ≫ 𝑥 (more of both goods).
   3. By strong monotonicity, 𝑦 ≫ 𝑥 implies 𝑦 ≻ 𝑥.
   4. But by definition of the IC, 𝑦 ∼ 𝑥.
   5. Contradiction. Hence ICs cannot be upward sloping.

Strong monotonicity rules out: upward-sloping ICs, thick indifference curves, and bads
(where more reduces utility).


  Exam Tip: Strong monotonicity is sufficient but not necessary for downward-sloping ICs. LNS
  alone does NOT guarantee downward-sloping ICs (e.g., if one good is a bad).




Convexity of Preferences

Here’s the key — and it’s beautiful: convex preferences capture the idea that you prefer
variety. A mix of two bundles is never worse than the extreme you like less.
Convexity (Definition 1): For all 𝑥, 𝑦 ∈ 𝑋, if 𝑥 ≽ 𝑦 then for any 𝛼 ∈ (0, 1):


  Let’s derive this together: Starting from the premise that 𝑥 ≽ 𝑦 (bundle 𝑥 is at least as good as 𝑦):
  1. Take any 𝛼 ∈ (0, 1) and form the convex combination 𝛼𝑥 + (1 − 𝛼)𝑦 2. Convex preferences require
  that this mixture is no worse than the worse bundle 𝑦 3. Result: 𝛼𝑥 + (1 − 𝛼)𝑦 ≽ 𝑦
  Here’s what’s really going on: Averages are not worse than extremes. If you mix a good bundle 𝑥
  with a less-preferred bundle 𝑦, the mixture is still at least as good as 𝑦. This captures a taste for
  diversification.


                                             𝛼𝑥 + (1 − 𝛼)𝑦 ≽ 𝑦
The convex combination of 𝑥 and 𝑦 is at least as good as 𝑦.
Convexity (Definition 2 – Convex UCS): For every bundle 𝑥, its upper contour set
𝑈𝐶𝑆(𝑥) = {𝑦 ∈ 𝑋: 𝑦 ≽ 𝑥} is a convex set. That is, for any 𝑦, 𝑧 ∈ 𝑈𝐶𝑆(𝑥) and any 𝜆 ∈ (0, 1):
  Let’s work through this step by step: Starting from two bundles 𝑦, 𝑧 in the upper contour set
  𝑈𝐶𝑆(𝑥) = {𝑦: 𝑦 ≽ 𝑥}: 1. By definition of 𝑈𝐶𝑆(𝑥): 𝑦 ≽ 𝑥 and 𝑧 ≽ 𝑥 2. For any 𝜆 ∈ (0, 1), form the convex
  combination 𝜆𝑦 + (1 − 𝜆)𝑧 3. Convex UCS assumption: this mixture also belongs to 𝑈𝐶𝑆(𝑥) 4.
  Therefore 𝜆𝑦 + (1 − 𝜆)𝑧 ≽ 𝑥
  Here’s what’s really going on: The upper contour set is a convex set — if two bundles are both at
  least as good as 𝑥, then any weighted average of them is also at least as good as 𝑥. This is
  equivalent to Definition 1.


                                              𝜆𝑦 + (1 − 𝜆)𝑧 ≽ 𝑥
Equivalence: The two definitions are equivalent. Both capture the idea that you prefer
averages to extremes (diversification).
Strong convexity: For every 𝑥, 𝑦 where 𝑥 ≠ 𝑦 and 𝑥 ≽ 𝑧, 𝑦 ≽ 𝑧, then for all 𝜆 ∈ (0, 1):


  Let’s walk through this: Starting from two distinct bundles 𝑥 ≠ 𝑦, both at least as good as 𝑧 (𝑥 ≽ 𝑧
  , 𝑦 ≽ 𝑧): 1. Form the convex combination 𝜆𝑥 + (1 − 𝜆)𝑦 for any 𝜆 ∈ (0, 1) 2. Weak convexity would
  give: 𝜆𝑥 + (1 − 𝜆)𝑦 ≽ 𝑧 3. Strong convexity strengthens this: the mixture is strictly better than 𝑧:
  𝜆𝑥 + (1 − 𝜆)𝑦 ≻ 𝑧
  Here’s what’s really going on: Mixing distinct equally-good bundles yields a strictly preferred
  bundle. This rules out linear (flat) segments on indifference curves — ICs are strictly bowed inward,
  guaranteeing a unique optimal bundle.


                                              𝜆𝑥 + (1 − 𝜆)𝑦 ≻ 𝑧

 Property                                                  Convexity                   Strong Convexity

 Convex combination of
                                                     At least as good                        Strictly better
 equally-good bundles

 IC shape                                    Can have flat segments                Strictly bowed inward

 Utility representation                                 Quasiconcave                Strictly quasiconcave

                                         Convex set (possibly multi-
 Walrasian demand                                                                  Single-valued (unique)
                                                               valued)

 Example: 𝑈 = 𝑎𝑋 + 𝑏𝑌                         Convex but NOT strict                                         No

 Example: 𝑈 = min⁡{𝑎𝑋, 𝑏𝑌}                    Convex but NOT strict                                         No
                 𝛼 𝛽
 Example: 𝑈 = 𝑋 𝑌                                                 Both                                      Yes



  Solved Question (Q3, 10/4 marks): What are the twin definitions of convexity? How differ
  from strong convexity? Graphical.


Answer: See definitions above. The graphical distinction: strict convexity shows ICs strictly
bowed toward the origin – the chord connecting any two points on the same IC lies entirely
above the IC (strictly preferred region). Weak convexity allows the chord to coincide with the
IC (linear segments, as in perfect substitutes).


  Exam Tip: For 4-mark questions: give both definitions, state they are equivalent, then contrast
  with strong convexity in one sentence. Drawing the IC shapes (strictly bowed vs. linear segments)
  is worth extra marks.
  Solved Question (Q4, 5 marks): Show: Convexity of preference ⇔ UCS(x) convex ⇔ 𝑢(⋅)
  quasiconcave.


Answer:
We prove the chain of equivalences:
(1) Convexity of preference ⇔ UCS(x) is convex: By Definition 2 of convexity, preferences
are convex if and only if the upper contour set of every bundle is convex. The equivalence is
definitional.
(2) UCS(x) is convex ⇔ 𝑢(⋅) is quasiconcave:
Define quasiconcavity: A function 𝑢(⋅) is quasiconcave if for all 𝑥, 𝑦 ∈ 𝑋 and 𝜆 ∈ (0, 1):


  Let’s derive this together: Starting from the convex-UCS property of preferences: 1. Take any
  two bundles 𝑥, 𝑦 and let 𝑚 = min⁡{𝑢(𝑥), 𝑢(𝑦)} be the lower utility level 2. Both 𝑥 and 𝑦 belong to 𝑈𝐶𝑆(𝑧)
  where 𝑧 is the bundle achieving 𝑢(𝑧) = 𝑚 3. Since 𝑈𝐶𝑆(𝑧) is convex, 𝜆𝑥 + (1 − 𝜆)𝑦 ∈ 𝑈𝐶𝑆(𝑧) 4. Hence
  𝑢(𝜆𝑥 + (1 − 𝜆)𝑦) ≥ 𝑚 = min⁡{𝑢(𝑥), 𝑢(𝑦)}
  Here’s what’s really going on: The utility of an average bundle is at least the minimum of the two
  utilities. This is the analytic expression of convex preferences — it ensures upper contour sets are
  convex sets.


                                         𝑢(𝜆𝑥 + (1 − 𝜆)𝑦) ≥ min⁡{𝑢(𝑥), 𝑢(𝑦)}
Proof ( ⇒ ): - Assume UCS is convex for all bundles. - Take 𝑥, 𝑦. Let 𝑚 = min⁡{𝑢(𝑥), 𝑢(𝑦)}. Let 𝑧 be
the bundle achieving 𝑢(𝑧) = 𝑚. - Then both 𝑥 and 𝑦 lie in 𝑈𝐶𝑆(𝑧) because 𝑢(𝑥) ≥ 𝑚 and 𝑢(𝑦) ≥ 𝑚. -
By convexity of 𝑈𝐶𝑆(𝑧), 𝜆𝑥 + (1 − 𝜆)𝑦 lies in 𝑈𝐶𝑆(𝑧). - Hence 𝑢(𝜆𝑥 + (1 − 𝜆)𝑦) ≥ 𝑚 = min⁡{𝑢(𝑥), 𝑢(𝑦)}. -
Therefore 𝑢 is quasiconcave.
Proof ( ⇐ ): - Assume 𝑢 is quasiconcave. - Take any 𝑧 and any 𝑥, 𝑦 ∈ 𝑈𝐶𝑆(𝑧), so 𝑢(𝑥) ≥ 𝑢(𝑧) and
𝑢(𝑦) ≥ 𝑢(𝑧). - Then min⁡{𝑢(𝑥), 𝑢(𝑦)} ≥ 𝑢(𝑧). - By quasiconcavity: 𝑢(𝜆𝑥 + (1 − 𝜆)𝑦) ≥ min⁡{𝑢(𝑥), 𝑢(𝑦)} ≥ 𝑢(𝑧).
- Hence 𝜆𝑥 + (1 − 𝜆)𝑦 ∈ 𝑈𝐶𝑆(𝑧), so 𝑈𝐶𝑆(𝑧) is convex.
Chain complete: Convexity of preference ⇔ UCS convex ⇔ quasiconcave utility.


  Exam Tip: This is a standard equivalence proof. For 5 marks: state each equivalence clearly, prove
  the key direction (UCS convex ⇔ quasiconcave), and show the chain.




  Reference — Munoz-Garcia (§1.7, pp.25-28):
  Munoz-Garcia emphasizes a crucial distinction: concavity implies quasiconcavity, but
  quasiconcavity does NOT imply concavity.

        Concave utility: 𝑢(𝛼𝑥 + (1 − 𝛼)𝑦) ≥ 𝛼𝑢(𝑥) + (1 − 𝛼)𝑢(𝑦) (diminishing marginal utility in all
        directions).
        Quasiconcave utility: 𝑢(𝛼𝑥 + (1 − 𝛼)𝑦) ≥ min⁡{𝑢(𝑥), 𝑢(𝑦)} (convex upper contour sets).

  Example: 𝑢(𝑥1 , 𝑥2 ) = 𝑥1/4 1/4
                          1 𝑥2 satisfies both concavity and quasiconcavity. Its monotonic
                                  1/4 1/4 6   6/4 6/4
  transformation 𝑣(𝑥1 , 𝑥2 ) = (𝑥1 𝑥2 ) = 𝑥1 𝑥2         is convex (not concave) yet still quasiconcave –
  because it represents the same preferences! This is why we require quasiconcavity (not concavity)
  for utility functions: it is preserved under monotonic transformations, while concavity is not.



  Reference — Koutsoyiannis (Ch.2, pp.18-24):
  Koutsoyiannis provides the classic textbook treatment of indifference curve geometry. The four
  fundamental properties of indifference curves are:
      1. Negative slope: If the quantity of one good decreases, the quantity of the other must
        increase to maintain constant utility.
      2. Higher curves = higher utility: Curves farther from the origin represent higher
        satisfaction.
      3. Non-intersecting: If two ICs intersected, the intersection point would imply two different
        utility levels, which is impossible.
      4. Convex to the origin: The MRS diminishes as we move along the curve – you require
        increasingly more of one good to compensate for giving up units of the other.

  On the role of MRS: Koutsoyiannis emphasizes that the indifference-curve approach avoids direct
  measurement of marginal utility by working with the MRS (ratio of marginal utilities). The first-
  order condition for consumer equilibrium, 𝑀𝑅𝑆𝑥𝑦 = 𝑝𝑥 /𝑝𝑦 , is identical to the cardinalist condition
  𝑀𝑈𝑥 /𝑝𝑥 = 𝑀𝑈𝑦 /𝑝𝑦 , but requires only ordinal utility. The second-order condition is guaranteed by the
  convexity of indifference curves (diminishing MRS).
  Special cases: - Perfect substitutes: Linear ICs; corner solutions (“monomania”) possible. -
  Perfect complements: Right-angle ICs; no substitution possible; standard tangency analysis
  breaks down.




Debreu Utility Existence Theorem

Why this matters for your exam: This theorem tells you when preferences can actually be
represented by a utility function — and the key is continuity. Without it, you can have perfectly
rational preferences that are impossible to work with mathematically.


  Solved Question (Q5, 5 marks): Prove: Monotonicity + continuity → utility function
  exists.


Theorem (Debreu): If a preference relation ≽ satisfies monotonicity and continuity on
𝑋 = ℝ𝑁+ , then there exists a continuous utility function 𝑢: 𝑋 → ℝ representing ≽ .
Proof sketch:

   1. Let 𝟎 = (0, 0, …, 0). For any bundle 𝑥 ≠ 𝟎, by monotonicity 𝑥 ≽ 𝟎.
   2. Let 𝑚 = max⁡{𝑥1 , 𝑥2 , …, 𝑥𝑁 }. Define 𝑀 = (𝑚, 𝑚, …, 𝑚) – a bundle on the 45-degree line with all
     components equal to 𝑚.
   3. By monotonicity: 𝑀 ≽ 𝑥 ≽ 𝟎.
   4. Both 𝟎 and 𝑀 lie on the main diagonal (equal amounts of all goods).
   5. Define the set 𝐴 = {𝑡 ∈ [0, 𝑚]: (𝑡, 𝑡, …, 𝑡) ≼ 𝑥} and 𝐵 = {𝑡 ∈ [0, 𝑚]: (𝑡, 𝑡, …, 𝑡) ≽ 𝑥}.
            Monotonicity ensures 𝐴 and 𝐵 are non-empty and partition [0, 𝑚].
            By continuity, both 𝐴 and 𝐵 are closed, so the intersection is non-empty.
            Hence there exists a unique 𝑡(𝑥) such that (𝑡(𝑥), 𝑡(𝑥), …, 𝑡(𝑥)) ∼ 𝑥.
   6. Define 𝑢(𝑥) = 𝑡(𝑥). This is a real number representing the utility of 𝑥.
   7. For any two bundles 𝑥, 𝑦: 𝑥 ≽ 𝑦 iff 𝑡(𝑥) ≥ 𝑡(𝑦) iff 𝑢(𝑥) ≥ 𝑢(𝑦).

Here’s what’s really going on: Think of it like projecting every bundle onto the 45-degree
line by finding the unique indifference curve intersection. That projection 𝑡(𝑥) becomes the
utility number.


  Exam Tip: Memorize the structure: 𝟎 → 𝑀 → 𝑡(𝑥) → 𝑢(𝑥) = 𝑡(𝑥). Lexicographic preferences violate
  continuity and cannot be represented – a key counterexample.
  Reference — Munoz-Garcia (§1.9.5-1.10, pp.45-50) — Lexicographic Preferences: The
  Critical Counterexample:
  A preference relation that is complete, transitive, strictly monotonic, and strictly convex, yet
  NOT continuous and cannot be represented by any utility function.
  Definition: A bundle 𝑥 = (𝑥1 , 𝑥2 ) is weakly preferred to 𝑦 = (𝑦 , 𝑦 ), written (𝑥1 , 𝑥2 ) ≽ (𝑦 , 𝑦 ), if and
                                                                     1   2                        1   2
  only if: - 𝑥1 > 𝑦1 , or - 𝑥1 = 𝑦1 and 𝑥2 > 𝑦2 .
  This works like alphabetizing a dictionary – good 1 is the “primary” criterion.
  Properties: - Complete: For any two bundles, either 𝑥1 > 𝑦1 , 𝑦1 > 𝑥1 , or 𝑥1 = 𝑦1 in which case the
  comparison of 𝑥2 and 𝑦 decides. - Transitive: The lexicographic ordering on real numbers is
                            2
  transitive. - Strictly monotone: Increasing either good strictly improves the bundle. - Strictly
  convex: If 𝑥 ≽ 𝑧 and 𝑦 ≽ 𝑧, the convex combination is strictly preferred to 𝑧. - NOT continuous:
              𝑛                 𝑛                    𝑛     𝑛                           𝑛
  Consider 𝑥 = (1/𝑛, 0) and 𝑦 = (0, 1). For all 𝑛, 𝑥 ≻ 𝑦 (since 1/𝑛 > 0). But lim⁡𝑥 = (0, 0) and
  lim⁡𝑦𝑛 = (0, 1). At the limit, (0, 1) ≻ (0, 0) – a preference reversal. Hence continuity fails. - No utility
  representation: The indifference set of any bundle is a singleton (only the bundle itself). The UCS
  and LCS partition the space leaving no room for other indifferent bundles, which makes
  representing this preference with a real-valued utility function impossible.
  Exam significance: Whenever asked “can every rational preference be represented by a utility
  function?” cite lexicographic preferences. The answer is NO – continuity is also required.




Continuity of Preferences

Why this matters for your exam: Continuity is the technical condition that bridges
preferences to utility functions. Without it, your demand functions could jump discontinuously
when prices change slightly — not very useful for economic analysis.
A preference relation ≽ is continuous if it is preserved under limits: for sequences 𝑥𝑛 → 𝑥,
𝑦𝑛 → 𝑦, 𝑥𝑛 ≽ 𝑦𝑛 for all 𝑛 ⟹ 𝑥 ≽ 𝑦.
Equivalent definition: For every 𝑥, both 𝑈𝐶𝑆(𝑥) and 𝐿𝐶𝑆(𝑥) are closed sets.
Economic role: Continuity rules out “jumps” in preferences – small changes in consumption
cannot cause abrupt preference reversals. It is necessary for utility representation and ensures
demand correspondences are upper hemicontinuous.


Utility Functions & Desirability

Why this matters for your exam: Utility functions are the tool you’ll actually use to solve
problems. The key insight: only the ranking matters, not the numbers. And “more is better”
has two different formal versions that matter for proofs.


  Solved Question (Q6, 10/5 marks): Define utility function. Explain desirability by
  monotonicity and strong monotonicity.


Answer:
Utility function: A function 𝑢: 𝑋 → ℝ that represents preference relation ≽ if, for every
𝑥, 𝑦 ∈ 𝑋:

  Let’s work through this step by step: Starting from the definition of a utility representation: 1. A
  utility function 𝑢: 𝑋 → ℝ represents preferences ≽ if it preserves the preference ordering 2. For
  any two bundles 𝑥, 𝑦: 𝑥 is weakly preferred to 𝑦 if and only if 𝑢(𝑥) is at least as large as 𝑢(𝑦) 3.
  Mathematically: 𝑥 ≽ 𝑦 ⇔ 𝑢(𝑥) ≥ 𝑢(𝑦)
  Here’s what’s really going on: Utility numbers are ordinal ranking devices — only the
  comparison matters, not the absolute value. Any strictly increasing transformation 𝑓(𝑢(𝑥))
  represents the same preferences.


                                            𝑥 ≽ 𝑦 ⇔ 𝑢(𝑥) ≥ 𝑢(𝑦)
Properties of utility representation: - Only the ranking matters (ordinality), not the
numerical magnitude (cardinality). - Any strictly increasing transformation 𝑣 = 𝑓(𝑢(𝑥)) also
represents the same preferences. - Example: 𝑢 = 𝑥𝛼 𝑦𝛽 and 𝑣 = 𝛼ln𝑥 + 𝛽ln𝑦 represent the same
preferences.
Desirability assumptions formalize “more is better”:
Monotonicity: - For all 𝑥 ≠ 𝑦: - (a) If 𝑥𝑘 ≥ 𝑦𝑘 for ALL goods 𝑘, then 𝑥 ≽ 𝑦. - (b) If 𝑥𝑘 > 𝑦𝑘 for ALL
goods 𝑘, then 𝑥 ≻ 𝑦.
Strong monotonicity: - For all 𝑥 ≠ 𝑦: if 𝑥𝑘 ≥ 𝑦𝑘 for all goods 𝑘 AND 𝑥𝑙 > 𝑦𝑙 for at least one good
𝑙, then 𝑥 ≻ 𝑦.

 Criterion                                           Monotonicity             Strong Monotonicity

 One good increases, others
                                       Only weakly better (𝑥 ≽ 𝑦)               Strictly better (𝑥 ≻ 𝑦)
 same

 All goods increase                                   Strictly better                   Strictly better

 Example: 𝑢 = min⁡{𝑥1 , 𝑥2 }                 Satisfies monotonicity                            Violates

 Example: 𝑢 = 𝑥1 + 𝑥2                                       Satisfies                          Satisfies

 LNS implied?                                                     Yes                   Yes (stronger)



Local Non-Satiation (LNS)

Why this matters for your exam: LNS is the weakest “more is better” assumption and the
one you need for Walras’ Law and many duality results. Memorize which assumptions imply
which — it’s a classic exam question.


  Solved Question (Q7, 5 marks): Show: Strong Monotonicity ⇒ Monotonicity ⇒ LNS.


Answer:
LNS definition: For every 𝑥 ∈ 𝑋 and 𝜀 > 0, there exists 𝑦 with ∥ 𝑦 − 𝑥 ∥ < 𝜀 such that 𝑦 ≻ 𝑥. You
are never fully satiated — there’s always something nearby you’d prefer.
(1) Strong Monotonicity ⇒ Monotonicity: - Take any 𝑥 ≠ 𝑦. - For (a): If 𝑥𝑘 ≥ 𝑦𝑘 for all 𝑘,
then by strong monotonicity: if 𝑥𝑙 > 𝑦 for any 𝑙, 𝑥 ≻ 𝑦. If 𝑥 = 𝑦 (equal in all components), then
                                        𝑙
𝑥 ∼ 𝑦. Either way, 𝑥 ≽ 𝑦. - For (b): If 𝑥𝑘 > 𝑦𝑘 for ALL 𝑘, then clearly 𝑥𝑘 ≥ 𝑦𝑘 for all 𝑘 and 𝑥𝑙 > 𝑦𝑙
for at least one 𝑙 (in fact, all). So by strong monotonicity, 𝑥 ≻ 𝑦.
(2) Monotonicity ⇒ LNS: - Take any bundle 𝑥 = (𝑥1 , 𝑥2 , …, 𝑥𝑁 ) and any 𝜀 > 0. - Construct
𝑦 = (𝑥1 + 𝛿, 𝑥2 + 𝛿, …, 𝑥𝑁 + 𝛿) where 𝛿 = 𝜀/√𝑁 > 0. - Then 𝑦𝑘 > 𝑥𝑘 for ALL 𝑘, so by monotonicity
                                                                   2
(condition b), 𝑦 ≻ 𝑥. - The Euclidean distance ∥ 𝑦 − 𝑥 ∥ = √𝑁𝛿 = 𝛿√𝑁 = 𝜀. - Therefore for any
𝜀 > 0 we found a 𝑦 within 𝜀 of 𝑥 that is strictly preferred.
Chain: Strong Monotonicity ⇒ Monotonicity ⇒ LNS.
Note: The converse does NOT hold. LNS does not imply monotonicity.
  Exam Tip: For 5 marks: prove each arrow cleanly. The trick for M ⇒ LNS is increasing all goods
  by 𝛿 = 𝜀/√𝑁 – increasing only one good under plain monotonicity yields only weak preference.




  Reference — Munoz-Garcia (§1.5, Example 1.8, pp.29-33) — Testing Properties of
  Preference Relations:
  Munoz-Garcia systematically tests a preference relation defined as: 𝑥 ≽ 𝑦 if and only if 𝑥𝑘 ≥ 𝑦𝑘 for
  every good 𝑘 (i.e., bundle 𝑥 contains weakly more of every good than bundle 𝑦).
  Results of the test:


   Property                                                        Verdict    Explanation

                                                                              Consider 𝑥 = (3, 1) and
                                                                              𝑦 = (1, 3). Neither 𝑥 ≥ 𝑦 in
                                                                              all components (good 1:
   Completeness                                                ✗ Violated     3 ≥ 1 ✓, good 2: 1 ≥ 3 ✗)
                                                                              nor 𝑦 ≥ 𝑥 (good 1: 1 ≥ 3
                                                                              ✗). So neither 𝑥 ≽ 𝑦 nor
                                                                              𝑦 ≽ 𝑥 holds.

                                                                              If 𝑥 ≥ 𝑦 and 𝑦 ≥ 𝑧
                                                                              component-wise, then
   Transitivity                                                 ✓ Satisfied
                                                                              𝑥 ≥ 𝑧 by transitivity of ≥
                                                                              .

                                                                              If 𝑥 ≥ 𝑦 and 𝑥 ≠ 𝑦, then at
   Strong monotonicity                                          ✓ Satisfied   least one component is
                                                                              strictly larger, so 𝑥 ≻ 𝑦.

                                                                              If 𝑥 ≽ 𝑧 and 𝑦 ≽ 𝑧, then
                                                                              𝑥𝑘 ≥ 𝑧𝑘 and 𝑦𝑘 ≥ 𝑧𝑘 for
                                                                              all 𝑘, so
   Strict convexity                                             ✓ Satisfied
                                                                              𝛼𝑥𝑘 + (1 − 𝛼)𝑦𝑘 ≥ 𝑧𝑘 with
                                                                              strict inequality for at
                                                                              least one 𝑘.

                                                                              For any 𝑥, increase both
                                                                              components by 𝜀/2 to get
   LNS                                                          ✓ Satisfied
                                                                              𝑦 within 𝜀-ball with 𝑦 ≻ 𝑥
                                                                              .


  Key insight from this example: A preference relation can satisfy transitivity, strong monotonicity,
  strict convexity, and LNS – yet fail completeness. This demonstrates that these properties are
  logically independent: satisfying one set does not guarantee the others.




1.2 Homogeneity, Homotheticity & MRS

Why this matters for your exam: These properties tell you how demand responds when
everything scales — double all prices and income, what happens? Homotheticity is the
assumption that makes Engel curves linear, and MRS is the single most important concept for
solving consumer optimization problems.

Homogeneous Functions
   Solved Question (Q8, 5/4 marks): Examine (i) Homogeneity (ii) Homotheticity.


A function 𝑓: ℝ𝑁+ → ℝ is homogeneous of degree 𝑘 if scaling all arguments by 𝑎 > 0 multiplies
the function value by 𝑎𝑘 :


   Let’s derive this together: Starting from the definition of degree-𝑘 homogeneity: 1. Take a
   function 𝑓: ℝ𝑁+ → ℝ and scale every argument by factor 𝑎 > 0 2. If the function value scales by 𝑎𝑘 , we
   say 𝑓 is homogeneous of degree 𝑘 (HD(𝑘)) 3. Formal statement:
   𝑓(𝑎𝑥1 , 𝑎𝑥2 , …, 𝑎𝑥𝑁 ) = 𝑎𝑘 𝑓(𝑥1 , 𝑥2 , …, 𝑥𝑁 )
   Here’s what’s really going on: Proportional scaling of all inputs yields a proportional scaling of
   output. For utility functions, HD(1) means doubling consumption doubles utility; HD(0) means
   scaling has no effect on utility.


                                 𝑓(𝑎𝑥1 , 𝑎𝑥2 , …, 𝑎𝑥𝑁 ) = 𝑎𝑘 𝑓(𝑥1 , 𝑥2 , …, 𝑥𝑁 )
Key properties: 1. Derivatives of an HD(𝑘) function are HD(𝑘 − 1). 2. MRS is HD(0):
𝑀𝑅𝑆𝑖𝑗 (𝑎𝑥) = 𝑀𝑅𝑆𝑖𝑗 (𝑥) (constant along rays). 3. Euler’s theorem: ∑𝑁𝑖 = 1 (𝜕𝑓/𝜕𝑥𝑖 ) ⋅ 𝑥𝑖 = 𝑘𝑓(𝑥).
Examples: Cobb-Douglas 𝑢 = 𝑥𝛼 𝑦𝛽 : HD(𝛼 + 𝛽); Perfect substitutes 𝑢 = 𝑎𝑥 + 𝑏𝑦: HD(1); Perfect
complements 𝑢 = min⁡{𝑎𝑥, 𝑏𝑦}: HD(1); CES: HD(1).

Homothetic Preferences

Why this matters for your exam: Homothetic preferences are the workhorses of exam
problems — Cobb-Douglas, CES, perfect substitutes, perfect complements are all homothetic.
Know what that implies for demand.
A utility function 𝑢(𝑥) is homothetic if it is a monotonic transformation of a homogeneous
function: 𝑢(𝑥) = 𝑔(𝑣(𝑥)) where 𝑔 is strictly increasing and 𝑣 is homogeneous of some degree.
Equivalent condition: 𝑥 ∼ 𝑦 ⟹ 𝛼𝑥 ∼ 𝛼𝑦 for all 𝛼 > 0.
Key properties: 1. MRS depends only on the ratio of goods (𝑥1 /𝑥2 ), not on the consumption
scale or utility level. 2. Indifference curves are radial expansions. 3. Engel curves are straight
lines through the origin (income elasticity = 1). 4. Walrasian demand linear in income:
𝑥(𝑝, 𝑤) = 𝑤 ⋅ 𝑥(𝑝, 1).
Homogeneous vs Homothetic: - All homogeneous functions are homothetic (take 𝑔 as
identity). - Not all homothetic functions are homogeneous. Counterexample: 𝑢(𝑥, 𝑦) = 𝑥𝑦 + 𝑎 is
homothetic (monotonic transform of 𝑥𝑦 which is HD(2)) but NOT homogeneous.


 Feature                                                      Homogeneous                       Homothetic

 Scaling property                                               𝑢(𝑎𝑥) = 𝑎𝑘 𝑢(𝑥)               𝑢(𝑎𝑥) = 𝑔(𝑎𝑘 𝑣(𝑥))

 MRS along rays                                                     Constant                         Constant

 Engel curves                                    Straight line through origin     Straight line through origin

                                                                                   CD, linear, Leontief + any
 Examples                                            CD, linear, Leontief, CES
                                                                                   monotonic transformation


   Exam Tip: The counterexample 𝑢 = 𝑥𝑦 + 𝑎 (homothetic but not homogeneous) is a make-or-break
   example – examiners specifically look for it.
  Reference — Munoz-Garcia (§1.9.1-1.9.3, pp.39-44) — Formal Proof that Homotheticity
  Does NOT Imply Homogeneity:
  Munoz-Garcia provides the formal proof. Take 𝑣(𝑥1 , 𝑥2 ) = 𝑥1 𝑥2 , which is HD(2). Apply the monotonic
  transformation 𝑔(𝑦) = 𝑦 + 𝑎, where 𝑎 > 0, yielding 𝑢(𝑥1 , 𝑥2 ) = 𝑥1 𝑥2 + 𝑎. Then:


     Here’s the derivation: Starting from 𝑢(𝑥1 , 𝑥2 ) = 𝑥1 𝑥2 + 𝑎, which is homothetic but claimed to
     be non-homogeneous: 1. Scale both arguments by 𝛼: 𝑢(𝛼𝑥1 , 𝛼𝑥2 ) = (𝛼𝑥1 )(𝛼𝑥2 ) + 𝑎 = 𝛼2 (𝑥1 𝑥2 ) + 𝑎 2.
     Compare to the homogeneity requirement: 𝛼𝑘 (𝑥1 𝑥2 + 𝑎) = 𝛼𝑘 𝑥1 𝑥2 + 𝛼𝑘 𝑎 3. The 𝛼2 (𝑥1 𝑥2 ) term
     suggests 𝑘 = 2, but the 𝑎 term would scale by 𝛼2 when it should scale by 𝛼𝑘 4. No single 𝑘
     satisfies the condition for all 𝛼 — not homogeneous (yet homothetic!)
     Here’s what’s really going on: Adding a constant to a homogeneous function preserves
     homotheticity (it is a monotonic transformation 𝑔(𝑦) = 𝑦 + 𝑎) but destroys homogeneity — the
     constant term doesn’t scale proportionally.


                          𝑢(𝛼𝑥1 , 𝛼𝑥2 ) = (𝛼𝑥1 )(𝛼𝑥2 ) + 𝑎 = 𝛼2 (𝑥1 𝑥2 ) + 𝑎 ≠ 𝛼𝑘 (𝑥1 𝑥2 + 𝑎)
  for any single 𝑘. Thus 𝑢 is not homogeneous but is homothetic (since 𝑔 is strictly increasing).
  Example 1.9 (Testing for homotheticity): Is ln⁡(𝑥0.3 0.6                        0.3 0.6
                                                   1 𝑥2 ) homothetic? Yes. Since 𝑥1 𝑥2 is HD(0.9)
  (and concave because 𝛼 + 𝛽 = 0.9 < 1), applying the monotonic transformation ln⁡(⋅) preserves
  homotheticity. By the same argument, it is also quasiconcave.




Marginal Rate of Substitution (MRS)

Why this matters for your exam: MRS is the single concept you’ll use most — it’s the slope
of the indifference curve, and the tangency condition 𝑀𝑅𝑆 = 𝑝 /𝑝 is the first step in solving
                                                                            𝑥   𝑦
almost every consumer optimization problem.
The MRS between goods 𝑖 and 𝑗 measures the rate at which you are willing to trade good 𝑗 for
good 𝑖 while maintaining constant utility:


  Let’s derive this together: Starting from the total differential of the utility function along an
                                                        𝑁      𝜕𝑢 𝑑𝑥 2. Along an indifference curve, 𝑑𝑢 = 0
  indifference curve: 1. Total change in utility: 𝑑𝑢 = ∑            𝑘
                                                        𝑘 = 1 𝜕𝑥𝑘
  (utility is constant) 3. For a change involving only goods 𝑖 and 𝑗: 𝜕𝑥𝜕𝑢 𝑑𝑥 + 𝜕𝑢 𝑑𝑥 = 0 4. Rearranging:
                                                                          𝑖
                                                                             𝑖  𝜕𝑥𝑗  𝑗
    𝑑𝑥𝑗   𝜕𝑢/𝜕𝑥𝑖
  − 𝑑𝑥 = 𝜕𝑢/𝜕𝑥 ≡ 𝑀𝑅𝑆𝑖𝑗 (𝑥)
      𝑖        𝑗

  Here’s what’s really going on: The MRS measures your willingness to trade one good for another
  while keeping utility constant — the subjective rate of exchange between goods 𝑖 and 𝑗.


                                                       𝑀𝑈𝑖 (𝑥) 𝜕𝑢/𝜕𝑥𝑖
                                         𝑀𝑅𝑆𝑖𝑗 (𝑥) =          =
                                                       𝑀𝑈𝑗 (𝑥) 𝜕𝑢/𝜕𝑥𝑗
Along an indifference curve (𝑑𝑢 = 0): 𝑀𝑅𝑆𝑖𝑗 = −𝑑𝑥𝑗 /𝑑𝑥𝑖 |               .
                                                               𝑑𝑢 = 0
Here’s the key — and it’s beautiful: The MRS is invariant to monotonic transformations of
utility (the ratio 𝑀𝑈𝑖 /𝑀𝑈𝑗 cancels out), making it a “real” economic object. At an interior UMP
optimum, 𝑀𝑅𝑆𝑖𝑗 = 𝑝𝑖 /𝑝𝑗 .



  Solved Question (Q9, 8 marks): Prove quasi-concave utility 𝑈(𝑋, 𝑌) ⇔ 𝑑𝑀𝑅𝑆/𝑑𝑋 < 0.


Answer:
We prove: quasiconcavity of utility (convex preferences) is equivalent to diminishing MRS
along an indifference curve.
Step 1 – MRS formula:
For utility 𝑢(𝑥, 𝑦),

                                                                                                           𝑀𝑈
  Let’s walk through this step by step: Specializing to two goods (𝑥 and 𝑦): 1. 𝑀𝑅𝑆𝑥𝑦 = 𝑀𝑈𝑥 = 𝜕𝑢/𝜕𝑥
                                                                                              𝜕𝑢/𝜕𝑦 2.       𝑦

  This ratio tells us how many units of 𝑦 you would give up to get one more unit of 𝑥 while staying on
  the same indifference curve
  Here’s what’s really going on: The MRS is the absolute slope of the indifference curve at a given
  point. It changes as we move along the IC — normally diminishing as 𝑥 increases.


                                                           𝑀𝑈𝑥 𝜕𝑢/𝜕𝑥
                                                 𝑀𝑅𝑆𝑥𝑦 =      =
                                                           𝑀𝑈𝑦 𝜕𝑢/𝜕𝑦
Along an indifference curve, 𝑑𝑢 = 0:


  Let’s work through this: Starting from total differential of 𝑢(𝑥, 𝑦) along an indifference curve: 1.
                                                                                                         𝑑𝑦
  𝑑𝑢 = 𝜕𝑢       𝜕𝑢                                                        𝜕𝑢      𝜕𝑢
       𝜕𝑥 𝑑𝑥 + 𝜕𝑦 𝑑𝑦 2. Set 𝑑𝑢 = 0 (by definition of moving along an IC): 𝜕𝑥 𝑑𝑥 + 𝜕𝑦 𝑑𝑦 = 0 3. Solve for 𝑑𝑥 :
  𝑑𝑦
  𝑑𝑥
     = − 𝜕𝑢/𝜕𝑥
         𝜕𝑢/𝜕𝑦
               = −𝑀𝑅𝑆
  Here’s what’s really going on: The slope of the indifference curve equals the negative of the
  MRS. The negative sign reflects the tradeoff: to get more 𝑥 (increase 𝑑𝑥), you must sacrifice some 𝑦
  (𝑑𝑦 negative).


                                                           𝑑𝑦
                                  𝑑𝑢 = 𝜕𝑢 𝑑𝑥 + 𝜕𝑢 𝑑𝑦 = 0 ⇒    = − 𝜕𝑢/𝜕𝑥 = −𝑀𝑅𝑆
                                       𝜕𝑥      𝜕𝑦          𝑑𝑥     𝜕𝑢/𝜕𝑦
Step 2 – Quasiconcavity condition (bordered Hessian):
For a function of two variables, the (3 × 3) bordered Hessian is:


  Let’s derive this together: Starting from the second-order condition for quasiconcavity of a two-
  variable function: 1. The bordered Hessian 𝐻¯ augments the regular Hessian matrix of second
  derivatives with a border of first derivatives (the “bordered” refers to the first row/column of zeros
  and first partials) 2. The (3 × 3) matrix is constructed as: - Top-left: 0 - First row/column (rest): 𝑢𝑥 , 𝑢𝑦
                                                                        𝑢𝑥𝑥   𝑢𝑥𝑦
  (the first partials) - Lower-right (2 × 2) block: the Hessian [
                                                                        𝑢𝑦𝑥   𝑢𝑦𝑦 ] 3. For quasiconcavity, the
  principal minors must alternate in sign: |𝐻¯ 2 | ≥ 0
  Here’s what’s really going on: The bordered Hessian determinant test checks whether the
  indifference curves are convex — it encodes the curvature of the utility function’s level sets, which
  is what matters for well-behaved preferences.


$$ =
                                                    0 𝑢𝑥 𝑢𝑦
                                                  ∣ 𝑢𝑥 𝑢𝑥𝑥 𝑢𝑥𝑦 ∣
                                                    𝑢𝑦 𝑢𝑦𝑥 𝑢𝑦𝑦
$$
For quasiconcavity, the principal minors must alternate in sign: |𝐻¯ 2 | ≥ 0. This simplifies to:


  Here’s the derivation: Starting from the (3 × 3) bordered Hessian determinant: 1. Expand
  |𝐻|
   ¯
      = 0 ⋅ (𝑢𝑥𝑥 𝑢𝑦𝑦 − 𝑢2𝑥𝑦 ) − 𝑢𝑥 (𝑢𝑥 𝑢𝑦𝑦 − 𝑢𝑦 𝑢𝑥𝑦 ) + 𝑢𝑦 (𝑢𝑥 𝑢𝑦𝑥 − 𝑢𝑦 𝑢𝑥𝑥 ) 2. Simplify using 𝑢𝑥𝑦 = 𝑢𝑦𝑥 (Young’s
                                                                                  2       2
  theorem — symmetry of cross-partials) 3. Result: 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢𝑥 𝑢𝑦𝑦 − 𝑢𝑦 𝑢𝑥𝑥 4. Quasiconcavity
  requires this expression ≥ 0
  Here’s what’s really going on: This inequality is the mathematical condition for indifference
  curves to be convex. When it holds strictly ( > 0), the utility function is strictly quasiconcave and
  ICs are strictly bowed inward.


                                            2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢2𝑥 𝑢𝑦𝑦 − 𝑢2𝑦 𝑢𝑥𝑥 ≥ 0
Step 3 – 𝑑𝑀𝑅𝑆/𝑑𝑥 derivation:


  Let’s walk through this: Simple restatement of the MRS definition in partial derivative notation:
              𝑀𝑈           𝑢
  1. 𝑀𝑅𝑆𝑥𝑦 = 𝑀𝑈𝑥 = 𝜕𝑢/𝜕𝑥
                   𝜕𝑢/𝜕𝑦 = 𝑢𝑦
                            𝑥
                𝑦

  Here’s what’s really going on: This ratio is the fundamental object in consumer theory — it
  compares the marginal contribution of each good to utility. At an interior optimum, it equals the
  price ratio 𝑝𝑥 /𝑝𝑦 .


                                                            𝑢
                                                      𝑀𝑅𝑆 = 𝑢𝑥
                                                                 𝑦

Differentiate 𝑀𝑅𝑆 with respect to 𝑥 along an indifference curve (total derivative):


  Here’s the derivation: Starting from 𝑀𝑅𝑆 = 𝑢𝑥 /𝑢𝑦 , differentiate with respect to 𝑥 along an
                                                                                   𝑑(𝑢 )
                                                       𝑑(𝑢𝑥 /𝑢𝑦 )  𝑢 ⋅ 𝑑(𝑢𝑥 ) − 𝑢 ⋅ 𝑦
  indifference curve: 1. Apply the quotient rule:         𝑑𝑥
                                                                  = 𝑦 𝑑𝑥 2 𝑥 𝑑𝑥            2. Use the chain rule:
                                                                             𝑢𝑦
  𝑑(𝑢𝑥 )                       𝑑(𝑢 )
   𝑑𝑥
         = 𝑢𝑥𝑥 + 𝑢𝑥𝑦 𝑦′ (𝑥) and 𝑑𝑥𝑦 = 𝑢𝑦𝑥 + 𝑢𝑦𝑦 𝑦′ (𝑥) 3. Substitute 𝑦′ (𝑥) = 𝑑𝑦/𝑑𝑥 = −𝑢𝑥 /𝑢𝑦 (from the IC slope
                                               𝑢 [𝑢 + 𝑢 (−𝑢 /𝑢 )] − 𝑢 [𝑢 + 𝑢 (−𝑢 /𝑢 )]
  condition above) 4. This yields: 𝑑𝑀𝑅𝑆  𝑑𝑥
                                             = 𝑦 𝑥𝑥 𝑥𝑦 𝑥 𝑦 2 𝑥 𝑦𝑥 𝑦𝑦 𝑥 𝑦
                                                                 𝑢𝑦

  Here’s what’s really going on: This expression tracks how the willingness to trade changes as
  you consume more 𝑥 — the slope of the MRS function along the indifference curve.


                                                                     ′                            ′
                          𝑑𝑀𝑅𝑆 = 𝑑(𝑢𝑥 /𝑢𝑦 ) = 𝑢𝑦 [𝑢𝑥𝑥 + 𝑢𝑥𝑦 𝑦 (𝑥)] − 𝑢𝑥 [𝑢𝑦𝑥 + 𝑢𝑦𝑦 𝑦 (𝑥)]
                           𝑑𝑥       𝑑𝑥                            𝑢2𝑦
         ′
Where 𝑦 (𝑥) = 𝑑𝑦/𝑑𝑥 = −𝑢𝑥 /𝑢𝑦 along the IC.
Substituting and simplifying:


  Continuing the derivation: Continuing from the previous expression, simplify algebraically: 1.
                                                                                                      𝑢2𝑥 𝑢𝑦𝑦 − 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 + 𝑢2𝑦 𝑢𝑥𝑥
  Multiply numerator and denominator to clear fractions 2. Collect terms: 𝑑𝑀𝑅𝑆
                                                                           𝑑𝑥
                                                                               =                                                       3.
                                                                                           𝑢3𝑦
               3
  Notice that 𝑢𝑦 > 0 (assuming 𝑀𝑈𝑦 > 0), so the sign depends entirely on the numerator 4. The
                                                                                     2         2
  numerator is exactly the negative of the quasiconcavity condition: −(2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢𝑥 𝑢𝑦𝑦 − 𝑢𝑦 𝑢𝑥𝑥 )
  Here’s what’s really going on: The sign of 𝑑𝑀𝑅𝑆/𝑑𝑥 is opposite to the sign of the bordered Hessian
  determinant — connecting diminishing MRS directly to quasiconcavity.

                                                  2                            2
                                       𝑑𝑀𝑅𝑆 = 𝑢𝑥 𝑢𝑦𝑦 − 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 + 𝑢𝑦 𝑢𝑥𝑥
                                        𝑑𝑥                 𝑢3𝑦
Note this numerator equals −(2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢2𝑥 𝑢𝑦𝑦 − 𝑢2𝑦 𝑢𝑥𝑥 ).
Step 4 – Equivalence: - Quasiconcavity requires: 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢2𝑥 𝑢𝑦𝑦 − 𝑢2𝑦 𝑢𝑥𝑥 ≥ 0 - Equivalently:
𝑢2𝑥 𝑢𝑦𝑦 − 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 + 𝑢2𝑦 𝑢𝑥𝑥 ≤ 0 - This numerator is exactly the numerator of 𝑑𝑀𝑅𝑆/𝑑𝑥 (up to the
positive denominator 𝑢3𝑦 > 0).
Hence:


  Let’s wrap up the derivation: Combining the results above: 1. Quasiconcavity requires:
  2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢2𝑥 𝑢𝑦𝑦 − 𝑢2𝑦 𝑢𝑥𝑥 ≥ 0 2. 𝑑𝑀𝑅𝑆/𝑑𝑥 numerator is: 𝑢2𝑥 𝑢𝑦𝑦 − 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 + 𝑢2𝑦 𝑢𝑥𝑥 ≤ 0 (the negative of the
  QC condition) 3. Since 𝑢3𝑦 > 0, sign(𝑑𝑀𝑅𝑆/𝑑𝑥) = sign(numerator) 4. Therefore: 𝑑𝑀𝑅𝑆          𝑑𝑥
                                                                                                  <0⇔
  quasiconcavity holds
  Here’s what’s really going on: Diminishing MRS (MRS falls as 𝑥 increases) is economically
  equivalent to convex preferences (quasiconcave utility). This is the bridge between the
  mathematical condition and the economic intuition.


                                𝑑𝑀𝑅𝑆 < 0 ⇔ numerator < 0 ⇔ quasiconcavity holds
                                 𝑑𝑥
Interpretation: Diminishing MRS means as 𝑥 increases (substituting for 𝑦), you require
increasingly less 𝑦 to give up for an additional unit of 𝑥 – i.e., the IC flattens as we move right.
This is the graphical manifestation of convex preferences.



  Solved Question (Q10, ~3 marks): Does 𝑈 = 𝑋 + log⁡(𝑌) have convex indifference curves?
  Provide proof.


Answer:
Step 1: Compute MRS. - 𝑢(𝑥, 𝑦) = 𝑥 + ln⁡𝑦 - 𝑀𝑈𝑥 = 1, 𝑀𝑈𝑦 = 1/𝑦 - 𝑀𝑅𝑆𝑥𝑦 = 1/(1/𝑦) = 𝑦
Step 2: Check if MRS is diminishing in 𝑥 along an IC.
Along an indifference curve, 𝑑𝑢 = 0:


  Let’s work through this: Starting from 𝑢(𝑥, 𝑦) = 𝑥 + ln⁡𝑦: 1. Total differential:
  𝑑𝑢 = 𝜕𝑢      𝜕𝑢
       𝜕𝑥 𝑑𝑥 + 𝜕𝑦 𝑑𝑦 = 𝑑𝑥 + 𝑦 𝑑𝑦 2. Along an indifference curve, 𝑑𝑢 = 0: 𝑑𝑥 + 𝑦 𝑑𝑦 = 0 3. Solve for the slope:
                            1                                                 1
  𝑑𝑦
  𝑑𝑥
     = −𝑦
  Here’s what’s really going on: The slope of the indifference curve for this quasilinear utility
  function depends only on 𝑦 — not on 𝑥. As 𝑦 gets smaller (moving right along the IC), the curve
  flattens.


                                                                   𝑑𝑦
                                             𝑑𝑥 + (1/𝑦)𝑑𝑦 = 0 ⇒       = −𝑦
                                                                   𝑑𝑥
Now differentiate 𝑀𝑅𝑆 = 𝑦 with respect to 𝑥 along the IC:


  Let’s continue the derivation: Starting from 𝑀𝑅𝑆 = 𝑦 (computed from 𝑀𝑈𝑥 = 1, 𝑀𝑈𝑦 = 1/𝑦): 1.
  Differentiate MRS with respect to 𝑥 along the IC: 𝑑𝑀𝑅𝑆 = 𝑑𝑦 2. Substitute 𝑑𝑦 = −𝑦 (from the IC slope
                                                          𝑑𝑥       𝑑𝑥            𝑑𝑥
  above) 3. Result: 𝑑𝑀𝑅𝑆
                     𝑑𝑥
                         = −𝑦 < 0 (for any positive 𝑦)
  Here’s what’s really going on: Diminishing MRS confirmed — the MRS falls as 𝑥 increases. Since
  MRS = 𝑦, and 𝑦 falls as we move along the IC, the MRS falls proportionally. Indifference curves are
  convex.


                           𝑑𝑀𝑅𝑆 = 𝑑𝑦 = −𝑦 < 0 (for any positive 𝑦)
                            𝑑𝑥     𝑑𝑥
Conclusion: Yes, MRS declines as 𝑥 increases. Therefore indifference curves are convex
(strictly diminishing MRS).
                                                                                                                 2
Alternative verification via bordered Hessian: - 𝑢𝑥 = 1, 𝑢𝑦 = 1/𝑦, 𝑢𝑥𝑥 = 0, 𝑢𝑥𝑦 = 0, 𝑢𝑦𝑦 = −1/𝑦 -
                                                      2        2             2          2
Bordered Hessian determinant: 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 − 𝑢𝑥 𝑢𝑦𝑦 − 𝑢𝑦 𝑢𝑥𝑥 = 0 + 1/𝑦 + 0 = 1/𝑦 > 0 - Satisfies
quasiconcavity condition, confirming convex ICs.



1.3 Utility Maximization Problem (UMP)

Why this matters for your exam: The UMP is THE problem of consumer theory — maximize
utility subject to a budget constraint. If you can solve this, you can derive demand functions,
and that’s half the exam right there.
Your primal problem as a consumer:


  Let’s set this up step by step: Starting from your objective: 1. Objective: Maximize utility 𝑢(𝑥)
                                         𝑁                                            𝑁
  over all consumption bundles 𝑥 ∈ ℝ+ 2. Constraint: Total spending 𝑝 ⋅ 𝑥 = ∑            𝑝 𝑥 cannot exceed
                                                                                      𝑘=1 𝑘 𝑘
  wealth 𝑤 3. Combine into the constrained optimization: max⁡𝑥 ≥ 0 𝑢(𝑥) s.t. 𝑝 ⋅ 𝑥 ≤ 𝑤
    Here’s what’s really going on: The Utility Maximization Problem (UMP) is your primal problem
    — choose the most-preferred affordable bundle. The solution yields Walrasian (Marshallian)
    demand 𝑥(𝑝, 𝑤) and indirect utility 𝑣(𝑝, 𝑤).


                                                     max𝑢(𝑥) subject to 𝑝 ⋅ 𝑥 ≤ 𝑤
                                                        𝑥≥0
Solution: Walrasian demand 𝑥(𝑝, 𝑤) and indirect utility 𝑣(𝑝, 𝑤) = 𝑢(𝑥(𝑝, 𝑤)).
Sufficient conditions for interior solution: (1) 𝑢 quasiconcave, (2) 𝑢 satisfies LNS, (3) 𝛻𝑢 ≠ 0
.



    Solved Question (1B-Q1, 7 marks): Cobb-Douglas: Derive Walrasian demand, examine
    properties.


                                       𝛽
Consider 𝑢(𝑥1 , 𝑥2 ) = 𝑥𝛼1 𝑥2 , with 𝛼, 𝛽 > 0. Budget: 𝑝 𝑥1 + 𝑝 𝑥2 = 𝑤.
                                                                              1        2
Derivation via tangency condition:
Step 1: Lagrangian: ℒ = 𝑥𝛼1 𝑥𝛽2 + 𝜆(𝑤 − 𝑝 𝑥1 − 𝑝 𝑥2 )
                                                             1        2
Step 2: FOCs:

                                                                                                                          𝛽
    Let’s work through this step by step: Starting from the Cobb-Douglas UMP with 𝑢(𝑥1 , 𝑥2 ) = 𝑥𝛼1 𝑥2 :
                                     𝛽
    1. Write the Lagrangian: ℒ = 𝑥𝛼1 𝑥2 + 𝜆(𝑤 − 𝑝 𝑥1 − 𝑝 𝑥2 ) 2. Take partial derivatives w.r.t. 𝑥1 , 𝑥2 , and 𝜆:
                                                1     2
                 𝛼−1 𝛽                       𝛼 𝛽−1
    - 𝜕ℒ/𝜕𝑥1 = 𝛼𝑥1 𝑥2 − 𝜆𝑝1 = 0 - 𝜕ℒ/𝜕𝑥2 = 𝛽𝑥1 𝑥2  − 𝜆𝑝2 = 0 - 𝜕ℒ/𝜕𝜆 = 𝑤 − 𝑝1 𝑥1 − 𝑝2 𝑥2 = 0 3. These are
    the first-order necessary conditions (FOCs) for an interior optimum
    Here’s what’s really going on: The first two FOCs say the marginal utility of each good, scaled by
    its price, equals the Lagrange multiplier 𝜆 (the “shadow value” of wealth). Hence 𝑀𝑈  𝑀𝑈2
                                                                                      𝑝 = 𝑝 =𝜆 —
                                                                                        1
                                                                                                                  1   2
    marginal utility per dollar is equalized across goods.


$$
                                                            𝜕ℒ
                                                            𝜕𝑥1
                                                                = 𝛼𝑥𝛼1 − 1 𝑥𝛽2 − 𝜆𝑝1 = 0
                                                            𝜕ℒ = 𝛽𝑥𝛼 𝑥𝛽 − 1 − 𝜆𝑝 = 0
                                                            𝜕𝑥2    1 2          2
                                                            𝜕ℒ   = 𝑤 − 𝑝1 𝑥1 − 𝑝2 𝑥2 = 0
                                                            𝜕𝜆

$$
                                                𝑝                     𝑝
Step 3: From (1) and (2): 𝛼𝑥
                          𝛽𝑥
                            2 = 1 ⇒ 𝑥
                               𝑝2
                                         𝛽
                                     2 = 𝛼 ⋅ 𝑝2 𝑥1
                                              1
                                           1

Step 4: Substitute into budget:


    Let’s solve the FOCs: Solving the FOCs from the CD Lagrangian: 1. From FOC 1 and 2, take the
             𝛼𝑥𝛼1 − 1 𝑥𝛽2     𝑝                     𝑝                     𝑝
    ratio:                  = 𝑝12 2. Simplify: 𝛼𝑥
                                               𝛽𝑥
                                                 2
                                                   = 𝑝12 ⇒ 𝑥2 = 𝛽𝛼 ⋅ 𝑝12 𝑥1 (the tangency condition) 3. Substitute into
             𝛽𝑥𝛼1 𝑥𝛽2 − 1                      1
                                                        𝑝
    the budget constraint: 𝑝1 𝑥1 + 𝑝2 ( 𝛽𝛼 ⋅ 𝑝1 𝑥1 ) = 𝑤 4. Solve: 𝑝1 𝑥1 (1 + 𝛽𝛼 ) = 𝑤 ⇒ 𝑥1 = 𝛼 +𝛼 𝛽 ⋅ 𝑝𝑤 5. Similarly:
                                                        2                                                         1

    𝑥2 = 𝛼 +𝛽 𝛽 ⋅ 𝑝𝑤2
    Here’s what’s really going on: Each Marshallian demand is proportional to wealth 𝑤 and
    inversely proportional to its own price. The expenditure share of good 𝑘 is 𝛼𝑘 /(𝛼 + 𝛽) — constant
    and independent of prices and wealth, a unique CD property.


                                                              𝛼 ⋅ 𝑤,                                     𝛽
                                      𝑥1 (𝑝1 , 𝑝2 , 𝑤) =                          𝑥2 (𝑝1 , 𝑝2 , 𝑤) =        ⋅ 𝑤
                                                            𝛼 + 𝛽 𝑝1                                   𝛼 + 𝛽 𝑝2
Properties:
 Property                                                                                                                  Verification

 HD(0)                                                                                                𝑥1 (𝑡𝑝, 𝑡𝑤) = 𝛼 +𝛼 𝛽 ⋅ 𝑡𝑝
                                                                                                                             𝑡𝑤 = 𝑥 (𝑝, 𝑤)
                                                                                                                                   1
                                                                                                                              1


 Walras’ Law                                                                                             𝑝1 𝑥1 + 𝑝2 𝑥2 = 𝛼𝛼𝑤
                                                                                                                           +𝛽
                                                                                                                              + 𝛼𝛽𝑤
                                                                                                                                  +𝛽
                                                                                                                                     =𝑤
                                                                                                                       𝜕𝑥1       𝛼     𝑤
 Own-price effect                                                                                                      𝜕𝑝1 = − 𝛼 + 𝛽 ⋅ 𝑝2 < 0
                                                                                                                                          1

                                                                                𝜕𝑥1
 Cross-price effect                                                             𝜕𝑝2
                                                                                    = 0 (special to CD – additive separability)
                                                                                                     𝜕𝑥1
 Income effect                                                                                       𝜕𝑤
                                                                                                         = 𝛼 +𝛼 𝛽 ⋅ 𝑝11 > 0 (normal good)
                                                                                                             𝑝 𝑥
 Expenditure shares                                                                                    𝑠1 = 1𝑤 1 = 𝛼 +𝛼 𝛽 ; CONSTANT


  Exam Tip: The constant expenditure share property is unique to Cobb-Douglas. When 𝛼 + 𝛽 = 1
  (common normalization), shares are 𝛼 and 𝛽.




Indirect Utility Function & Roy’s Identity

Why this matters for your exam: Indirect utility tells you your maximum achievable
happiness given prices and income. Roy’s identity lets you reverse-engineer demand from
indirect utility — a powerful shortcut on exams.


  Solved Question (1B-Q2, 7 marks): Cobb-Douglas: Get indirect utility, explain properties,
  verify Roy’s identity.


Step 1: Indirect utility function.
Substitute Walrasian demands into the utility function:


  Let’s derive this together: Starting from the Marshallian demands for CD utility: 1. Substitute
                                                                                                                                      𝛽
  𝑥1 (𝑝, 𝑤) and 𝑥2 (𝑝, 𝑤) into the utility function: 2. 𝑣(𝑝, 𝑤) = 𝑢(𝑥1 (𝑝, 𝑤), 𝑥2 (𝑝, 𝑤)) = [ (𝛼 +𝛼𝑤𝛽)𝑝 ]𝛼 ⋅ [ (𝛼 +𝛽𝑤𝛽)𝑝 ] 3.
                                                                                                                   1              2
                                  𝛽
                               𝛼𝛼 𝛽
  Factor out terms: =                 𝛼+𝛽
                                            ⋅ 𝑤𝛼 + 𝛽 ⋅ 𝑝−𝛼
                                                        1
                                                           ⋅ 𝑝−𝛽
                                                              2
                            (𝛼 + 𝛽)

  Here’s what’s really going on: Indirect utility tells you the maximum achievable utility given
  prices and wealth. It is decreasing in prices (higher prices = less affordable utility) and increasing
  in wealth. It is HD(0) in (𝑝, 𝑤) — doubling both prices and wealth leaves utility unchanged.


$$
                                                   𝑣(𝑝, 𝑤) = 𝑢(𝑥1 (𝑝, 𝑤), 𝑥2 (𝑝, 𝑤))
                                                                                              𝛽
                                                             = [ (𝛼 +𝛼𝑤𝛽)𝑝 ]𝛼 ⋅ [ (𝛼 +𝛽𝑤𝛽)𝑝 ]
                                                                            1             2
                                                                        𝛽
                                                                      𝛼𝛼 𝛽         𝛼+𝛽
                                                             =             𝛼+𝛽 ⋅ 𝑤     ⋅ 𝑝−𝛼
                                                                                          1
                                                                                             ⋅ 𝑝−𝛽
                                                                                                2
                                                                   (𝛼 + 𝛽)

$$
With normalization 𝛼 + 𝛽 = 1:


  Let’s continue: Normalize 𝛼 + 𝛽 = 1 (common in CD specifications): 1. From the general form, set
  𝛼 + 𝛽 = 1 2. 𝑣(𝑝, 𝑤) = 𝛼𝛼 (1 − 𝛼)1 − 𝛼 ⋅ 𝑤 ⋅ 𝑝−𝛼
                                                1
                                                   ⋅ 𝑝−(1
                                                      2
                                                          − 𝛼)

  Here’s what’s really going on: With constant returns to scale (𝛼 + 𝛽 = 1), indirect utility is linear
  in wealth 𝑤 — a 10% increase in wealth raises max utility by exactly 10%. The constant
  𝛼𝛼 (1 − 𝛼)1 − 𝛼 bundles all preference parameters.
                                                                                − 𝛼)                1−𝛼
                                                       𝑣(𝑝, 𝑤) = 𝑤 ⋅ 𝑝−𝛼
                                                                      1
                                                                         ⋅ 𝑝−(1
                                                                            2
                                                                                     ⋅ 𝛼𝛼 (1 − 𝛼)
Properties of indirect utility function:


 Property                                                                                                                    Verification

 HD(0) in (𝑝, 𝑤)                                                                                  𝑣(𝑡𝑝, 𝑡𝑤) = 𝑡𝛼 + 𝛽 − 𝛼 − 𝛽 𝑣(𝑝, 𝑤) = 𝑣(𝑝, 𝑤)

 Strictly increasing in 𝑤                                                                                         𝜕𝑣/𝜕𝑤 = (𝛼 + 𝛽) ⋅ 𝑣/𝑤 > 0

 Non-increasing in 𝑝                                                                                                𝜕𝑣/𝜕𝑝1 = −𝛼 ⋅ 𝑣/𝑝1 < 0
                                       𝑘

 Quasiconvex in (𝑝, 𝑤)                                                                        The set {(𝑝, 𝑤): 𝑣(𝑝, 𝑤) ≤ 𝑢}
                                                                                                                         ‾ is convex



Step 2: Verify Roy’s identity.
                                               𝜕𝑣/𝜕𝑝
Roy’s identity: 𝑥𝑘 (𝑝, 𝑤) = − 𝜕𝑣/𝜕𝑤𝑘
For good 1: 𝜕𝑣/𝜕𝑝 = −𝛼𝑣/𝑝 , 𝜕𝑣/𝜕𝑤 = (𝛼 + 𝛽)𝑣/𝑤
                              1                1


                                                                                          𝜕𝑣/𝜕𝑝
  Let’s verify Roy’s identity: Verifying Roy’s identity 𝑥𝑘 = − 𝜕𝑣/𝜕𝑤𝑘 for the CD case: 1. From
                  𝛼 𝛽
                𝛼 𝛽
  𝑣(𝑝, 𝑤) =             𝛼+𝛽
                              𝑤𝛼 + 𝛽 𝑝−𝛼
                                      1
                                         𝑝−𝛽
                                          2
                                             , compute: - 𝜕𝑣/𝜕𝑝1 = −𝛼 ⋅ 𝑣/𝑝1 (power rule on 𝑝−𝛼
                                                                                             1
                                                                                                ) - 𝜕𝑣/𝜕𝑤 = (𝛼 + 𝛽) ⋅ 𝑣/𝑤
              (𝛼 + 𝛽)
                                                                                  𝜕𝑣/𝜕𝑝   −𝛼𝑣/𝑝
  (power rule on 𝑤𝛼 + 𝛽 ) 2. Form the negative ratio: − 𝜕𝑣/𝜕𝑤1 = − (𝛼 + 𝛽)𝑣/𝑤
                                                                           1
                                                                              = (𝛼 +𝛼𝑤𝛽)𝑝 3. This equals 𝑥1 (𝑝, 𝑤) —
                                                                                                              1
  Roy’s identity is verified ✓
  Here’s what’s really going on: Roy’s identity recovers Walrasian demand from indirect utility via
  simple partial derivatives — a powerful duality result. The negative sign ensures demands are
  positive (since 𝜕𝑣/𝜕𝑝 < 0 and 𝜕𝑣/𝜕𝑤 > 0).
                                   𝑘


                                                   𝜕𝑣/𝜕𝑝1         −𝛼𝑣/𝑝1             𝛼𝑤
                                               −            =−                =             = 𝑥1 (𝑝, 𝑤) ✓
                                                   𝜕𝑣/𝜕𝑤         (𝛼 + 𝛽)𝑣/𝑤       (𝛼 + 𝛽)𝑝1
                                       𝜕𝑣/𝜕𝑝
Similarly for good 2: − 𝜕𝑣/𝜕𝑤2 = (𝛼 +𝛽𝑤𝛽)𝑝 = 𝑥2 (𝑝, 𝑤)                        ✓
                                                            2

Roy’s Identity holds. This confirms that the indirect utility function correctly represents the
underlying preferences.


  Exam Tip: Roy’s identity is free marks if you can compute derivatives cleanly. The most common
  error: forgetting the minus sign. Memorize: 𝑥𝑘 = −(𝜕𝑣/𝜕𝑝𝑘 )/(𝜕𝑣/𝜕𝑤).




1.4 Expenditure Minimization Problem (EMP) & Duality

Why this matters for your exam: The EMP is the UMP’s mirror image — instead of
maximizing utility given a budget, you minimize spending to reach a target utility. Together
they form the duality framework that ties all of consumer theory together.


  Solved Question (1B-Q3, 6 marks): Cobb-Douglas: Solve expenditure minimization,
  examine compensated demand.


EMP setup: Minimize 𝑝 𝑥1 + 𝑝 𝑥2 subject to 𝑢(𝑥1 , 𝑥2 ) = 𝑥𝛼1 𝑥𝛽2 ≥ 𝑢‾ .
                                           1           2
Step 1: Lagrangian: ℒ = 𝑝 𝑥1 + 𝑝 𝑥2 + 𝜇(𝑢‾ − 𝑥𝛼1 𝑥𝛽2 )
                                                   1        2
Step 2: FOCs:


  Let’s walk through the EMP step by step: Starting from the Expenditure Minimization Problem
                                                                                                          𝛽
  (EMP) with CD utility: 1. Set up Lagrangian: ℒ = 𝑝1 𝑥1 + 𝑝2 𝑥2 + 𝜇(𝑢‾ − 𝑥𝛼1 𝑥2 ) - Note: we minimize
   expenditure, so the objective is 𝑝1 𝑥1 + 𝑝2 𝑥2 - The constraint is 𝑢(𝑥) ≥ 𝑢‾ , rewritten as 𝑢‾ − 𝑢(𝑥) ≤ 0 2.
                                                     𝛽                                                 𝛽−1                                            𝛽
   FOCs: - 𝜕ℒ/𝜕𝑥1 = 𝑝 − 𝜇𝛼𝑥𝛼1 − 1 𝑥2 = 0 - 𝜕ℒ/𝜕𝑥2 = 𝑝 − 𝜇𝛽𝑥𝛼1 𝑥2                                              = 0 - 𝜕ℒ/𝜕𝜇 = 𝑢‾ − 𝑥𝛼1 𝑥2 = 0
                     1                               2
   Here’s what’s really going on: The EMP Lagrangian mirrors the UMP but with roles reversed —
   expenditure is minimized subject to a minimum utility constraint. The multiplier 𝜇 now represents
   the marginal cost of tightening the utility constraint.


$$
                                                                           𝑝1 − 𝜇𝛼𝑥𝛼1 − 1 𝑥𝛽2 = 0
                                                                           𝑝2 − 𝜇𝛽𝑥𝛼1 𝑥𝛽2 − 1 = 0
                                                                           𝑢‾ − 𝑥𝛼1 𝑥𝛽2                =0
$$
                                                             𝑝                                 𝑝
Step 3: Tangency condition: 𝑝1 = 𝛼𝑥
                                 𝛽𝑥
                                   2 ⇒ 𝑥    𝛽
                                        2 = 𝛼 ⋅ 𝑝 𝑥1 (Same ratio as UMP!)
                                                 1
                                                             2         1                       2

Hicksian (Compensated) Demand Functions:


   Let’s solve for Hicksian demands: Solving the EMP FOCs for ℎ1 (𝑝, ‾𝑢): 1. From the first two FOCs,
                            𝑝     𝛼𝑥                                                                                                        𝑝
   take the ratio: 𝑝1 = 𝛽𝑥2 (same tangency condition as UMP!) 2. Solve: 𝑥2 = 𝛽𝛼 ⋅ 𝑝1 𝑥1 3. Substitute into
                            2       1                                                                                                         2
                                                 𝑝           𝛽                                               1/(𝛼 + 𝛽)                            𝑝   𝛽/(𝛼 + 𝛽)
   the utility constraint: 𝑥𝛼1 ( 𝛽𝛼 ⋅ 𝑝1 𝑥1 ) = 𝑢‾ 4. Solve for 𝑥1 : 𝑥1 = 𝑢‾
                                                 2
                                                                                                                         ⋅ ( 𝛼𝛽 )𝛽/(𝛼 + 𝛽) ⋅ ( 𝑝21 )              ≡ ℎ1 (𝑝, 𝑢)
                                                                                                                                                                           ‾

   Here’s what’s really going on: Hicksian (compensated) demand holds utility constant at 𝑢‾ while
   minimizing expenditure. Unlike Marshallian demand, it depends on utility level 𝑢‾ rather than wealth
   𝑤, and it satisfies the compensated law of demand (𝜕ℎ𝑘 /𝜕𝑝𝑘 < 0).


                                                                                  𝛽/(𝛼 + 𝛽)     𝑝 𝛽/(𝛼 + 𝛽)
                                                     ℎ1 (𝑝, 𝑢) ‾ 1/(𝛼 + 𝛽) ⋅ ( 𝛼 )
                                                            ‾ =𝑢                            ⋅ ( 𝑝2 )
                                                                               𝛽                 1

                                                                                                                                                          𝑝
   By symmetry: 1. Using the same tangency condition but solving for 𝑥2 : 𝑥2 = 𝛽𝛼 ⋅ 𝑝1 𝑥1 2. Substitute
                                                                                                                                                          2
                    𝛽
   into 𝑢‾ = 𝑥𝛼1 𝑥2 and solve for 𝑥2 directly 3. Alternatively, swap roles:
                                   𝛼/(𝛼 + 𝛽)     𝑝 𝛼/(𝛼 + 𝛽)
   ℎ2 (𝑝, 𝑢)
          ‾ =𝑢  ‾ 1/(𝛼 + 𝛽) ⋅ ( 𝛽 )          ⋅ ( 𝑝12 )
                                𝛼

   Here’s what’s really going on: The price ratios appear symmetrically but with swapped
   exponents — reflecting the relative importance (𝛼 vs 𝛽) of each good in the utility function.


                                                                                           𝛼/(𝛼 + 𝛽)             𝑝 𝛼/(𝛼 + 𝛽)
                                                                           1/(𝛼 + 𝛽)      𝛽
                                                     ℎ2 (𝑝, 𝑢)
                                                            ‾ =𝑢
                                                               ‾                       ⋅ (𝛼)                 ⋅ ( 𝑝1 )
                                                                                                                 2
                                             𝛽
With 𝛼 + 𝛽 = 1: ℎ1 (𝑝, 𝑢) ‾ ⋅ ( 𝛼 )𝛽 ⋅ ( 𝑝2 )
                       ‾ =𝑢
                                𝛽        𝑝1

Expenditure function:


   Let’s derive the expenditure function: Starting from the Hicksian demands: 1. The expenditure
   function is defined as 𝑒(𝑝, 𝑢)
                               ‾ = 𝑝 ℎ (𝑝, 𝑢)
                                      1
                                           ‾ + 𝑝 ℎ (𝑝, 𝑢)
                                                  2
                                                       ‾ 2. Substitute ℎ and ℎ :
                                                                        1     2
                                                         1                   2
                                        𝑝                                                          𝑝
   𝑒 = 𝑝1 ⋅ 𝑢‾ 1/(𝛼 + 𝛽) ( 𝛼𝛽 )𝛽/(𝛼 + 𝛽) ( 𝑝2 )𝛽/(𝛼 + 𝛽) + 𝑝2 ⋅ 𝑢‾ 1/(𝛼 + 𝛽) ( 𝛽𝛼 )𝛼/(𝛼 + 𝛽) ( 𝑝1 )𝛼/(𝛼 + 𝛽) 3. Factor 𝑢‾ 1/(𝛼 + 𝛽) and combine terms:
                                         1                                                         2
                1/(𝛼 + 𝛽)                   𝑝   𝛼/(𝛼 + 𝛽) 𝑝 𝛽/(𝛼 + 𝛽)
   𝑒(𝑝, 𝑢)
        ‾ =𝑢
           ‾                ⋅ (𝛼 + 𝛽) ⋅ ( 𝛼1 )           ( 𝛽2 )
   Here’s what’s really going on: The expenditure function gives the minimum expenditure needed
   to achieve utility 𝑢‾ at prices 𝑝. It is HD(1) in 𝑝 (doubling prices doubles required expenditure) and
   strictly increasing in 𝑢‾ .


$$
                                                 𝑒(𝑝, 𝑢)
                                                      ‾ =𝑝 ℎ +𝑝 ℎ
                                                          1 1  2 2
                                                                                                   𝑝    𝛼/(𝛼 + 𝛽) 𝑝 𝛽/(𝛼 + 𝛽)
                                                                 = ‾𝑢1/(𝛼 + 𝛽) ⋅ (𝛼 + 𝛽) ⋅ ( 𝛼1 )                ( 𝛽2 )
$$
                                   𝑝   𝛼 𝑝   𝛽
With 𝛼 + 𝛽 = 1: 𝑒(𝑝, ‾𝑢) = ‾𝑢 ⋅ ( 𝛼1 ) ( 𝛽2 )
Properties of Hicksian demand:


 Property                                                                                                    Verification
                                                                                                  𝛽              𝛽
 HD(0) in 𝑝                                                                    ℎ(𝑡𝑝, 𝑢) = 𝑢 ⋅ (𝛼/𝛽) ⋅ (𝑡𝑝2 /𝑡𝑝1 ) = ℎ(𝑝, 𝑢)

 Compensated law of demand                                                                                     𝜕ℎ1 /𝜕𝑝1 < 0

 No excess utility                                                                      𝑢(ℎ1 , ℎ2 ) = 𝑢‾ (by construction)

 Duality check                                                                     𝑒(𝑝, 𝑣(𝑝, 𝑤)) = 𝑤 and 𝑣(𝑝, 𝑒(𝑝, ‾𝑢)) = ‾𝑢

Shephard’s Lemma

Why this matters for your exam: Shephard’s lemma is the EMP twin of Roy’s identity — if
you have the expenditure function, you can get Hicksian demands by simple differentiation.
Free marks if you remember it.
If 𝑒(𝑝, 𝑢) is differentiable in 𝑝, Hicksian demand is its gradient:


   Let’s derive this together: Starting from the envelope theorem applied to the EMP: 1. By the
   envelope theorem, the derivative of the minimized expenditure function w.r.t. 𝑝𝑘 equals the partial
   derivative of the Lagrangian w.r.t. 𝑝𝑘 at the optimum 2. The EMP Lagrangian is
   ℒ = 𝑝 ⋅ 𝑥 + 𝜇(𝑢‾ − 𝑢(𝑥)) 3. At the optimum, 𝜕ℒ/𝜕𝑝𝑘 = 𝑥*𝑘 = ℎ𝑘 (𝑝, 𝑢) 4. Hence: ℎ𝑘 (𝑝, 𝑢) = 𝜕𝑒(𝑝,
                                                                                                𝜕𝑝
                                                                                                    𝑢)
                                                                                                       for 𝑘 = 1, …, 𝑁
                                                                                                       𝑘

   Here’s what’s really going on: Shephard’s lemma is the EMP counterpart of Roy’s identity — it
   recovers Hicksian demand from the expenditure function by simple differentiation. If you know
   𝑒(𝑝, 𝑢), you get all compensated demands for free.


                                                           𝜕𝑒(𝑝, 𝑢)
                                             ℎ𝑘 (𝑝, 𝑢) =              for 𝑘 = 1, …, 𝑁
                                                             𝜕𝑝𝑘
Verification for CD: 𝜕𝑒/𝜕𝑝1 = ℎ1 (derivative of expenditure function with respect to 𝑝1 yields
Hicksian demand for good 1).


   Exam Tip: Shephard’s lemma is the EMP analog of Roy’s identity. Together they provide a
   complete duality framework: from 𝑣(𝑝, 𝑤) recover Walrasian demand (Roy); from 𝑒(𝑝, 𝑢) recover
   Hicksian demand (Shephard).


Duality Framework

Why this matters for your exam: Duality is the big picture — the UMP and EMP are two
sides of the same coin. Once you understand the relationships, you can solve any consumer
problem from whichever direction is easiest.


 UMP                                                                                                                   EMP

 max⁡𝑢(𝑥) s.t. 𝑝 ⋅ 𝑥 ≤ 𝑤                                                                              min⁡𝑝 ⋅ 𝑥 s.t. 𝑢(𝑥) ≥ 𝑢‾

 Solution: 𝑥(𝑝, 𝑤) (Walrasian)                                                             Solution: ℎ(𝑝, 𝑢) (Hicksian)

 Value fn: 𝑣(𝑝, 𝑤) (indirect utility)                                                   Value fn: 𝑒(𝑝, 𝑢) (expenditure)

 Recovery: Roy’s identity                                                               Recovery: Shephard’s lemma

 𝑥(𝑝, 𝑤) = ℎ(𝑝, 𝑣(𝑝, 𝑤))                                                                              ℎ(𝑝, 𝑢) = 𝑥(𝑝, 𝑒(𝑝, 𝑢))
 UMP                                                                                                 EMP

 𝑒(𝑝, 𝑣(𝑝, 𝑤)) = 𝑤                                                                        𝑣(𝑝, 𝑒(𝑝, 𝑢)) = 𝑢‾



  Solved Question (1B-Q4, 10 marks): Examine properties of Walrasian demand 𝑥(𝑝, 𝑤). When
  can UMP sufficient condition be violated?


Properties of Walrasian demand 𝑥(𝑝, 𝑤):
                                                                 𝐿
Assume 𝑢(⋅) is continuous, preferences satisfy LNS on 𝑋 = ℝ+ .
1. Homogeneity of degree zero: 𝑥(𝑝, 𝑤) = 𝑥(𝑎𝑝, 𝑎𝑤) for all 𝑎 > 0. Reason: budget set is
unchanged. No preference assumption needed.
2. Walras’ Law: 𝑝 ⋅ 𝑥 = 𝑤 for all 𝑥 ∈ 𝑥(𝑝, 𝑤). Reason (by LNS): if 𝑝 ⋅ 𝑥 < 𝑤, there exists 𝑦 epsilon-
close to 𝑥 with 𝑦 ≻ 𝑥 and still affordable, contradicting optimality.
3. Convexity/Uniqueness: If preferences are convex: 𝑥(𝑝, 𝑤) is a convex set (multiple optimal
bundles possible). If strictly convex: 𝑥(𝑝, 𝑤) is single-valued (unique optimum).
4. 𝑥(𝑝, 𝑤) is continuous in (𝑝, 𝑤) if 𝑢 is continuous and strictly quasiconcave.
When can UMP sufficient conditions be violated?
The Kuhn-Tucker conditions are sufficient when: (1) 𝑢 quasiconcave, (2) 𝑢 monotone/LNS, (3)
𝛻𝑢 ≠ 0.

 Condition violated                                                                     What happens

                                                            Corner solution; 𝑀𝑈𝑖 /𝑝𝑖 may not equalize
 Utility not monotone
                                                                                           across goods

                                                               Tangency identifies a minimum, not a
 Preferences not convex
                                                                                               maximum

                                                          Bliss point; violates LNS; consumer would
 𝛻𝑢 = 0 at some point
                                                                                   not spend all wealth

 Budget set non-compact                                         No solution exists (Weierstrass fails)


  Exam Tip: The Giffen good paradox is NOT a violation – it satisfies all sufficient conditions but the
  income effect is large and negative. Don’t confuse Giffen behavior with non-quasiconcavity.




  Solved Question (1B-Q5, 10 marks): Examine (i) Homogeneity (ii) Homotheticity (demand-
  focused).


(i) Homogeneity of Walrasian demand: 𝑥(𝑝, 𝑤) is HD(0) in (𝑝, 𝑤): 𝑥(𝑎𝑝, 𝑎𝑤) = 𝑥(𝑝, 𝑤). For
indirect utility: 𝑣(𝑝, 𝑤) is HD(0). For expenditure function: 𝑒(𝑝, 𝑢) is HD(1) in 𝑝. For Hicksian
demand: ℎ(𝑝, 𝑢) is HD(0) in 𝑝.
(ii) Homotheticity demand implications:


 Property                                                                                 Explanation
                                                                      𝜕𝑥𝑘 𝑤
 Engel curves are linear through origin                                  ⋅ = 1 (income elasticity = 1)
                                                                      𝜕𝑤 𝑥𝑘

 Expenditure shares are constant                                     𝑠𝑘 = 𝑝𝑘 𝑥𝑘 (𝑝, 𝑤)/𝑤 independent of 𝑤
 Property                                                                                             Explanation

 Income expansion paths are rays                                   Optimal ratios 𝑥1 /𝑥2 constant as 𝑤 varies

 MRS independent of utility level                                            MRS depends only on ratio 𝑥1 /𝑥2


Examples: Cobb-Douglas, perfect substitutes, perfect complements, CES – all homothetic.
Non-examples: Quasilinear 𝑢 = 𝑣(𝑥) + 𝑦; Stone-Geary (with subsistence).
Here’s the key — and it’s beautiful: HD(0) of Walrasian demand is a property of any
solution to UMP (no preference assumptions needed). Homotheticity is an assumption about
preferences.



1.5 The Choice-Based Approach & WARP

Why this matters for your exam: So far we’ve assumed preferences are the primitive
(unobservable). The choice-based approach starts from what you actually see people buy —
observable choices — and works backward. It’s the foundation of revealed preference theory
and empirical demand analysis.
The preference-based approach studied above uses unobservable preferences as the primitive.
Munoz-Garcia (§1.13-1.14, pp.59-63) presents an alternative approach that uses actual
choices as the primitive – the choice-based approach.

Choice Structure

A choice structure (ℬ, 𝑐(⋅)) contains:

   1. ℬ – a family of nonempty subsets of 𝑋 (budget sets). For example: the set of affordable
     bundles given your prices and wealth.
   2. 𝑐(⋅) – a choice rule that selects, for each budget set 𝐵 ∈ ℬ, a subset 𝑐(𝐵) ⊆ 𝐵 of chosen
     elements.


  Example (Munoz-Garcia, Example 1.11): Let 𝑋 = {𝑥, 𝑦, 𝑧}, 𝐵1 = {𝑥, 𝑦}, 𝐵2 = {𝑥, 𝑦, 𝑧}. - Choice rule
  1: 𝑐1 ({𝑥, 𝑦}) = {𝑥}, 𝑐1 ({𝑥, 𝑦, 𝑧}) = {𝑥} – consistent. - Choice rule 2: 𝑐2 ({𝑥, 𝑦}) = {𝑥}, 𝑐2 ({𝑥, 𝑦, 𝑧}) = {𝑦} –
  inconsistent (switches to 𝑦 when 𝑧 appears despite 𝑥 still available).


The Weak Axiom of Revealed Preference (WARP)

Paralleling the rationality assumption in the preference-based approach, the choice-based
approach imposes consistency through WARP.


  WARP Definition (Munoz-Garcia, §1.14): Consider a budget set 𝐵 ∈ ℬ with 𝑥, 𝑦 ∈ 𝐵, where
  𝑥 ∈ 𝑐(𝐵). The choice structure (ℬ, 𝑐(⋅)) satisfies WARP if, for any other budget set 𝐵′ ∈ ℬ where
  𝑥, 𝑦 ∈ 𝐵′ and 𝑦 ∈ 𝑐(𝐵′ ), we also have 𝑥 ∈ 𝑐(𝐵′ ).


Here’s what’s really going on: If 𝑥 is chosen when 𝑦 is available in one budget set, then 𝑦
cannot be chosen without 𝑥 in any other budget set where both are available. In short: if 𝑥
beats 𝑦 in one context, 𝑦 cannot beat 𝑥 in another context without 𝑥 also being chosen.
Legal choices under WARP (Example 1.12, Munoz-Garcia): When 𝑐({𝑥, 𝑦}) = {𝑥} and the
budget expands to {𝑥, 𝑦, 𝑧}, you can choose: - {𝑥} – 𝑥 still beats 𝑦 and 𝑧 is no better - {𝑧} – 𝑧 is
even better than 𝑥 - {𝑥, 𝑧} – 𝑥 and 𝑧 are equally good (indifference) - But NOT {𝑦} alone, and
NOT {𝑥, 𝑦} (since 𝑦 was rejected when 𝑥 was available)
Rational Preference Relations Satisfy WARP


  Theorem (Munoz-Garcia Appendix, pp.68-69): Every rational preference relation induces a
  choice structure that satisfies WARP.


Proof:
                                                                              *
  1. Suppose for some budget set 𝐵 ∈ ℬ, we have 𝑥, 𝑦 ∈ 𝐵 and 𝑥 ∈ 𝐶 (𝐵, ≽ ) (the set of optimal
     choices given ≽ ). This means 𝑥 ≽ 𝑦 for all available 𝑦 ∈ 𝐵.
                                      ′                          ′        *       ′
  2. Consider another budget set 𝐵 ∈ ℬ where 𝑥, 𝑦 ∈ 𝐵 and 𝑦 ∈ 𝐶 (𝐵 , ≽ ). This means 𝑦 ≽ 𝑧
                   ′
     for all 𝑧 ∈ 𝐵 .
                                                             ′
  3. From (1): 𝑥 ≽ 𝑦. From (2): 𝑦 ≽ 𝑧 for all 𝑧 ∈ 𝐵 (so in particular 𝑦 ≽ 𝑥).
  4. Wait – 𝑥 ≽ 𝑦 and 𝑦 ≽ 𝑥 implies 𝑥 ∼ 𝑦 (indifference), not that 𝑦 ≻ 𝑥.
                                                                      ′                   ′
     Actually, the correct reasoning: From (2), 𝑦 ≽ 𝑧 for all 𝑧 ∈ 𝐵 . Since 𝑥 ∈ 𝐵 , we have 𝑦 ≽ 𝑥.
     But from (1) we had 𝑥 ≽ 𝑦. So 𝑥 ∼ 𝑦 – they are indifferent.
                                                    ′                                      ′
     Now, since 𝑥 ∼ 𝑦 and 𝑦 ≽ 𝑧 for all 𝑧 ∈ 𝐵 , by transitivity 𝑥 ≽ 𝑧 for all 𝑧 ∈ 𝐵 . Hence
           *   ′
     𝑥 ∈ 𝐶 (𝐵 , ≽ ).
                                                         ′
  5. Therefore both 𝑥 and 𝑦 are chosen under 𝐵 , satisfying WARP. ■

Relationship between approaches:


                                          Preference-Based                                     Choice-Based

                                          Preferences ≽
Primitive                                                                         Choices 𝑐(⋅) (observable)
                                          (unobservable)

                                          Completeness +
Rationality                                                                                           WARP
                                          Transitivity

Representation                            Utility function 𝑢: 𝑋 → ℝ               Choice structure (ℬ, 𝑐(⋅))

                                          More tractable for
Advantage                                                                             Based on observables
                                          large 𝑋

                                          Rational ≽ ⟹ WARP           WARP ⟹ Rational ≽ (only if
Equivalence
                                          holds                                                       |𝐵| ≤ 3)


  Exam Tip: The key point: rational preferences imply WARP (always), but WARP does NOT
  imply rational preferences (unless the budget sets are small). Munoz-Garcia notes that the
  converse only holds when budget sets contain three or fewer elements (Mas-Colell et al., 1995;
  Arrow, 1959).




  Reference — Munoz-Garcia (§1.1, §1.13-1.14, Appendix, pp.2-3, 59-69) — Choice-Based
  vs. Preference-Based Approaches:
  Munoz-Garcia highlights the fundamental trade-off: The preference-based approach is based on
  unobservables (the individual’s preferences) – we imagine asking the consumer to compare
  bundles, but we never directly observe the comparison process. In contrast, the choice-based
  approach is based on observables (actual choices) – we see what the consumer buys and infer
  consistency from those choices.
  The preference-based approach is more tractable when the set of alternatives 𝑋 contains many
  elements (which is usually the case in individual decision-making problems). This is why most of
  consumer theory uses the preference-based approach.
  The chapter then explores the relationship between the two approaches: under what conditions do
  rational preferences imply consistent choices (WARP), and vice versa. The appendix proves that
  every rational preference relation satisfies WARP, but the converse holds only under
  restrictive conditions.




1.6 Behavioral Economics Findings

Why this matters for your exam: Standard theory assumes you’re a perfectly rational
calculating machine. Real people aren’t. Behavioral economics documents the systematic ways
you deviate from the textbook model — and examiners love asking you to “critically evaluate
the rationality assumptions” by citing these findings.
Standard consumer theory assumes unbounded rationality, willpower, and selfishness. Munoz-
Garcia (§1.12, pp.51-59) presents behavioral economics models that relax these assumptions,
introducing findings from controlled experiments that challenge the standard framework.

Prospect Theory (Kahneman & Tversky, 1979)

Kahneman and Tversky’s prospect theory (Munoz-Garcia, §5.9, pp.368-372) models choice
under uncertainty with three key deviations from expected utility theory:

  1. Probability weighting: You overweight low probabilities and underweight high
     probabilities via a weighting function 𝑤(𝑝 ):
                                                           𝑖


  Let’s walk through this: Starting from expected utility theory and modifying it for behavioral
  realism: 1. Standard expected utility: 𝐸𝑈 = ∑ 𝑝𝑖 𝑢(𝑥𝑖 ) where 𝑝𝑖 are objective probabilities 2. Prospect
  theory replaces objective probabilities 𝑝𝑖 with decision weights 𝑤(𝑝𝑖 ) 3. The weighting function
  𝑤(𝑝) overweights small probabilities and underweights large ones 4. Result: 𝑣(𝑥, 𝑝) = ∑𝑛                    𝑤(𝑝𝑖 )𝑣(𝑥𝑖 )
                                                                                                        𝑖=1
  Here’s what’s really going on: You don’t treat probabilities linearly — you exaggerate small
  chances (lottery tickets, insurance) and discount near-certain events. This explains the Allais
  paradox and other violations of expected utility.

                                                               𝑛
                                           𝑣(𝑥, 𝑝) = ∑ 𝑤(𝑝𝑖 )𝑣(𝑥𝑖 )
                                                           𝑖=1
                                                                                𝛽   𝛽       𝛽 1/𝛽
A common weighting function (Tversky-Kahneman): 𝑤(𝑝) = 𝑝 /[𝑝 + (1 − 𝑝) ]                            , where 𝛽 ∈ [0, 1].

  2. Reference-dependent value function: Payoffs are evaluated relative to a reference
     point 𝑥0 , not as absolute levels:


  Let’s derive this together: Starting from the idea that utility depends on a reference point 𝑥0
                                                                                        𝛼
  (typically the status quo): 1. In the gains domain (𝑥𝑖 ≥ 𝑥0 ): 𝑣(𝑥𝑖 ) = (𝑥𝑖 ) , where 𝛼 ∈ (0, 1] captures
  diminishing sensitivity — each additional unit of gain adds less value 2. In the losses domain (
                            𝛼
  𝑥𝑖 < 𝑥0 ): 𝑣(𝑥𝑖 ) = −𝜆(−𝑥𝑖 ) , where 𝜆 ≥ 1 captures loss aversion — losses hurt more than equivalent
  gains please 3. The function is: - Concave for gains (risk-averse in gains) - Convex for losses
  (risk-seeking in losses) - Steeper for losses (𝜆 > 1 makes the loss side steeper)
  Here’s what’s really going on: The 𝑆-shaped value function is the hallmark of prospect theory —
  it embeds both diminishing sensitivity and loss aversion, explaining the endowment effect and
  status quo bias.


                                                       𝛼
                                               (𝑥𝑖 )               if 𝑥𝑖 ≥ 𝑥0 (gains)
                                  𝑣(𝑥𝑖 ) = {               𝛼
                                                 if 𝑥𝑖 < 𝑥0 (losses)
                                               −𝜆(−𝑥𝑖 )
where 𝛼 ∈ (0, 1] measures diminishing sensitivity, and 𝜆 ≥ 1 measures loss aversion.
   3. Loss aversion: The value function is steeper for losses than for gains – a loss of $X hurts
     more than a gain of $X pleases. Estimated parameters: 𝛼 ≈ 0.88, 𝜆 ≈ 2.25 (Tversky &
     Kahneman, 1992).


  Exam significance: Prospect theory explains the endowment effect (sellers value goods more
  than buyers), Allais’ paradox (probability weighting), and status quo bias. These are standard
  exam questions asking “give a behavioral economics critique of expected utility theory.”


The Endowment Effect

Several experiments (Munoz-Garcia, §5.9.3, pp.371-372) show that your willingness to pay
(WTP) for an object is systematically lower than your willingness to accept (WTA) to give it
up – a violation of standard theory where WTP = WTA.
Prospect theory explanation: With loss aversion 𝜆 > 1: - Willingness to pay:
𝑢(MUG) − 𝑢($𝑥) ≥ 0 ⇒ 𝑥 ≤ 𝑢(MUG)/𝜆, so WTP = 𝑢(MUG)/𝜆 - Willingness to accept:
𝑢($𝑥) − 𝑢(MUG) ≥ 0 ⇒ 𝑥 ≥ 𝜆𝑢(MUG), so WTA = 𝜆𝑢(MUG) - Since 𝜆 > 1, WTA > WTP. If 𝜆 = 1 (no
loss aversion), WTP = WTA. (Munoz-Garcia, §5.9.3)

Social Preferences (Fehr-Schmidt, 1999)

Standard models assume purely selfish preferences. Fehr and Schmidt (1999) incorporate
inequality aversion:


  Let’s work through this step by step: Starting from the standard self-regarding utility model and
  adding concern for others: 1. Base utility is own payoff 𝑥𝑖 2. Add a penalty for disadvantageous
  inequality (envy): −𝛼𝑖 max⁡{𝑥𝑗 − 𝑥𝑖 , 0} — you dislike it when others earn more 3. Add a penalty for
  advantageous inequality (guilt): −𝛽𝑖 max⁡{𝑥𝑖 − 𝑥𝑗 , 0} — you also dislike earning more than others 4.
  The parameters satisfy 𝛼𝑖 ≥ 𝛽𝑖 (envy is stronger than guilt) and 1 > 𝛽𝑖 ≥ 0
  Here’s what’s really going on: Fehr-Schmidt preferences capture that people care about
  fairness, not just absolute payoff. If 𝛼𝑖 = 𝛽 = 0, we’re back to standard selfish preferences. This
                                               𝑖
  model explains cooperation in public goods games and rejection in ultimatum games.


                         𝑢𝑖 (𝑥𝑖 , 𝑥𝑗 ) = 𝑥𝑖 − 𝛼𝑖 max⁡{𝑥𝑗 − 𝑥𝑖 , 0} − 𝛽𝑖 max⁡{𝑥𝑖 − 𝑥𝑗 , 0}

     𝛼𝑖 = disutility from envy (when others earn more)
     𝛽𝑖 = disutility from guilt (when you earn more)
     Assumption: 𝛼𝑖 ≥ 𝛽𝑖 (envy is stronger than guilt), 1 > 𝛽𝑖 ≥ 0

If 𝛼𝑖 = 𝛽𝑖 = 0, preferences collapse to standard self-regarding utility. This specification can also
capture concerns for status (𝛽 < 0) or efficiency (𝛼𝑖 < 0). (Munoz-Garcia, §1.12.1, pp.52-55)
                                  𝑖


Hyperbolic & Quasi-Hyperbolic Discounting

                                                                                            𝑡
Standard exponential discounting assumes constant discount rates: (1/(1 + 𝑟) )𝑥. However,
experiments show present bias – you discount the near future more steeply than the distant
future.
                                                                                                 𝛾/𝛼
Hyperbolic discounting (Munoz-Garcia, §1.12.2, pp.55-59): Discount factor 1/(1 + 𝑟𝑡)                   ,
where the subjective discount rate decreases in 𝑡. This explains: - Time inconsistency:
Someone who prefers $110 in 61 days over $100 in 60 days may prefer $100 today over $110
tomorrow – reversing their preference when the moment arrives. - Addiction and self-
control: Patience in the long run (joining a gym) but impatience in the short run (skipping the
gym). - Large credit card debts alongside retirement accounts.
                                                                           2
Quasi-hyperbolic (Laibson, 1997): Discount factor {1, 𝛽𝛿, 𝛽𝛿 , …} where 𝛽 ≤ 1. When 𝛽 = 1,
collapses to exponential discounting.



  Reference — Munoz-Garcia (§1.12, pp.51-59; §5.9, pp.368-372) — Why Behavioral
  Economics Matters for Theory:
  Munoz-Garcia emphasizes that standard consumer theory is a normative benchmark – it shows
  how consumers would behave if they satisfied the rationality axioms. Behavioral economics
  documents systematic deviations from this benchmark. Understanding both is essential for exams:
  when asked “critically evaluate the assumption of rational preferences,” cite prospect theory (loss
  aversion), framing effects (intransitivity), and hyperbolic discounting (time inconsistency) as
  documented violations.
  The key exam connection: Endowment effect ⇒ violates the Coase theorem (initial allocation
  matters for final outcome). Framing effects ⇒ violate transitivity. Social preferences ⇒ modify
  the utility function to include others’ payoffs.




1.7 Special Utility Functions & Corner Solutions

Why this matters for your exam: Most exam problems use one of four functional forms:
Cobb-Douglas, Leontief (perfect complements), perfect substitutes, or quasilinear. Each has a
specific solution method and specific properties you need to know cold.

Leontief (Perfect Complements) – The Negroni Cocktail


  Solved Question (1B-Q6, ~11 marks): 𝑈 = min⁡(𝐺, 𝑉, 𝐶). Find Marshallian demand for Gin,
  Hicksian demand for Campari, expenditure function.


Leontief (perfect complements) utility: 𝑢(𝐺, 𝑉, 𝐶) = min⁡(𝐺, 𝑉, 𝐶)
A Negroni cocktail requires G = V = C = 𝑞 (fixed 1:1:1 proportions).
Marshallian (Walrasian) demand for Gin:
Budget: 𝑝 𝐺 + 𝑝 𝑉 + 𝑝 𝐶 = 𝑤. With 𝐺 = 𝑉 = 𝐶 = 𝑞: 𝑞(𝑝 + 𝑝 + 𝑝 ) = 𝑤
          𝐺      𝑉       𝐶                                𝐺    𝑉      𝐶


  Let’s derive this together: Starting from 𝑢(𝐺, 𝑉, 𝐶) = min⁡(𝐺, 𝑉, 𝐶) with budget 𝑝𝐺 𝐺 + 𝑝𝑉 𝑉 + 𝑝𝐶 𝐶 = 𝑤: 1.
  At the optimum for perfect complements, you consume in fixed proportion: 𝐺 = 𝑉 = 𝐶 = 𝑞 2.
  Substitute into the budget: 𝑝𝐺 𝑞 + 𝑝𝑉 𝑞 + 𝑝𝐶 𝑞 = 𝑤 ⇒ 𝑞(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 ) = 𝑤 3. Solve for 𝑞: 𝑞 = 𝑝 + 𝑝𝑤 + 𝑝 4.
                                                                                                    𝐺       𝑉       𝐶
  Hence each Marshallian demand equals this common quantity: 𝐺(𝑝, 𝑤) = 𝑉(𝑝, 𝑤) = 𝐶(𝑝, 𝑤) = 𝑝 + 𝑝𝑤 + 𝑝
                                                                                                        𝐺       𝑉       𝐶

  Here’s what’s really going on: With perfect complements, you buy goods in fixed proportions —
  all demands scale with total wealth and are decreasing in the sum of all prices. There is no
  substitution response to relative price changes.


                                  𝐺(𝑝, 𝑤) = 𝑉(𝑝, 𝑤) = 𝐶(𝑝, 𝑤) =         𝑤
                                                                   𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶
                                                                                                2
Properties: HD(0) holds; Walras’ Law holds; own-price effect: 𝜕𝐺/𝜕𝑝 = −𝑤/( ∑ 𝑝 ) < 0.
                                                                   𝐺          𝑘
Hicksian (compensated) demand for Campari:
EMP: minimize 𝑝 𝐺 + 𝑝 𝑉 + 𝑝 𝐶 subject to min(𝐺, 𝑉, 𝐶) ≥ 𝑢‾ .
                     𝐺       𝑉𝐶
Optimal: 𝐺 = 𝑉 = 𝐶 = 𝑞 = 𝑢. So:
                         ‾



  Let’s work through this: Starting from the EMP with 𝑢 = min⁡(𝐺, 𝑉, 𝐶) ≥ 𝑢‾ : 1. To achieve utility 𝑢‾ , we
  need min⁡(𝐺, 𝑉, 𝐶) ≥ 𝑢‾ , so each good must be at least 𝑢‾ 2. Cost minimization implies we set each
  exactly at 𝑢‾ (no excess) 3. Hence ℎ𝐶 (𝑝, 𝑢) = ℎ𝐺 (𝑝, 𝑢) = ℎ𝑉 (𝑝, 𝑢) = 𝑢‾
  Here’s what’s really going on: Hicksian (compensated) demands for Leontief utility are
  independent of prices — there is zero substitution possibility. Even if one good becomes much
  cheaper, you cannot substitute toward it because the goods must be consumed in fixed proportions.


                                          ℎ𝐶 (𝑝, 𝑢) = ℎ𝐺 (𝑝, 𝑢) = ℎ𝑉 (𝑝, 𝑢) = ‾𝑢
The Hicksian demands are independent of prices (no substitution possible).
Expenditure function:


  Let’s derive the expenditure function: Starting from the Hicksian demands for Leontief utility:
  1. The expenditure function is 𝑒(𝑝, 𝑢) = 𝑝𝐺 ℎ𝐺 + 𝑝𝑉 ℎ𝑉 + 𝑝𝐶 ℎ𝐶 2. Substitute ℎ𝐺 = ℎ𝑉 = ℎ𝐶 = 𝑢‾ :
  𝑒(𝑝, 𝑢) = ‾𝑢(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 ) 3. This is simply the cost of buying 𝑢‾ units of each good
  Here’s what’s really going on: The expenditure function is linear in prices (HD(1)) and linear in 𝑢‾
  . Shephard’s lemma gives: 𝜕𝑒/𝜕𝑝𝐶 = 𝑢‾ = ℎ𝐶 , confirming consistency. 𝑒(𝑝, 𝑣(𝑝, 𝑤)) = 𝑤 and 𝑣(𝑝, 𝑒(𝑝, 𝑢)) = 𝑢‾
  verify duality.


                                               𝑒(𝑝, 𝑢) = ‾𝑢(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 )
Properties: HD(1) in 𝑝; strictly increasing in 𝑢; Shephard’s lemma: 𝜕𝑒/𝜕𝑝 = 𝑢‾ = ℎ𝐶 (𝑝, 𝑢).
                                                                                               𝐶
                                                                                   𝑢∑𝑝
                                                                                   ‾
Duality checks: - 𝑒(𝑝, 𝑣(𝑝, 𝑤)) = ∑𝑤𝑝 ⋅ ∑ 𝑝 = 𝑤              ✓ - 𝑣(𝑝, 𝑒(𝑝, 𝑢)) = ∑ 𝑝 𝑘 = 𝑢‾     ✓
                                          𝑘       𝑘                                  𝑘




 Function                                                                                                   Expression

 Marshallian demand (any good)                                                            𝑥𝑘 (𝑝, 𝑤) = 𝑤/(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 )

 Hicksian demand (any good)                                                                                   ℎ𝑘 (𝑝, 𝑢) = 𝑢‾

 Indirect utility                                                                             𝑣(𝑝, 𝑤) = 𝑤/(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 )

 Expenditure function                                                                         𝑒(𝑝, 𝑢) = 𝑢‾ ⋅ (𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 )


  Exam Tip: The Leontief case is the only functional form where Hicksian demand is price-
  independent (ℎ𝑘 = 𝑢‾ ) because there is zero substitution possibility – compensated own-price effect is
  zero.




Quasilinear Utility & Corner Solutions


  Solved Question (1B-Q7, 3 marks): 𝑈 = 𝑋 + ln⁡(𝑌). Find demands. With limited 𝐼, which goods?
  Why?


Utility: 𝑢(𝑥, 𝑦) = 𝑥 + ln⁡(𝑦), Budget: 𝑝 𝑥 + 𝑝 𝑦 = 𝐼
                                           𝑥      𝑦
Step 1: MRS condition (interior solution). - 𝑀𝑈𝑥 = 1, 𝑀𝑈𝑦 = 1/𝑦, 𝑀𝑅𝑆𝑥𝑦 = 𝑦 - Tangency:
𝑀𝑅𝑆𝑥𝑦 = 𝑝𝑥 /𝑝𝑦 ⇒ 𝑦 = 𝑝𝑥 /𝑝𝑦
So 𝑦* = 𝑝 /𝑝 (independent of income 𝐼).
          𝑥   𝑦
Step 2: Demand for 𝑥 from budget constraint.


  Let’s derive this together: Starting from 𝑢(𝑥, 𝑦) = 𝑥 + ln⁡𝑦 with budget 𝑝𝑥 𝑥 + 𝑝𝑦 𝑦 = 𝐼: 1. Tangency
  condition from 𝑀𝑅𝑆 = 𝑝𝑥 /𝑝𝑦 : 𝑦* = 𝑝𝑥 /𝑝𝑦 (MRS = 𝑦 from 𝑀𝑈𝑥 = 1, 𝑀𝑈𝑦 = 1/𝑦) 2. Note 𝑦* is independent
  of income — the first key property of quasilinear utility 3. Substitute 𝑦* into the budget:
                                                           𝐼 − 𝑝𝑥
  𝑝𝑥 𝑥 + 𝑝𝑦 (𝑝𝑥 /𝑝𝑦 ) = 𝐼 ⇒ 𝑝𝑥 𝑥 + 𝑝𝑥 = 𝐼 4. Solve: 𝑥* =           𝐼
                                                             𝑝𝑥 = 𝑝𝑥 − 1
  Here’s what’s really going on: For quasilinear utility, the nonlinear good (𝑦) has zero income
  effect — its demand is purely a function of relative prices. All additional income is spent on the
  linear good (𝑥). The corner condition 𝐼 ≥ 𝑝𝑥 ensures 𝑥* ≥ 0.


                                               𝐼 − 𝑝𝑦 𝑦* 𝐼 − 𝑝
                                        𝑥* =       𝑝𝑥   = 𝑝 𝑥 = 𝑝𝐼 − 1
                                                            𝑥    𝑥
Marshallian demands: - 𝑥(𝑝, 𝐼) = 𝐼/𝑝𝑥 − 1 (provided 𝐼 ≥ 𝑝𝑥 ; else 𝑥 = 0) - 𝑦(𝑝, 𝐼) = 𝑝𝑥 /𝑝𝑦

Step 3: With limited 𝐼, which goods are consumed? - If 𝐼 < 𝑝𝑥 : 𝑥* would be negative, so you
set 𝑥 = 0 (corner solution) and spend all income on 𝑦. - If 𝐼 > 𝑝 : both goods are consumed, with
                                                                       𝑥
𝑦 fixed at 𝑝𝑥 /𝑝𝑦 and all extra income spent on 𝑥.
Characterization: - Good 𝑦 (log-good) is income-INELASTIC. 𝜕𝑦/𝜕𝐼 = 0. It behaves like a
necessity with a satiation/floor. - Good 𝑥 (linear good) absorbs all changes in income. It is a
normal good. - This is a quasilinear utility function with zero income effect for the good
entering nonlinearly (𝑦).


  Exam Tip: The condition 𝐼 ≥ 𝑝𝑥 is the most commonly missed point – exam questions frequently ask
  “with limited income, which goods are consumed?” Students who just write 𝑥 = 𝐼/𝑝𝑥 − 1 without
  discussing the corner get partial marks.




Perfect Substitutes with a “Bad”


  Solved Question (1B-Q8, 3 marks): 𝑈(𝑋, 𝑌) = 𝑋 − 3𝑌. 𝑃𝑋 = 20, 𝑃𝑌 = 40, 𝐼 = 400. Utility-maximizing
  quantities.


Utility: 𝑢(𝑥, 𝑦) = 𝑥 − 3𝑦, Prices: 𝑝 = 20, 𝑝 = 40, Income: 𝐼 = 400

⚠️ Watch out: Always check the sign of marginal utilities before solving. A negative MU
                                    𝑥          𝑦


changes everything!
Step 1: Observe that the utility function is linear (perfect substitutes). - 𝑀𝑈𝑥 = 𝜕𝑢/𝜕𝑥 = 1 -
𝑀𝑈𝑦 = 𝜕𝑢/𝜕𝑦 = −3 (MARGINAL DISUTILITY of 𝑦 – 𝑦 is a BAD)
Since 𝑀𝑈𝑦 < 0, you’d prefer 𝑦 = 0.
Step 2: Corner solution – consume only the good with positive marginal utility.
If 𝑦 = 0: 𝑥 = 𝐼/𝑝𝑥 = 400/20 = 20, Utility: 𝑢(20, 0) = 20 − 3(0) = 20
Step 3: Verify no interior solution is optimal.


  Let’s walk through this: Starting from 𝑢(𝑥, 𝑦) = 𝑥 − 3𝑦 (where 𝑦 is a “bad”): 1. Compute marginal
  utilities: 𝑀𝑈𝑥 = 𝜕𝑢/𝜕𝑥 = 1 (positive — good), 𝑀𝑈𝑦 = 𝜕𝑢/𝜕𝑦 = −3 (negative — bad) 2. The MRS formula
  still applies: 𝑀𝑅𝑆𝑥𝑦 = 𝑀𝑈   1      1
                         𝑀𝑈 = −3 = − 3 3. The negative MRS indicates you’d need to be compensated
                           𝑥
                               𝑦

  with more 𝑥 to accept additional 𝑦
  Here’s what’s really going on: When one good is a “bad” (gives disutility), the standard tangency
  condition 𝑀𝑅𝑆 = 𝑝 /𝑝 identifies a minimum, not a maximum. The optimum is a corner solution:
                       𝑥   𝑦
  consume zero of the bad and spend all income on the good.


                                                        𝑀𝑈𝑥
                                           𝑀𝑅𝑆𝑥𝑦 =          = 1 = −1
                                                        𝑀𝑈𝑦 −3     3
Price ratio: 𝑝 /𝑝 = 20/40 = 1/2. Since 𝑀𝑅𝑆 ≠ 𝑝 /𝑝 , and 𝑀𝑈𝑦 < 0, the tangency condition would
               𝑥   𝑦                                𝑥    𝑦
yield a minimum, not a maximum.
Utility-maximizing quantities: - 𝑥* = 20, 𝑦* = 0
  Exam Tip: This is a “trap” question designed to catch mechanical Lagrangian solvers. Always
  check marginal utility signs before optimizing. If 𝑀𝑈𝑘 < 0, set 𝑥𝑘 = 0 immediately.


Quasilinear Utility: Formal Definition

A utility function of the form 𝑢(𝑥, 𝑦) = 𝑓(𝑥) + 𝑦, where 𝑓 is strictly concave and 𝑦 is a numeraire
good, exhibits quasilinear preferences:
Key properties: - Zero income effect for the nonlinear goods (𝑥): 𝜕𝑥/𝜕𝑤 = 0 - All income effects
                                                                                                ′
concentrated on the numeraire good 𝑦 - MRS depends only on 𝑥: 𝑀𝑅𝑆𝑥𝑦 = 𝑓 (𝑥) - CV = EV = CS
in welfare analysis (Willig bounds collapse)



  Reference — Koutsoyiannis (Ch.2, pp.21-25) — Consumer Equilibrium Geometry:
  Koutsoyiannis provides the classic graphical derivation of consumer equilibrium. Two conditions
  must hold:
  First condition (necessary): 𝑀𝑅𝑆𝑥𝑦 = 𝑝𝑥 /𝑝𝑦 – the slope of the indifference curve equals the slope of
  the budget line at the tangency point.
  Second condition (sufficient): Indifference curves must be convex to the origin – guaranteed by
  the axiom of diminishing MRS.
  Koutsoyiannis emphasizes that the first-order condition 𝑀𝑈𝑥 /𝑀𝑈𝑦 = 𝑝𝑥 /𝑝𝑦 is identical in both the
  cardinal and ordinal approaches. The crucial difference: the ordinal approach replaces the cardinal
  assumption of diminishing marginal utility with the assumption of diminishing MRS (convex
  indifference curves). This is a weaker and more realistic assumption – it does not require utility to
  be measurable, only that the consumer can rank bundles consistently.
  Deriving the demand curve: As the price of 𝑥 falls, the budget line rotates outward, creating a
  new tangency with a higher indifference curve. Connecting these tangency points traces the price-
  consumption line, from which the individual demand curve is derived. For normal goods, the
  demand curve always has a negative slope, following from Slutsky’s theorem.




1.8 Additional Practice Problems

                                                                    2
Practice Problem 1: Cobb-Douglas with 𝑈 = 𝑋𝑌

                            2
Q (from HW1): 𝑈 = 𝑋𝑌 . Find the demands for 𝑋 and 𝑌.
Solution:
𝑀𝑈𝑋 = 𝑌2 , 𝑀𝑈𝑌 = 2𝑋𝑌
               𝑀𝑈       2
                 𝑌 = 𝑌 = 𝑋          𝑝
Tangency: 𝑀𝑈𝑋𝑌 = 2𝑋𝑌 2𝑋 𝑝𝑌
       2𝑝
So 𝑌 = 𝑝 𝑋 𝑋
         𝑌

Substitute into budget 𝑝 𝑋 + 𝑝 𝑌 = 𝐼:
                                𝑋           𝑌

                                                                                     2
  Let’s solve this step by step: Solving for CD demands with 𝑢 = 𝑋𝑌 : 1. Tangency condition:
  𝑀𝑈𝑋   𝑌2    𝑌    𝑝𝑋           2𝑝                                                                  2𝑝
  𝑀𝑈𝑌 = 2𝑋𝑌 = 2𝑋 = 𝑝𝑌 ⇒ 𝑌 = 𝑝𝑌𝑋 𝑋 2. Substitute 𝑌 into the budget 𝑝𝑋 𝑋 + 𝑝𝑌 𝑌 = 𝐼: 𝑝𝑋 𝑋 + 𝑝𝑌 ⋅ 𝑝𝑌𝑋 𝑋 = 𝐼 3.
  Simplify: 𝑝𝑋 𝑋 + 2𝑝𝑋 𝑋 = 𝐼 ⇒ 3𝑝𝑋 𝑋 = 𝐼
  Here’s what’s really going on: The expenditure share of 𝑋 is 1/3 (coefficient on 𝑝𝑋 𝑋 is 3),
  reflecting that good 𝑋 contributes 1 of the 3 total exponent units in 𝑈 = 𝑋1 𝑌2 .


                                                   2𝑝
                                        𝑝𝑋 𝑋 + 𝑝𝑌 ( 𝑝 𝑋 𝑋) = 𝐼 ⇒ 𝑝𝑋 𝑋 + 2𝑝𝑋 𝑋 = 𝐼 ⇒ 3𝑝𝑋 𝑋 = 𝐼
                                                    𝑌
                                                                 2𝑝                 2𝑝
  Continuing: 1. Solve for 𝑋: 𝑋(𝑝, 𝐼) = 3𝑝𝐼 2. From 𝑌 = 𝑝𝑌𝑋 𝑋: 𝑌(𝑝, 𝐼) = 𝑝𝑌𝑋 ⋅ 3𝑝𝐼 = 3𝑝2𝐼
                                                𝑋                                            𝑋       𝑌

  Here’s what’s really going on: Demands follow the standard CD pattern: expenditure shares are
  proportional to the exponents. 𝑋 gets 1/3 of income (𝛼 = 1), 𝑌 gets 2/3 (𝛽 = 2), and (𝛼 + 𝛽) = 3.


                                          𝑋(𝑝, 𝐼) = 𝐼 ,               𝑌(𝑝, 𝐼) = 2𝐼
                                                   3𝑝𝑋                         3𝑝𝑌
Check: Expenditure share of 𝑋 is 1/3, of 𝑌 is 2/3.


Practice Problem 2: Perfect Complements 𝑈 = min⁡(2𝑋, 𝑌)

Q (from HW1): 𝑈 = min⁡(2𝑋, 𝑌). Find the demands for 𝑋 and 𝑌.
Solution:
At the optimum, you consume in fixed proportion: 2𝑋 = 𝑌.
Budget: 𝑝 𝑋 + 𝑝 𝑌 = 𝐼. Substituting 𝑌 = 2𝑋:
           𝑋      𝑌


  Let’s derive this together: Starting from 𝑈 = min⁡(2𝑋, 𝑌) with budget 𝑝 𝑋 + 𝑝 𝑌 = 𝐼: 1. At the
                                                                                                 𝑋       𝑌
  optimum for Leontief: 2𝑋 = 𝑌 (the arguments inside min must be equal at the kink) 2. Substitute
  𝑌 = 2𝑋 into the budget: 𝑝𝑋 𝑋 + 𝑝𝑌 (2𝑋) = 𝐼 3. Factor: 𝑋(𝑝𝑋 + 2𝑝𝑌 ) = 𝐼
  Here’s what’s really going on: The coefficient 2 on 𝑝𝑌 reflects that one unit of 𝑋 requires two
  units of 𝑌 in the optimal proportion (2𝑋 = 𝑌). The goods must be consumed in a 1:2 ratio.


                                        𝑝𝑋 𝑋 + 𝑝𝑌 (2𝑋) = 𝐼 ⇒ 𝑋(𝑝𝑋 + 2𝑝𝑌 ) = 𝐼

  Continuing: 1. Solve for 𝑋: 𝑋(𝑝, 𝐼) = 𝑝 +𝐼 2𝑝 2. Since 𝑌 = 2𝑋: 𝑌(𝑝, 𝐼) = 𝑝 +2𝐼2𝑝
                                            𝑋           𝑌                                𝑋       𝑌

  Here’s what’s really going on: Both demands decline when either price rises, but the coefficient
  2 on 𝑝𝑌 means changes in 𝑝𝑌 affect demand twice as much as changes in 𝑝𝑋 (since the proportion
  requires 2 units of 𝑌 per 𝑋).


                                     𝑋(𝑝, 𝐼) =          𝐼    ,        𝑌(𝑝, 𝐼) =      2𝐼
                                                    𝑝𝑋 + 2𝑝𝑌                      𝑝𝑋 + 2𝑝𝑌


Practice Problem 3: Checking for Diminishing MRS

Q (from HW1/Tutorial 1): For each utility function, check for diminishing MRS: (a) 𝑈 = 𝑋𝑌 (b)
                        2    2
𝑈 = ln⁡𝑋 + ln⁡𝑌 (c) 𝑈 = 𝑋 + 𝑌 (d) 𝑈 = ln⁡𝑋 + 𝑌 (e) 𝑈 = min⁡(𝑋, 𝑌)
Solution (a): 𝑈 = 𝑋𝑌 - 𝑀𝑈𝑋 = 𝑌, 𝑀𝑈𝑌 = 𝑋, 𝑀𝑅𝑆 = 𝑌/𝑋 - Along IC: 𝑑𝑢 = 𝑌𝑑𝑋 + 𝑋𝑑𝑌 = 0 ⇒ 𝑑𝑌/𝑑𝑋 = −𝑌/𝑋 -
𝑑𝑀𝑅𝑆/𝑑𝑋 = 𝑑(𝑌/𝑋)
            𝑑𝑋
                 = 𝑋(𝑑𝑌/𝑑𝑋)
                         2
                            −𝑌
                               = 𝑋(−𝑌/𝑋)
                                      2
                                         −𝑌
                                            = − 2𝑌2 < 0 - Yes, diminishing MRS. (Also quasiconcave.)
                       𝑋            𝑋               𝑋
Solution (b): 𝑈 = ln⁡𝑋 + ln⁡𝑌 - 𝑀𝑈𝑋 = 1/𝑋, 𝑀𝑈𝑌 = 1/𝑌, 𝑀𝑅𝑆 = 𝑌/𝑋 - This is a monotonic transformation
of 𝑈 = 𝑋𝑌 (take exponential: 𝑒ln⁡𝑋 + ln⁡𝑌 = 𝑋𝑌), so same MRS. - 𝑑𝑀𝑅𝑆/𝑑𝑋 < 0. Yes, diminishing MRS.
                       2    2
Solution (c): 𝑈 = 𝑋 + 𝑌 - 𝑀𝑈𝑋 = 2𝑋, 𝑀𝑈𝑌 = 2𝑌, 𝑀𝑅𝑆 = 𝑋/𝑌 - Along IC:
𝑑𝑢 = 2𝑋𝑑𝑋 + 2𝑌𝑑𝑌 = 0 ⇒ 𝑑𝑌/𝑑𝑋 = −𝑋/𝑌 - 𝑀𝑅𝑆 = 𝑋/𝑌, so 𝑑𝑀𝑅𝑆/𝑑𝑋 = 𝑌 − 𝑋(𝑑𝑌/𝑑𝑋) = 𝑌 − 𝑋(−𝑋/𝑌)
                                                                                                             2       2
                                                                    2              2     = 𝑌 +3 𝑋 > 0 - No –
                                                                                     𝑌                   𝑌       𝑌
MRS is increasing, not diminishing. These ICs are concave to the origin (not convex).
Preferences are not convex.
Solution (d): 𝑈 = ln⁡𝑋 + 𝑌 - 𝑀𝑈𝑋 = 1/𝑋, 𝑀𝑈𝑌 = 1, 𝑀𝑅𝑆 = 1/𝑋 - Along IC:
𝑑𝑢 = (1/𝑋)𝑑𝑋 + 𝑑𝑌 = 0 ⇒ 𝑑𝑌/𝑑𝑋 = −1/𝑋 - 𝑑𝑀𝑅𝑆/𝑑𝑋 = −1/𝑋2 < 0. Yes, diminishing MRS. (Quasilinear
with diminishing MRS.)
Solution (e): 𝑈 = min⁡(𝑋, 𝑌) - MRS is undefined at the kink (the indifference curve is L-shaped). -
MRS = 0 along the horizontal segment, ∞ along the vertical segment. - The function is not
differentiable at the kink. The IND set boundary is not smooth, so MRS is not defined in the
usual sense. However, the preference is convex (the UCS is convex).


Practice Problem 4: Homogeneity Checks

Q (from HW2): Check if the following utility functions are homogeneous. If so, state the
                                                                                                          2
degree. Also identify homothetic but not homogeneous cases. (a) 𝑈 = (𝑥𝑦) (b) 𝑈 = min⁡(𝑥, 2𝑦) (c)
𝑈 = 2𝑥 + 𝑦 (d) 𝑈 = 𝑥2 𝑦2 + 𝑥𝑦
                                 2                        2      2     2    4       2         4
Solution (a): 𝑈 = (𝑥𝑦) - 𝑈(𝑡𝑥, 𝑡𝑦) = (𝑡𝑥 ⋅ 𝑡𝑦) = (𝑡 𝑥𝑦) = 𝑡 (𝑥𝑦) = 𝑡 𝑈(𝑥, 𝑦) - HD(4). Also
homothetic.
Solution (b): 𝑈 = min⁡(𝑥, 2𝑦) - 𝑈(𝑡𝑥, 𝑡𝑦) = min⁡(𝑡𝑥, 2𝑡𝑦) = 𝑡 ⋅ min⁡(𝑥, 2𝑦) = 𝑡 ⋅ 𝑈(𝑥, 𝑦) - HD(1). Also
homothetic.
Solution (c): 𝑈 = 2𝑥 + 𝑦 - 𝑈(𝑡𝑥, 𝑡𝑦) = 2𝑡𝑥 + 𝑡𝑦 = 𝑡(2𝑥 + 𝑦) = 𝑡 ⋅ 𝑈(𝑥, 𝑦) - HD(1). Also homothetic.
                                                          2      2
Solution (d): 𝑈 = 𝑥2 𝑦2 + 𝑥𝑦 - 𝑈(𝑡𝑥, 𝑡𝑦) = (𝑡𝑥) (𝑡𝑦) + (𝑡𝑥)(𝑡𝑦) = 𝑡4 𝑥2 𝑦2 + 𝑡2 𝑥𝑦 ≠ 𝑡𝑘 (𝑥2 𝑦2 + 𝑥𝑦) for
any single 𝑘 - Not homogeneous. However, note that 𝑈 = 𝑥𝑦(𝑥𝑦 + 1). Since 𝑥𝑦 is HD(2), and
𝑈 = 𝑓(𝑥𝑦) where 𝑓(𝑧) = 𝑧2 + 𝑧, this is a monotonic transformation of 𝑥𝑦 (for 𝑧 > 0, 𝑓′ (𝑧) = 2𝑧 + 1 > 0
). So 𝑈 is homothetic but NOT homogeneous.
All homogeneous functions are homothetic. Functions (a), (b), (c) are homogeneous, hence
homothetic. Function (d) is NOT homogeneous but IS homothetic (monotonic transformation of
𝑥𝑦).


Practice Problem 5: Marshallian Demands and Indirect Utility

                                                                                                                      2
Q (from HW2/Tutorial 1): Derive Marshallian demands and indirect utility for: (a) 𝑈 = (𝑥𝑦)
               1/2
(b) 𝑈 = (𝑥𝑦)         (c) 𝑈 = min⁡(𝑥, 2𝑦)
                                 2
Solution (a): 𝑈 = (𝑥𝑦)
                     2
Note: 𝑈 = (𝑥𝑦) is a monotonic transformation of 𝑈 = 𝑥𝑦 (take square root). Since preferences
are ordinal, Marshallian demands are the same as for 𝑈 = 𝑥𝑦.

                                                                                                      2
  Let’s compute this step by step: Computing marginal utilities for 𝑈 = (𝑥𝑦) : 1. Partial derivative
                          2 2        2                                                  2 2
                 𝜕 (𝑥 𝑦 ) = 2𝑥𝑦 2. Partial derivative w.r.t 𝑦: 𝑀𝑈 = 𝜕 (𝑥 𝑦 ) = 2𝑥 𝑦 3. Tangency:      2
  w.r.t 𝑥: 𝑀𝑈𝑥 = 𝜕𝑥                                              𝑦  𝜕𝑦
   𝑀𝑈𝑥   2𝑥𝑦2    𝑦   𝑝𝑥
   𝑀𝑈𝑦 = 2𝑥2 𝑦 = 𝑥 = 𝑝𝑦

  Here’s what’s really going on: The MRS simplifies to 𝑦/𝑥 — the same as for 𝑢 = 𝑥𝑦 (since squaring
  is a monotonic transformation). This confirms that monotonic transformations preserve the MRS
  and thus the demand functions.


                                                 𝑀𝑈𝑥 = 2𝑥𝑦2 ,        𝑀𝑈𝑦 = 2𝑥2 𝑦
                     2       𝑝           𝑝
Tangency: 2𝑥𝑦2 = 𝑦𝑥 = 𝑝𝑥𝑦 ⇒ 𝑦 = 𝑝𝑥𝑦 𝑥
               2𝑥 𝑦
                                             𝑝
Budget: 𝑝𝑥 𝑥 + 𝑝𝑦 𝑦 = 𝐼 ⇒ 𝑝𝑥 𝑥 + 𝑝𝑦 ⋅ 𝑝𝑥𝑦 𝑥 = 2𝑝𝑥 𝑥 = 𝐼

                                                                                                                  𝑝
  Continuing: Solving the tangency condition 𝑦/𝑥 = 𝑝𝑥 /𝑝𝑦 with the budget: 1. From tangency: 𝑦 = 𝑝𝑥 𝑥
                                                                                                                  𝑦
                                                     𝑝
  2. Substitute into 𝑝𝑥 𝑥 + 𝑝𝑦 𝑦 = 𝐼: 𝑝𝑥 𝑥 + 𝑝𝑦 ⋅ 𝑝𝑥 𝑥 = 2𝑝𝑥 𝑥 = 𝐼 3. Solve: 𝑥(𝑝, 𝐼) = 2𝑝𝐼 , 𝑦(𝑝, 𝐼) = 2𝑝𝐼
                                                      𝑦                                           𝑥           𝑦

  Here’s what’s really going on: Same demands as 𝑢 = 𝑥𝑦 — confirming ordinality. The monotonic
                            2
  transformation (𝑥𝑦) does not change the optimal consumption choices.


                                                 𝑥(𝑝, 𝐼) = 𝐼 ,       𝑦(𝑝, 𝐼) = 𝐼
                                                          2𝑝𝑥                 2𝑝𝑦
Indirect utility:


  Let’s derive indirect utility: Substituting demands back into 𝑣(𝑝, 𝐼) = 𝑢(𝑥(𝑝, 𝐼), 𝑦(𝑝, 𝐼)): 1.
                   2                         2                                         𝐼4
  𝑣(𝑝, 𝐼) = (𝑥 ⋅ 𝑦) = ( 2𝑝𝐼 ⋅ 2𝑝𝐼 ) 2. Simplify: =
                               𝑥     𝑦                                               16𝑝2𝑥 𝑝2𝑦

  Here’s what’s really going on: The indirect utility is HD(4) in 𝐼 (since 𝑈 is HD(4)) and HD(0) in
  (𝑝, 𝐼) — doubling both prices and income leaves 𝑣 unchanged. The exponent 4 reflects the
  homogeneity degree of the original utility function.


                                                                                          2    4
                                                             𝑣(𝑝, 𝐼) = (𝑥 ⋅ 𝑦) = ( 𝐼 ⋅ 𝐼 ) = 𝐼 2 2
                                                                              2
                                                                                  2𝑝𝑥 2𝑝𝑦   16𝑝 𝑝                          𝑥 𝑦
                                   1/2
Solution (b): 𝑈 = (𝑥𝑦)
Again, a monotonic transformation of 𝑈 = 𝑥𝑦. Marshallian demands are the same:

                                                                               1/2
  Let’s work through this: For 𝑈 = (𝑥𝑦) , a monotonic transformation of 𝑈 = 𝑥𝑦 (square root): 1.
  Since preferences are ordinal, Marshallian demands are identical to those of 𝑈 = 𝑥𝑦 2. Same
  tangency condition 𝑦/𝑥 = 𝑝 /𝑝 leads to 𝑥(𝑝, 𝐼) = 2𝑝𝐼 , 𝑦(𝑝, 𝐼) = 2𝑝𝐼
                                                 𝑥       𝑦                                       𝑥                   𝑦

  Here’s what’s really going on: This demonstrates the ordinality of utility — taking the square
  root of a function doesn’t change the optimal choices because it’s a strictly increasing
  transformation.


                                                                           𝑥(𝑝, 𝐼) = 𝐼 ,                 𝑦(𝑝, 𝐼) = 𝐼
                                                                                    2𝑝𝑥                           2𝑝𝑦
Indirect utility:


  Let’s derive indirect utility: Substituting demands into 𝑈 = √𝑥𝑦: 1. 𝑣(𝑝, 𝐼) = √ 2𝑝𝐼 ⋅ 2𝑝𝐼 = 2 𝑝𝐼 𝑝
                                                                                                                                 𝑥   𝑦   √ 𝑥 𝑦
                                                                                                 2                         4     1
  Here’s what’s really going on: Unlike 𝑈 = (𝑥𝑦) which gives 𝑣 ∝ 𝐼 , here 𝑣 ∝ 𝐼 — reflecting the
  homogeneity degree of 1/2 + 1/2 = 1 for 𝑈 = 𝑥1/2 𝑦1/2 . Indirect utility is HD(1) in 𝐼.



                                                                     𝑣(𝑝, 𝐼) = √𝑥𝑦 = √ 𝐼 ⋅ 𝐼 =   𝐼
                                                                                      2𝑝𝑥 2𝑝𝑦 2√𝑝𝑥 𝑝𝑦
Solution (c): 𝑈 = min⁡(𝑥, 2𝑦)
At optimum: 𝑥 = 2𝑦. Budget: 𝑝 𝑥 + 𝑝 𝑦 = 𝐼.
                                                             𝑥             𝑦
Substitute 𝑥 = 2𝑦: 𝑝 (2𝑦) + 𝑝 𝑦 = 𝑦(2𝑝 + 𝑝 ) = 𝐼
                               𝑥                     𝑦                     𝑥          𝑦


  Let’s derive this: For 𝑈 = min⁡(𝑥, 2𝑦) with budget 𝑝 𝑥 + 𝑝 𝑦 = 𝐼: 1. At the Leontief optimum: 𝑥 = 2𝑦
                                                                                                     𝑥       𝑦
  (arguments inside min equalize) 2. Substitute into budget: 𝑝𝑥 (2𝑦) + 𝑝𝑦 𝑦 = 𝑦(2𝑝𝑥 + 𝑝𝑦 ) = 𝐼 3. Solve:
  𝑦(𝑝, 𝐼) = 2𝑝 𝐼+ 𝑝 , 𝑥(𝑝, 𝐼) = 2𝑝 2𝐼+ 𝑝
              𝑥    𝑦                     𝑥           𝑦

  Here’s what’s really going on: The proportion 𝑥: 𝑦 = 2: 1 means 𝑥 consumption is twice 𝑦
  consumption. The effective “price per unit of the composite” is 2𝑝𝑥 + 𝑝𝑦 .


                                                                 𝑦(𝑝, 𝐼) =          𝐼    ,               𝑥(𝑝, 𝐼) =      2𝐼
                                                                                2𝑝𝑥 + 𝑝𝑦                             2𝑝𝑥 + 𝑝𝑦
Indirect utility:


  Let’s derive it: Substituting Leontief demands into 𝑈 = min⁡(𝑥, 2𝑦): 1.
  𝑣(𝑝, 𝐼) = min⁡( 2𝑝 2𝐼+ 𝑝 , 2 ⋅ 2𝑝 𝐼+ 𝑝 ) = 2𝑝 𝐼+ 𝑝 2. Both arguments equal 𝐼/(2𝑝𝑥 + 𝑝𝑦 ), confirming the optimum is
                       𝑥   𝑦        𝑥            𝑦               𝑥     𝑦

  at the kink
   Here’s what’s really going on: Indirect utility for Leontief is simply total wealth divided by the
   “price index” 2𝑝𝑥 + 𝑝𝑦 — the cost of buying one unit of the composite consumption bundle in fixed
   proportions.


                              𝑣(𝑝, 𝐼) = min⁡(𝑥, 2𝑦) = min⁡(                  2𝐼 , 2 ⋅     𝐼    )=     𝐼
                                                                          2𝑝𝑥 + 𝑝𝑦    2𝑝𝑥 + 𝑝𝑦    2𝑝𝑥 + 𝑝𝑦


Practice Problem 6: Expenditure Function and Hicksian Demands

Q (from HW2/Tutorial 1): Find the expenditure function and the two Hicksian demands for:
                                                                    1/2
(a) 𝑈 = 𝑥2 𝑦2 + 𝑥𝑦 (b) 𝑈 = 2𝑥2 + 𝑦2 (c) 𝑈 = (𝑥𝑦)
Solution (a): 𝑈 = 𝑥2 𝑦2 + 𝑥𝑦
                                                       2 2
EMP: minimize 𝑝𝑥 𝑥 + 𝑝𝑦 𝑦 subject to 𝑥 𝑦 + 𝑥𝑦 = 𝑢‾ .
               2 2                                                                                       2
Note that 𝑥 𝑦 + 𝑥𝑦 = 𝑥𝑦(𝑥𝑦 + 1). Let 𝑧 = 𝑥𝑦. Then 𝑢 = 𝑧(𝑧 + 1) = 𝑧 + 𝑧.
Solving for 𝑧: 𝑧2 + 𝑧 − ‾𝑢 = 0 ⇒ 𝑧 = −1 + √21 + 4𝑢 (positive root).
                                                                ‾


              𝑀𝑈      2      𝑦(2𝑥𝑦 + 1)    𝑝
Tangency: 𝑀𝑈𝑥𝑦 = 2𝑥𝑦2 + 𝑦 = 𝑥(2𝑥𝑦 + 1) = 𝑦𝑥 = 𝑝𝑥𝑦 (for 2𝑥𝑦 + 1 ≠ 0)
                   2𝑥 𝑦 + 𝑥
       𝑝                  𝑝
So 𝑦 = 𝑝𝑥𝑦 𝑥. Then 𝑥𝑦 = 𝑝𝑥𝑦 𝑥2 = 𝑧 (the value defined above).


   Let’s work through this step by step: For 𝑈 = 𝑥2 𝑦2 + 𝑥𝑦, solving the tangency condition: 1.
                          2
                                  𝑦(2𝑥𝑦 + 1)       𝑝                                 𝑝                           𝑝
   Tangency: 𝑀𝑈  2𝑥𝑦 + 𝑦
                         = 𝑥(2𝑥𝑦 + 1) = 𝑦𝑥 = 𝑝𝑥 2. Hence 𝑦 = 𝑝𝑥 𝑥, giving 𝑥𝑦 = 𝑝𝑥 𝑥2 3. Let 𝑧 = −1 + √21 + 4𝑢 (solving           ‾
             𝑀𝑈 = 2
               𝑥
                   𝑦   2𝑥 𝑦 + 𝑥                        𝑦                             𝑦                           𝑦
                                                   𝑝                            𝑝
   𝑧2 + 𝑧 = 𝑢‾ where 𝑧 = 𝑥𝑦) 4. Then 𝑥 = √ 𝑝𝑦𝑥 𝑧 and 𝑦 = √ 𝑝𝑥𝑦 𝑧
   Here’s what’s really going on: The 2𝑥𝑦 + 1 terms cancel in the MRS ratio (as long as 2𝑥𝑦 + 1 ≠ 0),
   leaving the familiar 𝑦/𝑥 tangency — the same as 𝑈 = 𝑥𝑦. The utility transformation 𝑈 = 𝑥𝑦(𝑥𝑦 + 1)
   preserves the MRS.


                                                              √ 𝑝𝑦                     √𝑝
                                                           𝑥 = 𝑝 𝑧,                 𝑦 = 𝑝𝑥 𝑧
                                                                 𝑥                       𝑦

Hicksian demands:

                                                                           𝑝                     𝑝
   Expressing in terms of 𝑝 and 𝑢‾ : 1. From 𝑥 = √ 𝑝𝑦 𝑧 and 𝑦 = √ 𝑝𝑥 𝑧 with 𝑧 = −1 + √21 + 4𝑢 2. Write as
                                                                                                                         ‾
                                                                            𝑥                    𝑦
                                          𝑝                                          𝑝
                            ‾ = √ 𝑦 ⋅ −1 + √1 + 4𝑢 ℎ (𝑝, 𝑢)
   Hicksian demands: ℎ𝑥 (𝑝, 𝑢)                           ‾ = √ 𝑥 ⋅ −1 + √1 + 4𝑢
                                                            ‾                                        ‾
                                 𝑝         2   𝑥
                                                    𝑦         𝑝         2                𝑦
                                                                                                                                     1/2
   Here’s what’s really going on: Each Hicksian demand depends on the price ratio (𝑝𝑦 /𝑝𝑥 )                                                and
   on 𝑢‾ through the transformed variable 𝑧. The square root reflects the Cobb-Douglas-like structure
   of the underlying 𝑥𝑦 core.


                                         √ 𝑝𝑦 −1 + √1 + 4𝑢‾                                    √ 𝑝𝑥 −1 + √1 + 4𝑢‾
                              ℎ𝑥 (𝑝, 𝑢)
                                     ‾ =
                                           𝑝𝑥 ⋅             ,                       ℎ𝑦 (𝑝, 𝑢)
                                                                                           ‾ =
                                                                                                 𝑝𝑦 ⋅
                                                   2                                                     2
Expenditure function:

                                                                                                             𝑝       𝑝
   Building the expenditure function: 1. 𝑒(𝑝, ‾𝑢) = 𝑝𝑥 ℎ𝑥 + 𝑝𝑦 ℎ𝑦 = 𝑝𝑥 √ 𝑝𝑦 𝑧 + 𝑝𝑦 √ 𝑝𝑥 𝑧 2. Simplify each
                                                                                                             𝑥       𝑦

   term: √𝑝𝑥 𝑝𝑦 𝑧 + √𝑝𝑦 𝑝𝑥 𝑧 = 2√𝑝𝑥 𝑝𝑦 𝑧 3. Substitute 𝑧 = −1 + √21 + 4𝑢 : 𝑒(𝑝, ‾𝑢) = 2√𝑝𝑥 𝑝𝑦 ⋅ −1 + √21 + 4𝑢
                                                                                             ‾                               ‾



   Here’s what’s really going on: The expenditure function factorizes into a price index √𝑝 𝑝 and a
                                                                                                                                 𝑥 𝑦
   utility transformation. It is HD(1) in prices and increasing in 𝑢‾ .


                                                            √
                                           ‾ = 𝑝 ℎ + 𝑝 ℎ = 2 𝑝 𝑝 ⋅ −1 + √1 + 4𝑢
                                                                              ‾
                                      𝑒(𝑝, 𝑢)   𝑥 𝑥   𝑦 𝑦     𝑥 𝑦       2
Solution (b): 𝑈 = 2𝑥2 + 𝑦2
EMP: minimize 𝑝 𝑥 + 𝑝 𝑦 subject to 2𝑥2 + 𝑦2 = 𝑢‾ .
                      𝑥            𝑦
Lagrangian: ℒ = 𝑝 𝑥 + 𝑝 𝑦 + 𝜇(𝑢‾ − 2𝑥2 − 𝑦2 )
                          𝑥            𝑦
FOCs:

                                                             2         2                                                                                   2    2
  Let’s set up the FOCs: For 𝑈 = 2𝑥 + 𝑦 with EMP Lagrangian ℒ = 𝑝𝑥 𝑥 + 𝑝𝑦 𝑦 + 𝜇(𝑢‾ − 2𝑥 − 𝑦 ): 1.
  𝜕ℒ/𝜕𝑥 = 𝑝𝑥 − 4𝜇𝑥 = 0 (note 4 = 2 × 2 from derivative of 2𝑥2 ) 2. 𝜕ℒ/𝜕𝑦 = 𝑝𝑦 − 2𝜇𝑦 = 0 3. These give:
  𝑝𝑥 = 4𝜇𝑥 and 𝑝𝑦 = 2𝜇𝑦
  Here’s what’s really going on: The FOCs set the price of each good equal to the marginal cost of
  tightening the constraint (𝜇) times the marginal product of that good in generating utility. The
  factor 4 vs 2 reflects the different exponents on 𝑥 and 𝑦.


                                                                 𝑝𝑥 − 4𝜇𝑥 = 0,                       𝑝𝑦 − 2𝜇𝑦 = 0
              𝑝                                    2𝑝
Tangency: 𝑝𝑥 = 4𝜇𝑥
               2𝜇𝑦 = 𝑦 ⇒ 𝑦 = 𝑝 𝑥
                     2𝑥       𝑥
               𝑦                                    𝑦

                                                         2𝑝           2
Substitute into constraint: 2𝑥2 + ( 𝑝𝑦𝑥 𝑥) = 𝑢‾


                                                                                       2𝑝        2                              4𝑝2𝑥 2                           4𝑝2
  Substituting into the constraint: 1. 2𝑥2 + ( 𝑝𝑦𝑥 𝑥) = 𝑢‾ 2. 2𝑥2 +                                                              2
                                                                                                                                    𝑥 = 𝑢‾ 3. Factor 𝑥2 : 𝑥2 (2 + 2𝑥 ) = 𝑢‾
                                                                                                                                𝑝𝑦                                𝑝𝑦

  Here’s what’s really going on: The term in parentheses is the “effective price” of 𝑥 in utility
                                                                                                            2
  terms — it incorporates both the direct contribution (2𝑥 ) and the indirect contribution through the
                2 2
  required 𝑦 (4𝑝𝑥 /𝑝𝑦 ).



                                                             2
                                                                      4𝑝2𝑥         2
                                                                                                                     4𝑝2𝑥
                                                        2𝑥 +                   𝑥       = 𝑢‾ ⇒ 𝑥2 (2 +                           ) = 𝑢‾
                                                                       𝑝2𝑦                                            𝑝2𝑦


                              2                                                                     2     2       𝑢𝑝2𝑦
                                                                                                                  ‾
  Solving for ℎ𝑥 : 1. 𝑥 =                       𝑢‾       2. Multiply numerator and denominator by 𝑝   : 𝑥   =             3. Take
                                           2 + 4𝑝2𝑥 /𝑝2𝑦                                            𝑦         2𝑝2𝑦 + 4𝑝2𝑥

                                                             √      𝑢𝑝2𝑦
                                                                    ‾
  the positive square root: ℎ𝑥 (𝑝, ‾𝑢) =
                                                                 2𝑝2𝑦 + 4𝑝2𝑥

  Here’s what’s really going on: Hicksian demand for 𝑥 decreases when 𝑝𝑥 rises (the denominator
  increases) and increases with 𝑢‾ (higher utility target requires more of both goods). It rises with 𝑝𝑦
  since 𝑝 makes 𝑦 more expensive, inducing substitution toward 𝑥.
          𝑦



                                                                                                                √       ‾ 2
                                                                                                                        𝑢𝑝
                                                        ℎ𝑥       ‾ =√
                                                             (𝑝, 𝑢)                         𝑢
                                                                                            ‾
                                                                                                          =
                                                                                                                          𝑦
                                                                                   2 + 4𝑝2𝑥 /𝑝2𝑦                    2𝑝2𝑦 + 4𝑝2𝑥

                                                                                                             ‾ 2
                                                                                                            𝑢𝑝
                                            2𝑝                                              2𝑝       √
  Now for ℎ𝑦 : 1. ℎ𝑦 (𝑝, ‾𝑢) = 𝑝 𝑥 ⋅ ℎ𝑥 (𝑝, ‾𝑢) 2. ℎ𝑦 (𝑝, ‾𝑢) = 𝑝 𝑥 ⋅
                                                                                                               𝑦
                                               𝑦                                                𝑦        2𝑝𝑦 + 4𝑝2𝑥
                                                                                                           2


  Here’s what’s really going on: ℎ𝑦 inherits the substitution properties from ℎ𝑥 scaled by the
  optimal proportion 2𝑝 /𝑝 . Since 𝑦 is more costly to substitute (higher exponent in utility), its
                                  𝑥        𝑦
  compensated demand is more sensitive to price changes.


                                                                                                                    2
                                                                               2𝑝 √ 𝑢𝑝   ‾
                                                                                            𝑦
                                                                  ℎ𝑦 (𝑝, ‾𝑢) = 𝑝 𝑥 ⋅   2
                                                                                𝑦    2𝑝    + 4𝑝2             𝑦              𝑥
Expenditure function: 𝑒(𝑝, ‾𝑢) = 𝑝 ℎ𝑥 + 𝑝 ℎ𝑦 .
                                                             𝑥                 𝑦
                                  1/2
Solution (c): 𝑈 = (𝑥𝑦)
                1/2
Since (𝑥𝑦)    is a monotonic transformation of 𝑥𝑦, we can use the same approach as the CD case
with 𝛼 = 𝛽 = 1/2. That is, 𝑢(𝑥, 𝑦) = 𝑥1/2 𝑦1/2 .
Using the standard CD formulas with 𝛼 = 𝛽 = 1/2, 𝛼 + 𝛽 = 1:

                                                 1/2
  Let’s derive this: For 𝑈 = (𝑥𝑦)                          = 𝑥1/2 𝑦1/2 (CD with 𝛼 = 𝛽 = 1/2, 𝛼 + 𝛽 = 1): 1. Using the standard CD
                                                                 𝛽       𝑝   𝛽                                1/2                       𝑝
  Hicksian demand formula: ℎ𝑥 = 𝑢‾ ⋅ ( 𝛼𝛽 ) ⋅ ( 𝑝𝑦 ) 2. With 𝛼 = 𝛽 = 1/2: ( 1/2 )                                   = 1, so ℎ𝑥 (𝑝, 𝑢) ‾√ 𝑦
                                                                                                                                   ‾ =𝑢
                                                                         𝑥  1/2                                                         𝑝𝑥

  Here’s what’s really going on: When both exponents are equal, the constant term simplifies to 1,
  and Hicksian demand depends only on 𝑢‾ and the square root of the price ratio.


                                                                                         1/2       𝑝 1/2    √𝑝
                                                   ℎ𝑥 (𝑝, 𝑢) ‾ ⋅ ( 1/2 )
                                                          ‾ =𝑢                                 ⋅ ( 𝑝𝑦 ) = 𝑢‾ 𝑝𝑦
                                                                   1/2                            𝑥           𝑥

                                                       𝛼     𝑝       𝛼               𝑝    1/2         𝑝
  By symmetry: 1. ℎ𝑦 (𝑝, 𝑢) ‾ ⋅ (𝛽) ⋅ ( 𝑥 ) = 𝑢
                         ‾ =𝑢                 ‾ ⋅1⋅( 𝑥)                                         = 𝑢√
                                                                                                  ‾   𝑥
                                 𝛼     𝑝𝑦           𝑝𝑦                                               𝑝𝑦

  Here’s what’s really going on: The two Hicksian demands are symmetric: ℎ𝑥 depends on
              1/2                         1/2
  (𝑝𝑦 /𝑝𝑥 )         and ℎ𝑦 on (𝑝𝑥 /𝑝𝑦 )         , reflecting the equal importance (𝛼 = 𝛽) of both goods.


                                                                                         1/2       𝑝 1/2    √𝑝
                                                   ℎ𝑦 (𝑝, 𝑢) ‾ ⋅ ( 1/2 )
                                                          ‾ =𝑢                                 ⋅ ( 𝑝𝑥 ) = 𝑢‾ 𝑝𝑥
                                                                   1/2                            𝑦           𝑦
Expenditure function:

                                                                                                                      𝑝          𝑝
  Building from the Hicksian demands: 1. 𝑒(𝑝, 𝑢)                 ‾ √ 𝑦 + 𝑝 ⋅ 𝑢√
                                              ‾ = 𝑝 ℎ + 𝑝 ℎ = 𝑝 ⋅𝑢           ‾
                                                                                𝑝 2. Simplify:
                                                                                 𝑥
                                                   𝑥 𝑥   𝑦 𝑦   𝑥    𝑝     𝑦                                            𝑥          𝑦

   = 𝑢‾ √𝑝𝑥 𝑝𝑦 + 𝑢‾ √𝑝𝑦 𝑝𝑥 = 2𝑢‾ √𝑝𝑥 𝑝𝑦
  Here’s what’s really going on: The expenditure function is proportional to √𝑝𝑥 𝑝𝑦 , the geometric
  mean of the two prices, scaled by 2𝑢‾ . This is HD(1) in prices and linear in 𝑢‾ . Shephard’s lemma:
  𝜕𝑒/𝜕𝑝𝑥 = 𝑢‾ √𝑝𝑦 /𝑝𝑥 = ℎ𝑥 ✓.


                                                              √ 𝑝𝑦         𝑝
                                                                         ‾√ 𝑥
                                                𝑒(𝑝, 𝑢)
                                                     ‾ = 𝑝 ⋅𝑢
                                                          𝑥
                                                            ‾
                                                                𝑝 + 𝑝𝑦 ⋅ 𝑢 𝑝 = 2𝑢√𝑝𝑥 𝑝𝑦
                                                                                ‾
                                                                                 𝑥                    𝑦



Practice Problem 7: Log-Linear Demand Elasticities

Q (from Final Exam Q2b): The log of an individual’s demand for good X is:


  Let’s set this up: Starting from a log-linear (constant-elasticity) demand specification: 1. The
  demand function is written in log-log form: ln𝑋 = 𝑎ln⁡𝑃𝑥 + 𝛾ln⁡𝑃𝑦 + 𝛿ln⁡𝑃𝑧 + 𝜂ln⁡𝐼 2. In this form, each
  coefficient is a constant elasticity: - 𝑎 = 𝜕ln⁡𝑋/𝜕ln⁡𝑃𝑥 : own-price elasticity - 𝛾 = 𝜕ln⁡𝑋/𝜕ln⁡𝑃𝑦 : cross-price
  elasticity w.r.t 𝑃𝑦 - 𝛿 = 𝜕ln⁡𝑋/𝜕ln⁡𝑃𝑧 : cross-price elasticity w.r.t 𝑃𝑧 - 𝜂 = 𝜕ln⁡𝑋/𝜕ln⁡𝐼: income elasticity
  Here’s what’s really going on: The log-log form is convenient because elasticities are constant
  parameters rather than functions of prices and income. An 𝜂 = 0.8 means a 1% increase in income
  raises demand by 0.8% (necessity good).


                                          ln⁡𝑋(𝑃𝑥 , 𝑃𝑦 , 𝑃𝑧 , 𝐼) = 𝑎ln⁡𝑃𝑥 + 𝛾ln⁡𝑃𝑦 + 𝛿ln⁡𝑃𝑧 + 𝜂ln⁡𝐼

   i. What is the cross-price elasticity with good Z?
  ii. Given 𝑎 = −0.5, 𝛾 = 0.4, 𝛿 = 0.8, 𝜂 = 0.8: What is income elasticity? Is X a luxury, necessity, or
      inferior good?
  iii. Is good Z a gross substitute or a gross complement for good X?
  iv. If the price of Y were to fall by 5%, by what percent would quantity demanded of X
      change?
   v. If the price of good X decreases, would this person’s expenditure on X increase, decrease,
      or remain the same?

Solution:

   i. Cross-price elasticity with good Z: 𝜀𝑥𝑧 = 𝜕ln⁡𝑋/𝜕ln⁡𝑃𝑧 = 𝛿
   ii. Income elasticity: 𝜀𝑥𝐼 = 𝜕ln⁡𝑋/𝜕ln⁡𝐼 = 𝜂 = 0.8. Since 0 < 𝜀𝑥𝐼 < 1, X is a necessity (normal good
      with income elasticity less than 1).
  iii. Cross-price elasticity with good Z is 𝛿 = 0.8 > 0, so X and Z are gross substitutes
      (positive cross-price elasticity means when 𝑃𝑧 rises, demand for X rises).
  iv. Cross-price elasticity with good Y: 𝜀𝑥𝑦 = 𝛾 = 0.4. If 𝑃𝑦 falls by 5%, quantity of X changes by:
      %Δ𝑄𝑥 = 𝜀𝑥𝑦 × (%Δ𝑃𝑦 ) = 0.4 × (−5%) = −2%. Demand for X decreases by 2% (X and Y are
      gross substitutes, so when Y becomes cheaper, consumers substitute toward Y).
   v. Own-price elasticity: 𝜀𝑥𝑥 = 𝑎 = −0.5. Since |𝜀𝑥𝑥 | = 0.5 < 1, demand is inelastic. When price
      decreases for an inelastic good, expenditure (𝑃𝑥 × 𝑋) decreases (the quantity increase is
      proportionally smaller than the price decrease).


Practice Problem 8: Perfect Substitutes Corner Solution

Q (from Final Exam Q2c): 𝑈(𝑋, 𝑌) = 𝑋 + 3𝑌, 𝑃𝑋 = 20, 𝑃𝑌 = 40, 𝐼 = 400. Choose quantities that
maximize utility.
Solution:
Step 1: Identify the utility structure. - 𝑈 = 𝑋 + 3𝑌 is linear (perfect substitutes) - 𝑀𝑈𝑋 = 1,
𝑀𝑈𝑌 = 3 - 𝑀𝑅𝑆 = 1/3
Step 2: Compare MRS to the price ratio. - 𝑃𝑋 /𝑃𝑌 = 20/40 = 1/2 - 𝑀𝑅𝑆 = 1/3 < 1/2
Step 3: Determine the corner. Since 𝑀𝑅𝑆 < 𝑃𝑋 /𝑃𝑌 , the marginal utility per dollar for good X is:
- 𝑀𝑈𝑋 /𝑃𝑋 = 1/20 = 0.05 - 𝑀𝑈𝑌 /𝑃𝑌 = 3/40 = 0.075
𝑀𝑈𝑋 /𝑃𝑋 < 𝑀𝑈𝑌 /𝑃𝑌 , so you get more utility per dollar from good Y. You should spend all income
on good Y.


  Let’s work through this: For 𝑈 = 𝑋 + 3𝑌 (perfect substitutes) with 𝑃𝑋 = 20, 𝑃𝑌 = 40, 𝐼 = 400: 1.
  Compute marginal utility per dollar: - 𝑀𝑈𝑋 /𝑃𝑋 = 1/20 = 0.05 - 𝑀𝑈𝑌 /𝑃𝑌 = 3/40 = 0.075 2. Since
  𝑀𝑈𝑌 /𝑃𝑌 > 𝑀𝑈𝑋 /𝑃𝑋 , you get more “bang per buck” from good Y 3. Hence spend all income on Y:
  𝑌* = 𝐼/𝑃𝑌 = 400/40 = 10, 𝑋* = 0
  Here’s what’s really going on: For perfect substitutes, the optimum is always at a corner unless
  𝑀𝑅𝑆 exactly equals the price ratio. Compare 𝑀𝑈𝑖 /𝑝𝑖 across goods and spend everything on the
  highest. Utility: 𝑈(0, 10) = 30 > 𝑈(20, 0) = 20, confirming Y-corner is best.


                                       *                           *
                                     𝑌 = 𝐼/𝑃𝑌 = 400/40 = 10,      𝑋 =0
Utility: 𝑈(0, 10) = 0 + 3(10) = 30
Verify other corner: If all income spent on X: 𝑋 = 400/20 = 20, 𝑈(20, 0) = 20 + 0 = 20 < 30. So the
Y-corner is optimal.
                                           *    *
Utility-maximizing quantities: 𝑋 = 0, 𝑌 = 10.


  Exam Tip: For perfect substitutes, the optimum is always at a corner (unless 𝑀𝑅𝑆 = 𝑝 /𝑝 exactly, in
                                                                                            𝑥      𝑦
  which case any bundle on the budget line is optimal). Compute 𝑀𝑈𝑖 /𝑝𝑖 for each good and spend
  everything on the good with the highest marginal utility per dollar.
Practice Problem 9: Diminishing Marginal Utility and Downward-Sloping Demand

Q (from HW2): Do Cobb-Douglas utility functions exhibit diminishing marginal utility? Are
their Marshallian demands downward sloping? What can you infer about the necessity of
diminishing marginal utility for downward-sloping demands?
Solution:
              2             2                  2
For 𝑈 = (𝑥𝑦) : - 𝑀𝑈𝑥 = 2𝑥𝑦 , 𝜕𝑀𝑈𝑥 /𝜕𝑥 = 2𝑦 > 0 – increasing marginal utility in 𝑥, not diminishing!
                                                                       2
- But Marshallian demand is 𝑥(𝑝, 𝐼) = 𝐼/(2𝑝𝑥 ), so 𝜕𝑥/𝜕𝑝𝑥 = −𝐼/(2𝑝𝑥 ) < 0 – downward sloping.
For 𝑈 = min(𝑥, 2𝑦): - Marginal utility is not defined at the kink, but the function is HD(1) and
Leontief. - Marshallian demand: 𝑥(𝑝, 𝐼) = 2𝐼/(2𝑝𝑥 + 𝑝𝑦 ) – downward sloping in 𝑝𝑥 .

Inference: Diminishing marginal utility is not necessary for downward-sloping demand. What
matters is the curvature of indifference curves (convexity/diminishing MRS), not the curvature
of the utility function itself. Since utility is ordinal, marginal utility can be transformed
arbitrarily by monotonic transformations. The MRS (ratio of MUs) is the economically
meaningful object.



1.9 New Exam Questions from the Final

Why this matters for your exam: These are actual exam questions. Study them carefully —
the patterns repeat.

Final Exam Q1b: Negroni Cocktail (Full Question)

Q (Final 2023, Q1b): After grading exams, your instructor only obtains utility from his
favorite cocktail – the Negroni. Each Negroni consists of 1 ounce of Gin, 1 ounce of red
Vermouth, and 1 ounce of Campari. Let G stand for ounces of Gin, V stands for ounces of
Vermouth, and C stands for ounces of Campari. Each good has a price denoted by 𝑝𝐺 , 𝑝𝑉 , and
𝑝𝐶 respectively.

   i. Write your instructor’s utility function.
   ii. Find his Marshallian demand for Gin.
  iii. Find his Hicksian demand for Campari.
  iv. Find the expenditure function.

Solution:

   i. Utility function: 𝑈(𝐺, 𝑉, 𝐶) = min⁡{𝐺, 𝑉, 𝐶}

This is a Leontief (perfect complements) utility function – all three goods must be consumed in
fixed 1:1:1 proportions.

   ii. Marshallian demand for Gin: As derived in 1B-Q6 (see above), at optimum 𝐺 = 𝑉 = 𝐶 = 𝑞.

Budget: 𝑝 𝐺 + 𝑝 𝑉 + 𝑝 𝐶 = 𝑤 ⇒ 𝑞(𝑝 + 𝑝 + 𝑝 ) = 𝑤
          𝐺       𝑉    𝐶              𝐺    𝑉       𝐶


  Let’s solve this step by step: For 𝑈(𝐺, 𝑉, 𝐶) = min⁡(𝐺, 𝑉, 𝐶) with budget 𝑝𝐺 𝐺 + 𝑝𝑉 𝑉 + 𝑝𝐶 𝐶 = 𝑤: 1. At the
  Leontief optimum, all goods are consumed in fixed 1:1:1 proportion: 𝐺 = 𝑉 = 𝐶 = 𝑞 2. Substitute:
  𝑝𝐺 𝑞 + 𝑝𝑉 𝑞 + 𝑝𝐶 𝑞 = 𝑤 ⇒ 𝑞(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 ) = 𝑤 3. Solve: 𝑞 = 𝑤/(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 ) 4. Hence
  𝐺(𝑝, 𝑤) = 𝑤/(𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 )
  Here’s what’s really going on: The Negroni requires equal parts of Gin, Vermouth, and Campari.
  The Marshallian demand treats all three as a composite good with “price” 𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 (the cost of
  one cocktail).


                                                   𝐺(𝑝, 𝑤) =        𝑤
                                                               𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶

  iii. Hicksian demand for Campari: From the EMP, at optimum 𝐺 = 𝑉 = 𝐶 = ‾𝑢.


  Let’s work through this: For the EMP with 𝑈 = min⁡(𝐺, 𝑉, 𝐶) ≥ 𝑢‾ : 1. The minimum utility constraint
  min⁡(𝐺, 𝑉, 𝐶) ≥ 𝑢‾ requires each good ≥ 𝑢‾ 2. Cost minimization sets each exactly at 𝑢‾ (no excess) 3.
  Hence ℎ𝐶 (𝑝, 𝑢) = ℎ𝐺 (𝑝, 𝑢) = ℎ𝑉 (𝑝, 𝑢) = 𝑢‾
  Here’s what’s really going on: Hicksian demand for Campari (and other goods) is independent
  of prices — with Leontief preferences, there is zero substitution elasticity. Even if Campari
  becomes very expensive, you still must consume exactly 𝑢‾ ounces.


                                                         ℎ𝐶 (𝑝, 𝑢) = 𝑢‾
(Price-independent – no substitution.)

  iv. Expenditure function:


  Building from the Hicksian demands: 1.
  𝑒(𝑝, 𝑢) = 𝑝𝐺 ℎ𝐺 + 𝑝𝑉 ℎ𝑉 + 𝑝𝐶 ℎ𝐶 = 𝑝𝐺 𝑢‾ + 𝑝𝑉 𝑢‾ + 𝑝𝐶 𝑢‾ = 𝑢(𝑝
                                                            ‾
                                                                𝐺
                                                                  + 𝑝𝑉 + 𝑝𝐶 )
  Here’s what’s really going on: The expenditure function is the cost of buying 𝑢‾ units of each
  input, i.e., 𝑢‾ Negroni cocktails at price 𝑝𝐺 + 𝑝𝑉 + 𝑝𝐶 each. It is HD(1) in 𝑝 and linear in 𝑢‾ . Duality
  checks: 𝑒(𝑝, 𝑣(𝑝, 𝑤)) = 𝑤 and 𝑣(𝑝, 𝑒(𝑝, ‾𝑢)) = 𝑢‾ .


                                                 𝑒(𝑝, 𝑢) = 𝑢(𝑝
                                                           ‾
                                                              𝐺
                                                                + 𝑝𝑉 + 𝑝𝐶 )


Final Exam Q1c: Quasilinear Corner

Q (Final 2023, Q1c): 𝑈 = 𝑋 + ln⁡(𝑌). Find the demands for X and Y. Suppose you only have 1 cent
(𝐼 = 0.01). Which goods do you buy? Why?
Solution:
From 1B-Q7: Marshallian demands are: - 𝑥(𝑝, 𝐼) = 𝐼/𝑝𝑥 − 1 (if 𝐼 ≥ 𝑝𝑥 ) - 𝑦(𝑝, 𝐼) = 𝑝𝑥 /𝑝𝑦

With 𝐼 = 0.01 (1 cent), assuming 𝑝𝑥 ≥ 0.01 in most reasonable settings, we have 𝐼 < 𝑝𝑥 , so 𝑥 would
be negative. Therefore:


  Let’s work through this: For 𝑈 = 𝑋 + ln⁡𝑌 with 𝐼 = 0.01: 1. Interior solution would require 𝑥 = 𝐼/𝑝𝑥 − 1
  (from derived Marshallian demand) 2. With 𝐼 = 0.01, if 𝑝𝑥 ≥ 0.01, then 𝐼/𝑝𝑥 − 1 ≤ 0 — the interior
  solution is infeasible 3. Corner solution: set 𝑥* = 0, spend all income on 𝑦: 𝑦* = 𝐼/𝑝𝑦
  Here’s what’s really going on: With very low income, you cannot afford the “fixed cost” (𝑝𝑥 ) of
  buying positive 𝑥. All income goes to the log-good 𝑦 where marginal utility 1/𝑦 starts infinitely high,
  giving the best initial “bang per buck.”


                                                     𝑥* = 0,     𝑦* = 𝐼/𝑝𝑦
You buy only good Y (the log-good). Why? Because the marginal utility of 𝑌 starts very high
(when 𝑌 is small, 𝑀𝑈𝑦 = 1/𝑌 is large), so you spend the tiny income on the good that gives the
highest initial marginal utility per dollar. With very low income, you cannot afford to reach the
satiation point for 𝑌.
1.10 Key Formulas — Consumer Theory

Why this matters for your exam: This is your cheat sheet. If you know these formulas cold,
you have the toolkit for 90% of exam questions.


 Concept                                Key Formula/Result                            Exam Frequency

                                        Completeness +
 Rational preferences                                                                                High
                                        transitivity

 SM ⇒ downward-sloping ICs              Proof by contradiction                                     Medium

 Convexity ⇔ quasiconcavity             min{𝑢(𝑥), 𝑢(𝑦)} trick                                  Very High

                                        Project onto 45-degree
 Debreu existence                                                                                  Medium
                                        line

 SM ⇒ M ⇒ LNS                           𝛿 = 𝜀/√𝑁                                                     High

 dMRS/dx ⇔ quasiconcavity               Bordered Hessian                                   High (A-level)

 Walrasian demand (CD)                  𝑥𝑘 = ∑𝛼𝑘𝛼 ⋅ 𝑝𝑤𝑘                                        Very High

 Roy’s identity                         𝑥𝑘 = −(𝜕𝑣/𝜕𝑝𝑘 )/(𝜕𝑣/𝜕𝑤)                                      High

 Shephard’s lemma                       ℎ𝑘 = 𝜕𝑒/𝜕𝑝𝑘                                                  High

 Hicksian demand (CD)                   ℎ𝑘 = 𝑢‾ 1/( ∑ 𝛼) ⋅ (price ratio term)                        High

                                        𝑥(𝑝, 𝑤) = ℎ(𝑝, 𝑣(𝑝, 𝑤)),
 Duality                                                                                       Very High
                                        ℎ(𝑝, 𝑢) = 𝑥(𝑝, 𝑒(𝑝, 𝑢))

                                        𝑥𝑘 = 𝑎𝑘 𝑤/ ∑ 𝑎𝑖 𝑝𝑖 ;
 Leontief                                                                                          Medium
                                        ℎ𝑘 = 𝑎𝑘 𝑢

                                        Check 𝐼 ≥ 𝑝𝑥 for interior
 Quasilinear corner                                                                                  High
                                        𝑥

 Good with a bad                        Check sign of MU first                                     Medium

 Log-linear elasticities                𝜀 = coefficient                                            Medium



  Professor’s Corner – The Big Picture: Consumer theory rests on three pillars: (1) preference
  axioms (completeness, transitivity, continuity, monotonicity, convexity) that define what it means for
  a consumer to be “rational,” (2) the UMP/EMP duality framework that generates observable
  demand functions, and (3) the special functional forms (CD, Leontief, quasilinear, linear) that yield
  closed-form solutions. Every exam question tests at most two of these pillars simultaneously. The
  most common question pattern: “state the axioms (pillar 1), derive demands from a specific utility
  function (pillar 2), and interpret the properties (pillar 3).” Master all three and you master
  consumer theory.



End of Topic 1: Consumer Theory & Preferences. Total: 18 existing solved questions integrated
+ 9 new practice problems added from homework, tutorials, and final exam.
Topic 2: Demand Theory & Elasticities

  Exam weight: 14–20 marks (typically 1 question). Common question types: log-linear demand
  interpretation, Burger King demand problem, Lerner Index pricing. Key sources: Koutsoyiannis
  Ch.2, Munoz-Garcia Ch.2–3, §7.2.3 Advanced references: Munoz-Garcia Ch.2 (Slutsky Matrix
  pp.61–64, WARP and Demand pp.99–117, Hicksian-Walrasian relationship pp.129–135),
  Koutsoyiannis Ch.2 (Pragmatic approach pp.53–60)




2.1 Core Elasticity Concepts

Why this matters for your exam: Elasticities are the single most tested concept in this topic.
Know how to compute them, classify them, and interpret them — you’ll see them in every
demand question.

2.1.1 Point vs Arc Elasticity

Here’s the distinction you need to nail: point elasticity for small (infinitesimal) changes,
arc elasticity for large (discrete) changes.


 Type                      Formula                                   When to Use

 Point elasticity          𝜀𝑋, 𝑃 = 𝜕𝑋 ⋅ 𝑃 = %Δ𝑋
                                   𝜕𝑃 𝑋     %Δ𝑃                      Infinitesimal (small) price changes

                                   Δ𝑋 𝑃1 + 𝑃2
                                                                     Discrete (large) price changes —
 Arc elasticity            𝜀arc
                            𝑋, 𝑃 = Δ𝑃 ⋅ 𝑋1 + 𝑋2
                                                                     elasticity at the chord midpoint


2.1.2 Log-Linear (Constant Elasticity) Demand

This is the single most important functional form for your exam. Know it cold. The
most common functional form in empirical demand estimation:


  Let’s work through this step by step: We start with the constant-elasticity (log-linear) demand
                                                                                      𝛾 𝛿 𝜀 𝜂
  specification: 1. Assume demand takes the multiplicative form 𝑋 = 𝛼𝑃𝑋 𝑃𝑍 𝑃𝑊 𝐼 , where 𝛼 is a scale
  parameter and 𝛾, 𝛿, 𝜀, 𝜂 are the elasticities. 2. This form is chosen because it yields constant
  elasticities — the marginal effect of each variable depends on the current level of all variables, but
  the elasticity (percentage response) is constant. 3. Taking natural logs transforms this into a linear-
  in-logs function suitable for OLS estimation.
  Here’s what’s really going on: Multiplicative demand is the empirical workhorse because
  coefficients are directly interpretable as elasticities: a 1% change in 𝑃𝑋 changes 𝑋 by 𝛾%, holding
  other factors constant.


                                                              𝛾 𝛿 𝜀 𝜂
                                                      𝑋 = 𝛼𝑃𝑋 𝑃𝑍 𝑃𝑊 𝐼
Taking natural logs:

                                                                                                                𝛾 𝛿 𝜀 𝜂
  Here’s how the transformation works: We start from the multiplicative demand 𝑋 = 𝛼𝑃𝑋 𝑃𝑍 𝑃𝑊 𝐼 : 1.
                                                                      𝛾 𝛿 𝜀 𝜂
  Apply the natural logarithm to both sides: ln⁡(𝑋) = ln⁡(𝛼𝑃𝑋 𝑃𝑍 𝑃𝑊 𝐼 ). 2. Use log properties:
  ln⁡(𝐴𝐵) = ln⁡𝐴 + ln⁡𝐵 and ln⁡(𝐴𝑏 ) = 𝑏ln⁡𝐴. 3. This yields ln⁡𝑋 = ln⁡𝛼 + 𝛾ln⁡𝑃𝑋 + 𝛿ln⁡𝑃𝑍 + 𝜀ln⁡𝑃𝑊 + 𝜂ln⁡𝐼, which is linear
  in the log-variables.
  What this means: Log-linearization converts a multiplicative demand function into a linear
  regression model. The slope coefficients 𝛾, 𝛿, 𝜀, 𝜂 are the elasticities, and ln⁡𝛼 is the intercept.
                                       ln𝑋 = ln𝛼 + 𝛾ln𝑃𝑋 + 𝛿ln𝑃𝑍 + 𝜀ln𝑃𝑊 + 𝜂ln𝐼
Here’s the key — and it’s beautiful: In the log-linear form, each exponent IS the elasticity:


  Let’s prove this to you: We start from the log-linear form ln⁡𝑋 = ln⁡𝛼 + 𝛾ln⁡𝑃𝑋 + 𝛿ln⁡𝑃𝑍 + 𝜀ln⁡𝑃𝑊 + 𝜂ln⁡𝐼: 1.
                                                𝑃
                                         𝜕𝑋 ⋅ 𝑋 = 𝜕ln⁡𝑋 (by the chain rule for log-derivatives). 2.
  The elasticity is defined as 𝜀𝑋, 𝑃𝑋 = 𝜕𝑃    𝑋   𝜕ln⁡𝑃
                                            𝑋              𝑋
                                              𝜕ln⁡𝑋 = 𝛾, since all other terms do not involve 𝑃 . 3. By the
  Differentiate ln⁡𝑋 with respect to ln⁡𝑃𝑋 : 𝜕ln⁡
                                                𝑃   𝑋
                                                                                               𝑋
                   𝜕ln⁡𝑋 = 𝛿 and 𝜕ln⁡𝑋 = 𝜂.
  same reasoning, 𝜕ln𝑃
                          𝑍      𝜕ln𝐼
  What this all means: In log-linear demand, each exponent IS the corresponding elasticity. This is
  the key advantage of this functional form: elasticities can be read directly from the regression
  coefficients, with no further calculation needed.


                              𝜀𝑋, 𝑃𝑋 = 𝜕ln⁡𝑋 = 𝛾,       𝜀𝑋, 𝑃𝑍 = 𝜕ln⁡𝑋 = 𝛿,       𝜀𝑋, 𝐼 = 𝜕ln⁡𝑋 = 𝜂
                                       𝜕ln⁡𝑃𝑋                    𝜕ln⁡𝑃𝑍                   𝜕ln⁡𝐼

  Exam Tip: 𝛼 is the scale parameter (intercept in log-form), NOT an elasticity. The income
  elasticity is 𝜂 — never confuse 𝛼 with 𝜂.


Classification by elasticity magnitude:


   |𝜀|       Classification

   >1        Elastic (quantity responds more than proportionally)

   <1        Inelastic (quantity responds less than proportionally)

   =1        Unit elastic (quantity responds proportionally)


2.1.3 Cross-Price Elasticity — Gross vs Net Substitutes

Here’s where it gets subtle: Two goods can look like substitutes in one sense but not
another. The distinction between gross and net substitutes matters a lot.


 Concept                                   Definition                                                             Sign

 Gross substitutes                         𝜕𝑋𝑖 /𝜕𝑃𝑗 > 0 (Walrasian demand)                                        𝜀𝑖𝑗 > 0

 Gross complements                         𝜕𝑋𝑖 /𝜕𝑃𝑗 < 0 (Walrasian demand)                                        𝜀𝑖𝑗 < 0

 Net substitutes                           𝜕ℎ𝑖 /𝜕𝑃𝑗 > 0 (Hicksian demand)                                 Always symmetric

 Net complements                           𝜕ℎ𝑖 /𝜕𝑃𝑗 < 0 (Hicksian demand)                                 Always symmetric


  ⚠️ Watch out: Gross substitutability is not necessarily symmetric — good Y can be a gross
  substitute for X while X is neither a gross substitute nor complement of Y (Munoz-Garcia, Example
  3.5). Net substitutes (via Hicksian demands) are symmetric.


Slutsky equation in elasticity form (Munoz-Garcia, p.197):

                                                                             𝜕𝑥 = 𝜕ℎ − 𝑥 𝜕𝑥 . 1.
  Let’s derive this together: We start from the Slutsky equation in levels: 𝜕𝑝    𝜕𝑝    𝑦 𝜕𝑤
                                                                                                 𝑦        𝑦
                              𝑝                                       𝑝           𝑝          𝑝
                                                         𝜕𝑥 ⋅ 𝑦 = 𝜕ℎ ⋅ 𝑦 − 𝑥 𝜕𝑥 ⋅ 𝑦 . 2. The left-hand side is
  Multiply both sides by 𝑥𝑦 to convert to elasticities: 𝜕𝑝    𝑥   𝜕𝑝   𝑥    𝑦 𝜕𝑤 𝑥
                                                                  𝑦           𝑦
                                                                                          𝜕ℎ                  𝑝
  𝜀𝑥, 𝑝𝑦 by definition. The first term on the right is the Hicksian elasticity 𝜀ℎ𝑥, 𝑝𝑦 = 𝜕𝑝  ⋅ 𝑥𝑦 , since along the
                                                                                                      𝑦

  compensated demand curve, ℎ(𝑝, 𝑢) = 𝑥 at the initial optimum. 3. For the second term:
         𝑝
     𝜕𝑥 ⋅ 𝑦 =   𝑝𝑦 𝑥𝑦 𝜕𝑥                              𝑝𝑦 𝑥𝑦
  𝑥𝑦 𝜕𝑤   𝑥       𝑤 ⋅ 𝜕𝑤 ⋅ 𝑥 = 𝜃𝑦 ⋅ 𝜀𝑥, 𝑤 , where 𝜃𝑦 = 𝑤 is the budget share of good 𝑦 and 𝜀𝑥, 𝑤 is the income
                           𝑤

  elasticity.
  Here’s the intuition: The cross-price elasticity of Walrasian demand equals the compensated
  (Hicksian) cross-price elasticity minus the budget share of good 𝑦 times the income elasticity. This
  shows why cross-price effects are ambiguous: the substitution and income effects can pull in
  opposite directions.


                                                      𝜀𝑥, 𝑝𝑦 = 𝜀ℎ𝑥, 𝑝𝑦 − 𝜃𝑦 𝜀𝑥, 𝑤
where 𝜃𝑦 is the budget share of good 𝑦 and 𝜀ℎ is the Hicksian (compensated) elasticity. This
decomposition shows why cross-price effects are ambiguous: substitution effect (always
positive for substitutes) and income effect (sign depends on normality/inferiority) pull in
opposite directions.


  Reference — Munoz-Garcia (Ch.2, pp.61–64):
  The Slutsky equation can be generalized to an 𝐿 × 𝐿 matrix of substitution effects. For a
  differentiable Walrasian demand function 𝑥(𝑝, 𝑤), totally differentiate and impose the Slutsky wealth
  compensation 𝑑𝑤 = 𝑥(𝑝, 𝑤) ⋅ 𝑑𝑝:


     Here’s the derivation: > Starting from the Walrasian demand function 𝑥(𝑝, 𝑤): > 1. Take the
     total differential: 𝑑𝑥 = 𝐷𝑝 𝑥(𝑝, 𝑤) 𝑑𝑝 + 𝐷𝑤 𝑥(𝑝, 𝑤) 𝑑𝑤, where 𝐷𝑝 𝑥 is the 𝐿 × 𝐿 matrix of price
     derivatives and 𝐷𝑤 𝑥 is the 𝐿 × 1 vector of income derivatives. > 2. Impose the Slutsky wealth
     compensation: 𝑑𝑤 = 𝑥(𝑝, 𝑤) ⋅ 𝑑𝑝 = ∑ 𝑥𝑘 𝑑𝑝𝑘 . This adjusts income so the consumer can just
                                                  𝑘
     afford the original bundle at the new prices, holding utility constant. > 3. Substitute 𝑑𝑤 into
     the total differential: 𝑑𝑥 = 𝐷𝑝 𝑥(𝑝, 𝑤) 𝑑𝑝 + 𝐷𝑤 𝑥(𝑝, 𝑤) [𝑥(𝑝, 𝑤) ⋅ 𝑑𝑝]. > 4. Factor 𝑑𝑝 to the right:
                                              ⊤                       ⊤
     𝑑𝑥 = [𝐷𝑝 𝑥(𝑝, 𝑤) + 𝐷𝑤 𝑥(𝑝, 𝑤) 𝑥(𝑝, 𝑤) ] 𝑑𝑝, where 𝑥(𝑝, 𝑤)
                                                    is the row vector of demands. > > What’s
     happening here: The total change in demand from a compensated price change is the sum of
     the ordinary price effect (substitution + income) and the income effect from the compensation
     itself. The bracketed term is the Slutsky matrix — the pure substitution effect.
                                                                                                        ⊤
                    𝑑𝑥 = 𝐷𝑝 𝑥(𝑝, 𝑤)𝑑𝑝 + 𝐷𝑤 𝑥(𝑝, 𝑤)[𝑥(𝑝, 𝑤) ⋅ 𝑑𝑝] = [𝐷𝑝 𝑥(𝑝, 𝑤) + 𝐷𝑤 𝑥(𝑝, 𝑤)𝑥(𝑝, 𝑤) ]𝑑𝑝
     The term in brackets is the Slutsky (substitution) matrix 𝑆(𝑝, 𝑤) with elements:


        Here’s how the matrix elements work: Starting from the definition
                                                      ⊤                                                ⊤
        𝑆(𝑝, 𝑤) = 𝐷𝑝 𝑥(𝑝, 𝑤) + 𝐷𝑤 𝑥(𝑝, 𝑤) 𝑥(𝑝, 𝑤) : 1. The matrix product 𝐷𝑤 𝑥(𝑝, 𝑤) 𝑥(𝑝, 𝑤) expands to an
        𝐿 × 𝐿 matrix where the (𝑙, 𝑘) entry is 𝜕𝑥       𝜕𝑤 ⋅ 𝑥𝑘 . 2. Adding 𝐷𝑝 𝑥(𝑝, 𝑤) (with entries 𝜕𝑥𝑙 /𝜕𝑝𝑘 ) gives
                                                          𝑙

                                    𝜕𝑥𝑙 (𝑝, 𝑤)  𝜕𝑥𝑙 (𝑝, 𝑤)
        the element: 𝑠𝑙𝑘 (𝑝, 𝑤) = 𝜕𝑝           + 𝜕𝑤 ⋅ 𝑥𝑘 (𝑝, 𝑤). 3. This element decomposes the total price
                                          𝑘
        effect of good 𝑘 on demand for good 𝑙 into the substitution effect (𝑠𝑙𝑘 ) and the income
        effect (−𝑥𝑘 ⋅ 𝜕𝑥𝑙 /𝜕𝑤).
        Here’s what to remember: Each element 𝑠𝑙𝑘 measures the compensated price effect.
        The diagonal 𝑠𝑙𝑙 ≤ 0 must be non-positive — the compensated own-price effect always
        slopes downward, unlike uncompensated demand which can be Giffen.


                                       𝜕𝑥𝑙 (𝑝, 𝑤) 𝜕𝑥𝑙 (𝑝, 𝑤)
                        𝑠𝑙𝑘 (𝑝, 𝑤) =             +           ⋅ 𝑥𝑘 (𝑝, 𝑤)      for every pair of goods 𝑙, 𝑘
                                         𝜕𝑝𝑘         𝜕𝑤
     Each element 𝑠𝑙𝑘 measures the compensated price effect of good 𝑘 on demand for good 𝑙. The
     diagonal elements 𝑠𝑙𝑙 (𝑝, 𝑤) are the own-price substitution effects, which the theory predicts
     must be non-positive (𝑠𝑙𝑙 ≤ 0).
     Negative semi-definiteness: If 𝑥(𝑝, 𝑤) is differentiable, satisfies Walras’ law, homogeneity of
     degree zero, and WARP, then 𝑆(𝑝, 𝑤) is negative semi-definite (NSD): 𝑣 ⋅ 𝑆(𝑝, 𝑤) ⋅ 𝑣 ≤ 0 for any
                   𝐿
     vector 𝑣 ∈ ℝ . An immediate implication is that all diagonal elements satisfy 𝑠𝑙𝑙 (𝑝, 𝑤) ≤ 0 — the
     own-price substitution effect is always non-positive.
     Symmetry: Negative semi-definiteness does not by itself imply symmetry. However, if
     preferences additionally satisfy local nonsatiation (LNS) and strict convexity, and are
     representable by a continuous utility function, then 𝑆(𝑝, 𝑤) is symmetric: 𝑠𝑙𝑘 = 𝑠𝑘𝑙 for all 𝑙, 𝑘.
     This symmetry is the differential analogue of the symmetry of net substitution terms in
     consumer theory. (Perfect substitutes violate strict convexity, so symmetry does not hold for
     those preferences.)




2.1.4 Income Elasticity Classification

Quick reference for your exam — know these three categories cold:


                      𝜂 value                            Classification                     Example

                                                         Luxury (income-elastic             Designer clothes, high-
                        𝜂>1
                                                         normal)                            end electronics

                                                         Necessity (income-
                      0<𝜂<1                                                                 Basic food, housing
                                                         inelastic normal)

                                                                                            Instant noodles, bus
                        𝜂<0                              Inferior
                                                                                            travel


2.1.5 Revenue Test (MR-Elasticity Relationship)

This is the direct link between demand theory and a firm’s pricing decisions. Total
expenditure (revenue): 𝐸 = 𝑃 × 𝑋(𝑃)
Marginal Revenue derivation:


  Let’s work through this derivation — it’s exam gold: Starting from total revenue 𝐸 = 𝑃 × 𝑄,
                                                                                                                𝑑(𝑃𝑄)
  where 𝑄 = 𝑋(𝑃) is the demand function: 1. Differentiate 𝐸 with respect to quantity 𝑄: 𝑀𝑅 = 𝑑𝐸
                                                                                             𝑑𝑄
                                                                                                =                 𝑑𝑄
                                                                                                                      . 2.
                         𝑑(𝑃𝑄)     𝑑𝑄                                                     𝑄 𝑑𝑃
  Apply the product rule: 𝑑𝑄 = 𝑃 ⋅ 𝑑𝑄 + 𝑄 ⋅ 𝑑𝑄 = 𝑃 + 𝑄 𝑑𝑄 . 3. Factor 𝑃: 𝑃 + 𝑄 𝑑𝑄 = 𝑃(1 + 𝑃 ⋅ 𝑑𝑄 ) = 𝑃(1 + 𝑃 𝑑𝑄 ). 4.
                                            𝑑𝑃         𝑑𝑃                      𝑑𝑃                           1
                                                                                                            ⋅𝑄   𝑑𝑃

  Recognize that the price elasticity 𝜀 = 𝑑𝑄 ⋅ 𝑃 , so 1𝜀 = 𝑑𝑃
                                          𝑑𝑃 𝑄
                                                              ⋅ 𝑄 . Substituting gives 𝑀𝑅 = 𝑃(1 + 1𝜀 ).
                                                           𝑑𝑄 𝑃
  Here’s the intuition: Marginal revenue equals price times (1 + 1/𝜀). When demand is elastic (|𝜀| > 1
  ), 𝑀𝑅 > 0, so cutting price raises total revenue. When inelastic (|𝜀| < 1), 𝑀𝑅 < 0, so cutting price
  lowers revenue.


                                                         𝑄
                          𝑀𝑅 = 𝑑𝐸 = 𝑃 + 𝑄 𝑑𝑃 = 𝑃(1 + 𝑑𝑃 ⋅ ) = 𝑃(1 + 1𝜀 )
                                𝑑𝑄        𝑑𝑄         𝑑𝑄 𝑃
Since 𝜀 < 0 (Law of Demand), write 𝜀 = −𝜂 where 𝜂 = |𝜀| > 0:


  Here’s an alternative form you might see on the exam: Starting from 𝑀𝑅 = 𝑃(1 + 1𝜀 ): 1. By the
  Law of Demand, 𝑑𝑄
                 𝑑𝑃
                    < 0, so the price elasticity 𝜀 = 𝑑𝑄 ⋅ 𝑃 is always negative. 2. Define 𝜂 = |𝜀| > 0, so
                                                     𝑑𝑃 𝑄
  𝜀 = −𝜂. 3. Substitute: 𝑀𝑅 = 𝑃(1 + −𝜂
                                     1 ) = 𝑃(1 − 1 ).
                                                 𝜂

  Why bother with this form? Expressing MR in terms of the absolute elasticity 𝜂 makes the
  revenue test more intuitive: if 𝜂 > 1 (elastic), 1 − 1/𝜂 > 0 and 𝑀𝑅 > 0; if 𝜂 < 1 (inelastic), 𝑀𝑅 < 0.
  Revenue is maximized at 𝜂 = 1 where 𝑀𝑅 = 0.


                                                      𝑀𝑅 = 𝑃(1 − 1𝜂 )
Expenditure response to price change:


                                                                                                 𝑃↓ ⇒
                   𝜂 = |𝜀|                                            𝑀𝑅
                                                                                                 Expenditure

               > 1 (elastic)                                            >0                        ↑
                                                                                                      𝑃    ⇒
                    𝜂 = |𝜀|                                               𝑀𝑅
                                                                                                      Expenditure

               < 1 (inelastic)                                            <0                           ↓

                                                                                                      Unchanged
             = 1 (unit elastic)                                           =0                          (revenue
                                                                                                      maximised)


  Exam Tip: The Total Revenue Test is a staple. Elastic → price and revenue move in opposite
  directions. Inelastic → same direction. Derive 𝑀𝑅 = 𝑃(1 + 1/𝜀) from first principles in your answer — it
  shows the examiner you understand the microfoundations.


2.1.6 Lerner Index (Monopoly Pricing)

Here’s where elasticity meets market power — this is a classic exam question.


  Let’s derive the Lerner Index together: The Lerner Index measures a firm’s market power as
  the markup of price over marginal cost as a fraction of price. 1. Start from the profit-maximizing
  condition for any firm: 𝑀𝑅 = 𝑀𝐶. 2. Substitute the MR formula 𝑀𝑅 = 𝑃(1 + 1/𝜀) derived above:
  𝑃(1 + 1/𝜀) = 𝑀𝐶. 3. Rearrange: 𝑃 + 𝑃/𝜀 = 𝑀𝐶 ⇒ 𝑃 − 𝑀𝐶 = −𝑃/𝜀. 4. Divide both sides by 𝑃: 𝑃 −𝑃𝑀𝐶 = − 1𝜀 .
  Here’s what this tells you: The Lerner Index ranges from 0 (perfect competition, 𝑃 = 𝑀𝐶) to 1
  (pure monopoly). The markup is inversely related to demand elasticity — the less elastic the
  demand, the greater the market power. A monopolist facing 𝜀 = −2 has a 50% markup; one facing
  𝜀 = −1.1 has a 91% markup.


                                                     𝐿 = 𝑃 − 𝑀𝐶 = − 𝜀 1
                                                            𝑃        𝑄, 𝑃
Derivation: Set 𝑀𝑅 = 𝑀𝐶:


  Let’s see this another way: Starting from the MR formula 𝑀𝑅 = 𝑃(1 + 1/𝜀) and the profit-
  maximizing condition 𝑀𝑅 = 𝑀𝐶: 1. Set 𝑃(1 + 1/𝜀) = 𝑀𝐶. 2. Expand the left side: 𝑃 + 𝑃/𝜀 = 𝑀𝐶. 3. Bring 𝑃
  terms together: 𝑃 − 𝑀𝐶 = −𝑃/𝜀. 4. Solve for the Lerner Index: 𝑃 −𝑃𝑀𝐶 = − 1𝜀 .
  The bottom line: This is the algebraic proof of the Lerner Index. The equation shows the
  monopolist’s optimal markup depends only on the elasticity of demand, not on the shape of the cost
  curve beyond marginal cost.


                                              𝑃(1 + 1𝜀 ) = 𝑀𝐶 ⇒ 𝑃 − 𝑀𝐶 = − 1𝜀
                                                                   𝑃
Inverse Elasticity Pricing Rule (IEPR):


  Here’s how to find the optimal price directly: Starting from the same first-order condition
  𝑃(1 + 1/𝜀) = 𝑀𝐶: 1. Write 1 + 1/𝜀 = 𝜀 +𝜀 1 . 2. Then 𝑃 ⋅ 𝜀 +𝜀 1 = 𝑀𝐶. 3. Solve for 𝑃: 𝑃* = 𝑀𝐶 ⋅ 𝜀 +𝜀 1 = 1 +𝑀𝐶1/𝜀 .
  The key insight: The IEPR gives the profit-maximizing price directly. The monopolist must operate
  on the elastic portion of demand (𝜀 < −1) for the formula to yield a positive price. As demand
  becomes perfectly elastic (𝜀 → −∞), price approaches marginal cost (perfect competition).


                                                         𝑃* =     𝑀𝐶
                                                                1 + 1/𝜀

 Condition                            Implication

 𝜀 → −∞                               𝑃 → 𝑀𝐶 (perfect competition)
 Condition                        Implication

 𝜀 = −2                           𝑃 = 2 × 𝑀𝐶 (100% markup)

 𝜀 = −1.5                         𝑃 = 3 × 𝑀𝐶 (200% markup)

 𝜀→0                              𝑃 → ∞ (infinite market power)


  Exam Tip: The IEPR only works when 𝜀 < −1 (elastic region). If −1 < 𝜀 < 0, 𝑀𝑅 would be negative
  and the formula gives a nonsensical negative price. A monopolist always operates on the elastic
  portion of demand.




2.1.7 Compensated (Hicksian) Demand and the Compensated Law of Demand

Why this matters: Walrasian demand can slope upward (Giffen goods), but Hicksian demand
always slopes downward. Understanding why is critical for your exam.
The Compensated Law of Demand (CLD):
For any price change from 𝑝 to 𝑝′ with utility held constant at 𝑢:


  Let’s work through the CLD proof: Starting from the definition of Hicksian (compensated)
  demand ℎ(𝑝, 𝑢) as the solution to the Expenditure Minimization Problem: 1. At prices 𝑝, the bundle
  ℎ(𝑝, 𝑢) minimizes expenditure to achieve utility 𝑢. Therefore, 𝑝 ⋅ ℎ(𝑝, 𝑢) ≤ 𝑝 ⋅ ℎ(𝑝′ , 𝑢) — any other bundle
                   ′                                                                             ′               ′
  (including ℎ(𝑝 , 𝑢)) costs at least as much at prices 𝑝. 2. Similarly, at prices 𝑝 , the bundle ℎ(𝑝 , 𝑢)
                                     ′      ′         ′
  minimizes expenditure, so 𝑝 ⋅ ℎ(𝑝 , 𝑢) ≤ 𝑝 ⋅ ℎ(𝑝, 𝑢). 3. Subtract the first inequality from the second:
  𝑝 ⋅ ℎ(𝑝 , 𝑢) − 𝑝 ⋅ ℎ(𝑝, 𝑢) ≤ 𝑝 ⋅ ℎ(𝑝, 𝑢) − 𝑝 ⋅ ℎ(𝑝 , 𝑢). 4. Rearranging: (𝑝′ − 𝑝) ⋅ (ℎ(𝑝′ , 𝑢) − ℎ(𝑝, 𝑢)) ≤ 0.
    ′     ′                     ′                   ′

  Here’s the big idea: The compensated law of demand states that Hicksian demand curves always
  slope downward. Unlike Walrasian demand (which can be upward-sloping for Giffen goods), the
  CLD is a theorem — it follows directly from utility maximization / expenditure minimization and
  holds for all goods, with no exceptions.


                                         (𝑝′ − 𝑝) ⋅ (ℎ(𝑝′ , 𝑢) − ℎ(𝑝, 𝑢)) ≤ 0
Implication: For every good 𝑘, (𝑝′𝑘 − 𝑝𝑘 ) ⋅ (ℎ𝑘 (𝑝′ , 𝑢) − ℎ𝑘 (𝑝, 𝑢)) ≤ 0. This means Hicksian demand
curves are always downward-sloping — a price increase (decrease) for good 𝑘 leads to a
decrease (increase) in its Hicksian quantity demanded. This is always true for compensated
demand, unlike Walrasian (uncompensated) demand which can slope upward for Giffen goods.
Relationship between WARP and the CLD: WARP is equivalent to the CLD under Slutsky
compensation, but WARP does not imply the uncompensated law of demand (ULD). That is:


  Here’s the logic connecting WARP and CLD: Starting from the definitions of WARP and the
  Compensated Law of Demand: 1. WARP: If bundle 𝑥 is revealed preferred to bundle 𝑦 (i.e., 𝑥 is
  chosen when 𝑦 is affordable), then 𝑦 cannot be revealed preferred to 𝑥 at any other price–income
  pair. This is a consistency condition on observable choice. 2. CLD: (𝑝′ − 𝑝) ⋅ (ℎ(𝑝′ , 𝑢) − ℎ(𝑝, 𝑢)) ≤ 0,
  derived above from expenditure minimization. 3. Under Slutsky compensation (where income is
  adjusted to make the original bundle just affordable at the new prices), WARP implies the Slutsky
  matrix is negative semi-definite, which is equivalent to the CLD. 4. However, WARP does not imply
  the uncompensated law of demand (ULD), because the income effect can offset the substitution
  effect for Giffen goods.
  The key takeaway: This is a key theoretical result: WARP is testable on observable
  (uncompensated) demand data, yet it guarantees the compensated law of demand. This means the
  Slutsky matrix negative semi-definiteness can be tested without needing to observe compensated
  demands.
                                      WARP ⇔ CLD but WARP ⇏ ULD

  Reference — Munoz-Garcia (Ch.2, pp.129–135):
  The Hicksian (compensated) demand ℎ(𝑝, 𝑢) is the solution to the Expenditure Minimization
  Problem (EMP): minimize 𝑝 ⋅ 𝑥 subject to 𝑢(𝑥) ≥ 𝑢. Its key properties:

     1. Homogeneity of degree zero in 𝑝: ℎ(𝛼𝑝, 𝑢) = ℎ(𝑝, 𝑢) for 𝛼 > 0
     2. No income effects: by construction — utility is held fixed
     3. Negative semi-definite substitution matrix: 𝐷𝑝 ℎ(𝑝, 𝑢) is NSD, hence the Slutsky matrix
        𝑆(𝑝, 𝑤) = 𝐷𝑝 ℎ(𝑝, 𝑢) is also NSD
     4. Symmetry: 𝐷𝑝 ℎ(𝑝, 𝑢) is symmetric (under LNS + strict convexity), therefore cross-price
        substitution effects are symmetric: 𝜕ℎ𝑙 /𝜕𝑝𝑘 = 𝜕ℎ𝑘 /𝜕𝑝𝑙




  Reference — Munoz-Garcia (Ch.2, pp.99–117):
  The Weak Axiom of Revealed Preference (WARP) imposes testable restrictions on Walrasian
  demand. The three-proposition chain:
  Proposition 1: If 𝑥(𝑝, 𝑤) is differentiable, satisfies Walras’ law, homogeneity of degree zero, and
  WARP, then the Slutsky matrix 𝑆(𝑝, 𝑤) is negative semi-definite. Consequently, all own-price
  substitution effects satisfy 𝑠𝑙𝑙 (𝑝, 𝑤) ≤ 0.
  Proposition 2: If preferences additionally satisfy LNS and strict convexity, and are representable
  by a continuous utility function, then 𝑆(𝑝, 𝑤) is symmetric (𝑠𝑙𝑘 = 𝑠𝑘𝑙 ).
  Proposition 3: The Hicksian substitution matrix 𝐷𝑝 ℎ(𝑝, 𝑢) coincides with the Slutsky matrix:
  𝑆(𝑝, 𝑤) = 𝐷𝑝 ℎ(𝑝, 𝑢) = 𝐷2𝑝 𝑒(𝑝, 𝑢). This identity links observable Walrasian demand (via the Slutsky
  matrix) to the Hicksian demand derived from the expenditure function.
  Empirical significance: The Slutsky matrix can be recovered from observable Walrasian demand
  data. Negative semi-definiteness provides a set of inequality restrictions that can be tested
  econometrically. Symmetry implies that compensated cross-price effects are reciprocal — a testable
  overidentifying restriction in demand system estimation.


2.1.8 Relationship between Hicksian and Walrasian Demand

This is the bridge between the two approaches to consumer theory — utility
maximization and expenditure minimization.
The Hicksian and Walrasian demands are related through the Slutsky equation and the
expenditure function. For any (𝑝, 𝑤) with associated utility 𝑢 = 𝑣(𝑝, 𝑤):


  Let’s connect the two demands: Starting from the relationship between the expenditure function
  and the indirect utility function: 1. The expenditure function 𝑒(𝑝, 𝑢) gives the minimum expenditure
  needed to achieve utility 𝑢 at prices 𝑝. The indirect utility function 𝑣(𝑝, 𝑤) gives the maximum utility
  achievable at prices 𝑝 and income 𝑤. These are inverses: 𝑒(𝑝, 𝑣(𝑝, 𝑤)) = 𝑤 and 𝑣(𝑝, 𝑒(𝑝, 𝑢)) = 𝑢. 2. The
  Hicksian demand ℎ𝑙 (𝑝, 𝑢) is the demand for good 𝑙 that minimizes expenditure to achieve utility 𝑢.
  The Walrasian demand 𝑥𝑙 (𝑝, 𝑤) is the demand that maximizes utility given income 𝑤. 3. At the
  optimum, they coincide: when 𝑤 = 𝑒(𝑝, 𝑢) (income equals the minimum expenditure needed for utility
  𝑢), the consumer demands the same bundle: ℎ𝑙 (𝑝, 𝑢) = 𝑥𝑙 (𝑝, 𝑒(𝑝, 𝑢)). 4. Conversely, setting income to 𝑤
  and achieving utility 𝑢 = 𝑣(𝑝, 𝑤), we have 𝑥𝑙 (𝑝, 𝑤) = ℎ𝑙 (𝑝, 𝑣(𝑝, 𝑤)).
  Here’s what’s really going on: This identity bridges the two approaches to consumer theory —
  utility maximization (Walrasian demand) and expenditure minimization (Hicksian demand). The
  Hicksian demand holds utility constant and varies income; the Walrasian demand holds income
  constant and varies utility. They coincide when income equals the expenditure needed to achieve
  the utility level.


                       ℎ𝑙 (𝑝, 𝑢) = 𝑥𝑙 (𝑝, 𝑒(𝑝, 𝑢)) and equivalently   𝑥𝑙 (𝑝, 𝑤) = ℎ𝑙 (𝑝, 𝑣(𝑝, 𝑤))
Differentiating the identity ℎ𝑙 (𝑝, 𝑢) = 𝑥𝑙 (𝑝, 𝑒(𝑝, 𝑢)) with respect to 𝑝 and applying Shephard’s
                                                                                   𝑘
lemma (𝜕𝑒(𝑝, 𝑢)/𝜕𝑝𝑘 = ℎ𝑘 (𝑝, 𝑢)) recovers the Slutsky equation:


  Here’s how the Slutsky equation emerges: Starting from the identity ℎ𝑙 (𝑝, 𝑢) = 𝑥𝑙 (𝑝, 𝑒(𝑝, 𝑢)): 1.
                                                                        𝜕ℎ𝑙 (𝑝, 𝑢)
  Differentiate both sides with respect to 𝑝𝑘 . The left side is          𝜕𝑝𝑘 . 2. For the right side, apply the
                                      𝜕𝑥𝑙 (𝑝, 𝑤)  𝜕𝑥 (𝑝, 𝑤) 𝜕𝑒(𝑝, 𝑢)
  chain rule: 𝜕𝑝𝜕 𝑥𝑙 (𝑝, 𝑒(𝑝, 𝑢)) =     𝜕𝑝𝑘      + 𝑙𝜕𝑤 ⋅ 𝜕𝑝 , where 𝑤 = 𝑒(𝑝, 𝑢). 3. By Shephard’s lemma,
                  𝑘                                             𝑘
  𝜕𝑒(𝑝, 𝑢)
    𝜕𝑝𝑘 = ℎ𝑘 (𝑝, 𝑢), which equals 𝑥𝑘 (𝑝, 𝑤) at the optimum where 𝑤 = 𝑒(𝑝, 𝑢). 4. Substituting:
  𝜕ℎ𝑙 (𝑝, 𝑢)
    𝜕𝑝𝑘      = 𝜕𝑥𝑙𝜕𝑝(𝑝, 𝑤) + 𝜕𝑥𝑙𝜕𝑤
                                (𝑝, 𝑤)
                                       ⋅ 𝑥𝑘 (𝑝, 𝑤). 5. The right-hand side is precisely the Slutsky matrix element
                      𝑘
  𝑠𝑙𝑘 (𝑝, 𝑤).
  Here’s the key insight: The Slutsky equation decomposes the total price effect (𝜕𝑥𝑙 /𝜕𝑝 ) into the
                                                                                                           𝑘
  substitution effect (𝜕ℎ𝑙 /𝜕𝑝𝑘 = 𝑠𝑙𝑘 ) and the income effect (−𝑥𝑘 ⋅ 𝜕𝑥𝑙 /𝜕𝑤). The substitution effect is the
  change in Hicksian (compensated) demand, which holds utility constant.


                               𝜕ℎ𝑙 (𝑝, 𝑢) 𝜕𝑥𝑙 (𝑝, 𝑤) 𝜕𝑥𝑙 (𝑝, 𝑤)
                                         =          +           ⋅ 𝑥𝑘 (𝑝, 𝑤) = 𝑠𝑙𝑘 (𝑝, 𝑤)
                                 𝜕𝑝𝑘        𝜕𝑝𝑘         𝜕𝑤
Graphical relationship:


                                                                                                Walrasian vs
                 Good type                                   Income effect
                                                                                                Hicksian slope

                                                                                                Walrasian is flatter
                Normal good                               Positive (𝜕𝑥𝑙 /𝜕𝑤 > 0)                (more elastic) than
                                                                                                Hicksian

                                                                                                Walrasian is
                                                                                                steeper (less
                Inferior good                            Negative (𝜕𝑥𝑙 /𝜕𝑤 < 0)
                                                                                                elastic) than
                                                                                                Hicksian


When the budget share 𝜃𝑘 and/or the income elasticity 𝜀𝑥, 𝑤 are small, the Hicksian and
Walrasian demand curves are close to each other (e.g., garlic, pizza). The extreme case is
quasilinear utility, where income effects are absent and the two demands coincide.


  Exam Tip: On a diagram, Hicksian demand is always steeper (for normal goods) or flatter (for
  inferior goods) than Walrasian demand through the same initial point. The two curves intersect at
  the initial price–quantity point because at that point 𝑤 = 𝑒(𝑝, 𝑢) by construction.




2.2 Solved Problems — Demand Theory

These are exam staples — work through each one carefully.



    Q2.1 — Log-Linear Demand Elasticities (Exam: Batch 48 Q2, HW problem)



    Q2.2 — Burger King Demand: The Terrible Problem (Exam: Batch 48 Q3, Tutorial
 2)



    Q2.3 — Burger King Corrected Demand & Lerner Index (Exam: Batch 48 Q3)
   Q2.4 — Walker’s Shortbread Cookies (Tutorial 2)




2.3 Key Formulas — Demand Theory

Your cheat sheet for the exam — these are all fair game.


 Concept                     Formula                                      Classification

 Own-price elasticity        𝜀 = 𝜕𝑄   𝑃
                                 𝜕𝑃 ⋅ 𝑄                                    ∥ 𝜀 ∥ > 1 elastic; < 1 inelastic
                                    𝜕𝑄        𝑃
 Cross-price elasticity      𝜀𝑖𝑗 = 𝜕𝑃𝑗𝑖 ⋅ 𝑄𝑗                               > 0 substitute; < 0 complement
                                                  𝑖


 Income elasticity           𝜀𝐼 = 𝜕𝑄   𝐼
                                  𝜕𝐼 ⋅ 𝑄                                   > 1 luxury; 0–1 necessity; < 0 inferior

 Advertising elasticity      𝜀𝐴 = 𝜕𝑄 ⋅𝐴
                                  𝜕𝐴 𝑄                                    Magnitude = responsiveness to ads
                                          𝛽
 Log-linear form             𝑄 = 𝛼 ∏ 𝑃𝑗𝑗 𝐼𝜂                               Exponents ARE elasticities

 MR formula                  𝑀𝑅 = 𝑃(1 + 1/𝜀)                              Derived from 𝑑(𝑃𝑄)/𝑑𝑄

 Lerner Index                (𝑃 − 𝑀𝐶)/𝑃 = −1/𝜀                            0 (perfect comp.) to 1 (monopoly)

 Slutsky matrix element      𝑠𝑙𝑘 = 𝜕𝑥𝑙 /𝜕𝑝𝑘 + (𝜕𝑥𝑙 /𝜕𝑤) ⋅ 𝑥𝑘              𝑠𝑙𝑙 ≤ 0 (own-price SE ≤ 0)

 Compensated Law of
                             (𝑝′ − 𝑝) ⋅ (ℎ(𝑝′ , 𝑢) − ℎ(𝑝, 𝑢)) ≤ 0 Always holds for Hicksian demand
 Demand

                                                                          Requires Walras’ law, HD(0),
 WARP → Slutsky NSD          𝑣 ⋅ 𝑆(𝑝, 𝑤) ⋅ 𝑣 ≤ 0
                                                                          differentiability




2.4 Empirical Demand Estimation — Functional Forms and Identification

This connects the theory to real-world econometrics — know the forms and the
identification problem.
The Pragmatic Approach: Rather than deriving demand from utility maximization, the
pragmatic approach skips the theory and goes straight to the data. Here’s how it works:


  Here’s the structure of the pragmatic approach: Starting from the general concept that
  quantity demanded depends on a set of observable economic variables: 1. 𝑃𝑥 is the good’s own
  price — the primary determinant of quantity demanded via the Law of Demand. 2. 𝑃0 is a vector of
  related prices — prices of substitutes (positive cross-effect) and complements (negative cross-
  effect). 3. 𝑌 is aggregate income or consumer’s budget — captures the ability to purchase, with
  sign depending on whether the good is normal (+) or inferior (−). 4. 𝑇 is a time trend or taste
  shifter — captures changes in preferences, demographics, advertising, or technology over time. 5.
  Unlike the structural approach (which derives demand from utility maximization), the pragmatic
  approach estimates 𝑓(⋅) directly from market data using regression techniques.
  The big picture: The pragmatic approach is a reduced-form empirical strategy: it models demand
  as a function of observable determinants without imposing the full structure of utility maximization.
  Its flexibility makes it the most common approach in applied demand analysis, but it requires
  careful attention to the identification problem.


                                                      𝑄𝑥 = 𝑓(𝑃𝑥 , 𝑃0 , 𝑌, 𝑇)
where 𝑃𝑥 = own price, 𝑃0 = vector of related prices, 𝑌 = aggregate income, 𝑇 = trend for
tastes.
Common functional forms:


 Form                                Equation                            Properties

                                                                         Constant marginal effects,
 Linear                              𝑄 = 𝑎 + 𝑏𝑃𝑥 + 𝑐𝑃0 + 𝑑𝑌
                                                                         varying elasticity

                                                                         Constant elasticities:
 Log-linear                          𝑄 = 𝑏0 𝑃𝑏𝑥1 𝑃𝑏02 𝑌𝑏3
                                                                         𝑏1 , 𝑏2 , 𝑏3 ARE elasticities

 Semi-log                            ln⁡𝑄 = 𝑎 + 𝑏𝑃𝑥 + 𝑐𝑃0 + 𝑑𝑌           Price semi-elasticity = 𝑏

                                                                         Consistent with Stone-Geary
 Linear Expenditure (LES)            𝑞𝑖 = 𝛾𝑖 + 𝑏𝑝𝑖𝑖 (𝑌 − ∑ 𝑝𝑗 𝛾𝑗 )       utility; separates subsistence
                                                                         and supernumerary income


Zero-homogeneity (no money illusion): If prices and income all change by the same
proportion 𝑘, real demand should be unchanged. For the log-linear form, this imposes
𝑏1 + 𝑏2 + 𝑏3 = 0.
Dynamic demand — distributed-lag models: Current purchases depend on past behaviour.
Koutsoyiannis distinguishes: - Habit-formation for non-durables (tobacco, food):
𝑄𝑡 = 𝑓(𝑃𝑡 , 𝑃𝑡 − 1 , …, 𝑌𝑡 , 𝑌𝑡 − 1 , …, 𝑄𝑡 − 1 ) - Stock-adjustment for durables: past purchases
constitute a stock that affects current purchases
The identification problem (revisited): A regression of quantity on price alone cannot
recover demand. Observed (𝑃, 𝑄) pairs trace out intersections of shifting supply and demand
curves over time. Consistent estimation requires: 1. Instruments that shift supply but not
demand (e.g., input costs, weather) 2. Exclusion restrictions to separate the structural
equations 3. In the LES framework, demand is derived from utility maximization, which
provides cross-equation restrictions (e.g., 𝑏𝑖 are marginal budget shares summing to 1)


  Exam Tip: The log-linear form is the workhorse of empirical demand analysis. Know that
  coefficients ARE elasticities, the zero-homogeneity condition is 𝑏1 + 𝑏2 + 𝑏3 = 0, and that dynamic
  specifications introduce lagged dependent variables. The LES is the theoretically consistent
  alternative, derived from Stone-Geary preferences — be prepared to contrast it with the ad hoc log-
  linear form.



  Reference — Koutsoyiannis (Ch.2, pp.53–60):
  Provides a comprehensive treatment of empirical approaches to demand analysis.




Topic 3: Production & Supply

  Exam weight: 28–35 marks (2 questions). Production function analysis, cost minimization, profit
  maximization, and competitive equilibrium are staple topics. Key sources: Koutsoyiannis Ch.3–4,
  Munoz-Garcia Ch.4, §7.2




3.1 Production Sets & Functions
Why this matters for your exam: Before you can figure out how much to produce or which
inputs to hire, you need a clear picture of what’s technologically possible. This section builds
the foundation — the production set, the production function, and the key concepts (returns to
scale, elasticity of substitution) that will show up in almost every problem you solve.

3.1.1 Core Definitions


 Term                                     Definition

                                          𝑞 = 𝑓(𝑧1 , …, 𝑧𝑛 ) — maximum output from given inputs, given
 Production function
                                          technology

                                          𝑌 = {𝑦 ∈ ℝ𝐿 : 𝐹(𝑦) ≤ 0} — all technologically feasible plans
 Production set
                                          (positive = outputs, negative = inputs)

 Transformation function                  𝐹(𝑦) — implicit function where 𝐹(𝑦) ≤ 0 iff 𝑦 is feasible

 Transformation frontier                  {𝑦 ∈ ℝ𝐿 : 𝐹(𝑦) = 0} — technically efficient boundary
                                                     𝜕𝐹/𝜕𝑦       𝑑𝑦
 MRPT                                     𝑀𝑅𝑃𝑇𝑘, 𝑙 = 𝜕𝐹/𝜕𝑦𝑘 = − 𝑑𝑦 𝑙 along 𝐹(𝑦) = 0
                                                             𝑙    𝑘


 Duality                                  𝑀𝑅𝑃𝑇𝑘, 𝑙 = 𝑀𝐶𝑘 /𝑀𝐶𝑙 (from profit maximization FOCs)


     Reference — Koutsoyiannis ([Ch.3, pp.68-70]): Koutsoyiannis identifies four types of isoquants
     reflecting the degree of factor substitutability: 1. Linear isoquant (𝜎 = ∞): Perfect substitutability
     — a commodity can be produced using only capital, only labor, or any combination 2. Input-output
     (Leontief) isoquant (𝜎 = 0): Strict complementarity — only one technically efficient method exists;
     the isoquant is a right angle 3. Kinked isoquant (activity analysis): Limited substitutability with a
     few discrete processes; substitution occurs only at the kinks 4. Smooth convex isoquant (
     0 < 𝜎 < ∞): Continuous substitutability over a range, with diminishing MRTS
     Koutsoyiannis also distinguishes technical efficiency (a method uses less of at least one input and
     no more of others) from economic efficiency (the chosen method depends on factor prices). Only
     technically efficient methods belong to the production function; the economically optimal choice
     among them depends on relative prices.


3.1.2 Properties of the Production Set (11 Axioms)


 #               Property                                             Meaning

                                                                      𝑌 ≠ ⌀ — at least one feasible plan
 1               Non-empty
                                                                      exists

 2               Closed                                               𝑌 includes its boundary points

                                                                      𝑦 ∈ 𝑌 with 𝑦 ≥ 0 ⇒ 𝑦 = 0 (no output
 3               No free lunch
                                                                      without input)

                                                                      0 ∈ 𝑌 — firm can shut down (fails
 4               Possibility of inaction
                                                                      with sunk costs)

 5               Free disposal                                        𝑦 ∈ 𝑌, 𝑦′ ≤ 𝑦 ⇒ 𝑦′ ∈ 𝑌

 6               Irreversibility                                      𝑦 ∈ 𝑌, 𝑦 ≠ 0 ⇒ −𝑦 ∉ 𝑌

 7               Non-increasing RTS                                   𝑦 ∈ 𝑌 ⇒ 𝛼𝑦 ∈ 𝑌 for 𝛼 ∈ [0, 1]

 8               Non-decreasing RTS                                   𝑦 ∈ 𝑌 ⇒ 𝛼𝑦 ∈ 𝑌 for 𝛼 ≥ 1
 #                Property                                               Meaning

 9                CRS                                                    𝑦 ∈ 𝑌 ⇒ 𝛼𝑦 ∈ 𝑌 for 𝛼 ≥ 0

 10               Additivity / Free entry                                𝑦, 𝑦′ ∈ 𝑌 ⇒ 𝑦 + 𝑦′ ∈ 𝑌

 11               Convexity                                              𝑦, 𝑦′ ∈ 𝑌, 𝛼 ∈ [0, 1] ⇒ 𝛼𝑦 + (1 − 𝛼)𝑦′ ∈ 𝑌


     Fixed costs violate convexity: With fixed costs, the production set has a “hole” near the origin.
     For example, a $100 license: (0, 0) is feasible and (−100, 0) is feasible (pay license, produce nothing),
     but (−50, 0) is not feasible — you cannot “half-pay” the license.


3.1.3 Returns to Scale


     Let’s work through this step by step: We start with the definition of returns to scale (RTS): 1.
     Multiply ALL inputs by a common scalar factor 𝑡 > 0: evaluate 𝑓(𝑡𝐾, 𝑡𝐿) 2. Factor 𝑡 out of the
     production function expression 3. The exponent 𝑘 on 𝑡 captures the degree of returns to scale: -
     𝑘 > 1: output rises proportionally MORE than inputs → IRS - 𝑘 = 1: output rises proportionally →
     CRS - 𝑘 < 1: output rises proportionally LESS → DRS
     Here’s what’s really going on: RTS describes how output responds when you scale ALL inputs
     simultaneously. It’s a pure technological property of the production function — totally different
     from diminishing marginal returns (which vary one input at a time).


                                                𝑓(𝑡𝐾, 𝑡𝐿) = 𝑡𝑘 𝑓(𝐾, 𝐿)

                           𝑘                           Returns to Scale                 Implication

                                                                                        AC declining; natural
                         𝑘>1                           Increasing (IRS)
                                                                                        monopoly possible

                                                                                        AC constant; horizontal
                         𝑘=1                           Constant (CRS)
                                                                                        LR supply

                                                                                        AC rising; upward-
                         𝑘<1                           Decreasing (DRS)
                                                                                        sloping LR supply


Method: Multiply all inputs by 𝑡 > 0, factor out 𝑡, read exponent.

3.1.4 Elasticity of Substitution (EoS)


     Let’s work through this step by step: We start with the definition of the elasticity of substitution
     (𝜎): 1. 𝜎 measures the percentage change in the input ratio (𝐾/𝐿) divided by the percentage change
                                                                                     %Δ(𝐾/𝐿)
     in the Marginal Rate of Technical Substitution (𝑀𝑅𝑇𝑆) 2. Express as: 𝜎 = %Δ𝑀𝑅𝑇𝑆 3. Convert
                                                   𝑑ln⁡(𝐾/𝐿)
     percentage changes to log-differentials: 𝜎 = 𝑑ln⁡(𝑀𝑅𝑇𝑆)

     Here’s what’s really going on: 𝜎 tells you how easily you can swap one input for another along an
     isoquant. High 𝜎 means inputs are close substitutes; low 𝜎 means they’re more like complements.
     The log-derivative form makes 𝜎 unit-free and symmetric — a nice mathematical trick.


                                                  %Δ(𝐾/𝐿)   𝑑ln⁡(𝐾/𝐿)
                                             𝜎=           =
                                                  %Δ𝑀𝑅𝑇𝑆 𝑑ln(𝑀𝑅𝑇𝑆)
Production Function                                                                             𝜎 Pattern

Linear (perfect substitutes):
                                                                                               ∞ 𝑀𝑅𝑇𝑆 constant
𝑞 = 𝑎𝐾 + 𝑏𝐿
                                 𝛼 𝛽
Cobb-Douglas: 𝑞 = 𝐴𝐾 𝐿                                                                          1 Unitary (all CD, any 𝛼, 𝛽)
                  𝜌                𝜌 𝛾/𝜌
CES: 𝑞 = [𝛼𝐾 + (1 − 𝛼)𝐿 ]                                                              1/(1 − 𝜌) Nests all three polar cases

Leontief (fixed proportions):
                                                                                                0 𝐾/𝐿 fixed
𝑞 = min⁡{𝑎𝐾, 𝑏𝐿}

CES derivation:


  Let’s work through this step by step: We start with the CES production function
  𝑞 = [𝛼𝐾𝜌 + (1 − 𝛼)𝐿𝜌 ]𝛾/𝜌 : 1. Compute 𝑀𝑃𝐿 = 𝜕𝑞/𝜕𝐿 = 𝛾(1 − 𝛼)𝐿𝜌 − 1 [𝛼𝐾𝜌 + (1 − 𝛼)𝐿𝜌 ]𝛾/𝜌 − 1 2. Compute
  𝑀𝑃𝐾 = 𝜕𝑞/𝜕𝐾 = 𝛾𝛼𝐾𝜌 − 1 [𝛼𝐾𝜌 + (1 − 𝛼)𝐿𝜌 ]𝛾/𝜌 − 1 3. Take the ratio: 𝑀𝑅𝑇𝑆𝐿, 𝐾 = 𝑀𝑃   1−𝛼 𝐾 1−𝜌
                                                                                 𝑀𝑃𝐾 = 𝛼 ( 𝐿 )
                                                                                   𝐿


  Here’s what’s really going on: The MRTS for a CES function depends only on the capital-labor
  ratio (𝐾/𝐿) and the substitution parameter 𝜌. When 𝜌 is large (close to 1), MRTS responds strongly to
  changes in 𝐾/𝐿, meaning you can substitute easily.


                                                                        𝑀𝑃𝐿      1−𝜌
                                                        𝑀𝑅𝑇𝑆𝐿, 𝐾 =          = (𝐾)
                                                                        𝑀𝑃𝐾    𝐿

  Let’s work through this step by step: Continuing from the CES MRTS expression: 1. Take
  natural logs: ln⁡(𝑀𝑅𝑇𝑆) = ln⁡( 1 −𝛼 𝛼 ) + (1 − 𝜌)ln⁡( 𝐾𝐿 ) 2. Solve for ln⁡(𝐾/𝐿): ln⁡( 𝐾𝐿 ) = 1 −1 𝜌 ln⁡(𝑀𝑅𝑇𝑆) − 1 −1 𝜌 ln⁡( 1 −𝛼 𝛼 )
  Here’s what’s really going on: The log-linear relationship between 𝐾/𝐿 and 𝑀𝑅𝑇𝑆 reveals that
  (1 − 𝜌) is the elasticity of 𝑀𝑅𝑇𝑆 with respect to the input ratio — a clean, interpretable result.


                                       ln⁡(𝑀𝑅𝑇𝑆) = (1 − 𝜌)ln⁡( 𝐾 ) ⇒ ln⁡( 𝐾 ) = 1 ln⁡(𝑀𝑅𝑇𝑆)
                                                               𝐿          𝐿    1−𝜌

  Let’s work through this step by step: From the log-linearized MRTS expression: 1. The elasticity
                                                                                  𝜕ln⁡(𝐾/𝐿)
  of substitution is 𝜎 = 𝜕ln(𝐾/𝐿)/𝜕ln(𝑀𝑅𝑇𝑆) 2. Differentiate: 𝜕ln⁡(𝑀𝑅𝑇𝑆) = 1 −1 𝜌 3. Hence 𝜎 = 1 −1 𝜌

  Here’s what’s really going on: For the CES function, 𝜎 is constant and fully pinned down by the
  single parameter 𝜌. When 𝜌 = 0, 𝜎 = 1 (Cobb-Douglas); when 𝜌 = 1, 𝜎 = ∞ (linear/perfect substitutes);
  as 𝜌 → −∞, 𝜎 → 0 (Leontief/fixed proportions).


                                                                 𝜕ln⁡(𝐾/𝐿)
                                                          𝜎=               = 1
                                                                𝜕ln⁡(𝑀𝑅𝑇𝑆) 1 − 𝜌
Polar cases of CES:


          𝜌                        𝜎 = 1/(1 − 𝜌)                 Limit

        𝜌=1                                ∞                     Linear (perfect substitutes)

       𝜌→0                                 1                     Cobb-Douglas

      𝜌 → −∞                               0                     Leontief


                                                                                                𝜌              𝜌 𝛾/𝜌
  Reference — Munoz-Garcia ([Ch.4]): The CES function 𝑞 = [𝛼𝐾 + (1 − 𝛼)𝐿 ]                                             nests all three
  canonical production functions through the elasticity parameter 𝜎 = 1/(1 − 𝜌):
  1. 𝜌 → 0 (Cobb-Douglas limit): Apply L’Hôpital’s rule to ln⁡𝑞 = 𝛾𝜌 ln⁡[𝛼𝐾𝜌 + (1 − 𝛼)𝐿𝜌 ]. As 𝜌 → 0, both
  numerator and denominator go to 0. Differentiating numerator and denominator with respect to 𝜌:
                                                                                      𝛾       𝜌           𝜌
     Let’s work through this step by step: Starting from ln⁡𝑞 = 𝜌 ln⁡[𝛼𝐾 + (1 − 𝛼)𝐿 ] as 𝜌 → 0: 1.
     Both numerator and denominator → 0, so apply L’Hopital’s rule: differentiate w.r.t. 𝜌 2.
                                        𝜌
                           𝑑 ln⁡[𝛼𝐾 + (1 − 𝛼)𝐿 ] =  𝛼𝐾𝜌 ln⁡𝐾 + (1 − 𝛼)𝐿𝜌 ln⁡𝐿
                                                         𝜌                                                𝑑 𝜌 = 1 4.
     Numerator derivative: 𝑑𝜌                          𝛼𝐾𝜌 + (1 − 𝛼)𝐿𝜌
                                                                               3. Denominator derivative: 𝑑𝜌
                                                                   𝛼ln⁡𝐾 + (1 − 𝛼)ln⁡𝐿        𝛾
     As 𝜌 → 0, 𝐾𝜌 → 1 and 𝐿𝜌 → 1, giving: lim⁡𝜌 → 0 ln⁡𝑞 = 𝛾 ⋅ 𝛼 + (1 − 𝛼) = ln⁡(𝐾𝛼 𝐿1 − 𝛼 )



                                                         𝛼ln⁡𝐾 + (1 − 𝛼)ln⁡𝐿                   𝛾
                                       lim ln⁡𝑞 = 𝛾 ⋅                        = ln⁡(𝐾𝛼 𝐿1 − 𝛼 )
                                       𝜌→0                   𝛼 + (1 − 𝛼)
                            𝛾
     Hence 𝑞 → (𝐾𝛼 𝐿1 − 𝛼 ) — the Cobb-Douglas form with 𝜎 = 1.


                                                                       𝛾
  2. 𝜌 = 1 (Linear limit): When 𝜌 = 1, 𝑞 = [𝛼𝐾 + (1 − 𝛼)𝐿] , which is a linear function of 𝐾 and 𝐿 with
  𝜎 = ∞. The isoquants are straight lines indicating perfect substitutability.
  3. 𝜌 → −∞ (Leontief limit): As 𝜌 → −∞, the term with the larger exponent dominates. For any (𝐾, 𝐿),
                   𝜌                                 −           −
  if 𝐾 > 𝐿, then 𝐾 dominates and 𝑞 → 𝛾𝐾 (where 𝐾 is the smaller input). Formally,
               𝜌           𝜌 𝛾/𝜌                 𝛾
  lim⁡𝜌 → −∞ [𝛼𝐾 + (1 − 𝛼)𝐿 ]      = min⁡{𝐾, 𝐿} , the Leontief function with 𝜎 = 0.


  Reference — Koutsoyiannis ([Ch.3, pp.75-78]): Koutsoyiannis emphasizes five key properties of
                                             𝑏   𝑏
  the Cobb-Douglas function 𝑋 = 𝑏0 𝐿 1 𝐾 2 : 1. Marginal products: 𝑀𝑃𝐿 = 𝑏1 (𝑋/𝐿) = 𝑏1 ⋅ 𝐴𝑃𝐿 ,
  𝑀𝑃𝐾 = 𝑏2 (𝑋/𝐾) = 𝑏2 ⋅ 𝐴𝑃𝐾 — marginal products are proportional to average products 2. MRTS:
  𝑀𝑅𝑆𝐿, 𝐾 = (𝑏1 /𝑏2 )(𝐾/𝐿) — depends only on the capital-labor ratio 3. Elasticity of substitution: 𝜎 = 1
  for all parameter values 4. Factor intensity: Measured by 𝑏1 /𝑏2 — higher ratio = more labor-
  intensive technique 5. Efficiency parameter: 𝑏0 captures the efficiency of organization and
  entrepreneurship — two firms with identical 𝐾, 𝐿, 𝑏1 , 𝑏2 but different 𝑏0 have different efficiency
  levels




3.2 Cost Functions & Cost Minimization

Why this matters for your exam: Knowing the technology is one thing — but in exams (and
in real life), what you actually need is the cost function. Almost every problem asks you to find
the cheapest way to produce a given output. This section gives you the machinery: the Cost
Minimization Problem, conditional factor demands, Shephard’s lemma, and the workhorse
Cobb-Douglas example you’ll see again and again.

3.2.1 The Cost Minimization Problem (CMP)


  Let’s work through this step by step: We start with the definition of total cost 𝑤 ⋅ 𝑧 = ∑ 𝑤𝑖 𝑧𝑖 : 1.
                                                                                                               𝑖
  The firm chooses input vector 𝑧 ≥ 0 to minimize expenditure 𝑤 ⋅ 𝑧 2. Subject to the constraint that
  output meets or exceeds target 𝑞: 𝑓(𝑧) ≥ 𝑞 3. Formally: min⁡𝑧 ≥ 0 𝑤 ⋅ 𝑧                    s.t.   𝑓(𝑧) ≥ 𝑞
  Here’s what’s really going on: The Cost Minimization Problem (CMP) is the mirror image of
  output maximization. You take input prices 𝑤 as given and ask: “What’s the cheapest way to
  produce 𝑞 units?” This is the foundation for deriving conditional factor demands and the cost
  function.


                                              min 𝑤 ⋅ 𝑧 subject to 𝑓(𝑧) ≥ 𝑞
                                              𝑧≥0
Lagrangian: ℒ(𝑧; 𝜆) = 𝑤 ⋅ 𝑧 + 𝜆[𝑞 − 𝑓(𝑧)]
FOCs: 𝑤𝑘 = 𝜆 ⋅ 𝑀𝑃𝑘 (𝑧* ) ⇒ 𝑤𝑤𝑘𝑙 = 𝑀𝑃               *
                                  𝑀𝑃𝑙 = 𝑀𝑅𝑇𝑆𝑘, 𝑙 (𝑧 )
                                    𝑘



Tangency condition: The isocost line slope (−𝑤𝑘 /𝑤𝑙 ) equals the isoquant slope (−𝑀𝑅𝑇𝑆𝑘, 𝑙 ) at
the optimum.
                         𝑤𝑘                 𝜕𝑐(𝑤, 𝑞)
Lagrange multiplier: 𝜆 = 𝑀𝑃𝑘
                             =                𝜕𝑞
                                                     = 𝑀𝐶(𝑞)
3.2.2 Properties of the Cost Function


 Property                       Formal Statement                                      Intuition

                                                                                      Doubling all input prices
 1. HD(1) in 𝑤                  𝑐(𝜆𝑤, 𝑞) = 𝜆𝑐(𝑤, 𝑞)
                                                                                      doubles costs

 2. Non-decreasing in                                                                 More output cannot cost
                                𝑞1 > 𝑞0 ⇒ 𝑐(𝑤, 𝑞1 ) ≥ 𝑐(𝑤, 𝑞0 )
 𝑞                                                                                    less

                                                                                      Substitution mitigates
 3. Concave in 𝑤                𝑐(𝛼𝑤 + (1 − 𝛼)𝑤′ , 𝑞) ≥ 𝛼𝑐(𝑤, 𝑞) + (1 − 𝛼)𝑐(𝑤′ , 𝑞)
                                                                                      cost increases

 4. Shephard’s                                                                        Derivative = conditional
                                𝜕𝑐(𝑤, 𝑞)/𝜕𝑤𝑘 = 𝑧𝑘 (𝑤, 𝑞)
 Lemma                                                                                factor demand


Matrix properties of conditional factor demands:
                      2
From 𝐷𝑤 𝑧(𝑤, 𝑞) = 𝐷𝑤 𝑐(𝑤, 𝑞) (since Hessian of a concave function is NSD):

     1. Symmetric: 𝜕𝑧𝑘 /𝜕𝑤𝑙 = 𝜕𝑧𝑙 /𝜕𝑤𝑘
     2. NSD: 𝜕𝑧𝑘 /𝜕𝑤𝑘 ≤ 0 (own-price effects non-positive)
     3. HD(0): 𝐷𝑤 𝑧(𝑤, 𝑞) ⋅ 𝑤 = 0

                                          2
     Exam Tip: Concavity in 𝑤 implies 𝜕 𝑐/𝜕𝑤2𝑘 ≤ 0 → conditional factor demand slopes downward. This
     is the production analogue of the Slutsky matrix in consumer theory.



     Reference — Munoz-Garcia ([Ch.4, §4.7]): The matrix 𝐷𝑤 𝑧(𝑤, 𝑞) = 𝐷2𝑤 𝑐(𝑤, 𝑞) captures the duality
     between cost function concavity and conditional factor demand properties. Since 𝑐(𝑤, 𝑞) is concave
     in 𝑤, its Hessian 𝐷2𝑤 𝑐(𝑤, 𝑞) is symmetric and negative semidefinite (NSD). This yields three
     testable implications:
     1. Own-price effects are non-positive: 𝜕𝑧𝑘 (𝑤, 𝑞)/𝜕𝑤𝑘 ≤ 0 for every input 𝑘. Here’s the intuition: an
     increase in the price of input 𝑘 (e.g., higher wages) reduces the firm’s demand for that input (less
     labor hired). This is the production analogue of the compensated (Hicksian) demand slope in
     consumer theory.
     2. Cross-price effects are symmetric: 𝜕𝑧𝑘 (𝑤, 𝑞)/𝜕𝑤𝑙 = 𝜕𝑧𝑙 (𝑤, 𝑞)/𝜕𝑤𝑘 for any two inputs 𝑘 and 𝑙. This
     symmetry condition means the effect of a wage increase on capital demand equals the effect of a
     capital price increase on labor demand.
     3. Euler’s condition: 𝐷𝑤 𝑧(𝑤, 𝑞) ⋅ 𝑤 = 0 — the matrix multiplied by the price vector yields zero,
     reflecting homogeneity of degree zero in input prices. Consequently, ∑ 𝑤𝑙 ⋅ 𝜕𝑧𝑘 /𝜕𝑤𝑙 = 0.
                                                                                  𝑙
     Proof sketch: From Shephard’s lemma, 𝜕𝑐/𝜕𝑤𝑘 = 𝑧𝑘 . Differentiating again gives
      2
     𝜕 𝑐/𝜕𝑤𝑘 𝜕𝑤𝑙 = 𝜕𝑧𝑘 /𝜕𝑤𝑙 . The Hessian 𝐷2𝑤 𝑐(𝑤, 𝑞) must be symmetric (by Young’s theorem) and NSD
     (since 𝑐 is concave in 𝑤). The NSD property implies all principal minors alternate in sign, with first-
     order principal minors 𝜕𝑧𝑘 /𝜕𝑤𝑘 ≤ 0.


3.2.3 Shephard’s Lemma — Proof

If 𝑐(𝑤, 𝑞) = 𝑤 ⋅ 𝑧(𝑤, 𝑞) is differentiable in 𝑤, then by the envelope theorem:


     Let’s work through this step by step: We start from the cost function identity 𝑐(𝑤, 𝑞) = 𝑤 ⋅ 𝑧(𝑤, 𝑞):
                                                          𝜕𝑐(𝑤, 𝑞)                  𝜕𝑧𝑗
     1. Differentiate w.r.t. 𝑤𝑘 using the product rule:     𝜕𝑤𝑘 = 𝑧𝑘 (𝑤, 𝑞) + ∑𝑗 𝑤𝑗 𝜕𝑤𝑘 2. At the optimum, the
     first-order condition 𝑤𝑗 = 𝜆𝑀𝑃𝑗 holds, and the Envelope Theorem implies the summation term
                                                                             𝜕𝑐(𝑤, 𝑞)
     vanishes (re-optimization has zero first-order effect) 3. Therefore:      𝜕𝑤𝑘 = 𝑧𝑘 (𝑤, 𝑞)
  Here’s what’s really going on: A small increase in input price 𝑤𝑘 raises total cost by exactly the
  amount of input 𝑘 you were already using. Sure, you’ll re-optimize (substitute away from the now-
  costlier input), but that re-optimization only has a second-order effect on cost — the envelope
  theorem says you can ignore it.


                                   𝜕𝑐(𝑤, 𝑞)                    𝜕𝑧𝑗
                                            = 𝑧𝑘 (𝑤, 𝑞) + ∑ 𝑤𝑗     = 𝑧𝑘 (𝑤, 𝑞)
                                     𝜕𝑤𝑘                  𝑗    𝜕𝑤𝑘
The summation term vanishes at the optimum by the FOCs (first-order effect of price change
on input choice is zero).


  Reference — Munoz-Garcia ([Ch.4, §4.7]): Shephard’s lemma is a direct application of the
  duality theorem. The cost function 𝑐(𝑤, 𝑞) serves as the support function of the closed, convex set
  {𝑧: 𝑤 ⋅ 𝑧 = 𝑐(𝑤, 𝑞)} — the set of input combinations that are at least as costly as the cost-minimizing
  bundle 𝑧(𝑤, 𝑞).
  Formally, for a given output level 𝑞, define the set 𝑆(𝑞) = {𝑧 ≥ 0: 𝑓(𝑧) ≥ 𝑞}. The cost function
  𝑐(𝑤, 𝑞) = min⁡𝑧 ∈ 𝑆(𝑞) 𝑤 ⋅ 𝑧 is the support function of 𝑆(𝑞). By the duality theorem, if 𝑐(𝑤, 𝑞) is
  differentiable at 𝑤, then:


     Let’s work through this step by step: We start with the cost function as a support function:
     1. Define the feasible input set 𝑆(𝑞) = {𝑧 ≥ 0: 𝑓(𝑧) ≥ 𝑞} 2. The cost function 𝑐(𝑤, 𝑞) = min⁡𝑧 ∈ 𝑆(𝑞) 𝑤 ⋅ 𝑧
     is the support function of 𝑆(𝑞) 3. By the duality theorem for convex sets, if 𝑐(𝑤, 𝑞) is
                                                                                         𝜕𝑐(𝑤, 𝑞)
     differentiable at 𝑤, the gradient gives the unique supporting hyperplane:             𝜕𝑤𝑘 = 𝑧𝑘 (𝑤, 𝑞)


                                                 𝜕𝑐(𝑤, 𝑞)
                                                          = 𝑧𝑘 (𝑤, 𝑞)
                                                   𝜕𝑤𝑘
  This mirrors the consumer theory result where the expenditure function 𝑒(𝑝, 𝑢) is the support
  function of the Hicksian demand correspondence, yielding Shephard’s lemma ℎ𝑘 (𝑝, 𝑢) = 𝜕𝑒(𝑝, 𝑢)/𝜕𝑝𝑘 .
                                                    1/2 1/2
  Verification with Cobb-Douglas: For 𝑞 = 𝐾        𝐿 , we derived 𝐿𝑅𝑇𝐶 = 2√𝑤𝑟 ⋅ 𝑞. Computing
  𝜕𝐿𝑅𝑇𝐶/𝜕𝑤 = √𝑟/𝑤 ⋅ 𝑞 = 𝐿(𝑤, 𝑟, 𝑞) confirms Shephard’s lemma. Similarly, 𝜕𝐿𝑅𝑇𝐶/𝜕𝑟 = √𝑤/𝑟 ⋅ 𝑞 = 𝐾(𝑤, 𝑟, 𝑞).
  Here’s the key connection: This is the production analogue of ℎ𝑘 (𝑝, 𝑢) = 𝜕𝑒(𝑝, 𝑢)/𝜕𝑝𝑘 in consumer
  theory. In both cases, the derivative of the minimum-value function (cost/expenditure) w.r.t. a price
  yields the compensated demand for that good.


3.2.4 Short-Run vs Long-Run Cost


 Aspect                           Short Run                                 Long Run
                                                                        ‾
 Fixed factors                    At least one input fixed (𝐾 = 𝐾)          All inputs variable
                                                         ‾                                  *           *
 Cost function                    𝑆𝑅𝑇𝐶(𝑄) = 𝑤𝐿(𝑄) + 𝑟𝐾                      𝐿𝑅𝑇𝐶(𝑄) = 𝑤𝐿 (𝑄) + 𝑟𝐾 (𝑄)
                                    ‾
 Fixed cost                       𝑟𝐾 (sunk in SR)                           Zero (all costs variable)

 Shutdown condition               𝑃 < min⁡𝐴𝑉𝐶                               𝑃 < min⁡𝐴𝐶

                                  Upward (if DRS); can be
 Supply slope                                                               Upward (DRS) or flat (CRS)
                                  flat/backward


3.2.5 Complete Cobb-Douglas CMP Analysis (Munoz-Garcia Ch.4, Example 4.8)

Consider the Cobb-Douglas production function 𝑓(𝑧1 , 𝑧2 ) = 𝑧𝛼1 𝑧𝛽2 with 𝛼, 𝛽 ≥ 0. The firm solves:


  Let’s work through this step by step: We start with the CMP with Cobb-Douglas technology
  𝑓(𝑧1 , 𝑧2 ) = 𝑧𝛼1 𝑧𝛽2 : 1. Set up the minimization problem: minimize 𝑤1 𝑧1 + 𝑤2 𝑧2 subject to 𝑧𝛼1 𝑧𝛽2 ≥ 𝑞 2.
   The Lagrangian method converts this constrained problem into an unconstrained one by
   incorporating the production constraint with a Lagrange multiplier 𝜆 3. Solution proceeds through
   FOCs → tangency condition → substitution into constraint
   Here’s what’s really going on: This is the canonical Cobb-Douglas CMP — the one you’ll practice
   until you can do it in your sleep. It gives you closed-form conditional factor demands and a log-
   linear cost function. That’s why Cobb-Douglas is the workhorse of production theory.


                                             min 𝑤1 𝑧1 + 𝑤2 𝑧2                 subject to 𝑧𝛼1 𝑧𝛽2 ≥ 𝑞
                                           𝑧1 , 𝑧2 ≥ 0

Step 1 — Lagrangian: ℒ = 𝑤1 𝑧1 + 𝑤2 𝑧2 + 𝜆[𝑞 − 𝑧𝛼1 𝑧𝛽2 ]
Step 2 — FOCs (interior solution):

                                                                                                                                   𝛽
   Let’s work through this step by step: We start with the Lagrangian ℒ = 𝑤1 𝑧1 + 𝑤2 𝑧2 + 𝜆[𝑞 − 𝑧𝛼1 𝑧2 ]
                                       𝛼−1 𝛽
                                  𝜕ℒ = 𝑤 − 𝜆𝛼𝑧                                 𝜕ℒ = 𝑤 − 𝜆𝛽𝑧𝛼 𝑧𝛽 − 1 = 0
   : 1. Differentiate w.r.t. 𝑧1 : 𝜕𝑧    1  𝑧2 = 0 2. Differentiate w.r.t. 𝑧2 : 𝜕𝑧
                                               1                                     2     1 2          3.
                              1                                                  2
                           𝛼−1 𝛽            𝛼 𝛽−1
   At the optimum, 𝑤1 = 𝜆𝛼𝑧1 𝑧2 and 𝑤2 = 𝜆𝛽𝑧1 𝑧2
   Here’s what’s really going on: Each FOC sets input price 𝑤𝑖 equal to the marginal benefit of
   using that input — the Lagrange multiplier 𝜆 times the marginal product 𝑀𝑃𝑖 . The multiplier 𝜆
   equals marginal cost 𝑀𝐶(𝑞) in equilibrium.


                                    𝜕ℒ = 𝑤 − 𝜆𝛼𝑧𝛼 − 1 𝑧𝛽 = 0,                   𝜕ℒ = 𝑤 − 𝜆𝛽𝑧𝛼 𝑧𝛽 − 1 = 0
                                          1     1      2                              2     1 2
                                    𝜕𝑧1                                         𝜕𝑧2
Step 3 — Tangency condition: Dividing the two FOCs:


   Let’s work through this step by step: We start with the two FOCs: 1. Divide the first FOC by the
                              𝛽                                           𝛽
                    𝜆𝛼𝑧𝛼1 − 1 𝑧2                                 𝛼𝑧𝛼1 − 1 𝑧2
   second: 𝑤
           𝑤2 =
             1
                           𝛽−1     2. Cancel 𝜆 and simplify:           𝛽−1
                                                                               = 𝛼𝑧
                                                                                 𝛽𝑧
                                                                                   2
                                                                                     3. Therefore: 𝑤    𝛼𝑧2
                                                                                                   𝑤2 = 𝛽𝑧
                                                                                                     1
                    𝜆𝛽𝑧𝛼1 𝑧2                                     𝛽𝑧𝛼1 𝑧2             1                    1


   Here’s what’s really going on: The tangency condition equates the input price ratio (𝑤1 /𝑤2 ) to
   the MRTS (𝛼𝑧2 /𝛽𝑧1 ). At the optimum, the slope of the isocost line equals the slope of the isoquant —
   a classic “picture worth a thousand words” result.


                                                         𝑤1 𝛼𝑧𝛼1 − 1 𝑧𝛽2 𝛼𝑧2
                                                         𝑤2 = 𝛽𝑧𝛼 𝑧𝛽 − 1 = 𝛽𝑧1
                                                                     1 2
                                    𝑤
Solving for 𝑧2 : 𝑧2 = 𝛽𝛼 ⋅ 𝑤12 ⋅ 𝑧1
Step 4 — Conditional factor demands: Substitute into the production constraint:

                                                                                                                   𝑤
   Let’s work through this step by step: We start with the tangency condition 𝑧2 = 𝛽𝛼 ⋅ 𝑤12 ⋅ 𝑧1 : 1.
                                                                        𝛼 𝛽              𝛼   𝑤    𝛽
   Substitute 𝑧2 into the production constraint 𝑞 = 𝑧1 𝑧2 : 𝑞 = 𝑧1 ( 𝛽𝛼 ⋅ 𝑤12 ⋅ 𝑧1 ) 2. Combine terms:
                                                                                 𝛽
   𝑧𝛼1 ⋅ 𝑧𝛽1 = 𝑧𝛼1 + 𝛽 and separate the constant: 𝑞 = 𝑧𝛼1 + 𝛽 ( 𝛽𝑤
                                                                𝛼𝑤2 )
                                                                   1


   Here’s what’s really going on: This expresses the production constraint entirely in terms of 𝑧1 ,
   letting us solve for the conditional factor demand 𝑧1 (𝑤, 𝑞).


                                                                         𝛽
                                                            𝛽 𝑤                       𝛽𝑤 𝛽
                                                  𝑞 = 𝑧𝛼1 ( 𝛼 ⋅ 𝑤1 ⋅ 𝑧1 ) = 𝑧𝛼1 + 𝛽 ( 𝛼𝑤1 )
                                                                2                            2


                                                                                𝛼 + 𝛽 𝛽𝑤1 𝛽                   𝛼+𝛽
   Let’s work through this step by step: Continuing from 𝑞 = 𝑧1                      ( 𝛼𝑤2 ) : 1. Isolate 𝑧1 :
                     −𝛽                                 𝛽                                                 𝛽/(𝛼 + 𝛽)
   𝑧𝛼1 + 𝛽 = 𝑞( 𝛽𝑤
                𝛼𝑤2 )
                   1
                        2. Simplify: 𝑧𝛼1 + 𝛽 = 𝑞( 𝛼𝑤
                                                  𝛽𝑤1
                                                     2
                                                       ) 3. Take the (𝛼 + 𝛽)-th root: 𝑧1 (𝑤, 𝑞) = ( 𝛼𝑤 2
                                                                                                     𝛽𝑤1
                                                                                                         )          ⋅ 𝑞1/(𝛼 + 𝛽)
   Here’s what’s really going on: The conditional factor demand for 𝑧1 depends on relative input
   prices (the bracketed term) and the output level 𝑞. It decreases in its own price 𝑤1 and increases in
   output — exactly what you’d expect.
                                                                            𝛼𝑤2 𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)
                                                        𝑧1 (𝑤, 𝑞) = (           )        ⋅𝑞
                                                                            𝛽𝑤1
Similarly:

                                                                                                                                     𝑤
   Let’s work through this step by step: From the tangency condition, 𝑧2 = 𝛽𝛼 ⋅ 𝑤12 ⋅ 𝑧1 : 1. Substitute
                                                                𝛽/(𝛼 + 𝛽)
   the solution for 𝑧1 (𝑤, 𝑞): 𝑧2 = 𝛽𝛼 ⋅ 𝑤      𝛼𝑤2
                                         𝑤2 ⋅ ( 𝛽𝑤 )
                                           1
                                                                            ⋅ 𝑞1/(𝛼 + 𝛽) 2. Simplify powers of 𝑤1 , 𝑤2 , 𝛼, 𝛽:
                                                            1
                       𝛼/(𝛼 + 𝛽)
   𝑧2 (𝑤, 𝑞) = ( 𝛽𝑤
                 𝛼𝑤2 )
                    1
                                    ⋅ 𝑞1/(𝛼 + 𝛽)
   Here’s what’s really going on: By symmetry, 𝑧2 is decreasing in its own price 𝑤2 and increasing
   in the cross-price 𝑤1 (substitution effect) and output 𝑞.


                                                                                   𝛼/(𝛼 + 𝛽)
                                                                      𝛽𝑤
                                                        𝑧2 (𝑤, 𝑞) = ( 𝛼𝑤1 )                    ⋅ 𝑞1/(𝛼 + 𝛽)
                                                                               2
Step 5 — Cost function:


   Let’s work through this step by step: We start with 𝑐(𝑤, 𝑞) = 𝑤1 𝑧1 (𝑤, 𝑞) + 𝑤2 𝑧2 (𝑤, 𝑞): 1. Substitute
                                                                      𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)                 𝛼/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)
   the conditional factor demands: 𝑐 = 𝑤1 ( 𝛼𝑤
                                            𝛽𝑤
                                               2
                                                 )                             𝑞            + 𝑤2 ( 𝛽𝑤
                                                                                                   𝛼𝑤2 )
                                                                                                      1
                                                                                                                       𝑞            2. Combine powers of
                                                                  1
                    𝛼/(𝛼 + 𝛽) 𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)                                       𝛼/(𝛼 + 𝛽)
   𝑤1 and 𝑤2 : 𝑐 = 𝑤1        𝑤2        𝑞          ⋅ 𝐾 where 𝐾 ≡ ( 𝛼𝛽 )𝛽/(𝛼 + 𝛽) + ( 𝛽𝛼 )          is a constant
   Here’s what’s really going on: The Cobb-Douglas cost function is multiplicative in input prices.
   The exponent on each input price equals its production exponent share of total factor returns — a
   beautiful symmetry.


                                  𝑐(𝑤, 𝑞) = 𝑤1 𝑧1 (𝑤, 𝑞) + 𝑤2 𝑧2 (𝑤, 𝑞) = 𝑤𝛼/(𝛼
                                                                           1
                                                                                + 𝛽) 𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)
                                                                                    𝑤2        𝑞          ⋅𝐾
                  𝛽/(𝛼 + 𝛽)             𝛼/(𝛼 + 𝛽)
where 𝐾 ≡ ( 𝛼𝛽 )                 + ( 𝛽𝛼 )           is a constant.
Step 6 — Verify Shephard’s Lemma:

                                                                                                           𝛼/(𝛼 + 𝛽)       𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)
   Let’s work through this step by step: We start with 𝑐(𝑤, 𝑞) = 𝑤1                                                    𝑤2          𝑞             ⋅ 𝐾: 1.
                                 𝜕𝑐 = 𝛼 𝑤𝛼/(𝛼 + 𝛽) − 1 𝑤𝛽/(𝛼 + 𝛽) 𝑞1/(𝛼 + 𝛽) ⋅ 𝐾
   Differentiate w.r.t. 𝑤1 : 𝜕𝑤         𝛼+𝛽 1              2                     2. Note that
                                   1
                 𝛼/(𝛼 + 𝛽) − 1 𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)
   𝑐(𝑤, 𝑞)/𝑤1 = 𝑤1            𝑤2        𝑞          ⋅ 𝐾 3. Therefore: 𝜕𝑤1 = 𝛼 +𝛼 𝛽 ⋅ 𝑐(𝑤,
                                                                         𝜕𝑐              𝑞)
                                                                                      𝑤1 4. But from 𝑧1 (𝑤, 𝑞):
     𝛼 ⋅ 𝑐 = 𝑧 (𝑤, 𝑞) ✓
   𝛼 + 𝛽 𝑤1    1

   Here’s what’s really going on: This confirms Shephard’s lemma: the derivative of the cost
   function w.r.t. 𝑤1 recovers the conditional factor demand 𝑧1 (𝑤, 𝑞). The checkmark means our
   derivation is internally consistent.


                                                    𝜕𝑐(𝑤, 𝑞)      𝑐(𝑤, 𝑞)
                                                             = 𝛼 ⋅ 𝑤      = 𝑧1 (𝑤, 𝑞) ✓
                                                      𝜕𝑤1     𝛼+𝛽    1


   Let’s work through this step by step: By symmetry with the 𝑤1 verification: 1.
    𝜕𝑐     𝛽    𝛼/(𝛼 + 𝛽) 𝛽/(𝛼 + 𝛽) − 1 1/(𝛼 + 𝛽)                      𝛼/(𝛼 + 𝛽) 𝛽/(𝛼 + 𝛽) − 1 1/(𝛼 + 𝛽)
   𝜕𝑤2 = 𝛼 + 𝛽 𝑤1        𝑤2            𝑞          ⋅ 𝐾 2. Since 𝑐/𝑤2 = 𝑤1        𝑤2            𝑞          ⋅ 𝐾 3.
    𝜕𝑐 = 𝛽 ⋅ 𝑐(𝑤, 𝑞) = 𝑧 (𝑤, 𝑞) ✓
   𝜕𝑤2   𝛼+𝛽      𝑤2        2

   Here’s what’s really going on: Both cross-verifications confirm the internal consistency of the
   Cobb-Douglas CMP solution. The cost function exponents 𝛼/(𝛼 + 𝛽) and 𝛽/(𝛼 + 𝛽) are the cost shares of
   each input.


                                                    𝜕𝑐(𝑤, 𝑞)    𝛽   𝑐(𝑤, 𝑞)
                                                             =     ⋅ 𝑤      = 𝑧2 (𝑤, 𝑞) ✓
                                                      𝜕𝑤2      𝛼+𝛽     2

Step 7 — Log-linear form:


   Let’s work through this step by step: We start with the Cobb-Douglas cost function
                𝛼/(𝛼 + 𝛽)    𝛽/(𝛼 + 𝛽) 1/(𝛼 + 𝛽)
   𝑐(𝑤, 𝑞) = 𝑤1             𝑤2          𝑞           ⋅ 𝐾: 1. Take natural logs of both sides:
  ln⁡𝑐 = 𝛼 +𝛼 𝛽 ln⁡𝑤1 + 𝛼 +𝛽 𝛽 ln⁡𝑤2 + 𝛼 +1 𝛽 ln⁡𝑞 + ln⁡𝐾 2. The exponents become coefficients in a linear function of
  logarithms
  Here’s what’s really going on: The log-linear form is the foundation of the translog cost function,
  a flexible empirical specification widely used in industrial organization. The coefficients directly
  estimate the cost shares of each input and returns to scale (1/(𝛼 + 𝛽)).



                                ln⁡𝑐(𝑤, 𝑞) =    𝛼 ln⁡𝑤 + 𝛽 ln⁡𝑤 + 1 ln⁡𝑞 + ln⁡𝐾
                                                      1        2
                                               𝛼+𝛽      𝛼+𝛽      𝛼+𝛽
The cost function is linear in the logs of output and input prices — a property exploited in the
translog cost function used extensively in empirical industrial organization.
Step 8 — Expansion path derivation: The expansion path traces cost-minimizing (𝑧1 , 𝑧2 )
combinations as 𝑞 varies, holding input prices constant. From the tangency condition:

                                                                                                𝑤     𝛼𝑧
  Let’s work through this step by step: We start with the tangency condition 𝑤12 = 𝛽𝑧2 : 1. Solve for
                                                                                                        1
  𝑧2 in terms of 𝑧1 : 𝑧2 = 𝛽𝑤
                           𝛼𝑤2 ⋅ 𝑧1 2. Since 𝑤1 , 𝑤2 , 𝛼, 𝛽 are all constants, this is a linear relationship
                              1


  through the origin
  Here’s what’s really going on: The expansion path is a ray from the origin — the optimal input
  ratio 𝑧2 /𝑧1 is constant at (𝛽𝑤1 )/(𝛼𝑤2 ) for ALL output levels. This is the homothetic property of Cobb-
  Douglas: the input mix is independent of scale.


                                                          𝛽𝑤
                                                     𝑧2 = 𝛼𝑤1 ⋅ 𝑧1
                                                               2
Since 𝑤1 , 𝑤2 , 𝛼, 𝛽 are constants, the expansion path is a straight line through the origin. The
𝑧2 /𝑧1 ratio is fixed at (𝛽𝑤1 )/(𝛼𝑤2 ) for all output levels. This linear expansion path reflects the
homothetic nature of the Cobb-Douglas production function — the input mix is independent of
the scale of production.



3.3 Profit Maximization

Why this matters for your exam: Cost minimization tells you how to produce efficiently —
but profit maximization tells you how much to produce. This is the firm’s ultimate goal, and it’s
where we get the supply curve, Hotelling’s lemma, and the key result that supply always slopes
upward. If you understand this section, you’ve mastered the core of producer theory.

3.3.1 Profit Function


  Let’s work through this step by step: We start with the definition of profit 𝜋 = 𝑝 ⋅ 𝑦: 1. The firm
                                         𝐿
  chooses a production plan 𝑦 ∈ ℝ from the feasible set 𝑌 2. Subject only to technological feasibility:
  𝑦 ∈ 𝑌 3. The profit function is the maximum value: 𝜋(𝑝) = max⁡𝑦 ∈ 𝑌 𝑝 ⋅ 𝑦
  Here’s what’s really going on: Unlike consumer optimization (which has a budget constraint),
  the firm faces no resource constraint — only technological constraints. That’s why the profit
  function has no wealth effects, leading to the rock-solid Law of Supply (supply curves always slope
  upward).


                                                     𝜋(𝑝) = max𝑝 ⋅ 𝑦
                                                             𝑦∈𝑌

Properties (given 𝑌 closed and satisfying free disposal):


 Property                                                          Meaning

 1. HD(1) in 𝑝                                                     𝜋(𝜆𝑝) = 𝜆𝜋(𝑝)
 Property                                                           Meaning

 2. Convex in 𝑝                                                     𝜋(𝛼𝑝 + (1 − 𝛼)𝑝′ ) ≤ 𝛼𝜋(𝑝) + (1 − 𝛼)𝜋(𝑝′ )

 3. Hotelling’s Lemma                                               𝜕𝜋(𝑝)/𝜕𝑝𝑘 = 𝑦𝑘 (𝑝)

 4. Law of Supply                                                   𝜕𝑦𝑘 (𝑝)/𝜕𝑝𝑘 ≥ 0

Proof of convexity: For any 𝑝, 𝑝′ and 𝛼 ∈ [0, 1], let 𝑝‾ = 𝛼𝑝 + (1 − 𝛼)𝑝′ :

                                                                                                                 ′
  Let’s work through this step by step: We start with the definition of convexity: for 𝑝, 𝑝 and
  𝛼 ∈ [0, 1], let 𝑝‾ = 𝛼𝑝 + (1 − 𝛼)𝑝′ : 1. Write 𝜋(𝑝)   ‾ =𝑝‾ ⋅ 𝑦(𝑝)
                                                                  ‾ where 𝑦(𝑝)  ‾ is the profit-maximizing supply at 𝑝
                                                                                                                     ‾ 2.
                                                ′
  Expand: 𝜋(𝑝) = 𝛼[𝑝 ⋅ 𝑦(𝑝)] + (1 − 𝛼)[𝑝 ⋅ 𝑦(𝑝)] 3. Since 𝑦(𝑝) is feasible but not necessarily optimal at 𝑝 or
                   ‾          ‾                      ‾               ‾

  𝑝′ : 𝑝 ⋅ 𝑦( ‾𝑝) ≤ 𝜋(𝑝) and 𝑝′ ⋅ 𝑦( ‾𝑝) ≤ 𝜋(𝑝′ ) 4. Therefore: 𝜋( ‾𝑝) ≤ 𝛼𝜋(𝑝) + (1 − 𝛼)𝜋(𝑝′ )
  Here’s what’s really going on: The profit function is convex in prices because you benefit more
  from extreme prices than from a muddled average. When output prices are high, you expand
  production; when input prices are low, you hire aggressively. A convex combination of price vectors
  prevents you from fully exploiting either favorable scenario.


                      𝜋( ‾𝑝) = ‾𝑝 ⋅ 𝑦( ‾𝑝) = 𝛼[𝑝 ⋅ 𝑦( ‾𝑝)] + (1 − 𝛼)[𝑝′ ⋅ 𝑦( ‾𝑝)] ≤ 𝛼𝜋(𝑝) + (1 − 𝛼)𝜋(𝑝′ )
since 𝑝 ⋅ 𝑦(𝑝)
            ‾ ≤ 𝜋(𝑝) by definition of 𝜋(𝑝) as maximum.



  Exam Tip: Profit function is convex (not concave!) in prices. Cost function is concave in input
  prices. Don’t confuse them.



  Reference — Munoz-Garcia ([Ch.4, §4.4]): The profit function 𝜋(𝑝) can be understood as the
  support function of the negative production set −𝑌:


     Let’s work through this step by step: We start with the definition of the support function of
     a convex set: 1. The negative production set −𝑌 = {−𝑦: 𝑦 ∈ 𝑌} is convex (if 𝑌 satisfies convexity
     and free disposal) 2. The support function of −𝑌 is 𝜇               (𝑝) = min⁡𝑦 ∈ 𝑌 {𝑝 ⋅ (−𝑦)} = −max⁡𝑦 ∈ 𝑌 {𝑝 ⋅ 𝑦} 3.
                                                                    −𝑌
     But max⁡𝑦 ∈ 𝑌 {𝑝 ⋅ 𝑦} = 𝜋(𝑝), hence 𝜇−𝑌 (𝑝) = 𝜋(𝑝)


                                       𝜋(𝑝) = 𝜇−𝑌 (𝑝) = min {𝑝 ⋅ (−𝑦)} = max{𝑝 ⋅ 𝑦}
                                                         𝑦∈𝑌                 𝑦∈𝑌
  As a support function of a convex set, 𝜋(𝑝) is convex in prices. This representation yields a dual
  characterization of the production set:


     Let’s work through this step by step: We start with the support-function representation of
     the profit function: 1. For any feasible production plan 𝑦 ∈ 𝑌, profit at prices 𝑝 cannot exceed
     𝜋(𝑝): 𝑝 ⋅ 𝑦 ≤ 𝜋(𝑝) 2. Conversely, if a plan 𝑦 satisfies 𝑝 ⋅ 𝑦 ≤ 𝜋(𝑝) for ALL positive price vectors 𝑝 ≫ 0
                                                             𝐿
     , then 𝑦 must be feasible 3. Therefore: 𝑌 = {𝑦 ∈ ℝ : 𝑝 ⋅ 𝑦 ≤ 𝜋(𝑝) for all 𝑝 ≫ 0}


                                         𝑌 = {𝑦 ∈ ℝ𝐿 : 𝑝 ⋅ 𝑦 ≤ 𝜋(𝑝) for all 𝑝 ≫ 0}
  Here’s the economic intuition for convexity: You benefit more from extreme price vectors than
  from balanced ones. Consider two price scenarios 𝑝 (high output price, low input price) and 𝑝′ (low
  output price, high input price). Under 𝑝, you produce aggressively; under 𝑝′ , you scale back. A
  convex combination 𝑝‾ = 𝛼𝑝 + (1 − 𝛼)𝑝′ represents “muddled” prices where you cannot fully exploit
  either favorable scenario. Hence 𝜋( ‾𝑝) ≤ 𝛼𝜋(𝑝) + (1 − 𝛼)𝜋(𝑝′ ).
  Contrast with cost function: The cost function 𝑐(𝑤, 𝑞) is concave in input prices 𝑤 because when
  input prices fluctuate, you can adjust your input mix toward relatively cheaper inputs —
  substitution mitigates cost increases. The profit function, by contrast, is convex in output prices
  because you can expand output when prices rise (no budget constraint limits this expansion).
3.3.2 Hotelling’s Lemma — Envelope Theorem Proof


  Let’s work through this step by step: We start with the profit function identity 𝜋(𝑝) = 𝑝 ⋅ 𝑦(𝑝): 1.
                                                         𝜕𝜋(𝑝)                        𝜕𝑦
  Differentiate w.r.t. 𝑝𝑘 using the product rule: 𝜕𝑝              = 𝑦𝑘 (𝑝) + ∑𝑗 𝑝𝑗 𝜕𝑝𝑗 2. At the optimum, the Envelope
                                                            𝑘                           𝑘
  Theorem applies: the summation term ∑ 𝑝𝑗 (𝜕𝑦𝑗 /𝜕𝑝𝑘 ) = 0 because 𝑦(𝑝) was chosen to maximize 𝑝 ⋅ 𝑦
                                               𝑗
             𝜕𝜋(𝑝)
  3. Hence: 𝜕𝑝       = 𝑦𝑘 (𝑝)
                𝑘

  Here’s what’s really going on: A $1 increase in the price of output 𝑘 raises profit by exactly 𝑦𝑘 —
  the amount of output 𝑘 you produce. Any adjustment to the production plan has only a second-order
  effect on profit (that’s the envelope condition at work).


                                                       𝜋(𝑝) = 𝑝 ⋅ 𝑦(𝑝)
Apply the envelope theorem:


  Let’s work through this step by step: Applying the envelope theorem directly to
  𝜋(𝑝) = max⁡𝑦 ∈ 𝑌 𝑝 ⋅ 𝑦: 1. At the optimum, fix the supply vector at 𝑦 = 𝑦(𝑝) 2. Differentiate the maximand
                                         𝜕𝜋(𝑝)
  w.r.t. 𝑝𝑘 while holding 𝑦 constant: 𝜕𝑝 = 𝜕𝑝𝜕 (𝑝 ⋅ 𝑦)|       = 𝑦𝑘 (𝑝) 3. The envelope theorem guarantees
                                           𝑘       𝑘            𝑦 = 𝑦(𝑝)
  that ignoring the endogenous response of 𝑦(𝑝) yields the correct derivative
  Here’s what’s really going on: The envelope theorem simplifies derivative calculations:
  differentiate the objective (not the value function) while holding the choice variables fixed at their
  optimal values. This eliminates the need to solve for 𝜕𝑦𝑗 /𝜕𝑝𝑘 .


                                      𝜕𝜋(𝑝)
                                            = 𝜕 (𝑝 ⋅ 𝑦)|                        = 𝑦𝑘 (𝑝)
                                       𝜕𝑝𝑘   𝜕𝑝𝑘
                                                                     𝑦 = 𝑦(𝑝)

Economic intuition: A $1 increase in output price 𝑘 raises profit by exactly the amount of
output 𝑘 produced, because you’re already optimizing — any adjustment would only have a
second-order effect.


  Reference — Munoz-Garcia ([Ch.4, §4.4]): Hotelling’s lemma is an immediate application of the
  duality theorem from consumer theory. Since 𝜋(𝑝) = max⁡𝑦 ∈ 𝑌 𝑝 ⋅ 𝑦 is the support function of 𝑌, by the
  duality theorem, if the supply correspondence 𝑦(𝑝) is single-valued, then 𝜋(𝑝) is differentiable at 𝑝
  and:


    Let’s work through this step by step: We start with the profit function as support function
    𝜋(𝑝) = max⁡𝑦 ∈ 𝑌 𝑝 ⋅ 𝑦: 1. By the duality theorem for convex sets, if the supply correspondence 𝑦(𝑝)
                                                                                                    𝜕𝜋(𝑝)
    is single-valued, 𝜋(𝑝) is differentiable at 𝑝 and: 𝛻𝑝 𝜋(𝑝) = 𝑦(𝑝) 2. Component-wise: 𝜕𝑝                 = 𝑦𝑘 (𝑝) 3.
                                                                                                       𝑘
                       2
    The Hessian 𝐷 𝜋(𝑝) = 𝐷𝑦(𝑝) is symmetric positive semidefinite (since 𝜋 is convex), giving the
    Law of Supply


                                                                                𝜕𝜋(𝑝)
                                 𝛻𝑝 𝜋(𝑝) = 𝑦(𝑝)        or equivalently                = 𝑦𝑘 (𝑝)
                                                                                 𝜕𝑝𝑘
                                                                                                                    2
  Matrix properties of supply: If 𝑦(𝑝) is differentiable at 𝑝, then the derivative matrix 𝐷𝑦(𝑝) = 𝐷 𝜋(𝑝)
  (the Hessian of the profit function) has three key properties:

     1. Symmetric PSD: 𝐷𝑦(𝑝) is symmetric positive semidefinite (since 𝜋 is convex in 𝑝, its Hessian
         is PSD)
     2. Own-price effects non-negative: 𝜕𝑦𝑘 (𝑝)/𝜕𝑝𝑘 ≥ 0 for all 𝑘 — the Law of Supply
     3. Euler condition: 𝐷𝑦(𝑝) ⋅ 𝑝 = 0 — supply is HD(0) in prices

  Cross-substitution symmetry: 𝜕𝑦 (𝑝)/𝜕𝑝 = 𝜕𝑦 (𝑝)/𝜕𝑝 for all 𝑘, 𝑙. This means the effect of good 𝑙’s
                                       𝑙           𝑘       𝑘               𝑙
  price on the supply of good 𝑘 equals the effect of good 𝑘’s price on the supply of good 𝑙.
  No wealth effects: Unlike consumer demand (where income effects can produce Giffen goods),
  producer supply has no budget constraint — only substitution effects operate. Hence the Law of
  Supply is robust: supply curves always slope upward, both at the firm level and in the aggregate.


3.3.3 MRPT = MC Ratio (Duality Result)

Theorem: 𝑀𝑅𝑃𝑇𝑥, 𝑦 = 𝑀𝐶𝑥 /𝑀𝐶𝑦
Proof: Total differentiate 𝐹(𝑞 , 𝑞 , 𝑧) = 0 along frontier:
                                     𝑥    𝑦


  Let’s work through this step by step: We start with the transformation frontier 𝐹(𝑞𝑥 , 𝑞𝑦 , 𝑧) = 0: 1.
                                           𝜕𝐹 𝑑𝑞 + 𝜕𝐹 𝑑𝑞 = 0                                       𝑑𝑞   𝜕𝐹/𝜕𝑞
  Total differentiate along the frontier: 𝜕𝑞    𝑥  𝜕𝑞   𝑦
                                                             2. Solve for 𝑑𝑞𝑦 /𝑑𝑞𝑥 : − 𝑑𝑞𝑦 = 𝜕𝐹/𝜕𝑞𝑥 3. By
                                                      𝑥           𝑦                                 𝑥          𝑦
                           𝑑𝑞                                                   𝜕𝐹/𝜕𝑞
  definition, 𝑀𝑅𝑃𝑇𝑥, 𝑦 ≡ − 𝑑𝑞𝑦 along 𝐹 = 0 4. Therefore: 𝑀𝑅𝑃𝑇𝑥, 𝑦 = 𝜕𝐹/𝜕𝑞𝑥
                              𝑥                                                        𝑦

  Here’s what’s really going on: The MRPT measures the rate at which you must reduce one
  output to increase another, given fixed inputs — the “opportunity cost” of producing good 𝑥 in
  terms of good 𝑦.


                                   𝜕𝐹 𝑑𝑞 + 𝜕𝐹 𝑑𝑞 = 0 ⇒ 𝑀𝑅𝑃𝑇 = − 𝑑𝑞𝑦 = 𝜕𝐹/𝜕𝑞𝑥
                                                           𝑥, 𝑦
                                  𝜕𝑞𝑥 𝑥 𝜕𝑞𝑦 𝑦                   𝑑𝑞𝑥 𝜕𝐹/𝜕𝑞𝑦
Profit function: 𝜋 = 𝑝 𝑞 + 𝑝 𝑞 − 𝑐(𝑞 , 𝑞 ). FOCs: 𝑝 = 𝑀𝐶𝑥 , 𝑝 = 𝑀𝐶𝑦 .
                        𝑥 𝑥         𝑦 𝑦           𝑥       𝑦           𝑥            𝑦
Tangency condition of PMP: 𝑀𝑅𝑃𝑇𝑥, 𝑦 = 𝑝 /𝑝 . Substituting:
                                                          𝑥   𝑦


  Let’s work through this step by step: We start with the profit function 𝜋 = 𝑝𝑥 𝑞𝑥 + 𝑝𝑦 𝑞𝑦 − 𝑐(𝑞𝑥 , 𝑞𝑦 ):
  1. FOCs: 𝜕𝜋/𝜕𝑞 = 𝑝 − 𝑀𝐶𝑥 = 0 ⇒ 𝑝 = 𝑀𝐶𝑥 Similarly 𝑝 = 𝑀𝐶𝑦 2. The profit-maximizing tangency
                  𝑥    𝑥                      𝑥                       𝑦
                                                                                                          𝑝        𝑀𝐶
  condition along the PPF requires 𝑀𝑅𝑃𝑇𝑥, 𝑦 = 𝑝𝑥 /𝑝𝑦 3. Substituting the FOCs: 𝑀𝑅𝑃𝑇𝑥, 𝑦 = 𝑝𝑥 = 𝑀𝐶𝑥
                                                                                                           𝑦        𝑦

  Here’s what’s really going on: In competitive equilibrium, the rate at which the economy
  transforms good 𝑥 into good 𝑦 (MRPT) equals the price ratio, which in turn equals the marginal cost
  ratio. This is the product-mix efficiency condition.


                                                                     𝑝    𝑀𝐶𝑥
                                                          𝑀𝑅𝑃𝑇𝑥, 𝑦 = 𝑝𝑥 =
                                                                      𝑦   𝑀𝐶𝑦
GE connection: In competitive equilibrium, 𝑀𝑅𝑃𝑇 = 𝑀𝐶𝑥 /𝑀𝐶𝑦 = 𝑝 /𝑝 = 𝑀𝑅𝑆 — this chain of
                                                                                           𝑥   𝑦
equalities is the product-mix efficiency condition for Pareto optimality.


  Reference — Munoz-Garcia ([Ch.6, §6.4-6.5]): In the two-consumer, two-firm, two-factor
  (2×2×2) general equilibrium model, firm behavior feeds into the equilibrium through three
  channels:
  1. First-order conditions from PMP: Each firm 𝑗 hires capital and labor until the value of
  marginal product equals the factor price: > Let’s work through this step by step: > We start
  with the profit maximization problem for firm 1: max⁡𝜋1 = 𝑝1 𝐹1 (𝐾1 , 𝐿1 ) − 𝑟𝐾1 − 𝑤𝐿1 : > 1. FOC w.r.t. 𝐾1 :
  𝑝1 𝜕𝐹                                               𝜕𝐹1
     𝜕𝐾1 − 𝑟 = 0 ⇒ 𝑝1 𝐹1𝐾 = 𝑟 > 2. FOC w.r.t. 𝐿1 : 𝑝1 𝜕𝐿1 − 𝑤 = 0 ⇒ 𝑝1 𝐹1𝐿 = 𝑤 > > Here’s what’s really
       1


  going on: You hire each factor until the value of its marginal product (𝑝𝑖 ⋅ 𝑀𝑃𝑖 ) equals the factor
  price (𝑟 for capital, 𝑤 for labor).
                                𝑝1 𝐹1𝐾 = 𝑟, 𝑝1 𝐹1𝐿 = 𝑤 (firm 1 producing good 1)
  > Let’s work through this step by step: > By the same logic for firm 2:
  max⁡𝜋2 = 𝑝2 𝐹2 (𝐾2 , 𝐿2 ) − 𝑟𝐾2 − 𝑤𝐿2 : > 1. FOC w.r.t. 𝐾2 : 𝑝2 𝐹2𝐾 = 𝑟 > 2. FOC w.r.t. 𝐿2 : 𝑝2 𝐹2𝐿 = 𝑤
                                   𝑝2 𝐹2𝐾 = 𝑟, 𝑝2 𝐹2𝐿 = 𝑤 (firm 2 producing good 2)
  2. Factor market equilibrium: Combining firms’ FOCs yields the equality of MRTS across firms:
  > Let’s work through this step by step: > We start with the FOCs for both firms: > 1. For firm 1:
  𝑝1 𝐹1𝐾 = 𝑟 and 𝑝1 𝐹1𝐿 = 𝑤 → 𝑤𝑟 = 𝐹𝐹1𝐿
                                     1𝐾
                                                                                          𝐹
                                        > 2. For firm 2: 𝑝2 𝐹2𝐾 = 𝑟 and 𝑝2 𝐹2𝐿 = 𝑤 → 𝑤𝑟 = 𝐹2𝐿 > 3. The (𝑤/𝑟)
                                                                                           2𝐾
                            𝐹     𝐹                            𝑖                  1                2
 ratio is common, hence: 𝐹1𝐿 = 𝐹2𝐿 > 4. But 𝐹𝑖𝐿 /𝐹𝑖𝐾 ≡ 𝑀𝑅𝑇𝑆𝐿, 𝐾 , therefore: 𝑀𝑅𝑇𝑆𝐿, 𝐾 = 𝑤𝑟 = 𝑀𝑅𝑇𝑆𝐿, 𝐾 > >
                             1𝐾    2𝐾
 Here’s what’s really going on: In equilibrium, both firms face the same factor prices, so their
 MRTS are equalized. This is the production efficiency condition — factors cannot be reallocated to
 increase total output.
                                             𝑀𝑅𝑇𝑆1𝐿, 𝐾 = 𝑤       2
                                                         𝑟 = 𝑀𝑅𝑇𝑆𝐿, 𝐾
 This is the efficient factor allocation condition — factors cannot be reallocated between firms to
 increase total output.
 3. Product-mix efficiency: Dividing the FOCs for each firm yields: > Let’s work through this
 step by step: > We start with each firm’s FOCs: > 1. For firm 1: 𝑝1 𝐹1𝐾 = 𝑟 and 𝑝1 𝐹1𝐿 = 𝑤 > 2. For
                                                                                 𝑝    𝐹                𝑝1   𝐹2𝐾
 firm 2: 𝑝2 𝐹2𝐾 = 𝑟 and 𝑝2 𝐹2𝐿 = 𝑤 > 3. Dividing firm 2’s FOCs by firm 1’s: > 𝑝2 ⋅ 𝐹2𝐾 = 1     ⇒       𝑝2 = 𝐹1𝐾 >
                                                                                  1   1𝐾
 𝑝2 𝐹2𝐿             𝑝1   𝐹2𝐿                 𝑝1   𝐹2𝐾   𝐹2𝐿
 𝑝1 ⋅ 𝐹1𝐿 = 1   ⇒   𝑝2 = 𝐹1𝐿 > 4. Therefore: 𝑝2 = 𝐹1𝐾 = 𝐹1𝐿 ≡ 𝑀𝑅𝑇1, 2
                                       𝑝1 𝐹2𝐾 𝐹2𝐿
                                       𝑝2 = 𝐹1𝐾 = 𝐹1𝐿 ≡ 𝑀𝑅𝑇1, 2
 Together with consumer optimization (𝑀𝑅𝑆 = 𝑝1 /𝑝2 ), we obtain: > Let’s work through this step by
                                                                                    𝑖
 step: > Combining the three efficiency conditions: > 1. Consumption efficiency: 𝑀𝑅𝑆1, 2 = 𝑝1 /𝑝2 from
 consumer utility maximization (both consumers face same prices) > 2. Product-mix efficiency:
                                                                                           𝑝
 𝑀𝑅𝑇1, 2 = 𝑝1 /𝑝2 from producer profit maximization > 3. Hence: 𝑀𝑅𝑆𝑖1, 2 = 𝑀𝑅𝑇1, 2 = 𝑝12 > > Here’s
 what’s really going on: This chain of equalities is the First Welfare Theorem with production — a
 competitive equilibrium achieves Pareto optimality. The rate at which consumers are willing to
 trade goods (MRS) equals the rate at which the economy can transform one good into another
 (MRT).
                                                                   𝑝
                                              𝑀𝑅𝑆𝑖1, 2 = 𝑀𝑅𝑇1, 2 = 𝑝1
                                                                    2
 This chain — 𝑀𝑅𝑆 = 𝑀𝑅𝑇 = 𝑝1 /𝑝2 — is the fundamental efficiency condition for Pareto optimality in a
 production economy (product-mix efficiency).
 4. Stolper-Samuelson theorem (Ch.6, §6.5.1): Within this framework, an increase in the price of
 good 1 raises the return to the factor used intensively in producing good 1 and lowers the return to
 the other factor — a key result linking output prices to factor income distribution.




3.4 Solved Problems — Production Theory


  Q3.1 — Production Set Definitions



  Q3.2 — Properties of Production Sets (11 Properties)



  Q3.3 — Elasticity of Substitution for Key Production Functions



  Q3.4 — HW3: Returns to Scale for 5 Production Functions



  Q3.5 — HW3: Elasticity of Substitution for 5 Functions



  Q3.6 — HW3: Short-Run Production & Cost Functions (K=64)



  Q3.7 — HW3: Expansion Paths
   Q3.8 — HW3: Cost-Minimizing Input Mix (w=2, v=8, q=100)



   Q3.9 — HW3: Long-Run Cost Functions



   Q3.10 — Sausage Maker (Leontief Production) — Exam: Batch 48 Q4



                                                                                       1/3
   Q3.11 — Comprehensive Cobb-Douglas Production: 𝑄 = (𝐾𝐿)                                   (Exam: Batch 48
 Q5)



   Q3.12 — Starbucks Jumbo vs Trenta (Economies of Scale) — Exam: Batch 48 Q5



   Q3.13 — Profit Function Properties & Hotelling’s Lemma



   Q3.14 — MRPT = MC Ratio (Duality Proof)




3.5 Competitive Equilibrium

Why this matters for your exam: This is where production theory meets the market.
Individual firm supply curves aggregate into industry supply, taxes create deadweight loss, and
Walras’ Law ties everything together in general equilibrium. If you can solve a competitive
equilibrium problem, you can handle the most common type of exam question.

3.5.1 Firm Supply & Industry Equilibrium

SR supply: 𝑃 = 𝑀𝐶 (above shutdown price min⁡𝐴𝑉𝐶). Industry supply = sum of firm supplies.
LR equilibrium: 𝑃 = min⁡𝐴𝐶 with free entry/exit → zero economic profit.


  Reference — Munoz-Garcia ([Ch.4, §4.11, App. A]):
  Case 1: CRS technology: When each firm has constant returns to scale (CRS), the production
  function satisfies 𝑓(𝑡𝐾, 𝑡𝐿) = 𝑡𝑓(𝐾, 𝐿). This implies: - Linear total cost: 𝑇𝐶(𝑞) = 𝑐 ⋅ 𝑞 (constant marginal
  cost) - Constant AC = MC: 𝐴𝐶(𝑞) = 𝑀𝐶(𝑞) = 𝑐 for all 𝑞 - Supply indeterminacy at the firm level: If
  𝑝 < 𝑐, the firm supplies 𝑞 = 0; if 𝑝 > 𝑐, the firm would want to supply infinite output; if 𝑝 = 𝑐, any
  output level yields zero profit
  Case 2: CRS with fixed costs (nonsunk): With fixed cost 𝐾 > 0 (e.g., a license fee recoverable
  upon exit): > Let’s work through this step by step: > We start with a CRS technology with an
  additional fixed cost 𝐾: > 1. Variable cost is linear in output: 𝑉𝐶(𝑞) = 𝑐 ⋅ 𝑞 (constant MC from CRS) >
  2. Total cost: 𝑇𝐶(𝑞) = 𝐾 + 𝑐 ⋅ 𝑞 > 3. Average cost: 𝐴𝐶(𝑞) = 𝑇𝐶/𝑞 = 𝐾/𝑞 + 𝑐 (declining in 𝑞, approaching 𝑐
  asymptotically) > 4. Marginal cost: 𝑀𝐶(𝑞) = 𝑑𝑇𝐶/𝑑𝑞 = 𝑐 > > Here’s what’s really going on: Fixed
  costs make AC decline in output but do not affect MC. You must produce enough to spread the fixed
  cost over many units – you need 𝑝 ≥ 𝐴𝐶(𝑞) to break even. Since 𝐴𝐶(𝑞) > 𝑐 for all finite 𝑞, price must
  exceed marginal cost for you to survive.
                                    𝑇𝐶(𝑞) = 𝐾 + 𝑐 ⋅ 𝑞,   𝐴𝐶(𝑞) = 𝐾𝑞 + 𝑐,   𝑀𝐶(𝑞) = 𝑐
  Average cost declines in 𝑞 (approaching 𝑐 asymptotically), while marginal cost is constant. The firm
  supplies only when 𝑝 ≥ 𝐴𝐶(𝑞); since 𝐴𝐶(𝑞) > 𝑐 for all finite 𝑞, the firm must charge above marginal cost
  to recover fixed costs.
  Aggregate supply with free entry (long run): Under free entry, firms enter until profits are
  driven to zero. With CRS and a U-shaped average cost curve (due to a fixed factor or fixed cost in
  the short run), the LR industry supply is: > Let’s work through this step by step: > We start
  with the free-entry long-run equilibrium condition: > 1. With free entry, firms enter until economic
  profits are driven to zero > 2. Zero profit condition: 𝑃 = 𝐴𝐶 > 3. Profit-maximizing output: 𝑃 = 𝑀𝐶 >
                                                                                            *
  4. Therefore: 𝑃 = 𝑀𝐶 = 𝐴𝐶, which occurs at the minimum of AC > 5. Hence: 𝑃𝐿𝑅 = min⁡𝐴𝐶 > > Here’s
  what’s really going on: In the long run with free entry and identical firms, price equals minimum
  average cost. The industry supply curve is horizontal at this price – firms can supply any quantity at
  𝑃 = min⁡𝐴𝐶 by adjusting the number of firms.
                                                       𝑃*𝐿𝑅 = min⁡𝐴𝐶
  - Horizontal LR supply: The industry can supply any quantity at 𝑃 = min⁡𝐴𝐶 because firms are
  identical and entry/exit is costless - Zero profits: Each firm operates at minimum efficient scale
                                                   *   𝐷 *      *       *
  where 𝑃 = 𝑀𝐶 = 𝐴𝐶 - Number of firms endogenous: 𝑁 = 𝑄 (𝑃𝐿𝑅 )/𝑞 where 𝑞 is output at min⁡𝐴𝐶
  Representative producer property (Ch.4, §4.11.2): The aggregate supply correspondence
  𝑦* (𝑝) = ∑𝐽𝑗 = 1 𝑦𝑗 (𝑝) coincides with the supply that a single firm would choose when maximizing
  aggregate profits from the aggregate production set 𝑌 = 𝑌1 + 𝑌2 + ⋯ + 𝑌𝐽 . Moreover,
  𝜋* (𝑝) = ∑𝐽𝑗 = 1 𝜋𝑗 (𝑝). This decentralization result implies that letting each firm maximize its own
  profits and summing the solutions yields the optimal aggregate outcome.


3.5.2 Tax Incidence & Deadweight Loss

Incidence formula:


  Let’s work through this step by step: We start with the competitive equilibrium with a per-unit
  tax 𝑡: 1. After tax, the price wedge is 𝑃𝑏 − 𝑃𝑠 = 𝑡 where 𝑃𝑏 is buyer price and 𝑃𝑠 is seller price 2.
                                                                                                              *   *
  Market clearing requires 𝑄𝐷 (𝑃𝑏 ) = 𝑄𝑆 (𝑃𝑠 ) 3. Linearizing around the no-tax equilibrium (𝑃 , 𝑄 ):
                                                                                                          *
  Δ𝑄 = 𝜀𝐷 (𝑄* /𝑃* )(𝑃𝑏 − 𝑃* ) and Δ𝑄 = 𝜀𝑆 (𝑄* /𝑃* )(𝑃* − 𝑃𝑠 ) 4. Using 𝑃𝑏 − 𝑃𝑠 = 𝑡 and solving: 𝑃𝑏 −𝑡 𝑃 = 𝜀𝑆 𝜀−𝑆 𝜀𝐷 ,
  𝑃* − 𝑃𝑠
     𝑡    = 𝜀𝑆−𝜀−𝐷𝜀𝐷
  Here’s what’s really going on: Tax incidence depends on relative elasticities. The less elastic side
  bears more of the tax. If demand is perfectly inelastic (𝜀𝐷 = 0), consumers bear the entire tax; if
  supply is perfectly inelastic (𝜀𝑆 = 0), producers bear it all.


                  𝑃𝑏 − 𝑃*      𝜀                                  𝑃* − 𝑃𝑠     −𝜀
                          = 𝜀 −𝑆 𝜀     (consumer share),                  = 𝜀 −𝐷𝜀         (producer share)
                     𝑡       𝑆    𝐷                                  𝑡       𝑆   𝐷


Elasticity Condition                                                         Who Bears More Tax?

|𝜀𝑆 | > |𝜀𝐷 |                                                                         Consumers

|𝜀𝐷 | > |𝜀𝑆 |                                                                          Producers

𝜀𝐷 = 0 (perfectly inelastic demand)                                             Consumers bear all

𝜀𝑆 = 0 (perfectly inelastic supply)                                              Producers bear all


DWL formula:


  Let’s work through this step by step: We start with the Harberger triangle formula for
                                                                                                                        *
  deadweight loss: 1. DWL is the area of the triangle between the demand and supply curves from 𝑄
                                                                        𝜀 𝜀               *
  to 𝑄𝑡 : 𝐷𝑊𝐿 = 12 × 𝑡 × Δ𝑄 2. Using the linearized approximation Δ𝑄 = 𝜀𝑆 𝑆− 𝜀𝐷 𝐷 ⋅ 𝑡* ⋅ 𝑄 3. Substituting:
                                                                                    𝑃
  𝐷𝑊𝐿 = 12 ⋅ 𝜀𝜀𝑆 𝑆−𝜀𝜀𝐷 𝐷 ⋅ 𝑡* ⋅ 𝑄*
                            2

                           𝑃
     Here’s what’s really going on: DWL is quadratic in 𝑡 – doubling the tax rate quadruples the
     deadweight loss. This is the Laffer curve logic: beyond some point, higher tax rates reduce tax
     revenue more than they increase it because the tax base shrinks rapidly.


                                                                𝜀 𝜀       2
                                        𝐷𝑊𝐿 = 1 × 𝑡 × Δ𝑄 = 1 ⋅ 𝜀 𝑆− 𝐷𝜀 ⋅ 𝑡* ⋅ 𝑄*
                                              2            2 𝑆        𝐷 𝑃



     Here’s the key — and it’s beautiful: DWL is quadratic in 𝑡 — doubling the tax quadruples the
     DWL (Laffer curve logic).


3.5.3 Walras’ Law


     Let’s work through this step by step: We start with the definition of aggregate excess demand
     𝑍(𝑝) = ∑𝑖 (𝑥𝑖 (𝑝) − 𝑒𝑖 ) − ∑𝑗 𝑦𝑗 (𝑝): 1. Each consumer satisfies budget constraint: 𝑝 ⋅ 𝑥𝑖 (𝑝) = 𝑝 ⋅ 𝑒𝑖 (no
     savings) 2. Each firm’s profit is distributed to consumers; Firm’s revenue 𝑝 ⋅ 𝑦 = 𝜋𝑗 distributed as
                                                                                           𝑗
     dividends 3. Summing budget constraints across all agents: 𝑝 ⋅ ∑ (𝑥𝑖 − 𝑒𝑖 ) − 𝑝 ⋅ ∑ 𝑦𝑗 = 0 4. Hence:
                                                                                𝑖              𝑗
     𝑝 ⋅ 𝑍(𝑝) = 0 for all price vectors 𝑝
     Here’s what’s really going on: Walras’ Law says the value of aggregate excess demand is
     identically zero. This means if 𝐿 − 1 markets clear, the 𝐿-th market must also clear – a crucial result
     for general equilibrium analysis. It also means only relative prices matter (the numeraire property).


                                            𝑝 ⋅ 𝑍(𝑝) = 0 for all price vectors 𝑝
Three implications: 1. Redundancy: In an 𝐿-good system, if 𝐿 − 1 markets clear, the 𝐿-th
clears automatically 2. Numeraire: Only relative prices matter; normalize 𝑝1 = 1 3. Existence
foundation: Used in Arrow-Debreu fixed-point proof



      Q3.15 — Competitive Equilibrium: 1,000 Identical Firms (Exam: Batch 48 Q6)



      Q3.16 — Walras’ Law: Three-Good Excess Demand (Exam: Batch 48 Q6)




3.6 Key Formulas — Production & Supply

Returns to Scale Summary:


 Function                                                           𝑓(𝑡𝐾, 𝑡𝐿)                          RTS
  1/2 1/2
 𝐾     𝐿                                                               𝑡𝑄                              CRS

 2𝐾 + 𝐿                                                                𝑡𝑄                              CRS

 4𝐾𝐿/(𝐾 + 𝐿)                                                           𝑡𝑄                              CRS

 𝐾𝐿                                                                   𝑡2 𝑄                             IRS

 min⁡(𝐾, 12 𝐿)                                                         𝑡𝑄                              CRS
        1/3
 (𝐾𝐿)                                                                 𝑡2/3 𝑄                           DRS


EoS Summary:
 Function                                                                            𝜎

 Linear 𝑎𝐾 + 𝑏𝐿                                                                      ∞
                   𝛼 𝛽
 Cobb-Douglas 𝐴𝐾 𝐿                                                                   1
           𝜌         𝜌 𝛾/𝜌
 CES [𝛼𝐾 + (1 − 𝛼)𝐿 ]                                                             1/(1 − 𝜌)

 Leontief min⁡(𝑎𝐾, 𝑏𝐿)                                                               0

 4𝐾𝐿/(𝐾 + 𝐿)                                                                        1/2

Cost Function Properties vs Profit Function Properties:


 Cost Function 𝑐(𝑤, 𝑞)                               Profit Function 𝜋(𝑝)

 HD(1) in 𝑤                                          HD(1) in 𝑝

 Concave in 𝑤                                        Convex in 𝑝

 Shephard’s: 𝜕𝑐/𝜕𝑤𝑘 = 𝑧𝑘                             Hotelling’s: 𝜕𝜋/𝜕𝑝𝑘 = 𝑦𝑘

 𝑧𝑘 slopes downward: 𝜕𝑧𝑘 /𝜕𝑤𝑘 ≤ 0                    𝑦𝑘 slopes upward: 𝜕𝑦𝑘 /𝜕𝑝𝑘 ≥ 0



3.7 Production Theory and General Equilibrium

Why this matters for your exam: This final section connects the dots — showing how the
firm-level production theory you’ve been studying feeds into the big picture of general
equilibrium. The chain 𝑀𝑅𝑆 = 𝑀𝑅𝑇 = 𝑝 /𝑝 is the First Welfare Theorem in action, and it’s the
                                         1   2
kind of high-level synthesis that examiners love.
The firm production theory developed in this topic feeds directly into the general equilibrium
(GE) framework in two key ways:

3.7.1 From Firm Supply to Aggregate Supply

Individual firm supply curves 𝑞𝑗 (𝑝) (derived from 𝑃 = 𝑀𝐶 above shutdown) are summed
horizontally to obtain industry supply:


  Let’s work through this step by step: We start with individual firm supply curves 𝑞𝑗 (𝑝): 1. Each
  firm chooses 𝑞𝑗 to satisfy 𝑃 = 𝑀𝐶𝑗 above its shutdown point 2. Industry supply is the horizontal sum
  of individual supplies at each price level: 𝑄 (𝑝) = ∑𝑁     𝑞𝑗 (𝑝) 3. At price 𝑝, each firm supplies 𝑞𝑗 (𝑝);
                                                 𝑆     𝑗=1
  total industry output is the sum
  Here’s what’s really going on: Horizontal summation means we add quantities at each price (not
  prices at each quantity). This reflects the fact that all firms are price-takers facing the same market
  price.

                                                       𝑁
                                             𝑄𝑆 (𝑝) = ∑ 𝑞𝑗 (𝑝)
                                                      𝑗=1

Under free entry with identical firms and CRS, the LR industry supply is horizontal at 𝑃 = min⁡𝐴𝐶
, with the number of firms determined by market demand:


  Let’s work through this step by step: We start with the free-entry LR equilibrium: 1. In LR,
  𝑃*𝐿𝑅 = min⁡𝐴𝐶 (zero profit) and each firm produces 𝑞* at min⁡𝐴𝐶 2. Market demand at this price is 𝑄𝐷 (𝑝* )
                                                                       𝑄𝐷 (𝑝* )
  3. With identical firms, the equilibrium number of firms is: 𝑁* =
                                                                       𝑞* (𝑝* )
  Here’s what’s really going on: The number of firms in LR equilibrium is endogenous –
  determined by the market size relative to each firm’s minimum efficient scale. This is a central
  result in industrial organization: entry erodes profits until each firm operates at minimum AC.


                                                            *     𝑄𝐷 (𝑝* )
                                                            𝑁 =
                                                                  𝑞* (𝑝* )

3.7.2 From Production to the 2×2×2 GE Model

In the two-consumer, two-good, two-factor GE model (Munoz-Garcia Ch.6), production
decisions interact with consumer preferences through three efficiency conditions:


 Efficiency Condition                                       Formula                   Economic Meaning

                                                                                      Cannot reallocate goods to
 Consumption efficiency                                     𝑀𝑅𝑆𝐴1, 2 = 𝑀𝑅𝑆𝐵1, 2
                                                                                      make both consumers better off

                                                                                      Cannot reallocate factors to
 Production efficiency                                      𝑀𝑅𝑇𝑆1𝐿, 𝐾 = 𝑀𝑅𝑇𝑆2𝐿, 𝐾
                                                                                      increase total output

                                                                                      The mix of goods produced
 Product-mix efficiency                                     𝑀𝑅𝑆 = 𝑀𝑅𝑇 = 𝑝1 /𝑝2
                                                                                      matches consumer preferences


The chain 𝑀𝑅𝑆 = 𝑀𝑅𝑇 = 𝑝 /𝑝 in competitive equilibrium ensures Pareto optimality — the First
                                1       2
Welfare Theorem with production.


  Reference — Koutsoyiannis ([Ch.4, pp.87-90]): Koutsoyiannis provides a step-by-step
  Lagrangian framework for the firm’s constrained optimization:
  Problem: Maximize output 𝑋 = 𝑓(𝐿, 𝐾) subject to cost constraint 𝐶 = 𝑤𝐿 + 𝑟𝐾.
  Lagrangian: Φ = 𝑋 + 𝜆(𝐶 − 𝑤𝐿 − 𝑟𝐾)
  FOCs: > Let’s work through this step by step: > We start with the Lagrangian for output
  maximization: Φ = 𝑋 + 𝜆(𝐶 − 𝑤𝐿 − 𝑟𝐾): > 1. 𝜕Φ/𝜕𝐿 = 𝜕𝑋/𝜕𝐿 − 𝜆𝑤 = 0 → 𝑀𝑃𝐿 = 𝜆𝑤 > 2.
  𝜕Φ/𝜕𝐾 = 𝜕𝑋/𝜕𝐾 − 𝜆𝑟 = 0 → 𝑀𝑃𝐾 = 𝜆𝑟 > 3. 𝜕Φ/𝜕𝜆 = 𝐶 − 𝑤𝐿 − 𝑟𝐾 = 0 → cost constraint binds
                         𝜕Φ = 𝜕𝑋 − 𝜆𝑤 = 0, 𝜕Φ = 𝜕𝑋 − 𝜆𝑟 = 0, 𝜕Φ = 𝐶 − 𝑤𝐿 − 𝑟𝐾 = 0
                         𝜕𝐿 𝜕𝐿             𝜕𝐾 𝜕𝐾               𝜕𝜆
  Equilibrium condition: 𝑀𝑃  𝑤
                              𝐿
                                = 𝑀𝑃𝐾
                                   𝑟  = 1
                                        𝜆
  The Lagrange multiplier 𝜆 measures the marginal product of money (or, equivalently, 1/𝜆 is the
  marginal cost of output in terms of money). The firm equates the marginal product per dollar spent
  on each factor — if 𝑀𝑃𝐿 /𝑤 > 𝑀𝑃𝐾 /𝑟, the firm should hire more labor and less capital until equality is
  restored.
  Numerical application (Koutsoyiannis style): Suppose 𝑋 = 𝐿0.5 𝐾0.5 , 𝑤 = 4, 𝑟 = 9, 𝐶 = 120. Find the
  optimal 𝐿 and 𝐾.
                −0.5 0.5         0.5 −0.5
  Tangency: 0.5𝐿 4 𝐾       = 0.5𝐿 9 𝐾         𝐾 = 𝐿 ⇒ 9𝐾2 = 4𝐿2 ⇒ 𝐾 = 2 𝐿
                                            ⇒ 4𝐿  9𝐾                  3
                                                        *          *         *      0.5         0.5
  Budget: 120 = 4𝐿 + 9( 23 𝐿) = 4𝐿 + 6𝐿 = 10𝐿 ⇒ 𝐿 = 12, 𝐾 = 8, 𝑋 = (12)                   (8)         ≈ 9.8.




Topic 4: Welfare Economics

4.1 Compensating Variation, Equivalent Variation & Consumer Surplus

Why this matters for your exam: CV, EV, and CS are among the most tested welfare
concepts in micro prelims. You will need to compute all three, rank them for price changes on
normal goods, and explain when CS is a good approximation. Expect a numerical problem
(often Cobb-Douglas) plus a theory question on the ordering.

4.1.1 Definitions

Three measures quantify the welfare impact of a price change on a consumer.
Let 𝑝0 and 𝑝1 be initial and final price vectors, 𝑤 be income (constant), 𝑢0 = 𝑣(𝑝0 , 𝑤) and
𝑢1 = 𝑣(𝑝1 , 𝑤) be initial and final utility levels, and 𝑒(𝑝, 𝑢) be the expenditure function.

 Measure                   Definition                    Formula (price decrease)

                           Money taken/given
                           after the price
 CV                        change to restore             𝐶𝑉 = 𝑤 − 𝑒(𝑝1 , 𝑢0 )
                           the original utility
                           𝑢0

                           Money given/taken
                           before the price
 EV                                                      𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑤
                           change to reach the
                                          1
                           new utility 𝑢

                           Area under the
                           Marshallian
                                                                 𝑝1
 CS                        demand curve                  𝐶𝑆 = ∫𝑝10 𝑥1 (𝑝1 , 𝑝‾ −1 , 𝑤) 𝑑𝑝1
                                                                  1
                           between old and
                           new prices


Key reference points:


 Measure                  Utility anchor                     Price anchor                        Demand curve

 CV                       𝑢0 (original)                      𝑝1 (new)                            Hicksian at 𝑢0

 EV                       𝑢1 (new)                           𝑝0 (old)                            Hicksian at 𝑢1

 CS                       Mixed                              𝑝0 → 𝑝1                             Marshallian


Relationship via expenditure functions:


  Let’s work through this step by step. We start with the definition of CV as the compensating
                                                                                                         0
  payment after a price change: 1. CV = amount paid to restore original utility 𝑢 after prices move
      1                                                                                      1   0
  to 𝑝 2. Expenditure needed at new prices to reach original utility: 𝑒(𝑝 , 𝑢 ) 3. Expenditure needed
                                                 1   1
  at new prices to reach new utility: 𝑒(𝑝 , 𝑢 ) = 𝑤 (by definition of the expenditure function) 4. So CV
          1   1       1   0          1     0
  = 𝑒(𝑝 , 𝑢 ) − 𝑒(𝑝 , 𝑢 ) = 𝑤 − 𝑒(𝑝 , 𝑢 ) 5. → Final form:
                                          𝐶𝑉 = 𝑒(𝑝1 , 𝑢1 ) − 𝑒(𝑝1 , 𝑢0 ) = 𝑤 − 𝑒(𝑝1 , 𝑢0 )
  Here’s what’s really going on: CV is the income adjustment that makes you just as well off after
  the price change as you were before — it measures the compensating payment at new prices.


                                      𝐶𝑉 = 𝑒(𝑝1 , 𝑢1 ) − 𝑒(𝑝1 , 𝑢0 ) = 𝑤 − 𝑒(𝑝1 , 𝑢0 )

  Let’s work through this step by step. We start with the definition of EV as the equivalent
  payment before a price change: 1. EV = amount given/taken before the price change to reach the
                  1                                                                              0   1
  new utility 𝑢 2. Expenditure needed at old prices to reach new utility: 𝑒(𝑝 , 𝑢 ) 3. Expenditure
                                                                 0       0
  needed at old prices to reach original utility: 𝑒(𝑝 , 𝑢 ) = 𝑤 4. So EV =
  𝑒(𝑝0 , 𝑢1 ) − 𝑒(𝑝0 , 𝑢0 ) = 𝑒(𝑝0 , 𝑢1 ) − 𝑤 5. → Final form:
                                             𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑒(𝑝0 , 𝑢0 ) = 𝑒(𝑝0 , 𝑢1 ) − 𝑤
  Here’s what’s really going on: EV is the income change equivalent to the price change — how
  much income would need to change at old prices to produce the same utility change as the price
  change itself.


                                         𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑒(𝑝0 , 𝑢0 ) = 𝑒(𝑝0 , 𝑢1 ) − 𝑤
CV anchors on original utility at new prices; EV anchors on new utility at old prices. CS is
empirically observable (Marshallian demand is estimable) but theoretically approximate unless
income effects are zero.


4.1.2 EV > CS > CV Ordering

For a price decrease (𝑝 ↓ ) and a normal good:


  Let’s work through this step by step. We start with the Hicksian/Marshallian demand
  relationships for a normal good: 1. For a normal good, the income effect is positive: 𝜕𝑥1 /𝜕𝑤 > 0 2. A
                                                     1     0             1   0
  price decrease raises real income, so 𝑢 > 𝑢 3. At 𝑢 > 𝑢 , Hicksian demand lies to the right:
  ℎ(𝑝, 𝑢1 ) > ℎ(𝑝, 𝑢0 ) 4. By the Slutsky equation, ℎ(𝑝, 𝑢0 ) is steeper than Marshallian 𝑥(𝑝, 𝑤), which is
                         1                                                                                  0
  steeper than ℎ(𝑝, 𝑢 ) 5. Since CV, CS, EV are left-of-demand-curve areas, the steepest curve (ℎ at 𝑢 )
  gives the smallest area for a price decrease 6. → Final form:
                                                           𝐸𝑉 > 𝐶𝑆 > 𝐶𝑉
  Here’s what’s really going on: For a price decrease on a normal good, EV (anchored at higher
  utility) gives the largest welfare gain, CV (anchored at original utility) gives the smallest, and CS
  lies in between.


                                                          𝐸𝑉 > 𝐶𝑆 > 𝐶𝑉
For a price increase (𝑝 ↑ ) and a normal good:


  Let’s work through this step by step. We start with the same relationships but for a price
  increase: 1. For a price increase on a normal good, 𝑢1 < 𝑢0 (utility falls) 2. CV uses ℎ(𝑝, 𝑢0 ) — the
  steeper curve — so the welfare loss area is larger 3. EV uses ℎ(𝑝, 𝑢1 ) — the flatter curve — so the
  welfare loss area is smaller 4. CS (Marshallian) lies in between 5. Since demand curves slope
  downward, a price increase measures a welfare loss, and the ordering of areas reverses 6. → Final
  form:
                                                           𝐶𝑉 > 𝐶𝑆 > 𝐸𝑉
  Here’s what’s really going on: For a price increase, CV (compensation needed after the fact)
  overstates the welfare loss relative to CS, while EV (equivalent variation before the fact)
  understates it.


                                                          𝐶𝑉 > 𝐶𝑆 > 𝐸𝑉
Why the ordering? For a price decrease on a normal good: - EV uses Hicksian demand at 𝑢1
(higher utility) — income effect shifts Hicksian demand right → largest area - CS uses
Marshallian demand — lies between the two Hicksian curves → intermediate area - CV uses
Hicksian demand at 𝑢0 (original utility) — smallest area
Formal relationship between Hicksian and Walrasian demands for welfare
measurement:
For a normal good, the Slutsky equation 𝜕ℎ
                                        𝜕𝑝
                                          1
                                            = 𝜕𝑥
                                              𝜕𝑝
                                                1
                                                  + 𝜕𝑥1
                                                    𝜕𝑤 1
                                                        𝑥 implies | 𝜕ℎ
                                                                    𝜕𝑝 |
                                                                      1
                                                                         < | 𝜕𝑥
                                                                             𝜕𝑝 |
                                                                               1
                                                                                  (since 𝜕𝑥
                                                                                         𝜕𝑤
                                                                                           1
                                                                                             > 0 for
                                                            1        1                          1   1
normal goods, the compensated demand is steeper than the Marshallian demand). Moreover,
since 𝑢1 > 𝑢0 , the Hicksian demand at 𝑢1 lies to the right of the Hicksian demand at 𝑢0 . Putting
these together:
  Let’s work through this step by step. We start with the Slutsky equation and the properties of
  normal goods: 1. Slutsky: 𝜕ℎ   𝜕𝑥1  𝜕𝑥1                         𝜕𝑥1
                            𝜕𝑝 = 𝜕𝑝 + 𝜕𝑤 𝑥1 2. For a normal good, 𝜕𝑤 > 0 and 𝑥1 > 0, so
                              1
                                      1         1
  𝜕ℎ1   𝜕𝑥1
  𝜕𝑝1 = 𝜕𝑝1 + positive term
                            3. Since 𝜕𝑥
                                     𝜕𝑝1 < 0
                                       1     (downward-sloping demand), the compensated (Hicksian)
  slope is more negative (steeper): | 𝜕𝑝 | < | 𝜕𝑥
                                         𝜕ℎ1                 1   0
                                               𝜕𝑝1 | 4. For 𝑢 > 𝑢 , Hicksian demand at the higher utility
                                                 1
                                           1
                                1          0                 0
  level is shifted right: ℎ(𝑝, 𝑢 ) > ℎ(𝑝, 𝑢 ) 5. Since ℎ(𝑝, 𝑢 ) is steeper than 𝑥(𝑝, 𝑤) which is steeper than
  ℎ(𝑝, 𝑢1 ), for any given price, the slope ordering holds 6. → Final form:
                 𝜕ℎ1        𝜕𝑥     𝜕ℎ
                     |    < 1 < 1|            ⇒ ℎ(𝑝, 𝑢0 ) steeper than 𝑥(𝑝, 𝑤) steeper than ℎ(𝑝, 𝑢1 )
                 𝜕𝑝1    0
                            𝜕𝑝 1
                                   𝜕𝑝 1   1
                       𝑢=𝑢                      𝑢=𝑢
  Here’s what’s really going on: The compensated demand curve at the original utility is steepest
  (substitution effect only, no income effect reinforcing it), the Marshallian is intermediate (includes
  both effects), and the compensated demand at the new utility is flattest (income effect partially
  offsets the substitution effect at the higher utility level).


             𝜕ℎ1                𝜕𝑥1 𝜕ℎ1
                 |          <      <    |                   ⇒   ℎ(𝑝, 𝑢0 ) steeper than 𝑥(𝑝, 𝑤) steeper than ℎ(𝑝, 𝑢1 )
             𝜕𝑝1                𝜕𝑝1 𝜕𝑝1
                   𝑢 = 𝑢0                     𝑢 = 𝑢1
This ordering of slopes generates the 𝐸𝑉 > 𝐶𝑆 > 𝐶𝑉 ranking for a price decrease.
Why the ordering reverses for a price increase:
When the price rises from 𝑝0 to 𝑝1 (where 𝑝1 > 𝑝0 ): - CV is the minimum compensation needed
                                      1             1            1     1
after the price increase to restore you to your original utility 𝑢0 — it uses ℎ(𝑝, 𝑢0 ) which is
steeper → larger welfare loss area - CS uses Marshallian demand → intermediate area - EV is
the willingness to accept the price increase before it happens — it uses ℎ(𝑝, 𝑢1 ) which is flatter
→ smaller welfare loss area
Hence 𝐶𝑉 > 𝐶𝑆 > 𝐸𝑉 for a price increase on a normal good.
The gap |𝐸𝑉 − 𝐶𝑉| measures the income effect. When the income effect is zero (quasilinear
utility), all three measures coincide: 𝐶𝑉 = 𝐸𝑉 = 𝐶𝑆.
Diagram logic (price decrease):
    1    0                                              1                   0
At 𝑝1 < 𝑝1 , for a normal good: ℎ(𝑝, 𝑢 ) > 𝑥(𝑝, 𝑤) > ℎ(𝑝, 𝑢 ). The three demand curves intersect at
𝑝01 . EV is the area left of ℎ(𝑝, 𝑢1 ) between 𝑝0 and 𝑝1 ; CS is the area left of 𝑥(𝑝, 𝑤); CV is the area
left of ℎ(𝑝, 𝑢0 ).
For inferior goods: The ordering reverses — Hicksian demand at 𝑢1 shifts left instead of
right.
Willig (1976) bounds — detailed derivation:
Willig (1976) provided rigorous bounds on the percentage error from using CS instead of CV or
EV. For a price change from 𝑝0 to 𝑝1 with income elasticity 𝜂 = 𝜕𝑥1
                                                                    ⋅ 𝑤:
                                                                𝜕𝑤 𝑥1
                                          1             1


  Let’s work through this step by step. We start with the Slutsky equation and the relationship
  between Hicksian and Marshallian demands: 1. The difference between Marshallian CS and
  Hicksian CV/EV arises from the income effect term in the Slutsky equation: 𝜕ℎ   𝜕𝑥1  𝜕𝑥1
                                                                             𝜕𝑝 − 𝜕𝑝 = 𝜕𝑤 𝑥1
                                                                               1             2.
                                                                                                     1    1
  Integrating this difference over the price change gives the gap between CS and CV:
              𝑝1
  𝐶𝑆 − 𝐶𝑉 = ∫ 10 𝜕𝑥                                           𝜕𝑥1               𝜕𝑥1      𝑥1
                 𝜕𝑤 𝑥1 𝑑𝑝1 3. Using the income elasticity 𝜂 = 𝜕𝑤 ⋅ 𝑥1 , rewrite 𝜕𝑤 = 𝜂 ⋅ 𝑤 4. Substituting:
                   1                                               𝑤
             𝑝1
             𝑝11 𝜂 2
  𝐶𝑆 − 𝐶𝑉 ≈ ∫𝑝0 𝑤 𝑥1 𝑑𝑝1 5. Bounding the integral using the mean value theorem and assuming constant
               1
  𝜂 yields the leading-order error bound proportional to 𝜂 ⋅ (Δ𝑝/𝑝)/2 6. → Final form:
                                |𝐶𝑆 − 𝐶𝑉| 𝜂 ⋅ |Δ𝑝/𝑝|   |𝐶𝑆 − 𝐸𝑉| 𝜂 ⋅ |Δ𝑝/𝑝|
                                         ≤           ,           ≤
                                   |𝐶𝑉|        2          |𝐸𝑉|         2
  Here’s what’s really going on: The Willig bounds show that the percentage error from using CS
  instead of CV or EV is proportional to the income elasticity times the relative price change, divided
  by 2. For small price changes or goods with low income elasticity, CS is an excellent approximation.
                                 |𝐶𝑆 − 𝐶𝑉| 𝜂 ⋅ |Δ𝑝/𝑝|          |𝐶𝑆 − 𝐸𝑉| 𝜂 ⋅ |Δ𝑝/𝑝|
                                          ≤           ,                 ≤
                                    |𝐶𝑉|        2                 |𝐸𝑉|        2
Derivation intuition: Using the Slutsky equation and the fact that the difference between
Marshallian and Hicksian demands grows with the income effect, the leading-order error term
is proportional to 𝜂 ⋅ (Δ𝑝/𝑝)/2. The bounds are tightest when (i) the price change is small, (ii) the
good is a small share of the budget, or (iii) the income elasticity is low.
For realistic income elasticities (𝜂 ≈ 0.5 to 1.5) and moderate price changes (Δ𝑝/𝑝 ≤ 0.1), the
maximum error is < 5%, supporting CS as a practical approximation. For large price changes
on necessity goods with high income elasticity (e.g., housing, with 𝜂 ≈ 1.38), the error can be
substantial, and CV or EV should be used.
Special cases: | Condition | Relationship | |———–|————-| | Zero income effect (quasilinear)
| 𝐶𝑆 = 𝐶𝑉 = 𝐸𝑉 (exact) | | Small price change | 𝐶𝑆 ≈ 𝐶𝑉 ≈ 𝐸𝑉 (Willig bounds) | | Normal good, large
price change | 𝐸𝑉 > 𝐶𝑆 > 𝐶𝑉 (decrease); 𝐶𝑉 > 𝐶𝑆 > 𝐸𝑉 (increase) | | Inferior good | Reversed
ordering |


                                                          1/2 1/2
4.1.3 Worked Example: Cobb-Douglas 𝑢 = 𝑥1 𝑥2

Given: 𝑝0 = (4, 4), 𝑤 = 300; 𝑝1 = (2, 4), 𝑤 = 300.
Walrasian demands: 𝑥1 = 150
                        𝑝1 , 𝑥2 = 𝑝2 .
                                  150

Indirect utilities: - 𝑣0 = 𝑣(4, 4, 300) = 37.5 - 𝑣1 = 𝑣(2, 4, 300) = √75 × 37.5 ≈ 53.03
Expenditure function (for 𝑢 = 𝑥1/2 1/2
                               1 𝑥2 ):


  Let’s work through this step by step. We start with the Cobb-Douglas utility function 𝑢 = 𝑥1/2 1/2
                                                                                             1 𝑥2 :
                                                                     𝑝   1/2              𝑝   1/2
  1. Hicksian demands for Cobb-Douglas with 𝛼 = 1/2: ℎ1 = 𝑢( 𝑝21 )             , ℎ2 = 𝑢( 𝑝12 )       2. Expenditure
                                                                     𝑝 1/2        𝑝 1/2
  function: 𝑒(𝑝, 𝑢) = 𝑝1 ℎ1 + 𝑝2 ℎ2 3. Substituting: 𝑒(𝑝, 𝑢) = 𝑝1 𝑢( 𝑝2 ) + 𝑝2 𝑢( 𝑝1 )  4. Simplifying:
                                                                      1            2
  𝑒(𝑝, 𝑢) = 𝑢√𝑝1 𝑝2 + 𝑢√𝑝1 𝑝2 = 2𝑢√𝑝1 𝑝2 5. → Final form:
                                                𝑒(𝑝, 𝑢) = 2𝑢√𝑝1 𝑝2
  Here’s what’s really going on: For Cobb-Douglas with equal exponents, the expenditure function
  is proportional to the geometric mean of prices times utility — a familiar form where 𝑒(𝑝, 𝑢) is linear
  in 𝑢 and homogeneous of degree 1 in prices.


                                                𝑒(𝑝, 𝑢) = 2𝑢√𝑝1 𝑝2
CV (price decrease):


  Let’s work through this step by step. We start with 𝐶𝑉 = 𝑤 − 𝑒(𝑝1 , 𝑢0 ): 1. 𝑢0 = 37.5, 𝑝1 = (2, 4), so
  𝑒(𝑝1 , 𝑢0 ) = 2(37.5)√2 × 4 = 75√8 = 75 × 2.828 = 212.1 2. 𝑤 = 300, so 𝐶𝑉 = 300 − 212.1 = 87.9 3. → Final form:
                              𝐶𝑉 = 𝑤 − 𝑒(𝑝1 , 𝑢0 ) = 300 − 2(37.5)√2 × 4 = 300 − 212.1 = 87.9
  Here’s what’s really going on: You need $87.9 taken away after the price decrease to keep you at
  the original utility level — your gain from the price drop is $87.9.


                        𝐶𝑉 = 𝑤 − 𝑒(𝑝1 , 𝑢0 ) = 300 − 2(37.5)√2 × 4 = 300 − 212.1 = 87.9
EV:

                                                                          0      1               1            0
  Let’s work through this step by step. We start with 𝐸𝑉 = 𝑒(𝑝 , 𝑢 ) − 𝑤: 1. 𝑢 ≈ 53.03, 𝑝 = (4, 4), so
      0   1
  𝑒(𝑝 , 𝑢 ) = 2(53.03)√4 × 4 = 106.06 × 4 = 424.24 2. 𝑤 = 300, so 𝐸𝑉 = 424.24 − 300 = 124.24 3. → Final form:
                         𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑤 = 2(53.03)√4 × 4 − 300 = 424.24 − 300 = 124.24
  Here’s what’s really going on: You would need to be given $124.24 at old prices to achieve the
  same utility gain as the price decrease — this is larger than CV because the income effect is
  substantial with Cobb-Douglas preferences.
                          𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑤 = 2(53.03)√4 × 4 − 300 = 424.24 − 300 = 124.24
CS:


  Let’s work through this step by step. We start with the definition of CS as the area under
                                                                                                           𝑝1       2
  Marshallian demand: 1. Marshallian demand for good 1: 𝑥1 = 150
                                                             𝑝 2. 𝐶𝑆 = ∫ 0 𝑥1 (𝑝1 ) 𝑑𝑝1 = ∫4 𝑝 𝑑𝑝1
                                                                         1                   150
                                                                                             1             𝑝1           1

  (note: 𝑝01 = 4, 𝑝11 = 2, so the integral goes from higher to lower price) 3. Evaluating:
  150[ln⁡𝑝1 ]24 = 150(ln⁡2 − ln⁡4) = 150ln⁡(0.5) 4. ln⁡(0.5) ≈ −0.6931, so 𝐶𝑆 = 150 × (−0.6931) ≈ −103.98 (the
  negative sign indicates a gain from price decrease; we report the magnitude) 5. → Final form:
                                            𝐶𝑆 = ∫ 150
                                                  2
                                                       𝑑𝑝1 = 150[ln⁡𝑝1 ]24 = 150ln⁡(0.5) ≈ 103.98
                                                  4 𝑝1

  Here’s what’s really going on: CS gives the welfare gain as the area under the Marshallian
  demand curve between the old and new prices, yielding an intermediate value between CV (87.9)
  and EV (124.24).


                                       𝐶𝑆 = ∫4 150
                                             2                    2
                                               𝑝 𝑑𝑝1 = 150[ln⁡𝑝1 ]4 = 150ln⁡(0.5) ≈ 103.98
                                                     1
Summary: 𝐸𝑉 = 124.24 > 𝐶𝑆 = 103.98 > 𝐶𝑉 = 87.9 — confirms both goods are normal goods. The
gap 𝐸𝑉 − 𝐶𝑉 = 36.34 > 0 indicates a substantial income effect, consistent with Cobb-Douglas (unit
income elasticity).


4.1.4 CS Approximation: When CS Overstates CV and Understates EV

For a price decrease with a normal good: - CS > CV: Marshallian demand includes both
substitution and income effects → flatter than Hicksian at 𝑢0 → larger area - EV > CS: Hicksian
demand at 𝑢1 shifts right (income effect) → larger area than Marshallian



  Munoz-Garcia Insight: CV and EV as Integrals of Hicksian Demand
  The expenditure-function definition of CV and EV we can transform into areas left of the
  Hicksian demand curve using Shephard’s lemma (𝜕𝑒(𝑝, 𝑢)/𝜕𝑝1 = ℎ1 (𝑝, 𝑢)). For a price decrease of
  good 1 from 𝑝0 to 𝑝1 (where 𝑝1 < 𝑝0 ), holding all other prices 𝑝                               constant:
                     1       1                 1     1                                       −1


      Let’s work through this step by step. Starting from the definition 𝐶𝑉 = 𝑒(𝑝0 , 𝑢0 ) − 𝑒(𝑝1 , 𝑢0 )
      (rearranged for a price decrease): 1. By the fundamental theorem of calculus,
                                       𝑝0 𝜕𝑒(𝑝 , 𝑝 , 𝑢0 )
      𝑒(𝑝0 , 𝑢0 ) − 𝑒(𝑝1 , 𝑢0 ) = ∫𝑝11        1   −1
                                                𝜕𝑝1       𝑑𝑝1 2. Shephard’s lemma: 𝜕𝑒(𝑝, 𝑢)/𝜕𝑝1 = ℎ1 (𝑝, 𝑢) — the
                                        1
      derivative of expenditure w.r.t. price equals Hicksian demand 3. Substituting:
             𝑝0
      𝐶𝑉 = ∫𝑝11 ℎ1 (𝑝1 , 𝑝−1 , 𝑢0 )𝑑𝑝1 4. → Final form:
              1
                                                                                      𝑝0
                                      𝐶𝑉 = 𝑒(𝑝01 , 𝑝−1 , 𝑢0 ) − 𝑒(𝑝11 , 𝑝−1 , 𝑢0 ) = ∫ 11 ℎ1 (𝑝1 , 𝑝−1 , 𝑢0 ) 𝑑𝑝1
                                                                                      𝑝1
                                                                                                                    0
      Here’s what’s really going on: CV is the area left of the Hicksian demand curve at 𝑢
      between the two prices — it represents the minimum compensation needed at the original
      utility level.


                                                                                      𝑝0
                                      𝐶𝑉 = 𝑒(𝑝01 , 𝑝−1 , 𝑢0 ) − 𝑒(𝑝11 , 𝑝−1 , 𝑢0 ) = ∫ 11 ℎ1 (𝑝1 , 𝑝−1 , 𝑢0 ) 𝑑𝑝1
                                                                                      𝑝1



      Let’s work through this step by step. Starting from the definition 𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑒(𝑝1 , 𝑢1 )
      (rearranged for a price decrease): 1. By the fundamental theorem of calculus,
                                       𝑝0 𝜕𝑒(𝑝 , 𝑝 , 𝑢1 )
      𝑒(𝑝0 , 𝑢1 ) − 𝑒(𝑝1 , 𝑢1 ) = ∫𝑝11        1   −1
                                                𝜕𝑝1       𝑑𝑝1 2. Shephard’s lemma: 𝜕𝑒(𝑝, 𝑢)/𝜕𝑝1 = ℎ1 (𝑝, 𝑢) 3.
                                        1
                                 𝑝0
      Substituting: 𝐸𝑉 = ∫ 11 ℎ1 (𝑝1 , 𝑝−1 , 𝑢1 )𝑑𝑝1 4. → Final form:
                                 𝑝1
                                                                            𝑝0
                            𝐸𝑉 = 𝑒(𝑝01 , 𝑝−1 , 𝑢1 ) − 𝑒(𝑝11 , 𝑝−1 , 𝑢1 ) = ∫ 11 ℎ1 (𝑝1 , 𝑝−1 , 𝑢1 ) 𝑑𝑝1
                                                                            𝑝1
                                                                                                          1
     Here’s what’s really going on: EV is the area left of the Hicksian demand curve at 𝑢
     between the two prices — it measures the income change equivalent to the price change at the
     new utility level.


                                                                           𝑝0
                           𝐸𝑉 = 𝑒(𝑝01 , 𝑝−1 , 𝑢1 ) − 𝑒(𝑝11 , 𝑝−1 , 𝑢1 ) = ∫ 11 ℎ1 (𝑝1 , 𝑝−1 , 𝑢1 ) 𝑑𝑝1
                                                                           𝑝1

  Here’s what’s really going on: CV integrates the Hicksian demand at the original utility level 𝑢0
  between the two prices — it measures willingness to pay for the price change while keeping you at
  your initial well-being. EV integrates the Hicksian demand at the new utility level 𝑢1 — it measures
  the income change that would be equivalent to the price change.
  Source: Munoz-Garcia, Ch.3, §3.1.2 (pp. 168-170)



4.2 Pareto Optimality

Why this matters for your exam: Pareto efficiency is the bedrock of welfare economics. The
three marginal conditions (exchange, production, product-mix) appear constantly — you must
know them cold. Exam questions often ask you to derive them, apply the Edgeworth box, or
explain why Pareto optimality is necessary but not sufficient for social welfare maximization.

4.2.1 Definition and Concept

An allocation 𝒙 is Pareto-optimal (Pareto-efficient) if no feasible reallocation can make at least
one individual better off without making any other individual worse off:


  Let’s work through this step by step. We start with the verbal definition of Pareto optimality: 1.
  Let 𝒙 be the current allocation and 𝒙′ any feasible alternative 2. For 𝒙 to be Pareto-optimal, there
  must be NO feasible 𝒙′ such that everyone is at least as well off (𝑈𝑖 (𝒙′ ) ≥ 𝑈𝑖 (𝒙) for all 𝑖) and at least
  one person is strictly better off (𝑈𝑗 (𝒙′ ) > 𝑈𝑗 (𝒙) for some 𝑗) 3. The ∄ symbol captures the non-
  existence of such an alternative 4. → Final form:
                  Allocation 𝒙 is PO ⇔ ∄ 𝒙′ s.t. 𝑈𝑖 (𝒙′ ) ≥ 𝑈𝑖 (𝒙) ∀𝑖 and 𝑈𝑗 (𝒙′ ) > 𝑈𝑗 (𝒙) for some 𝑗
  Here’s what’s really going on: Pareto optimality is a minimal efficiency criterion — if a
  reallocation could make someone better off without harming anyone, the current allocation is
  wasteful (Pareto-inefficient). The definition is ordinal: no cardinal utility or interpersonal
  comparisons needed.


              Allocation 𝒙 is PO ⇔ ∄ 𝒙′ s.t. 𝑈𝑖 (𝒙′ ) ≥ 𝑈𝑖 (𝒙) ∀𝑖 and 𝑈𝑗 (𝒙′ ) > 𝑈𝑗 (𝒙) for some 𝑗
A Pareto improvement is a reallocation making at least one person better off without
harming anyone else.


4.2.2 Three Pareto Conditions in the 2 × 2 × 2 Model

The 2 × 2 × 2 model has two factors (𝐿, 𝐾), two goods (𝑋, 𝑌), and two consumers (𝐴, 𝐵). For Pareto
optimality, three marginal conditions must hold simultaneously:
1. Consumption efficiency (efficiency in exchange):


  Let’s work through this step by step. We start with the requirement that no mutually beneficial
  trade remains: 1. In an exchange economy, consumer A trades off 𝑋 and 𝑌 at rate 𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑈𝐴𝑋 /𝑀𝑈𝐴𝑌 2.
  Consumer B trades off at 𝑀𝑅𝑆𝐵𝑋𝑌 = 𝑀𝑈𝐵𝑋 /𝑀𝑈𝐵𝑌 3. If 𝑀𝑅𝑆𝐴 > 𝑀𝑅𝑆𝐵 , then A values 𝑋 more than B does →
  both gain from A giving 𝑌 to B in exchange for 𝑋 4. Gains from trade are exhausted only when rates
  of substitution are equalized 5. → Final form:
                                                             𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌
  Here’s what’s really going on: If two consumers have different marginal rates of substitution,
  they can mutually benefit by trading. Efficiency requires that the marginal willingness to trade one
  good for another is the same for all consumers.


                                                          𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌
The marginal rate of substitution between goods must be equal across all consumers. This
ensures no mutually beneficial trade remains.
                                                 ‾   ‾
Lagrangian derivation (fixed supply 𝑋, 𝑌):


  Let’s work through this step by step. We start with the planner’s problem of maximizing A’s
  utility subject to B reaching a minimum utility level and fixed total supplies: 1. Objective: maximize
  𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 ) 2. Constraint 1: 𝑈𝐵 (𝑋𝐵 , 𝑌𝐵 ) ≥ 𝑈‾ 𝐵 (B must achieve at least 𝑈‾ 𝐵 ) 3. Resource constraints:
  𝑋𝐴 + 𝑋𝐵 = 𝑋‾ , 𝑌𝐴 + 𝑌𝐵 = 𝑌‾ (total supply fixed) 4. Substitute 𝑋𝐵 = 𝑋‾ − 𝑋𝐴 , 𝑌𝐵 = 𝑌‾ − 𝑌𝐴 into B’s utility
  constraint 5. Lagrangian: ℒ = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 ) + 𝜆[𝑈𝐵 (𝑋‾ − 𝑋𝐴 , 𝑌‾ − 𝑌𝐴 ) − 𝑈‾ 𝐵 ] 6. → Final form:
                                       ℒ = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 ) + 𝜆[𝑈𝐵 (𝑋‾ − 𝑋𝐴 , 𝑌‾ − 𝑌𝐴 ) − 𝑈‾ 𝐵 ]
  Here’s what’s really going on: The Lagrangian combines the two consumers’ utilities into a
  single optimization, where 𝜆 represents the marginal social cost of tightening B’s utility constraint
  — it measures how much A’s utility must be sacrificed to increase B’s utility.


                                                                        ‾           ‾        ‾
                                   ℒ = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 ) + 𝜆[𝑈𝐵 (𝑋 − 𝑋𝐴 , 𝑌 − 𝑌𝐴 ) − 𝑈𝐵 ]
FOCs:


  Let’s work through this step by step. We start with the Lagrangian and taking partial
                             𝜕𝑈       𝜕𝑈    𝜕𝑋                                               𝜕𝑈       𝜕𝑈   𝜕𝑈   𝜕𝑈
  derivatives: 1. 𝜕ℒ/𝜕𝑋𝐴 = 𝜕𝑋𝐴 + 𝜆 ⋅ 𝜕𝑋𝐵 ⋅ 𝜕𝑋𝐵 = 0 where 𝜕𝑋𝐵 /𝜕𝑋𝐴 = −1 2. So: 𝜕𝑋𝐴 − 𝜆 𝜕𝑋𝐵 = 0 → 𝜕𝑋𝐴 = 𝜆 𝜕𝑋𝐵 3.
                               𝐴        𝐵    𝐴                                                    𝐴    𝐵    𝐴    𝐵
  𝜕ℒ/𝜕𝑌𝐴 = 𝜕𝑈            𝜕𝑈𝐵 𝜕𝑌𝐵                                 𝜕𝑈𝐴     𝜕𝑈𝐵
              𝜕𝑌𝐴 + 𝜆 ⋅ 𝜕𝑌𝐵 ⋅ 𝜕𝑌𝐴 = 0 where 𝜕𝑌𝐵 /𝜕𝑌𝐴 = −1 4. So: 𝜕𝑌𝐴 = 𝜆 𝜕𝑌𝐵 5. Dividing the two FOCs:
                  𝐴

  𝜕𝑈𝐴 /𝜕𝑋𝐴   𝜕𝑈𝐵 /𝜕𝑋𝐵
  𝜕𝑈𝐴 /𝜕𝑌𝐴 = 𝜕𝑈𝐵 /𝜕𝑌𝐵
                      6. This is 𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌 7. → Final form:
                                     𝜕𝑈𝐴 /𝜕𝑋𝐴 𝜕𝑈𝐵 /𝜕𝑋𝐵
                                             =                          ⇒       𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌
                                     𝜕𝑈𝐴 /𝜕𝑌𝐴 𝜕𝑈𝐵 /𝜕𝑌𝐵
  Here’s what’s really going on: The first-order conditions from the exchange Lagrangian confirm
  that Pareto efficiency in consumption requires the equalization of marginal rates of substitution —
  the central condition for the contract curve in the Edgeworth box.


                                   𝜕𝑈𝐴 /𝜕𝑋𝐴 𝜕𝑈𝐵 /𝜕𝑋𝐵                                    𝐴        𝐵
                                           =                            ⇒       𝑀𝑅𝑆𝑋𝑌 = 𝑀𝑅𝑆𝑋𝑌
                                   𝜕𝑈𝐴 /𝜕𝑌𝐴 𝜕𝑈𝐵 /𝜕𝑌𝐵
The locus of such points in the Edgeworth exchange box is the contract curve.
2. Production efficiency (efficiency in factor allocation):


  Let’s work through this step by step. We start with the requirement that factor reallocation
  cannot increase output of one good without reducing the other: 1. In producing good 𝑋, the rate at
                                                         𝑋          𝑋       𝑋
  which labor substitutes for capital is 𝑀𝑅𝑇𝑆𝐿𝐾 = 𝑀𝑃𝐿 /𝑀𝑃𝐾 2. For good 𝑌, the same rate is
  𝑀𝑅𝑇𝑆𝑌𝐿𝐾 = 𝑀𝑃𝑌𝐿 /𝑀𝑃𝑌𝐾 3. If 𝑀𝑅𝑇𝑆𝑋 > 𝑀𝑅𝑇𝑆𝑌 , then labor is relatively more productive in 𝑋 than in 𝑌 →
  reallocating labor to 𝑋 and capital to 𝑌 can increase total output 4. Such gains are exhausted only
  when both MRTS are equal 5. → Final form:
                                                         𝑀𝑅𝑇𝑆𝑋𝐿𝐾 = 𝑀𝑅𝑇𝑆𝑌𝐿𝐾
  Here’s what’s really going on: Just as exchange efficiency requires equal MRS across consumers,
  production efficiency requires equal MRTS across firms — the marginal productivity of each factor
  relative to the other must be the same in all uses.

                                                                𝑋               𝑌
                                                         𝑀𝑅𝑇𝑆𝐿𝐾 = 𝑀𝑅𝑇𝑆𝐿𝐾
The marginal rate of technical substitution between factors must be equal across all firms. This
ensures no reallocation of 𝐿 and 𝐾 can increase output of one good without reducing the other.
3. Product-mix efficiency (efficiency in output composition):


  Let’s work through this step by step. We start with the condition that the economy must
  produce the right mix of goods: 1. 𝑀𝑅𝑃𝑇𝑋𝑌 is the rate at which the economy can transform 𝑌 into 𝑋
  along the production possibility curve (PPC) 2. 𝑀𝑅𝑆𝑋𝑌 is the rate at which consumers are willing to
  substitute 𝑋 for 𝑌 3. If 𝑀𝑅𝑃𝑇 > 𝑀𝑅𝑆, the economy can produce one more unit of 𝑋 by sacrificing less 𝑌
  than consumers are willing to accept → welfare can be improved 4. Under perfect competition,
  𝑀𝑅𝑃𝑇 = 𝑀𝐶𝑋 /𝑀𝐶𝑌 and 𝑃 = 𝑀𝐶, so 𝑀𝑅𝑃𝑇 = 𝑃𝑋 /𝑃𝑌 5. Consumers optimize where 𝑀𝑅𝑆 = 𝑃𝑋 /𝑃𝑌 , hence
  𝑀𝑅𝑃𝑇 = 𝑀𝑅𝑆 6. → Final form:
                                               𝑀𝑅𝑃𝑇𝑋𝑌 = 𝑀𝑅𝑆𝑋𝑌
  Here’s what’s really going on: The marginal rate at which society can transform one good into
  another must equal the marginal rate at which consumers are willing to substitute between them —
  otherwise a different output mix would make everyone better off.


                                                  𝑀𝑅𝑃𝑇𝑋𝑌 = 𝑀𝑅𝑆𝑋𝑌
The marginal rate of product transformation (slope of the PPC) must equal the consumers’
common marginal rate of substitution. With 𝑀𝑅𝑃𝑇𝑋𝑌 = 𝑀𝐶𝑋 /𝑀𝐶𝑌 and 𝑃 = 𝑀𝐶 under competition,
this becomes 𝑃𝑋 /𝑃𝑌 = 𝑀𝑅𝑆.


4.2.3 Pareto Optimality: Necessary but Not Sufficient

Statement: A situation can be Pareto-optimal without maximizing social welfare. All SW
maxima must be Pareto-optimal, but not all Pareto-optimal points are SW maxima.
Proof via 2 × 2 × 2 model:

  1. All points on the PPC satisfy all three Pareto conditions → all are Pareto-optimal
  2. The GUPF (envelope of all UPFs) contains infinitely many Pareto-optimal points
  3. SW maximization requires tangency between the GUPF and the highest social
     indifference contour — only one point on the GUPF satisfies this
  4. Points 𝑐, 𝑐1 , 𝑑 on the GUPF are all Pareto-optimal, but 𝑑 may lie on a higher social
     indifference contour


 Criterion                        What it does                            Limitation

                                                                          Cannot rank Pareto-optimal
 Pareto optimality                Identifies efficient allocations
                                                                          points

                                  Selects single best point               Requires explicit value
 Bergson SWF
                                  (tangency with GUPF)                    judgements


Conclusion: Pareto optimality is necessary (any SW maximum must be efficient) but not
sufficient (among infinite Pareto-efficient allocations, only one maximizes SW given the SWF).


4.2.4 Externalities and Pareto Optimality: Pigouvian Tax/Subsidy

When externalities exist, private optimization does not yield Pareto optimality. Consider two
firms in a competitive market (𝑝 = 15):


 Firm                Cost function                                 Externality

                                                                   −𝜕𝐶1 /𝜕𝑞2 > 0 → external economy
 Firm 1              𝐶1 = 0.1𝑞21 + 5𝑞1 − 0.1𝑞22
                                                                   from Firm 2
 Firm                 Cost function                                     Externality

                                                                        +𝜕𝐶2 /𝜕𝑞1 > 0 → external diseconomy
 Firm 2               𝐶2 = 0.2𝑞22 + 7𝑞2 + 0.025𝑞21
                                                                        from Firm 1

                                                                               𝑝𝑟𝑖𝑣
Private optimum (each firm maximizes own profit, 𝑀𝐶𝑖 = 𝑝): - 𝑀𝐶1             = 0.2𝑞1 + 5 = 15 ⇒ 𝑞1 = 50 -
  𝑝𝑟𝑖𝑣
𝑀𝐶2      = 0.4𝑞2 + 7 = 15 ⇒ 𝑞2 = 20 - Total private profit = 290 + 17.5 = 307.5
Social optimum (maximize joint profit, internalize externalities):


  Let’s work through this step by step. We start with you cost functions and summing them to get
                                2               2               2                  2
  total social cost: 1. 𝐶1 = 0.1𝑞1 + 5𝑞1 − 0.1𝑞2 and 𝐶2 = 0.2𝑞2 + 7𝑞2 + 0.025𝑞1 2. Total cost:
  𝑇𝐶 = 𝐶1 + 𝐶2 = (0.1𝑞21 + 5𝑞1 − 0.1𝑞22 ) + (0.2𝑞22 + 7𝑞2 + 0.025𝑞21 ) 3. Grouping 𝑞1 terms:
  0.1𝑞21 + 0.025𝑞21 = 0.125𝑞21 4. Grouping 𝑞2 terms: −0.1𝑞22 + 0.2𝑞22 = 0.1𝑞22 5. Linear terms: 5𝑞1 + 7𝑞2 6. →
  Final form:
                                    𝑇𝐶 = 𝐶1 + 𝐶2 = 0.125𝑞21 + 0.1𝑞22 + 5𝑞1 + 7𝑞2
  Here’s what’s really going on: The social cost function internalizes the externalities — the cross-
  effect terms from Firm 2 on Firm 1 (negative, reducing Firm 1’s costs) and from Firm 1 on Firm 2
  (positive, increasing Firm 2’s costs) are consolidated into the quadratic coefficients.


                              𝑇𝐶 = 𝐶1 + 𝐶2 = 0.125𝑞21 + 0.1𝑞22 + 5𝑞1 + 7𝑞2
                            *                                   *
- 𝑆𝑀𝐶1 = 0.25𝑞1 + 5 = 15 ⇒ 𝑞1 = 40 - 𝑆𝑀𝐶2 = 0.2𝑞2 + 7 = 15 ⇒ 𝑞2 = 40 - Total social profit =
400 + (−40) = 360
Pigouvian correction: | Firm | Problem | Policy | |——|———|——–| | Firm 1: 50 → 40 |
Overproduces (external diseconomy) | Tax 𝑡 = 𝜕𝐶2 /𝜕𝑞1 = 0.05(40) = 2 per unit | | Firm 2: 20 → 40 |
Underproduces (external economy) | Subsidy 𝑠 = −𝜕𝐶1 /𝜕𝑞 = 0.2(40) = 8 per unit |
                                                                    2
Verification: With tax: 𝑀𝐶1 + 2 = 0.2𝑞 + 7 = 15 ⇒ 𝑞 = 40. With subsidy:
                                            1               1
𝑀𝐶2 − 8 = 0.4𝑞2 − 1 = 15 ⇒ 𝑞2 = 40.
Social dividend = 360 − 307.5 = 52.5 — the net gain to society from correcting the externality.



  Koutsoyiannis Insight: Pareto Optimality and the Edgeworth Box
  Koutsoyiannis (Ch.23, §4) emphasizes that the Pareto criterion is purely objective — it requires no
  interpersonal utility comparisons. In the 2 × 2 Edgeworth exchange box (figure 23.1), the contract
  curve contains all Pareto-efficient distributions. Any point off the contract curve (e.g., point 𝑧) is
  inefficient: a reallocation to any point between 𝑎 and 𝑏 along the contract curve increases the utility
  of at least one consumer without harming the other.
  The three Pareto conditions (exchange, production, product-mix) precisely characterize the general
  equilibrium of a perfectly competitive system. A point off the contract curve represents unexploited
  gains from trade — the hallmark of Pareto inefficiency.
  Source: Koutsoyiannis, Ch.23, §4 (pp. 526-529)



4.3 The First and Second Welfare Theorems

Why this matters for your exam: The welfare theorems are the crown jewels of general
equilibrium theory. The First Theorem says markets deliver efficiency; the Second says any
efficient outcome can be implemented via markets with redistribution. Expect at least one
question testing the direction, assumptions, and policy implications of each theorem —
especially the separation of efficiency and equity.

4.3.1 First Welfare Theorem (Invisible Hand Theorem)
  Every competitive equilibrium is Pareto-optimal.


Formal statement: If all agents have locally non-satiated preferences and markets are perfectly
competitive, every Walrasian equilibrium allocation is Pareto-efficient.
                                                                                                    ′
Key assumption: Local non-satiation — for any bundle 𝑥 and 𝜀 > 0, there exists 𝑥 within 𝜀 of 𝑥
that is strictly preferred. This ensures budget constraints bind at equilibrium.
Conditions required: | Condition | Role | |———–|——| | Local non-satiation | Consumers
spend all income | | Perfect competition | All agents are price-takers | | Complete markets |
Markets exist for all goods | | No externalities | All costs/benefits reflected in prices | | No
public goods | Goods are rivalrous and excludable |
Why it works: In competitive equilibrium: - Consumers equate 𝑀𝑅𝑆 to price ratio
⇒ 𝑀𝑅𝑆𝐴 = 𝑀𝑅𝑆𝐵 (consumption efficiency) - Producers equate 𝑀𝑅𝑇𝑆 to factor price ratio
⇒ 𝑀𝑅𝑇𝑆𝑋 = 𝑀𝑅𝑇𝑆𝑌 (production efficiency) - 𝑃 = 𝑀𝐶 ⇒ 𝑀𝑅𝑃𝑇 = 𝑃𝑋 /𝑃𝑌 = 𝑀𝑅𝑆 (product-mix efficiency)


Proof of the First Welfare Theorem (by contradiction):
Assume (𝑥, 𝑦) is a WEA at prices 𝑝* but is not Pareto efficient. Then there exists a feasible
allocation ( ̂𝑥, ̂𝑦) such that 𝑢𝑖 ( ̂𝑥𝑖 ) ≥ 𝑢𝑖 (𝑥𝑖 ) for all 𝑖 with strict inequality for at least one 𝑖. Since
utility functions are strictly increasing, this implies 𝑝* ⋅ 𝑥̂ 𝑖 ≥ 𝑝* ⋅ 𝑥𝑖 for all 𝑖, with strict inequality
for at least one 𝑖. Summing:


  Let’s work through this step by step. We start with the assumption that (𝑥,
                                                                           ̂ 𝑦)
                                                                              ̂ is a Pareto

  improvement over the WEA (𝑥, 𝑦) at prices 𝑝* : 1. For all consumers 𝑖: 𝑢𝑖 (𝑥̂ 𝑖 ) ≥ 𝑢𝑖 (𝑥𝑖 ), with strict for
  some 𝑖 2. By local non-satiation and utility maximization, 𝑝* ⋅ 𝑥̂ 𝑖 ≥ 𝑝* ⋅ 𝑥𝑖 (otherwise 𝑥̂ 𝑖 would be
  affordable and preferred) 3. For at least one 𝑖 where 𝑢𝑖 (𝑥̂ 𝑖 ) > 𝑢𝑖 (𝑥𝑖 ), we have strict inequality:
  𝑝* ⋅ 𝑥̂ 𝑖 > 𝑝* ⋅ 𝑥𝑖 4. Summing over all consumers: ∑𝑖 𝑝* ⋅ 𝑥̂ 𝑖 > ∑𝑖 𝑝* ⋅ 𝑥𝑖 5. Factor out 𝑝* :
  𝑝* ⋅ ∑𝑖 𝑥̂ 𝑖 > 𝑝* ⋅ ∑𝑖 𝑥𝑖 6. → Final form:
                                                  𝑝* ⋅ ∑ 𝑥̂ 𝑖 > 𝑝* ⋅ ∑ 𝑥𝑖
                                                            𝑖        𝑖
  Here’s what’s really going on: A Pareto improvement must have strictly greater total
  expenditure at equilibrium prices — otherwise it could not make anyone strictly better off. This is
  the key inequality that leads to the contradiction.


                                                 𝑝* ⋅ ∑ 𝑥̂ 𝑖 > 𝑝* ⋅ ∑ 𝑥𝑖
                                                        𝑖            𝑖
By feasibility, ∑𝑖 ̂𝑥𝑖 = ∑𝑖 𝑒𝑖 + ∑𝑗 ̂𝑦𝑗 and ∑𝑖 𝑥𝑖 = ∑𝑖 𝑒𝑖 + ∑𝑗 𝑦𝑗 . Substituting:


  Let’s work through this step by step. We start with the feasibility conditions and the inequality
  derived above: 1. Total consumption equals total endowment plus total production:
   ∑ 𝑥̂ 𝑖 = ∑ 𝑒𝑖 + ∑ 𝑦̂ 𝑗 and ∑ 𝑥𝑖 = ∑ 𝑒𝑖 + ∑ 𝑦𝑗 2. Substituting into 𝑝* ⋅ ∑ 𝑥̂ 𝑖 > 𝑝* ⋅ ∑ 𝑥𝑖 : 3.
     𝑖           𝑖       𝑗          𝑖        𝑖      𝑗                              𝑖            𝑖
  𝑝* ⋅ ( ∑ 𝑒𝑖 + ∑ 𝑦̂ 𝑗 ) > 𝑝* ⋅ ( ∑ 𝑒𝑖 + ∑ 𝑦𝑗 ) 4. The endowment terms cancel: 𝑝* ⋅ ∑ 𝑒𝑖 on both sides 5.
             𝑖       𝑗          𝑖        𝑗                                                𝑖
  → Final form:
                                                  𝑝* ⋅ ∑ 𝑦̂ 𝑗 > 𝑝* ⋅ ∑ 𝑦𝑗
                                                        𝑗            𝑗
  Here’s what’s really going on: After canceling endowments, the inequality reduces to total
  production value at the candidate allocation exceeding total production value at the equilibrium —
  which contradicts profit maximization.


                                                 𝑝* ⋅ ∑ ̂𝑦𝑗 > 𝑝* ⋅ ∑ 𝑦𝑗
                                                 𝑗         𝑗
         *           *
Thus 𝑝       ⋅ 𝑦𝑗 > 𝑝 ⋅ 𝑦𝑗 for some firm 𝑗, meaning 𝑦𝑗 was not profit-maximizing — contradicting
               ̂

that (𝑥, 𝑦) is a WEA. Hence every WEA must be Pareto efficient. ∎
Source: Munoz-Garcia, Ch.6, §6.5 (pp. 457-458)
4.3.2 Second Welfare Theorem


  Any Pareto-optimal allocation we can realize as a competitive equilibrium with
  appropriate lump-sum transfers.


Formal statement: Under convexity of preferences and production sets, for any Pareto-optimal
allocation, there exists a set of prices and lump-sum transfers such that the allocation is a
competitive equilibrium.
Key assumptions: Convex preferences, convex production sets, lump-sum transfers (fixed
transfers independent of choices, preserving marginal incentives).
Direction:


  Let’s work through this step by step. We start with the directional relationship between the two
  welfare theorems: 1. First Welfare Theorem (FWT): A Competitive Equilibrium (CE) is Pareto
  Optimal (PO), requiring only local non-satiation 2. Second Welfare Theorem (SWT): A Pareto
  Optimal allocation can be decentralized as a Competitive Equilibrium, requiring convexity and
  lump-sum transfers 3. The arrows show the logical direction: CE → PO for FWT; PO → CE for SWT
  4. → Final form:
                                                                    convexity + transfers
                         FWT: CE local non-satiation
                                         →           PO   SWT: PO           →               CE
  Here’s what’s really going on: The two theorems are converses: the First says markets deliver
  efficiency (minimal assumptions), the Second says any efficient outcome can be implemented
  through markets (stronger assumptions needed). Together they justify the separation of efficiency
  from equity.


                                                                     convexity + transfers
                      FWT: CE local non-satiation
                                      →           PO      SWT: PO              →             CE


4.3.3 Comparison and Implications


 Feature                 First Theorem                              Second Theorem

 Direction               CE → PO                                    PO → CE

 Key assumption          Local non-satiation                        Convexity of preferences/production

                                                                    Redistribute endowments, then let
 Policy implication      Markets work — don’t interfere
                                                                    markets work

                                                                    Lump-sum transfers infeasible in
 Practical limitation    Real markets have imperfections
                                                                    practice


Separation of efficiency and equity: The two theorems together imply that society can first
choose a “fair” distribution (via lump-sum transfers) and then let competitive markets achieve
efficiency. The government should redistribute endowments, not intervene in prices.
When the theorems fail (market failures): | Failure | Effect | |———|——–| | Market power |
𝑃 > 𝑀𝐶 ⇒ 𝑀𝑅𝑃𝑇 ≠ 𝑀𝑅𝑆 | | Externalities | Private ≠ social cost | | Public goods | Free-rider ⇒
underprovision | | Asymmetric information | Adverse selection, moral hazard | | Non-
convexities | No competitive equilibrium exists |

4.3.4 Does Perfect Competition Ensure Welfare Maximization?

Short answer: Perfect competition ensures Pareto efficiency (FWT) but does NOT guarantee
social welfare maximization, which also requires distributional equity.
Why competition ensures efficiency: Under perfect competition, all three marginal
conditions are automatically satisfied in general equilibrium via the price mechanism.
Why competition does NOT ensure SW maximization:

  1. Pareto ≠ SW maximum: All points on the GUPF are Pareto-optimal, but only one
     maximizes SW (tangency with SWF)
  2. Initial endowment distribution matters: Different endowments → different
     competitive equilibria (all PO, but different utility distributions)
  3. Market failures prevent even Pareto optimality
  4. Distributional equity requires active redistribution — markets have no tendency toward
     equity

The theoretical ideal: Perfect competition (for efficiency) + Lump-sum transfers (for equity)
+ SWF (for distributional choice).



  Munoz-Garcia Insight: Lagrangian Derivation of Pareto Conditions from Competitive
  Equilibrium
  Munoz-Garcia (§6.5) shows that the three Pareto conditions emerge from a single constrained
  optimization problem. The social planner maximizes one consumer’s utility subject to (i) a minimum
  utility constraint for the other consumer, (ii) technological feasibility, and (iii) input feasibility:


    Let’s work through this step by step. Starting from the planner’s problem of maximizing
    social welfare in the 2 × 2 × 2 economy: 1. Choose consumer 1’s utility as the objective to
    maximize 2. Constrain consumer 2’s utility to be at least 𝑢‾ 2 3. Production feasibility: total
    consumption of each good cannot exceed total production 4. Factor feasibility: total labor and
    capital used in production cannot exceed endowments 5. Choice variables: consumption
                   𝐴   𝐴   𝐵   𝐵
    allocations (𝑥1 , 𝑥2 , 𝑥1 , 𝑥2 ) and factor allocations (𝐿1 , 𝐾1 , 𝐿2 , 𝐾2 ) 6. → Final form:
                                                             max                         𝑢1 (𝑥11 , 𝑥12 )
                                             𝑥𝐴1 , 𝑥𝐴2 , 𝑥𝐵1 , 𝑥𝐵2 , 𝐿1 , 𝐾1 , 𝐿2 , 𝐾2

    Here’s what’s really going on: The social planner chooses consumption and production
    plans simultaneously, subject to technological and resource constraints — a general
    equilibrium optimization.


                                                             max                         𝑢1 (𝑥11 , 𝑥12 )
                                             𝑥𝐴1 , 𝑥𝐴2 , 𝑥𝐵1 , 𝑥𝐵2 , 𝐿1 , 𝐾1 , 𝐿2 , 𝐾2



    Let’s work through this step by step. The constraints of the planner’s problem: 1.
                                                                       2      2
    Consumer 2’s utility must be at least 𝑢‾ 2 : 𝑢2 (𝑥1 , 𝑥2 ) ≥ 𝑢‾ 2 2. Good 1 feasibility: total consumption
     ≤ total production: 𝑥11 + 𝑥21 ≤ 𝐹1 (𝐿1 , 𝐾1 ) 3. Good 2 feasibility: 𝑥12 + 𝑥22 ≤ 𝐹2 (𝐿2 , 𝐾2 ) 4. Labor
    constraint: 𝐿1 + 𝐿2 ≤ 𝐿‾ 5. Capital constraint: 𝐾1 + 𝐾2 ≤ 𝐾‾ 6. → Final forms:
                                                 s.t. 𝑢2 (𝑥21 , 𝑥22 ) ≥ 𝑢‾ 2
                                   𝑥1 + 𝑥1 ≤ 𝐹1 (𝐿1 , 𝐾1 ), 𝑥12 + 𝑥22 ≤ 𝐹2 (𝐿2 , 𝐾2 )
                                    1     2
                                                         ‾
                                              𝐿1 + 𝐿2 ≤ 𝐿,      𝐾1 + 𝐾2 ≤ 𝐾‾
    Here’s what’s really going on: These five constraints capture the entire general equilibrium
    system: utility, technology, and resource endowments all bind the planner’s choices.


                                                 s.t. 𝑢2 (𝑥21 , 𝑥22 ) ≥ 𝑢‾ 2
                                     𝑥1 + 𝑥1 ≤ 𝐹1 (𝐿1 , 𝐾1 ), 𝑥12 + 𝑥22 ≤ 𝐹2 (𝐿2 , 𝐾2 )
                                      1    2
                                                           ‾
                                              𝐿1 + 𝐿2 ≤ 𝐿,      𝐾1 + 𝐾2 ≤ 𝐾‾
  The Lagrangian is:


    Let’s work through this step by step. Starting from the objective and constraints assembled
    above: 1. Objective: 𝑢1 (𝑥11 , 𝑥12 ) 2. Lagrange multiplier 𝜆 for the utility constraint with term
    𝜆[𝑢2 (⋅) − 𝑢‾ 2 ] 3. Lagrange multipliers 𝜇1 , 𝜇2 for the two production feasibility constraints 4.
    Lagrange multipliers 𝛿𝐿 , 𝛿𝐾 for the two factor endowment constraints 5. Combine all terms into
    the Lagrangian sum: objective + weighted constraints 6. → Final form:
      ℒ = 𝑢1 (⋅) + 𝜆[𝑢2 (⋅) − 𝑢‾ 2 ] + 𝜇1 [𝐹1 (⋅) − 𝑥11 − 𝑥21 ] + 𝜇2 [𝐹2 (⋅) − 𝑥12 − 𝑥22 ] + 𝛿𝐿 [𝐿‾ − 𝐿1 − 𝐿2 ] + 𝛿𝐾 [𝐾‾ − 𝐾1 − 𝐾2 ]
    Here’s what’s really going on: Each Lagrange multiplier represents the shadow price of
    relaxing the corresponding constraint — 𝜇1 is the marginal social value of good 1, 𝛿𝐿 is the
    marginal social value of labor, etc. The FOCs will replicate competitive equilibrium prices.


      ℒ = 𝑢1 (⋅) + 𝜆[𝑢2 (⋅) − 𝑢‾ 2 ] + 𝜇1 [𝐹1 (⋅) − 𝑥11 − 𝑥21 ] + 𝜇2 [𝐹2 (⋅) − 𝑥12 − 𝑥22 ] + 𝛿𝐿 [𝐿‾ − 𝐿1 − 𝐿2 ] + 𝛿𝐾 [𝐾‾ − 𝐾1 − 𝐾2 ]
  FOCs yield: 1. Consumption efficiency: 𝑀𝑅𝑆11, 2 = 𝑀𝑅𝑆21, 2 (from ratios of 𝜕ℒ/𝜕𝑥𝑖1 and 𝜕ℒ/𝜕𝑥𝑖2 ) 2.
                                         1            2
  Production efficiency: 𝑀𝑅𝑇𝑆𝐿, 𝐾 = 𝑀𝑅𝑇𝑆𝐿, 𝐾 (from ratios of 𝜕ℒ/𝜕𝐿𝑗 and 𝜕ℒ/𝜕𝐾𝑗 ) 3. Product-mix
                 𝑖
  efficiency: 𝑀𝑅𝑆1, 2 = 𝑀𝑅𝑇1, 2 (combining the consumption and production FOCs)
  A competitive equilibrium decentralizes this planner’s problem: each consumer maximizes utility
  at given prices, each firm maximizes profit at given prices, and prices adjust until all markets clear.
  The price system simultaneously solves all three efficiency conditions.
  Source: Munoz-Garcia, Ch.6, §6.5 (pp. 456-460)




  Munoz-Garcia Insight: The Second Welfare Theorem and Redistribution
  The SWT (Munoz-Garcia, §6.4.2) states: if a PEA 𝑥 (on the contract curve) is the desired social
  allocation, we can redistribute initial endowments from 𝑒 to 𝑒* (where 𝑝* ⋅ 𝑒*𝑖 = 𝑝* ⋅ 𝑥𝑖 for every
  consumer 𝑖) and then let competitive markets operate. The resulting WEA will be exactly 𝑥. This is
  the formal basis for the separation of efficiency and equity: society can first choose a “fair”
  distribution (via lump-sum endowment redistribution) and then rely on competitive markets to
  achieve efficiency.
  The SWT requires convexity because non-convex preferences or production sets can create gaps in
  the supporting hyperplane — the Pareto-optimal point may not have a price system that sustains it
  as a competitive equilibrium.
  Source: Munoz-Garcia, Ch.6, §6.4.2 (pp. 444-447)




  Arrow-Debreu Fixed-Point Argument for Existence of Competitive Equilibrium
  We cannot guarantee the existence of a Walrasian equilibrium by counting equations — it requires a
  fixed-point argument. Munoz-Garcia (Mathematical Appendix, §A.12) outlines the logic:
  Define the aggregate excess demand function 𝑧(𝑝) = ∑ 𝑥𝑖 (𝑝, 𝑝 ⋅ 𝑒𝑖 ) − ∑ 𝑒𝑖 . Under standard
                                                                          𝑖                    𝑖
  assumptions (continuity, homogeneity of degree zero, Walras’ law), 𝑧(𝑝) maps from the price
  simplex into itself. A Walrasian equilibrium is a price vector 𝑝* such that 𝑧(𝑝* ) ≤ 0.
  Brouwer’s Fixed Point Theorem: If 𝑓: 𝐴 → 𝐴 is a continuous function from a compact, convex set
  into itself, then there exists 𝑥 ∈ 𝐴 such that 𝑓(𝑥) = 𝑥.
  Construct 𝑔(𝑝) = 𝑝 + max⁡(0, 𝑧(𝑝)) and normalize. Then 𝑔(𝑝) is continuous and maps the price simplex
  into itself. By Brouwer’s theorem, there exists 𝑝* such that 𝑔(𝑝* ) = 𝑝* , which implies 𝑧(𝑝* ) ≤ 0 — i.e.,
  equilibrium exists. For correspondences (e.g., with non-convexities), Kakutani’s fixed-point theorem
  extends the result.
  Arrow and Debreu (1954) used this approach to prove the existence of competitive equilibrium in a
  general production economy, establishing the logical consistency of the Walrasian model.
  Source: Munoz-Garcia, Mathematical Appendix, §A.12 (pp. 845-848); Arrow-Debreu, Econometrica
  (1954)



4.4 Social Welfare Functions

Why this matters for your exam: SWFs formalize society’s distributional preferences. You
need to know the major types (Utilitarian, Rawlsian, Nash, Bergson-Samuelson), their
indifference curves, and how they select the “bliss point” on the GUPF. The Kaldor-Hicks
compensation principle and Scitovsky double test are frequent exam topics too.

4.4.1 Definition

A Social Welfare Function (SWF) is a rule 𝑊 = 𝐹(𝑈1 , 𝑈2 , …, 𝑈𝑛 ) that ranks alternative social
states based on individual utility levels. Introduced by Bergson (1938) and developed by
Samuelson, it embodies society’s value judgements about distribution:


  Let’s work through this step by step. We start with the concept of aggregating individual
  utilities into a social ranking: 1. Let 𝑈𝑖 represent the utility of individual 𝑖 (typically an ordinal
  index) 2. A social welfare function 𝑊 maps the vector of individual utilities into a real number 3. The
  Pareto principle requires 𝜕𝑊/𝜕𝑈𝑖 > 0 for all 𝑖 — if anyone’s utility rises (all else equal), social welfare
  rises 4. This is the minimal ethical restriction: society should never prefer a Pareto-inferior outcome
  5. → Final form:
                                      𝑊 = 𝐹(𝑈1 , 𝑈2 , …, 𝑈𝑛 )   with   𝜕𝑊/𝜕𝑈𝑖 > 0 ∀𝑖
  Here’s what’s really going on: The SWF formalizes society’s distributional preferences as a
  mathematical function. The positivity restriction on partial derivatives ensures the SWF respects
  the Pareto criterion — a fundamental normative requirement.


                             𝑊 = 𝐹(𝑈1 , 𝑈2 , …, 𝑈𝑛 ) with 𝜕𝑊/𝜕𝑈𝑖 > 0 ∀𝑖
Social welfare contours (in 𝑈𝐴 -𝑈𝐵 space) are downward-sloping, do not intersect, and higher
contours represent higher welfare.

4.4.2 Types of SWF


 Type                  Formula                 Social indifference curve                Equity concern

 Utilitarian                                                                            None (sum-
                       𝑊 = ∑𝑖 𝑈𝑖               Linear, slope −1
 (Bentham)                                                                              ranking)

 Rawlsian                                                                               Extreme (only
                       𝑊 = min⁡𝑖 𝑈𝑖            L-shaped (right-angle)
 (maximin)                                                                              worst-off matters)

 Nash                                                                                   Moderate
                       𝑊 = ∏𝑖 𝑈𝑖               Rectangular hyperbola
 (multiplicative)                                                                       inequality aversion

 Bergson-                                                                               Any degree of
                       𝑊 = 𝐹(𝑈1 , …, 𝑈𝑛 ) General form
 Samuelson                                                                              inequality aversion


Utilitarian: A gain of 1 util to a rich person = a gain of 1 util to a poor person. Ignores
inequality — a transfer from poor to rich with Δ𝑊 = 0 is “acceptable.”
Rawlsian: Only the worst-off person matters. Any change that improves the worst-off is good,
even if it dramatically reduces everyone else’s utility. Philosophical basis: Rawls (1971) A
Theory of Justice — “veil of ignorance.”

4.4.3 Grand Utility Possibility Frontier and Point of Bliss

Derivation of GUPF (4 steps):

  1. PPC: Each point on the production possibility curve is a Pareto-efficient output
     combination (𝑋, 𝑌)
  2. UPF: For a given product-mix, construct the Edgeworth exchange box. The contract
     curve yields a utility possibility frontier — the set of efficient utility pairs (𝑈𝐴 , 𝑈𝐵 )
     3. GUPF: The outer envelope of all UPFs across every product-mix on the PPC. It represents
         the maximum utility combinations feasible given resources and technology
     4. Point of Bliss: Tangency between the GUPF and the highest attainable social
         indifference contour

Condition at bliss point:


    Let’s work through this step by step. We start with the three Pareto conditions that must hold
    along the entire GUPF: 1. Consumption efficiency requires 𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌 — common MRS across all
    consumers 2. Production efficiency requires 𝑀𝑅𝑇𝑆𝑋𝐿𝐾 = 𝑀𝑅𝑇𝑆𝑌𝐿𝐾 — common MRTS across all firms 3.
    Product-mix efficiency requires 𝑀𝑅𝑃𝑇𝑋𝑌 = 𝑀𝑅𝑆𝑋𝑌 — the output transformation rate equals consumers’
    common MRS 4. These three equalities hold at every Pareto-efficient point, hence everywhere on
    the GUPF 5. → Final form:
                                   𝑀𝑅𝑃𝑇𝑋𝑌 = 𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌    (Pareto efficiency — holds on entire GUPF)
    Here’s what’s really going on: The entire GUPF we characterize by all three Pareto conditions
    holding simultaneously. These conditions say nothing about distribution — they only ensure
    efficiency.


                             𝑀𝑅𝑃𝑇𝑋𝑌 = 𝑀𝑅𝑆𝐴𝑋𝑌 = 𝑀𝑅𝑆𝐵𝑋𝑌         (Pareto efficiency — holds on entire GUPF)

    Let’s work through this step by step. We start with the welfare maximization problem at the
    bliss point: 1. Social welfare is maximized where the highest social indifference curve touches the
    GUPF 2. At the point of tangency, the slope of the social indifference curve equals the slope of the
    GUPF 3. The slope of the social indifference curve we get the ratio of marginal social weights:
    −(𝜕𝑊/𝜕𝑈𝐴 )/(𝜕𝑊/𝜕𝑈𝐵 ) 4. This tangency condition selects one unique point among all Pareto-efficient
    points on the GUPF 5. → Final form:
                   Slope(GUPF)=Slope(Social Indifference Contour) (distributional judgement — only at bliss)
    Here’s what’s really going on: While Pareto efficiency holds everywhere on the GUPF, the
    distributional judgement (which point is “best”) is determined by the shape of the SWF — the
    tangency condition selects the social optimum.


            Slope(GUPF)=Slope(Social Indifference Contour)                 (distributional judgement — only at bliss)
The bliss point determines all ten unknowns in the 2 × 2 × 2 model:
𝑋* , 𝑌* , 𝑋*𝐴 , 𝑋*𝐵 , 𝑌*𝐴 , 𝑌*𝐵 , 𝐿*𝑋 , 𝐿*𝑌 , 𝐾*𝑋 , 𝐾*𝑌 .

4.4.4 Kaldor-Hicks Compensation and the Scitovsky Double Test

Kaldor-Hicks compensation principle (1939): A change from state 𝐴 to state 𝐵 improves
social welfare if the gainers could potentially compensate the losers and still remain better off
— regardless of whether compensation is actually paid:


    Let’s work through this step by step. We start with the compensation principle’s logic: 1. A
    change from 𝐴 to 𝐵 creates gainers (who would pay to secure the change) and losers (who would
    pay to avoid it) 2. WTP (willingness to pay) of gainers measures the maximum they would pay for
    the change 3. WTA (willingness to accept) of losers measures the minimum they would accept to
    permit the change 4. If total WTP exceeds total WTA, the gainers could hypothetically compensate
    the losers and still be better off 5. → Final form:
                                         Change 𝐴 → 𝐵 is K-H efficient ⇔ ∑ WTPgainers > ∑ WTAlosers
    Here’s what’s really going on: Kaldor-Hicks uses a monetary metric to compare welfare changes
    across individuals. The “potential compensation” criterion sidesteps the need for actual
    redistribution — if the gainers could compensate, the change is considered efficient regardless of
    whether they do.


                                    Change 𝐴 → 𝐵 is K-H efficient ⇔ ∑ WTPgainers > ∑ WTAlosers
Critical assumption — Equal MU of money: For monetary amounts to be comparable
across individuals, each unit of money must represent the same utility change for everyone. If
the MU of money differs (e.g., millionaire vs. poor person), the comparison breaks down.
Can compensation be correct? | Condition | Verdict | |———–|———| | MU of money EQUAL
across individuals | YES — £1 gain = £1 loss in utility terms | | MU of money UNEQUAL | NO —
example: millionaire gains £2000 (low MU), poor loses £1000 (high MU) → total utility falls
despite K-H “pass” | | Potential ≠ actual compensation | AMBIGUOUS — distributional change
ignored | | Constant MU unrealistic | NO — MU of money declines with income |
Scitovsky paradox (1941): Kaldor-Hicks can produce contradictory rankings when utility
possibility curves intersect:


  Let’s work through this step by step. We start with the definition of the Scitovsky paradox: 1.
  Under Kaldor-Hicks, state 𝐴 is preferred to 𝐵 if gainers from 𝐴 → 𝐵 can compensate losers: 𝐴 ≻𝐾𝐻 𝐵
  2. The paradox arises when 𝐴 ≻𝐾𝐻 𝐵 AND 𝐵 ≻𝐾𝐻 𝐴 simultaneously — a cycle 3. This occurs when
  utility possibility frontiers intersect: the compensating tests pass in both directions 4. → Final form:
                                          𝐴 ≻𝐾𝐻 𝐵   AND    𝐵 ≻𝐾𝐻 𝐴
  Here’s what’s really going on: The Kaldor-Hicks criterion is not transitive when UPFs intersect.
  The ranking depends on the starting point, producing contradictory welfare judgements. This
  motivated Scitovsky’s double test as a consistency check.


                                        𝐴 ≻𝐾𝐻 𝐵 AND 𝐵 ≻𝐾𝐻 𝐴
Scitovsky’s Double Test resolves this: 1. Forward test: Gainers can compensate losers (K-H
test passes) 2. Reversal test: Losers cannot bribe gainers to reject the change
A change is welfare-improving only if (i) passes AND (ii) fails.
Limitations of compensation principle: - Potential ≠ actual compensation → losers may be
actually worse off - Ignores income distribution — accepts status quo as neutral - Constant MU
of money assumed unrealistically - Not a complete ordering — may still fail to rank some
alternatives

4.4.5 Pigou’s Three Pillars of Welfare Economics

Pigou (1932) structured welfare analysis around three pillars:
Pillar 1: Definition and measurement of economic welfare - Economic welfare = “that
part of social welfare that can be brought into relation with the measuring rod of money” -
Economic welfare and national income are coordinate - Criticism: Cannot separate economic
from non-economic welfare (Robbins); cardinal utility is unmeasurable
Pillar 2: Dual conditions for welfare maximization | Condition | Content | Assumption | |
———–|———|————| | (i) National income growth | Given factor supply, NI↑ → SW↑ | Tastes
and distribution unchanged | | (ii) Income redistribution | Transfer from rich to poor ↑ SW
(constant NI) | Equal capacity for satisfaction + diminishing MU of income |
Criticism of (ii): “Equal capacity for satisfaction” is scientifically untenable — it is a value
judgement favoring equality.
Pillar 3: Private vs. social net product (externalities) - Private net product: contribution to
national dividend accruing to the private investor - Social net product: aggregate contribution
(including external effects) - Policy: Tax where private > social; subsidize where social >
private - Criticism: Divergence cannot always be quantified; assumes state can measure
marginal external effects accurately



  Bergson-Samuelson SWF: Formal Definition and Relation to the GUPF
Bergson (1938) formalized the SWF as follows. Let 𝑼 = (𝑈1 , …, 𝑈𝑛 ) be the vector of individual utilities
(ordinal indexes, interpersonally non-comparable). A Bergson-Samuelson SWF is a real-valued
function 𝑊 = 𝒲(𝑼) that satisfies:

      1. Pareto principle: 𝜕𝒲/𝜕𝑈𝑖 > 0 for all 𝑖 (if anyone’s utility rises, ceteris paribus, welfare rises)
      2. Continuity: 𝒲 is continuous in 𝑼
      3. Convexity/concavity: The degree of concavity reflects society’s inequality aversion

Connection to the GUPF: The Grand Utility Possibility Frontier (GUPF) is the locus of Pareto-
efficient utility pairs (𝑈𝐴 , 𝑈𝐵 ) satisfying all three marginal conditions. Social welfare maximization
occurs at the point of tangency:


  Let’s work through this step by step. Starting from the problem of choosing the social
  optimum: 1. Society maximizes 𝒲(𝑈𝐴 , 𝑈𝐵 ) subject to the constraint that (𝑈𝐴 , 𝑈𝐵 ) lies on the GUPF
  2. The GUPF represents the maximum utility combinations feasible given all resource and
  technology constraints 3. Form the Lagrangian: ℒ = 𝒲(𝑈𝐴 , 𝑈𝐵 ) − 𝜆(GUPF constraint) 4. The first-
  order condition equates the marginal rate of substitution along the SWF to the slope of the
  GUPF 5. → Final form:
                                     max𝒲(𝑈𝐴 , 𝑈𝐵 )   s.t.   (𝑈𝐴 , 𝑈𝐵 ) ∈ GUPF
                                     𝑈𝐴 , 𝑈𝐵

  Here’s what’s really going on: Social welfare maximization is a constrained optimization
  problem: pick the feasible utility pair that reaches the highest social indifference curve, which
  occurs at tangency with the GUPF.


                                     max𝒲(𝑈𝐴 , 𝑈𝐵 )   s.t.   (𝑈𝐴 , 𝑈𝐵 ) ∈ GUPF
                                     𝑈𝐴 , 𝑈𝐵

The tangency condition 𝜕𝒲/𝜕𝑈
                       𝜕𝒲/𝜕𝑈 = Slope(GUPF)
                            𝐴
                                           determines the “bliss point” — the unique allocation
                                𝐵
that balances efficiency and equity according to the value judgements embedded in 𝒲.
Source: Koutsoyiannis, Ch.23, §A.6 (pp. 529-530); Munoz-Garcia, Ch.6, §6.4.2




Koutsoyiannis Insight: Deriving the GUPF via the Envelope Condition
Koutsoyiannis (Ch.23, §B.1) presents an elegant way to derive the GUPF. For each point on the PPC
(e.g., point 𝑎 with product-mix 𝑌0 𝑋0 ), construct the Edgeworth exchange box and locate the point
on the contract curve where 𝑀𝑅𝑆 = 𝑀𝑅𝑃𝑇 (i.e., where the indifference curve slope equals the PPC
slope at 𝑎). This single point on each UPF — and only this point — belongs to the envelope or
GUPF.
The GUPF is therefore not simply all UPFs combined, but the outer envelope of points satisfying
𝑀𝑅𝑃𝑇 = 𝑀𝑅𝑆. This ensures that along the GUPF, all three Pareto conditions hold simultaneously:
𝑀𝑅𝑆𝐴 = 𝑀𝑅𝑆𝐵 (exchange efficiency), 𝑀𝑅𝑇𝑆𝑋 = 𝑀𝑅𝑇𝑆𝑌 (production efficiency), and 𝑀𝑅𝑃𝑇 = 𝑀𝑅𝑆 (product-
mix efficiency).
Source: Koutsoyiannis, Ch.23, §B.1 (pp. 531-533)




Scitovsky Reversal Test — Numerical Example
Consider two states, 𝑆1 and 𝑆2 , with two consumers (A = rich, B = poor). The UPFs for the two
states intersect:


 State                                           𝑈𝐴                                𝑈𝐵

 𝑆1                                              100                               40

 𝑆2                                              80                                60


Forward test (𝑆1 → 𝑆2 ): A loses 20 utils, B gains 20 utils. Under K-H, if A’s WTA (willingness to
accept) the loss is, say, £20 (low MU of money for rich), and B’s WTP (willingness to pay) for the
  gain is £30 (high MU of money for poor), then £30 > £20 so the test passes — 𝑆2 is preferred.
  Reversal test (𝑆2 → 𝑆1 ): A gains 20 utils, B loses 20 utils. A’s WTP for the gain might be £15 (low
  MU), B’s WTA for the loss might be £40 (high MU). Now £40 > £15, so the reversal test also passes
  — 𝑆1 is preferred!
  This contradiction arises because the UPFs of 𝑆1 and 𝑆2 intersect, so the Kaldor-Hicks criterion is
  not transitive.
  Scitovsky’s Double Test resolves this: 1. Forward test: Gainers can compensate losers (K-H test
  passes) 2. Reversal test: Losers cannot bribe gainers to reject the change
  A change is welfare-improving only if (i) passes AND (ii) fails. In the example above, both tests
  pass, so the change is rejected as contradictory.
  Source: Koutsoyiannis, Ch.23, §5; Scitovsky (1941)



4.5 Assumptions of Social Welfare Maximization in the 2 × 2 × 2 Model

Why this matters for your exam: This checklist distinguishes assumptions needed for Pareto
optimality from those needed for full SW maximization. Many students lose marks by confusing
the two — make sure you know which assumptions are required for each stage.


 Category                                      Assumptions

                                               2 factors (𝐿, 𝐾, fixed supply); 2 goods (𝑋, 𝑌); 2
 Structure
                                               consumers (𝐴, 𝐵); each firm produces one good
                                                      𝐴    𝐵       𝑋        𝑌
 Efficiency (Pareto)                           𝑀𝑅𝑆 = 𝑀𝑅𝑆 , 𝑀𝑅𝑇𝑆 = 𝑀𝑅𝑇𝑆 , 𝑀𝑅𝑃𝑇 = 𝑀𝑅𝑆

                                               Price-taking, complete markets, no externalities, no
 Competition (for FWT)                         public goods, convex preferences/technology,
                                               perfect information, perfect factor mobility

                                               Existence of a SWF 𝐹(𝑈𝐴 , 𝑈𝐵 ), concave SWF, no
 Distributional (beyond Pareto)                interpersonal utility comparisons (the SWF embeds
                                               these as value judgements)


Key distinction: Assumptions for Pareto optimality (market structure, convexity, no
externalities) vs. additional assumptions for SW maximization (existence of SWF, value
judgements) — many students miss the second category.



4.6 Arrow’s Impossibility Theorem

Why this matters for your exam: Arrow’s theorem is a classic result that every economist
should know. You should be able to state the four conditions, explain why they cannot all be
satisfied simultaneously, and distinguish Bergson-Samuelson SWFs from Arrow’s aggregation
approach.
Arrow (1951) proved that no SWF can simultaneously satisfy: 1. Universal domain (all
possible preference profiles allowed) 2. Pareto principle (if everyone prefers 𝐴 to 𝐵, society
prefers 𝐴 to 𝐵) 3. Independence of irrelevant alternatives (social ranking of 𝐴 vs 𝐵 depends
only on individual rankings of 𝐴 vs 𝐵) 4. Non-dictatorship (no single individual’s preferences
determine social preferences)
Bergson-Samuelson SWF (used in optimization) vs. Arrow’s SWF (preference aggregation)
are fundamentally different concepts:
 Bergson-Samuelson                                                           Arrow

                                                                             Attempts to aggregate
 Assumes a social planner with explicit value judgements
                                                                             individual preferences

                                                                             Used for aggregation
 Used for constrained optimization (bliss point)
                                                                             rules

                                                                             Proves impossibility of
 Viable for policy analysis
                                                                             perfect aggregation




4.7 Key Formulas — Welfare Economics

Why this matters for your exam: This table summarizes all welfare criteria in one place — a
quick reference for comparing Pareto, Kaldor-Hicks, Scitovsky, Bergson, Utilitarian, and
Rawlsian approaches. Use it for last-minute revision.


                              Interpersonal               Complete           Distributional
 Criterion     Basis
                              comparisons?                ordering?          concern?

               Ordinal                                    No (only Pareto-
 Pareto                       No                                             None
               utility                                    rankable)

 Kaldor-       Money                                      Potentially        None (status quo
                              Implicit (via money)
 Hicks         metric                                     contradictory      accepted)

 Scitovsky     Money
                              Implicit                    Yes (consistent)   None
 double        metric

               SWF with
 Bergson                                                                     Explicit (via SWF
               value          Yes (embedded in SWF)       Yes
 SWF                                                                         shape)
               judgements

               Sum of                                                        Equity-blind (sum-
 Utilitarian                  Yes (cardinal)              Yes
               utilities                                                     ranking)

               Minimum
 Rawlsian                     Yes (ordinal)               Yes                Extreme (maximin)
               utility




Exam Checklist

          Define CV, EV, CS with correct utility anchors
          Know 𝐸𝑉 > 𝐶𝑆 > 𝐶𝑉 ordering for price decrease (normal goods)
          Cobb-Douglas welfare computation: 𝑒(𝑝, 𝑢) = 2𝑢√𝑝 𝑝 for 𝛼 = 1/2
                                                                1 2
          Willig bounds: CS approximates CV/EV within < 5% for realistic scenarios
                                         𝐴     𝐵      𝑋           𝑌
          Three Pareto conditions: 𝑀𝑅𝑆 = 𝑀𝑅𝑆 , 𝑀𝑅𝑇𝑆 = 𝑀𝑅𝑇𝑆 , 𝑀𝑅𝑃𝑇 = 𝑀𝑅𝑆
          Pareto necessary but not sufficient for SW maximization (GUPF-SWF tangency
     diagram)
          FWT: CE → PO (local non-satiation); SWT: PO → CE (convexity + transfers)
          Separation of efficiency and equity (Second Welfare Theorem)
          Utilitarian (linear, slope -1) vs Rawlsian (L-shaped) indifference curves
          Kaldor-Hicks: potential compensation, equal MU of money assumption, Scitovsky
     double test
          Pigouvian tax/subsidy algorithm: private optimum → social optimum → tax =
     marginal external effect → social dividend
          Arrow’s Impossibility: UD + P + IIA + ND cannot all be satisfied




Topic 5: General Equilibrium

  Exam weight: 14 marks (typically 1 question). Common question types: GE vs PE comparison,
  existence/uniqueness/stability analysis, Walras’ Law and numeraire, Edgeworth box problems with
  numerical solutions, the three Pareto conditions and welfare theorems. Key sources: Koutsoyiannis
  Ch.22-23, Munoz-Garcia §6.1-6.5




5.1 General Equilibrium vs Partial Equilibrium

Why this matters for your exam: Before you dive into the mechanics of GE, you need to see
how it differs from the partial equilibrium (PE) toolkit you already know. This comparison is a
staple short-answer question — get comfortable with the table below and the chain-reaction
example.
Definition: General equilibrium (GE) is a state in which all markets and all decision-making
units are simultaneously in equilibrium — every market cleared at positive prices, you (as a
consumer) maximize utility given your budget, and every firm maximizes profit given its
technology (Koutsoyiannis, Ch.22, p.486).
Let’s work through this step by step. We start with the definition of market-clearing: an
equilibrium price vector 𝑝* satisfies 𝐷𝑖 (𝑝* ) = 𝑆𝑖 (𝑝* ) for every good 𝑖:

   1. Define excess demand in market 𝑖 as 𝑧𝑖 (𝑝) = 𝐷𝑖 (𝑝) − 𝑆𝑖 (𝑝) — the difference between
     quantity demanded and supplied at price vector 𝑝.
   2. Market 𝑖 clears when 𝑧𝑖 (𝑝* ) = 0, i.e. demand equals supply.
   3. General equilibrium requires 𝑧𝑖 (𝑝) = 0 for all 𝑖 simultaneously, so ∑ 𝑧𝑖 (𝑝) = 0 is the system
                                                                                        𝑖
     of 𝑛 market-clearing conditions.
   4. → Compact notation: ∑ 𝑧𝑖 (𝑝) = 0 for all 𝑖, where 𝑧𝑖 (𝑝) = 𝐷𝑖 (𝑝) − 𝑆𝑖 (𝑝).
                                𝑖

Here’s what’s really going on: GE is a state where no excess demand or excess supply exists
in any market — all markets clear simultaneously at a positive price vector.
                           GE: ∑ 𝑧𝑖 (𝑝) = 0 for all 𝑖, where 𝑧𝑖 (𝑝) = 𝐷𝑖 (𝑝) − 𝑆𝑖 (𝑝)
                                    𝑖
The Arrow-Debreu (1954) existence proof formalises GE as a fixed point of the excess demand
mapping.


 Feature             Partial Equilibrium                            General Equilibrium

 Scope               Single market in isolation                     All markets simultaneously

 Feedback            Ignores cross-market effects                   Explicitly models interdependence

                     One price determined (ceteris                  All prices determined
 Prices
                     paribus)                                       simultaneously

 Equations           One supply = one demand                        System of simultaneous equations
 Feature            Partial Equilibrium                       General Equilibrium

                                                              Tax on tea -> tea price up -> coffee
                    Tax on tea -> price and quantity in       demand up -> factor reallocation ->
 Example
                    tea market only                           wage changes -> income effects ->
                                                              all markets adjust


GE Example: A drought destroys wheat harvest. PE: wheat price rises. GE: wheat price up ->
bread price up -> you substitute toward rice -> rice price up -> farmers shift land from cotton
to wheat -> cotton price up -> textile costs up -> clothing prices up -> factor markets adjust ->
wage/rental changes -> feedback to all markets.
Example from Koutsoyiannis (p. 491): An exogenous taste shift toward X (away from
substitute Y) raises 𝑃𝑥 , creates excess profits in X, losses in Y -> firms exit Y, enter X -> factor
demand shifts -> 𝑤 and 𝑟 change -> LAC shift -> new equilibrium with higher 𝑤, lower 𝑟,
different product mix.



5.2 Existence, Uniqueness, and Stability of Equilibrium

Why this matters for your exam: These three questions — Does an equilibrium exist? Is it
unique? Will the system get back there if shocked? — are the core theoretical concerns of GE.
You’ll be asked to reason through each one, often with supply-demand diagrams or excess-
demand functions.
The three fundamental problems of GE are best illustrated using a demand-supply framework
that extends to GE via excess demand functions (Koutsoyiannis pp. 489-491).
(i) Existence: Does any positive price clear all markets simultaneously?
In a standard D-S diagram, equilibrium exists if D and S intersect at a positive price. No
equilibrium exists if D and S do not intersect (e.g., backward-bending supply curve that lies
everywhere above D, or vertical S with D entirely below it).
In GE terms, existence requires continuous excess demand functions satisfying boundary
conditions. Arrow-Debreu (1954) proved existence under: perfect competition, no
indivisibilities, no increasing returns, continuous well-behaved production and demand
functions.
Sufficient conditions: - Continuity of excess demand - Homogeneity of degree zero - Walras’
Law - Boundary behaviour (𝑧𝑖 (𝑝) → +∞ as 𝑝𝑖 → 0)
(ii) Uniqueness: If equilibrium exists, is there exactly one?
Multiple equilibria arise if D and S intersect more than once. In terms of excess demand
𝐸(𝑃) = 𝑄𝐷(𝑃) − 𝑄𝑆(𝑃): there are as many equilibria as the number of times 𝐸(𝑃) intersects the
vertical price-axis. With a backward-bending supply curve (e.g., labour market), three
intersections are possible.
Equilibrium is unique if the excess demand function satisfies gross substitutability:
𝜕𝑧𝑖 (𝑝)/𝜕𝑝𝑗 > 0 for all 𝑖 ≠ 𝑗. This ensures the mapping is monotone (Koutsoyiannis, p.489).
Normal goods (downward-sloping D, upward-sloping S) guarantee 𝑑𝐸/𝑑𝑃 < 0 leading to
uniqueness. Giffen goods, backward-bending supply can create multiple crossings.
(iii) Stability: If displaced from equilibrium, does the system return?

     Stable equilibrium: D cuts S from above -> excess demand drives price up, excess
     supply drives it down (negative slope of 𝐸(𝑃) at equilibrium).
     Unstable equilibrium: D cuts S from below -> excess demand drives price down, excess
     supply drives it up (positive slope of 𝐸(𝑃) at equilibrium).
     Walrasian tatonnement: auctioneer adjusts prices proportionally to excess demand:
     ̇𝑝 = 𝑘 ⋅ 𝑧 (𝑝). Stable if 𝜕𝐸/𝜕𝑃 < 0 at equilibrium.
       𝑖   𝑖   𝑖

Formal tatonnement process (Munoz-Garcia §6.3; Koutsoyiannis pp.516-517): Walras’
adjustment mechanism posits an auctioneer who calls out prices and receives demand/supply
bids before any transactions occur (a “recontracting” assumption). Prices adjust according to:
Let’s work through this step by step. We start with Walras’ adjustment hypothesis —
market forces push prices toward equilibrium:
                   𝑑𝑝
   1. Define 𝑝̇ 𝑖 = 𝑑𝑡𝑖 as the instantaneous rate of change of 𝑝𝑖 over time.
   2. The tatonnement rule posits that price changes are proportional to excess demand: when
     demand exceeds supply (𝑧𝑖 > 0), price rises; when supply exceeds demand (𝑧𝑖 < 0), price
     falls.
   3. Introduce the adjustment speed parameter 𝑘𝑖 > 0, which may differ across markets.
   4. → Final form: 𝑝̇ 𝑖 = 𝑘𝑖 ⋅ 𝑧𝑖 (𝑝), with the sign of 𝑝̇ 𝑖 matching the sign of 𝑧𝑖 (𝑝).

Here’s what’s really going on: The auctioneer raises prices for goods in excess demand and
lowers them for goods in excess supply. At equilibrium (𝑧𝑖 = 0), prices stabilise ( ̇𝑝 = 0). This is a
                                                                                                  𝑖
dynamic adjustment process, not actual trading — recontracting ensures no transactions occur
at disequilibrium prices.
                                                 𝑑𝑝𝑖
                                        𝑝̇ 𝑖 =         = 𝑘𝑖 ⋅ 𝑧𝑖 (𝑝),   𝑘𝑖 > 0
                                                 𝑑𝑡
where 𝑝̇ is the time derivative of 𝑝 . The equilibrium 𝑝* is locally stable if the system
        𝑖                               𝑖
converges back to 𝑝* after a small perturbation. Using a linear approximation around 𝑝* ,
stability depends on the eigenvalues of the Jacobian matrix 𝐽𝑖𝑗 = 𝜕𝑧𝑖 /𝜕𝑝 at 𝑝* . A sufficient
                                                                                       𝑗
condition for stability is that all goods are gross substitutes (𝜕𝑧𝑖 /𝜕𝑝𝑗 > 0 for 𝑖 ≠ 𝑗), as Arrow
and Hurwicz (1958) established. Koutsoyiannis (p.517) summarises: “Under the usual
disequilibrium behaviour assumptions and the usual properties of a Walrasian general
equilibrium system an equilibrium is stable if all commodities are strict gross substitutes.”
Excess demand function approach (Q3 method): Define 𝐸(𝑃) = 𝑄𝐷 − 𝑄𝑆: - Existence: 𝐸(𝑃) = 0
at some 𝑃 > 0 (Intermediate Value Theorem) - Stability: sign of 𝑑𝐸/𝑑𝑃 at equilibrium (negative =
stable) - Uniqueness: monotonicity of 𝐸(𝑃)
Four cases to draw: (1) unique stable, (2) unique unstable, (3) multiple equilibria (alternating
stable/unstable), (4) no equilibrium.
Caution: Existence does not guarantee uniqueness (multiple equilibria possible with
backward-bending supply), and uniqueness does not guarantee stability.


  Munoz-Garcia Insight: Existence via Fixed-Point Theorem (§6.1, pp.332-335)
  The Arrow-Debreu (1954) existence proof transforms the equilibrium problem into a fixed-point
  problem. Define the aggregate excess demand function 𝑧(𝑝) = (𝑧1 (𝑝), 𝑧2 (𝑝), …, 𝑧𝐿 (𝑝)). The properties
  below guarantee existence of 𝑝* ≫ 0 such that 𝑧(𝑝* ) = 0:
                                                                        𝐿   𝐿
      1. z(p) is continuous on the price simplex Δ = {𝑝 ∈ ℝ+ + : ∑             𝑝 = 1} (follows from continuity
                                                                            𝑖=1 𝑖
        of Walrasian demands).
      2. z(p) is homogeneous of degree zero: 𝑧(𝜆𝑝) = 𝑧(𝑝) for all 𝜆 > 0, so we can normalise prices to
        lie in the unit simplex.
      3. Walras’ Law holds: 𝑝 ⋅ 𝑧(𝑝) = 0 for all 𝑝, so if 𝑧𝑖 (𝑝) ≠ 0 for some 𝑖, there must be offsetting
        signs elsewhere.
      4. Boundary behaviour: As 𝑝𝑖 → 0, 𝑧𝑖 (𝑝) → +∞ (you demand infinite amounts of a free good).

  Define a continuous mapping 𝑔: Δ → Δ by:
     Let’s work through this step by step. We start with the need to construct a continuous
     mapping whose fixed point corresponds to an equilibrium: 1. Normalise prices to the unit
                                   𝐿
     simplex Δ = {𝑝 ∈ ℝ+ + : ∑ 𝑝𝑖 = 1} — possible because 𝑧(𝑝) is HD(0), so only relative prices
     matter. 2. Construct 𝑔: Δ → Δ that increases prices of goods in excess demand and decreases
     (via normalisation) prices in excess supply. 3. For each good 𝑖: 𝑝𝑖 is adjusted upward by
     max⁡{0, 𝑧𝑖 (𝑝)} (the positive part of excess demand) if 𝑧𝑖 (𝑝) > 0; otherwise 𝑝𝑖 enters unchanged.
     4. The denominator 1 + ∑ max⁡{0, 𝑧𝑗 (𝑝)} ensures ∑ 𝑔 (𝑝) = 1, keeping the image in Δ. 5. →
                                               𝑗              𝑖                𝑖
                   𝑝𝑖 + max⁡{0, 𝑧𝑖 (𝑝)}
     𝑔𝑖 (𝑝) =         𝐿                      for each good 𝑖.
                1 + ∑𝑗 = 1 max⁡{0, 𝑧𝑗 (𝑝)}

     Here’s what’s really going on: 𝑔(𝑝) “raises” prices of goods with excess demand and
     “lowers” (via normalisation) prices of goods with excess supply. By Brouwer’s fixed-point
     theorem, 𝑔 has a fixed point 𝑝* = 𝑔(𝑝* ), which implies 𝑧(𝑝* ) = 0 — a Walrasian equilibrium.
                                                            𝑝𝑖 + max⁡{0, 𝑧𝑖 (𝑝)}
                                               𝑔𝑖 (𝑝) =                                for each good 𝑖
                                                          1 + ∑𝐿     max⁡{0, 𝑧𝑗 (𝑝)}
                                                               𝑗=1
     By Brouwer’s fixed-point theorem (every continuous function from a compact, convex set to
     itself has a fixed point), there exists 𝑝* such that 𝑔(𝑝* ) = 𝑝* . At this fixed point, the excess
     demand must satisfy 𝑧𝑖 (𝑝* ) ≤ 0 for all 𝑖, and by Walras’ Law, 𝑧𝑖 (𝑝* ) = 0 for all 𝑖 — a Walrasian
     equilibrium. (For correspondences, Kakutani’s fixed-point theorem generalises the result;
     Munoz-Garcia, Mathematical Appendix §A.12, pp.845-847.)




  Munoz-Garcia Insight: Gross Substitutability and Uniqueness (§6.2, pp.337-338)
  Proof by contradiction (Munoz-Garcia, p.337): Suppose 𝑝* ≫ 0 and 𝑝′ ≫ 0 are both Walrasian
  equilibrium price vectors, 𝑧(𝑝* ) = 𝑧(𝑝′ ) = 0, with 𝑝′ ≠ 𝑝* . Define 𝑚 = max⁡𝑗 (𝑝′𝑗 /𝑝*𝑗 ) > 1 (the largest price
  ratio). Let good 𝑘 be a good for which 𝑝′𝑘 /𝑝*𝑘 = 𝑚, so 𝑝′𝑘 = 𝑚𝑝*𝑘 while 𝑝′𝑗 ≤ 𝑚𝑝*𝑗 for all 𝑗 ≠ 𝑘. Now
  consider the price vector 𝑝̃ = (𝑚𝑝*1 , …, 𝑚𝑝*𝑘 − 1 , 𝑝*𝑘 , 𝑚𝑝*𝑘 + 1 , …, 𝑚𝑝*𝐿 ), i.e., raise all prices except good 𝑘
  by the factor 𝑚.
  By gross substitutability (𝜕𝑧𝑖 (𝑝)/𝜕𝑝𝑗 > 0 for 𝑖 ≠ 𝑗), increasing all 𝑝𝑗 (for 𝑗 ≠ 𝑘) must increase the
                                 ̃ > 𝑧𝑘 (𝑝* ) = 0. But 𝑧(⋅) is HD(0), so 𝑧𝑘 (𝑝)
  excess demand for good 𝑘: 𝑧𝑘 (𝑝)                                           ̃ = 𝑧𝑘 (𝑝′ ) (since 𝑝̃ and 𝑝′ differ
                                        ′                         ′
  only by scalar multiples). Hence 𝑧𝑘 (𝑝 ) > 0, contradicting 𝑧(𝑝 ) = 0. Therefore the equilibrium price
  vector is unique.
  Key implication: Gross substitutability + Walras’ Law + HD(0) ⇒ unique relative prices. The
  system determines 𝑛 − 1 relative prices uniquely.




5.3 Walras’ Law, Numeraire, and Excess Demand

Why this matters for your exam: Walras’ Law is the workhorse of every GE exam problem —
it tells you that one market-clearing equation is redundant, so you only need to solve 𝑛 − 1
equations. The numeraire trick lets you pin down relative prices. Expect to use both in
numerical problems.
Excess demand function for good 𝑖: 𝑧𝑖 (𝑝) = 𝐷𝑖 (𝑝) − 𝑆𝑖 (𝑝) (Koutsoyiannis, p.489). In a pure
exchange economy, 𝑧𝑖 (𝑝) = ∑ℎ 𝑥ℎ𝑖 (𝑝) − ∑ℎ 𝜔ℎ𝑖 .
Properties (Munoz-Garcia, §6.1, p.332-335): - Homogeneous of degree zero:
𝑧𝑖 (𝜆𝑝) = 𝑧𝑖 (𝑝) for all 𝜆 > 0 (only relative prices matter) - Walras’ Law: 𝑝 ⋅ 𝑧(𝑝) = 0 (aggregate
                                                                             𝐿
value of excess demand is zero) - Continuity: 𝑧𝑖 (𝑝) is continuous on ℝ+ + under standard utility
assumptions
Walras’ Law: The sum of the values of excess demands across all markets is identically zero:
Let’s work through this step by step. We start from individual budget constraints in a pure
exchange economy:
   1. Each of us (consumer ℎ) has a binding budget constraint: 𝑝 ⋅ 𝑥ℎ = 𝑝 ⋅ 𝜔ℎ (income
      exhaustion from local non-satiation).
   2. Consumer ℎ’s excess demand vector is 𝑧ℎ (𝑝) = 𝑥ℎ (𝑝) − 𝜔ℎ , so 𝑝 ⋅ 𝑧ℎ (𝑝) = 0 for each ℎ.
   3. Aggregate excess demand is 𝑧(𝑝) = ∑𝐻                   (𝑥ℎ (𝑝) − 𝜔ℎ ) = ∑𝐻ℎ = 1 𝑧ℎ (𝑝).
                                                       ℎ=1
   4. Summing the budget constraints: ∑𝐻                    𝑝 ⋅ 𝑧ℎ (𝑝) = 𝑝 ⋅ ∑𝐻ℎ = 1 𝑧ℎ (𝑝) = 𝑝 ⋅ 𝑧(𝑝) = 0.
                                                     ℎ=1
   5. Expanding the dot product: ∑𝑛         𝑝 ⋅ 𝑧𝑖 (𝑝) = 0.
                                        𝑖=1 𝑖
                      𝑛
   6. → Walras’ Law: ∑𝑖 = 1 𝑝𝑖 ⋅ 𝑧𝑖 (𝑝) = 0 for all 𝑝 ≫ 0.

Here’s what’s really going on: The aggregate value of excess demand is identically zero —
the economy’s total spending equals its total income. Excess demand in some markets (𝑧𝑖 > 0)
must be exactly offset by excess supply in others (𝑧𝑗 < 0). This is an identity, not an equilibrium
condition — it holds for every price vector.
                                            𝑛
                                           ∑ 𝑝𝑖 ⋅ 𝑧𝑖 (𝑝) = 0 for all 𝑝 ≫ 0
                                          𝑖=1
Proof from individual budget constraints (Munoz-Garcia, p.332): Each of us has utility
functions that are strictly increasing, so the budget constraint in the UMP binds:
Let’s work through this step by step. We start from your UMP with strictly increasing
(locally non-satiated) utility:

   1. You maximise 𝑢ℎ (𝑥ℎ ) subject to 𝑝 ⋅ 𝑥ℎ ≤ 𝑝 ⋅ 𝜔ℎ .
   2. If 𝑝 ⋅ 𝑥ℎ < 𝑝 ⋅ 𝜔ℎ , you have unspent income. With local non-satiation, there exists a strictly
      preferred bundle costing less than income, contradicting optimality.
   3. Therefore the budget constraint must bind at the optimum: you spend all income.
   4. → Income exhaustion: 𝑝 ⋅ 𝑥ℎ (𝑝) = 𝑝 ⋅ 𝜔ℎ .

Here’s what’s really going on: Non-satiation ensures that any free income would be spent on
additional consumption that raises utility. Hence all income is exhausted — the budget
constraint holds with equality for every consumer.
                                      𝑝 ⋅ 𝑥ℎ (𝑝) = 𝑝 ⋅ 𝜔ℎ     (income exhaustion)
Thus 𝑝 ⋅ (𝑥 − 𝜔 ) = 0 for each ℎ. The excess demand vector for consumer ℎ is 𝑧ℎ (𝑝) = 𝑥ℎ (𝑝) − 𝜔ℎ ,
           ℎ      ℎ

and summing the budget constraints over all 𝐻 consumers:
Let’s work through this step by step. We start from the individual binding budget
constraints for each consumer ℎ:

   1. For each ℎ: 𝑝 ⋅ 𝑥ℎ = 𝑝 ⋅ 𝜔ℎ , so 𝑝 ⋅ (𝑥ℎ − 𝜔ℎ ) = 0.
   2. Define 𝑧ℎ (𝑝) = 𝑥ℎ (𝑝) − 𝜔ℎ as consumer ℎ’s excess demand vector.
   3. Sum over all 𝐻 consumers: ∑𝐻                𝑝 ⋅ (𝑥ℎ − 𝜔ℎ ) = 𝑝 ⋅ ∑𝐻ℎ = 1 (𝑥ℎ − 𝜔ℎ ).
                                           ℎ=1
   4. The aggregate excess demand is 𝑧(𝑝) = ∑𝐻                     (𝑥ℎ − 𝜔ℎ ).
                                                             ℎ=1
   5. → ∑𝐻       𝑝 ⋅ (𝑥ℎ − 𝜔ℎ ) = 𝑝 ⋅ 𝑧(𝑝) = 0.
           ℎ=1

Here’s what’s really going on: Summing binding budget constraints across all consumers
yields Walras’ Law: the aggregate value of excess demand is identically zero. This is an
accounting identity — it holds for every price vector, not just at equilibrium.
                                  𝐻                           𝐻
                                  ∑ 𝑝 ⋅ (𝑥ℎ − 𝜔ℎ ) = 𝑝 ⋅ ∑ (𝑥ℎ − 𝜔ℎ ) = 𝑝 ⋅ 𝑧(𝑝) = 0
                                ℎ=1                          ℎ=1
Implication: If 𝑛 − 1 markets are in equilibrium, the 𝑛th market must also be in equilibrium —
one market-clearing equation is redundant. Therefore, only 𝑛 − 1 independent equations
determine 𝑛 − 1 relative prices. In a two-good economy, Walras’ Law implies 𝑝 𝑧1 (𝑝) = −𝑝 𝑧2 (𝑝):
                                                                                                      1       2
if good 1 is in excess demand (𝑧1 > 0), good 2 must be in excess supply (𝑧2 < 0); if market 1
clears (𝑧1 = 0), market 2 clears automatically (𝑧2 = 0).
Numeraire: Because Walras’ Law makes one equation redundant, absolute prices are
indeterminate. By setting one price as numeraire (𝑃1 = 1), the system determines 𝑛 − 1 relative
prices uniquely. Economically, only relative prices matter for allocation decisions — doubling
all prices leaves budget sets, demand, and excess demand unchanged (HD(0)). The choice of
numeraire is arbitrary; any good can serve as the unit of account (Koutsoyiannis, p.488;
Munoz-Garcia, p.333).
Example (3-good case): Set 𝑝 = 1, solve 𝑧2 (𝑝 , 𝑝 , 𝑝 ) = 0 and 𝑧3 (𝑝 , 𝑝 , 𝑝 ) = 0 for (𝑝 , 𝑝 ).
                                                     1       1   2   3          1   2   3           2   3
Then 𝑧1 = 0 automatically by Walras’ Law.
Worked Example — Three-Good Walrasian System (48-Masters-Final Q6b):
In a three-good world, the excess demand for good 2 is 𝑍2 (𝑃) = 2 − 𝑃2 /𝑃1 + 𝑃3 /𝑃1 and the excess
demand for good 3 is 𝑍3 (𝑃) = 3 − 𝑃3 /𝑃1 + 4𝑃2 /𝑃1 .
(i) Find 𝑍1 (𝑃) using Walras’ Law: 𝑃1 𝑍1 + 𝑃2 𝑍2 + 𝑃3 𝑍3 = 0
𝑍1 = − 𝑃𝑃21 𝑍2 − 𝑃𝑃31 𝑍3
𝑍1 = − 𝑃𝑃21 (2 − 𝑃𝑃21 + 𝑃𝑃31 ) − 𝑃𝑃31 (3 − 𝑃𝑃31 + 4 𝑃𝑃21 )
(ii) Solve for market-clearing price ratios:
Set 𝑍2 = 0: 2 − 𝑃2 /𝑃1 + 𝑃3 /𝑃1 = 0 -> 𝑃2 /𝑃1 = 2 + 𝑃3 /𝑃1
Set 𝑍3 = 0: 3 − 𝑃3 /𝑃1 + 4𝑃2 /𝑃1 = 0 -> substitute:
3 − 𝑃3 /𝑃1 + 4(2 + 𝑃3 /𝑃1 ) = 0 -> 3 − 𝑃3 /𝑃1 + 8 + 4𝑃3 /𝑃1 = 0 -> 11 + 3𝑃3 /𝑃1 = 0 -> 𝑃3 /𝑃1 = −11/3
𝑃2 /𝑃1 = 2 + (−11/3) = −5/3
𝑃3 /𝑃2 = (𝑃3 /𝑃1 )/(𝑃2 /𝑃1 ) = (−11/3)/(−5/3) = 11/5
Key insight: In an 𝑛-good Walrasian system, you only need to solve 𝑛 − 1 market-clearing
equations. The 𝑛th is automatically satisfied by Walras’ Law. Price levels are indeterminate —
only ratios matter.


5.4 The Edgeworth Box and the 2 × 2 × 2 Model

Why this matters for your exam: The Edgeworth box is your visual intuition for GE. You’ll
draw it, label contract curves, and use it to explain Pareto efficiency. The 2 × 2 × 2 model is the
exam’s favourite GE framework — master it and numerical problems become straightforward.
The 2 × 2 × 2 model is the canonical GE framework: 2 factors (L, K), 2 commodities (X, Y), 2
consumers (A, B), all under perfect competition (Koutsoyiannis, Ch.22, SE, pp.496-499).
Assumptions: 1. Fixed supplies of L and K; homogeneous, perfectly divisible. 2. Two
commodities X, Y; given technology; isoquants smooth, convex (diminishing MRTS); constant
returns to scale; no production externalities. 3. Two consumers A, B; ordinal convex
indifference curves (diminishing MRS); no consumption externalities (no
bandwagon/snob/Veblen effects). 4. You (consumers) maximize utility; firms maximise profit. 5.
Factors owned by you and other consumers; full employment; all income spent. 6. Perfect
competition in all markets.
Production Equilibrium via Edgeworth Box:
The Edgeworth production box has dimensions equal to total K (width) and total L (height). X-
isoquants originate from the SW corner (𝑂𝑋 ), Y-isoquants from the NE corner (𝑂𝑌 ).

         Contract curve (production): Locus of tangency points of X and Y isoquants ->
                   𝑋                𝑌
         MRTS𝐿𝐾 = MRTS𝐿𝐾 .
         Points ON the contract curve are Pareto-efficient in production: impossible to increase
         output of one good without reducing the other.
         Points OFF the curve are inefficient — reallocation can increase at least one output.
     In perfect competition, profit maximisation requires each firm to set MRTS = 𝑤/𝑟. Since
     𝑤/𝑟 is the same for both, equilibrium must lie on the contract curve.

General equilibrium of production condition:
Let’s work through this step by step. We start from cost minimisation by competitive firms:

   1. Firm X chooses labour 𝐿𝑋 and capital 𝐾𝑋 to minimise cost 𝑤𝐿𝑋 + 𝑟𝐾𝑋 subject to producing
                       ‾
     target output 𝑋.
   2. At the cost-minimising input mix, the isoquant is tangent to the isocost line: the slope of
                               𝑋
     the isoquant (MRTS𝐿𝐾 = −𝑑𝐾/𝑑𝐿|               ) equals the slope of the isocost (−𝑤/𝑟).
                                       isoquant
                                                    𝑋
   3. → Firm X’s optimality condition: MRTS𝐿𝐾 = 𝑤/𝑟.
                                   𝑌
   4. Similarly for firm Y: MRTS𝐿𝐾 = 𝑤/𝑟.
   5. Since both firms face the same factor prices 𝑤 and 𝑟 in competitive markets, their MRTS
     must be equal.
              𝑋            𝑌
   6. → MRTS𝐿, 𝐾 = MRTS𝐿, 𝐾 = 𝑤/𝑟.

Here’s what’s really going on: If MRTS differed across firms, total output could be increased
by reallocating inputs — moving a unit of labour from the low-MRTS firm to the high-MRTS
firm would increase output. Equalisation ensures production efficiency: the economy is on its
contract curve.
                                       MRTS𝐿, 𝐾 = MRTS𝐿, 𝐾 = 𝑤
                                           𝑋          𝑌
                                                             𝑟
The production equilibrium is not unique (any point on contract curve is Pareto-optimal). With
perfect competition, the specific point where MRTS = 𝑤/𝑟 is selected. The contract curve maps
to the Production Possibility Curve (PPC) in product space.
Mapping from contract curve to PPC (Koutsoyiannis, pp.535-538; Munoz-Garcia,
pp.448-450): Each point on the Edgeworth contract curve of production simultaneously
defines: (i) the allocation of K and L between the two industries; and (ii) the maximum output
pair (𝑋, 𝑌) that can be produced from these factor allocations. Plotting these output pairs in
(𝑋, 𝑌)-space traces out the Production Possibility Curve (PPC), also called the product
transformation curve. The slope of the PPC is the Marginal Rate of Product
Transformation (MRPT):
Let’s work through this step by step. We start from the Production Possibility Curve in
output space:

   1. The PPC traces maximum feasible 𝑌 for each level of 𝑋, given fixed total endowments of L
     and K and the available technology.
   2. The slope of the PPC at any point is 𝑑𝑌/𝑑𝑋, which is negative (producing more X requires
     sacrificing Y).
   3. Define MRPT as the absolute value of this slope: MRPT𝑥𝑦 = −𝑑𝑌/𝑑𝑋.
   4. By the envelope theorem, reallocating one unit of resources from Y to X: the cost of the
     marginal unit of X is 𝑀𝐶𝑋 , and the saving from reducing Y by one unit is 𝑀𝐶𝑌 . The trade-off
     is 𝑀𝐶𝑋 /𝑀𝐶𝑌 .
   5. → MRPT𝑥𝑦 = −𝑑𝑌/𝑑𝑋 = 𝑀𝐶𝑋 /𝑀𝐶𝑌 .

Here’s what’s really going on: MRPT measures the opportunity cost of producing an
additional unit of X — the amount of Y the economy must forgo. Under perfect competition,
this equals the price ratio 𝑃𝑋 /𝑃𝑌 since profit maximisation sets 𝑃 = 𝑀𝐶.
                                                         𝑀𝐶𝑋
                                         MRPT𝑥𝑦 = − 𝑑𝑌 =
                                                    𝑑𝑋 𝑀𝐶𝑌
Under constant returns to scale (CRS), the contract curve is a straight line from the origin
(the diagonal of the Edgeworth box) when isoquants are homothetic. This maps to a concave
PPC in product space, reflecting increasing opportunity cost: as the economy produces more
X, the marginal output of Y sacrificed rises because factors are not perfectly substitutable
across industries. With decreasing returns to scale (DRS), the PPC becomes even more
concave; with increasing returns to scale (IRS), the PPC may become convex, violating the
conditions required for competitive equilibrium existence (Arrow-Debreu assumes no
increasing returns).
Classification: The contract curve is unique only under CRS and homothetic isoquants. With
DRS or non-homothetic technology, the curve is non-linear.



5.5 The Transmission Mechanism: Product Market to Factor Market to GE

Why this matters for your exam: This is the story of how a shock ripples through the whole
economy. You’ll need to reproduce the 9-step sequence and explain who gains and who loses.
The Stolper-Samuelson and magnification results are classic exam favourites.
The transmission mechanism describes how an exogenous shock propagates through
interdependent markets to restore a new general equilibrium (Koutsoyiannis, Ch.22, SD,
pp.491-495).
The 9-step sequence:
Step 1: Initial equilibrium — all markets cleared at 𝑃𝑥0 , 𝑃𝑦0 , 𝑤0 , 𝑟0 .
Step 2: Exogenous taste change — you (consumers) shift toward X, away from Y. 𝐷𝑋 shifts
right, 𝐷𝑌 shifts left.
Step 3: Short-run product market — 𝑃𝑥 rises, 𝑄 increases. 𝑃𝑦 falls, 𝑄 decreases. Excess
                                                    𝑥                        𝑦
profits in X, losses in Y.
Step 4: Firm adjustment — X firms expand along rising MC; Y firms contract.
Step 5: Factor market effects (the transmission) — X industry expands -> demand for L and K
rises -> 𝑤𝑥 and 𝑟𝑥 rise. Y contracts -> demand for L and K falls -> 𝑤𝑦 and 𝑟𝑦 fall. Factor price
differential emerges.
Step 6: Factor mobility — L and K migrate from Y (low 𝑤, 𝑟) to X (high 𝑤, 𝑟).
Step 7: New factor price equalisation — with X less capital-intensive than Y: demand for L by X
exceeds release from Y -> 𝑤 rises overall; release of K from Y exceeds demand by X -> 𝑟 falls
overall. New equilibrium: 𝑤2 > 𝑤0 , 𝑟2 < 𝑟0 .
Step 8: Long-run product market adjustment — entry into X shifts 𝑆𝑋 down; exit from Y shifts
𝑆𝑌 up.
Step 9: New GE — all markets clear at (𝑃𝑥2 , 𝑃𝑦2 , 𝑤2 , 𝑟2 ), new product mix (𝑋2 > 𝑋0 , 𝑌2 < 𝑌0 ),
normal profits restored.
Stolper-Samuelson Theorem: An increase in the relative price of a good raises the real
return to the factor used intensively in its production and lowers the real return to the other
factor (Stolper & Samuelson, 1941; Koutsoyiannis, p.505).
Let’s work through this step by step. We start from the zero-profit condition in competitive
markets:

   1. In competitive equilibrium, 𝑃𝑋 = 𝑀𝐶𝑋 and 𝑃𝑌 = 𝑀𝐶𝑌 .
   2. From cost minimisation, 𝑀𝐶𝑋 depends on factor prices (𝑤, 𝑟) and the input coefficients
      (𝑎𝐿𝑋 , 𝑎𝐾𝑋 ): 𝑀𝐶𝑋 = 𝑤𝑎𝐿𝑋 + 𝑟𝑎𝐾𝑋 .
   3. An increase in 𝑃𝑋 /𝑃𝑌 makes X production more profitable → resources shift into X, out of Y.
   4. If X is labour-intensive (𝑎𝐿𝑋 /𝑎𝐾𝑋 > 𝑎𝐿𝑌 /𝑎𝐾𝑌 ), the relative demand for labour rises → 𝑤 rises
      relative to 𝑟.
   5. → 𝑃𝑃𝑋𝑌 ↑ (with X labour-intensive) ⇒ 𝑤𝑟 ↑ .
Here’s what’s really going on: The factor used intensively in the industry whose relative
price rises unambiguously gains, while the other factor loses. The change in factor prices is
magnified beyond the change in output prices (Jones’ magnification effect).
                                    𝑃𝑋
                               If      ↑ and 𝑋 is labour-intensive, then 𝑤
                                                                         𝑟 ↑
                                    𝑃𝑌
                                                    ̂       ̂
Magnification effect (Jones algebra): 𝑤̂ > 𝑃𝑋 > 𝑃𝑌 > 𝑟̂ in proportional terms.
Key insight: Factor intensities determine the final 𝑤/𝑟 outcome. If both industries had the
same K/L ratio, factor prices would return to original levels — the permanent change in factor
prices is driven by different factor intensities.



5.6 The Three Pareto Efficiency Conditions

Why this matters for your exam: These three conditions are the backbone of welfare
economics. You’ll need to state each one, derive it from a Lagrangian, and link them to the
First and Second Welfare Theorems. This is the most likely source of a derivation question.
For a general equilibrium to be Pareto-optimal, three marginal conditions must hold
simultaneously (Koutsoyiannis, Ch.23, pp.524-532; Munoz-Garcia, §6.5, p.380):
                                                                𝐴           𝐵
1. Efficiency in exchange (consumption): MRS𝑥𝑦 = MRS𝑥𝑦 = 𝑃𝑥 /𝑃𝑦 — the marginal rate at
which you are willing to trade X for Y must be equal across all consumers. Achieved on the
Edgeworth contract curve of consumption.
                                                                    𝑋           𝑌
2. Efficiency in production (factor allocation): MRTS𝐿𝐾 = MRTS𝐿𝐾 = 𝑤/𝑟 — the marginal rate
at which factors can be substituted must be equal across all firms. Achieved on the Edgeworth
contract curve of production.
3. Efficiency in product-mix (top-level): MRPT𝑥𝑦 = MRS𝑥𝑦 — the rate at which the economy
can transform X into Y (slope of the PPC) must equal your marginal willingness to trade (as a
consumer). In perfect competition: MRPT = 𝑀𝐶𝑥 /𝑀𝐶𝑦 = 𝑃𝑥 /𝑃𝑦 = MRS.
                                                        𝐴               𝐵
The three Pareto conditions together: 1. MRS𝑥𝑦 = MRS𝑥𝑦 (efficient distribution of goods) 2.
      𝑋            𝑌
MRTS𝐿𝐾 = MRTS𝐿𝐾 (efficient factor allocation) 3. MRPT𝑥𝑦 = MRS𝑥𝑦 (efficient output mix — the
Fundamental Condition of Pareto Optimality)
First Welfare Theorem (FWT): Every competitive equilibrium satisfies these three
conditions and is therefore Pareto-efficient (requires LNS preferences, no externalities,
complete markets).
Second Welfare Theorem (SWT): Any Pareto-efficient allocation can be decentralised as a
competitive equilibrium with appropriate lump-sum transfers (requires convexity of
preferences and production sets).
Diagrammatic summary: The PPC in product space with slope = MRPT, tangent to a
community indifference curve with slope = MRS. At the tangency point E:
               𝐴         𝐵
MRPT𝑥𝑦 = MRS𝑥𝑦 = MRS𝑥𝑦 = 𝑃𝑥 /𝑃𝑦 .
Formal derivation from Lagrangian optimisation (Munoz-Garcia §6.5, pp.380-390):
Condition 1 — Efficiency in exchange: A social planner maximises a weighted sum of
utilities subject to the resource constraint:
Let’s work through this step by step. We start from the social planner’s allocation problem
— find all Pareto-efficient distributions of goods:

   1. The planner assigns Pareto weights 𝛼ℎ > 0 to each consumer ℎ and maximises the
                                          𝐻
     weighted sum of utilities 𝑊 = ∑ℎ = 1 𝛼ℎ 𝑢ℎ (𝑥1ℎ , …, 𝑥𝐿ℎ ).
   2. Varying the weights (𝛼1 , …, 𝛼𝐻 ) traces out the entire Pareto frontier.
  3. The resource constraints require that for each good 𝑖, total consumption ∑ 𝑥𝑖ℎ does not
                                                                                                             ℎ
     exceed total endowment ∑ℎ 𝜔𝑖ℎ .
  4. → Maximise 𝑊 subject to 𝐿 inequality constraints, one per good.

Here’s what’s really going on: The Pareto problem allocates goods across consumers to
maximise social welfare at given weights. Each solution corresponds to a Pareto-efficient
allocation where no consumer can be made better off without making another worse off.
                                                        𝐻                               𝐻               𝐻
                                     max
                                      𝑥
                                         𝑊 = ∑ 𝛼ℎ 𝑢ℎ (𝑥1ℎ , …, 𝑥𝐿ℎ ) s.t.              ∑ 𝑥𝑖ℎ ≤ ∑ 𝜔𝑖ℎ ∀𝑖
                                      𝑖ℎ               ℎ=1                             ℎ=1             ℎ=1
The Lagrangian is:
Let’s work through this step by step. We start from the constrained maximisation above:

  1. Assign Lagrange multiplier 𝜆𝑖 ≥ 0 to each resource constraint ∑ℎ 𝑥𝑖ℎ ≤ ∑ℎ 𝜔𝑖ℎ .
  2. The Lagrangian adds each constraint (rearranged as slack) to the objective:
     ℒ = 𝑊 + ∑𝑖 𝜆𝑖 ( ∑ℎ 𝜔𝑖ℎ − ∑ℎ 𝑥𝑖ℎ ).
  3. The term 𝜆𝑖 ( ∑ 𝜔𝑖ℎ − ∑ 𝑥𝑖ℎ ) penalises violation of the resource constraint for good 𝑖 — if
                                ℎ                  ℎ
     ∑ℎ 𝑥𝑖ℎ > ∑ℎ 𝜔𝑖ℎ , the slack is negative and the objective is reduced.
                   𝐻                               𝐿              𝐻        𝐻
  4. → ℒ = ∑ℎ = 1 𝛼ℎ 𝑢ℎ (⋅) + ∑𝑖 = 1 𝜆𝑖 ( ∑ℎ = 1 𝜔𝑖ℎ − ∑ℎ = 1 𝑥𝑖ℎ ).

Here’s what’s really going on: The Lagrangian transforms the constrained problem into an
unconstrained one. Each 𝜆𝑖 is the shadow price — the marginal social value of an additional
unit of endowment of good 𝑖.
                                                             𝐻         𝐿          𝐻           𝐻
                                                   ℒ = ∑ 𝛼ℎ 𝑢ℎ (⋅) + ∑ 𝜆𝑖 ( ∑ 𝜔𝑖ℎ − ∑ 𝑥𝑖ℎ )
                                                            ℎ=1       𝑖=1        ℎ=1         ℎ=1
FOC for consumer ℎ and goods 𝑖, 𝑗:
Let’s work through this step by step. We start from the Lagrangian and differentiate with
respect to consumption 𝑥𝑖ℎ :

      𝜕ℒ      𝜕𝑢ℎ
  1. 𝜕𝑥
       𝑖ℎ
         = 𝛼ℎ 𝜕𝑥  − 𝜆𝑖 = 0: the marginal social benefit of giving consumer ℎ more of good 𝑖 (
                       𝑖ℎ
     𝛼ℎ ⋅ 𝑀𝑈𝑖ℎ ) equals the shadow cost 𝜆𝑖 .
                             𝜕ℒ       𝜕𝑢ℎ
  2. Similarly for good 𝑗: 𝜕𝑥    = 𝛼ℎ 𝜕𝑥   − 𝜆𝑗 = 0.
                              𝑗ℎ        𝑗ℎ

  3. → Two first-order conditions linking marginal utilities to shadow prices.

Here’s what’s really going on: The planner allocates each good to each consumer up to the
point where the weighted marginal utility just equals the social opportunity cost of using that
good. The shadow prices 𝜆𝑖 are common across all consumers because resources are freely
reallocable.
                                                𝜕ℒ = 𝛼 𝜕𝑢ℎ − 𝜆 = 0,             𝜕ℒ = 𝛼 𝜕𝑢ℎ − 𝜆 = 0
                                                      ℎ       𝑖                       ℎ       𝑗
                                               𝜕𝑥𝑖ℎ     𝜕𝑥𝑖ℎ                   𝜕𝑥𝑗ℎ     𝜕𝑥𝑗ℎ
Dividing the FOCs for goods 𝑖 and 𝑗 for the same consumer ℎ:
Let’s work through this step by step. We start from the two FOCs and eliminate the
consumer-specific weight 𝛼ℎ :

  1. From FOC𝑖 : 𝛼ℎ ⋅ 𝜕𝑢ℎ /𝜕𝑥𝑖ℎ = 𝜆𝑖 ⇒ 𝜕𝑢ℎ /𝜕𝑥𝑖ℎ = 𝜆𝑖 /𝛼ℎ .
  2. From FOC𝑗 : 𝛼ℎ ⋅ 𝜕𝑢ℎ /𝜕𝑥𝑗ℎ = 𝜆𝑗 ⇒ 𝜕𝑢ℎ /𝜕𝑥𝑗ℎ = 𝜆𝑗 /𝛼ℎ .
               𝜕𝑢ℎ /𝜕𝑥𝑖ℎ
  3. Dividing: 𝜕𝑢  /𝜕𝑥
                         = 𝜆𝜆𝑖 /𝛼
                            ℎ  /𝛼
                                 ℎ
                                𝑗ℎ
                                   = 𝜆𝜆𝑖 . 𝑗   ℎ        𝑗
                                                                                                   ℎ
  4. The LHS is precisely the marginal rate of substitution MRS𝑖𝑗 between goods 𝑖 and 𝑗 for
     consumer ℎ.
               ℎ
  5. → MRS𝑖𝑗 = 𝜆𝑖 /𝜆𝑗 .

Here’s what’s really going on: At a Pareto optimum, each consumer’s MRS between any two
goods equals the ratio of the shadow prices of those goods. Since 𝜆𝑖 and 𝜆𝑗 are common across
all consumers (they come from the resource constraints, not individual preferences), all
consumers must have the same MRS.
                                                     𝜕𝑢ℎ /𝜕𝑥𝑖ℎ  𝜆
                                                               = 𝑖 ≡ MRSℎ𝑖𝑗
                                                     𝜕𝑢ℎ /𝜕𝑥𝑗ℎ 𝜆𝑗
Since the RHS 𝜆𝑖 /𝜆𝑗 is the same for all consumers ℎ, we obtain:
                                                                                            ℎ
Let’s work through this step by step. We start from MRS𝑖𝑗 = 𝜆𝑖 /𝜆𝑗 for each consumer ℎ:

   1. The ratio 𝜆𝑖 /𝜆𝑗 depends only on the resource constraints and Pareto weights — it is not
     consumer-specific.
                                                                  𝐴                              𝐵
   2. For any two consumers A and B: MRS𝑖𝑗 = 𝜆𝑖 /𝜆𝑗 and MRS𝑖𝑗 = 𝜆𝑖 /𝜆𝑗 .
   3. The right-hand sides are identical, so the left-hand sides must be equal.
              𝐴               𝐵
   4. → MRS𝑖𝑗 = MRS𝑖𝑗 for all consumers A, B and all good pairs i, j.
                                                          𝐴                  𝐵
Here’s what’s really going on: If MRS > MRS , consumer A values good 𝑖 more relative to
good 𝑗 than B does. A Pareto improvement is possible: A gives 𝑗 to B, B gives 𝑖 to A, making
both better off. Equal MRS across all consumers is the necessary condition for exchange
efficiency.
                                              MRS𝐴𝑖𝑗 = MRS𝐵𝑖𝑗              for all consumers 𝐴, 𝐵
Condition 2 — Efficiency in production: We choose input allocations (𝑘𝑗𝑓 , 𝑙𝑗𝑓 ) for firms 𝑓
producing goods 𝑗 to maximise total output:
Let’s work through this step by step. We start from the problem of allocating scarce factors
across firms to maximise output value:

   1. The planner chooses capital 𝑘𝑗𝑓 and labour 𝑙𝑗𝑓 for each firm 𝑗 producing good 𝑗.
   2. The objective is total output value ∑𝑀                              𝑝𝑗 𝑓𝑗 (𝑘𝑗𝑓 , 𝑙𝑗𝑓 ) at given output prices.
                                                              𝑗=1
                                                                      ‾                                            ‾
   3. Constraints: total capital used ∑ 𝑘𝑗𝑓 ≤ 𝐾 and total labour used ∑ 𝑙𝑗𝑓 ≤ 𝐿.
                                                      𝑗                                                    𝑗
   4. → Maximise output value subject to factor endowment constraints.

Here’s what’s really going on: This determines the efficient allocation of inputs across
production activities. Under competitive markets, each firm hires factors until the value of the
marginal product equals the factor price, decentralising the planner’s solution.
                                          𝑀                                          𝑀       ‾        𝑀        ‾
                                  max ∑ 𝑝𝑗 𝑓𝑗 (𝑘𝑗𝑓 , 𝑙𝑗𝑓 ) s.t.                      ∑ 𝑘𝑗𝑓 ≤ 𝐾, ∑ 𝑙𝑗𝑓 ≤ 𝐿
                                       𝑗=1                                       𝑗=1                 𝑗=1
The FOCs imply:
Let’s work through this step by step. We start from the production efficiency problem and
consider two firms X and Y producing different goods:

   1. For firm X, the FOC for labour: 𝑝 ⋅ 𝜕𝑓𝑋 /𝜕𝑙𝑋 = 𝜇 (where 𝜇 is the Lagrange multiplier on the
                                                      𝑋
     labour constraint).
   2. For firm X, the FOC for capital: 𝑝 ⋅ 𝜕𝑓𝑋 /𝜕𝑘𝑋 = 𝜈 (where 𝜈 is the Lagrange multiplier on the
                                                      𝑋
     capital constraint).
                𝜕𝑓𝑋 /𝜕𝑙𝑋
   3. Dividing: 𝜕𝑓  /𝜕𝑘 = 𝜇/𝜈.
                      𝑋   𝑋
                            𝜕𝑓𝑌 /𝜕𝑙𝑌
   4. Similarly for firm Y: 𝜕𝑓  /𝜕𝑘
                                     = 𝜇/𝜈.
                                      𝑌       𝑌

   5. The RHS 𝜇/𝜈 is common across firms (same shadow prices of labour and capital), so the
     LHS must be equal.
   6. The LHS is the MRTS (the rate at which labour can substitute for capital while holding
     output constant).
                  𝑋               𝑌
   7. → MRTS𝐿𝐾 = MRTS𝐿𝐾 .
                                                              𝑋                  𝑌
Here’s what’s really going on: If MRTS > MRTS , moving a unit of capital from Y to X (and
labour from X to Y) would increase total output. Equalisation of MRTS across firms is the
necessary condition for production efficiency.
                               𝜕𝑓𝑋 /𝜕𝑙𝑋  𝜕𝑓 /𝜕𝑙
                                        = 𝑌 𝑌          ⇒   MRTS𝑋𝐿𝐾 = MRTS𝑌𝐿𝐾
                               𝜕𝑓𝑋 /𝜕𝑘𝑋 𝜕𝑓𝑌 /𝜕𝑘𝑌
Condition 3 — Efficiency in product-mix: The MRPT between goods X and Y from the
production side equals the common MRS among consumers:
Let’s work through this step by step. We start from the requirement that production and
consumption decisions be coordinated:

   1. On the production side, the economy transforms X into Y at rate
      MRPT𝑥𝑦 = −𝑑𝑌/𝑑𝑋|PPC = 𝑀𝐶𝑋 /𝑀𝐶𝑌 .
   2. On the consumption side, you (as a consumer) trade X for Y at rate MRS𝑥𝑦 = 𝑀𝑈𝑋 /𝑀𝑈𝑌 .
   3. For Pareto efficiency, the rate at which the economy can transform X into Y must equal
      the rate at which you are willing to substitute X for Y — otherwise a reallocation of
      resources between sectors could make everyone better off.
   4. Under perfect competition, profit maximisation sets 𝑃𝑋 = 𝑀𝐶𝑋 and 𝑃𝑌 = 𝑀𝐶𝑌 , so
      MRPT𝑥𝑦 = 𝑀𝐶𝑋 /𝑀𝐶𝑌 = 𝑃𝑋 /𝑃𝑌 .
   5. Utility maximisation sets MRS𝑥𝑦 = 𝑃𝑋 /𝑃𝑌 .
   6. → MRPT𝑥𝑦 = 𝑀𝐶𝑋 /𝑀𝐶𝑌 = 𝑃𝑋 /𝑃𝑌 = MRS𝑥𝑦 .

Here’s what’s really going on: If MRPT>MRS , the economy could produce one less X
(saving 𝑀𝐶𝑋 ) and one more Y (costing 𝑀𝐶𝑌 ). The saved resources from reducing X exceed what
you (as consumers) need to compensate for losing X — a Pareto improvement. Equality of
MRPT and MRS ensures the output mix is socially optimal.
                                                   𝑀𝐶𝑋 𝑃𝑋
                              MRPT𝑥𝑦 = − 𝑑𝑌 |    =    =   = MRS𝑥𝑦
                                         𝑑𝑋 PPC 𝑀𝐶𝑌 𝑃𝑌
In perfect competition, 𝑃𝑋 = 𝑀𝐶𝑋 and 𝑃𝑌 = 𝑀𝐶𝑌 , so MRPT = 𝑃𝑋 /𝑃𝑌 = MRS, ensuring the top-level
efficiency condition holds automatically.


5.7 Numerical Edgeworth Box Problem

Why this matters for your exam: Numerical GE problems are pure formula application — if
you can find MRS, set them equal, and check feasibility, you can nail these. The Cobb-Douglas
vs linear utility case is a common setup that tests your ability to spot corner solutions.
Given (Koutsoyiannis, Ch.22): - A: 𝑈𝑎 = 𝑋𝑎 ⋅ 𝑌𝑎 (Cobb-Douglas) - B: 𝑈𝐵 = 𝑋𝐵 + 𝑌𝐵 (perfect
                                                   0        0       0      0
substitutes — linear utility) - Endowments: 𝑋𝑎 = 10, 𝑌𝑎 = 50; 𝑋𝐵 = 50, 𝑌𝐵 = 10 - Total X = 60, Total
Y = 60
(a) Edgeworth box dimensions: Width = 60 (total X), Height = 60 (total Y).
(b) Pareto efficiency condition: - For A: 𝑀𝑅𝑆𝑎 = 𝑀𝑈𝑥 /𝑀𝑈𝑦 = 𝑌𝑎 /𝑋𝑎 (from 𝑈𝑎 = 𝑋𝑎 ⋅ 𝑌𝑎 ) - For B:
𝑀𝑅𝑆𝐵 = 1/1 = 1 (from 𝑈𝐵 = 𝑋𝐵 + 𝑌𝐵 ) - Pareto efficiency: 𝑀𝑅𝑆𝑎 = 𝑀𝑅𝑆𝐵 -> 𝑌𝑎 /𝑋𝑎 = 1 -> 𝑌𝑎 = 𝑋𝑎
If B is at a corner (consuming only one good), 𝑀𝑅𝑆𝐵 may not equal 1 at the boundary. B with
perfect substitutes will consume the cheaper good exclusively unless prices equalise MRS
exactly.
Contract curve: For interior allocations: 𝑌𝑎 = 𝑋𝑎 (where 0 ≤ 𝑋𝑎 ≤ 60, 0 ≤ 𝑌𝑎 ≤ 60).
(c) Check endowment point (𝑋𝑎 = 10, 𝑌𝑎 = 50): 𝑀𝑅𝑆𝑎 = 50/10 = 5 ≠ 1 = 𝑀𝑅𝑆𝐵 . Since 𝑀𝑅𝑆𝑎 > 𝑀𝑅𝑆𝐵 ,
A values Y much more relative to X than B does. Gains from trade exist: A should give up Y for
X from B. The endowment is not Pareto-efficient.
𝑈𝑎 (10, 50) = 500; 𝑈𝐵 (50, 10) = 60
(d) Is (𝑋𝑎 = 80, 𝑌𝑎 = 50) feasible? No — total X = 60, so 𝑋𝑎 cannot be 80. Infeasible and
outside the Edgeworth box.
(e) Core of the economy: The set of all feasible allocations that cannot be improved upon by
any coalition of agents. An allocation (𝑥𝐴 , 𝑥𝐵 ) is in the core if it is feasible, individually rational (
𝑈𝐴 (𝑥𝐴 ) ≥ 𝑈𝐴 (𝜔𝐴 ) and 𝑈𝐵 (𝑥𝐵 ) ≥ 𝑈𝐵 (𝜔𝐵 )), and coalition-proof. The competitive equilibrium lies in the
core. In a two-person exchange economy, the core coincides with the contract curve allocations
that are individually rational.
Exam Tip: For Cobb-Douglas vs linear utility, the contract curve is derived by equating MRS.
Check corner solutions — B’s linear utility often leads to corner consumption. Always verify
feasibility first.
Fully-Solved 2 × 2 × 2 Competitive Equilibrium Example (Munoz-Garcia §6.4, Example
6.6, pp.343-346):
Consider a pure exchange economy with two goods (1, 2) and two consumers (A, B), both with
Cobb-Douglas utility 𝑢𝑖 (𝑥𝑖1 , 𝑥𝑖2 ) = 𝑥𝑖1 𝑥𝑖2 . Endowments: 𝑒𝐴 = (100, 350), 𝑒𝐵 = (100, 50). Solve for the
Walrasian equilibrium.
Step 1: Set up the UMP for consumer A.
Let’s work through this step by step. We start from consumer A’s utility maximisation given
endowment (100, 350):
                                                 𝐴       𝐴       𝐴       𝐴 𝐴
   1. A’s utility is Cobb-Douglas: 𝑢 (𝑥1 , 𝑥2 ) = 𝑥1 𝑥2 .
   2. A’s income (endowment value): 𝑝1 (100) + 𝑝2 (350).
                         𝐴 𝐴             𝐴                   𝐴
   3. The UMP: max⁡𝑥1 𝑥2 s.t. 𝑝1 𝑥1 + 𝑝2 𝑥2 = 100𝑝1 + 350𝑝2 .
                         𝐴
   4. Tangency: MRS = 𝑥𝐴2 /𝑥𝐴1 = 𝑝 /𝑝 (from Cobb-Douglas) ⇒ 𝑝 𝑥𝐴1 = 𝑝 𝑥𝐴2 .
                                             1       2                                           1               2
   5. Substitute into the budget constraint: 𝑝 𝑥𝐴1 + 𝑝 𝑥𝐴1 = 2𝑝 𝑥𝐴1 = 100𝑝 + 350𝑝 .
                                                                         1           1       1                   1       2
   6. Solve: 𝑥𝐴1 = 50 + 175𝑝 /𝑝 and (by symmetry) 𝑥𝐴2 = 175 + 50𝑝 /𝑝 .
                               2    1                                                            1       2

Here’s what’s really going on: With Cobb-Douglas utility, A spends equal shares of income
on each good. A’s large endowment of good 2 (350) gives her higher income, enabling more
consumption of both goods.
                               max
                               𝐴 𝐴
                                   𝑥𝐴1 𝑥𝐴2           s.t.        𝑝1 𝑥𝐴1 + 𝑝2 𝑥𝐴2 = 𝑝1 (100) + 𝑝2 (350)
                               𝑥1 , 𝑥2
                               𝐴
Tangency condition: MRS = 𝑥𝐴2 /𝑥𝐴1 = 𝑝 /𝑝      ⇒ 𝑝1 𝑥𝐴1 = 𝑝2 𝑥𝐴2 . Budget constraint:
                                          1 2
                                                                                                                                             𝑝
𝑝1 𝑥1 + 𝑝2 𝑥2 = 100𝑝1 + 350𝑝2 . Substituting 𝑝2 𝑥𝐴2 = 𝑝1 𝑥𝐴1 : 2𝑝1 𝑥𝐴1 = 100𝑝1 + 350𝑝2 ⇒
    𝐴       𝐴
                                                                                                                             𝑥𝐴1 = 50 + 175 𝑝21 .
                    𝑝
Then 𝑥𝐴2 = 175 + 50 𝑝12 .
Step 2: Set up the UMP for consumer B. Tangency condition:
     𝐵
MRS = 𝑥𝐵2 /𝑥𝐵1 = 𝑝1 /𝑝2 ⇒ 𝑝1 𝑥𝐵1 = 𝑝2 𝑥𝐵2 . Budget constraint: 𝑝1 𝑥𝐵1 + 𝑝2 𝑥𝐵2 = 100𝑝1 + 50𝑝2 .
                                                      𝑝                        𝑝
Substituting: 2𝑝 𝑥𝐵1 = 100𝑝 + 50𝑝 ⇒ 𝑥𝐵1 = 50 + 25 𝑝21 . Then 𝑥𝐵2 = 25 + 50 𝑝12 .
                 1         1        2
Step 3: Impose market-clearing conditions. Good 1 market: 𝑥𝐴1 + 𝑥𝐵1 = 100 + 100 = 200.
Let’s work through this step by step. We start from individual demand functions and the
market-clearing condition:

   1. Total demand for good 1: 𝑥𝐴1 + 𝑥𝐵1 = (50 + 175𝑝 /𝑝 ) + (50 + 25𝑝 /𝑝 ).
                                                                                 2       1           2       1
   2. Simplify: = 100 + (175 + 25)𝑝 /𝑝 = 100 + 200𝑝 /𝑝 .
                                             2       1                         2     1
   3. Total supply of good 1: 𝜔𝐴1 + 𝜔𝐵1 = 100 + 100 = 200.
   4. Market-clearing requires total demand = total supply: 100 + 200𝑝 /𝑝 = 200.
                                                                                                                 2   1
                     𝑝              𝑝                                𝑝
   5. → (50 + 175 𝑝21 ) + (50 + 25 𝑝21 ) = 100 + 200 𝑝21 = 200.

Here’s what’s really going on: The market-clearing condition for good 1 yields one equation
in the relative price 𝑝2 /𝑝1 . By Walras’ Law, the good 2 market automatically clears when good 1
does — only one price ratio needs to be determined.
                                          𝑝               𝑝                𝑝
                                (50 + 175 𝑝2 ) + (50 + 25 𝑝2 ) = 100 + 200 𝑝2 = 200
                                                     1                       1                   1
Let’s work through this step by step. We start from the market-clearing equation and solve
for the equilibrium price ratio:

   1. From 100 + 200(𝑝2 /𝑝1 ) = 200, subtract 100 from both sides: 200(𝑝2 /𝑝1 ) = 100.
   2. Divide both sides by 200: 𝑝 /𝑝 = 100/200 = 1/2.
                                               2   1
   3. Invert the ratio: 𝑝 /𝑝 = 2.
                               1   2
   4. → Equilibrium relative prices: good 1 is twice as expensive as good 2.

Here’s what’s really going on: The price ratio 𝑝1 /𝑝2 = 2 reflects the relative scarcity and
marginal rates of substitution at equilibrium. Consumer A has a large endowment of good 2
(350) and low endowment of good 1 (100), so good 1 commands a premium.
                                                𝑝          𝑝        𝑝
                                            200 𝑝2 = 100 ⇒ 𝑝2 = 1 ⇒ 𝑝1 = 2
                                                 1          1   2    2
Step 4: Compute equilibrium allocations.
Let’s work through this step by step. We start from A’s demand for good 1 and substitute
the equilibrium price ratio 𝑝 /𝑝 = 1/2:
                                       2   1

   1. 𝑥𝐴1 * = 50 + 175(𝑝 /𝑝 ) = 50 + 175(1/2) = 50 + 87.5 = 137.5.
                           2   1
   2. → A consumes 137.5 units of good 1 at equilibrium.

Here’s what’s really going on: A’s large endowment of good 2 gives her substantial
purchasing power. At the equilibrium price ratio, she chooses 137.5 units of good 1 — more
than her initial endowment of 100 — financing the extra by selling good 2.
                                           𝑥𝐴1 * = 50 + 175 ⋅ 1 = 50 + 87.5 = 137.5
                                                              2
Let’s work through this step by step. We start from A’s demand for good 2 and substitute
the equilibrium price ratio 𝑝 /𝑝 = 2:
                                       1   2

   1. 𝑥𝐴2 *   = 175 + 50(𝑝1 /𝑝2 ) = 175 + 50(2) = 175 + 100 = 275.
   2. → A consumes 275 units of good 2 at equilibrium.

Here’s what’s really going on: A starts with 350 units of good 2 and consumes 275 — she
sells 75 units to finance her purchase of good 1. Her total spending equals her total income,
satisfying the budget constraint with equality.
                                           𝑥𝐴2 * = 175 + 50 ⋅ 2 = 175 + 100 = 275
Let’s work through this step by step. We start from B’s demand for good 1 and substitute
𝑝2 /𝑝1 = 1/2:
        𝐵*
   1. 𝑥1      = 50 + 25(𝑝2 /𝑝1 ) = 50 + 25(1/2) = 50 + 12.5 = 62.5.
   2. → B consumes 62.5 units of good 1 at equilibrium.

Here’s what’s really going on: B has a smaller endowment than A (only 50 of good 2) and
thus lower purchasing power. B’s consumption of good 1 (62.5) is less than A’s (137.5) but still
more than his initial endowment of 100 — he must sell good 2 to finance the excess.
                                               𝑥𝐵1 * = 50 + 25 ⋅ 1 = 50 + 12.5 = 62.5
                                                                 2
Let’s work through this step by step. We start from B’s demand for good 2 and substitute
𝑝1 /𝑝2 = 2:
        𝐵*
   1. 𝑥2      = 25 + 50(𝑝1 /𝑝2 ) = 25 + 50(2) = 25 + 100 = 125.
   2. → B consumes 125 units of good 2 at equilibrium.
Here’s what’s really going on: B starts with 50 units of good 2 and consumes 125 — he buys
75 additional units. His good 1 consumption falls from 100 to 62.5 (sells 37.5), financing the
good 2 purchase. The trades of A and B exactly offset: A sells 75 of good 2 to B, B sells 37.5 of
good 1 to A.
                                       𝑥𝐵2 * = 25 + 50 ⋅ 2 = 25 + 100 = 125
Step 5: Verify Walras’ Law.
𝑝 ⋅ 𝑧(𝑝) = 𝑝1 (137.5 + 62.5 − 200) + 𝑝2 (275 + 125 − 400) = 𝑝1 (0) + 𝑝2 (0) = 0.
Step 6: Welfare properties. The WEA is ((137.5, 275); (62.5, 125); 𝑝1 /𝑝2 = 2). This allocation lies
on the contract curve 𝑥𝐴2 = 2𝑥𝐴1 (since 275 = 2 × 137.5) and is Pareto-efficient. It also lies in the
core because it is individually rational: 𝑢𝐴 (137.5, 275) = 37, 812.5 > 𝑢𝐴 (100, 350) = 35, 000 and
𝑢𝐵 (62.5, 125) = 7, 812.5 > 𝑢𝐵 (100, 50) = 5, 000. Both consumers are strictly better off at the WEA
than at their endowments.
Exam Tip: The ratio 𝑝1 /𝑝2 = 2 means good 1 is twice as expensive as good 2. Consumer A, with
a large endowment of good 2 (350 units), has higher income and consumes more of both
goods. The equilibrium price ratio equalises MRS across consumers and clears both markets
simultaneously.



5.8 How GE Is Reached: The Walrasian System

Why this matters for your exam: This section ties everything together — you see how
production, consumption, and factor markets all lock into place simultaneously. The equation-
counting exercise is a classic way to understand why you can set one price as numeraire.
The Walrasian system (Koutsoyiannis pp. 497-509):
Unknowns (18): Quantities demanded of X and Y by A and B (4), quantities supplied of L and
K by A and B (4), quantities demanded of L and K by X and Y firms (4), quantities supplied of X
and Y by firms (2), prices of X and Y (2), prices of L and K (2). Total: 18
Equations (18): Demand functions of A and B for X and Y (4), supply functions of L and K by A
and B (4), demand functions for L and K by firms (4), supply functions of X and Y by firms (2),
market-clearing equations for X and Y (2), market-clearing equations for L and K (2). Total: 18
Does a GE solution exist? Equality of equations and unknowns is neither necessary nor
sufficient. Three issues: 1. Walras’ Law: One equation is redundant — if 𝑛 − 1 markets clear,
the 𝑛th must also clear. Independent equations = 17 vs 18 unknowns. 2. Numeraire: One price
set = 1, reducing unknowns to 17. Now 17 = 17 -> determinate in relative prices. 3. Non-
negativity: Prices and quantities must be ≥ 0. Equation-counting doesn’t guarantee this.
Koutsoyiannis on the Walrasian system (Ch.22, pp.486-488): The Walrasian system is the
most ambitious general equilibrium model. Walras (1874) argued that all prices and quantities
in all markets are determined simultaneously through their interaction. The behaviour of each
decision-maker is presented by a set of equations: each consumer has demand equations for
commodities and supply equations for factor services; each firm has output supply equations
and factor demand equations. The key characteristic is simultaneity — every variable appears
in every equation through general interdependence. Walras counted equations and unknowns,
concluding that 𝑛 independent equations in 𝑛 unknowns (after normalising one price) would
yield a determinate solution. However, Koutsoyiannis (p.488) emphasises: “Even if there is
equality of independent equations and unknowns, there is no guarantee that a general
equilibrium solution exists.” The need for a true existence proof was not met until Arrow and
Debreu (1954).
How GE is reached (6 steps): 1. Production side: Firms choose K/L mix such that
MRTS𝑋𝐿𝐾 = MRTS𝑌𝐿𝐾 = 𝑤/𝑟 -> Edgeworth contract curve. 2. Product transformation: Contract
curve maps to PPC. Firms choose output where MRPT = 𝑃𝑥 /𝑃𝑦 . 3. Consumption side: You
                                       𝐴         𝐵
(consumers) maximize utility: MRS = MRS = 𝑃𝑥 /𝑃𝑦 -> Edgeworth contract curve of
                                                                    𝐴         𝐵
consumption. 4. Simultaneous equilibrium: MRPT = MRS = MRS = 𝑃𝑥 /𝑃𝑦 ensures
consistency. 5. Factor and commodity prices: Determined (as ratios with numeraire) by
MRTS conditions, marginal productivity conditions (𝑤 = MPP𝐿 ⋅ 𝑃, 𝑟 = MPP𝐾 ⋅ 𝑃), and MRS
conditions. 6. Income distribution: Determined by factor ownership distribution, consistent
with equilibrium consumption.
Arrow-Debreu (1954) existence proof requires: perfect competition, no indivisibilities, no
increasing returns, continuous convex preferences and production sets, well-behaved excess
demand functions.


  Koutsoyiannis on Limitations (Ch.22, pp.488-489): “The available ‘existence proofs’ do not
  hold for the typical real world cases of discontinuities and indivisibilities in production processes.
  Our current state of knowledge does not enable us to be sure of the existence of a general
  equilibrium in the real world, which is dominated by oligopolistic firms and production processes
  characterised by indivisibilities.” However, the proof for perfectly competitive economies with no
  indivisibilities and no increasing returns is “very important, because a perfectly competitive system
  has certain ideal properties: it results in an efficient allocation of resources.”




5.9 GE and Consumption Externalities

Why this matters for your exam: This is the “however” paragraph — the three neat Pareto
conditions break down when your consumption affects others. Examiners love asking you to
identify which welfare theorem fails and why.
The 2 × 2 × 2 model assumes away consumption externalities (assumption 3: consumer choices
are independent). If introduced:

  1. Pareto conditions break down: MRS depends on others’ consumption:
     MRS𝐴 = MRS𝐴 (𝑋𝐴 , 𝑌𝐴 , 𝑋𝐵 , 𝑌𝐵 ). Equality MRS𝐴 = MRS𝐵 is no longer sufficient.
  2. Missing market: The externality is an untraded interdependence — no market price for
     A’s influence on B’s utility. FWT fails.
  3. Specific effects: Bandwagon (over-consumption, more elastic demand), Snob (under-
     consumption, less elastic demand), Veblen (price as status signal).
  4. Mathematically: 𝑈𝐴 = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 , 𝑋𝐵 , 𝑌𝐵 ) requires additional conditions on cross-partials for
     Pareto efficiency. The standard condition is necessary but no longer sufficient.

Conclusion: The GE solution may still exist but will NOT be Pareto-optimal. The three
marginal conditions fail when externalities are present.




Topic 6: Game Theory & Industrial Organization

  Exam weight: 14 marks (typically 1 question). Common question types: Nash equilibrium
  calculation (Bertrand/Cournot), prisoners’ dilemma and oligopoly, extensive form entry games with
  backward induction, repeated games with grim trigger (discount factor threshold), centipede game
  paradox. Key sources: Koutsoyiannis Ch.11, Munoz-Garcia Ch.8 & Ch.10, Fudenberg & Tirole
  Ch.1,3,5




6.1 Nash Equilibrium
Why this matters for your exam: Nash equilibrium is the single most important concept in
game theory. Almost every exam question — Bertrand, Cournot, entry games, repeated games
— comes back to checking whether a strategy profile is a Nash equilibrium. Master this
definition cold.
Definition (Nash, 1950): A strategy profile (𝑠*1 , 𝑠*2 , …, 𝑠*𝑛 ) such that no player can gain by
unilaterally deviating:


    Let’s work through this step by step. We start with the principle of rational self-interested play
    — each player 𝑖 chooses 𝑠𝑖 to maximise their own payoff 𝑢𝑖 , taking opponents’ strategies 𝑠−𝑖 as
    given: 1. Player 𝑖’s optimisation problem: max⁡𝑠𝑖 ∈ 𝑆𝑖 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 ) 2. At a Nash equilibrium
    𝑠* = (𝑠*1 , …, 𝑠*𝑛 ), all 𝑛 players are simultaneously solving this problem 3. Hence 𝑠*𝑖 must yield at least
    as high a payoff as any alternative 𝑠𝑖 , holding 𝑠*−𝑖 fixed: 𝑢𝑖 (𝑠*𝑖 , 𝑠*−𝑖 ) ≥ 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 ) 4. This must hold for
    every player 𝑖 and every possible deviation 𝑠𝑖 ∈ 𝑆𝑖 5. → Final form:
                                       𝑢𝑖 (𝑠*𝑖 , 𝑠*−𝑖 ) ≥ 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 ) for all 𝑠𝑖 ∈ 𝑆𝑖 and all 𝑖
    Here’s what’s really going on: No player can improve their payoff by changing strategy alone.
    Each strategy is a best response to the others’. The equilibrium is a “mutual best response” — a
    fixed point of the best-response correspondence.


Best Response: Player 𝑖’s best response 𝐵𝑅𝑖 (𝑠−𝑖 ) is the set of strategies that maximise 𝑖’s
payoff given opponents’ strategies:


    Let’s work through this step by step. We start with player 𝑖’s payoff-maximisation problem for a
    fixed 𝑠−𝑖 : 1. For a given 𝑠−𝑖 , player 𝑖 solves max⁡𝑠𝑖 ∈ 𝑆𝑖 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 ) 2. The solution to this problem is
    (potentially) a set of strategies that all achieve the maximum 3. This set is the best response
    correspondence: all 𝑠𝑖 that are optimal against 𝑠−𝑖 4. →
                                                  𝐵𝑅𝑖 (𝑠−𝑖 ) = arg⁡max 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 )
                                                                  𝑠𝑖 ∈ 𝑆𝑖

    Here’s what’s really going on: 𝐵𝑅𝑖 maps opponents’ strategies to your optimal replies. A Nash
    equilibrium occurs when 𝑠*𝑖 ∈ 𝐵𝑅𝑖 (𝑠*−𝑖 ) for all 𝑖 — each player’s strategy is a best response to the
    others’.


                                                                                                  *          *
A Nash equilibrium is a fixed point of the best-response correspondence: 𝑠𝑖 ∈ 𝐵𝑅𝑖 (𝑠−𝑖 ) for all 𝑖
.
Classification: - Pure strategy NE: You choose a single deterministic action. - Mixed
strategy NE: You randomise over actions with a probability distribution. Exists in every finite
game (Nash, 1950). - Strict NE: 𝑢𝑖 (𝑠*𝑖 , 𝑠*−𝑖 ) > 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 ) for all 𝑠𝑖 ≠ 𝑠*𝑖 . - Weak NE:
𝑢𝑖 (𝑠*𝑖 , 𝑠*−𝑖 ) ≥ 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 ) for all 𝑠𝑖 .
Finding NE in pure strategies: For each cell in the payoff matrix, check if any player can
improve by unilaterally switching strategies. A cell is NE if both players are playing best
responses to each other.


    Munoz-Garcia Insight: Nash Existence Theorem (Ch.8, §8.1; Math Appendix §A.12)
    Nash (1950) proved that every finite game has at least one Nash equilibrium (in pure or mixed
    strategies). The proof applies Kakutani’s fixed-point theorem:
    Define the best-response correspondence 𝐵𝑅: 𝑆 → 𝑆 as the product of individual best responses:


       Let’s work through this step by step. We start with the individual best-response
       correspondences 𝐵𝑅𝑖 (𝑠−𝑖 ): 1. Define the joint correspondence 𝐵𝑅: 𝑆 → 𝑆 as the Cartesian
       product of each player’s best response: 𝐵𝑅(𝑠) = ×𝑛𝑖 = 1 𝐵𝑅𝑖 (𝑠−𝑖 ) 2. A Nash equilibrium 𝑠* requires
       𝑠*𝑖 ∈ 𝐵𝑅𝑖 (𝑠*−𝑖 ) for every player 𝑖 3. This is equivalent to the profile-level condition 𝑠* ∈ 𝐵𝑅(𝑠* ) —
       a fixed point of 𝐵𝑅 4. →
                                                   𝐵𝑅(𝑠) = ×𝑛𝑖 = 1 𝐵𝑅𝑖 (𝑠−𝑖 )
  Here’s what’s really going on: The Nash equilibrium is a fixed point of the product best-
  response correspondence. Kakutani’s fixed-point theorem guarantees existence when 𝐵𝑅 is
  upper hemicontinuous, non-empty, and convex-valued.


A Nash equilibrium is a fixed point of 𝐵𝑅: a strategy profile 𝑠* such that 𝑠* ∈ 𝐵𝑅(𝑠* ).
Kakutani’s fixed-point theorem states: If 𝐹: 𝐴 → 𝐴 is an upper-semicontinuous and convex-valued
correspondence on a nonempty, compact, convex set 𝐴, then 𝐹 has at least one fixed point 𝑥* ∈ 𝐴
such that 𝑥* ∈ 𝐹(𝑥* ).
Three conditions must hold for 𝐵𝑅(𝑠): 1. Non-empty: 𝐵𝑅𝑖 (𝑠−𝑖 ) ≠ ⌀ for all 𝑖 — guaranteed when
strategy sets are compact and payoff functions are continuous (Weierstrass extreme value
theorem). 2. Convex-valued: 𝐵𝑅𝑖 (𝑠−𝑖 ) is a convex set — guaranteed when 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 ) is
quasiconcave in 𝑠𝑖 . 3. Upper hemicontinuous: 𝐵𝑅𝑖 (⋅) is UHC — guaranteed when 𝑢𝑖 is
continuous (by the theorem of the maximum).
Since all three conditions hold for finite games with continuous, quasiconcave payoffs, Kakutani’s
theorem guarantees a fixed point 𝑠* ∈ 𝐵𝑅(𝑠* ), which is precisely a Nash equilibrium.
Here’s what’s really going on: The best-response correspondence maps each strategy profile to
the set of profiles that are mutual best responses. A fixed point occurs where the graph of 𝐵𝑅
crosses the 45-degree line, i.e., where each player’s strategy is a best response to everyone else’s.
Brouwer’s fixed-point theorem (for functions) is a special case; Kakutani’s extends the result to
correspondences, which are needed because 𝐵𝑅𝑖 may contain multiple equally good strategies.



Munoz-Garcia Insight: Mixed Strategy Nash Equilibrium (Ch.8, §8.1.1)
Definition: A strategy profile 𝜎 = (𝜎1 , 𝜎2 , …, 𝜎𝑛 ), where 𝜎𝑖 is a probability distribution over 𝑆𝑖 , is a
mixed strategy Nash equilibrium (msNE) iff:


  Let’s work through this step by step. We start with the Nash equilibrium definition
  extended to allow randomised strategies: 1. Let 𝜎𝑖 be a probability distribution (mixed
  strategy) over pure strategies 𝑆𝑖 2. Player 𝑖’s expected payoff from 𝜎𝑖 given opponents’
  mixtures 𝜎−𝑖 is 𝜋𝑖 (𝜎𝑖 , 𝜎−𝑖 ) 3. A msNE requires no profitable deviation to any pure strategy
  𝑠′𝑖 ∈ 𝑆𝑖 4. This is sufficient because if no pure-strategy deviation is profitable, no mixed
  deviation can be either (expected payoff of a mixture is a convex combination of pure-strategy
  payoffs) 5. →
                                  𝜋𝑖 (𝜎𝑖 , 𝜎−𝑖 ) ≥ 𝜋𝑖 (𝑠′𝑖 , 𝜎−𝑖 )   for all 𝑠′𝑖 ∈ 𝑆𝑖 and all 𝑖
  Here’s what’s really going on: In a mixed-strategy NE, each player’s mixture makes the
  opponent indifferent among the pure strategies they randomise over. The indifference
  condition pins down the mixing probabilities. Strictly dominated strategies receive zero
  probability.


Key properties: 1. If a player randomises, they must be indifferent among all pure strategies
played with positive probability — otherwise they would put 100% on the strictly better one. 2.
Strictly dominated strategies receive zero probability in any msNE. 3. Finite games have an odd
number of equilibria (counting pure and mixed).
Technology Adoption Game (Munoz-Garcia, Table 8.2a):

                         Firm B
                 Adopt       Not adopt
Firm A    --------------------------
Adopt      | (3, 1)          (0, 0)
Not adopt | (0, 0)           (1, 3)

This game has two pure-strategy NEs: (Adopt, Adopt) and (Not adopt, Not adopt). There is also a
mixed-strategy NE.
Let 𝑝 be the probability Firm A adopts, and 𝑞 the probability Firm B adopts. Indifference
condition for Firm A:
  Let’s work through this step by step. We start with the mixed-strategy NE indifference
  condition — if Firm A randomises, it must be indifferent between Adopt and Not adopt: 1.
  Compute Firm A’s expected payoff from Adopt given B adopts with prob 𝑞:
  𝐸𝑈𝐴 (Adopt) = 3𝑞 + 0(1 − 𝑞) = 3𝑞 2. Compute Firm A’s expected payoff from Not adopt:
  𝐸𝑈𝐴 (Not adopt) = 0𝑞 + 1(1 − 𝑞) = 1 − 𝑞 3. Indifference requires 𝐸𝑈𝐴 (Adopt) = 𝐸𝑈𝐴 (Not adopt) 4.
  Solving 3𝑞 = 1 − 𝑞 gives 𝑞 = 1/4 5. → Firm A’s indifference pins down Firm B’s mixing probability,
  not its own
  Here’s what’s really going on: In mixed-strategy NE, each player’s mixing probability makes
  the other player indifferent. Firm A’s indifference condition determines 𝑞 (B’s adoption
  probability), not 𝑝 (A’s own probability). This is the key insight of the indifference method.


                                       𝐸𝑈𝐴 (Adopt) = 𝐸𝑈𝐴 (Not adopt)


  Let’s work through this step by step. We substitute the payoff matrix values into the
  indifference condition: 1. If Firm B adopts (prob 𝑞): Firm A’s payoffs are 3 (Adopt) and 0 (Not
  adopt) 2. If Firm B does not adopt (prob 1 − 𝑞): Firm A’s payoffs are 0 (Adopt) and 1 (Not adopt)
  3. Expected value of Adopt: 3𝑞 + 0(1 − 𝑞); Not adopt: 0𝑞 + 1(1 − 𝑞) 4. → Indifference requires
  3𝑞 + 0(1 − 𝑞) = 0𝑞 + 1(1 − 𝑞)
  Here’s what’s really going on: Each term is the product of the payoff in that state and the
  probability of that state. This expands the formal indifference condition using the specific
  payoffs from the technology adoption game.


                                        3𝑞 + 0(1 − 𝑞) = 0𝑞 + 1(1 − 𝑞)


  Let’s work through this step by step. We simplify the indifference equation algebraically: 1.
  3𝑞 + 0(1 − 𝑞) = 3𝑞 and 0𝑞 + 1(1 − 𝑞) = 1 − 𝑞 2. Setting them equal: 3𝑞 = 1 − 𝑞 3. Solving:
  3𝑞 + 𝑞 = 1 → 4𝑞 = 1 → 𝑞 = 1/4 4. → 3𝑞 = 1 − 𝑞 ⇒ 𝑞 = 1/4
  Here’s what’s really going on: Firm B must adopt with probability exactly 1/4 for Firm A to
  be indifferent between adopting and not adopting. If 𝑞 > 1/4, Firm A strictly prefers to Adopt; if
  𝑞 < 1/4, Firm A strictly prefers Not adopt.


                                          3𝑞 = 1 − 𝑞   ⇒     𝑞=1
                                                               4
Indifference condition for Firm B:


  Let’s work through this step by step. We apply the same indifference principle to Firm B: 1.
  Compute Firm B’s expected payoff from Adopt given A adopts with prob 𝑝:
  𝐸𝑈𝐵 (Adopt) = 1𝑝 + 0(1 − 𝑝) = 𝑝 2. Compute Firm B’s expected payoff from Not adopt:
  𝐸𝑈𝐵 (Not adopt) = 0𝑝 + 3(1 − 𝑝) = 3(1 − 𝑝) 3. Indifference requires 𝑝 = 3(1 − 𝑝) 4. Solving:
  𝑝 = 3 − 3𝑝 → 4𝑝 = 3 → 𝑝 = 3/4 5. → Firm B’s indifference pins down Firm A’s mixing probability
  𝑝 = 3/4
  Here’s what’s really going on: Firm B (which prefers opposite actions — payoff 3 when
  firms choose different actions) randomises with low probability of Adopt (𝑞 = 1/4). Firm A
  (which prefers coordinated outcomes — payoff 3 when both adopt) randomises with high
  probability of Adopt (𝑝 = 3/4). The msNE is (𝑝, 𝑞) = (3/4, 1/4).


                                       𝐸𝑈𝐵 (Adopt) = 𝐸𝑈𝐵 (Not adopt)


  Let’s work through this step by step. We substitute the payoff matrix values for Firm B: 1.
  If Firm A adopts (prob 𝑝): Firm B’s payoffs are 1 (Adopt) and 0 (Not adopt) 2. If Firm A does
  not adopt (prob 1 − 𝑝): Firm B’s payoffs are 0 (Adopt) and 3 (Not adopt) 3. Expected value of
  Adopt: 1𝑝 + 0(1 − 𝑝) = 𝑝; Not adopt: 0𝑝 + 3(1 − 𝑝) = 3(1 − 𝑝) 4. → Indifference requires
  1𝑝 + 0(1 − 𝑝) = 0𝑝 + 3(1 − 𝑝)
        Here’s what’s really going on: Firm B’s payoffs are structured so it prefers the opposite
        action from Firm A. When A adopts, B prefers Not adopting (payoff 0 vs 1); when A does not
        adopt, B prefers adopting (payoff 3 vs 0).


                                                  1𝑝 + 0(1 − 𝑝) = 0𝑝 + 3(1 − 𝑝)


        Let’s work through this step by step. We simplify Firm B’s indifference equation
        algebraically: 1. 1𝑝 + 0(1 − 𝑝) = 𝑝 and 0𝑝 + 3(1 − 𝑝) = 3 − 3𝑝 2. Setting them equal: 𝑝 = 3 − 3𝑝 3.
        Solving: 𝑝 + 3𝑝 = 3 → 4𝑝 = 3 → 𝑝 = 3/4 4. → 𝑝 = 3 − 3𝑝 ⇒ 𝑝 = 3/4
        Here’s what’s really going on: Firm A must adopt with probability exactly 3/4 for Firm B to
        be indifferent. The full msNE is (𝑝, 𝑞) = (3/4, 1/4) — Firm A randomises with high probability of
        Adopt (it prefers coordinated outcomes), while Firm B randomises with low probability of
        Adopt (it prefers opposite actions).


                                                    𝑝 = 3 − 3𝑝 𝑝=3   ⇒
                                                                  4
  Mixed-strategy NE: ( 34 Adopt, 14 Not adopt) for Firm A, ( 14 Adopt, 34 Not adopt) for Firm B.
  Here’s what’s really going on: Firm A (which prefers coordinated outcomes) randomises with
  high probability of Adopt; Firm B (which prefers opposite actions) randomises with low probability
  of Adopt. The indifference method works because each player’s mixing probability must make the
  other player indifferent.




6.2 Dominant Strategies and the Prisoners’ Dilemma

Why this matters for your exam: The prisoners’ dilemma is the most frequently tested game
in oligopoly questions. Examiners love asking you to spot the PD structure in a pricing or
advertising game, then discuss how repeated interaction can resolve the dilemma.
Dominant strategy: A strategy 𝑠*𝑖 is dominant if it yields a strictly higher payoff than any
other strategy regardless of what opponents do (Fudenberg & Tirole, SS1.1):


  Let’s work through this step by step. We start with the definition of a strictly dominant strategy
  — one that outperforms all alternatives no matter what opponents choose: 1. For a given player 𝑖,
  compare strategy 𝑠*𝑖 against any alternative 𝑠𝑖 ≠ 𝑠*𝑖 2. The comparison must hold for every
  possible opponent strategy profile 𝑠−𝑖 ∈ 𝑆−𝑖 3. If 𝑢𝑖 (𝑠*𝑖 , 𝑠−𝑖 ) > 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 ) for all 𝑠𝑖 ≠ 𝑠*𝑖 and all 𝑠−𝑖 ,
  then 𝑠*𝑖 strictly dominates 𝑠𝑖 4. →
                                  𝑢𝑖 (𝑠*𝑖 , 𝑠−𝑖 ) > 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 )   for all 𝑠𝑖 ≠ 𝑠*𝑖 and all 𝑠−𝑖
  Here’s what’s really going on: A dominant strategy is optimal regardless of what others do —
  you don’t need any beliefs or conjectures about opponents’ behaviour. If all players have a
  dominant strategy, the outcome is a dominant-strategy equilibrium, which is a particularly
  strong solution concept (no need for equilibrium reasoning).


Prisoners’ Dilemma (PD): A 2 × 2 game where each player has a dominant strategy (Defect),
yet mutual defection is Pareto-inferior to mutual cooperation (Koutsoyiannis, p.412-413).
Payoff matrix (years in prison — lower is better):

                         Prisoner B
                    Confess     Don't Confess
Prisoner A      ------------------------------
Confess         |   (5, 5)        (0, 10)
Don't           | (10, 0)         (1, 1)

Canonical PD normal form (higher = better):
                Cooperate       Defect
Cooperate        (R, R)         (S, T)
Defect          (T, S)          (P, P)

with 𝑇 > 𝑅 > 𝑃 > 𝑆 (temptation > reward > punishment > sucker payoff) and (𝑇 + 𝑆)/2 < 𝑅 (to
prevent alternating cooperation).

      Dominant strategy for each: Defect.
      Yet mutual defection (𝑃, 𝑃) is worse than mutual cooperation (𝑅, 𝑅). Hence the “dilemma.”

Exam Question — Prisoners’ Dilemma in Oligopoly (46 Final Q4b): The PD captures the
fragility of oligopolistic collusion — each firm has an individual incentive to undercut, even
though all would be better off maintaining high prices.
Implications for oligopoly: 1. Price competition: Firms have incentive to undercut each
other. NE is low-price, low-profit (Bertrand paradox) even though collusion would yield higher
joint profits. 2. Advertising wars: Firms advertise because rival will if they don’t, but mutual
advertising reduces profits (arms race). 3. Investment/R&D: Each firm fears being left behind
→ overinvestment. 4. Tacit collusion is fragile: The PD structure makes cooperation hard to
sustain without repeated interaction.
Why oligopoly differs from PD: In repeated games, punishment strategies (grim trigger, tit-
for-tat) can sustain cooperation. If the game is infinitely repeated and players are sufficiently
                                      *
patient (discount factor 𝛿 > 𝛿 ), the cooperative outcome can be an SPNE (Folk Theorem).



6.3 Bertrand Duopoly

Why this matters for your exam: Bertrand competition is a staple exam problem. You’ll be
asked to compute the Nash equilibrium prices, quantities, and profits. The key twist: with
differentiated products, firms earn positive profits; with homogeneous goods, they earn zero
(the Bertrand paradox).
Bertrand competition with differentiated products (46 Final Q4a):
Market: 𝑞 = 100 − 2𝑝 + 𝑝 , 𝑞 = 100 − 2𝑝 + 𝑝 ; MC = 10 for both firms.
            1               1     2   2       2    1
Step 1: Profit functions. 𝜋1 = (𝑝 − 10)(100 − 2𝑝 + 𝑝 ) 𝜋2 = (𝑝 − 10)(100 − 2𝑝 + 𝑝 )
                                          1             1    2          2                 2   1
Step 2: First-order conditions (best responses).
𝜕𝜋1 /𝜕𝑝1 = (1)(100 − 2𝑝1 + 𝑝2 ) + (𝑝1 − 10)(−2) = 0 120 − 4𝑝1 + 𝑝2 = 0 → 𝑝1 = 30 + 𝑝2 /4 (BR of Firm 1)
Similarly: 𝑝 = 30 + 𝑝 /4 (BR of Firm 2)
                2           1
Step 3: Solve Nash equilibrium.
𝑝1 = 30 + (30 + 𝑝1 /4)/4 → 𝑝1 = 30 + 7.5 + 𝑝1 /16 → (15/16)𝑝1 = 37.5 → 𝑝*1 = 40
𝑝*2 = 30 + 40/4 = 40
Nash equilibrium: (𝑝*1 , 𝑝*2 ) = (40, 40)
Step 4: Quantities and profits. 𝑞1 = 100 − 2(40) + 40 = 60, 𝑞2 = 60 𝜋1 = (40 − 10)(60) = 1800,
𝜋2 = 1800
Strategic complements: 𝜕𝑝1 /𝜕𝑝2 = 1/4 > 0 — best-response functions slope upward. A price
cut by one firm induces the other to cut price as well.


  Munoz-Garcia Insight: Strategic Complements (Ch.8, §8.4.1)
  In Bertrand competition with differentiated products, firms’ pricing decisions are strategic
  complements: an increase in firm 𝑗’s price raises firm 𝑖’s optimal price. Formally, the cross-partial
  derivative of firm 𝑖’s marginal profit with respect to its rival’s price is positive:
     Let’s work through this step by step. We start with the definition of strategic complements
     — an increase in 𝑝𝑗 raises 𝑖’s optimal 𝑝𝑖 : 1. Firm 𝑖’s marginal profit is 𝜕𝜋𝑖 /𝜕𝑝𝑖 2. Strategic
     complements means 𝜕(𝜕𝜋𝑖 /𝜕𝑝𝑖 )/𝜕𝑝𝑗 > 0 — the cross-partial derivative is positive 3. When 𝑝𝑗
     rises, firm 𝑖’s demand increases (substitute goods), raising the marginal profitability of 𝑖’s own
     price increase 4. →
                                                                             2
                                                                         𝜕 𝜋𝑖
                                                                                >0
                                                                        𝜕𝑝𝑖 𝜕𝑝𝑗
     Here’s what’s really going on: A positive cross-partial means best-response functions slope
     upward in price space. When your rival raises price, your optimal response is to raise your
     price too. This contrasts with Cournot competition where best-response functions slope
     downward.


  This implies best-response functions are upward-sloping in price space. Intuitively, when your
  rival raises price, your demand increases, and raising your own price becomes more profitable. The
  general condition (Munoz-Garcia, Ch.8) for strategic complements in price competition is:


     Let’s work through this step by step. We start with firm 𝑖’s profit function
     𝜋𝑖 (𝑝𝑖 , 𝑝𝑗 ) = (𝑝𝑖 − 𝑐)𝑞𝑖 (𝑝𝑖 , 𝑝𝑗 ): 1. Marginal profit: 𝜕𝜋𝑖 /𝜕𝑝𝑖 = 𝑞𝑖 + (𝑝𝑖 − 𝑐)(𝜕𝑞𝑖 /𝜕𝑝𝑖 ) 2. Cross-partial
                                   𝜕2 𝜋       𝜕𝑞       𝜕(𝑝𝑖 − 𝑐) 𝜕𝑞𝑖         𝜕2 𝑞𝑖
     derivative w.r.t. 𝑝𝑗 : 𝜕𝑝 𝜕𝑝𝑖 = 𝜕𝑝 𝑖 +              𝜕𝑝𝑗 𝜕𝑝𝑖 + (𝑝𝑖 − 𝑐) 𝜕𝑝𝑖 𝜕𝑝𝑗 3. Since 𝜕(𝑝𝑖 − 𝑐)/𝜕𝑝𝑗 = 0, this simplifies
                                    𝑖     𝑗    𝑗
         𝜕𝑞             𝜕2 𝑞                                            𝜕2 𝑞                                             𝜕𝑞
     to: 𝜕𝑝 𝑖 + (𝑝 − 𝑐) 𝜕𝑝 𝜕𝑝𝑖 4. For linear demand 𝜕𝑝 𝜕𝑝𝑖 = 0, so the sign depends on 𝜕𝑝 𝑖 > 0 (substitute
          𝑗       𝑖      𝑖     𝑗                                         𝑖       𝑗                                        𝑗

     goods) 5. →
                                                   𝜕𝜋𝑖 (𝑝𝑖 , 𝑝𝑗 )       𝜕𝑞𝑖                        𝜕2 𝑞𝑖
                                                                    =                + (𝑝𝑖 − 𝑐)             >0
                                                       𝜕𝑝𝑖 𝜕𝑝𝑗          𝜕𝑝𝑗                       𝜕𝑝𝑖 𝜕𝑝𝑗
     Here’s what’s really going on: The cross-partial has two terms: a demand-shifting effect (
     𝜕𝑞𝑖 /𝜕𝑝𝑗 > 0 — rival’s price increase raises own demand) and a curvature term (zero for linear
     demand). Since goods are substitutes, the first term is positive, confirming strategic
     complements. Best-response functions slope upward.


  Homogeneous Bertrand: If products are identical and firms compete in prices with constant MC,
  the unique NE is 𝑝 = 𝑀𝐶 (zero profits) — the Bertrand paradox.




6.4 Cournot Duopoly

Why this matters for your exam: Cournot is the other major oligopoly model you’ll be tested
on. The exam often asks you to compare Cournot and Bertrand outcomes, or to solve a Cournot
equilibrium and then extend it to Stackelberg. The strategic substitutes concept is a favourite
for deeper analysis.
Cournot competition: Firms choose quantities simultaneously; market price clears given
total output.
Standard model (symmetric): - Market demand: 𝑃 = 𝑎 − 𝑏(𝑞 + 𝑞 ) - Constant MC = 𝑐 for both
                                                                                                            1    2
firms
Profit functions: 𝜋1 = (𝑎 − 𝑏(𝑞 + 𝑞 ))𝑞 − 𝑐𝑞 𝜋2 = (𝑎 − 𝑏(𝑞 + 𝑞 ))𝑞 − 𝑐𝑞
                                              1         2   1           1                           1       2    2   2
FOCs (best responses): 𝜕𝜋1 /𝜕𝑞 = 𝑎 − 2𝑏𝑞 − 𝑏𝑞 − 𝑐 = 0 𝑞 = (𝑎 − 𝑐 − 𝑏𝑞 )/(2𝑏) (BR of Firm 1)
                                                   1                1                2              1                2
Similarly: 𝑞 = (𝑎 − 𝑐 − 𝑏𝑞 )/(2𝑏) (BR of Firm 2)
              2        1
           *   *
Solve NE: 𝑞 = 𝑞 = (𝑎 − 𝑐)/(3𝑏)
           1   2


  Munoz-Garcia Insight: Strategic Substitutes (Ch.8, §8.3)
  In Cournot competition, firms’ output decisions are strategic substitutes: an increase in firm 𝑗’s
  output reduces firm 𝑖’s optimal output. The formal condition involves the cross-derivative of firm 𝑖’s
  marginal profit with respect to its rival’s quantity:


    Let’s work through this step by step. We start with firm 𝑗’s profit in Cournot competition
    with inverse demand 𝑝(𝑞) where total output 𝑞 = ∑ 𝑞𝑘 : 1. Profit: 𝜋𝑗 = 𝑝(𝑞)𝑞𝑗 − 𝑐(𝑞𝑗 ) 2. First-
                                                                           𝑘
                                                                       ′                ′
    order condition (marginal profit = 0): 𝜕𝜋𝑗 /𝜕𝑞𝑗 = 𝑝 (𝑞)𝑞𝑗 + 𝑝(𝑞) − 𝑐 (𝑞𝑗 ) = 0 3. To determine
    whether quantities are strategic substitutes, compute the cross-partial of marginal profit w.r.t.
                                                           𝜕𝑞                      𝜕𝑞
    rival output 𝑞𝑘 (𝑘 ≠ 𝑗): - 𝜕𝑞𝜕 [𝑝′ (𝑞)𝑞𝑗 ] = 𝑝″ (𝑞) ⋅ 𝜕𝑞  ⋅ 𝑞𝑗 + 𝑝′ (𝑞) ⋅ 𝜕𝑞𝑗 = 𝑝″ (𝑞)𝑞𝑗 (since 𝜕𝑞𝑗 /𝜕𝑞𝑘 = 0) -
                                    𝑘                         𝑘                     𝑘
     𝜕            ′       𝜕𝑞    ′       𝜕     ′
    𝜕𝑞𝑘 [𝑝(𝑞)] = 𝑝 (𝑞) ⋅ 𝜕𝑞𝑘 = 𝑝 (𝑞) - 𝜕𝑞𝑘 [−𝑐 (𝑞𝑗 )] = 0 (cost depends only on own output) 4. The cross-
                                     ″           ′                                               ′
    partial derivative equals 𝑝 (𝑞)𝑞𝑗 + 𝑝 (𝑞). For standard downward-sloping demand (𝑝 (𝑞) < 0) with
                                        ″
    linear or concave demand (𝑝 (𝑞) ≤ 0), this is negative. Writing the expression as in the text: 5.
    →
                   𝜕(𝜕𝜋𝑗 /𝜕𝑞𝑗 )
                                  = 𝜕 [𝑝′ (𝑞)𝑞𝑗 + 𝑝(𝑞) − 𝑐′ (𝑞𝑗 )] = 𝑝″ (𝑞)𝑞𝑗 − 𝑝′ (𝑞) < 0 for all 𝑘 ≠ 𝑗
                       𝜕𝑞𝑘         𝜕𝑞𝑘
    Here’s what’s really going on: The cross-partial is negative, confirming that quantities are
    strategic substitutes: an increase in rival output 𝑞𝑘 lowers market price, reducing firm 𝑗’s
    marginal revenue. Firm 𝑗’s optimal response is to contract its own output. Hence best-
    response functions slope downward in quantity space.


  For linear demand 𝑝(𝑞) = 𝑎 − 𝑏𝑞, this simplifies to:


    Let’s work through this step by step. We plug linear demand 𝑝(𝑞) = 𝑎 − 𝑏𝑞 into the general
    cross-partial expression: 1. Linear inverse demand: 𝑝(𝑞) = 𝑎 − 𝑏𝑞, so 𝑝′ (𝑞) = −𝑏 and 𝑝″ (𝑞) = 0 2.
                                                  𝜕2 𝜋
    The cross-partial from firm 𝑗’s FOC: 𝜕𝑞 𝜕𝑞𝑗 = 𝜕𝑞𝜕 [𝑝′ (𝑞)𝑞 + 𝑝(𝑞) − 𝑐′ (𝑞 )] 3. Substituting 𝑝′ (𝑞) = −𝑏
                                                    𝑗    𝑘        𝑘            𝑗            𝑗
    and 𝑝 (𝑞) = 0: 𝜕𝑞𝜕 [(−𝑏)𝑞𝑗 + (𝑎 − 𝑏𝑞)] = 0 ⋅ 𝑞𝑗 + (−𝑏) = −𝑏 4. →
          ″
                       𝑘
                                                          𝜕2 𝜋𝑗
                                                                      = −𝑏 < 0
                                                         𝜕𝑞𝑗 𝜕𝑞𝑘
    Here’s what’s really going on: With linear demand, the cross-partial simplifies to −𝑏 < 0,
    confirming strategic substitutes. Each additional unit produced by the rival reduces market
    price by 𝑏, which directly lowers the marginal revenue of own output by 𝑏. Best-response
    functions are linear and slope downward with gradient −1/2.


  Hence best-response functions slope downward in quantity space. When your rival produces more,
  market price falls, reducing your marginal revenue and your optimal quantity.
  Comparison: The sign of the cross-partial derivative (positive for Bertrand prices, negative for
  Cournot quantities) determines whether best-response functions slope up or down. This
  classification is critical for merger analysis, entry deterrence, and policy evaluation.


Cournot vs Bertrand comparison:


Feature                                  Cournot                                        Bertrand

Strategic variable                       Quantity                                       Price

                                         Downward (strategic                            Upward (strategic
BR slope
                                         substitutes)                                   complements)

NE price (homogeneous)                   Above MC                                       = MC

Profits                                  Positive                                       Zero (homogeneous goods)
Key insight: Cournot yields higher prices and profits than Bertrand with homogeneous goods
because quantity competition is softer than price competition.


6.4.1 Stackelberg Model (Sequential Cournot)

Why this matters for your exam: Stackelberg tests whether you understand the strategic
advantage of moving first. Examiners often ask you to compare Stackelberg outcomes with
Cournot and identify the leader’s profit advantage.
The Stackelberg model extends Cournot to sequential moves: a leader chooses quantity first; a
follower observes and then chooses (Munoz-Garcia Ch.8, §8.5.3; Koutsoyiannis Ch.9, §V).
Equilibrium (linear demand 𝑃 = 𝑎 − 𝑄, symmetric MC 𝑐): - Leader output: 𝑞* = (𝑎 − 𝑐)/2 -
                                                                                        1
                  *                                     *               *
Follower output: 𝑞 = (𝑎 − 𝑐)/4 - Total output: 𝑄 = 3(𝑎 − 𝑐)/4 - Price: 𝑝 = (𝑎 + 3𝑐)/4 - Leader profit:
                      2
             2                                    2
𝜋*1 = (𝑎 − 𝑐) /8 - Follower profit: 𝜋*2 = (𝑎 − 𝑐) /16
Leader’s advantage: The leader produces more than the Cournot level ((𝑎 − 𝑐)/2 > (𝑎 − 𝑐)/3)
                                                            ′
and earns higher profits. The strategic effect 𝑝 (𝑄)(𝜕𝑞2 /𝜕𝑞1 )𝑞1 > 0 gives the leader an incentive
to overproduce, forcing the follower to contract output.
Comparison across oligopoly models (linear demand, symmetric costs):


 Model             𝑄*                𝑝*                         𝜋*1              𝜋*2

 Perfect
                   (𝑎 − 𝑐)/𝑏         𝑐                          0                0
 competition
                                                                      2                2
 Cournot           2(𝑎 − 𝑐)/(3𝑏)     (𝑎 + 2𝑐)/3                 (𝑎 − 𝑐) /(9𝑏)    (𝑎 − 𝑐) /(9𝑏)
                                                                      2                2
 Stackelberg       3(𝑎 − 𝑐)/(4𝑏)     (𝑎 + 3𝑐)/4                 (𝑎 − 𝑐) /(8𝑏)    (𝑎 − 𝑐) /(16𝑏)

 Collusion                                                            2                2
                   (𝑎 − 𝑐)/(2𝑏)      (𝑎 + 𝑐)/2                  (𝑎 − 𝑐) /(8𝑏)    (𝑎 − 𝑐) /(8𝑏)
 (cartel)


Prices, output, and welfare all lie between the competitive and monopoly extremes.
Stackelberg output exceeds Cournot output but falls short of the competitive level (Munoz-
Garcia, Fig. 8.31).


  Koutsoyiannis Ch.9 & 11: Oligopoly and Market Structure Implications
  Koutsoyiannis provides a comprehensive comparison of the classical oligopoly models:

         Cournot model: Firms assume rivals keep output fixed. Yields a stable equilibrium at 1/3
         market share each (duopoly). The limit of Cournot as 𝑛 → ∞ is perfect competition. “The
         interesting feature of both Cournot’s and Bertrand’s models is that the limit of duopoly is
         pure competition” (Koutsoyiannis, p.228).
         Bertrand model: Firms assume rivals keep price fixed. Leads to marginal cost pricing with
         homogeneous goods — a much more competitive outcome. “The equilibrium price will be the
         competitive price” (Koutsoyiannis, p.227). Bertrand’s model focuses attention on price setting
         as the main decision variable.
         Chamberlin’s model: Firms recognise interdependence and reach the monopoly outcome
         without explicit collusion. “If firms recognise their interdependence and act so as to maximise
         the industry profit” (Koutsoyiannis, p.228), the monopoly solution is stable. However, this
         requires sophisticated firms with good knowledge of market demand.
         Stackelberg model: One firm acts as leader, the other as follower. If only one firm is
         sophisticated, a stable leader-follower equilibrium emerges. “If both firms are sophisticated,
         then both will want to act as leaders… The situation is known as Stackelberg’s
         disequilibrium” leading to price war or collusion (Koutsoyiannis, p.234).
  Koutsoyiannis critique: All classical models share limitations: (1) naive behavioural assumptions
  — firms never learn from past reactions; (2) closed models that ignore entry; (3) static framework
  with no explicit adjustment process; (4) neglect of non-price competition (advertising, product
  differentiation, location). These limitations motivate the more advanced models in later chapters of
  Koutsoyiannis.




6.5 Sequential Games, Backward Induction, and SPNE

Why this matters for your exam: Extensive form games and backward induction appear
frequently in exam questions — especially entry games. The idea of eliminating non-credible
threats is a favourite topic. If you can solve a simple entry game tree, you’ve got this section
covered.
Subgame Perfect Nash Equilibrium (SPNE): A strategy profile that induces a Nash
equilibrium in every subgame of the original game (Selten, 1965). Eliminates non-credible
threats.
Backward induction (rollback): The algorithm for finding SPNE in finite-horizon games of
perfect information: 1. Start at the last decision node — choose the action that maximises
that player’s payoff. 2. Move backward: at each preceding node, the player chooses optimally
given equilibrium play in subsequent subgames. 3. The resulting strategy profile is the unique
SPNE (if no ties at any node).
Market Entry Game (46 Final Q5a; Koutsoyiannis, p.414):
An incumbent monopolist (I) and a potential entrant (E).
Structure: 1. E decides: Enter (IN) or Stay Out (OUT). 2. If OUT: I continues as monopolist;
payoff: (0, 100). 3. If IN: I decides: Accommodate (40, 40) or Fight (-10, -10).
Decision tree: E chooses IN/OUT; if IN, I chooses Accommodate/Fight.
Backward induction: 1. At I’s node (after E enters): Accommodate (40) > Fight (-10) →
Accommodate. 2. At E’s node: Enter gives 40 (since I accommodates), Stay Out gives 0 →
Enter.
SPNE: (Enter, Accommodate) — payoffs (40, 40).
Alternative version (46 Final Q5a — revised payoffs): Market only big enough for one firm.
Both enter → both lose 20m. One enters → profit 50m, other breaks even (0). Firm B observes
A’s decision.
Decision tree: A chooses IN/OUT; B observes and chooses IN/OUT.
Backward induction: 1. If A stays OUT → B enters (50 > 0). 2. If A enters → B stays out (0 >
-20). 3. Knowing this, A chooses Enter (50 > 0).
SPNE: (A enters, B stays out) — payoffs (50, 0).
Non-credible threats: The incumbent’s threat to fight entry is not credible because
accommodating is the optimal response once entry occurs — backward induction reveals this.
Key property: SPNE always exists in finite extensive-form games and is always a NE, but not
every NE is subgame perfect.



6.6 Repeated Games and the Folk Theorem

Why this matters for your exam: Repeated games are how we explain why firms don’t
always cheat on collusive agreements. The grim trigger discount factor threshold is a classic
                                                                            *
exam calculation — you’ll be given a payoff matrix and asked to find 𝛿 .
Grim trigger strategy: In a repeated game, cooperate as long as all players have cooperated
in every previous period; if any player ever deviates, punishment (reversion to the stage-game
Nash equilibrium) is triggered forever (Friedman, 1971).
Sustaining condition: Cooperation is an SPNE under grim trigger if the discount factor 𝛿
satisfies:


     Let’s work through this step by step. We start with the present-value comparison between
     cooperation and deviation with grim trigger punishment: 1. Cooperate forever: earn 𝜋coop each
                                         2           𝜋coop
     period → PV = 𝜋coop + 𝛿𝜋coop + 𝛿 𝜋coop + ⋯ = 1 − 𝛿 2. Deviation: earn 𝜋dev today (higher one-shot gain),
                                                                𝛿𝜋
     then 𝜋pun forever (trigger punishment) → PV = 𝜋dev + 1 −pun𝛿 3. Cooperation is sustainable if the PV of
                                         𝜋           𝛿𝜋
     cooperation ≥ PV of deviation: 1coop
                                      −𝛿
                                          ≥ 𝜋dev + 1 −pun𝛿 4. Multiply both sides by (1 − 𝛿):
     𝜋coop ≥ 𝜋dev (1 − 𝛿) + 𝛿𝜋pun 5. Collect 𝛿 terms: 𝜋coop ≥ 𝜋dev − 𝛿(𝜋dev − 𝜋pun ) 6. Rearranged:
     𝛿(𝜋dev − 𝜋pun ) ≥ 𝜋dev − 𝜋coop 7. →
                                                          𝜋dev − 𝜋coop
                                                      𝛿≥ 𝜋 −𝜋
                                                            dev    pun
                                                                             *
     Here’s what’s really going on: The threshold discount factor 𝛿 is the ratio of the one-period gain
     from cheating (𝜋dev − 𝜋coop ) to the one-period cost of punishment (𝜋dev − 𝜋pun ). If 𝛿 is high enough
     (you’re patient enough), the long-run cost of punishment outweighs the short-run gain from
     deviation, making cooperation sustainable.


where 𝜋dev is the one-period gain from deviation, 𝜋coop is the cooperative per-period payoff, and
𝜋pun is the punishment (NE) payoff.
Here’s what’s really going on: The short-run gain from cheating must be outweighed by the
long-run loss from permanent punishment. For 𝛿 → 1 (very patient players), almost any
cooperative outcome can be sustained.
Exam Question — Repeated Game with Grim Trigger (46 Final Q5b):
Stage game payoff matrix:

               Column Player
             Left    Middle       Right
Row       --------------------------
Up        | (3,3)     (0,5)      (1,1)
Down      | (5,0)     (1,1)      (2,2)*

The unique stage-game NE is (Down, Right) = (2,2).
Sustaining cooperative outcome (Up, Left) = (3,3) with grim trigger: - Grim trigger:
Play (Up, Left) as long as no deviation; if anyone deviates, revert to (Down, Right) forever. -
                                    2                                                   2
Cooperation PV: 3 + 3𝛿 + 3𝛿 + … = 3/(1 − 𝛿) - Deviation PV: 5 + 2𝛿 + 2𝛿 + … = 5 + 2𝛿/(1 − 𝛿)
Cooperate if: 3/(1 − 𝛿) ≥ 5 + 2𝛿/(1 − 𝛿) 3 ≥ 5(1 − 𝛿) + 2𝛿 → 3 ≥ 5 − 3𝛿 → 3𝛿 ≥ 2 → 𝛿 ≥ 2/3
So (Up, Left) = (3,3) can be sustained as SPNE with grim trigger if 𝛿 ≥ 2/3.
Folk Theorem: For sufficiently patient players (𝛿 → 1), any feasible, individually rational
payoff vector can be sustained as an SPNE of the infinitely repeated game.

6.6.1 The Renegotiation-Proofness Problem

⚠️ Watch out (repeated from existing): Grim trigger is not renegotiation-proof — once
triggered, the punishment phase continues even though both would prefer to renegotiate and
return to cooperation. Trigger strategies also require observability — if firms can secretly
undercut, cooperation breaks down even with high 𝛿.


     Munoz-Garcia Insight: Renegotiation-Proofness (Ch.8 discussion)
     A fundamental weakness of grim trigger strategies is the renegotiation-proofness problem.
     Consider the punishment phase of a grim trigger equilibrium: both firms are playing the stage-
  game Nash equilibrium forever, earning low profits 𝜋pun . At this point, both firms would be strictly
  better off if they could tear up the trigger agreement and return to the cooperative outcome 𝜋coop .
  The problem: If players anticipate that renegotiation will occur in the future, the threat of
  punishment loses its bite. A rational player who deviates knows that after a brief punishment, both
  will renegotiate back to cooperation. Hence the discounted cost of deviation is much smaller than
  under the permanent punishment of grim trigger, making cooperation harder to sustain.
  Formally: With renegotiation, the punishment is finite (say 𝑘 periods), so the deviation constraint
  becomes:


    Let’s work through this step by step. We start with the grim trigger condition but with
    finite 𝑘-period punishment followed by renegotiation back to cooperation: 1. Cooperate
                    𝜋coop
    forever: PV = 1 − 𝛿 (same as grim trigger) 2. Deviation with renegotiation: earn 𝜋dev today
    (deviation gain), then 𝜋pun for 𝑘 periods (punishment), then 𝜋coop forever (renegotiation) 3.
                                     2               𝑘        𝑘+1           𝑘+2
    Deviation PV = 𝜋dev + 𝛿𝜋pun + 𝛿 𝜋pun + ⋯ + 𝛿 𝜋pun + 𝛿         𝜋coop + 𝛿     𝜋coop + ⋯ 4. Group the
                         𝑘      𝑡                                                ∞       𝑡
    punishment phase: ∑
                         𝑡=1
                              𝛿   𝜋 pun   and the post-punishment     phase:   ∑ 𝑡=𝑘+1
                                                                                        𝛿 𝜋coop 5. The
                              𝜋                        𝑡                  𝑡
    cooperation condition is: 1coop
                                −𝛿
                                     ≥ 𝜋dev + ∑𝑘𝑡 = 1 𝛿 𝜋pun + ∑∞
                                                                𝑡=𝑘+1
                                                                         𝛿 𝜋coop 6. →
                                        2              𝑘       𝑘+1
                    𝜋dev + 𝛿𝜋pun + 𝛿 𝜋pun + ⋯ + 𝛿 𝜋pun + 𝛿          𝜋coop + ⋯ ≥ 𝜋coop /(1 − 𝛿)
    Here’s what’s really going on: Because the punishment phase is now finite (𝑘 periods rather
    than infinite), the discounted cost of deviation is smaller. For cooperation to be sustained,
    players must be more patient (higher 𝛿) than under grim trigger. As 𝑘 → ∞, the condition
    converges to the grim trigger condition; as 𝑘 → 0, only self-enforcing agreements (where 𝜋coop
    is itself a NE) survive.


  Since the punishment phase is now limited, the required discount factor 𝛿 for sustaining
  cooperation is higher than under grim trigger.
  Solutions: More sophisticated strategies can achieve renegotiation-proofness: - Stick-and-carrot
  strategies (Abreu, 1986): brief, severe punishment followed by return to cooperation. - Optimal
  penal codes: the toughest credible punishment that still forms an SPNE. - Perfect public
  equilibrium (Fudenberg, Levine, Maskin, 1994): strategies that depend only on public information
  and are sequentially optimal.


6.6.2 The Kreps-Milgrom-Roberts-Wilson (1982) Reputation Model

A central insight in repeated games is that incomplete information about types can sustain
cooperation even in finitely repeated Prisoners’ Dilemmas, where backward induction
predicts universal defection.


  Munoz-Garcia Insight: Reputation and Cooperation in Finitely Repeated Games (Ch.8,
  discussion)
  Kreps, Milgrom, Roberts, and Wilson (1982) showed that if there is a small probability that one
  player is not a rational “defector” but rather a cooperative type (e.g., “Tit-for-Tat” or “Grim
  Trigger”), then cooperation can emerge in the early periods of a finitely repeated PD.
  Key mechanism: 1. Types: The rational player has a dominant strategy to defect. But with
  probability 𝜀 > 0, the player is an “irrational” cooperative type who always plays Tit-for-Tat. 2.
  Reputation-building: A rational player may mimic the cooperative type in early periods to build a
  reputation, inducing the opponent to cooperate. 3. Unraveling limited: The backward induction
  unraveling is limited because the last period is the only period where defection is certain. For 𝑇
  periods, cooperation can be sustained for 𝑇 − 𝐾 periods, where 𝐾 depends on 𝜀 and the discount
  factor.
  Result: For any finite 𝑇, there exists a Bayesian Nash equilibrium where both players cooperate
  until the final few periods, provided 𝜀 is positive (even arbitrarily small). The larger the number of
  periods, the more cooperation can be sustained.
  Here’s what’s really going on: The small uncertainty about types breaks the certainty of the
  backward induction logic. Player 1 cooperates in period 𝑇 − 1 because there is a chance Player 2 is a
  cooperative type who will reciprocate in period 𝑇, and Player 2 cooperates in 𝑇 − 1 to maintain the
  reputation that sustains Player 1’s cooperation.
  This result is also known as the “gang of four” result and provides a theoretical foundation for
  why experimental subjects cooperate in finitely repeated PDs despite the backward induction
  paradox. The model also explains the centipede game experimental evidence (McKelvey & Palfrey,
  1992): a small probability of altruistic types explains observed cooperation patterns.




6.7 The Backward Induction Paradox

Why this matters for your exam: The backward induction paradox is a favourite discussion
question — “Why might players cooperate in a finitely repeated PD despite the theoretical
prediction?” You should be able to explain at least three resolution paths.
Paradox of backward induction (46 Final Q6a): In finite-horizon games of perfect
information, backward induction predicts cooperation unravels from the end. In a finitely
repeated PD:

     Last period T: both defect (dominant strategy).
     Period T-1: knowing T is defection, why cooperate? Both defect.
     This unravels to defection in EVERY period, even though both would prefer mutual
     cooperation.

The paradox: The prediction contradicts experimental evidence — people cooperate in finitely
repeated PDs, at least in early periods.
Can multiple Nash equilibria help? (46 Final Q6a, part ii)
Yes. The paradox arises when the stage game has a unique Nash equilibrium. If there are
multiple NE, backward induction may not yield a unique prediction:

  1. Multiple equilibria change the endgame. If the stage game has a cooperative NE
     (alongside the non-cooperative one), the unraveling argument weakens because the
     terminal period may not force defection.
  2. Bargaining models: In finite-horizon bargaining, if there are multiple equilibria (e.g.,
     multiple acceptable splits), the unique backward induction solution may break down.
  3. Coordination on “good” equilibrium: If both players prefer one equilibrium, they may
     coordinate on it, and punishment for deviation can sustain cooperation even in finite
     games.
  4. Reputation effects: With incomplete information about types, the unraveling is limited
     — players may maintain cooperation to build reputation.

Example: In a finitely repeated game where the stage game has both (Cooperate, Cooperate)
and (Defect, Defect) as NE, players can sustain cooperation throughout because the
“punishment” of reverting to the bad equilibrium deters deviation.
Resolution paths: 1. Multiple stage-game Nash equilibria: Punishment strategies sustain
cooperation. 2. Incomplete information: A small probability of a “cooperative type” limits
unraveling (Kreps-Milgrom-Roberts-Wilson, 1982). 3. Bounded rationality: Real players may
not perform full backward induction.



6.8 The Centipede Game
Why this matters for your exam: The centipede game is the classic demonstration of the
gap between backward induction and actual behaviour. It frequently appears in exam
questions that ask you to compare the theoretical prediction with experimental evidence.
Centipede game (Rosenthal, 1981; 46 Final Q6b): A sequential-move game where two
players alternately choose to “Take” (end the game) or “Pass” (increase the pot for the next
player). The pot doubles with each Pass; Taking gives the current player a larger share now;
Passing risks the opponent taking an even larger share later.
Structure (simplified 4-move version):
Round 1: Player 1 chooses Take (T) or Pass (P) - T → (1, 0) - P → Round 2
Round 2: Player 2 chooses T or P - T → (0, 3) - P → Round 3
Round 3: Player 1 chooses T or P - T → (3, 1) - P → Round 4
Round 4: Player 2 chooses T or P (automatic — last round) - T → (1, 4) - P → (2, 2)
Backward induction solution: Round 4: P2 chooses Take (4 > 2). Round 3: P1 chooses Take
(3 > 1, knowing P2 will take in R4). Round 2: P2 chooses Take (3 > 1, knowing P1 will take in
R3). Round 1: P1 chooses Take (1 > 0, knowing P2 will take in R2).
Prediction: P1 takes in Round 1 → (1,0). Both get very little.
Paradox: Both players would be better off if they passed all the way to the end (2,2), but
backward induction says they won’t. The cooperative outcome is achievable only if neither acts
“rationally” in the backward-induction sense.
Overcoming the paradox (46 Final Q6b — “if players initially co-operate and play
across, the paradox is partially overcome”):

  1. Partial cooperation: If players initially cooperate (Pass) in early rounds, they may reach
     later rounds where the pot is much larger, making continued cooperation more attractive.
  2. Incomplete information (reputation): If there’s a small probability that P1 is
     “altruistic” (always passes), P2 may Pass in early rounds to find out, and P1 may Pass to
     build reputation. This limits the unraveling (Kreps-Milgrom-Roberts-Wilson, 1982).
  3. Multiple Nash equilibria: The centipede game has multiple NE. Backward induction
     selects one, but alternative equilibria (e.g., both always Pass) can be sustained if each
     believes the other will Pass.
  4. Bounded rationality: Real players may not perform full backward induction, especially
     in long games. Experiments show most pairs reach the middle or end before someone
     Takes.
  5. Social preferences: Fairness, reciprocity, and altruism lead players to Pass more often
     than predicted.

Experimental evidence (McKelvey & Palfrey, 1992): Subjects Pass far more often than
backward induction predicts, especially in early rounds. The Kreps incomplete-information
model (a small chance of an “altruistic” type) explains the observed pattern well.
Key insight: The centipede game is the canonical illustration of the gap between theoretical
backward induction and actual human behaviour. Backward induction is a powerful logical
principle, but humans deviate from it systematically. The paradox is that individually rational
choices (taking) produce a collectively inferior outcome. If players initially cooperate and Pass,
they partially overcome the paradox by reaching payoff-superior outcomes that would be
eliminated by strict backward induction.



6.10 Games of Incomplete Information: Bayesian Nash Equilibrium and
Perfect Bayesian Equilibrium
Why this matters for your exam: Incomplete information games appear less frequently in
the exam but are high-value when they do — they test deeper understanding. Bayesian Nash
Equilibrium is the proper way to model uncertainty about costs, types, or demand. Perfect
Bayesian Equilibrium adds sequential rationality for dynamic settings.

6.10.1 Bayesian Nash Equilibrium (BNE)

When players have private information (e.g., unknown costs, unknown demand, unknown
“type”), we model the game as one of incomplete information. Each player 𝑖 has a type
𝜃𝑖 ∈ Θ𝑖 observed only by themselves; opponents hold beliefs (a common prior) over 𝜃𝑖 .

  Munoz-Garcia Insight: Bayesian Nash Equilibrium (Ch.8, §8.1.3)
  Definition: A strategy profile (𝑠*1 (𝜃1 ), 𝑠*2 (𝜃2 ), …, 𝑠*𝑁 (𝜃𝑁 )) is a Bayesian Nash equilibrium (BNE) of a
  game of incomplete information if, for every player 𝑖, every type 𝜃𝑖 ∈ Θ𝑖 , and every feasible
  strategy 𝑠𝑖 (𝜃𝑖 ):


     Let’s work through this step by step. We start with the Nash equilibrium definition
     extended to games with private information and type-contingent strategies: 1. Each player 𝑖
     has private type 𝜃𝑖 ; opponents hold beliefs 𝑝(𝜃−𝑖 |𝜃𝑖 ) 2. A strategy 𝑠𝑖 (𝜃𝑖 ) is a function mapping 𝑖
     ’s type to an action — a type-contingent strategy 3. In BNE, every type 𝜃𝑖 of every player 𝑖
     must be playing optimally: 𝑠*𝑖 (𝜃𝑖 ) maximises 𝑖’s expected utility given its beliefs about
     opponents’ types and their equilibrium strategies 𝑠*−𝑖 (𝜃−𝑖 ) 4. The condition must hold for every
     feasible deviation 𝑠𝑖 (𝜃𝑖 ) and every type 𝜃𝑖 5. →
                            𝐸𝑈𝑖 (𝑠*𝑖 (𝜃𝑖 ), 𝑠*−𝑖 (𝜃−𝑖 ); 𝜃𝑖 , 𝜃−𝑖 ) ≥ 𝐸𝑈𝑖 (𝑠𝑖 (𝜃𝑖 ), 𝑠*−𝑖 (𝜃−𝑖 ); 𝜃𝑖 , 𝜃−𝑖 )
     Here’s what’s really going on: BNE extends NE by requiring optimality type-by-type. Each
     type of each player maximises expected payoff given correct beliefs about opponents’ type-
     contingent strategies. It’s a “Nash equilibrium in type-contingent strategies” — a fixed point in
     strategy functions rather than actions.


  Key elements: - Types: 𝜃𝑖 ∈ Θ𝑖 captures player 𝑖’s private information (e.g., high or low cost). -
  Beliefs: Common prior 𝑝(𝜃1 , …, 𝜃𝑁 ) over type profiles. Players update using Bayes’ rule after
  observing their own type. - Expected payoffs: Since player 𝑖 does not observe 𝜃−𝑖 , they maximise
  expected utility given their beliefs about opponents’ types:


     Let’s work through this step by step. We start with the definition of expected utility when
     player 𝑖 faces uncertainty about opponents’ types: 1. Player 𝑖 knows their own type 𝜃𝑖 but not
     𝜃−𝑖 2. After observing 𝜃𝑖 , 𝑖 forms posterior beliefs 𝑝(𝜃−𝑖 |𝜃𝑖 ) using Bayes’ rule 3. Opponents play
     type-contingent strategies 𝑠−𝑖 (𝜃−𝑖 ) 4. Player 𝑖’s expected payoff from choosing 𝑠𝑖 is the sum
     over all possible opponent type profiles, weighted by beliefs: 5.
                               𝐸𝑈𝑖 (𝑠𝑖 , 𝑠−𝑖 ; 𝜃𝑖 ) = ∑ 𝑝(𝜃−𝑖 |𝜃𝑖 ) ⋅ 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 (𝜃−𝑖 ); 𝜃𝑖 , 𝜃−𝑖 )
                                                       𝜃−𝑖
     Here’s what’s really going on: The expectation integrates over opponent types because you
     don’t observe them. This is analogous to expected utility in decision theory under uncertainty
     — the opponent’s type-contingent strategy 𝑠−𝑖 (𝜃−𝑖 ) translates type uncertainty into payoff
     uncertainty. The posterior 𝑝(𝜃−𝑖 |𝜃𝑖 ) reflects correlation in types (if any) updated from the prior.


  Finding BNE — Four-step procedure (Munoz-Garcia Ch.8): 1. Strategy sets: Identify
  strategies as functions of each player’s private type. 2. Bayesian normal form: Construct
  expected payoff matrix using the prior distribution over types. 3. Expected payoffs: Compute each
  player’s expected payoff for every strategy profile. 4. Best responses: Underline best-response
  payoffs to identify mutual best-response profiles.
  Example — Cournot with incomplete information (Munoz-Garcia Ch.8, §8.3.2): Two firms
  compete in quantities. Firm 2 has private information about its marginal cost (high or low). Firm 1
  holds a prior belief 𝑝 that Firm 2 has low cost. The BNE involves Firm 2 choosing different
  quantities for each type (a type-contingent strategy), while Firm 1 chooses a single quantity that
  maximises its expected profit given its belief about Firm 2’s type.


6.10.2 Perfect Bayesian Equilibrium (PBE)

In sequential-move games with incomplete information, BNE is insufficient because it
does not ensure sequential rationality at every information set. We need the stronger
concept of Perfect Bayesian Equilibrium.


  Munoz-Garcia Insight: Perfect Bayesian Equilibrium (Ch.8, §8.1.4)
  Definition: A strategy profile (𝑠1 , 𝑠2 , …, 𝑠𝑁 ) and a system of beliefs 𝜇 (specifying a probability
  distribution over nodes at every information set) constitute a Perfect Bayesian Equilibrium (PBE) if:

     1. Sequential rationality: Each player’s strategy is optimal at every information set, given the
        strategies of other players and given their beliefs 𝜇 at that information set.
     2. Belief consistency: Beliefs are updated using Bayes’ rule whenever possible (i.e., at
        information sets reached with positive probability in equilibrium).

  Here’s what’s really going on: Condition (1) strengthens BNE by requiring optimality off the
  equilibrium path — even at information sets that are never reached in equilibrium, players must
  be playing optimally given their beliefs. Condition (2) ensures that beliefs are not arbitrary: at on-
  equilibrium-path information sets, they must be derived from the prior and the equilibrium
  strategies via Bayes’ rule.
  Bayes’ rule for belief updating:


    Let’s work through this step by step. We start with Bayes’ theorem for updating the
    uninformed player’s belief after observing an action (e.g., receiving an offer): 1. Let 𝐵 and 𝑁𝐵
    be two states (e.g., beneficial investment or not), with prior probabilities 𝑝(𝐵) and 𝑝(𝑁𝐵) 2. The
    uninformed player observes an action “Offer” and wants the posterior 𝜇(𝐵|Offer) = 𝑝(𝐵|Offer) 3.
                                𝑝(𝐵 ∩ Offer)
    Bayes’ rule: 𝑝(𝐵|Offer) =     𝑝(Offer)
                                             = 𝑝(𝐵)𝑝(Offer)
                                                    ⋅ 𝑝(Offer|𝐵)
                                                                 4. The denominator expands using the law of total
    probability: 𝑝(Offer) = 𝑝(𝐵) ⋅ 𝑝(Offer|𝐵) + 𝑝(𝑁𝐵) ⋅ 𝑝(Offer|𝑁𝐵) 5. →
                                              𝑝(𝐵) ⋅ 𝑝(Offer|𝐵)              𝑝(𝐵) ⋅ 𝑝(Offer|𝐵)
                  𝜇(𝐵|Offer) = 𝑝(𝐵|Offer) =                     =
                                                  𝑝(Offer)        𝑝(𝐵) ⋅ 𝑝(Offer|𝐵) + 𝑝(𝑁𝐵) ⋅ 𝑝(Offer|𝑁𝐵)
    Here’s what’s really going on: The posterior belief combines prior information 𝑝(𝐵) with new
    evidence (the likelihood 𝑝(Offer|𝐵) of observing the action in each state). The denominator
    normalises so that beliefs sum to 1. At off-equilibrium-path information sets (zero probability
    events), Bayes’ rule does not apply — PBE places no restrictions on off-path beliefs, which
    creates multiplicity.


  where 𝜇 is the uninformed player’s posterior belief that the state is 𝐵 (e.g., beneficial investment)
  after observing an action (e.g., receiving an offer).
  Off-the-equilibrium-path beliefs: At information sets that are reached with zero probability
  under the candidate equilibrium, Bayes’ rule does not apply. The PBE concept does not restrict
  what beliefs players can hold off the equilibrium path, which is why multiple PBEs can often be
  sustained (different off-path beliefs support different equilibria).
  Five-step procedure to find PBE (Munoz-Garcia, 2012): 1. Identify possible strategy profiles
  (pooling, separating, semi-separating). 2. Update the uninformed player’s beliefs using Bayes’ rule
  at all on-path information sets. 3. Given updated beliefs, find the uninformed player’s optimal
  response. 4. Verify that the informed player’s strategy is optimal given the uninformed player’s
  response. 5. Check consistency: if the informed player’s optimal strategy coincides with the
  candidate profile, it is a PBE.
  Relationship between concepts:
      Let’s work through this step by step. We start with the definitions of each equilibrium
      concept, ordered by how restrictive they are: 1. Nash Equilibrium (NE): No profitable
      unilateral deviation in the full game — the weakest condition 2. Subgame Perfect NE
      (SPNE): NE in every subgame — eliminates non-credible threats in sequential games, strictly
      stronger than NE 3. Perfect Bayesian Equilibrium (PBE): SPNE + sequential rationality
      at every information set + belief consistency via Bayes’ rule — applies to games with
      incomplete information 4. Bayesian NE (BNE): NE in type-contingent strategies with
      expected payoffs — applies to static games of incomplete information; in sequential games,
      PBE is stronger 5. The set inclusion relationships follow from the logical hierarchy of
      constraints: - Every SPNE is a NE (subgame perfection is a refinement) - Every PBE satisfies
      SPNE (if the game has perfect information) and BNE (sequential rationality + Bayes
      consistency) - Every BNE satisfies the NE condition (type-contingent NE is a special case of
      NE) 6. →
                               NE ⊃ SPNE ⊃ PBE ⊃ BNE (in sequential games)
      Here’s what’s really going on: Each refinement adds restrictions: SPNE adds subgame
      consistency, PBE adds belief-based sequential rationality and Bayesian updating, BNE (in
      sequential games) is the weakest incomplete-information concept. The “ ⊃ ” indicates set
      inclusion — the set of PBE is a subset of SPNE, which is a subset of NE. As we move
      rightward, equilibria become harder to find but more credible.


  Every PBE is a BNE and an SPNE (in games with perfect information), but the converse does not
  hold. PBE imposes stronger requirements on off-equilibrium beliefs and sequential rationality.




6.9 Key Formulas — Game Theory

Why this matters for your exam: This is your cheat sheet for the exam. Every formula here
has appeared in past papers. Memorise the grim trigger threshold and the best-response
conditions — they’re the most heavily tested.


 Concept              Key Condition                     Formula / Criterion

 Nash                 No unilateral profitable
                                                        𝑢𝑖 (𝑠*𝑖 , 𝑠*−𝑖 ) ≥ 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 ) ∀𝑠𝑖
 Equilibrium          deviation

 Mixed Strategy       Indifference among                𝐸𝑈𝑖 (action𝑗 ) = 𝐸𝑈𝑖 (action𝑘 ) for all 𝑗, 𝑘 with
 NE                   randomised actions                𝜎𝑖𝑗 > 0

                      Kakutani fixed-point on 𝐵𝑅        𝐵𝑅(𝑠) = ×𝑖 𝐵𝑅𝑖 (𝑠−𝑖 ) has fixed point if UHC,
 Nash Existence
                      correspondence                    convex, non-empty

 Dominant             Best response to every
                                                        𝑢𝑖 (𝑠*𝑖 , 𝑠−𝑖 ) > 𝑢𝑖 (𝑠𝑖 , 𝑠−𝑖 ) ∀𝑠𝑖 , 𝑠−𝑖
 Strategy             opponent strategy

 Bertrand BR
                      𝜕𝜋𝑖 /𝜕𝑝𝑖 = 0                      𝑝𝑖 = 30 + 𝑝𝑗 /4 (example)
 (differentiated)

 Cournot BR           𝜕𝜋𝑖 /𝜕𝑞𝑖 = 0                      𝑞𝑖 = (𝑎 − 𝑐 − 𝑏𝑞𝑗 )/(2𝑏)

 Strategic
                       2
 Complements          𝜕 𝜋𝑖 /𝜕𝑝𝑖 𝜕𝑝𝑗 > 0                 BR slopes upward
 (Bertrand)

 Strategic
                       2
 Substitutes          𝜕 𝜋𝑖 /𝜕𝑞𝑖 𝜕𝑞𝑗 < 0                 BR slopes downward
 (Cournot)
 Concept           Key Condition                        Formula / Criterion

 SPNE              NE in every subgame                  Backward induction algorithm

 Grim Trigger      𝛿 ≥ (𝜋𝑑𝑒𝑣 − 𝜋𝑐𝑜𝑜𝑝 )/(𝜋𝑑𝑒𝑣 − 𝜋𝑝𝑢𝑛 )   𝛿* = 2/3 in PD example

 Renegotiation-    Punishment must be self-
                                                        𝜋𝑝𝑢𝑛 cannot be Pareto-dominated by 𝜋𝑐𝑜𝑜𝑝
 Proofness         enforcing

 Folk Theorem      𝛿 sufficiently close to 1            Any feasible, IR payoff sustainable

                   Expected utility
 Bayesian NE                                            𝐸𝑈𝑖 (𝑠*𝑖 (𝜃𝑖 ), 𝑠*−𝑖 (𝜃−𝑖 ); 𝜃𝑖 ) ≥ 𝐸𝑈𝑖 (𝑠𝑖 (𝜃𝑖 ), 𝑠*−𝑖 (𝜃−𝑖 ); 𝜃𝑖 )
                   maximisation given type

 Perfect           Sequential rationality +             Strategies optimal at every info set given
 Bayesian Eq.      Bayes consistency                    beliefs

 Kreps-Milgrom-    Incomplete info sustains
                                                        Cooperation for 𝑇 − 𝐾 periods if 𝜀 > 0
 Roberts-Wilson    finite cooperation




Topic 7: Externalities & Public Goods

7.1 Overview: Market Failure and Externalities

Why this matters for your exam: Questions on externalities appear in nearly every past
paper — you’ll need to classify them by sign, source, and scope, then explain why they break
the First Welfare Theorem.
Definition: An externality exists when the production or consumption of a good directly affects
the welfare of others outside the price system — the cost or benefit is uncompensated
(Koutsoyiannis, Ch.23; Munoz-Garcia, SS8.1, p.530).
Classification:


 Dimension                                    Type                           Example

                                              Positive (benefit
 Sign                                                                        Vaccination, R&D, education
                                              spillover)

                                              Negative (cost
                                                                             Pollution, smoking, loud music
                                              spillover)

                                              Production                     Steel mill pollution harms
 Source
                                              externality                    fishery

                                              Consumption                    Bandwagon, snob, Veblen
                                              externality                    effects

                                              Private (between
 Scope                                                                       Steel-fishery
                                              agents)

                                              Public (many
                                                                             Climate change, clean air
                                              affected)


Fundamental problem: Externalities are a missing-market problem. There is no price for
the spillover effect, so the competitive equilibrium violates the First Welfare Theorem — Pareto
optimality is not achieved. (See Topic 7.5 for detailed analysis.)


  Koutsoyiannis (Ch.23) on the breakdown: Externalities create a divergence between private
  and social costs/benefits. Since externalities are not reflected in market prices, these prices provide
  “misleading information (signals) for an optimal allocation of resources.” The presence of
  externalities means “the model breaks down for two reasons: first, the Pareto-optimality conditions
  are violated; second, the constants embedded in the system lose their significance as ‘prices’,
  because they do not reflect all the costs and benefits of an action to the society as a whole”
  (Koutsoyiannis, Ch.23, p.541-542).




7.2 The Steel-Fishery Model: Canonical Production Externality

Why this matters for your exam: This is the canonical model you’ll be asked to analyse —
expect to compare unregulated, merged, Pigouvian, and Coase outcomes, often with a
numerical twist (see §7.2(v)).
Setup (Munoz-Garcia, SS8.1, p.531):
A steel mill (S) produces steel 𝑆 and pollution 𝑥 as a byproduct. A downstream fishery (F) is
harmed by the pollution.

     Steel mill’s cost: 𝐶𝑆 (𝑆, 𝑥) with 𝜕𝐶𝑆 /𝜕𝑥 < 0 (pollution reduces steel costs)
     Fishery’s cost: 𝐶𝐹 (𝐹, 𝑥) with 𝜕𝐶𝐹 /𝜕𝑥 > 0 (pollution raises fishing costs)
     Both firms are price-takers: 𝑃𝑆 , 𝑃𝐹 given

(i) Unregulated (Individual Profit Maximisation)

Steel mill:


  Let’s work through this step by step. We start with the definition of profit (revenue minus cost):
  1. Revenue = Price × Quantity = 𝑃𝑆 ⋅ 𝑆 2. Cost = 𝐶𝑆 (𝑆, 𝑥) — steel production cost depends on both
  output 𝑆 and pollution 𝑥 3. → Profit = Revenue − Cost = 𝑃𝑆 ⋅ 𝑆 − 𝐶𝑆 (𝑆, 𝑥)
  Here’s what’s really going on: The steel mill’s profit is decreasing in pollution costs (𝜕𝐶𝑆 /𝜕𝑥 < 0),
  so pollution acts as a cost-reducing byproduct that the mill has an incentive to increase.


                                             𝜋𝑆 = 𝑃𝑆 ⋅ 𝑆 − 𝐶𝑆 (𝑆, 𝑥)
FOCs:


  Let’s work through this step by step. We start from the profit function 𝜋𝑆 = 𝑃𝑆 𝑆 − 𝐶𝑆 (𝑆, 𝑥): 1. Take
  𝜕/𝜕𝑆 treating 𝑥 as fixed: 𝜕𝜋𝑆 /𝜕𝑆 = 𝑃𝑆 − 𝜕𝐶𝑆 /𝜕𝑆 2. Set = 0 for profit maximisation: 𝑃𝑆 − 𝜕𝐶𝑆 /𝜕𝑆 = 0 3. →
  Rearranging: 𝑃𝑆 = 𝜕𝐶𝑆 /𝜕𝑆 = 𝑀𝐶𝑆
  Here’s what’s really going on: Standard profit-maximising condition — you produce steel until
  marginal revenue (𝑃𝑆 ) equals marginal cost (𝑀𝐶𝑆 ). No externality appears at this stage.


                                    𝜕𝜋𝑆       𝜕𝐶
                                        = 𝑃𝑆 − 𝑆 = 0         ⇒    𝑃𝑆 = 𝑀𝐶𝑆
                                     𝜕𝑆        𝜕𝑆

  Let’s work through this step by step. We start from the profit function 𝜋𝑆 = 𝑃𝑆 𝑆 − 𝐶𝑆 (𝑆, 𝑥): 1. Take
  𝜕/𝜕𝑥 treating 𝑆 as fixed: 𝜕𝜋𝑆 /𝜕𝑥 = −𝜕𝐶𝑆 /𝜕𝑥 2. Set = 0 for profit maximisation: −𝜕𝐶𝑆 /𝜕𝑥 = 0 3. →
  Therefore 𝜕𝐶𝑆 /𝜕𝑥 = 0
  Here’s what’s really going on: The steel mill increases pollution 𝑥 until the marginal private
  benefit (−𝜕𝐶𝑆 /𝜕𝑥, the cost saving from additional pollution) falls to zero. Critically, you (as the
  mill) ignore the damage imposed on the fishery — this is the externality.
                                         𝜕𝜋𝑆   𝜕𝐶                𝜕𝐶𝑆
                                             =− 𝑆 =0        ⇒        =0
                                          𝜕𝑥    𝜕𝑥                𝜕𝑥
Fishery:


  Let’s work through this step by step. We start with the definition of profit for the fishery: 1.
  Revenue = 𝑃𝐹 ⋅ 𝐹 2. Cost = 𝐶𝐹 (𝐹, 𝑥) — fishing cost depends on own output 𝐹 and exogenous pollution
  𝑥 3. → Profit = 𝑃𝐹 ⋅ 𝐹 − 𝐶𝐹 (𝐹, 𝑥)
  Here’s what’s really going on: The fishery’s costs increase with pollution (𝜕𝐶𝐹 /𝜕𝑥 > 0), but you (as
  the fishery) have no control over 𝑥 — you treat pollution as an exogenous cost shifter.


                                             𝜋𝐹 = 𝑃𝐹 ⋅ 𝐹 − 𝐶𝐹 (𝐹, 𝑥)

  Let’s work through this step by step. We start from the profit function 𝜋𝐹 = 𝑃𝐹 𝐹 − 𝐶𝐹 (𝐹, 𝑥): 1. Take
  𝜕/𝜕𝐹 treating 𝑥 as exogenous: 𝜕𝜋𝐹 /𝜕𝐹 = 𝑃𝐹 − 𝜕𝐶𝐹 /𝜕𝐹 2. Set = 0: 𝑃𝐹 − 𝜕𝐶𝐹 /𝜕𝐹 = 0 3. → 𝑃𝐹 = 𝜕𝐶𝐹 /𝜕𝐹 = 𝑀𝐶𝐹
  Here’s what’s really going on: The fishery optimises output given pollution, equating price to
  marginal cost. It passively absorbs the external damage from pollution.


                                       𝜕𝜋𝐹       𝜕𝐶
                                           = 𝑃𝐹 − 𝐹 = 0      ⇒    𝑃𝐹 = 𝑀𝐶𝐹
                                        𝜕𝐹        𝜕𝐹
Result: Pollution level 𝑥* is too high relative to the social optimum 𝑥∘ because the steel mill
internalises only its private cost, not the external damage.

(ii) Joint Profit Maximisation (Merger)

Maximise: Π𝐽 = 𝑃𝑆 𝑆 − 𝐶𝑆 (𝑆, 𝑥) + 𝑃𝐹 𝐹 − 𝐶𝐹 (𝐹, 𝑥)
FOCs for 𝑆 and 𝐹 unchanged. For pollution:


  Let’s work through this step by step. We start from joint profit Π𝐽 = 𝑃𝑆 𝑆 − 𝐶𝑆 (𝑆, 𝑥) + 𝑃𝐹 𝐹 − 𝐶𝐹 (𝐹, 𝑥):
  1. Take 𝜕/𝜕𝑥: 𝜕Π𝐽 /𝜕𝑥 = −𝜕𝐶𝑆 /𝜕𝑥 − 𝜕𝐶𝐹 /𝜕𝑥 2. Set = 0: −𝜕𝐶𝑆 /𝜕𝑥 − 𝜕𝐶𝐹 /𝜕𝑥 = 0 3. → Both firms’ pollution-
  related costs are now internalised in the same objective
  Here’s what’s really going on: Unlike the unregulated case where the steel mill sets −𝜕𝐶𝑆 /𝜕𝑥 = 0,
  the merged firm also accounts for the fishery’s marginal damage 𝜕𝐶𝐹 /𝜕𝑥. The externality is
  internalised by joint ownership.


                                            𝜕Π𝐽   𝜕𝐶  𝜕𝐶
                                                =− 𝑆 − 𝐹 =0
                                             𝜕𝑥    𝜕𝑥  𝜕𝑥

  Let’s work through this step by step. We start from the joint profit FOC −𝜕𝐶𝑆 /𝜕𝑥 − 𝜕𝐶𝐹 /𝜕𝑥 = 0: 1.
  Add 𝜕𝐶𝐹 /𝜕𝑥 to both sides: −𝜕𝐶𝑆 /𝜕𝑥 = 𝜕𝐶𝐹 /𝜕𝑥 2. This is the optimality condition for the merged firm
  Here’s what’s really going on: The social optimum 𝑥∘ equates the marginal benefit of
  pollution to the steel mill (cost saving −𝜕𝐶𝑆 /𝜕𝑥) with the marginal damage to the fishery (𝜕𝐶𝐹 /𝜕𝑥).
  Since 𝜕𝐶𝐹 /𝜕𝑥 > 0, we require −𝜕𝐶𝑆 /𝜕𝑥 > 0, meaning less pollution than in the unregulated case:
  𝑥∘ < 𝑥* .


                                                      𝜕𝐶𝑆 𝜕𝐶𝐹
                                                 ⇒−       =
                                                       𝜕𝑥   𝜕𝑥
The social optimum 𝑥∘ equates the marginal benefit of pollution to the steel mill (cost saving)
with the marginal damage to the fishery. Since 𝜕𝐶𝐹 /𝜕𝑥 > 0, we require −𝜕𝐶𝑆 /𝜕𝑥 > 0 — less
pollution than in the unregulated case: 𝑥∘ < 𝑥* .

MC ($)
  |      MSC = MC_S + MC_F (social marginal cost)
  |            /
  |           /    MC_S (private marginal cost)
  |                   /     /
  |               /        /
  |           /        /
  |          / /
  |         //
  |     /
  | /
  |/___________________                      Pollution (x)
            x(degr)             x(ast)


        𝑥* : unregulated equilibrium (steel mill ignores damage)
        𝑥∘ : social optimum (marginal benefit = marginal damage)
        Shaded triangle between 𝑥∘ and 𝑥* = deadweight loss

(iii) Pigouvian Tax (Pigou, 1920)

A per-unit tax on pollution 𝜏 internalises the externality:


  Let’s work through this step by step. We start from the social optimum condition
  −𝜕𝐶𝑆 /𝜕𝑥 = 𝜕𝐶𝐹 /𝜕𝑥 at 𝑥 = 𝑥∘ : 1. The Pigouvian tax 𝜏 modifies the steel mill’s FOC: with tax, profit is
  𝜋𝑆 = 𝑃𝑆 𝑆 − 𝐶𝑆 (𝑆, 𝑥) − 𝜏𝑥 2. New FOC: 𝜕𝜋𝑆 /𝜕𝑥 = −𝜕𝐶𝑆 /𝜕𝑥 − 𝜏 = 0 ⇒ −𝜕𝐶𝑆 /𝜕𝑥 = 𝜏 3. To align private and
  social incentives, we set 𝜏 equal to the marginal damage at the social optimum: 𝜏* = 𝜕𝐶𝐹 /𝜕𝑥|𝑥 = 𝑥∘ 4.
  Then the firm’s private FOC −𝜕𝐶𝑆 /𝜕𝑥 = 𝜏* reproduces the social optimum −𝜕𝐶𝑆 /𝜕𝑥 = 𝜕𝐶𝐹 /𝜕𝑥
  Here’s what’s really going on: The tax makes the steel mill internalise the external cost by
  raising its effective marginal cost of pollution. When 𝜏 = 𝑀𝐸𝐶 at 𝑥∘ , the firm voluntarily chooses the
  socially optimal pollution level.


                                                                           𝜕𝐶𝐹
                                                                    𝜏* =       |
                                                                            𝜕𝑥 𝑥 = 𝑥∘
Effect: The steel mill’s new FOC becomes −𝜕𝐶𝑆 /𝜕𝑥 = 𝜏. Setting 𝜏 = 𝜕𝐶𝐹 /𝜕𝑥 at 𝑥∘ aligns private
incentives with social optimality.
Graphical analysis (Munoz-Garcia, Fig.9.6-9.7): The Pigouvian tax operates as follows:

  $
  |                                      π'(x) = MB (marginal benefit to steel mill)
  |                                   \
  |                                      \
  |                                       \                 MSC = MPC + MEC
  |                                          \             /
  |          τ* = MEC(x°)------\-----/-------- Marginal External Cost at x°
  |                                              \     /
  |                                               \ /
  |                                                  \________ MPC (private marginal cost)
  |
  |           DWL (tax revenue
  |           rectangle = τ* × x°)
  |___________________________________                           Pollution (x)
                      x°              x*


        MSC = Marginal Social Cost = MPC (private marginal cost of steel) + MEC (marginal
        external cost imposed on fishery)
        The Pigouvian tax 𝜏* is set equal to the MEC evaluated at the social optimum 𝑥∘ :
        𝜏* = 𝜕𝐶𝐹 /𝜕𝑥|𝑥 = 𝑥∘
        This shifts the steel mill’s effective marginal cost upward, making it internalise the
        externality
        DWL = Deadweight loss = area between MB and MSC over [𝑥∘ , 𝑥* ] — the welfare gain
        from correcting the externality
     The tax generates government revenue of 𝜏* ⋅ 𝑥∘ , which can be used to compensate the
     damaged party

Pigouvian Subsidy (for positive externalities): A per-unit subsidy 𝑠 equal to the marginal
external benefit at the social optimum encourages under-provided activities (e.g., R&D,
vaccination).

(iv) Coase Theorem (Coase, 1960)

Theorem: If property rights are well-defined and transaction costs are zero, private
bargaining between affected parties achieves the efficient outcome regardless of the initial
allocation of rights.
Case A — Fishery has right to clean water: - Fishery can demand zero pollution. - Steel mill
can pay the fishery to allow some pollution. - They bargain to 𝑥∘ where −𝜕𝐶𝑆 /𝜕𝑥 = 𝜕𝐶𝐹 /𝜕𝑥. - Steel
mill pays compensation between 𝜕𝐶𝐹 /𝜕𝑥 and −𝜕𝐶𝑆 /𝜕𝑥 per unit.
Case B — Steel mill has right to pollute: - Steel mill can pollute up to 𝑥* . - Fishery can pay
the steel mill to reduce pollution. - They bargain to the same 𝑥∘ . - Fishery pays steel mill
between −𝜕𝐶𝑆 /𝜕𝑥 and 𝜕𝐶𝐹 /𝜕𝑥 per unit of reduction.
Key insight: The efficient pollution level 𝑥∘ is identical in both cases — only the distribution of
welfare (who pays whom) differs.
Why Coase fails in practice: 1. High transaction costs — many parties cannot bargain
costlessly 2. Free-rider problem — diffuse victims have incentive to free-ride on others’
bargaining 3. Asymmetric information — parties may not know the true damage/benefit 4.
Legal constraints — property rights may be poorly defined or unenforceable
Exam Tip: Draw the marginal benefit (to steel mill, downward-sloping) and marginal cost (to
fishery, upward-sloping) diagram. The social optimum equates MB = MC. Shade the DWL from
excessive pollution. State Coase Theorem explicitly, then immediately give its limitations.

(v) Numerical Example: Fully Solved Steel-Fishery (Munoz-Garcia, Ch.9, Example 9.1)

Let us specify functional forms to obtain explicit numerical solutions.
Setup: The steel mill produces steel 𝑆 and pollution 𝑥 as a byproduct. Output is 𝑆 = 𝛼𝑥, where
                                                                                                     2
𝛼 > 0 is the output-pollution ratio. The steel mill’s profit function is 𝜋𝑆 = 𝑃𝑆 𝑆 − 𝑐𝑆 , which in
terms of 𝑥 becomes:


  Let’s work through this step by step. We start from the steel mill’s profit in terms of 𝑆:
                                                                                                2
  𝜋𝑆 = 𝑃𝑆 𝑆 − 𝑐𝑆2 with production 𝑆 = 𝛼𝑥: 1. Substitute 𝑆 = 𝛼𝑥: 𝜋𝑆 (𝛼𝑥) = 𝑃𝑆 ⋅ (𝛼𝑥) − 𝑐(𝛼𝑥) 2. Expand:
  𝜋𝑆 (𝑥) = (𝑃𝑆 𝛼)𝑥 − 𝑐𝛼2 𝑥2 3. This expresses profit directly as a function of pollution 𝑥, since steel output
  𝑆 is proportional to pollution
  Here’s what’s really going on: Pollution is a productive input for the steel mill — more
  pollution enables more steel output, but at a diminishing rate due to the quadratic cost term.


                                                              2
                                    𝜋𝑆 (𝑥) = 𝑃𝑆 ⋅ 𝛼𝑥 − 𝑐(𝛼𝑥) = (𝑃𝑆 𝛼)𝑥 − 𝑐𝛼2 𝑥2
                               2
Define 𝑎 ≡ 𝑃𝑆 𝛼 and 𝑏 ≡ 2𝑐𝛼 . The marginal profit from pollution is:


  Let’s work through this step by step. We start from 𝜋𝑆 (𝑥) = (𝑃𝑆 𝛼)𝑥 − 𝑐𝛼2 𝑥2 : 1. Rewrite using
  𝑎 = 𝑃𝑆 𝛼: 𝜋𝑆 (𝑥) = 𝑎𝑥 − 𝑐𝛼2 𝑥2 2. Differentiate: 𝜋′𝑆 (𝑥) = 𝑎 − 2𝑐𝛼2 𝑥 3. Define 𝑏 ≡ 2𝑐𝛼2 , so 𝜋′𝑆 (𝑥) = 𝑎 − 𝑏𝑥 4.
  This is linear and decreasing in 𝑥 (since 𝑏 > 0), reflecting diminishing returns to pollution
  Here’s what’s really going on: The marginal benefit of pollution is a downward-sloping line —
  each additional unit of pollution adds less to profit as pollution increases.
                                                    𝜋′𝑆 (𝑥) = 𝑎 − 𝑏𝑥
The fishery suffers damage 𝑣(𝑥) from pollution. Let the damage function be:


  Let’s work through this step by step. We start from a quadratic specification for the fishery’s
  damage from pollution: 1. Damage function: 𝑣(𝑥) = 𝛽 − 𝑐𝑥 − 𝑑2 𝑥2 2. Differentiate: 𝑣′ (𝑥) = −𝑐 − 𝑑𝑥 3.
  Marginal damage (positive) is −𝑣′ (𝑥) = 𝑐 + 𝑑𝑥, which increases linearly in 𝑥 4. 𝛽 is a constant
  representing baseline fishery value without pollution
  Here’s what’s really going on: The quadratic damage function generates linear marginal damage
  — each unit of pollution causes progressively more harm to the fishery.


                            𝑣(𝑥) = 𝛽 − 𝑐𝑥 − 𝑑 𝑥2 ⇒ 𝑣′ (𝑥) = −𝑐 − 𝑑𝑥
                                             2
so the marginal damage is −𝑣′ (𝑥) = 𝑐 + 𝑑𝑥, which increases in 𝑥.
Parameter values: Let 𝛼 = 2, 𝑃𝑆 = 10, 𝑐 = 1, so 𝑎 = 𝑃𝑆 𝛼 = 20 and 𝑏 = 2𝑐𝛼2 = 2(1)(4) = 8. For the
fishery, let 𝑐 = 2, 𝑑 = 4 (these are damage function parameters, distinct from the steel mill’s 𝑐).
Thus:


  Let’s work through this step by step. We start from 𝜋′𝑆 (𝑥) = 𝑎 − 𝑏𝑥 with 𝑎 = 20, 𝑏 = 8: 1. Substitute:
  𝜋′𝑆 (𝑥) = 20 − 8𝑥 2. This is the linear marginal benefit of pollution for the steel mill
  Here’s what’s really going on: At 𝑥 = 0, marginal benefit is 20; at 𝑥 = 2.5, marginal benefit falls to
  zero. The mill would never pollute beyond 𝑥 = 2.5.


                                                    𝜋′𝑆 (𝑥) = 20 − 8𝑥

                                                                        ′
  Let’s work through this step by step. We start from −𝑣 (𝑥) = 𝑐 + 𝑑𝑥 with 𝑐 = 2, 𝑑 = 4: 1. Substitute:
    ′
  −𝑣 (𝑥) = 2 + 4𝑥 2. This is the linear marginal damage function for the fishery
  Here’s what’s really going on: At 𝑥 = 0, marginal damage is 2; at 𝑥 = 1.5, marginal damage is 8.
  The fishery suffers increasing harm from each unit of pollution.


                                                    −𝑣′ (𝑥) = 2 + 4𝑥
Step 1: Unregulated equilibrium 𝑥*
The steel mill maximises 𝜋𝑆 (𝑥) alone:


  Let’s work through this step by step. We start from the unregulated profit-maximisation
  condition 𝜋′𝑆 (𝑥* ) = 0: 1. 𝜋′𝑆 (𝑥* ) = 20 − 8𝑥* = 0 2. Solve: 8𝑥* = 20 3. → 𝑥* = 20/8 = 2.5
  Here’s what’s really going on: Without regulation, the steel mill pollutes until marginal private
  benefit is zero. It ignores all harm to the fishery.


                                𝜋′𝑆 (𝑥* ) = 0   ⇒     20 − 8𝑥* = 0          ⇒       𝑥* = 2.5
                                 ∘
Step 2: Social optimum 𝑥
The social planner maximises 𝜋𝑆 (𝑥) + 𝑣(𝑥):


  Let’s work through this step by step. We start from the social optimum condition
  𝜋′𝑆 (𝑥∘ ) = −𝑣′ (𝑥∘ ): 1. Substitute the functional forms: 20 − 8𝑥∘ = 2 + 4𝑥∘ 2. Collect terms:
  20 − 2 = 8𝑥∘ + 4𝑥∘ 3. Simplify: 18 = 12𝑥∘ 4. → 𝑥∘ = 18/12 = 1.5
  Here’s what’s really going on: The social planner equates marginal benefit to the steel mill with
                                                                                ∘
  marginal damage to the fishery. The socially optimal pollution 𝑥                  = 1.5 is well below the unregulated
         *
  level 𝑥 = 2.5.


                                  𝜋′𝑆 (𝑥∘ ) = −𝑣′ (𝑥∘ )   ⇒     20 − 8𝑥∘ = 2 + 4𝑥∘
  Let’s work through this step by step. Solving the social optimum condition step by step: 1.
  20 − 8𝑥∘ = 2 + 4𝑥∘ 2. Subtract 2: 18 − 8𝑥∘ = 4𝑥∘ 3. Add 8𝑥∘ : 18 = 12𝑥∘ 4. → 𝑥∘ = 18/12 = 1.5
  Here’s what’s really going on: Each additional unit of pollution generates 𝑀𝐵 = 20 − 8𝑥 for the mill
  but costs 𝑀𝐷 = 2 + 4𝑥 to the fishery. The optimum balances these at the margin.


                        20 − 2 = 8𝑥∘ + 4𝑥∘ ⇒ 18 = 12𝑥∘ ⇒ 𝑥∘ = 1.5
The socially optimal pollution level 𝑥∘ = 1.5 is well below the unregulated level 𝑥* = 2.5.
Step 3: Pigouvian tax
The per-unit tax that restores efficiency is:


  Let’s work through this step by step. We start from the Pigouvian tax formula 𝜏* = −𝑣′ (𝑥)
                      ∘                                        ′                               ∘
  evaluated at 𝑥 = 𝑥 : 1. Marginal damage function: −𝑣 (𝑥) = 2 + 4𝑥 2. Evaluate at 𝑥               = 1.5:
   *                      *
  𝜏 = 2 + 4(1.5) 3. → 𝜏 = 2 + 6 = 8
  Here’s what’s really going on: The optimal tax equals the marginal damage caused by pollution
  at the social optimum — 8 per unit. This forces the mill to internalise the external cost.


                                         𝜏* = −𝑣′ (𝑥)|𝑥 = 𝑥∘ = 2 + 4(1.5) = 8
Verification: With tax 𝜏 = 8, the steel mill’s FOC becomes 𝜋′𝑆 (𝑥) = 𝜏:


  Let’s work through this step by step. We start from the steel mill’s profit-maximisation with tax
  𝜏: max⁡𝜋𝑆 (𝑥) − 𝜏𝑥: 1. FOC: 𝜋′𝑆 (𝑥) = 𝜏, i.e., 20 − 8𝑥 = 8 2. Solve: 20 − 8 = 8𝑥, so 12 = 8𝑥 3. → 𝑥 = 12/8 = 1.5 4.
  This exactly equals 𝑥∘ — verification successful
  Here’s what’s really going on: With the Pigouvian tax, the mill’s private marginal benefit net of
  tax (20 − 8𝑥 − 8) is zero at 𝑥 = 1.5, exactly the social optimum.


                                  20 − 8𝑥 = 8       ⇒   8𝑥 = 12    ⇒      𝑥 = 1.5 ✓
Step 4: Welfare comparison

                                                                               𝑥*
  Let’s work through this step by step. We start from 𝜋𝑆 (𝑥* ) = ∫0 𝜋′𝑆 (𝑥)𝑑𝑥 (integral of marginal
              ′                                          *         2.5                         2 2.5
  profit): 1. 𝜋𝑆 (𝑥) = 20 − 8𝑥 2. Integrate from 0 to 𝑥 = 2.5: ∫0 (20 − 8𝑥)𝑑𝑥 = [20𝑥 − 4𝑥 ]0           3. Evaluate:
  20(2.5) − 4(6.25) = 50 − 25 = 25 4. This is the total profit the steel mill earns at the unregulated
  equilibrium
  Here’s what’s really going on: The integral of marginal profit gives total profit (up to a constant).
  At 𝑥* = 2.5, the mill earns 𝜋𝑆 = 25.

                                        2.5                              2.5
                              𝜋𝑆 (𝑥* ) = ∫0 (20 − 8𝑥)𝑑𝑥 = [20𝑥 − 4𝑥2 ]0 = 50 − 25 = 25

                                                                               𝑥∘
  Let’s work through this step by step. We start from 𝜋𝑆 (𝑥∘ ) = ∫0 𝜋′𝑆 (𝑥)𝑑𝑥: 1. Integrate
                                              1.5
  𝜋′𝑆 (𝑥) = 20 − 8𝑥 from 0 to 𝑥∘ = 1.5 2. ∫0 (20 − 8𝑥)𝑑𝑥 = [20𝑥 − 4𝑥2 ]1.5
                                                                       0
                                                                           3. Evaluate:
  20(1.5) − 4(2.25) = 30 − 9 = 21 4. The mill’s profit is lower at 𝑥∘ (21 < 25) — but social welfare is
  higher
  Here’s what’s really going on: The steel mill loses 4 in profit from reduced pollution, but the
  fishery gains more than this in reduced damage.


                              𝜋𝑆 (𝑥∘ ) = ∫1.5 (20 − 8𝑥)𝑑𝑥 = [20𝑥 − 4𝑥2 ]1.5
                                                                        0
                                                                            = 30 − 9 = 21
                                         0


  Let’s work through this step by step. We start from the fishery damage function
                                                                                     2
  𝑣(𝑥) = 𝛽 − 𝑐𝑥 − 𝑑2 𝑥2 with 𝑐 = 2, 𝑑 = 4: 1. At 𝑥* = 2.5: 𝑣(𝑥* ) = 𝛽 − 2(2.5) − 2(2.5) 2. =
  𝛽 − 5 − 2(6.25) = 𝛽 − 5 − 12.5 = 𝛽 − 17.5 3. The fishery suffers damage of 17.5 (relative to baseline 𝛽) at
  the unregulated equilibrium
  Here’s what’s really going on: The fishery’s value is substantially reduced by the high pollution
  level 𝑥* = 2.5.

                                                            2
                                𝑣(𝑥* ) = 𝛽 − 2(2.5) − 2(2.5) = 𝛽 − 5 − 12.5 = 𝛽 − 17.5

  Let’s work through this step by step. We start from 𝑣(𝑥) evaluated at 𝑥∘ = 1.5: 1.
                            2
  𝑣(𝑥∘ ) = 𝛽 − 2(1.5) − 2(1.5) 2. = 𝛽 − 3 − 2(2.25) = 𝛽 − 3 − 4.5 = 𝛽 − 7.5 3. Damage is only 7.5 at the social
  optimum, compared to 17.5 at 𝑥* — a reduction of 10
  Here’s what’s really going on: Reducing pollution from 𝑥* = 2.5 to 𝑥∘ = 1.5 reduces damage to the
  fishery by 10, while the steel mill loses only 4 in profit — net social gain of 6.


                                                                2
                            𝑣(𝑥∘ ) = 𝛽 − 2(1.5) − 2(1.5) = 𝛽 − 3 − 4.5 = 𝛽 − 7.5
Social welfare at unregulated equilibrium: 𝜋𝑆 (𝑥* ) + 𝑣(𝑥* ) = 25 + 𝛽 − 17.5 = 𝛽 + 7.5 Social welfare at
social optimum: 𝜋𝑆 (𝑥∘ ) + 𝑣(𝑥∘ ) = 21 + 𝛽 − 7.5 = 𝛽 + 13.5
Welfare gain from regulation: (𝛽 + 13.5) − (𝛽 + 7.5) = 6 This is the DWL eliminated by the
Pigouvian tax — the area between MB and MD curves from 𝑥∘ to 𝑥* .
Step 5: Coase bargaining verification

     Case A (fishery has rights): Starting from 𝑥 = 0, the steel mill pays
     𝑇 = 𝜋𝑆 (𝑥∘ ) − 𝜋𝑆 (0) = 21 − 0 = 21 for the right to pollute 𝑥∘ = 1.5 units. Fishery’s final utility:
     𝑣(𝑥∘ ) + 𝑇 = (𝛽 − 7.5) + 21 = 𝛽 + 13.5. Steel mill’s final profit: 𝜋𝑆 (𝑥∘ ) − 𝑇 = 21 − 21 = 0.
     Case B (steel mill has rights): Starting from 𝑥* = 2.5, the fishery pays
     𝑇 = 𝜋𝑆 (𝑥* ) − 𝜋𝑆 (𝑥∘ ) = 25 − 21 = 4 to reduce pollution to 𝑥∘ . Steel mill’s final profit:
     𝜋𝑆 (𝑥∘ ) + 𝑇 = 21 + 4 = 25. Fishery’s final utility: 𝑣(𝑥∘ ) − 𝑇 = (𝛽 − 7.5) − 4 = 𝛽 − 11.5.
                      ∘
Both cases reach 𝑥 = 1.5, but the steel mill’s profit is {0, 25} and the fishery’s utility is
{𝛽 + 13.5, 𝛽 − 11.5} respectively — only the distribution differs.

  Munoz-Garcia Insight — Formal Coase Proof:
  Property rights assigned to the affected individual (fishery): The fishery makes a take-it-or-
  leave-it offer: the steel mill pays 𝑇 for the right to pollute 𝑥 units. The mill accepts iff 𝜋(𝑥) − 𝑇 ≥ 𝜋(0)
  (participation constraint). The fishery then solves:


     Let’s work through this step by step. We start from the fishery’s optimisation when it holds
     property rights: 1. Fishery’s utility = value from pollution 𝑣(𝑥) + initial wealth 𝑤𝐹 + transfer
     received 𝑇 2. Constraint: steel mill accepts iff profit after payment 𝜋(𝑥) − 𝑇 is at least as good as
     shutting down pollution 𝜋(0) 3. → Maximise 𝑣(𝑥) + 𝑤𝐹 + 𝑇 subject to 𝜋(𝑥) − 𝑇 ≥ 𝜋(0)
     Here’s what’s really going on: The fishery chooses both the pollution level 𝑥 and the
     transfer 𝑇 to maximise its own utility, subject to the mill’s participation.



                                        max 𝑣(𝑥) + 𝑤𝐹 + 𝑇       s.t.   𝜋(𝑥) − 𝑇 ≥ 𝜋(0)
                                        𝑥 ≥ 0, 𝑇



  The constraint binds (𝑇 = 𝜋(𝑥) − 𝜋(0)), so the problem reduces to:


     Let’s work through this step by step. We start from the constrained maximisation: 1. The
     participation constraint binds because the fishery can always increase 𝑇 (its own utility) until
     the mill is just indifferent 2. Set 𝜋(𝑥) − 𝑇 = 𝜋(0), so 𝑇 = 𝜋(𝑥) − 𝜋(0) 3. Substitute into objective:
     𝑣(𝑥) + 𝑤𝐹 + 𝜋(𝑥) − 𝜋(0) 4. The constant 𝑤𝐹 − 𝜋(0) does not affect the choice of 𝑥
      Here’s what’s really going on: The transfer 𝑇 drops out as a transfer payment — only the
      efficiency condition for 𝑥 matters.



                                                  max𝑣(𝑥) + 𝑤𝐹 + 𝜋(𝑥) − 𝜋(0)
                                                  𝑥≥0


          ′        ′           ′        ′
   FOC: 𝑣 (𝑥) + 𝜋 (𝑥) = 0 ⇒ 𝜋 (𝑥) = −𝑣 (𝑥)
   Property rights assigned to the polluter (steel mill): The fishery pays 𝑇 for pollution reduction.
   Starting from 𝑥* , the mill accepts iff 𝜋(𝑥) + 𝑇 ≥ 𝜋(𝑥* ). The fishery solves:


      Let’s work through this step by step. We start from the fishery’s optimisation when the
      steel mill holds property rights: 1. Fishery’s utility = value 𝑣(𝑥) + initial wealth 𝑤𝐹 − payment
      to mill 𝑇 2. Constraint: mill accepts iff profit + payment 𝜋(𝑥) + 𝑇 is at least as good as status quo
      𝜋(𝑥* ) 3. → Maximise 𝑣(𝑥) + 𝑤𝐹 − 𝑇 subject to 𝜋(𝑥) + 𝑇 ≥ 𝜋(𝑥* )
      Here’s what’s really going on: Here the fishery pays the mill for pollution reduction, so 𝑇
      enters negatively in the objective.



                                        max 𝑣(𝑥) + 𝑤𝐹 − 𝑇      s.t.   𝜋(𝑥) + 𝑇 ≥ 𝜋(𝑥* )
                                       𝑥 ≥ 0, 𝑇



   The constraint binds (𝑇 = 𝜋(𝑥* ) − 𝜋(𝑥)), reducing to:


      Let’s work through this step by step. We start from the constrained maximisation: 1. Bind
      the constraint: 𝜋(𝑥) + 𝑇 = 𝜋(𝑥* ), so 𝑇 = 𝜋(𝑥* ) − 𝜋(𝑥) 2. Substitute into objective:
      𝑣(𝑥) + 𝑤𝐹 − [𝜋(𝑥* ) − 𝜋(𝑥)] = 𝑣(𝑥) + 𝑤𝐹 − 𝜋(𝑥* ) + 𝜋(𝑥) 3. The constant 𝑤𝐹 − 𝜋(𝑥* ) does not affect the
      choice of 𝑥
      Here’s what’s really going on: Same structure as Case A — only the constant term differs,
      so the FOC for 𝑥 is identical.



                                                  max𝑣(𝑥) + 𝑤𝐹 − 𝜋(𝑥* ) + 𝜋(𝑥)
                                                  𝑥≥0


          ′        ′           ′        ′
   FOC: 𝑣 (𝑥) + 𝜋 (𝑥) = 0 ⇒ 𝜋 (𝑥) = −𝑣 (𝑥)
                                                         ′        ′                                 ∘
   Conclusion: In both cases, the FOC yields 𝜋 (𝑥) = −𝑣 (𝑥), i.e., −𝜕𝐶𝑆 /𝜕𝑥 = 𝜕𝐶𝐹 /𝜕𝑥 at 𝑥 = 𝑥 . The
   bargaining outcome is the same efficient pollution level regardless of who holds the property
   rights. Only the distribution of welfare differs: - If the fishery has rights: steel mill pays
   𝑇 = 𝜋(𝑥∘ ) − 𝜋(0), so fishery enjoys 𝑣(𝑥∘ ) + 𝑇 - If the steel mill has rights: fishery pays 𝑇 = 𝜋(𝑥* ) − 𝜋(𝑥∘ ),
   so steel mill keeps 𝜋(𝑥* )
   (Munoz-Garcia, Ch.9, pp.658-661)




7.3 Consumption Externalities

Why this matters for your exam: Consumption externalities test whether you understand
that preferences aren’t independent. Expect short-form questions asking you to distinguish
bandwagon, snob, and Veblen effects, and to explain why they violate the assumptions of the
2 × 2 × 2 model.
Definition (Leibenstein, 1950): One consumer’s utility depends on others’ consumption.
Formalisation: 𝑈𝑖 = 𝑈𝑖 (𝑋𝑖 , 𝑌𝑖 , 𝑋𝑗 , 𝑌𝑗 ).
 Effect          Sign        Description              Demand Effect                Example

                             Demand increases as                                   Smartphones,
 Bandwagon       Positive                             More elastic
                             others consume                                        social media

                             Demand falls as                                       Luxury goods,
 Snob            Negative                             Less elastic
                             others consume                                        art

                             Demand increases
                                                                                   Designer
 Veblen          Mixed       with price (status       Upward-sloping segment
                                                                                   handbags
                             signal)


Bandwagon effect: “Keeping up with the Joneses” — the desire to conform. Market demand
becomes more elastic (reinforcing price changes). Network effects.
Snob effect: The desire for exclusivity. Market demand becomes less elastic — snobs pay a
premium for scarcity. A price cut may reduce demand (if it brings in the masses).
Veblen effect (Veblen, 1899): Conspicuous consumption — the good itself is a status signal, so
demand can slope upward over some range.
Significance for GE: These externalities violate assumption 3 of the 2 × 2 × 2 model
(independent preferences). The competitive equilibrium is no longer Pareto-optimal — the First
Welfare Theorem fails.
Exam Tip: Draw the three demand curves relative to the normal demand curve. Bandwagon
rotates D outward (more elastic), snob rotates D inward (less elastic), Veblen creates a
backward-bending segment.



7.4 Public Goods & Common Resources

Why this matters for your exam: The Samuelson condition, free-rider problem, and Tragedy
of the Commons are core exam material. You’ll need to derive the condition, explain why
private provision fails, and discuss Lindahl prices as a solution.

7.4.1 Taxonomy of Goods


          Excludable                           Non-Excludable

 Rival    Private good (food, clothing)        Common resource (fisheries, grazing land)

 Non-
          Club good (cable TV, toll road)      Public good (national defence, clean air)
 Rival


7.4.2 Public Goods

Characteristics: - Non-rivalry: One person’s consumption does not reduce the quantity
available for others. Marginal cost of an additional user = 0. - Non-excludability: Impossible
(or prohibitively costly) to prevent anyone from consuming the good.
The Free-Rider Problem: Because individuals cannot be excluded from consuming a public
good, each has an incentive to let others pay for it and enjoy the benefits for free. Result: the
good is under-provided (or not provided at all) by the private market.
Samuelson Condition for Efficient Provision (Samuelson, 1954):
For a public good 𝐺 and private good 𝑋, efficiency requires:
  Let’s work through this step by step. We start from the efficiency condition for a public good: 1.
                                                                        𝑖
  For a private good, efficiency requires MRS𝐺, 𝑋 = MRT𝐺, 𝑋 for each consumer 𝑖 — each person’s
  marginal willingness to pay equals the marginal cost 2. For a public good, the same unit of 𝐺 is
  consumed by everyone simultaneously (non-rivalry) 3. The social benefit of one more unit of 𝐺 is the
                                                                                𝑖
  sum of all individuals’ marginal benefits: ∑ MRS𝐺, 𝑋 4. Efficiency requires this sum to equal the
                                                                    𝑖
                              𝑖
  marginal cost: ∑ MRS𝐺, 𝑋 = MRT𝐺, 𝑋
                       𝑖
  Here’s what’s really going on: Unlike private goods where each individual can consume different
  amounts, everyone consumes the same 𝐺. The Samuelson condition says: sum everyone’s marginal
  willingness to pay = marginal cost of provision. This is the key departure from private goods.

                                                           𝑛                𝑖
                                                           ∑ MRS𝐺, 𝑋 = MRT𝐺, 𝑋
                                                       𝑖=1
The sum of individuals’ marginal willingness to pay (MRS) must equal the marginal cost of
production (MRT). This differs from private goods, where each individual’s MRS = MRT
individually.
Free-Rider Problem — Formal Analysis (Munoz-Garcia, Ch.9, §9.12):
Consider 𝐼 consumers with quasi-linear utility 𝑢𝑖 (𝑥𝑖 , 𝐺) = 𝑥𝑖 + 𝑚𝑖 log⁡𝐺, where 𝐺 = ∑𝐼                                         𝑔𝑖 is total
                                                                                                                           𝑖=1
private contribution to the public good, 𝑔 is individual 𝑖’s contribution, and 𝑥𝑖 is private
                                                               𝑖
consumption. Each consumer has budget 𝑤𝑖 , with the price of both goods normalised to 1, so
𝑥𝑖 = 𝑤𝑖 − 𝑔𝑖 .
Private provision (Nash equilibrium): Each consumer 𝑖 chooses 𝑔 to maximise:
                                                                                                                   𝑖


  Let’s work through this step by step. We start from consumer 𝑖’s utility 𝑢𝑖 (𝑥𝑖 , 𝐺) = 𝑥𝑖 + 𝑚𝑖 log⁡𝐺
  with budget 𝑥𝑖 = 𝑤𝑖 − 𝑔𝑖 and 𝐺 = 𝑔𝑖 + 𝐺−𝑖 : 1. Substitute budget into utility:
  𝑢𝑖 = (𝑤𝑖 − 𝑔𝑖 ) + 𝑚𝑖 log⁡(𝑔𝑖 + 𝐺−𝑖 ) 2. Each consumer takes others’ contributions 𝐺−𝑖 = ∑𝑗 ≠ 𝑖 𝑔𝑗 as given
  (Nash assumption) 3. → Maximise 𝑤𝑖 − 𝑔 + 𝑚𝑖 log⁡(𝑔 + 𝐺−𝑖 ) by choosing 𝑔 ≥ 0
                                                           𝑖                        𝑖                          𝑖
  Here’s what’s really going on: You (as consumer 𝑖) balance the private cost of contributing (one
  unit of private consumption foregone) against the private benefit of a higher total public good 𝐺.
  The benefit depends on total provision, not just your own contribution — creating the free-rider
  incentive.


                                                  max𝑤 − 𝑔𝑖 + 𝑚𝑖 log⁡(𝑔𝑖 + 𝐺−𝑖 )
                                                  𝑔𝑖 ≥ 0 𝑖

where 𝐺−𝑖 = ∑          𝑔𝑗 is taken as given. FOC:
                 𝑗≠𝑖


  Let’s work through this step by step. We start from the maximand 𝑓(𝑔 ) = 𝑤𝑖 − 𝑔 + 𝑚𝑖 log⁡(𝑔 + 𝐺−𝑖 )
                                                                                                                   𝑖   𝑖             𝑖
                                      ′                    𝑚
  : 1. Differentiate w.r.t. 𝑔𝑖 : 𝑓 (𝑔𝑖 ) = −1 + 𝑔 + 𝑖𝐺              2. Set = 0 (assuming interior solution 𝑔𝑖 > 0):
                                                       𝑖       −𝑖

  −1 + 𝑔 𝑚+ 𝑖𝐺−𝑖 = 0 3. Solve: 𝑔 𝑚+ 𝑖𝐺−𝑖 = 1, so 𝑚𝑖 = 𝑔𝑖 + 𝐺−𝑖 4. → 𝑔𝑖 (𝐺−𝑖 ) = 𝑚𝑖 − 𝐺−𝑖 5. This is 𝑖’s best-response
        𝑖                         𝑖
  function: contribute 𝑚𝑖 minus what others contribute
                                                                                                                       𝑚
  Here’s what’s really going on: The FOC says: contribute until marginal benefit 𝐺𝑖 equals
  marginal cost (1). The best-response function shows perfect crowding out — each dollar others
  contribute reduces your contribution by exactly one dollar.


                                                    𝑚𝑖
                                          −1 +            =0                    ⇒       𝑔𝑖 (𝐺−𝑖 ) = 𝑚𝑖 − 𝐺−𝑖
                                                 𝑔𝑖 + 𝐺−𝑖
This yields a best-response function: contribute up to 𝑚𝑖 , but reduce one-for-one as others
contribute more (perfect crowding out). The Nash equilibrium has contributions 𝑔* such that: -
                                                                                                                             𝑖
Only the individual(s) with the highest 𝑚𝑖 contribute - All others free-ride completely: 𝑔*𝑗 = 0 for
𝑗 ≠ arg⁡max⁡𝑚𝑖
                                                   *
The equilibrium total provision is: 𝐺 = max⁡𝑖 𝑚𝑖 .
Social optimum: The social planner maximises:

                                                                                            𝐼
  Let’s work through this step by step. We start from total surplus 𝑊 = ∑                       [𝑥𝑖 + 𝑚𝑖 log⁡𝐺]: 1. Using
                                                                                            𝑖=1
  𝑥𝑖 = 𝑤𝑖 − 𝑔𝑖 and 𝐺 = ∑𝑖 𝑔𝑖 : 𝑊 = ∑𝑖 (𝑤𝑖 − 𝑔𝑖 ) + ( ∑𝑖 𝑚𝑖 )log⁡( ∑𝑖 𝑔𝑖 ) 2. The social planner chooses the total
  𝐺 directly, not individual contributions 3. Rewrite 𝑊 = ∑𝑖 𝑤𝑖 − 𝐺 + ( ∑𝑖 𝑚𝑖 )log⁡𝐺 since ∑𝑖 𝑔𝑖 = 𝐺 4. →
  Maximise ∑ 𝑤𝑖 − 𝐺 + ( ∑ 𝑚𝑖 )log⁡𝐺 by choosing 𝐺
                  𝑖           𝑖
  Here’s what’s really going on: The social planner internalises the benefit to all consumers, not
  just one. The social marginal benefit of one more unit of 𝐺 is ∑ 𝑚𝑖 /𝐺, which sums across all
                                                                                𝑖
  beneficiaries.


                                                        𝐼                  𝐼
                                              max ∑ (𝑤𝑖 − 𝑔𝑖 ) + ( ∑ 𝑚𝑖 )log⁡𝐺
                                               𝐺       𝑖=1                𝑖=1
FOC: −1 + ( ∑ 𝑚𝑖 )/𝐺 = 0
              𝑖
                                  ⇒       𝐺∘ = ∑𝐼𝑖 = 1 𝑚𝑖
                                                                *   ∘
Since max⁡𝑖 𝑚𝑖 < ∑ 𝑚𝑖 (for 𝐼 > 1), we have 𝐺 < 𝐺                        — underprovision.
                      𝑖
Effect of group size: With 𝑁 symmetric individuals (𝑚𝑖 = 𝑚 for all 𝑖):


  Let’s work through this step by step. We start from the symmetric case where all 𝑁 individuals
  have identical 𝑚𝑖 = 𝑚: 1. Nash equilibrium: only the highest-𝑚 individual contributes. With
               *
  symmetry, 𝐺 = 𝑚 (one person contributes 𝑚, the other 𝑁 − 1 contribute zero) 2. Social optimum:
  𝐺 = ∑ 𝑚𝑖 = 𝑁 ⋅ 𝑚 (summing across all 𝑁 individuals) 3. → Ratio 𝐺* /𝐺∘ = 𝑚/(𝑁𝑚) = 1/𝑁
   ∘
         𝑖
  Here’s what’s really going on: As group size 𝑁 grows, the free-rider problem becomes more
  severe. Your incentive to contribute shrinks because your private benefit (𝑚/𝐺) gets diluted across
  the group. In the limit 𝑁 → ∞, the private provision ratio approaches zero.


                                      *
                                  𝐺 = 𝑚 (only one contributes, others free-ride)

  Let’s work through this step by step. The social optimum for 𝑁 symmetric agents: 1. Social
  planner maximises ∑ 𝑈𝑖 = 𝑁 ⋅ 𝑤 − 𝐺 + 𝑁 ⋅ 𝑚log⁡𝐺 2. FOC: −1 + 𝑁 ⋅ 𝑚/𝐺 = 0 ⇒ 𝐺 = 𝑁 ⋅ 𝑚 3. → 𝐺∘ = 𝑁 ⋅ 𝑚
                          𝑖
  Here’s what’s really going on: The social planner aggregates all 𝑁 individuals’ marginal benefits,
  resulting in 𝑁 times the individual provision.

                                                   ∘
                                               𝐺 = 𝑁 ⋅ 𝑚 (social optimum)

  Let’s work through this step by step. Comparing private and social provision: 1.
  𝐺* /𝐺∘ = 𝑚/(𝑁 ⋅ 𝑚) = 1/𝑁 2. As 𝑁 → ∞, 1/𝑁 → 0 3. → The private market provides an infinitesimally small
  fraction of the efficient public good level in large groups
  Here’s what’s really going on: The free-rider problem grows more severe as the group size
  increases — your incentive to contribute diminishes because your share of the total benefit shrinks
  while you bear the full cost.


                                                       𝐺* = 1 → 0 as 𝑁 → ∞
                                                       𝐺∘ 𝑁
The free-rider problem grows more severe as the group size increases — each individual’s
incentive to contribute diminishes because their share of the total benefit shrinks while they
bear the full cost.
Example (Munoz-Garcia, Example 9.6, p.697): Two individuals 𝑖 = 1, 2 with 𝑚1 ≥ 𝑚2 .
                            *           *                                  *                          ∘
Equilibrium contributions: 𝑔 = 𝑚1 > 0, 𝑔 = 0. Total 𝐺 = 𝑚1 . Social optimum: 𝐺 = 𝑚1 + 𝑚2 .
                                      1                     2
Since 𝑚1 + 𝑚2 > 𝑚1 (for 𝑚2 > 0), the public good is under-provided. The individual with lower
valuation free-rides completely on the contribution of the higher-valuation individual.
Solutions to free-rider problem: 1. Government provision (funded by compulsory
taxation) 2. Coase bargaining (if few parties affected) 3. Clubbing (create excludability
through technology or membership) 4. Social norms / altruism 5. Lindahl prices
(personalised prices summing to marginal cost — see §7.4.4)


  Munoz-Garcia Insight — Derivation of the Samuelson Condition:
  Consider an economy with 𝐼 consumers, one public good 𝐺 (with cost 𝐶(𝐺)), and a private good 𝑥𝑖 for
  each consumer. Each consumer 𝑖 has utility 𝑈𝑖 (𝑥𝑖 , 𝐺) where 𝐺 is nonrival.
  Step 1 — Social planner’s problem: The planner maximises a weighted sum of utilities subject to
  the resource constraint:


    Let’s work through this step by step. We start from the social planner’s resource allocation
                                                                      𝐼
    problem: 1. Objective: maximise social welfare 𝑊 = ∑                 𝛼 𝑈 (𝑥 , 𝐺) where 𝛼𝑖 are welfare
                                                                      𝑖=1 𝑖 𝑖 𝑖
    weights 2. Constraint: total private consumption ∑ 𝑥𝑖 plus cost of public good 𝐶(𝐺) cannot
                                                                  𝑖
    exceed aggregate endowment 𝑊
                               ¯
                                 3. Form Lagrangian: ℒ = ∑ 𝛼𝑖 𝑈𝑖 (𝑥𝑖 , 𝐺) + 𝜆(𝑊
                                                                              ¯
                                                                                − ∑ 𝑥𝑖 − 𝐶(𝐺)) 4. →
                                                                                     𝑖                    𝑖
    The Lagrangian with the constraint rearranged: 𝑊 = ∑ 𝛼𝑖 𝑈𝑖 (𝑥𝑖 , 𝐺) + 𝜆( ∑ 𝑥𝑖 + 𝐶(𝐺) − 𝑊)
                                                                                           ¯ where 𝜆
                                                                       𝑖                            𝑖
    is the Lagrange multiplier (marginal value of relaxing the resource constraint)
    Here’s what’s really going on: The social planner balances the marginal utility of allocating
    resources to private consumption versus public good provision, subject to the economy-wide
    resource constraint.


                                                   𝐼                       𝐼
                                    max 𝑊 = ∑ 𝛼𝑖 𝑈𝑖 (𝑥𝑖 , 𝐺) + 𝜆( ∑ 𝑥𝑖 + 𝐶(𝐺) − 𝑊)
                                                                                ¯
                                 𝐺, 𝑥1 , …, 𝑥𝐼   𝑖=1                   𝑖=1



  Step 2 — FOCs:
  For each private good 𝑥𝑖 :


    Let’s work through this step by step. We start from the Lagrangian and take the partial
    derivative w.r.t. 𝑥𝑖 : 1. 𝜕𝑊/𝜕𝑥𝑖 = 𝛼𝑖 ⋅ 𝜕𝑈𝑖 /𝜕𝑥𝑖 + 𝜆 ⋅ 1 = 0 2. → 𝛼𝑖 ⋅ 𝜕𝑈𝑖 /𝜕𝑥𝑖 = −𝜆 3. The Lagrange
    multiplier 𝜆 is negative (since increasing the resource constraint reduces the objective), so
    −𝜆 > 0 represents the shadow value of resources
    Here’s what’s really going on: At the optimum, each consumer’s weighted marginal utility
    of private consumption equals the common shadow price of resources (−𝜆).



                                         𝜕𝑊 = 𝛼 𝜕𝑈𝑖 + 𝜆 = 0       ⇒        𝛼𝑖
                                                                                   𝜕𝑈𝑖
                                                                                       = −𝜆
                                               𝑖
                                         𝜕𝑥𝑖     𝜕𝑥𝑖                               𝜕𝑥𝑖


  For the public good 𝐺:


    Let’s work through this step by step. We start from the Lagrangian and take the partial
                                          𝐼
    derivative w.r.t. 𝐺: 1. 𝜕𝑊/𝜕𝐺 = ∑        𝛼 ⋅ 𝜕𝑈𝑖 /𝜕𝐺 + 𝜆 ⋅ 𝐶′ (𝐺) = 0 2. → ∑𝐼𝑖 = 1 𝛼𝑖 ⋅ 𝜕𝑈𝑖 /𝜕𝐺 = −𝜆 ⋅ 𝐶′ (𝐺) 3. Note
                                          𝑖=1 𝑖
    the sum over 𝑖 — because 𝐺 is non-rival, one unit of 𝐺 enters every consumer’s utility
    Here’s what’s really going on: The sum of weighted marginal utilities from the public good
    equals the shadow cost of the resources used to produce it.



                             𝜕𝑊 = ∑𝐼 𝛼 𝜕𝑈𝑖 + 𝜆𝐶′ (𝐺) = 0          ⇒
                                                                               𝐼
                                                                               ∑ 𝛼𝑖
                                                                                         𝜕𝑈𝑖
                                                                                             = −𝜆𝐶′ (𝐺)
                             𝜕𝐺 𝑖 = 1 𝑖 𝜕𝐺                                 𝑖=1           𝜕𝐺

  Step 3 — Combine the FOCs: Divide the public good FOC by the private good FOC for each
  consumer:
  From the private good FOC: 𝛼𝑖 = −𝜆/(𝜕𝑈𝑖 /𝜕𝑥𝑖 )
  Substituting into the public good FOC:
     Let’s work through this step by step. We substitute 𝛼𝑖 = −𝜆/(𝜕𝑈𝑖 /𝜕𝑥𝑖 ) into the public good
                 𝐼
     FOC: 1. ∑
                 𝑖=1
                     (− 𝜕𝑈 𝜆/𝜕𝑥 ) 𝜕𝑈      ′
                                  𝜕𝐺 = −𝜆𝐶 (𝐺) 2. The −𝜆 on both sides cancels (assuming 𝜆 ≠ 0, which holds
                                    𝑖
                          𝑖    𝑖
     at an interior optimum)
     Here’s what’s really going on: The substitution eliminates the unobservable welfare weights
     𝛼𝑖 , yielding a condition that depends only on observable marginal rates of substitution.


                                                𝐼
                                                ∑ (−      𝜆 ) 𝜕𝑈𝑖 = −𝜆𝐶′ (𝐺)
                                            𝑖=1        𝜕𝑈𝑖 /𝜕𝑥𝑖 𝜕𝐺


  Cancelling −𝜆 (which is nonzero):


                                                                                   𝜕𝑈𝑖 /𝜕𝐺                  𝐼           ′
     Let’s work through this step by step. We cancel −𝜆 from both sides: 1. ∑𝑖 = 1 𝜕𝑈 /𝜕𝑥
                                                                                           = 𝐶 (𝐺) 2.
                                                                                                                𝑖   𝑖
                         𝑖                                     𝐼
     By definition, MRS𝐺, 𝑥 = (𝜕𝑈𝑖 /𝜕𝐺)/(𝜕𝑈𝑖 /𝜕𝑥𝑖 ) 3. → ∑
                                                               𝑖=1
                                                                   MRS𝑖𝐺, 𝑥 = 𝐶′ (𝐺)
     Here’s what’s really going on: The welfare weights 𝛼𝑖 and the Lagrange multiplier 𝜆 cancel
     out, leaving a condition that depends only on preferences and technology.



                                                       𝐼   𝜕𝑈𝑖 /𝜕𝐺
                                                     ∑               = 𝐶′ (𝐺)
                                                    𝑖 = 1 𝜕𝑈𝑖 /𝜕𝑥𝑖



  Step 4 — Samuelson rule:


                                                                                            𝑖           ′       𝑖
     Let’s work through this step by step. We start from ∑ MRS𝐺, 𝑥 = 𝐶 (𝐺): 1. MRS𝐺, 𝑥 is
                                                                                𝑖
                                                                                        ′
     consumer 𝑖’s marginal willingness to pay for 𝐺 in units of 𝑥 2. 𝐶 (𝐺) is the marginal cost of 𝐺,
     which equals the marginal rate of transformation MRT𝐺, 𝑥 (how many units of 𝑥 must be
                                                                                                    𝑖
     sacrificed to produce one more 𝐺) 3. → The Samuelson rule: ∑ MRS𝐺, 𝑥 = MC(𝐺) = MRT𝐺, 𝑥
                                                                                    𝑖
     Here’s what’s really going on: The sum of individual marginal rates of substitution
     (willingness to pay for 𝐺 in terms of 𝑥) equals the marginal cost of providing 𝐺. For private
     goods, each individual’s MRS separately equals MRT; for public goods, it is the sum of MRS
     that equals MRT due to nonrivalry — the same unit of 𝐺 is consumed by everyone
     simultaneously.


                                            𝐼
                                           ∑ MRS𝑖𝐺, 𝑥 = MC(𝐺) = MRT𝐺, 𝑥
                                           𝑖=1


  (Munoz-Garcia, Ch.9, §9.11, pp.692-693)


7.4.3 Common Resources & The Tragedy of the Commons

Why this matters for your exam: The Tragedy of the Commons is a classic exam short-
answer question. Link it to the wedge between private and social marginal cost — each user
bears only 1/𝑛 of the cost but gets the full benefit.
Tragedy of the Commons (Hardin, 1968): A shared resource is over-exploited when each
user acts independently according to self-interest, contrary to the common good.
Formal mechanism (Munoz-Garcia, SS8.3, p.552):
Each user 𝑖 chooses extraction 𝑞 to maximise private benefit 𝐵𝑖 (𝑞 ), while the cost of resource
                                       𝑖                                                        𝑖
depletion 𝐶( ∑𝑗 𝑞𝑗 ) is shared by all.

Private optimum (Nash equilibrium):
  Let’s work through this step by step. We start from each user’s private optimisation: 1. User 𝑖
                                 𝑞
  maximises 𝜋𝑖 = 𝐵𝑖 (𝑞𝑖 ) − 𝑄𝑖 𝐶(𝑄) where 𝑄 = ∑ 𝑞𝑗 is total extraction 2. The user bears only their share
                                                               𝑗
                                                                                                                                              𝑞
  𝑞𝑖 /𝑄 of the total cost 𝐶(𝑄), ignoring the cost imposed on others 3. FOC: 𝐵′𝑖 (𝑞*𝑖 ) − 𝜕𝑞𝜕 ( 𝑄𝑖 𝐶(𝑄)) = 0 4. In
                                                                                                                                          𝑖
                                                                                            ′                   ′    *
  equilibrium with symmetric users, this simplifies to 𝐵𝑖 (𝑞*𝑖 ) = 𝐶 (𝑄 )/𝑛 + (cost-sharing term) 5. For large 𝑛
                                     ′       ′       *
  , the dominant effect is 𝐵𝑖 (𝑞*𝑖 ) ≈ 𝐶 (𝑄 )/𝑛
  Here’s what’s really going on: Each user equates marginal private benefit to just their share of
  marginal cost (𝐶′ /𝑛), not the full marginal social cost (𝐶′ ). This is the fundamental wedge driving
  over-exploitation.


                                                                   𝐵′𝑖 (𝑞*𝑖 ) = 𝐶′ (𝑄* )
Each user equates marginal private benefit to marginal private cost, ignoring the external cost
on others.
Social optimum:


  Let’s work through this step by step. We take the social planner’s perspective (maximising total
  surplus): 1. Total surplus = ∑ 𝐵𝑖 (𝑞 ) − 𝐶(𝑄) = 𝑛 ⋅ 𝐵(𝑞 ) − 𝐶(𝑛𝑞 ) (symmetric users) 2. FOC w.r.t. 𝑞 :
                                         𝑖       𝑖                                      𝑖               𝑖                                              𝑖
  𝐵′𝑖 (𝑞∘𝑖 ) − 𝐶′ (𝑄∘ ) ⋅ 𝜕𝑄/𝜕𝑞𝑖 = 0 3. Since 𝜕𝑄/𝜕𝑞𝑖 = 1 (increasing own extraction increases total extraction
                              ′  ∘      ′ ∘
  one-for-one): 4. → 𝐵𝑖 (𝑞𝑖 ) = 𝐶 (𝑄 ) 5. Alternatively, we can express this as a sum over all users:
    ′    ∘           ′ ∘
  𝐵𝑖 (𝑞𝑖 ) = ∑ 𝐶 (𝑄 )
                    𝑗
                                                                                                                                                   ′
  Here’s what’s really going on: The social planner accounts for the full marginal cost 𝐶 (𝑄)
  imposed on the entire resource, not just each user’s share. The social FOC applies to all users
  simultaneously.

                                                          ′                             ′   ∘
                                                         𝐵𝑖 (𝑞∘𝑖 ) = ∑ 𝐶 (𝑄 ) = MSC
                                                                                    𝑗

The sum of marginal costs across all users is the marginal social cost.
            ′   *        ′   *                                                                         *            ∘            *   ∘
Since 𝐶 (𝑄 ) < ∑ 𝐶 (𝑄 ), each user extracts too much: 𝑞 > 𝑞 and 𝑄 > 𝑄 .
                𝑗                                      𝑖   𝑖

Formal analysis with 𝑛 symmetric users (Munoz-Garcia, Ch.9):
Consider 𝑛 symmetric users, each choosing extraction 𝑞 ≥ 0. Let total extraction be
                                                                                                            𝑖
𝑄 = ∑𝑛𝑗 = 1 𝑞𝑗 . Each user receives benefit 𝐵(𝑞𝑖 ) (increasing, concave) and shares the total cost
𝐶(𝑄) (increasing, convex).
Private (Nash) equilibrium: Each user 𝑖 chooses 𝑞𝑖 to maximise:


  Let’s work through this step by step. We start from user 𝑖’s net benefit: 1. Benefit = 𝐵(𝑞𝑖 ) —
                                                                            𝑞
  increasing in own extraction 2. Cost share = 𝑄𝑖 𝐶(𝑄) — user pays fraction of total cost proportional to
                                                                                𝑞
  their share of total extraction 3. → 𝜋𝑖 = 𝐵(𝑞𝑖 ) − 𝑄𝑖 𝐶(𝑄) 4. In a Nash equilibrium, each user chooses 𝑞𝑖
  taking others’ extraction 𝑄−𝑖 as given
  Here’s what’s really going on: Your cost depends on your share of total extraction. If you extract
  more, you bear a larger share of the total cost — but you also push up total cost 𝐶(𝑄), which you
  share with others.


                                                                                            𝑞𝑖
                                                              𝜋𝑖 = 𝐵(𝑞𝑖 ) −                         𝐶(𝑄)
                                                                                                𝑄
Taking FOC with respect to 𝑞 , treating 𝑄                               as given:
                                         𝑖                         −𝑖

                                                                                                                             𝑞
  Let’s work through this step by step. We differentiate 𝜋𝑖 = 𝐵(𝑞 ) − 𝑄𝑖 𝐶(𝑄) w.r.t. 𝑞 : 1. First term:
                                                                                                                         𝑖                    𝑖
                                                                        𝑞                           1 ⋅ 𝑄 − 𝑞𝑖 ⋅ 1           𝑞
  𝐵′ (𝑞𝑖 ) 2. Second term uses quotient rule: 𝜕𝑞𝜕 ( 𝑄𝑖 𝐶(𝑄)) 3. =                                                    𝐶(𝑄) + 𝑄𝑖 ⋅ 𝐶′ (𝑄) ⋅ 1 4. =
                                                      𝑖               𝑄2
  𝑄 − 𝑞𝑖          𝑞𝑖 ′                     ′ *     𝑄* − 𝑞*𝑖 *  𝑞*𝑖 ′ *
           𝐶(𝑄) + 𝑄 𝐶 (𝑄) 5. Set FOC = 0: 𝐵 (𝑞𝑖 ) = * 2 𝐶(𝑄 ) + * 𝐶 (𝑄 ) 6. The RHS is user 𝑖’s private
   𝑄2                                               (𝑄 )       𝑄
  marginal cost of extraction
  Here’s what’s really going on: The private marginal cost has two components: (i) the change in
  cost share from altering total extraction 𝑄, and (ii) the direct effect of own extraction on total cost.
  Both are fractions of the true social cost.


                                                                     𝑄* − 𝑞*𝑖        𝑞*𝑖 ′ *
                                                     𝐵′ (𝑞*𝑖 ) − [      * 2
                                                                            𝐶(𝑄*
                                                                                 ) +   *
                                                                                         𝐶 (𝑄 )] = 0
                                                                      (𝑄 )      ⏟    𝑄
                                            private marginal cost
                           *   *                 *        *
In symmetric equilibrium (𝑞 = 𝑞 for all 𝑖, so 𝑄 = 𝑛𝑞 ):
                           𝑖


                                                                                                                         *     *   *       *
  Let’s work through this step by step. We impose symmetry (𝑞𝑖 = 𝑞 , 𝑄 = 𝑛𝑞 ): 1.
  𝑄* − 𝑞*𝑖                 *       *                    *
                                                                                                        𝑞*𝑖 ′           *              ′   *

       2
             𝐶(𝑄* ) = 𝑛𝑞 *− 𝑞2 𝐶(𝑛𝑞* ) = (𝑛2− 1)𝑞
                                               * 2
                                                   𝐶(𝑛𝑞* ) = 𝑛2− 1* 𝐶(𝑛𝑞* ) 2.                               𝐶 (𝑄* ) = 𝑞 * 𝐶′ (𝑛𝑞* ) = 𝐶 (𝑛𝑞
                                                                                                                                          𝑛
                                                                                                                                             )
                                                                                                                                               3. →
   (𝑄* )                  (𝑛𝑞 )                𝑛 (𝑞 )                𝑛 𝑞                                𝑄*             𝑛𝑞
    ′ *         𝐶′ (𝑛𝑞* )
  𝐵 (𝑞       ) = 𝑛 + 𝑛2− 1* 𝐶(𝑛𝑞* )
                          𝑛 𝑞
  Here’s what’s really going on: In symmetric equilibrium, your private marginal cost consists of
  1/𝑛 of the marginal cost 𝐶′ (𝑛𝑞* ) plus a term reflecting the infra-marginal cost sharing.

                                                                               ′
                                                                           𝐶 (𝑛𝑞* ) 𝑛 − 1
                                                            𝐵′ (𝑞* ) =        𝑛    + 2 * 𝐶(𝑛𝑞* )
                                                                                    𝑛 𝑞
For large 𝑛, the dominant term is:


  Let’s work through this step by step. For large 𝑛, we approximate the symmetric equilibrium
          𝐶′ (𝑛𝑞* )                                                        𝐶(𝑛𝑞* )
  FOC: 1.     𝑛     becomes very small as 𝑛 grows 2. 𝑛2− 1* 𝐶(𝑛𝑞* ) ≈ 1𝑛 ⋅ * which is also small for large 𝑛 if
                                                     𝑛 𝑞                    𝑛𝑞
                                                        ′ *       𝐶′ (𝑄* )
  average cost is bounded 3. The dominant effect: 𝐵 (𝑞 ) ≈ 𝑛 4. While social optimum requires
   ′ ∘      ′ ∘                                          ′ *                   ′ ∘
  𝐵 (𝑞 ) = 𝐶 (𝑄 ) 5. For linear cost 𝐶(𝑄) = 𝑐𝑄, we get 𝐵 (𝑞 ) = 𝑐/𝑛 vs. 𝐵 (𝑞 ) = 𝑐
  Here’s what’s really going on: Each user equates private MB to just 1/𝑛 of the marginal social
  cost. The wedge grows linearly with 𝑛 — more users means worse over-exploitation. This is the 𝑛-
  person prisoner’s dilemma of the commons.


                                               𝐶′ (𝑄* )                    ′
                                                   𝑛                   𝐵 (𝑞* ) ≈
Social optimum: Maximise total surplus 𝑛𝐵(𝑞 ) − 𝐶(𝑛𝑞 ):
                                           𝑖          𝑖


  Let’s work through this step by step. We start from the social planner’s problem with symmetric
  users: 1. Total surplus = ∑𝑛                       [𝐵(𝑞𝑖 )] − 𝐶( ∑𝑛               𝑞𝑖 ) 2. With symmetry: 𝑇𝑆 = 𝑛 ⋅ 𝐵(𝑞𝑖 ) − 𝐶(𝑛 ⋅ 𝑞𝑖 ) 3. The
                                               𝑖=1                     𝑖=1
                                                                                                ′                ′
  planner chooses 𝑞1 , ..., 𝑞𝑛 . FOC for 𝑞𝑖 : 4. 𝜕𝑇𝑆/𝜕𝑞𝑖 = 𝐵 (𝑞𝑖 ) − 𝐶 (𝑄) ⋅ 1 = 0 (since 𝜕𝑄/𝜕𝑞𝑖 = 1) 5. With
                      ′        ∘       ′   ∘            ′   ∘
  symmetry: 𝐵 (𝑞 ) = 𝐶 (𝑛 ⋅ 𝑞 ) = 𝐶 (𝑄 )
  Here’s what’s really going on: The social planner recognises that increasing 𝑞𝑖 increases total
                                                                                            ′
  extraction one-for-one, so the full marginal cost 𝐶 (𝑄) must be considered — not just 1/𝑛 of it.


                                                                𝐵′ (𝑞∘ ) = 𝐶′ (𝑛𝑞∘ ) = 𝐶′ (𝑄∘ )
Comparison:


  Let’s work through this step by step. We take the ratio of private to social FOCs: 1. Private:
                                                                                    ′   *           ′     *
  𝐵′ (𝑞* ) ≈ 𝐶′ (𝑄* )/𝑛 2. Social: 𝐵′ (𝑞∘ ) = 𝐶′ (𝑄∘ ) 3. → 𝐵′ (𝑞∘ ) = 𝐶 ′(𝑄 ∘)/𝑛 4. Assuming similar 𝐶′ , the ratio ≈ 1/𝑛,
                                                                                   𝐵 (𝑞 )           𝐶 (𝑄 )
  implying 𝑞* ≫ 𝑞∘ (since 𝐵 is concave, lower 𝐵 means higher 𝑞)                    ′

  Here’s what’s really going on: The ratio shows the dramatic gap between private and social
  incentives. Your private marginal benefit at equilibrium is only 1/𝑛 of the efficient level, meaning
  extraction is far too high.
                                                      𝐵′ (𝑞* )       𝐶′ (𝑄* )/𝑛
                                                                 =
                                                      𝐵′ (𝑞∘ )        𝐶′ (𝑄∘ )
For linear cost 𝐶(𝑄) = 𝑐𝑄, this simplifies to:


  Let’s work through this step by step. With linear cost 𝐶(𝑄) = 𝑐𝑄: 1. 𝐶′ (𝑄) = 𝑐 for any 𝑄 (constant
  marginal cost) 2. Private FOC: 𝐵′ (𝑞* ) = 𝑐/𝑛 3. Social FOC: 𝐵′ (𝑞∘ ) = 𝑐 4. With concave benefit (e.g.,
  𝐵(𝑞) = 𝑎𝑞 − 𝑏𝑞2 /2), 𝐵′ (𝑞) = 𝑎 − 𝑏𝑞 5. Then 𝑎 − 𝑏𝑞* = 𝑐/𝑛 and 𝑎 − 𝑏𝑞∘ = 𝑐 6. → 𝑞* = (𝑎 − 𝑐/𝑛)/𝑏 and
  𝑞∘ = (𝑎 − 𝑐)/𝑏 7. For 𝑛 = 2: 𝑞* /𝑞∘ = (𝑎 − 𝑐/2)/(𝑎 − 𝑐)
  Here’s what’s really going on: Each user equates private MB to 𝑐/𝑛 rather than 𝑐, leading to
  over-extraction by a factor of approximately 𝑛: 1 relative to the social optimum. The wedge
  between private and social marginal cost grows with 𝑛 — the more users, the worse the over-
  exploitation.


                                               𝐵′ (𝑞* ) = 𝑐𝑛     vs. 𝐵′ (𝑞∘ ) = 𝑐
Each user equates private MB to 𝑐/𝑛 rather than 𝑐, leading to over-extraction by a factor of
approximately 𝑛: 1 relative to the social optimum. The wedge between private and social
marginal cost grows with 𝑛 — the more users, the worse the over-exploitation.
Example — Fishing commons: A lake open to all fishers. Each fisher catches as many fish as
possible before others do. Individual rationality: “If I don’t catch them, someone else will.”
Result: overfishing, stock collapse, everyone loses.
Solutions: 1. Private property rights (assign fishing quotas or lake ownership — Coase) 2.
Pigouvian tax (tax per unit extracted equal to marginal social damage) 3. Regulation (catch
limits, seasonal closures, tradable permits)
Exam Tip: Link the Tragedy to negative production externalities — each user’s extraction
imposes a cost on all others. The wedge between private and social marginal cost generates
over-exploitation.

7.4.4 Lindahl Equilibrium (Munoz-Garcia, Ch.9, §9.15)

Why this matters for your exam: Lindahl is the public-goods analogue of competitive
equilibrium for private goods. Expect questions asking you to derive personalised prices and
show they satisfy the Samuelson condition.
                                                                                               *      ∘
Problem: Private provision of public goods leads to underprovision (𝐺 < 𝐺 ) due to free-
riding. Government solutions require information the planner may not have. Lindahl (1919)
proposed a market-based solution using personalised prices.
Idea: Create a separate market for each individual’s consumption of the public good, with a
personalised price 𝑝 for individual 𝑖. The sum of personalised prices covers the marginal cost.
                          𝑖
Formalisation (Munoz-Garcia, pp.704-707):
                                                                                                               **
Consumer 𝑖’s problem: Each consumer 𝑖 chooses 𝑔𝑖 facing personalised price 𝑝𝑖 :


  Let’s work through this step by step. We start from consumer 𝑖’s utility maximisation with
  personalised price 𝑝𝑖 : 1. Utility: 𝑣𝑖 (𝑔𝑖 ) + 𝑤𝑖 where 𝑣𝑖 is the benefit from public good consumption
  and 𝑤𝑖 is numeraire wealth 2. Budget constraint: 𝑤𝑖 − 𝑝𝑖 𝑔𝑖 for private consumption 3. Net utility:
  𝑣𝑖 (𝑔𝑖 ) + 𝑤𝑖 − 𝑝𝑖 𝑔𝑖 4. FOC: 𝑣′𝑖 (𝑔*𝑖 * ) − 𝑝*𝑖 * ≤ 0, with equality if 𝑔*𝑖 * > 0 5. → 𝑝*𝑖 * = 𝑣′𝑖 (𝑔*𝑖 * ) — the
  personalised price equals the marginal benefit at the chosen quantity
  Here’s what’s really going on: Unlike a standard market where all consumers face the same
  price, here each consumer receives a personalised price equal to their marginal willingness to
  pay. High-valuation consumers pay more per unit.


                                                  max𝑣 (𝑔 ) + 𝑤𝑖 − 𝑝*𝑖 * 𝑔𝑖
                                                  𝑔𝑖 ≥ 0 𝑖 𝑖
FOC: 𝑣′𝑖 (𝑔* * ) − 𝑝* * ≤ 0, equality if 𝑔* * > 0. So 𝑝* * = 𝑣′𝑖 (𝑔* * ).
            𝑖        𝑖                         𝑖                    𝑖               𝑖
Firm’s problem: The firm produces a bundle of 𝐼 personalised goods:


   Let’s work through this step by step. We start from the firm’s profit maximisation with
   personalised prices: 1. The firm produces 𝑔 units of the public good and sells a “bundle” to all 𝐼
                                   𝐼
   consumers 2. Revenue: ∑𝑖 = 1 𝑝*𝑖 * ⋅ 𝑔 (each consumer 𝑖 pays 𝑝*𝑖 * per unit of 𝑔) 3. Cost: 𝐶(𝑔) 4. Profit:
   ∑𝐼𝑖 = 1 𝑝*𝑖 * 𝑔 − 𝐶(𝑔) 5. FOC: ∑𝐼𝑖 = 1 𝑝*𝑖 * − 𝐶′ (𝑔* * ) ≤ 0, equality if 𝑔* * > 0
   Here’s what’s really going on: The firm supplies the public good until the sum of personalised
   prices equals marginal cost. This is the supply-side analogue of the Samuelson condition.


                                                                𝐼
                                                       max ∑ 𝑝*𝑖 * 𝑔 − 𝐶(𝑔)
                                                        𝑔≥0 𝑖=1

FOC: ∑𝐼         𝑝*𝑖 * − 𝐶′ (𝑔* * ) ≤ 0, equality if 𝑔    **
                                                               > 0.
         𝑖=1
Equilibrium condition: Combining the consumer and firm FOCs:


   Let’s work through this step by step. We combine consumer and firm equilibrium conditions: 1.
   From consumer’s FOC: 𝑝*𝑖 * = 𝑣′𝑖 (𝑔* * ) for each 𝑖 2. From firm’s FOC: ∑𝐼        𝑝* * = 𝐶′ (𝑔* * ) 3. Substitute
                                                                               𝑖=1 𝑖
   consumer FOCs into firm FOC: ∑𝐼      𝑣′ (𝑔* * ) = 𝐶′ (𝑔* * ) 4. Note MRS𝑖 = 𝑣′𝑖 (𝑔) in this quasi-linear
                                     𝑖=1 𝑖
                     ′           𝐼
   setup, and MRT = 𝐶 (𝑔) 5. → ∑     MRS𝑖 = MRT — the Samuelson condition!
                                 𝑖=1
   Here’s what’s really going on: The Lindahl equilibrium achieves the efficient level of public good
   provision 𝑔* * = 𝑔∘ through a decentralised price mechanism. Each individual pays their marginal
   willingness to pay, and the sum covers marginal cost. No one free-rides because the price is tailored
   to their valuation.

                                               𝐼                            𝐼           ′
                                              ∑ 𝑣′𝑖 (𝑔* * ) = ∑ 𝑝*𝑖 * = 𝐶 (𝑔* * )
                                             𝑖=1                    𝑖=1
This is exactly the Samuelson condition ∑𝑖 MRS𝑖 = MRT! Thus 𝑔
                                                                                                **
                                                                                                     = 𝑔∘ — the Lindahl
equilibrium achieves the efficient level of public good provision.
Here’s what’s really going on: Each individual pays a personalised price 𝑝𝑖 equal to their
marginal willingness to pay (MRS). The sum of these payments exactly covers the marginal
cost. No one free-rides because the price is tailored to their valuation.
Example (Munoz-Garcia, Example 9.8, p.706): Three graduate students (Eric, Chris, Matt)
buying a microwave (public good). Utility: 𝑢𝑖 = ln⁡𝑥𝑖 + 𝑚𝑖 ln⁡𝐺 where 𝑥𝑖 is private consumption
(numeraire) and 𝐺 is the microwave. With prices normalised and wealth = 1, the Lindahl prices
are:


   Let’s work through this step by step. We derive Lindahl pricing for quasi-linear utility
   𝑢𝑖 = ln⁡𝑥𝑖 + 𝑚𝑖 ln⁡𝐺: 1. Budget: 𝑥𝑖 + 𝑝𝑖 𝐺 = 1 (wealth normalised to 1, price of 𝑥 = 1) 2. Substitute
                                                                  −𝑝                          𝑝
   𝑥𝑖 = 1 − 𝑝𝑖 𝐺: 𝑢𝑖 = ln⁡(1 − 𝑝𝑖 𝐺) + 𝑚𝑖 ln⁡𝐺 3. FOC w.r.t. 𝐺: 1 − 𝑝𝑖 𝐺 + 𝑚𝐺𝑖 = 0 ⇒ 𝑚𝐺𝑖 = 1 − 𝑝𝑖 𝐺 4. →
                                                                                𝑖                    𝑖
   𝑚𝑖 (1 − 𝑝𝑖 𝐺) = 𝑝𝑖 𝐺 ⇒ 𝑚𝑖 = 𝑝𝑖 𝐺(1 + 𝑚𝑖 ) 5. → 𝑝𝑖 = 𝐺(1𝑚+𝑖𝑚 ) 6. Equilibrium: ∑𝑖 𝑝𝑖 = 𝐶′ (𝐺) = 1 (marginal cost of
                                                                        𝑖
                                     𝑚𝑖                                      𝑚𝑖 /(1 + 𝑚𝑖 )
   microwave is 1) 7. So ∑
                                𝑖 𝐺(1 + 𝑚𝑖 )
                                             = 1 ⇒ 𝐺 = ∑𝑖 1 +𝑚𝑚
                                                              𝑖
                                                                  8. → 𝑝* = ∑ 𝑚               9. For 𝑚𝐸 = 1, 𝑚𝐶 = 𝑚𝑀 = 0.6:
                                                                𝑖       𝑖        𝑗 /(1 + 𝑚𝑗 )
                                                                                            𝑗

   𝑝𝐸 = 0.4, 𝑝𝐶 = 𝑝𝑀 = 0.3, 𝐺 = 1.25
   Here’s what’s really going on: Each student pays according to their marginal willingness to pay (
   𝑚𝑖 ). Eric values the microwave most (𝑚 = 1) and pays the highest share (0.4). Chris and Matt value
   it less (𝑚 = 0.6) and pay less (0.3 each). The sum (1.0) exactly covers the cost.


                                                                𝑚𝑖 /(1 + 𝑚𝑖 )
                                                       𝑝*𝑖 =
                                                               ∑𝑗 𝑚𝑗 /(1 + 𝑚𝑗 )
For 𝑚𝐸 = 1, 𝑚𝐶 = 𝑚𝑀 = 0.6: 𝑝 = 0.4, 𝑝 = 𝑝                      = 0.3, and 𝐺 = 1.25.
                                       𝐸           𝐶     𝑀
Limitations: 1. Requires excludability between personalised public goods — not feasible for
pure public goods like national defence 2. Creates monopsony (one buyer per personalised
market) — price-taking assumption is unrealistic 3. Requires the social planner to know each
individual’s marginal valuation — same information problem as other solutions 4. Individuals
have incentives to misrepresent their preferences (strategic manipulation)
Exam Tip: Lindahl equilibrium is the public goods analogue of competitive equilibrium for
private goods. The key difference: personalised prices replace uniform prices. State the
condition ∑ 𝑝 = MC and its equivalence to the Samuelson condition.
             𝑖   𝑖




7.5 Why Externalities Break Pareto Optimality

Why this matters for your exam: This section ties everything back to general equilibrium. It
explains exactly which Pareto conditions break and why — the answer to the “why does the
First Welfare Theorem fail?” question on every exam.
Short answer: Yes — consumption and production externalities destroy the Pareto conditions
of the 2 × 2 × 2 model.
Reasoning (Koutsoyiannis, Ch.23, p.532):
The 2 × 2 × 2 model explicitly assumes away externalities (assumption 3: independent
preferences, no production externalities). When externalities exist:

   1. Pareto conditions fail:
                                          𝐴          𝐵
           Standard condition: MRS𝑥𝑦 = MRS𝑥𝑦 = 𝑃𝑥 /𝑃𝑦
           With externalities: 𝑈𝐴 = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 , 𝑈𝐵 ) or 𝑈𝐴 = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 , 𝑋𝐵 , 𝑌𝐵 )
           MRS equality is necessary but not sufficient — each consumer’s utility depends
           directly on others’ consumption, bypassing the price system.
   2. Externality = missing market:
           The spillover effect has no market price.
           The competitive equilibrium (requiring complete markets) cannot be Pareto-optimal.
           First Welfare Theorem fails.
   3. Mathematical breakdown:
           𝑈𝐴 = 𝑈𝐴 (𝑋𝐴 , 𝑌𝐴 , 𝑋𝐵 , 𝑌𝐵 )
           Pareto efficiency requires additional conditions on cross-partials 𝜕𝑈𝐴 /𝜕𝑋𝐵 which are
           not captured by price ratios alone.
           Koutsoyiannis (Ch.23, p.544) demonstrates: “When externalities in consumption
           exist, adherence to the equalisation of the MRS of the two consumers does not
           ensure Pareto optimality.” A redistribution of the same total output that violates
           MRS equality can increase social welfare because it directly affects the externality.
   4. Koutsoyiannis on the divergence between private and social costs (Ch.23, pp.542-
     543):
           Production externalities: 𝑀𝑆𝐶 = 𝑀𝐶 + 𝑀𝐸𝐶 (marginal social cost = private marginal
           cost + marginal external cost). When 𝑀𝐶 = 𝑃 but 𝑀𝑆𝐶 > 𝑃, the firm’s private optimum
           involves overproduction relative to the social optimum.
           Positive externalities (external economies): When 𝑃 < 𝑀𝑆𝐵 (marginal social
           benefit), the market underprovides the good. Examples include apple orchards
           benefiting honey producers, training programs creating skilled labour for other
           firms, R&D spillovers.
           Negative externalities (external diseconomies): When 𝑃 < 𝑀𝑆𝐶, the market
           overprovides the good. Examples include pollution, congestion, health hazards.
           Multi-product economy: The condition for optimal resource allocation becomes
           𝑀𝑆𝐵𝑥 /𝑀𝑆𝐶𝑥 = 𝑀𝑆𝐵𝑦 /𝑀𝑆𝐶𝑦 = … = 1 — requiring equality of marginal social benefit and
           marginal social cost for every good.
   5. Remedies:
           Pigouvian taxes/subsidies (create shadow price for externality)
           Coase bargaining (simulate market through property rights)
           Direct regulation

Conclusion: “When externalities exist, the conditions for Pareto optimality are not fulfilled”
(Koutsoyiannis, Ch.23). The GE solution may still exist but will not be Pareto-optimal.



7.6 Solved Questions from Past Exams

Why this matters for your exam: These are real exam questions — the best way to prepare
is to practise the exact style and depth expected.

Question 7(a) — 46 Final, Part C: Tragedy of the Commons [3 marks]

Q: What do we mean by Tragedy of Commons? Explain with an example.
A: The Tragedy of the Commons (Hardin, 1968) describes a situation where a shared resource
is over-exploited because each individual, acting rationally in their own self-interest, depletes
the resource to the detriment of the entire community. The fundamental cause is the absence
of exclusive property rights — each user captures the full private benefit of their extraction but
bears only a fraction of the social cost.
Formal mechanism: For symmetric users 𝑖 = 1, …, 𝑛, each chooses extraction 𝑞 to maximise
                                                                                          𝑖
                                                                                  ′   ′
𝐵𝑖 (𝑞𝑖 ) − 𝐶(𝑄)/𝑛 where 𝑄 = ∑ 𝑞𝑖 is total extraction. The private optimum sets 𝐵𝑖 = 𝐶 /𝑛 while the
                             ′     ′         ′     ′
social optimum requires 𝐵𝑖 = 𝐶 . Since 𝐶 /𝑛 < 𝐶 , the private equilibrium involves over-
extraction.
Example: A grazing pasture open to all herders. Each herder adds one more animal, capturing
the full market value of that animal but sharing the cost of overgrazing with all other herders.
Individual rationality leads to overgrazing, pasture degradation, and reduced welfare for all.
Solutions: Private property rights (assign ownership), Pigouvian tax (tax per animal equal to
marginal damage), or regulatory quotas.


Question 7(b) — 46 Final, Part C: Pollution Externalities (Steel-Fishery) [11 marks]

Q: Two firms — Firm A (upstream steel mill, produces pollution 𝑥) and Firm B (downstream
fishery, harmed by pollution). Show the private and social costs and production levels under: (i)
individual profit maximisation, (ii) joint profit maximisation, and (iii) different property rights.
A: This is the canonical steel-fishery model. See §7.2 for the full treatment.
(i) Individual profit maximisation (unregulated):
Let 𝐶𝐴 (𝑞𝐴 , 𝑥) be Firm A’s cost function (𝜕𝐶𝐴 /𝜕𝑥 < 0 — pollution reduces costs) and 𝐶𝐵 (𝑞𝐵 , 𝑥) be
Firm B’s cost function (𝜕𝐶𝐵 /𝜕𝑥 > 0 — pollution raises costs).
Firm A’s FOC for pollution: −𝜕𝐶𝐴 /𝜕𝑥 = 0. Firm A chooses pollution until the marginal private
benefit (−𝜕𝐶𝐴 /𝜕𝑥) is zero, ignoring the damage −𝜕𝐶𝐵 /𝜕𝑥 > 0 imposed on Firm B. Result: 𝑥* is
too high — excessive pollution.
Firm A’s FOC for output: 𝑃𝐴 = 𝑀𝐶𝐴 . Firm B’s FOC: 𝑃𝐵 = 𝑀𝐶𝐵 .
(ii) Joint profit maximisation (merger):
Joint profit: Π𝐽 = 𝑃𝐴 𝑞 − 𝐶𝐴 (𝑞 , 𝑥) + 𝑃𝐵 𝑞 − 𝐶𝐵 (𝑞 , 𝑥).
                         𝐴        𝐴          𝐵       𝐵
FOC for pollution: −𝜕𝐶𝐴 /𝜕𝑥 − 𝜕𝐶𝐵 /𝜕𝑥 = 0 ⇒ −𝜕𝐶𝐴 /𝜕𝑥 = 𝜕𝐶𝐵 /𝜕𝑥.
The social optimum equates the marginal benefit of pollution (cost saving to A) with the
marginal damage (cost increase to B). This yields 𝑥∘ < 𝑥* — less pollution.
(iii) Different property rights (Coase Theorem):

        If B has right to clean water: A must pay B for the right to pollute. They bargain to 𝑥∘
        where −𝜕𝐶𝐴 /𝜕𝑥 = 𝜕𝐶𝐵 /𝜕𝑥. A pays compensation per unit between 𝜕𝐶𝐵 /𝜕𝑥 and −𝜕𝐶𝐴 /𝜕𝑥.
        If A has right to pollute: B must pay A to reduce pollution. They bargain to the same
        𝑥∘ . B pays A per unit of reduction between −𝜕𝐶𝐴 /𝜕𝑥 and 𝜕𝐶𝐵 /𝜕𝑥.
        Coase Theorem: The efficient pollution level is identical regardless of the initial rights
        assignment. Only the distribution of welfare (who pays whom) differs.

Conclusion: The unregulated equilibrium produces excessive pollution (𝑥* > 𝑥∘ ) with
deadweight loss equal to the area between marginal benefit and marginal damage curves over
[𝑥∘ , 𝑥* ]. Joint profit maximisation (or Coase bargaining with zero transaction costs) restores
efficiency.


Question 2(b) — 46 Final, Part A: External Economies & Diseconomies (Tax/Subsidy)
[7 marks]

Q: Firm 1 experiences external economies and Firm 2 experiences external diseconomies. Both
sell in a competitive market at 𝑝 = 𝑝 = 15. Cost functions:
                                       1    2


     Let’s work through this step by step. We start from the cost functions that capture cross-firm
     externalities: 1. Firm 1’s cost: 𝐶1 = 0.1𝑞21 + 5𝑞1 − 0.1𝑞22 — the term −0.1𝑞22 reduces Firm 1’s cost when
     Firm 2 produces more (positive externality) 2. Firm 2’s cost: 𝐶2 = 0.2𝑞2 + 7𝑞 + 0.025𝑞2 — the term
                                                                              2       2      1
     +0.025𝑞21 raises Firm 2’s cost when Firm 1 produces more (negative externality)
     Here’s what’s really going on: The cost functions are designed so that each firm’s cost depends
     partly on the other’s output. Firm 2’s production helps Firm 1 (external economy), but Firm 1’s
     production hurts Firm 2 (external diseconomy).


                                            𝐶1 = 0.1𝑞21 + 5𝑞1 − 0.1𝑞22

     Let’s work through this step by step. We start from the general quadratic cost form with cross-
                                                 2              2                 2
     firm externality: 1. Firm 2’s cost: 𝐶2 = 0.2𝑞2 + 7𝑞2 + 0.025𝑞1 2. The 0.025𝑞1 term: when Firm 1
     produces more, Firm 2’s cost increases — a negative production externality (external
     diseconomy) 3. The 0.2𝑞2 term: convex own-cost, so 𝑀𝐶2 = 0.4𝑞 + 7 (increasing in own output)
                              2                                          2
     Here’s what’s really going on: Firm 2 is doubly burdened — its own costs rise with output, and
     Firm 1’s production makes things worse. This asymmetry (Firm 2 helps Firm 1, but Firm 1 hurts
     Firm 2) is the key to the policy design.


                                           𝐶2 = 0.2𝑞22 + 7𝑞2 + 0.025𝑞21
Show how Pareto optimality can be achieved through appropriate taxes and subsidies. Find the
social dividend.
A:
Step 1: Identify the externalities.

        𝐶1 contains −0.1𝑞22 : Firm 1’s costs decrease with Firm 2’s output — external economy
        (positive production externality from 2 to 1).
      𝐶2 contains +0.025𝑞21 : Firm 2’s costs increase with Firm 1’s output — external
      diseconomy (negative production externality from 1 to 2).

Step 2: Unregulated (private) profit maximisation.
                                   2                            2                                             *
Firm 1: 𝜋1 = 15𝑞1 − 0.1𝑞1 − 5𝑞1 + 0.1𝑞2 FOC: 𝜕𝜋1 /𝜕𝑞1 = 15 − 0.2𝑞1 − 5 = 0 ⇒ 10 − 0.2𝑞1 = 0 ⇒ 𝑞1 = 50
                                   2                                2                                             *
Firm 2: 𝜋2 = 15𝑞2 − 0.2𝑞2 − 7𝑞2 − 0.025𝑞1 FOC: 𝜕𝜋2 /𝜕𝑞2 = 15 − 0.4𝑞2 − 7 = 0 ⇒ 8 − 0.4𝑞2 = 0 ⇒ 𝑞2 = 20
                                               *       *
Unregulated outcome: (𝑞1 , 𝑞2 ) = (50, 20). Private profits:
𝜋*1 = 15(50) − 0.1(2500) − 5(50) + 0.1(400) = 750 − 250 − 250 + 40 = 290
𝜋*2 = 15(20) − 0.2(400) − 7(20) − 0.025(2500) = 300 − 80 − 140 − 62.5 = 17.5 Joint profit:
290 + 17.5 = 307.5
Step 3: Social (joint) optimum.
Joint profit: Π𝐽 = 15𝑞 − 0.1𝑞2 − 5𝑞 + 0.1𝑞2 + 15𝑞 − 0.2𝑞2 − 7𝑞 − 0.025𝑞2
                               1               1           1             2   2       2           2        1
Simplify: Π𝐽 = 10𝑞 − 0.125𝑞2 + 8𝑞 − 0.1𝑞2
                           1                   1           2             2
FOCs: 𝜕Π𝐽 /𝜕𝑞 = 10 − 0.25𝑞 = 0 ⇒ 𝑞∘ = 40 𝜕Π𝐽 /𝜕𝑞 = 8 − 0.2𝑞 = 0 ⇒ 𝑞∘ = 40
               1                           1                    1                2           2        2
Social optimum: (𝑞∘ , 𝑞∘ ) = (40, 40).
                               1       2
Joint profit at social optimum:
Π∘𝐽 = 10(40) − 0.125(1600) + 8(40) − 0.1(1600) = 400 − 200 + 320 − 160 = 360
Step 4: Pigouvian taxes/subsidies to achieve the social optimum.
We need to design taxes/subsidies 𝑡1 (𝑞1 ) and 𝑡2 (𝑞2 ) such that each firm’s private FOC yields
the social optimum quantities.
For Firm 1, the social marginal benefit of increasing 𝑞1 includes the external damage on Firm
2: 𝜕𝐶2 /𝜕𝑞 = 0.05𝑞 . At 𝑞∘ = 40, this equals 0.05(40) = 2.
         1             1           1
Firm 1 ignores this cost. We impose a Pigouvian tax on Firm 1:


  Let’s work through this step by step. We start from the principle that the Pigouvian tax should
  equal the marginal external damage at the social optimum: 1. External damage from Firm 1 on
                                                                                     ∘
  Firm 2: 𝜕𝐶2 /𝜕𝑞1 = 0.05𝑞1 2. Evaluate at social optimum 𝑞1 = 40: 0.05 × 40 = 2 3. → 𝑡1 = 2 per unit of 𝑞1
  4. Verification: Firm 1’s new FOC with tax: 15 − (0.2𝑞1 + 5) − 2 = 0 ⇒ 8 − 0.2𝑞1 = 0 ⇒ 𝑞1 = 40 ✓
  Here’s what’s really going on: The tax forces Firm 1 to internalise the cost its output imposes on
  Firm 2. At 𝑡1 = 2, Firm 1’s private optimum coincides with the social optimum.


                                                               𝜕𝐶2
                                                   𝑡1 =            | = 0.05 × 40 = 2 per unit of 𝑞1
                                                               𝜕𝑞1 ∘
                                                                    𝑞1

Firm 1’s new FOC with tax: 15 − 𝜕𝐶1 /𝜕𝑞 − 𝑡1 = 15 − (0.2𝑞 + 5) − 2 = 0
                                                                     1                   1
15 − 0.2𝑞1 − 5 − 2 = 0 ⇒ 8 − 0.2𝑞1 = 0 ⇒ 𝑞1 = 40 ✓
For Firm 2, the social marginal benefit of increasing 𝑞2 includes the external economy for
Firm 1: −𝜕𝐶1 /𝜕𝑞 = 0.2𝑞 . At 𝑞∘ = 40, this equals 0.2(40) = 8.
                   2               2               2
Firm 2 does not receive this benefit. We provide a Pigouvian subsidy to Firm 2:


  Let’s work through this step by step. We start from the principle that the Pigouvian subsidy
  should equal the marginal external benefit at the social optimum: 1. External benefit from Firm 2
  on Firm 1 (reduction in Firm 1’s cost): −𝜕𝐶1 /𝜕𝑞2 = 0.2𝑞2 2. Evaluate at social optimum 𝑞∘2 = 40:
  0.2 × 40 = 8 3. → 𝑠2 = 8 per unit of 𝑞2 4. Verification: Firm 2’s new FOC with subsidy:
  15 − (0.4𝑞2 + 7) + 8 = 0 ⇒ 16 − 0.4𝑞2 = 0 ⇒ 𝑞2 = 40 ✓
  Here’s what’s really going on: The subsidy rewards Firm 2 for the positive spillover its
  production generates for Firm 1. At 𝑠2 = 8, Firm 2’s private optimum aligns with the social
  optimum.
                                          𝜕𝐶1
                                 𝑠2 = −       | = 0.2 × 40 = 8 per unit of 𝑞2
                                          𝜕𝑞2 ∘
                                              𝑞2

Firm 2’s new FOC with subsidy: 15 − 𝜕𝐶2 /𝜕𝑞 + 𝑠2 = 15 − (0.4𝑞 + 7) + 8 = 0
                                                   2                       2
15 − 0.4𝑞2 − 7 + 8 = 0 ⇒ 16 − 0.4𝑞2 = 0 ⇒ 𝑞2 = 40 ✓
Optimal policy: Tax Firm 1 at 𝑡1 = 2 per unit; subsidise Firm 2 at 𝑠2 = 8 per unit.
Step 5: Social dividend (gain from intervention).
Social dividend = Joint profit at optimum - Joint profit at unregulated equilibrium
= 360 − 307.5 = 52.5
This 52.5 is the potential welfare gain from internalising the externalities. It represents the
deadweight loss eliminated by the tax/subsidy policy.
Final allocation with tax/subsidy: - Firm 1 produces 𝑞 = 40, pays tax of 2 × 40 = 80 - Firm 2
                                                                   1
produces 𝑞 = 40, receives subsidy of 8 × 40 = 320 - Private profits after tax/subsidy: -
            2
𝜋after
  1
       tax
           = [15(40) − 0.1(1600) − 5(40) + 0.1(1600)] − 80 = [600 − 160 − 200 + 160] − 80 = 400 − 80 = 320 -
𝜋after
  2
       sub
           = [15(40) − 0.2(1600) − 7(40) − 0.025(1600)] + 320 = [600 − 320 − 280 − 40] + 320 = −40 + 320 = 280
- Both firms are better off than under unregulated competition (𝜋1 = 320 > 290, 𝜋2 = 280 > 17.5).
Exam Tip: First classify each externality by sign (positive = economy, negative = diseconomy).
Tax the source of the negative externality (Firm 1’s output harms Firm 2), subsidise the source
of the positive externality (Firm 2’s output helps Firm 1). The social dividend measures the
welfare gain from intervention.



Key Formulas — Externalities & Public Goods

 Concept                                                 Formula

 Social optimum condition                                −𝜕𝐶𝑆 /𝜕𝑥 = 𝜕𝐶𝐹 /𝜕𝑥 (production externality)

 Pigouvian tax                                           𝜏* = 𝜕𝐶𝐹 /𝜕𝑥 at 𝑥 = 𝑥∘

                                                         Zero TC + property rights ⇒ bargaining ⇒
 Coase Theorem
                                                         efficiency
                                                                   𝑖
 Samuelson condition (public good)                       ∑𝑖 MRS𝐺, 𝑋 = MRT𝐺, 𝑋
                                                          ′            ′   *
 Tragedy of Commons (private FOC)                        𝐵𝑖 (𝑞*𝑖 ) = 𝐶 (𝑄 )

 Tragedy of Commons (social FOC)                         𝐵′𝑖 (𝑞∘𝑖 ) = ∑𝑗 𝐶′ (𝑄∘ )

 Lindahl equilibrium                                     ∑𝑖 𝑝𝑖 = MC, where 𝑝𝑖 = MRS𝑖

 Free-rider gap                                          𝐺* /𝐺∘ = 1/𝑁 (symmetric 𝑁 agents)

 Marginal social cost                                    MSC = MPC + MEC

                                                         Π∘𝐽 − Π*𝐽 (gain from internalising
 Social dividend
                                                         externalities)




Topic 8: Information & Trade

8.1 Asymmetric Information & Adverse Selection
Why this matters for your exam: Asymmetric information is one of the most heavily tested
topics in information economics. Examiners love Akerlof’s “lemons” model — it shows how
markets can collapse in a surprising, non-obvious way. You will need to compute expected
values, trace the unraveling logic step by step, and explain why high-quality goods vanish from
the market.
Definition: Asymmetric information arises when one party to a transaction has superior
information about a relevant characteristic (Akerlof, 1970; Munoz-Garcia, SS8.4, p.564).
Types of asymmetric information problems:


 Problem                    Information                            Timing                    Example

                                                                   Before                    Used cars,
 Adverse selection          Hidden characteristic
                                                                   transaction               insurance

                                                                                             Careless driving
 Moral hazard               Hidden action                          After transaction
                                                                                             after insuring

                                                                                             Manager-
                                                                   During
 Principal-agent            Hidden effort                                                    shareholder
                                                                   relationship
                                                                                             conflicts


8.1.1 The Market for “Lemons” (Akerlof, 1970)

Why this matters for your exam: This is the classic example of adverse selection. You’ll be
expected to reproduce the arithmetic and explain how asymmetric information drives high-
quality goods out of the market.
Setup: - Used car market: two types — “peaches” (high quality) and “lemons” (low quality). -
Sellers know true quality; you (as a buyer) cannot distinguish types ex ante. - 50% peaches
(value $10,000 to you, $8,000 to the seller). - 50% lemons (value $5,000 to you, $3,000 to the
seller).
Full information benchmark: Two separate markets clear — peaches trade at
$8,000-$10,000; lemons at $3,000-$5,000. You get what you pay for.
Asymmetric information: You know only the average quality. Your willingness to pay:


  Let’s work through this step by step. We start with the fact that you cannot observe individual
  car quality: 1. You know the population distribution: 50% peaches ($10,000 value) and 50% lemons
  ($5,000 value). 2. Since you cannot distinguish types ex ante, you form an expected value:
  𝐸[𝑉] = ∑ 𝑝𝑖 ⋅ 𝑉𝑖 . 3. Substituting: 𝐸[𝑉] = 0.5 × 10, 000 + 0.5 × 5, 000. 4. → Final form: 𝐸[𝑉] = 7, 500.
  Here’s what’s really going on: Under asymmetric information, your willingness to pay equals the
  probability-weighted average of possible values. This is the rational response when quality is
  unobservable — but it systematically undervalues high-quality goods and overvalues low-quality
  ones, creating the conditions for adverse selection.


                               𝐸[𝑉] = 0.5 × 10, 000 + 0.5 × 5, 000 = 7, 500
Adverse selection mechanism: 1. Market price = 7, 500 (reflecting average quality). 2. Peach
owners value their cars at 8, 000 (reservation price). Since 7, 500 < 8, 000, they exit the market.
3. Only lemons remain. You update your expectation: expected value = 5, 000. 4. Lemon market
clears at ~4, 000 (between 3, 000 and 5, 000).
Result: High-quality goods disappear from the market — adverse selection drives out the
good.
Complete market collapse: If the proportion of lemons is high enough that 𝐸[𝑉] falls below
the reservation price of even lemon sellers, the market collapses entirely — no trade occurs.
General condition for market collapse:


  Let’s work through this step by step. We start from the adverse selection mechanism: 1. Trade
  occurs only if your willingness to pay (the expected value 𝐸[𝑉]) exceeds the seller’s reservation
  price. 2. If 𝐸[𝑉] is below the reservation price of the highest-quality sellers, they exit. 3. This lowers
  average quality, further reducing 𝐸[𝑉], causing more exits. 4. The market collapses entirely when
  𝐸[𝑉] falls below the reservation price of all sellers — i.e., when even the lowest-quality seller refuses
  to trade. 5. → Final form: 𝐸[𝑉] < max⁡{reservation price of sellers}.
  Here’s what’s really going on: The market collapses when the expected value — the maximum
  any buyer will pay — is less than what the most optimistic seller requires to part with their good.
  No mutually beneficial trade exists under these conditions.


                                           𝐸[𝑉] < max⁡{reservation price of sellers}
Solutions: 1. Signalling — informed party reveals type (warranties, certifications, education)
2. Screening — uninformed party offers a menu of contracts to separate types 3. Reputation
mechanisms — repeat interactions sustain quality 4. Government intervention —
mandatory disclosure, quality standards, licensing
Exam Tip: This is Akerlof (1970, Nobel Prize 2001). The key intuition: asymmetric information
can destroy markets. Show the arithmetic: expected value calculation → adverse selection
→ market shrinkage/ collapse.

8.1.2 Formal Akerlof Model — Continuous Quality Distribution (Munoz-Garcia, Ch.10,
pp.761–765)

Why this matters for your exam: The continuous version shows the “unraveling” process in
full generality — a common source of exam questions about market collapse dynamics.
Setup: - Car quality 𝑞 is continuously uniformly distributed: 𝑞 ∼ 𝑈[0, 𝑄] where 𝑄 ∈ (1, 2). - You
value quality 𝑞 at 𝑞 (you’ll pay up to 𝑞). - The seller values quality 𝑞 at 𝑞/𝑄 (reservation value).
Since 𝑞/𝑄 < 𝑞, gains from trade exist for all 𝑞 > 0.
Symmetric information benchmark: You observe 𝑞, accept price 𝑝 iff 𝑝 ≤ 𝑞. The seller sets
𝑝 = 𝑞 (binding PC). Price under symmetric information: 𝑝𝑆𝐼 = 𝑞 for all 𝑞 ∈ [0, 𝑄]. All cars trade —
first-best efficient.
Asymmetric information — first iteration: - You cannot observe 𝑞, so you form expectation
𝐸[𝑞]. - Since 𝑞 ∼ 𝑈[0, 𝑄], 𝐸[𝑞] = 𝑄/2. - The seller sets 𝑝 = 𝐸[𝑞] = 𝑄/2 (your PC binds). - Seller’s profit:
                                    2                                           2
𝜋 = 𝑝 − 𝑞/𝑄 = 𝑄/2 − 𝑞/𝑄 ≥ 0 ⇔ 𝑞 ≤ 𝑄 /2. - Result: Only low-quality cars 𝑞 ≤ 𝑄 /2 are offered. High-
                    2
quality cars 𝑞 > 𝑄 /2 exit the market.
                                                                                                       2
Second iteration (rational expectations): - You anticipate that only 𝑞 ≤ 𝑄 /2 are offered. -
                                                      2         2           2                                2
Conditional expected quality: 𝐸[𝑞 | 𝑞 ≤ 𝑄 /2] = (𝑄 /2)/2 = 𝑄 /4. - The seller sets 𝑝 = 𝑄 /4, profit
     2                             3                                                       3
𝜋 = 𝑄 /4 − 𝑞/𝑄 ≥ 0 ⇔ 𝑞 ≤ 𝑄 /4. - Further restricts offered cars to [0, 𝑄 /4].
Complete unraveling: We repeat this argument iteratively:


  Let’s work through this step by step. We start from the iterative expectation-updating process:
                       (0)
  1. Iteration 0: 𝐸       [𝑞] = 𝑄/2 (unconditional mean of 𝑈[0, 𝑄]). 2. Iteration 1: Only cars with
            (0)
  𝑞 ≤ 𝑄⋅𝐸     [𝑞] = 𝑄 /2 remain. Conditional on 𝑞 ∈ [0, 𝑄2 /2], the mean is 𝐸(1) [𝑞] = (𝑄2 /2)/2 = 𝑄2 /4. 3.
                   2
                                           (1)        2      3
  Iteration 2: Only cars with 𝑞 ≤ 𝑄 ⋅ 𝐸 [𝑞] = 𝑄 ⋅ 𝑄 /4 = 𝑄 /4 remain. Conditional mean:
  𝐸(2) [𝑞] = (𝑄3 /4)/2 = 𝑄3 /8. 4. General pattern: At iteration 𝑛, the cutoff is 𝑄𝑛 + 1 /2𝑛 + 1 and the
                                                                                     𝑛+1
  conditional mean is 𝐸
                             (𝑛)
                                   [𝑞] = 𝑄𝑛 + 1 /2𝑛 + 1 . 5. → Final form: 𝐸(𝑛) [𝑞] = 𝑄𝑛 + 1 → 0 as 𝑛 → ∞.
                                                                                    2
  Here’s what’s really going on: Each iteration shrinks the set of cars offered, which lowers
  expected quality, which further tightens the cutoff. This “unraveling” continues until only 𝑞 = 0
  remains — the market for all positive-quality cars is destroyed. The speed of unraveling depends on
  𝑄: if 𝑄 is small, collapse is faster.
                                   (𝑛)           𝑄𝑛 + 1
                                  𝐸      [𝑞] =            cutoff → 0 as 𝑛 → ∞
                                                 2𝑛 + 1
The market unravels to 𝑞 = 0 only — the market for all cars 𝑞 > 0 ceases to exist. This is the
strong form of Akerlof’s result: asymmetric information can completely destroy a market that
would function efficiently under full information.
Example 10.5 (Munoz-Garcia): Let 𝑄 = 1.9. Then 𝐸[𝑞] = 0.95, cutoff 𝑄 ⋅ 𝐸[𝑞] = 1.805. Cars in
(1.805, 1.9] exit. Second iteration: 𝐸[𝑞|𝑞 ≤ 1.805] = 0.90, cutoff 𝑄3 /4 = 1.71. The market for good
cars progressively shrinks.

8.1.3 Adverse Selection in Labor Markets (Munoz-Garcia, Ch.10, pp.765–766)

Why this matters for your exam: This applies the same unraveling logic to labour markets —
a common exam twist that tests whether you understand the general principle, not just the
used-car example.
The same logic applies to any market with asymmetric information:
Setup: - Worker productivity 𝜃 ∼ 𝑈[0, 1], privately observed by the worker. - Competitive firms
cannot observe 𝜃 and offer wage 𝑤 = 𝐸[𝜃]. - Workers accept iff 𝑤 ≥ 𝜃 (their reservation wage
equals productivity).
Iterative unraveling: 1. First round: Firms offer 𝑤 = 𝐸[𝜃] = 1/2. Only workers with 𝜃 ≤ 1/2
accept. Workers with 𝜃 > 1/2 remain unemployed. 2. Second round: Firms update:
𝐸[𝜃 | 𝜃 ≤ 1/2] = 1/4. New wage 𝑤 = 1/4. Only workers with 𝜃 ≤ 1/4 accept. 3. Third round:
𝐸[𝜃 | 𝜃 ≤ 1/4] = 1/8. Wage 𝑤 = 1/8. Only 𝜃 ≤ 1/8 accept. 4. Limit as 𝑛 → ∞: Only workers with 𝜃 = 0
are employed. The labor market for all 𝜃 > 0 unravels.
Implication: Asymmetric information can cause the labor market to collapse to the lowest-
productivity worker. The market for all positive-productivity workers disappears — a stark
demonstration of market failure due to adverse selection.


  Munoz-Garcia Insight — Market Unraveling (Ch.10, pp.763–765): The iterative process is the
  key contribution of Akerlof (1970). It shows that adverse selection is not a one-step phenomenon —
  rational agents anticipate each other’s responses, leading to a cascade of expectation updates that
  can eliminate all trade. The formal condition for partial or complete market collapse depends on the
  support of the quality distribution and the relative valuations of buyers and sellers.



  Munoz-Garcia Insight — Adverse Selection (Ch.10, pp.761–765): The “lemons” problem
  arises when sellers have better information about product quality than buyers. Since buyers can
  only observe average quality, they are only willing to pay the expected value. This systematically
  drives high-quality goods from the market — a process Akerlof called adverse selection. Munoz-
  Garcia’s treatment extends the original model to continuous quality distributions and shows that
  the market can completely “unravel” through iterative expectation updates.




8.2 Signalling — The Spence Model of Education

Why this matters for your exam: Spence’s signalling model is the classic application of
game theory to labour markets. Exam questions often ask you to derive the separating
equilibrium condition, explain why single-crossing is essential, or apply the Intuitive Criterion
to eliminate pooling equilibria. You’ll also see this model in policy discussions about whether
education actually builds skills or just signals them.
Setup (Spence, 1973; Nobel Prize 2001; Munoz-Garcia, SS8.5, pp.573-578):

     Workers have private information about their productivity type: High (H) or Low (L).
     Productivity: 𝑞 > 𝑞 (H contributes more to firm profits).
                      𝐻    𝐿
     Education 𝑒 ∈ {0, 1} is costly but does not enhance productivity — it is a pure signal of
     type.
     Cost of education: 𝑐𝐻 for H-types, 𝑐𝐿 for L-types, with single-crossing property: 𝑐𝐿 > 𝑐𝐻 .
     Firms observe education but not type; wages are set competitively based on beliefs.

Game structure: 1. Nature chooses worker type (H or L) — you (the worker) know your own
type, but the firm does not. 2. You choose education level 𝑒 ∈ {0, 1}. 3. The firm observes 𝑒,
updates beliefs 𝜇(𝐻|𝑒), and offers wage 𝑤(𝑒). 4. Payoffs: You get 𝑤(𝑒) − 𝑐(𝑒); the firm gets
productivity minus wage (zero profit in equilibrium).

Separating Equilibrium

H-types acquire education (𝑒 = 1), L-types do not (𝑒 = 0).
Firm beliefs (on equilibrium path): 𝜇(𝐻|𝑒 = 1) = 1, 𝜇(𝐻|𝑒 = 0) = 0. Wages: 𝑤(1) = 𝑞𝐻 , 𝑤(0) = 𝑞𝐿 .
Incentive compatibility conditions:
H-type prefers 𝑒 = 1: 𝑤(1) − 𝑐𝐻 ≥ 𝑤(0) ⇒ 𝑞 − 𝑐𝐻 ≥ 𝑞 L-type prefers 𝑒 = 0: 𝑤(0) ≥ 𝑤(1) − 𝑐𝐿 ⇒
                                              𝐻          𝐿
𝑞𝐿 ≥ 𝑞𝐻 − 𝑐𝐿
Combined:


  Let’s work through this step by step. We start with the two incentive compatibility (IC)
  constraints that define a separating equilibrium: 1. H-type IC (prefers education): 𝑤(1) − 𝑐𝐻 ≥ 𝑤(0).
  Substituting equilibrium wages 𝑤(1) = 𝑞𝐻 , 𝑤(0) = 𝑞𝐿 : 𝑞𝐻 − 𝑐𝐻 ≥ 𝑞𝐿 . 2. Rearranging H-type IC:
  𝑐𝐻 ≤ 𝑞𝐻 − 𝑞𝐿 . 3. L-type IC (prefers no education): 𝑤(0) ≥ 𝑤(1) − 𝑐𝐿 . Substituting: 𝑞𝐿 ≥ 𝑞𝐻 − 𝑐𝐿 . 4.
  Rearranging L-type IC: 𝑞𝐻 − 𝑞𝐿 ≤ 𝑐𝐿 . 5. Combining steps 2 and 4: 𝑐𝐻 ≤ 𝑞𝐻 − 𝑞𝐿 ≤ 𝑐𝐿 . 6. → Final form:
  𝑐𝐻 ≤ 𝑞𝐻 − 𝑞𝐿 ≤ 𝑐𝐿 .
  Here’s what’s really going on: The wage premium for education (𝑞 − 𝑞 ) must lie between the
                                                                          𝐻    𝐿
  education costs of the two types. It must be large enough to incentivise H-types to invest in
  education, but small enough that L-types do not find it profitable to mimic. This is only possible if
  𝑐𝐿 > 𝑐𝐻 (single-crossing).


Combined:
                                             𝑐𝐻 ≤ 𝑞𝐻 − 𝑞𝐿 ≤ 𝑐𝐿
The wage gap 𝑤𝐻 − 𝑤𝐿 = 𝑞 − 𝑞 must lie in the interval [𝑐𝐻 , 𝑐𝐿 ].
                               𝐻   𝐿
Feasibility condition: Single-crossing 𝑐𝐿 > 𝑐𝐻 is necessary — otherwise L-types could mimic
H-types, and signalling would break down.

Pooling Equilibrium

Neither type acquires education (𝑒 = 0 for both).
Firm beliefs: 𝜇(𝐻|𝑒 = 0) = 𝜇 (population fraction of H-types). Wage: 𝑤(0) = 𝜇𝑞𝐻 + (1 − 𝜇)𝑞𝐿 . Off-
equilibrium beliefs: 𝜇(𝐻|𝑒 = 1) must be sufficiently pessimistic (e.g., 𝜇(𝐻|𝑒 = 1) = 0) so that
neither type deviates.
Condition: Both types prefer 𝑒 = 0: 𝑤(0) ≥ 𝑞𝐻 − 𝑐𝐻 (else H would deviate).

8.2.1 Continuum of Types — The Full Spence Model (Munoz-Garcia, Ch.11)

Why this matters for your exam: The continuous-type version shows the full power of the
Spence-Mirrlees single-crossing condition — a key concept that reappears in contract theory
and mechanism design.
The binary-type model extends naturally to a continuum of productivity types 𝜃:
                                                                   ¯
Setup: - Worker productivity 𝜃 is distributed on [𝜃_ , 𝜃] with CDF 𝐹(𝜃). - You (the worker) choose
education level 𝑒 ∈ ℝ+ at cost 𝑐(𝑒, 𝜃). - Single-crossing property (Spence-Mirrlees
condition): 𝑐𝑒𝜃 < 0, i.e., the marginal cost of education is decreasing in ability:


  Let’s work through this step by step. We start from the definition of the cost function 𝑐(𝑒, 𝜃): 1.
  The Spence-Mirrlees single-crossing condition requires that the marginal cost of education 𝜕𝑐/𝜕𝑒 is
                                        𝜕 𝜕𝑐
  decreasing in ability 𝜃. 2. Formally: 𝜕𝜃 ( 𝜕𝑒 ) < 0. 3. By Clairaut’s theorem on equality of mixed
              2
            𝜕 𝑐      2
                   𝜕 𝑐                        𝜕2 𝑐(𝑒, 𝜃)
  partials: 𝜕𝜃𝜕𝑒 = 𝜕𝑒𝜕𝜃 . 4. → Final form:      𝜕𝑒𝜕𝜃 < 0.
  Here’s what’s really going on: This condition ensures that higher-ability workers find it cheaper
  to acquire additional education at the margin. It guarantees that the indifference curves of different
  types cross only once — a necessary condition for education to serve as a credible signal. Without
  it, low-ability workers could costlessly mimic the education choices of high-ability workers, and the
  signal would be meaningless.


                                                       𝜕2 𝑐(𝑒, 𝜃)
                                                                  <0
                                                         𝜕𝑒𝜕𝜃
This implies that higher-ability workers find it cheaper to acquire additional education —
education is a credible signal because it is differentially costly.

     Firms observe 𝑒, form beliefs 𝜇(𝜃|𝑒), and pay wage 𝑤(𝑒) = 𝐸[𝜃|𝑒] (competitive zero-profit
     condition).

Worker’s optimization:


  Let’s work through this step by step. We start from your (the worker’s) objective in the
  signalling game: 1. As a worker of type 𝜃, you choose education 𝑒 ≥ 0 to maximize your net payoff
  (wage minus education cost). 2. The wage 𝑤(𝑒) is set by firms based on their beliefs about your type
  given your observed education. 3. The cost of education 𝑐(𝑒, 𝜃) depends on both the education level
  and your ability. 4. Your maximization problem is therefore: max⁡𝑒 ≥ 0 [𝑤(𝑒) − 𝑐(𝑒, 𝜃)]. 5. → Final form:
  max⁡𝑒 ≥ 0 𝑤(𝑒) − 𝑐(𝑒, 𝜃).
  Here’s what’s really going on: You trade off the wage benefit of more education (higher 𝑒 signals
  higher 𝜃, commanding higher 𝑤) against its cost (which is lower for high-ability workers). The
  optimal 𝑒 equates marginal benefit to marginal cost.


                                                    max 𝑤(𝑒) − 𝑐(𝑒, 𝜃)
                                                    𝑒≥0
First-order condition (for interior separating equilibrium):


  Let’s work through this step by step. We start from your maximization problem
  max⁡𝑒 [𝑤(𝑒) − 𝑐(𝑒, 𝜃)]: 1. Take the derivative with respect to 𝑒 and set equal to zero (first-order
                                                                                                    𝜕𝑐(𝑒, 𝜃)
  condition for an interior solution): 𝑑 [𝑤(𝑒) − 𝑐(𝑒, 𝜃)] = 0. 2. Applying the sum rule: 𝑤′ (𝑒) −     𝜕𝑒     = 0. 3.
                                             𝑑𝑒
                              𝜕𝑐(𝑒, 𝜃)                        𝜕𝑐(𝑒, 𝜃)
  Rearranging: 𝑤′ (𝑒) =                                ′
                                𝜕𝑒 . 4. → Final form: 𝑤 (𝑒) =   𝜕𝑒 .
  Here’s what’s really going on: At the optimal education level, the marginal wage gain from an
                                        ′
  additional unit of education (𝑤 (𝑒)) equals the marginal cost of that education (𝜕𝑐/𝜕𝑒). This is the
  standard marginal-benefit-equals-marginal-cost condition.


                                                                𝜕𝑐(𝑒, 𝜃)
                                                     𝑤′ (𝑒) =
                                                                  𝜕𝑒
Equilibrium wage schedule: In a separating equilibrium where types are fully revealed, the
wage function must satisfy the differential equation:


  Let’s work through this step by step. We start from the first-order condition and the separating
  equilibrium property: 1. In a separating equilibrium, each type 𝜃 chooses a distinct education level
  𝑒(𝜃), and firms perfectly infer type from 𝑒. 2. The wage equals expected productivity conditional on
  observed 𝑒: 𝑤(𝑒) = 𝐸[𝜃|𝑒]. 3. In a fully separating equilibrium, 𝑒 perfectly reveals 𝜃, so 𝑤(𝑒(𝜃)) = 𝜃. 4.
                                                            ′     ′             ′        ′
  Differentiating 𝑤(𝑒(𝜃)) = 𝜃 with respect to 𝜃: 𝑤 (𝑒) ⋅ 𝑒 (𝜃) = 1, so 𝑤 (𝑒) = 1/𝑒 (𝜃). 5. Alternatively, using
                                                                                                             𝜕𝑐(𝑒, 𝜃)
  the FOC 𝑤 (𝑒) = 𝜕𝑐(𝑒, 𝜃)/𝜕𝑒 and noting that 𝜃 = 𝜃(𝑒) (the inverse of 𝑒(𝜃)): 6. → Final form: 𝑤′ (𝑒) =
             ′
                                                                                                               𝜕𝑒
  where 𝜃 = 𝜃(𝑒).
  Here’s what’s really going on: In a separating equilibrium, the wage schedule must be incentive-
  compatible: it must induce each type to choose the education level intended for them. This creates
  a differential equation linking the wage function to the cost structure. The wage grows at a rate
  equal to the marginal cost of education for the type at that education level.


                                          𝜕𝑐(𝑒, 𝜃)
                               𝑤′ (𝑒) =              where      𝜃 = 𝜃(𝑒) is the inverse of 𝑒(𝜃)
                                            𝜕𝑒
Explicit example (quadratic costs): Suppose 𝑐(𝑒, 𝜃) = 𝛼𝑒2 /𝜃 where 𝛼 > 0. Then: -
                                               2
𝑐𝑒 (𝑒, 𝜃) = 2𝛼𝑒/𝜃 and 𝑐𝑒𝜃 (𝑒, 𝜃) = −2𝛼𝑒/𝜃 < 0 — single-crossing holds. - FOC: 𝑤′ (𝑒) = 2𝛼𝑒/𝜃(𝑒). - In a
                                                                                         ′
separating equilibrium, 𝑤(𝑒) = 𝜃(𝑒) (workers paid their true productivity). - Thus 𝜃 (𝑒) = 2𝛼𝑒/𝜃(𝑒).
                                       2                                                             2    2
- Solving: 𝜃(𝑒) 𝑑𝜃 = 2𝛼𝑒 𝑑𝑒 ⟹ 1 𝜃(𝑒) = 𝛼𝑒2 + 𝐶. - The separating education function: 𝑒* (𝜃) = √
                                                                                                    𝜃 − _𝜃
                                     2                                                                             2𝛼
             2
where 𝐶 = 𝜃_ /2. - Result: Education is increasing in ability: 𝜕𝑒* /𝜕𝜃 > 0. More productive
workers acquire more education, consistent with empirical patterns.

8.2.2 The Intuitive Criterion (Cho-Kreps, 1987)

Why this matters for your exam: The Intuitive Criterion is the most commonly used
refinement in signalling games. Examiners ask you to apply it to eliminate “unreasonable”
pooling equilibria — it tests whether you understand how off-equilibrium beliefs can sustain
fragile outcomes.
A refinement for signaling games that eliminates unreasonable pooling equilibria:
The problem: In a pooling equilibrium, off-equilibrium beliefs can be arbitrarily set to sustain
the equilibrium. For example, 𝜇(𝐻|𝑒 = 1) can be set to 0 (or sufficiently low) to deter deviation —
but are all such beliefs “reasonable”?
The Intuitive Criterion (Cho and Kreps, 1987): An equilibrium fails the Intuitive Criterion
if there exists a deviation (an out-of-equilibrium message) such that:

   1. Condition 1: All types for whom the deviation is dominated by their equilibrium payoff
      would never choose it. Specifically, type 𝜃 would never deviate if:


  Let’s work through this step by step. We start from the definition of “dominated by equilibrium
                                                      𝑒𝑞
  payoff”: 1. Type 𝜃’s equilibrium payoff is 𝑢             (𝜃) — what they receive in the candidate equilibrium. 2.
                           ′
  Consider a deviation 𝑒 (an education level not chosen in equilibrium). 3. For this deviation to be
  dominated, it must yield lower utility than the equilibrium payoff for every possible response of
  the uninformed player (i.e., for all wage offers the firm could make). 4. Formally: 𝑢* (𝑒′ , 𝜃) < 𝑢𝑒𝑞 (𝜃)
  where 𝑢* is the supremum (best possible) payoff from deviating, taken over all possible off-
  equilibrium beliefs. 5. → Final form: 𝑢* (𝑒′ , 𝜃) < 𝑢𝑒𝑞 (𝜃) for all possible responses to 𝑒′ .
  Here’s what’s really going on: Condition 1 identifies types that would never benefit from
  deviating, regardless of how the firm interprets the deviation. We can “eliminate” these types from
  consideration when evaluating the reasonableness of off-equilibrium beliefs.


                                  𝑢* (𝑒′ , 𝜃) < 𝑢𝑒𝑞 (𝜃) for all possible responses to 𝑒′

   2. Condition 2: After eliminating those “dominated” types, the remaining types (if any)
      would strictly benefit from the deviation, assuming the uninformed player holds beliefs
      concentrated on the remaining types.

Formal definition (Cho-Kreps): An equilibrium (𝑎* , 𝜇* ) fails the Intuitive Criterion if there
                                                           ′
exists a deviation 𝑎′ ∉ supp(𝑎* ) and a type 𝜃 such that:
  Let’s work through this step by step. We start from the construction of the set of types that
                                                                       **   ′
  could potentially benefit from deviation: 1. Define Θ (𝑎 ) as the set of types 𝜃 for whom the
  deviation 𝑎′ is not dominated by the equilibrium payoff. 2. Formally:
  Θ* * (𝑎′ ) = {𝜃 ∈ Θ: 𝑢* (𝑎′ , 𝜃) ≥ 𝑢𝑒𝑞 (𝜃)}. 3. For the Intuitive Criterion to fail, this set must be non-empty
  — otherwise no type could possibly benefit from the deviation, and the off-equilibrium belief is
  irrelevant. 4. → Final form: Θ
                                      **
                                           (𝑎′ ) ≡ {𝜃 ∈ Θ: 𝑢* (𝑎′ , 𝜃) ≥ 𝑢𝑒𝑞 (𝜃)} ≠ ∅.
                                               **
  Here’s what’s really going on: Θ     contains types that are “candidates” for deviating. These are
  types whose best possible payoff from deviation is at least as good as what they get in equilibrium.
  If this set is empty, no type could rationally deviate and the equilibrium is robust to the Intuitive
  Criterion.


                                     Θ* * (𝑎′ ) ≡ {𝜃 ∈ Θ: 𝑢* (𝑎′ , 𝜃) ≥ 𝑢𝑒𝑞 (𝜃)} ≠ ∅
                     **
and for all 𝜃 ∈ Θ         (𝑎′ ):

  Let’s work through this step by step. We start from the second condition of the Intuitive
                                                                                    **
  Criterion: 1. After eliminating dominated types, we focus on Θ                         (𝑎′ ) — types that could potentially
  benefit from deviation. 2. The Intuitive Criterion asks: if the uninformed player (firm) believes the
                               **
  deviator must be in Θ           (𝑎′ ) (i.e., 𝜇(Θ* * (𝑎′ )|𝑎′ ) = 1), do all types in Θ* * (𝑎′ ) strictly prefer deviating?
                          **   ′                    ′          **   ′           𝑒𝑞
  3. For each 𝜃 ∈ Θ (𝑎 ), compare: 𝑢(𝑎 , 𝜃, 𝜇(Θ (𝑎 ) = 1)) > 𝑢 (𝜃). 4. → Final form:
  𝑢(𝑎′ , 𝜃, 𝜇(Θ* * (𝑎′ ) = 1)) > 𝑢𝑒𝑞 (𝜃).
  Here’s what’s really going on: If every type that could possibly benefit from the deviation does
  strictly benefit when the firm’s beliefs are concentrated on the set of potential deviators, then the
  off-equilibrium belief that sustains the equilibrium (e.g., 𝜇(𝐻|𝑒 = 1) = 0) is “unreasonable.” The
  equilibrium fails the Intuitive Criterion.


                                                                   (𝑎′ ) = 1)) > 𝑢𝑒𝑞 (𝜃)
                                                              **
                                              𝑢(𝑎′ , 𝜃, 𝜇(Θ
Application to Spence model: - In a pooling equilibrium where neither type acquires
education, consider a deviation to 𝑒 = 1. - The L-type’s cost is so high that even if deviation led
to wage 𝑞 , L would not benefit: 𝑞 − 𝑐𝐿 < 𝑤(0). - The H-type would benefit if deviation led to
           𝐻                                  𝐻
𝑤(1) = 𝑞𝐻 : 𝑞𝐻 − 𝑐𝐻 > 𝑤(0). - The Intuitive Criterion says: off-equilibrium beliefs must assign
𝜇(𝐻|𝑒 = 1) = 1 (since only H could benefit). - With 𝜇(𝐻|𝑒 = 1) = 1, the H-type strictly prefers to
deviate → pooling equilibrium is eliminated. - Result: The Intuitive Criterion selects the
separating equilibrium as the unique “reasonable” outcome.


  Munoz-Garcia Insight — Intuitive Criterion (Ch.8, pp.578–580): The Cho-Kreps refinement
  exploits the single-crossing property. When costs differ by type, a deviation that is profitable for one
  type but not the other forces the uninformed player to draw precise inferences. This eliminates
  pooling equilibria that survive only because of arbitrary off-equilibrium beliefs. The Intuitive
  Criterion is the most commonly applied refinement in signaling games.


8.2.3 Screening vs Signalling

Why this matters for your exam: Examiners frequently ask you to distinguish screening
from signalling — the distinction hinges on who moves first and who designs the contract. This
is a classic compare-and-contrast question.
The distinction between screening and signaling is fundamental:


 Feature                              Signalling                                           Screening

 Who moves first                      Informed party                                       Uninformed party
 Feature                           Signalling                                Screening

 Who designs the                   Informed agent chooses from a             Uninformed principal offers a
 contract/message                  set                                       menu

                                   Spence (1973): Worker chooses             Rothschild-Stiglitz (1976):
 Example
                                   education                                 Insurer offers menu

                                   Agent sends costly signal to
 Information revelation                                                      Agent self-selects from a menu
                                   reveal type

                                                                             Incentive compatibility (self-
 Key requirement                   Single-crossing (signaling cost)
                                                                             selection)

                                   Socially wasteful (resources              Can be efficient if menu well-
 Efficiency
                                   consumed)                                 designed


Key analogy: - Signalling: The informed agent says “I am this type” and backs it up with a
costly action. - Screening: The uninformed principal says “Choose the contract that fits you”
and types reveal themselves through their choice.
Important subtlety: In the Spence model, you (the informed worker) choose education first —
this is signalling. In the Rothschild-Stiglitz insurance model, the insurer (uninformed) offers a
menu of contracts first — this is screening. Both achieve type revelation, but through different
mechanisms and with different efficiency properties.

8.2.4 The Stiglitz Screening Model of Insurance (Rothschild-Stiglitz, 1976)

Why this matters for your exam: This is the canonical screening model. It shows how self-
selection contracts work in insurance markets and introduces the famous “no distortion at the
top” result.
Setup: - Consumers have wealth 𝑊 and face a potential loss 𝐿 with probability 𝑝. - Two types:
High-risk (𝑝 ) and Low-risk (𝑝 ), with 𝑝 > 𝑝 . - The insurer cannot observe risk type (adverse
               𝐻                      𝐿           𝐻     𝐿
selection). - The insurer offers a menu of contracts: (𝛼, 𝛽) where 𝛼 is the premium and 𝛽 is the
coverage. - Your final wealth: 𝑊 − 𝛼 if no loss, 𝑊 − 𝛼 − 𝐿 + 𝛽 if loss.
Full information benchmark: - Actuarially fair contracts: 𝛼𝑖 = 𝑝 𝛽 for type 𝑖 = {𝐻, 𝐿}. - Each
                                                                                 𝑖 𝑖
type buys full insurance: 𝛽𝑖 = 𝐿 at premium 𝛼𝑖 = 𝑝𝑖 𝐿.
Asymmetric information — separating equilibrium: - The low-risk type must be offered a
contract that the high-risk type does not prefer. - Low-risk contract: (𝛼𝐿 , 𝛽𝐿 ) with less-than-full
coverage to deter H-type mimicking. - The H-type receives full insurance: 𝛼𝐻 = 𝑝 𝐿, 𝛽 = 𝐿. - The
                                                                                                   𝐻    𝐻
L-type receives partial insurance with a deductible 𝐷 = 𝐿 − 𝛽𝐿 :


  Let’s work through this step by step. We start from the requirement that the low-risk contract
  be actuarially fair and incentive-compatible: 1. Actuarially fair condition: The premium equals
  the expected payout: 𝛼𝐿 = 𝑝𝐿 𝛽𝐿 . This ensures the L-type contract breaks even for the insurer. 2. H-
  type incentive compatibility: The H-type must not prefer the L-type contract. The H-type’s utility
  from their own contract (full insurance at fair odds) is 𝑢(𝑊 − 𝑝 𝐿). 3. If the H-type deviates to the L-
                                                                       𝐻
  type contract, their expected utility is: 𝑝𝐻 𝑢(𝑊 − 𝛼𝐿 − 𝐿 + 𝛽𝐿 ) + (1 − 𝑝𝐻 )𝑢(𝑊 − 𝛼𝐿 ). 4. The IC constraint
  requires: 𝑢(𝑊 − 𝑝𝐻 𝐿) ≥ 𝑝𝐻 𝑢(𝑊 − 𝛼𝐿 − 𝐿 + 𝛽𝐿 ) + (1 − 𝑝𝐻 )𝑢(𝑊 − 𝛼𝐿 ). 5. The deductible 𝐷 = 𝐿 − 𝛽𝐿 is set to
  make this constraint bind (just enough to deter the H-type).
  Here’s what’s really going on: The L-type’s contract is distorted away from full insurance to
  create self-selection. The H-type, being more likely to suffer the loss, values full coverage more and
  thus finds the partial coverage contract less attractive. The deductible is calibrated so that the H-
  type is indifferent — any smaller deductible would attract the H-type and destroy the separating
  equilibrium.


                                    𝛼𝐿 = 𝑝𝐿 𝛽𝐿 (actuarially fair for L)
                     H-type IC: 𝑢(𝑊 − 𝑝𝐻 𝐿) ≥ 𝑝𝐻 𝑢(𝑊 − 𝛼𝐿 − 𝐿 + 𝛽𝐿 ) + (1 − 𝑝𝐻 )𝑢(𝑊 − 𝛼𝐿 )
The deductible is set just large enough to make the H-type indifferent between his full-
insurance contract and the L-type’s partial-insurance contract.
Result — equilibrium may fail to exist: - If the proportion of high-risk types is sufficiently
large, a pooling contract can be offered that attracts both types. - However, a pooling
contract at actuarially fair average price 𝑝‾ = 𝜆𝑝 + (1 − 𝜆)𝑝 is always vulnerable to cream-
                                                      𝐻           𝐿
skimming — a competitor offers a slightly lower premium contract that attracts only L-types. -
Rothschild-Stiglitz result: A Nash equilibrium in pure strategies may not exist if the
proportion of high-risk types is too high. This is because pooling contracts are always cream-
skimmed, and separating contracts may not be sustainable. - Wilson (1977) anticipation
equilibrium: If firms anticipate cream-skimming, a pooling contract can be sustained as an
“anticipatory equilibrium.”


  Munoz-Garcia Insight — Screening (Ch.10, pp.766–773): The principal-agent screening model
  shows that under asymmetric information, the optimal menu of contracts satisfies “no distortion
  at the top” — the most efficient type faces no distortion relative to first-best, while less efficient
  types have their effort/output distorted downward. This is a general property of screening
  problems: the low-productivity type’s contract is distorted to prevent the high-productivity type
  from mimicking.


8.2.5 The Grossman-Stiglitz Paradox (1976, 1980)

Why this matters for your exam: This paradox challenges the Efficient Market Hypothesis
directly. It’s a favourite for essay questions about whether financial markets can actually be
informationally efficient.
The paradox: If information is costly to acquire, and asset prices (or market prices) are
informationally efficient (i.e., fully reflect all available information), then no one has an
incentive to collect information — but then prices cannot reflect information they were never
collected.
Formal statement (Grossman-Stiglitz, 1976): Consider a market where: - An asset has
fundamental value 𝜃 (unknown). - Informed traders pay cost 𝑐 to observe 𝜃. - Uninformed
traders infer 𝜃 from the market price 𝑝. - If the price 𝑝 is a sufficient statistic for 𝜃 (i.e.,
perfectly reveals it), then uninformed traders can extract 𝜃 for free from 𝑝.
The paradox chain: 1. If 𝑝 perfectly reveals 𝜃, uninformed traders have the same information
as informed traders. 2. Informed traders earn zero information premium — their gross return
equals that of uninformed traders. 3. After subtracting the information acquisition cost 𝑐,
informed traders earn lower net returns. 4. Therefore, no rational trader pays 𝑐 → no one is
informed. 5. But if no one is informed, 𝑝 cannot reveal 𝜃 → uninformed traders now have worse
information. 6. This creates profit opportunities for being informed — the cycle restarts.
Resolution: In equilibrium, prices are noisy — they reveal information only partially. A noisy
rational expectations equilibrium exists where: - Some traders become informed (enough to
make prices partially revealing). - The proportion of informed traders adjusts so that expected
returns net of information costs are equalized. - Prices are “informative but not perfectly
revealing.”
Implication for market efficiency: - The Efficient Market Hypothesis (prices reflect all
available information) cannot hold literally when information is costly. - A fundamental
paradox of information economics: informationally efficient markets cannot exist because they
would eliminate the incentive to acquire the information that makes them efficient.


   Munoz-Garcia Insight — Information and Market Efficiency (Ch.6, pp.461–463): The
   Stolper-Samuelson theorem and Grossman-Stiglitz paradox both illustrate that prices do more than
   allocate resources — they transmit information. When that information transmission is too
   effective, it destroys the incentive to produce the information in the first place. This “information
   paradox” is a recurring theme in adverse selection and signaling models.




8.3 International Trade: Tariffs, Quotas & VERs

Why this matters for your exam: Trade policy questions are a staple of comprehensive
exams. You’ll need to compare tariff, quota, and VER welfare effects, compute deadweight loss
triangles, and derive the Stolper-Samuelson theorem — the core distributional result of trade
theory. The Jones algebra derivation is a common source of exam questions.

8.3.1 Basic Trade Model

Setup: A small open economy with: - Domestic demand: 𝑄 = 𝑎 − 𝑏𝑃 - Domestic supply:
                                                                      𝑑
𝑄𝑠 = 𝑐𝑃 − 𝑑 - World price: 𝑃𝑊 (given, since the country is small)
Autarky equilibrium: 𝑄𝑑 = 𝑄𝑠 . Free trade: At 𝑃𝑊 < 𝑃autarky , the country imports:
𝑀 = 𝑄𝑑 (𝑃𝑊 ) − 𝑄𝑠 (𝑃𝑊 ) > 0.

8.3.2 Welfare Effects of a Tariff

A tariff 𝑡 raises domestic price to 𝑃𝑇 = 𝑃𝑊 + 𝑡.
Welfare decomposition (relative to free trade):


 Component                                          Change                 Formula
                                                                                                   𝐹𝑇     𝑇
 Consumer surplus                                   Loss (negative)        −Δ𝐶𝑆 = − 12 (𝑃𝑇 − 𝑃𝑊 )(𝑄𝑑 + 𝑄𝑑 )

 Producer surplus                                   Gain (positive)        +Δ𝑃𝑆 = + 12 (𝑃𝑇 − 𝑃𝑊 )(𝑄𝐹𝑇
                                                                                                   𝑠
                                                                                                      + 𝑄𝑇𝑠 )

 Tariff revenue                                     Gain (positive)        +𝑡 × 𝑀𝑇

                                                                           DWL = production
 Net welfare                                        Usually loss           distortion + consumption
                                                                           distortion


Deadweight loss of tariff (two triangles):

Price
  |               S_domestic
  |      a       /    b
P_T |----/----\----
  |     /    |        |\
P_W|--/---|---|-\---- P_W (world)
  | /        |        |     \
  |/_____|____|___\___ D_domestic
            Q_s      Q_s'       Q_d' Q_d     Quantity
             ^        ^         ^    ^
           |          |          |    |
         pre-        post-      post- pre-
         tariff tariff tariff tariff
Area a: Production distortion DWL = 1/2 * t * (Q_s^T - Q_s^{FT})
Area b: Consumption distortion DWL = 1/2 * t * (Q_d^{FT} - Q_d^T)
Total DWL = a + b


  Let’s work through this step by step. We start from the geometry of the deadweight loss
  triangles: 1. The production distortion triangle (area a) has base 𝑡 (price wedge) and height
  Δ𝑄𝑠 = 𝑄𝑇𝑠 − 𝑄𝐹𝑇
                𝑠
                   (change in domestic supply). Area = 12 × 𝑡 × Δ𝑄𝑠 . 2. The consumption distortion
                                                    𝐹𝑇    𝑇
  triangle (area b) has base 𝑡 and height Δ𝑄𝑑 = 𝑄𝑑 − 𝑄𝑑 (change in domestic demand). Area =
  1 × 𝑡 × Δ𝑄 . 3. Total DWL = 1 𝑡(Δ𝑄 + Δ𝑄 ). 4. Expressing quantity changes in terms of slopes:
  2         𝑑                   2     𝑠    𝑑
  Δ𝑄𝑠 /Δ𝑃 = supply slope, Δ𝑄𝑑 /Δ𝑃 = demand slope, and Δ𝑃 = 𝑡. 5. Therefore:
                  Δ𝑄       Δ𝑄           Δ𝑄     Δ𝑄                                                         Δ𝑄    Δ𝑄
  DWL = 12 𝑡(𝑡 ⋅ Δ𝑃𝑠 + 𝑡 ⋅ Δ𝑃𝑑 ) = 12 𝑡2 ( Δ𝑃𝑠 + Δ𝑃𝑑 ). 6. → Final form: DWL = 12 𝑡(Δ𝑄𝑠 + Δ𝑄𝑑 ) = 12 𝑡2 ( Δ𝑃𝑠 + Δ𝑃𝑑 ).
  Here’s what’s really going on: The DWL of a tariff is the sum of two Harberger triangles. It is
  quadratic in the tariff rate 𝑡 — doubling the tariff quadruples the deadweight loss. This is because
  both the price wedge and the quantity reduction grow linearly with 𝑡, and their product grows
  quadratically.


                                                                    Δ𝑄  Δ𝑄
                                      DWL = 1 𝑡(Δ𝑄𝑠 + Δ𝑄𝑑 ) = 1 𝑡2 ( 𝑠 + 𝑑 )
                                            2                 2     Δ𝑃  Δ𝑃

8.3.3 Tariff vs Quota vs VER


 Policy                Mechanism                     Who Gets the Rent                                   Welfare

                                                                                                         DWL = two
 Tariff                Tax on imports                Domestic government
                                                                                                         triangles

                       Physical limit on             Import licence holders (domestic if                 DWL + possible
 Quota
                       imports                       auctioned)                                          rent dissipation

                       “Voluntary” export                                                                DWL + rent
 VER                   limit imposed by              Foreign exporters                                   transferred
                       exporter                                                                          abroad — worst


Voluntary Export Restraint (VER): Equivalent to a quota whose rent is captured by foreign
producers. This makes VER strictly worse than an equivalent tariff for the importing country
— the same DWL triangles PLUS the quota rent goes abroad.
Key Policy Insight: Among the three trade restrictions achieving the same import reduction:


  Let’s work through this step by step. We start from the welfare decomposition for each policy:
  1. Tariff: Net welfare change = −DWL + tariff revenue (domestic). 2. Quota (free licences): Net
  welfare change = −DWL + quota rent (domestic licence holders). 3. VER: Net welfare change =
  −DWL + quota rent (FOREIGN exporters). 4. For the same import restriction, the DWL is identical
  across all three policies (same price wedge, same quantity changes). 5. The difference is who
  captures the rent. Tariff revenue stays domestic; quota rent may stay domestic (if auctioned) or go
  to licence holders; VER rent goes abroad. 6. → Final form: Welfare loss: Tariff < Quota < VER.
  Here’s what’s really going on: The ranking follows directly from rent destination. Tariffs are best
  because the government can use the revenue to offset consumer losses. VERs are worst because
  the rent leaks abroad, making the policy doubly costly — domestic consumers pay higher prices
  AND the scarcity premium enriches foreign producers.


                                             Welfare loss: Tariff < Quota < VER

8.3.4 Detailed Welfare Comparison — Rent Dissipation
The welfare difference between tariff, quota, and VER arises from who captures the quota
rent:


              Domestic        Government          Producer          Consumer           Net Welfare vs Free
 Policy
              Price           Revenue             Surplus           Surplus            Trade

 Free
              𝑃𝑊              0                   𝑃𝑆𝐹𝑇              𝐶𝑆𝐹𝑇               0
 Trade

 Tariff                       +𝑡 × 𝑀𝑇
              𝑃𝑊 + 𝑡                              +Δ𝑃𝑆              −Δ𝐶𝑆               −DWL
 𝑡                            (domestic)

 Quota                        0 (unless
              𝑃𝑄 ( > 𝑃𝑊 )                         +Δ𝑃𝑆              −Δ𝐶𝑆               −DWL − rent to licence hold
 𝑄                            auctioned)

 VER          𝑃𝑉 ( > 𝑃𝑊 )     0                   +Δ𝑃𝑆              −Δ𝐶𝑆               −DWL − rent to FOREIGN

Rent dissipation under VER: - The price gap 𝑃𝑉 − 𝑃𝑊 multiplied by import quantity creates a
“quota rent” of size (𝑃𝑉 − 𝑃𝑊 ) × 𝑀𝑉 . - Under a tariff, this accrues to the domestic government as
tariff revenue. - Under a domestic quota (auctioned), it accrues to the government via licence
fees. - Under a VER, foreign exporters capture this rent — it is a pure transfer abroad. -
Additionally, there is no tariff revenue to offset the consumer and producer welfare changes.
When do tariff and quota become equivalent? - If the quota is auctioned competitively,
the government captures the rent, making the welfare effect identical to a tariff (same DWL
triangles, same domestic rent capture). - If the quota is given free to domestic importers, they
capture the rent — welfare is lower than a tariff but better than a VER. - Under a VER, the rent
goes to foreigners, making it strictly the worst option.


     Munoz-Garcia Insight — Trade Policy and Welfare (Ch.6, pp.466–468): While Munoz-Garcia’s
     chapter 6 focuses on tax incidence rather than trade policy per se, the logic of deadweight loss
     triangles and rent capture applies directly. The key insight: any trade restriction creates a wedge
     between domestic and world prices, generating DWL triangles. The distribution of the “quota rent”
     determines which policy is least damaging. A VER is a particularly inefficient form of protection
     because the rent is transferred to the very exporters the policy aims to restrict.


8.3.5 Stolper-Samuelson Theorem

Why this matters for your exam: The Stolper-Samuelson theorem is the central
distributional result in trade theory. You must understand it intuitively AND be able to derive
the magnification effect using Jones algebra.
Theorem (Stolper & Samuelson, 1941): An increase in the relative price of a good raises
the real return to the factor used intensively in its production and lowers the real return to the
other factor.
Mechanism (Koutsoyiannis, p.505; Munoz-Garcia, SS6.6, p.404):
If 𝑋 is labour-intensive and 𝑌 is capital-intensive:


     Let’s work through this step by step. We start from the relationship between output prices and
     factor returns: 1. The Stolper-Samuelson theorem is derived from the zero-profit conditions in a
     two-sector general equilibrium model. 2. If 𝑋 is labour-intensive, an increase in 𝑃𝑋 /𝑃𝑌 (relative price
     of 𝑋) makes 𝑋 production more profitable. 3. Resources flow: 𝑋 expands, 𝑌 contracts (Rybczynski
     effect in reverse). 4. Expanding 𝑋 increases derived demand for labour; contracting 𝑌 releases
     capital. 5. The wage 𝑤 rises, the rental rate 𝑟 falls, so 𝑤/𝑟 rises. 6. → Final form:
     𝑃𝑋
     𝑃𝑌 ↑   ⇒ 𝑋 expands, 𝑌 contracts ⇒ 𝑤𝑟 ↑ .
  Here’s what’s really going on: The mechanism is a general-equilibrium chain: a change in output
  prices changes the output mix, which changes factor demands, which changes factor prices. The
  factor used intensively in the expanding sector benefits; the factor used intensively in the
  contracting sector loses.


                                       𝑃𝑋
                                          ↑ ⇒ 𝑋 expands, 𝑌 contracts ⇒ 𝑤
                                                                       𝑟 ↑
                                       𝑃𝑌
Magnification effect (Jones algebra): Factor price changes are magnified relative to output
price changes:


  Let’s work through this step by step. We start from the formal Jones algebra solution (derived
  below in §8.3.6): 1. Using Cramer’s rule on the system of differentiated zero-profit conditions, we
  obtain 𝑤̂ = (𝜃𝐾𝑌 𝑃̂ 𝑋 − 𝜃𝐾𝑋 𝑃̂ 𝑌 )/|Θ| and 𝑟̂ = (𝜃𝐿𝑋 𝑃̂ 𝑌 − 𝜃𝐿𝑌 𝑃̂ 𝑋 )/|Θ|. 2. Suppose 𝑃̂ 𝑋 > 𝑃̂ 𝑌 (the relative price of
  labour-intensive 𝑋 increases). 3. By the factor intensity assumption (𝜃𝐿𝑋 > 𝜃𝐿𝑌 ), the determinant
  |Θ| ∈ (0, 1). 4. Solving: 𝑤̂ gets a positive weight on 𝑃̂ 𝑋 divided by |Θ| < 1, so 𝑤̂ > 𝑃̂ 𝑋 . 5. Similarly, 𝑟̂ gets
  a negative weight on 𝑃̂ 𝑋 , so 𝑟̂ < 𝑃̂ 𝑌 . 6. → Final form: 𝑤̂ > 𝑃̂ 𝑋 > 𝑃̂ 𝑌 > 𝑟̂ .
  Here’s what’s really going on: Factor price changes magnify output price changes because
  factor intensities differ across sectors. The factor cost share matrix |Θ| acts as a “lever”: dividing by
  |Θ| < 1 amplifies the price change. This explains why trade liberalisation can have large
  distributional effects even when price changes are modest.


                                                              ̂         ̂
                                                       𝑤̂ > 𝑃𝑋 > 𝑃𝑌 > 𝑟̂
where 𝑥̂ = 𝑑𝑥/𝑥 (proportional change).
Distributional implication: Trade benefits the abundant factor and harms the scarce factor.
This is the central distributional result of the Heckscher-Ohlin trade model.
Example: When a developing country opens to trade, the price of its export good (labour-
intensive) rises. This raises the wage 𝑤 but lowers the rental rate 𝑟 — labour gains, capital
loses.
Exam Tip: Pair Stolper-Samuelson with the GE transmission mechanism (Topic 5). A taste shift
toward X (labour-intensive) raises 𝑃𝑋 , expands X, increases derived demand for labour, raises 𝑤
, and lowers 𝑟 if Y (capital-intensive) contracts.

8.3.6 Formal Derivation — Magnification Effect (Jones Algebra)

Why this matters for your exam: This derivation walks through the full Jones algebra that
underpins the Stolper-Samuelson theorem. Exam questions often ask you to set up the system,
apply Shephard’s lemma, and solve using Cramer’s rule.
Based on the full general equilibrium model (Munoz-Garcia, Ch.6, pp.461–463):
Setup: Two goods (𝑋, 𝑌), two factors (𝐿 labour, 𝐾 capital). Competitive firms:


  Let’s work through this step by step. We start from the zero-profit condition in competitive
  equilibrium: 1. In a perfectly competitive economy with constant returns to scale, firms earn zero
  economic profit. 2. This means the unit cost of producing each good must equal its output price. 3.
  Unit costs depend on factor prices (𝑤 for labour, 𝑟 for capital) through the cost functions 𝑐𝑋 (𝑤, 𝑟)
  and 𝑐𝑌 (𝑤, 𝑟). 4. The zero-profit conditions are: 𝑐𝑋 (𝑤, 𝑟) = 𝑃𝑋 and 𝑐𝑌 (𝑤, 𝑟) = 𝑃𝑌 . 5. → Final form:
  𝑐𝑋 (𝑤, 𝑟) = 𝑃𝑋   and    𝑐𝑌 (𝑤, 𝑟) = 𝑃𝑌 .
  Here’s what’s really going on: These two equations are the foundation of the Jones algebra. They
  link output prices to factor prices through the technology embodied in the cost functions. The
  system has 2 equations and 2 unknowns (𝑤, 𝑟) — prices pin down factor returns in the Heckscher-
  Ohlin model.


                                             𝑐𝑋 (𝑤, 𝑟) = 𝑃𝑋       and       𝑐𝑌 (𝑤, 𝑟) = 𝑃𝑌
where 𝑐𝑋 and 𝑐𝑌 are unit cost functions (Shephard’s lemma gives factor demands).
Differentiate both sides:


  Let’s work through this step by step. We start from the zero-profit conditions and take total
                                                            𝜕𝑐          𝜕𝑐
  differentials: 1. Totally differentiate 𝑐𝑋 (𝑤, 𝑟) = 𝑃𝑋 : 𝜕𝑤𝑋 𝑑𝑤 + 𝜕𝑟𝑋 𝑑𝑟 = 𝑑𝑃𝑋 . 2. Totally differentiate
  𝑐𝑌 (𝑤, 𝑟) = 𝑃𝑌 : 𝜕𝑐      𝜕𝑐𝑌                             𝜕𝑐𝑋     𝜕𝑐𝑋             𝜕𝑐𝑌     𝜕𝑐𝑌
                   𝜕𝑤 𝑑𝑤 + 𝜕𝑟 𝑑𝑟 = 𝑑𝑃𝑌 . 3. → Final forms: 𝜕𝑤 𝑑𝑤 + 𝜕𝑟 𝑑𝑟 = 𝑑𝑃𝑋 and 𝜕𝑤 𝑑𝑤 + 𝜕𝑟 𝑑𝑟 = 𝑑𝑃𝑌 .
                     𝑌


  Here’s what’s really going on: Total differentiation converts the levels equations into a linear
  system in changes. This allows us to solve for how factor prices (𝑑𝑤, 𝑑𝑟) respond to changes in
  output prices (𝑑𝑃𝑋 , 𝑑𝑃𝑌 ) — the core comparative static of the Stolper-Samuelson theorem.


                                   𝜕𝑐𝑋       𝜕𝑐
                                        𝑑𝑤 + 𝑋 𝑑𝑟 = 𝑑𝑃𝑋
                                   𝜕𝑤         𝜕𝑟
                                   𝜕𝑐𝑌       𝜕𝑐𝑌
                                        𝑑𝑤 +     𝑑𝑟 = 𝑑𝑃𝑌
                                   𝜕𝑤         𝜕𝑟
Apply Shephard’s lemma (𝜕𝑐𝑖 /𝜕𝑤 = 𝑎𝐿𝑖 , the labour requirement per unit output):


  Let’s work through this step by step. We start from the total differentials and apply Shephard’s
  lemma: 1. Shephard’s lemma states that the derivative of the cost function with respect to a
  factor price equals the cost-minimising input coefficient for that factor. 2. For good 𝑋: 𝜕𝑐𝑋 /𝜕𝑤 = 𝑎𝐿𝑋
  (labour per unit of 𝑋), 𝜕𝑐𝑋 /𝜕𝑟 = 𝑎𝐾𝑋 (capital per unit of 𝑋). 3. For good 𝑌: 𝜕𝑐𝑌 /𝜕𝑤 = 𝑎𝐿𝑌 , 𝜕𝑐𝑌 /𝜕𝑟 = 𝑎𝐾𝑌 . 4.
  Substituting into the differential system: 𝑎𝐿𝑋 𝑑𝑤 + 𝑎𝐾𝑋 𝑑𝑟 = 𝑑𝑃𝑋 and 𝑎𝐿𝑌 𝑑𝑤 + 𝑎𝐾𝑌 𝑑𝑟 = 𝑑𝑃𝑌 . 5. → Final
  forms: 𝑎𝐿𝑋 𝑑𝑤 + 𝑎𝐾𝑋 𝑑𝑟 = 𝑑𝑃𝑋 and 𝑎𝐿𝑌 𝑑𝑤 + 𝑎𝐾𝑌 𝑑𝑟 = 𝑑𝑃𝑌 .
  Here’s what’s really going on: Shephard’s lemma transforms abstract cost derivatives into
  economically meaningful input-output coefficients. The system now directly links input
  requirements to factor price and output price changes.


                                   𝑎𝐿𝑋 𝑑𝑤 + 𝑎𝐾𝑋 𝑑𝑟 = 𝑑𝑃𝑋
                                   𝑎𝐿𝑌 𝑑𝑤 + 𝑎𝐾𝑌 𝑑𝑟 = 𝑑𝑃𝑌
Convert to proportional rates of change (𝑥̂ = 𝑑𝑥/𝑥):


  Let’s work through this step by step. We start from the input-coefficient system and convert to
  proportional changes: 1. Divide each equation by the respective output price. For 𝑋:
  𝑎𝐿𝑋 𝑑𝑤   𝑎𝐾𝑋 𝑑𝑟   𝑑𝑃𝑋      ̂
    𝑃𝑋 + 𝑃𝑋 = 𝑃𝑋 = 𝑃𝑋 . 2. Using the zero-profit condition 𝑃𝑋 = 𝑎𝐿𝑋 𝑤 + 𝑎𝐾𝑋 𝑟 (from cost function
                                𝑎 𝑤 𝑑𝑤    𝑎𝐾𝑋 𝑟 𝑑𝑟  ̂                                               𝑤𝑎𝐿𝑋
  properties), rewrite: 𝐿𝑋       𝑃𝑋 ⋅ 𝑤 + 𝑃𝑋 ⋅ 𝑟 = 𝑃𝑋 . 3. Define factor cost shares: 𝜃𝐿𝑋 = 𝑃𝑋 (labour’s share in 𝑋
  ), 𝜃𝐾𝑋 = 𝑟𝑎𝑃 𝐾𝑋 (capital’s share in 𝑋). Note 𝜃𝐿𝑋 + 𝜃𝐾𝑋 = 1. 4. Substituting: 𝜃𝐿𝑋 𝑤̂ + 𝜃𝐾𝑋 𝑟̂ = 𝑃̂ 𝑋 . 5. Similarly for
               𝑋

  𝑌: 𝜃𝐿𝑌 𝑤̂ + 𝜃𝐾𝑌 𝑟̂ = 𝑃̂ 𝑌 . 6. → Final forms: 𝜃𝐿𝑋 𝑤̂ + 𝜃𝐾𝑋 𝑟̂ = 𝑃̂ 𝑋 and 𝜃𝐿𝑌 𝑤̂ + 𝜃𝐾𝑌 𝑟̂ = 𝑃̂ 𝑌 .
  Here’s what’s really going on: Converting to proportional changes and cost shares standardises
  the system. The 𝜃 coefficients are pure numbers (shares of total cost) between 0 and 1 that sum to
  1 in each sector, making the algebra tractable and economically interpretable.


                                                                    ̂
                                                  𝜃𝐿𝑋 𝑤̂ + 𝜃𝐾𝑋 𝑟̂ = 𝑃𝑋
                                                                     ̂
                                                  𝜃𝐿𝑌 𝑤̂ + 𝜃𝐾𝑌 𝑟̂ = 𝑃𝑌
where 𝜃𝐿𝑖 = 𝑤𝑎𝐿𝑖 /𝑃𝑖 and 𝜃𝐾𝑖 = 𝑟𝑎𝐾𝑖 /𝑃𝑖 are factor cost shares in industry 𝑖, with 𝜃𝐿𝑖 + 𝜃𝐾𝑖 = 1.
Factor intensity assumption: If 𝑋 is labour-intensive and 𝑌 is capital-intensive:


  Let’s work through this step by step. We start from the definition of factor cost shares: 1.
  Labour intensity means labour’s share of total cost is larger in 𝑋 than in 𝑌: 𝜃𝐿𝑋 > 𝜃𝐿𝑌 . 2. Since
  𝜃𝐿𝑖 + 𝜃𝐾𝑖 = 1 in each sector, it follows that capital’s share is smaller in 𝑋 than in 𝑌: 𝜃𝐾𝑋 < 𝜃𝐾𝑌 . 3. →
  Final form: 𝜃𝐿𝑋 > 𝜃𝐿𝑌 and 𝜃𝐾𝑋 < 𝜃𝐾𝑌 .
  Here’s what’s really going on: Factor intensity is expressed in terms of cost shares rather than
  physical input ratios. This is because the Jones algebra works in value terms — the cost shares
  determine how changes in factor prices translate into changes in output prices. The inequalities
  define which factor is intensively used in which sector.


                                                       𝜃𝐿𝑋 > 𝜃𝐿𝑌        and     𝜃𝐾𝑋 < 𝜃𝐾𝑌
Solve for factor price changes: Using Cramer’s rule:


  Let’s work through this step by step. We start from the system of proportional-change
                                                                        𝜃𝐿𝑋    𝜃𝐾𝑋           𝑃̂
                                                                                   ][ 𝑤 ] = [ 𝑋 ]. 2. The determinant of the
                                                                                        ̂
  equations: 1. Write the system in matrix form: [
                                                                        𝜃𝐿𝑌    𝜃𝐾𝑌    𝑟̂     𝑃̂ 𝑌
  cost-share matrix is: |Θ| = 𝜃𝐿𝑋 𝜃𝐾𝑌 − 𝜃𝐿𝑌 𝜃𝐾𝑋 . 3. By the factor intensity assumption (𝜃𝐿𝑋 > 𝜃𝐿𝑌 , 𝜃𝐾𝑋 < 𝜃𝐾𝑌 ):
  𝜃𝐿𝑋 𝜃𝐾𝑌 > 𝜃𝐿𝑌 𝜃𝐾𝑋 , so |Θ| > 0. 4. → Final form: |Θ| = 𝜃𝐿𝑋 𝜃𝐾𝑌 − 𝜃𝐿𝑌 𝜃𝐾𝑋 > 0.
  Here’s what’s really going on: The determinant is strictly positive when factor intensities differ
  across sectors. If both sectors had identical factor intensities (𝜃𝐿𝑋 = 𝜃𝐿𝑌 , 𝜃𝐾𝑋 = 𝜃𝐾𝑌 ), the determinant
  would be zero and factor prices would not be uniquely determined by output prices — the Stolper-
  Samuelson link would break.


                                             |Θ| = 𝜃𝐿𝑋 𝜃𝐾𝑌 − 𝜃𝐿𝑌 𝜃𝐾𝑋 > 0 (by factor intensity)

  Let’s work through this step by step. We start from Cramer’s rule applied to the 2 × 2 system: 1.
  For 𝑤̂ : replace the first column of the Θ matrix with the price change vector:
           ̂                                                                                                ̂
         𝑃𝑋 𝜃𝐾𝑋                                                                                        𝜃    𝑃
       det⁡[       ]                                                                              det⁡[ 𝐿𝑋 𝑋 ]
         𝑃̂ 𝑌 𝜃𝐾𝑌          𝜃   𝑃̂
                                       𝜃  𝑃̂                                                           𝜃    𝑃 ̂         ̂
                                                                                                                            − 𝜃𝐿𝑌 ̂𝑃𝑋
  𝑤̂ =       |Θ|
                        =    𝐾𝑌 𝑋    −
                                    |Θ|
                                        𝐾𝑋 𝑌
                                             .   2. For      𝑟̂ : replace the second column: 𝑟̂ =       𝐿𝑌
                                                                                                        |Θ|
                                                                                                                𝑌
                                                                                                                  = 𝜃𝐿𝑋 𝑃𝑌 |Θ|        . 3. → Final
                 𝜃𝐾𝑌 𝑃̂ 𝑋 − 𝜃𝐾𝑋 𝑃̂ 𝑌                𝜃𝐿𝑋 𝑃̂ 𝑌 − 𝜃𝐿𝑌 𝑃̂ 𝑋
  forms: 𝑤 = ̂
                         |Θ|
                                       and 𝑟 = ̂
                                                            |Θ|
                                                                        .
  Here’s what’s really going on: These closed-form solutions show how each factor price is a
  weighted average (or difference) of the two output price changes. The weights are the cost shares
  from the other sector — a reflection of the general equilibrium nature of the model. Changes in
  both output prices affect both factor prices.


                                                                         ̂           ̂
                                                                  𝜃𝐾𝑌 𝑃𝑋 − 𝜃𝐾𝑋 𝑃𝑌
                                                             𝑤̂ =
                                                                        |Θ|
                                                                      ̂         ̂
                                                                 𝜃    𝑃  − 𝜃𝐿𝑌 𝑃𝑋
                                                             𝑟̂ = 𝐿𝑋 𝑌
                                                                        |Θ|
                                         ̂               ̂
Magnification effect: If 𝑃𝑋 > 0 and 𝑃𝑌 = 0 (price of labour-intensive good rises):


  Let’s work through this step by step. We start from the Cramer’s rule solutions with 𝑃̂ 𝑋 > 0 and
  𝑃̂ 𝑌 = 0: 1. Substituting 𝑃̂ 𝑌 = 0: 𝑤̂ = 𝜃|Θ| 𝑃𝑋 and 𝑟̂ = −𝜃|Θ|𝐿𝑌 𝑃̂ 𝑋 . 2. Since 𝜃𝐿𝑋 + 𝜃𝐾𝑋 = 1 and 𝜃𝐿𝑋 > 𝜃𝐿𝑌 , we have
                                             𝐾𝑌 ̂


  𝜃𝐾𝑋 < 𝜃𝐾𝑌 and thus |Θ| = 𝜃𝐿𝑋 𝜃𝐾𝑌 − 𝜃𝐿𝑌 𝜃𝐾𝑋 < 𝜃𝐿𝑋 𝜃𝐾𝑌 < 𝜃𝐾𝑌 (since 𝜃𝐿𝑋 < 1). 3. Therefore |Θ| < 𝜃𝐾𝑌 , so
  𝑤̂ = 𝜃|Θ| 𝑃𝑋 > 𝑃̂ 𝑋 . 4. For 𝑟̂ : 𝑟̂ = −𝜃|Θ|𝐿𝑌 𝑃̂ 𝑋 < 0 (since numerator negative, denominator positive). 5. Since
         𝐾𝑌 ̂


  𝑃̂ 𝑌 = 0: 𝑟̂ < 0 < 𝑃̂ 𝑌 = 0. 6. → Final forms: 𝑤̂ = 𝜃|Θ| 𝑃𝑋 > 𝑃̂ 𝑋 and 𝑟̂ = −𝜃|Θ|𝐿𝑌 𝑃̂ 𝑋 < 0 < 𝑃̂ 𝑌 = 0.
                                                        𝐾𝑌 ̂



  Here’s what’s really going on: When only one output price changes, the factor used intensively
  in that sector benefits more than proportionally (𝑤̂ > 𝑃̂ 𝑋 ), while the other factor unambiguously
  loses (𝑟̂ < 0). The magnification factor 1/|Θ| > 1 amplifies the price change because factor intensities
  differ.


                           ̂𝑤 = 𝜃𝐾𝑌 𝑃̂     ̂
                                      𝑋 > 𝑃𝑋        (since |Θ| < 𝜃𝐾𝑌 by the factor intensity assumption)
                                   |Θ|
                                                         ̂𝑟 = −𝜃𝐿𝑌 𝑃̂         ̂
                                                                     𝑋 < 0 < 𝑃𝑌 = 0
                                                                |Θ|
                       ̂       ̂
General case (𝑃𝑋 > 𝑃𝑌 ):
  Let’s work through this step by step. We start from the general solutions and the ranking
  𝑃̂ 𝑋 > 𝑃̂ 𝑌 : 1. From 𝑤̂ = (𝜃𝐾𝑌 𝑃̂ 𝑋 − 𝜃𝐾𝑋 𝑃̂ 𝑌 )/|Θ|, we can show 𝑤̂ > 𝑃̂ 𝑋 because 𝜃𝐾𝑌 > |Θ| (as shown above) and
  the weight on 𝑃̂ 𝑌 is negative. 2. From 𝑟̂ = (𝜃𝐿𝑋 𝑃̂ 𝑌 − 𝜃𝐿𝑌 𝑃̂ 𝑋 )/|Θ|, we can show 𝑟̂ < 𝑃̂ 𝑌 because the
  coefficient on 𝑃̂ 𝑋 (which is larger than 𝑃̂ 𝑌 ) is negative. 3. Combining: 𝑤̂ > 𝑃̂ 𝑋 > 𝑃̂ 𝑌 > 𝑟̂ . 4. → Final
  form: 𝑤̂ > 𝑃̂ 𝑋 > 𝑃̂ 𝑌 > 𝑟̂ .
  Here’s what’s really going on: The magnification effect in its general form establishes a complete
  chain of inequalities. Trade-induced changes in output prices produce even larger changes in factor
  prices, with one factor gaining and the other losing. This is the most important distributional result
  in international trade theory.


                                                            ̂𝑤 > 𝑃̂     ̂
                                                                   𝑋 > 𝑃𝑌 > 𝑟
                                                                            ̂

This is the magnification effect: factor prices respond more than proportionally to output
price changes. Trade’s distributional effects are amplified through the factor-intensity
structure of production.


  Munoz-Garcia Insight — Stolper-Samuelson (Ch.6, pp.461–463): The proof uses Shephard’s
  lemma and the properties of cost functions to derive comparative statics of factor prices with
  respect to output prices. The key insight is that factor intensities determine the sign and magnitude
                                                       ̂ > |𝑃̂ | > |𝑃̂ | > |𝑟|
  of factor price responses. The magnification effect |𝑤|                    ̂ is a general property when
                                                              𝑋       𝑌
  factor intensities differ across sectors.


Extension — Magnification with both prices changing: When both output prices change,
the full ranking holds:


  Let’s work through this step by step. We start from the solutions for 𝑤̂ and 𝑟̂ : 1. Subtract the
                                               ̂      ̂          ̂        ̂                                     ̂      ̂       ̂      ̂
  factor price solutions: 𝑤̂ − 𝑟̂ = 𝜃𝐾𝑌 𝑃𝑋 |Θ|
                                            − 𝜃𝐾𝑋 𝑃𝑌
                                                     − 𝜃𝐿𝑋 𝑃𝑌 |Θ|
                                                               − 𝜃𝐿𝑌 𝑃𝑋
                                                                        . 2. Collect terms: 𝑤̂ − 𝑟̂ = 𝜃𝐾𝑌 𝑃𝑋 + 𝜃𝐿𝑌 𝑃𝑋 |Θ|
                                                                                                                       − 𝜃𝐾𝑋 𝑃𝑌 − 𝜃𝐿𝑋 𝑃𝑌
                                                                                                                                         . 3.
                           (𝜃𝐾𝑌 + 𝜃𝐿𝑌 )𝑃̂ 𝑋 − (𝜃𝐾𝑋 + 𝜃𝐿𝑋 )𝑃̂ 𝑌                                                      𝑃̂ − 𝑃̂
  Simplify: 𝑤̂ − 𝑟̂ =                      |Θ|
                                                               . 4. Since 𝜃𝐾𝑋 + 𝜃𝐿𝑋 = 1 and 𝜃𝐾𝑌 + 𝜃𝐿𝑌 = 1: 𝑤̂ − 𝑟̂ = 𝑋 |Θ| 𝑌 . 5. Since
                                                                                 ̂
                ̂
                    − 𝑃̂ 𝑌                                                         − 𝑃̂ 𝑌 )
  |Θ| ∈ (0, 1): 𝑃𝑋 |Θ|     > 𝑃̂ 𝑋 − 𝑃̂ 𝑌 . 6. → Final form: 𝑤̂ − 𝑟̂ = (𝑃𝑋 |Θ|               > 𝑃̂ 𝑋 − 𝑃̂ 𝑌 .
  Here’s what’s really going on: The difference between wage and rental rate changes exceeds the
  difference between output price changes by the factor 1/|Θ| > 1. This is a powerful statement: even
  small changes in relative output prices (e.g., from trade liberalisation) translate into large changes
  in relative factor prices, explaining the intense distributional conflict often associated with trade
  policy.


                                                                      ̂       ̂
                                                                     (𝑃𝑋 − 𝑃𝑌 ) ̂     ̂
                                                     𝑤̂ − 𝑟̂ =                 > 𝑃𝑋 − 𝑃𝑌
                                                                        |Θ|
since |Θ| ∈ (0, 1). The factor price differential exceeds the output price differential — trade-
induced price changes produce magnified distributional consequences.
Empirical implication: Even modest changes in trade prices can produce large changes in
factor returns (wages and rents). This explains why trade policy generates intense
distributional conflict — the losers lose a lot, and the winners win a lot.



8.4 Solved Questions

Why this matters for your exam: These are past exam questions — work through each one
carefully. Mastering them gives you a ready-made template for answering similar problems
under time pressure.

Question 8(a) — 46 Final, Part C: Asymmetric Information & Market Disappearance [4
marks]
Q: Show that asymmetric information may lead to the disappearance of good from the market.
A: This is Akerlof’s “Market for Lemons” (1970). Asymmetric information exists when sellers
know the quality of their good but buyers cannot distinguish quality ex ante. Because buyers
know only the average quality, they are willing to pay only the expected value:


  Let’s work through this step by step. We start with the setup with two possible quality types: 1.
  With probability 𝜇, the good is high-quality (value 𝑉𝐻 to the buyer). 2. With probability (1 − 𝜇), the
  good is low-quality (value 𝑉𝐿 to the buyer). 3. The buyer, unable to observe quality, forms the
  mathematical expectation: 𝐸[𝑉] = 𝜇 ⋅ 𝑉𝐻 + (1 − 𝜇) ⋅ 𝑉𝐿 . 4. → Final form: 𝐸[𝑉] = 𝜇𝑉𝐻 + (1 − 𝜇)𝑉𝐿 .
  Here’s what’s really going on: This is the buyer’s rational willingness-to-pay under asymmetric
  information — the probability-weighted average of possible values. It is less than 𝑉𝐻 (so high-quality
  sellers are underpaid) and greater than 𝑉𝐿 (so low-quality sellers are overpaid). This mispricing
  drives the adverse selection process.


                                             𝐸[𝑉] = 𝜇𝑉𝐻 + (1 − 𝜇)𝑉𝐿
If this expected value falls below the reservation price of high-quality sellers, those sellers
withdraw from the market. This reduces the average quality of goods available, further
lowering buyers’ willingness to pay. The process feeds on itself:
Price reflects average quality → High-quality sellers exit → Average quality falls → Price
falls further → More sellers exit → Possible complete market collapse.
Numerical example (used car market): - 50% peaches (value: buyers $10,000, sellers
$8,000) - 50% lemons (value: buyers $5,000, sellers $3,000) - Buyers offer
𝐸[𝑉] = 0.5(10, 000) + 0.5(5, 000) = 7, 500 - Peach owners require ≥ 8, 000 → they exit - Only lemons
remain at 3, 000 − 5, 000
Result: High-quality goods disappear — the market for peaches vanishes entirely. If the
proportion of lemons is high enough, even the lemon market may collapse. Asymmetric
information thus can destroy markets that would function efficiently under full information.
Solutions: Signalling (warranties, certifications), screening (menus of contracts), reputation,
mandatory disclosure.


Question 8(b) — 46 Final, Part C: Spence’s Signalling Model of Education [10 marks]

Q: By using Michael Spence’s Model of Education, explain how the level of education can work
as a signal of the different productivity of workers.
A: See §8.2 for the full theoretical treatment.
Summary of the argument:
1. Basic setup (Spence, 1973): - Two types of workers: High productivity (𝑞 ) and Low
                                                                                              𝐻
productivity (𝑞𝐿 ), with 𝑞𝐻 > 𝑞𝐿 . - Workers know their own type; firms cannot observe
productivity directly. - Workers can acquire education 𝑒 at cost 𝑐(𝑒) which differs by type:
𝑐𝐿 (𝑒) > 𝑐𝐻 (𝑒) (single-crossing property). - Education does NOT increase productivity — it is a
pure signal. - Firms offer wages based on observed education.
2. How education works as a signal:
Education is effective as a signal because it is differentially costly. The single-crossing
property (𝑐𝐿 > 𝑐𝐻 ) means that acquiring education is relatively cheaper for high-productivity
workers. This allows firms to infer type from education choice.
3. Separating equilibrium condition:
In a separating equilibrium, H-types acquire education (𝑒 = 1) and L-types do not (𝑒 = 0). Firms
pay wages equal to expected productivity: - 𝑤(1) = 𝑞 (educated workers are H) - 𝑤(0) = 𝑞
                                                              𝐻                                        𝐿
(uneducated workers are L)
For this to be self-enforcing: - H prefers 𝑒 = 1: 𝑞 − 𝑐𝐻 ≥ 𝑞 - L prefers 𝑒 = 0: 𝑞 ≥ 𝑞 − 𝑐𝐿
                                                            𝐻           𝐿                       𝐿     𝐻
Combined: 𝑐𝐻 ≤ 𝑞 − 𝑞 ≤ 𝑐𝐿
                       𝐻    𝐿
The wage premium for education (𝑞 − 𝑞 ) must be large enough to induce H-types to invest
                                               𝐻    𝐿
but not so large that L-types find it profitable to mimic.
4. Intuition for why signalling works:
Even though education adds no productive value, it conveys information because it is costly to
acquire and the cost is correlated with productivity. L-types cannot mimic because they face
higher education costs. The education level acts as a “separating device” — it sorts workers by
type.
5. Welfare implication:
The separating equilibrium is socially inefficient — resources are spent on education that
does not increase output. However, it is privately beneficial for H-types to signal. The total
welfare under signalling is lower than under full information, but the market may still achieve
separating because of the private returns to signalling.
Conclusion: Education signals productivity through its differential cost structure. The model
explains why wage premiums for education may exceed the human capital gained — part of the
return to education is a signalling premium.


Question 1 — Trade and Tariff: Numerical Problem (Answers Bank) [14 marks]

Q: Given domestic demand 𝑄 = 250, 000 − 100𝑃, domestic supply 𝑄 = 250𝑃 − 30, 000, and world
                                     𝑑                                             𝑠
price 𝑃𝑊 = 600, compute: (a) autarky equilibrium, (b) free trade imports, (c) welfare effects of a
$50 tariff, and (d) welfare effects of a VER of 20,000 units.
A:
Step 1: Autarky equilibrium.


     Let’s work through this step by step. We start from the market-clearing condition (domestic
     demand = domestic supply): 1. Set 𝑄𝑑 = 𝑄𝑠 : 250, 000 − 100𝑃 = 250𝑃 − 30, 000. 2. Bring terms:
     250, 000 + 30, 000 = 250𝑃 + 100𝑃. 3. Simplify: 280, 000 = 350𝑃. 4. Solve: 𝑃autarky = 280, 000/350 = 800. 5. →
     Final form: 250, 000 − 100𝑃 = 250𝑃 − 30, 000 ⇒ 280, 000 = 350𝑃 ⇒ 𝑃autarky = 800.
     Here’s what’s really going on: The autarky price is where domestic supply meets domestic
     demand. At prices above 800, quantity supplied exceeds quantity demanded; below 800, there is
     excess demand. The autarky equilibrium serves as the benchmark for evaluating the effects of
     trade.


                      250, 000 − 100𝑃 = 250𝑃 − 30, 000 ⇒ 280, 000 = 350𝑃 ⇒ 𝑃autarky = 800

     Let’s work through this step by step. We start from the autarky price 𝑃 = 800: 1. Substitute
     𝑃 = 800 into either the demand or supply equation. 2. Using demand:
     𝑄autarky = 250, 000 − 100(800) = 250, 000 − 80, 000. 3. → Final form: 𝑄autarky = 250, 000 − 100(800) = 170, 000.
     Here’s what’s really going on: At the autarky price, 170,000 units are produced and consumed
     domestically with no international trade. This is the quantity that exactly clears the domestic
     market.


                                         𝑄autarky = 250, 000 − 100(800) = 170, 000
Step 2: Free trade (𝑃𝑊 = 600).


     Let’s work through this step by step. We start from the free trade price 𝑃𝑊 = 600 (below autarky
     price of 800, so the country imports): 1. Domestic demand at 𝑃𝑊 :
  𝑄𝑑 (600) = 250, 000 − 100(600) = 250, 000 − 60, 000 = 190, 000. 2. Domestic supply at 𝑃𝑊 :
  𝑄𝑠 (600) = 250(600) − 30, 000 = 150, 000 − 30, 000 = 120, 000. 3. → Final forms: 𝑄𝑑 (600) = 190, 000 and
  𝑄𝑠 (600) = 120, 000.
  Here’s what’s really going on: At the lower world price, domestic consumers demand more
  (190,000) while domestic producers supply less (120,000) than under autarky. The difference is
  made up by imports — the country benefits from cheaper foreign goods.


                                    𝑄𝑑 (600) = 190, 000, 𝑄𝑠 (600) = 120, 000


  Let’s work through this step by step. We start from the free trade quantities: 1. Imports =
  Domestic demand - Domestic supply at world price. 2. Imports = 𝑄𝑑 (600) − 𝑄𝑠 (600) = 190, 000 − 120, 000.
  3. → Final form: Imports = 190, 000 − 120, 000 = 70, 000.
  Here’s what’s really going on: Under free trade, the country imports 70,000 units — the gap
  between what consumers want and what domestic producers can supply at the world price. This
  imports quantity is the baseline against which trade restrictions are measured.


                              Imports = 190, 000 − 120, 000 = 70, 000
Step 3: Tariff of $50 (𝑃𝑇 = 650).


 Measure                              Calculation                                      Value

 𝑄𝑑 at 𝑃 = 650                        250, 000 − 100(650)                              185, 000

 𝑄𝑠 at 𝑃 = 650                        250(650) − 30, 000                               132, 500

 Imports                              185, 000 − 132, 500                              52, 500

 Tariff revenue                       50 × 52, 500                                     +2, 625, 000

 Δ𝐶𝑆                                  −50 × (190, 000 + 185, 000)/2                    −9, 375, 000

 Δ𝑃𝑆                                  +50 × (120, 000 + 132, 500)/2                    +6, 312, 500

 Net welfare change                   −9, 375, 000 + 6, 312, 500 + 2, 625, 000         −437, 500

DWL decomposition: - Production distortion: 12 × 50 × (132, 500 − 120, 000) = 312, 500 -
Consumption distortion: 12 × 50 × (190, 000 − 185, 000) = 125, 000 - Total DWL:
312, 500 + 125, 000 = 437, 500 ✓
Step 4: VER of 20,000 units.
At domestic price 𝑃: 𝑄𝑑 − 𝑄𝑠 = 20, 000


  Let’s work through this step by step. We start from the condition that imports under VER are
  restricted to 20,000 units: 1. The VER fixes imports at 20,000: 𝑄𝑑 (𝑃) − 𝑄𝑠 (𝑃) = 20, 000. 2. Substitute
  the demand and supply functions: (250, 000 − 100𝑃) − (250𝑃 − 30, 000) = 20, 000. 3. Simplify:
  250, 000 − 100𝑃 − 250𝑃 + 30, 000 = 20, 000. 4. → 280, 000 − 350𝑃 = 20, 000.
  Here’s what’s really going on: The VER creates an artificial scarcity that raises the domestic
  price above the world price. The price adjusts until the gap between quantity demanded and
  quantity supplied equals the VER limit.


                                (250, 000 − 100𝑃) − (250𝑃 − 30, 000) = 20, 000

  Let’s work through this step by step. We start from the import restriction equation: 1. From
  280, 000 − 350𝑃 = 20, 000, bring terms: 280, 000 − 20, 000 = 350𝑃. 2. Simplify: 260, 000 = 350𝑃. 3. Solve:
  𝑃VER = 260, 000/350 ≈ 742.86. 4. → Final form: 280, 000 − 350𝑃 = 20, 000 ⇒ 𝑃VER = 742.86.
  Here’s what’s really going on: The VER drives the domestic price up to $742.86 — well above
  the world price of $600 and even above the tariff-inclusive price of $650. This is because the VER
  restricts imports much more tightly (20,000 vs 52,500 under the tariff), creating a larger scarcity
  premium.


                              280, 000 − 350𝑃 = 20, 000 ⇒ 𝑃VER = 742.86
Welfare effects of VER vs free trade:


 Component                             Calculation                                  Value

 Δ𝐶𝑆                                   −(742.86 − 600) × (190, 000 + 175, 714)/2    −26, 122, 450

 Δ𝑃𝑆                                   +(742.86 − 600) × (120, 000 + 155, 715)/2    +19, 693, 875

 Quota rent (to foreign
                                       −(742.86 − 600) × 20, 000                    −2, 857, 200
 exporters)

 Net welfare change                    −26, 122, 450 + 19, 693, 875 − 2, 857, 200   −9, 285, 775

Comparison:


 Policy                  Price           Imports           Net Welfare Change vs FT

 Free Trade              $600            70,000            0

 Tariff ($50)            $650            52,500            −$437, 500

 VER (20,000)            $742.86         20,000            −$9, 285, 775

Key insight: The VER is strictly worse than the tariff. The tariff generates 2, 625, 000 in
domestic government revenue that offsets part of the consumer loss. Under the VER, that same
revenue is captured by foreign exporters, making the net welfare loss over 20 times larger.
Exam Tip: Always compute autarky first. The DWL of a tariff = production distortion +
consumption distortion triangles. The VER is equivalent to a tariff where the quota rent goes to
foreigners — always note that this makes VERs worse than tariffs.



Key Formulas — Information & Trade

 Concept                                              Formula

 Adverse selection (WTP)                              𝐸[𝑉] = 𝜇𝑉𝐻 + (1 − 𝜇)𝑉𝐿

 Market collapse condition                            𝐸[𝑉] < max⁡{seller reservation prices}

 Akerlof continuous model (1st iteration
                                                      𝑞 ≤ 𝑄 ⋅ 𝐸[𝑞] = 𝑄2 /2
 cutoff)

 Complete unraveling limit                            𝐸(𝑛) [𝑞] → 0 as 𝑛 → ∞

 Spence separating condition                          𝑐𝐻 ≤ 𝑤𝐻 − 𝑤𝐿 ≤ 𝑐𝐿 (or 𝑞𝐻 − 𝑞𝐿 ∈ [𝑐𝐻 , 𝑐𝐿 ])

 Single-crossing property                             𝑐𝐿 > 𝑐𝐻 (education costlier for L-types)

 Spence-Mirrlees condition (continuum)                𝑐𝑒𝜃 < 0 (marginal cost decreasing in ability)

 Continuum separating (quadratic costs)               𝑒* (𝜃) = √(𝜃2 − 𝜃_ 2 )/2𝛼
Concept                                     Formula

                                            Θ* * (𝑎′ ) ≠ ∅ and 𝑢(𝑎′ , 𝜃) > 𝑢𝑒𝑞 (𝜃) for surviving
Intuitive Criterion (necessary condition)
                                            types

                                            𝑥′ (𝑒𝐿 ) = 𝜃𝐿 𝑐′ (𝑒𝐿 )/𝑢′ (𝑤𝐿 ) (efficient for lowest-
Screening: no distortion at top
                                            cost type)

                                            If prices perfectly reveal, no one collects info
Grossman-Stiglitz paradox
                                            ⇒ prices can’t reveal

Autarky price                               𝑄𝑑 (𝑃) = 𝑄𝑠 (𝑃)
                                            1 𝑡(Δ𝑄 + Δ𝑄 )
Tariff DWL                                  2     𝑠    𝑑

                                            ̂𝑤 > 𝑃̂     ̂
                                                   𝑋 > 𝑃𝑌 > 𝑟 (magnification effect)
Stolper-Samuelson (Jones algebra)                           ̂

                                                          ̂           ̂
Magnification formula                       𝑤̂ = (𝜃𝐾𝑌 𝑃𝑋 − 𝜃𝐾𝑋 𝑃𝑌 )/(𝜃𝐿𝑋 𝜃𝐾𝑌 − 𝜃𝐿𝑌 𝜃𝐾𝑋 )

VER welfare loss                            DWL + quota rent to foreigners

                                            Same DWL, but rent destination differs: govt
Tariff < Quota < VER (welfare ranking)
                                            > domestic > foreign




Appendix A: Exam Cheat Sheet — All Key Formulas

Your quick-reference formula sheet — know all of these cold.


Preferences & Utility

Concept                                     Formula

                                            Completeness: ∀𝑥, 𝑦, 𝑥 ≽ 𝑦 ∨ 𝑦 ≽ 𝑥;
Rationality
                                            Transitivity: 𝑥 ≽ 𝑦 ∧ 𝑦 ≽ 𝑧 ⇒ 𝑥 ≽ 𝑧

                                            SM: 𝑥𝑘 ≥ 𝑦 ∀𝑘, 𝑥𝑙 > 𝑦 ∃𝑙 ⇒ 𝑥 ≻ 𝑦; M:
                                                              𝑘               𝑙
Monotonicity                                𝑥𝑘 > 𝑦𝑘 ∀𝑘 ⇒ 𝑥 ≻ 𝑦; LNS:
                                            ∀𝑥, 𝜀 > 0 ∃𝑦: ∥ 𝑦 − 𝑥 ∥ < 𝜀, 𝑦 ≻ 𝑥

                                            𝑢(𝜆𝑥 + (1 − 𝜆)𝑦) ≥ min⁡{𝑢(𝑥), 𝑢(𝑦)}; BH:
                                               0 𝑢𝑥 𝑢𝑦
Quasiconcavity
                                             ∣ 𝑢𝑥 𝑢𝑥𝑥 𝑢𝑥𝑦 ∣ ≥ 0
                                               𝑢𝑦 𝑢𝑦𝑥 𝑢𝑦𝑦
                                                      2                   2
                                            𝑑𝑀𝑅𝑆 = 𝑢𝑥 𝑢𝑦𝑦 − 2𝑢𝑥 𝑢𝑦 𝑢𝑥𝑦 + 𝑢𝑦 𝑢𝑥𝑥 < 0
Diminishing MRS                              𝑑𝑥                 𝑢3𝑦




UMP & EMP

Concept                                     Formula

                                            max⁡𝑥 ≥ 0 𝑢(𝑥) s.t. 𝑝 ⋅ 𝑥 ≤ 𝑤; Lagrangian:
UMP
                                            ℒ = 𝑢(𝑥) + 𝜆(𝑤 − 𝑝 ⋅ 𝑥)

FOC                                         𝑢𝑥𝑘 = 𝜆𝑝𝑘 ; Tangency: 𝑀𝑅𝑆𝑖𝑗 = 𝑝𝑖 /𝑝𝑗
Concept                      Formula

Walrasian demand             𝑥(𝑝, 𝑤): HD(0), 𝑝 ⋅ 𝑥(𝑝, 𝑤) = 𝑤

                             𝑣(𝑝, 𝑤) = 𝑢(𝑥(𝑝, 𝑤)): HD(0), ↑ 𝑤, ↓ 𝑝,
Indirect utility
                             quasiconvex
                                             𝜕𝑣/𝜕𝑝
Roy’s identity               𝑥𝑘 (𝑝, 𝑤) = − 𝜕𝑣/𝜕𝑤𝑘

                             min⁡𝑝 ⋅ 𝑥 s.t. 𝑢(𝑥) ≥ 𝑢‾ ; Shephard’s:
EMP
                             𝜕𝑒(𝑝, 𝑢)/𝜕𝑝𝑘 = ℎ𝑘 (𝑝, 𝑢)

                             𝑒(𝑝, 𝑣(𝑝, 𝑤)) = 𝑤; 𝑣(𝑝, 𝑒(𝑝, 𝑢)) = 𝑢;
Duality
                             ℎ(𝑝, 𝑢) = 𝑥(𝑝, 𝑒(𝑝, 𝑢)); 𝑥(𝑝, 𝑤) = ℎ(𝑝, 𝑣(𝑝, 𝑤))
                             𝜕𝑥𝑘
                             𝜕𝑝𝑗
                                 = 𝜕ℎ𝑘 − 𝑥 𝜕𝑥𝑘 ; 𝑆(𝑝, 𝑤) ≡ 𝐷 ℎ(𝑝, 𝑢): NSD,
                                   𝜕𝑝𝑗    𝑗 ⏟𝜕𝑤             𝑝
                                    ⏟
Slutsky                            SE      IE
                             symmetric, 𝑆𝑝 = 0


Elasticities


Concept                      Formula

Point elasticity             𝜀𝑋, 𝑃 = 𝜕𝑋 ⋅𝑃
                                     𝜕𝑃 𝑋

                             𝜀arc    Δ𝑋 𝑃1 + 𝑃2
Arc elasticity                𝑋, 𝑃 = Δ𝑃 ⋅ 𝑋1 + 𝑋2

Log-linear demand            𝑋 = 𝛼𝑃𝛾𝑋 𝑃𝛿𝑍 𝐼𝜂 ; exponents are elasticities

                             |𝜀| > 1: 𝑃 ↓ ⇒ 𝑇𝑅 ↑ ; |𝜀| < 1: 𝑃 ↓ ⇒ 𝑇𝑅 ↓ ; |𝜀| = 1:
Revenue test
                             𝑇𝑅 max

Marginal revenue             𝑀𝑅 = 𝑃(1 + 1/𝜀) = 𝑃(1 − 1/|𝜀|)

Lerner index                 (𝑃 − 𝑀𝐶)/𝑃 = −1/𝜀

                             𝜂 > 1: luxury; 0 < 𝜂 < 1: necessity; 𝜂 < 0:
Income elasticity
                             inferior

Slutsky (elasticity)         𝜀𝑘𝑗 = 𝜀ℎ𝑘𝑗 − 𝑠𝑗 𝜀𝑘𝑤 where 𝑠𝑗 = 𝑝𝑗 𝑥𝑗 /𝑤


Production

Concept                      Formula

MRTS                         𝑀𝑅𝑇𝑆𝐿𝐾 = 𝑀𝑃𝐿 /𝑀𝑃𝐾 = 𝑤/𝑟
                                  𝑑ln⁡(𝐾/𝐿)
Elasticity of substitution   𝜎 = 𝑑ln⁡
                                    (𝑀𝑅𝑇𝑆)
                                            ; CES: 𝜎 = 1/(1 − 𝜌)

                             𝑐(𝑤, 𝑞): HD(1), concave in 𝑤; Shephard’s:
Cost function
                             𝜕𝑐/𝜕𝑤𝑘 = 𝑧𝑘

                             𝜋(𝑝): HD(1), convex in 𝑝; Hotelling:
Profit function
                             𝜕𝜋/𝜕𝑝𝑘 = 𝑦𝑘

                             𝑓(𝑡𝐾, 𝑡𝐿) = 𝑡𝑘 𝑓(𝐾, 𝐿); 𝑘 > 1 IRS, 𝑘 = 1 CRS, 𝑘 < 1
Returns to scale
                             DRS
Welfare

 Concept                                         Formula

 CV                                              𝐶𝑉 = 𝑒(𝑝1 , 𝑢0 ) − 𝑒(𝑝1 , 𝑢1 ) = 𝑤 − 𝑒(𝑝1 , 𝑢0 )

 EV                                              𝐸𝑉 = 𝑒(𝑝0 , 𝑢1 ) − 𝑒(𝑝0 , 𝑢0 ) = 𝑒(𝑝0 , 𝑢1 ) − 𝑤
                                                        𝑝1
 CS                                              𝐶𝑆 = ∫𝑝0 𝑥(𝑝, 𝑤) 𝑑𝑝

                                                 𝑃 ↓ normal: 𝐸𝑉 > 𝐶𝑆 > 𝐶𝑉; 𝑃 ↑ : 𝐶𝑉 > 𝐶𝑆 > 𝐸𝑉;
 Ordering
                                                 quasilinear: 𝐶𝑉 = 𝐸𝑉 = 𝐶𝑆
                                                         𝐴            𝐵             𝑋      𝑌
                                                 (i) 𝑀𝑅𝑆 = 𝑀𝑅𝑆 ; (ii) 𝑀𝑅𝑇𝑆 = 𝑀𝑅𝑇𝑆 ; (iii)
 3 Pareto conditions
                                                 𝑀𝑅𝑃𝑇 = 𝑀𝑅𝑆

                                                 Every CE is Pareto optimal (LNS, no
 FWT
                                                 externalities)

                                                 Every PO allocation can be supported as a
 SWT
                                                 CE with transfers (convexity)


GE & Game Theory

 Concept                                         Formula

 Excess demand                                   𝑧𝑖 (𝑝) = 𝐷𝑖 (𝑝) − 𝑆𝑖 (𝑝); Walras’ Law: ∑ 𝑝𝑖 𝑧𝑖 (𝑝) = 0

                                                 𝑧(0) > 0, 𝑧(∞) < 0, continuous 𝑧, HD(0)
 Existence
                                                  ⇒ ∃𝑝* : 𝑧(𝑝* ) = 0

 Numeraire                                       𝑛 goods, 𝑛 − 1 indep eqns; set 𝑝1 = 1

 Nash equilibrium                                𝑠*𝑖 ∈ arg⁡max⁡𝑠𝑖 𝑢𝑖 (𝑠𝑖 , 𝑠*−𝑖 )
                                                             𝜋   −𝜋
 Folk Theorem                                    𝛿 ≥ 𝛿* = 𝜋𝑑𝑒𝑣    𝑐𝑜𝑜𝑝
                                                           𝑑𝑒𝑣 − 𝜋𝑝𝑢𝑛
                                                                       sustains cooperation

                                                 Separating: 𝑤𝐻 − 𝑤𝐿 ∈ [𝑐𝐿 , 𝑐𝐻 ]; single-
 Spence signaling
                                                 crossing: 𝑐𝐿 > 𝑐𝐻

                                                 Tax = marginal external damage at social
 Pigouvian tax
                                                 optimum

                                                 Zero TC + property rights ⇒ bargaining →
 Coase Theorem
                                                 efficiency

 Tariff DWL                                      𝐷𝑊𝐿 = 12 × 𝑡 × Δ𝑄




Appendix B: Past Exam Papers

Working through real past papers is one of the best ways to prepare — you’ll get a feel for the
question style, the timing, and the level of depth expected.


B.1 Batch 46 (2020) — Microeconomic Theory II (Course 401)
Exam paper text is available in the full extracted text. Key questions covered in topic
sections above: - Part A: Pareto optimality & welfare theorems (→ Topic 4) - Part A:
Externalities, taxes & social dividend (→ Topic 7) - Part B: Bertrand duopoly, Nash equilibrium
(→ Topic 6) - Part B: Entry game, backward induction, SPNE (→ Topic 6) - Part B: Centipede
game, paradox of backward induction (→ Topic 6) - Part C: Tragedy of Commons (→ Topic 7) -
Part C: Pollution externalities, private vs social costs (→ Topic 7) - Part C: Asymmetric
information, Spence signaling (→ Topic 8)


B.2 Batch 48 (2023) — Advanced Microeconomic Theory (Course 501)

       Q1: Quasi-concave utility proof, Negroni perfect complements utility, Cobb-Douglas
       demands, Quasilinear UMP (→ Topic 1)
       Q2: Convex indifference curves proof, log-linear demand elasticities, perfect substitutes
       utility (→ Topic 1, 2)
       Q3: Burger King demand estimation, elasticity analysis, profit-maximizing price (→ Topic
       2)
       Q4: Cost function properties, returns to scale (→ Topic 3)

Full exam papers with solutions are embedded in their respective topic sections above.




Appendix C: Workhorse Utility Functions

 Type              Function Form                     MRS                    Properties

 Cobb-                                                                      HD(1), homothetic, const.
                   𝑢 = 𝑥𝛼1 𝑥12 − 𝛼                   (𝛼/(1 − 𝛼))(𝑥2 /𝑥1 )
 Douglas                                                                    budget shares

 Perfect                                                                    Linear ICs, corner
                   𝑢 = 𝑎𝑥1 + 𝑏𝑥2                     𝑎/𝑏 (constant)
 Substitutes                                                                solutions

 Perfect                                                                    L-shaped ICs, fixed
                   𝑢 = min⁡(𝑎𝑥1 , 𝑏𝑥2 )              0 or ∞
 Complements                                                                proportions

                                                                            𝜎 = 1/(1 − 𝜌); nests CD (
                                                                 𝜌−1
                   𝑢 = (𝑥𝜌1 + 𝑥𝜌2 )
                                    1/𝜌
 CES                                                 (𝑥1 /𝑥2 )              𝜌 → 0), PS (𝜌 → 1), PC (
                                                                            𝜌 → −∞)

                                                                            No income effect for 𝑥1 ;
 Quasilinear       𝑢 = 𝑥1 + 𝜑(𝑥2 )                   𝜑′ (𝑥2 )
                                                                            𝐶𝑉 = 𝐸𝑉 = 𝐶𝑆



Appendix D: Key Textbook Connections — Comprehensive Cross-
Reference Index

This appendix maps each major concept in the guide to its source textbook and section,
enabling targeted revision of the original proofs.


D.1 Munoz-Garcia — Advanced Microeconomic Theory
Guide Topic   Munoz-Garcia Reference   Key Concepts

                                       Preference axioms,
                                       Examples 1.3–1.8,
Topic 1       Ch.1, §1.1–1.5           Lexicographic
                                       preferences, Utility
                                       representation theorems

                                       Bordered Hessian
                                       derivation,
Topic 1       Ch.1, Appendix A
                                       Quasiconcavity ↔︎ convex
                                       UCS

                                       Choice-based approach,
Topic 1       Ch.1, §1.8               WARP, Rational
                                       preference → choice

                                       Behavioral economics:
                                       Prospect theory,
Topic 1       Ch.1, §1.9
                                       framing, endowment
                                       effect

                                       Slutsky matrix, NSD,
Topic 2       Ch.2, §2.3–2.4           symmetry, Compensated
                                       Law of Demand

                                       Hicksian vs Walrasian
                                       demand, Relationship
Topic 2       Ch.2, §2.8
                                       between demand
                                       concepts

                                       Elasticity-form Slutsky
Topic 2       Ch.3, §3.3
                                       equation, ε-form

                                       Production sets,
Topic 3       Ch.4, §4.1               Hotelling’s Lemma,
                                       Profit function convexity

                                       Cost function concavity,
Topic 3       Ch.4, §4.2               Shephard’s Lemma,
                                       Duality

                                       Cobb-Douglas CMP,
Topic 3       Ch.4, §4.3               Conditional factor
                                       demands

                                       CES production, Nesting
Topic 3       Ch.4, §4.4
                                       properties

                                       Aggregate supply, CRS
Topic 3       Ch.6, §6.4
                                       with free entry

                                       CV, EV, Hicksian demand
Topic 4       Ch.3, §3.1–3.2
                                       integration

                                       Willig bounds, Welfare
Topic 4       Ch.3, §3.5
                                       ordering
Guide Topic   Munoz-Garcia Reference   Key Concepts

                                       Welfare theorems,
Topic 4       Ch.6, §6.5               Lagrangian derivation of
                                       Pareto conditions

                                       Bergson-Samuelson
Topic 4       Ch.6, §6.5.2             SWF, Social welfare
                                       functions

                                       Scitovsky reversal,
Topic 4       Ch.6, §6.6
                                       Compensation tests

                                       Arrow-Debreu existence,
Topic 5       Ch.6, §6.1               Fixed-point theorem
                                       application

                                       Gross substitutability,
Topic 5       Ch.6, §6.2               Uniqueness of
                                       equilibrium

                                       Tatonnement stability,
Topic 5       Ch.6, §6.3               Walrasian adjustment
                                       process

                                       Three Pareto conditions,
Topic 5       Ch.6, §6.5
                                       Lagrangian derivation

                                       Nash Existence
Topic 6       Ch.8, §8.1               Theorem, Kakutani fixed-
                                       point

                                       Mixed strategy NE,
Topic 6       Ch.8, §8.2               Technology adoption
                                       game

                                       Bayesian Nash
Topic 6       Ch.10, §10.1             Equilibrium, Types and
                                       beliefs

                                       Perfect Bayesian
Topic 6       Ch.10, §10.2             Equilibrium, Sequential
                                       rationality

                                       Kreps-Milgrom-Roberts-
Topic 6       Ch.8, §8.5
                                       Wilson reputation model

                                       Renegotiation-proofness,
Topic 6       Ch.8, §8.4
                                       Grim trigger fragility

                                       Production externalities,
Topic 7       Ch.9, §9.1
                                       Steel-fishery model

                                       Coase Theorem,
Topic 7       Ch.9, §9.2               Bargaining and
                                       efficiency

                                       Pigouvian tax, Graphical
Topic 7       Ch.9, §9.3
                                       analysis
Guide Topic        Munoz-Garcia Reference   Key Concepts

                                            Public goods, Samuelson
Topic 7            Ch.9, §9.4               condition, Free-rider
                                            problem

                                            Lindahl equilibrium,
Topic 7            Ch.9, §9.5
                                            Personalized prices

                                            Tragedy of the
Topic 7            Ch.9, §9.6               Commons, n-user
                                            analysis

                                            Akerlof lemons model,
Topic 8            Ch.10, §10.4             Continuous quality,
                                            Market unraveling

                                            Adverse selection in
Topic 8            Ch.10, §10.5
                                            labor markets

                                            Spence signaling model,
Topic 8            Ch.8, §8.5 (Ch.11)
                                            Continuum of types

                                            Intuitive Criterion (Cho-
Topic 8            Ch.8, §8.5.3
                                            Kreps)

                                            Stiglitz screening model
Topic 8            Ch.10, §10.5.2
                                            of insurance

                                            Stolper-Samuelson
Topic 8            Ch.6, §6.7               theorem, Magnification
                                            effect

                                            Trade policy, Tariff vs
Topic 8            Ch.6, §6.8               quota vs VER welfare
                                            comparison


D.2 Koutsoyiannis — Modern Microeconomics

Guide Topic       Koutsoyiannis Reference    Key Concepts

                                             Indifference curve
                                             geometry, Diminishing
Topic 1           Ch.2, pp.53–60
                                             MRS, Consumer
                                             equilibrium

                                             Empirical demand
                                             estimation,
Topic 2           Ch.2, pp.60–78
                                             Identification problem,
                                             Functional forms

                                             Linear Expenditure
Topic 2           Ch.2, pp.153–161
                                             System

                                             Production functions,
Topic 3           Ch.3, pp.78–120            Isoquant types, Returns
                                             to scale
Guide Topic         Koutsoyiannis Reference                      Key Concepts

                                                                 Cost minimization,
                                                                 Lagrangian, Expansion
Topic 3             Ch.4, pp.121–170
                                                                 path, Numerical
                                                                 examples

                                                                 Oligopoly: Cournot,
                                                                 Bertrand, Stackelberg
Topic 6             Ch.9, pp.315–390
                                                                 comparison, Market
                                                                 structure

                                                                 Critique of neoclassical
Topic 6             Ch.11, pp.428–459                            theory, Marginalist
                                                                 controversy

                                                                 Externalities, Pareto
Topic 7             Ch.23, pp.642–670                            optimality breakdown,
                                                                 MSC analysis

                                                                 Walrasian system of
                                                                 simultaneous
Topic 5             Ch.22, pp.620–641
                                                                 equations, General
                                                                 equilibrium


D.3 How to Use Textbook References in Exams

Exam Situation         How to Reference the Textbook                      Example

                                                                          “As shown in
                                                                          Munoz-Garcia
                                                                          (Ch.2, §2.4),
                                                                          the
Proving a theorem      Cite the formal proof from Munoz-Garcia
                                                                          Compensated
                                                                          Law of
                                                                          Demand
                                                                          establishes…”

                                                                          “Following
                                                                          Munoz-Garcia
                                                                          (Ch.6, §6.5),
Deriving a result      Cite the Lagrangian derivation                     the first
                                                                          welfare
                                                                          condition is
                                                                          obtained by…”

                                                                          “This parallels
                                                                          Munoz-Garcia
                                                                          Example 9.1
Numerical example      Cite the textbook’s solved example                 where the
                                                                          steel-fishery
                                                                          model
                                                                          yields…”
 Exam Situation              How to Reference the Textbook                     Example

                                                                               “Koutsoyiannis
                                                                               (Ch.11) argues
                                                                               that the
 Evaluation/critique         Cite Koutsoyiannis’s institutional critique       neoclassical
                                                                               model faces
                                                                               difficulties
                                                                               in…”

                                                                               “Consistent
                                                                               with
                                                                               Koutsoyiannis
                                                                               (Ch.2, p.55),
 Diagram explanation         Reference the textbook diagram conventions
                                                                               the consumer
                                                                               equilibrium
                                                                               occurs at the
                                                                               tangency…”

                                                                               “The
                                                                               Pigouvian tax
                                                                               derivation
                                                                               follows
 Policy application          Cite the textbook’s policy analysis               Munoz-Garcia
                                                                               (Ch.9, §9.3)
                                                                               where τ =
                                                                               MEC at social
                                                                               optimum”

                                                                               “As discussed
                                                                               in
                                                                               Koutsoyiannis
                                                                               (Ch.2),
 Empirical context           Cite Koutsoyiannis’s empirical discussion         demand
                                                                               estimation
                                                                               faces an
                                                                               identification
                                                                               problem…”



This guide consolidates content from: - Answer files: answers-consumer-theory.md, answers-
demand-production.md, answers-welfare.md, answers-ge-game-extern-trade.md - Basics &
formulas, equation explainer, exam cheat sheet, glossary - Extracted text from lecture PDFs,
homework assignments, tutorial sheets, and past exam papers - Munoz-Garcia — Advanced
Microeconomic Theory (Ch.1–11) - Koutsoyiannis — Modern Microeconomics (Ch.2–4,
9, 11, 22–23) - All source PDFs available in resources/master-notes-501/ and
resources/extracted_text/Masters_Notes_501/
