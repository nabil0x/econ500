# Answers: Demand Estimation & Elasticities + Production & Supply

> Exam-ready revision notes. Concise, structured, formulas, bullet points, exam tips.
>
> **Sources:** ch.2-demand-theory, ch.3-demand-theory-applications, ch.4-production-theory, Koutsoyiannis

---

## ✅ Answer Files — Quick Navigation

| File | Topics | Key Glossary Terms |
|------|--------|-------------------|
| [Consumer Theory](./answers-consumer-theory.md) | Preferences, Utility, UMP, EMP, Duality | [Rationality](GLOSSARY.md#term-rationality) • [Utility Function](GLOSSARY.md#term-utility-function) • [UMP](GLOSSARY.md#term-ump) • [EMP](GLOSSARY.md#term-emp) • [Duality](GLOSSARY.md#term-duality) |
| [Demand & Production](./answers-demand-production.md) | Elasticities, Production, Costs, Profit | [Elasticity](GLOSSARY.md#term-elasticity) • [Production Function](GLOSSARY.md#term-production-function) • [Cost Function](GLOSSARY.md#term-cost-function) • [Profit Max](GLOSSARY.md#term-profit-maximization) |
| [Welfare](./answers-welfare.md) | CV, EV, CS, Pareto, Welfare Theorems | [CV](GLOSSARY.md#term-cv) • [EV](GLOSSARY.md#term-ev) • [CS](GLOSSARY.md#term-cs) • [Pareto Efficiency](GLOSSARY.md#term-pareto-efficient) • [FWT](GLOSSARY.md#term-fwt) |
| [GE, Game Theory & Trade](./answers-ge-game-extern-trade.md) | GE, Game Theory, Externalities, Trade | [GE](GLOSSARY.md#term-ge) • [Nash Equilibrium](GLOSSARY.md#term-nash-equilibrium) • [Pigouvian Tax](GLOSSARY.md#term-pigouvian-tax) • [Stolper-Samuelson](GLOSSARY.md#term-stolper-samuelson) |

---

## Topic 2 — Demand Estimation & Elasticities

---

### Question 1 {#q-demand-01}

!!! tip "Marking Guide"
    Elasticity Concepts (3) | Sign Classification (3) | Revenue Test (3) | Numerical Application (3) | Economic Intuition (2)

!!! success "High-Yield"
    Constant elasticity (log-linear) demand is the most common functional form in empirical demand estimation. Mastering the interpretation of exponents as elasticities is essential.

!!! quote "Formal Definition 1 — [Elasticity of Demand](GLOSSARY.md#term-elasticity)"
    
    **Point Elasticity:** For infinitesimal changes, the price elasticity of demand is defined as the proportionate change in quantity demanded resulting from a very small proportionate change in price (Koutsoyiannis, p.46):
    
    $$\varepsilon_{X,P} = \frac{\partial X}{\partial P} \cdot \frac{P}{X} = \frac{\% \Delta X}{\% \Delta P}$$
    
    **Arc Elasticity:** When price changes are not small, we use the arc elasticity (average elasticity over the interval):
    
    $$\varepsilon_{X,P}^{\text{arc}} = \frac{\Delta X}{\Delta P} \cdot \frac{P_1 + P_2}{X_1 + X_2}$$
    
    (Koutsoyiannis, eq. 2.5, p.48) — the elasticity at the midpoint of the chord connecting two points on the demand curve.
    
    The constant elasticity (log-linear) form $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$ assumes elasticities are constant at **all** price–quantity combinations, so point and arc measures coincide.

Demand function: $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$

**(i) Cross-price elasticity with Z**

Cross-price elasticity measures the percentage change in quantity demanded of X from a 1% change in the price of Z (Munoz-Garcia, p.93):

$$\varepsilon_{X,P_Z} = \frac{\partial X}{\partial P_Z} \cdot \frac{P_Z}{X} = \frac{\partial \ln X}{\partial \ln P_Z} = \delta$$

**Why $\partial \ln X / \partial \ln P_Z = \delta$?** Take natural logs of both sides:

$$\ln X = \ln \alpha + \gamma \ln P_X + \delta \ln P_Z + \varepsilon \ln P_W + \eta \ln I$$

Since $\partial \ln X / \partial \ln P_Z = (\partial X / X) / (\partial P_Z / P_Z) = \varepsilon_{X,P_Z}$, the exponent $\delta$ is the elasticity directly. This is the **constant elasticity form**: the elasticity is the exponent (Koutsoyiannis, p.54–55, proof).

**(ii) Income elasticity**

Income elasticity $\varepsilon_{X,I} = \frac{\partial \ln X}{\partial \ln I} = \eta$.

Given $\alpha = -0.5, \gamma = -0.4, \delta = 0.8$:
- The numerical value of $\alpha$ does not affect elasticity classification.
- To classify good X, we need $\eta$ (income elasticity), which is not explicitly provided in the given numbers. However, using typical convention:

> If $\eta > 1$ → luxury; $0 < \eta < 1$ → necessity; $\eta < 0$ → inferior.
>
> With $\alpha < 0$, this is a scaling constant (intercept in log form). **Do not confuse $\alpha$ with $\eta$.**

**Exam Tip:** $\alpha$ is the scale parameter, not the income elasticity. The income elasticity is $\eta$ — always look at the exponent of $I$.

**(iii) Is Z a gross substitute or complement for X?**

> **Formal Definition 2 — [Gross Substitutes vs Gross Complements](GLOSSARY.md#term-pd)** *(see: Price Elasticity)*
>
> Two goods are **gross substitutes** if an increase in the price of one good raises the Walrasian (uncompensated) demand for the other: $\partial X_i / \partial P_j > 0$.
>
> Two goods are **gross complements** if an increase in the price of one good reduces the Walrasian demand for the other: $\partial X_i / \partial P_j < 0$.
>
> (Munoz-Garcia, §3.7, p.194–198)
>
> *Caution:* Gross substitutability is **not necessarily symmetric** — good Y can be a gross substitute for X while X is neither a gross substitute nor complement of Y (Munoz-Garcia, Example 3.5, p.198–199). This contrasts with *net* substitutes, defined via Hicksian demands, which are symmetric.

$\delta = 0.8 > 0 \Rightarrow \frac{\partial X}{\partial P_Z} > 0$.

- When $P_Z$ ↑, $X$ ↑ → **Z is a gross substitute for X**.
- If $\delta < 0$, Z would be a gross complement.
- The magnitude $|\delta| = 0.8$ indicates the *strength* of the relationship: a 1% rise in $P_Z$ raises $X$ by 0.8%.

**(iv) If $P_W$ falls 5%, by what % does $Q_d$ change?**

$\varepsilon_{X,P_W} = \varepsilon$ (the exponent on $P_W$ in the demand function).

Given $\% \Delta P_W = -5\%$, the percentage change in quantity demanded is:

$$\% \Delta Q_d = \varepsilon \times (\% \Delta P_W) = \varepsilon \times (-5\%)$$

**The answer depends entirely on the sign and magnitude of $\varepsilon$:**
- If $\varepsilon > 0$ (W is a substitute), $P_W \downarrow \;\Rightarrow\; Q_d \downarrow$ by $5\varepsilon\%$.
- If $\varepsilon < 0$ (W is a complement), $P_W \downarrow \;\Rightarrow\; Q_d \uparrow$ by $5|\varepsilon|\%$.
- If $\varepsilon = 0$ (W is unrelated), $Q_d$ is unchanged.

**Exam Tip:** Always check the sign of the cross-price elasticity. A fall in the price of a complement ($\varepsilon < 0$) raises demand; a fall in the price of a substitute ($\varepsilon > 0$) lowers demand.

!!! quote "Formal Definition 3 — [Own-Price Elasticity of Demand](GLOSSARY.md#term-elasticity)"
    
    The own-price elasticity measures the percentage change in quantity demanded of good $k$ resulting from a 1% change in its own price $p_k$ (Munoz-Garcia, p.93):
    
    $$\varepsilon_{X,P_X} = \frac{\partial X}{\partial P_X} \cdot \frac{P_X}{X} = \frac{\% \Delta X}{\% \Delta P_X}$$
    
    For the constant elasticity form $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$:
    
    $$\varepsilon_{X,P_X} = \gamma = -0.4$$
    
    **Classification:** $|\varepsilon| < 1$ → **inelastic**; $|\varepsilon| > 1$ → **elastic**; $|\varepsilon| = 1$ → **unit elastic**.

**(v) If $P_X$ decreases, would expenditure on X increase, decrease, or remain same?**

Expenditure $E = P_X \times X(P_X)$.

Use total revenue test. The **mathematical derivation** is instructive. Marginal revenue relates to elasticity as (Koutsoyiannis, eq. 2.9, p.52; Munoz-Garcia, p.497):

$$MR = \frac{dE}{dQ} = P + Q\frac{dP}{dQ} = P\left(1 + \frac{1}{\varepsilon}\right)$$

where $\varepsilon = \frac{dQ}{dP}\cdot\frac{P}{Q} < 0$ for a normal downward-sloping demand. Since $\frac{dE}{dP} = \frac{dE}{dQ}\cdot\frac{dQ}{dP} = MR \cdot \frac{dQ}{dP}$, the sign of $\frac{dE}{dP}$ tells us how expenditure responds to a price change. Using the absolute value $\eta = |\varepsilon|$:

$$MR = P\left(1 - \frac{1}{\eta}\right)$$

**Derivation:** $\varepsilon < 0$ (Law of Demand), so write $\varepsilon = -\eta$ where $\eta > 0$. Then $MR = P(1 + 1/(-\eta)) = P(1 - 1/\eta)$.

Since $\frac{dQ}{dP} < 0$, the sign of $\frac{dE}{dP} = MR \cdot \frac{dQ}{dP}$ is the *opposite* of the sign of $MR$:

| Condition on $\eta = |\varepsilon|$ | $MR$ sign | $\frac{dE}{dP}$ sign | $P_X \downarrow$ ⇒ Expenditure |
|---|---|---|---|
| $\eta > 1$ (elastic) | $MR > 0$ | negative | $\uparrow$ |
| $\eta < 1$ (inelastic) | $MR < 0$ | positive | $\downarrow$ |
| $\eta = 1$ (unit elastic) | $MR = 0$ | zero | unchanged (revenue maximised) |

**Worked Numerical Example:** Suppose $P_X = 10$, $X = 100$, $\gamma = -0.4$. Current expenditure = $10 \times 100 = 1000$. If $P_X$ falls by 10% to $P_X = 9$:
- $\% \Delta Q = \gamma \times \% \Delta P = -0.4 \times (-10\%) = +4\%$
- New $Q = 100 \times 1.04 = 104$
- New expenditure $= 9 \times 104 = 936$, a $\% \Delta E = (936 - 1000)/1000 = -6.4\%$  ✓

Since $|\gamma| = 0.4 < 1$, a price cut lowers total revenue. For contrast, if demand were elastic ($\gamma = -1.8$), a 10% price cut would raise Q by 18% and expenditure would increase.

**Exam Tip:** The Total Revenue Test is a staple. Elastic → price and revenue move opposite. Inelastic → same direction. Derive the $MR = P(1 + 1/\varepsilon)$ formula from first principles in your answer — it shows the examiner you understand the microfoundations, not just the rule of thumb.

**Exam Tip (Cross-Price Elasticity Sign):** Always distinguish between *gross* and *net* substitutes. The question's demand function is Walrasian (uncompensated), so $\delta > 0$ implies gross substitutes. A Hicksian (compensated) demand could give a different answer — see Munoz-Garcia §3.7.2 on net substitutes vs complements. If the exam specifies "compensated demand," use the Hicksian definition instead.

> **Professor's Corner:** Top marks require explicitly linking each exponent to its elasticity interpretation and classifying goods correctly by sign. The most common mistake is confusing $\alpha$ (the scale/intercept parameter) with the income elasticity $\eta$. For part (iv), never guess a value for $\varepsilon$ — state that the answer depends on its sign and explain both cases.
>
> **A-answer distinguishing insight:** The best answers also connect this question to the *Slutsky equation in elasticity form* (Munoz-Garcia, p.197):
>
> $$\varepsilon_{x,p_y} = \varepsilon_{x,p_y}^h - \theta_y \varepsilon_{x,w}$$
>
> where $\theta_y$ is the budget share of good $y$ and $\varepsilon^h$ is the Hicksian elasticity. This decomposition shows why cross-price effects are ambiguous in sign: the substitution effect (always positive for substitutes) and income effect (sign depends on whether $X$ is normal/inferior) pull in opposite directions. Using constant elasticity forms as in this question sidesteps the ambiguity because the income effect is already embedded in the reduced-form exponent.
>
> → *See also: [Consumer Theory Q1](./answers-consumer-theory.md#q-cons-01) (Walrasian demand properties), [Topic 2 Q3](#q-demand-03) (Lerner Index application)*

---

### Question 2 {#q-demand-02}

!!! tip "Marking Guide"
    Sign Identification (4) | Law of Demand (4) | Economic Interpretation (3) | Misspecification Diagnosis (3)

Burger King demand: $Q = 10 + 1.3P_B + 0.4P_M - 3P_F + 2.2I$

> **Formal Definition 4 — [Law of Demand](GLOSSARY.md#term-slutsky-equation)** *(see: Slutsky Equation)*
>
> The Law of Demand states that, for a normal good, the quantity demanded varies inversely with its own price, ceteris paribus (Koutsoyiannis, p.44–45). For a Walrasian (uncompensated) demand function satisfying the Weak Axiom of Revealed Preference (WARP):
>
> $$\frac{\partial X_k(p,w)}{\partial p_k} \leq 0 \quad \text{for all } k$$
>
> Equivalently, the own-price substitution effect is always negative: $s_{kk}(p,w) \leq 0$ (Munoz-Garcia, p.121–122). This is the *compensated* law of demand — the Hicksian demand for any good is nonincreasing in its own price.
>
> **Linear vs Constant Elasticity Form:** This question uses a **linear** demand function $Q = a + bP_B + \dots$. In linear demand, the slope $b$ is constant but elasticity $\varepsilon = b \cdot P_B/Q$ varies along the curve. In contrast, the log-linear form of Q1 and Q3 has constant elasticity but varying slope.

**The terrible problem:** The coefficient on $P_B$ (own price) is **positive** (+1.3).

$\frac{\partial Q}{\partial P_B} = 1.3 > 0$ → the demand curve slopes **upward** (Giffen-like). This violates the Law of Demand.

**Why this cannot be a [Giffen](GLOSSARY.md#term-giffen) good:** A Giffen good (an inferior good whose income effect dominates the substitution effect) still has a downward-sloping *compensated* demand curve, even though its Walrasian demand is upward-sloping (Munoz-Garcia, §2.6, p.120). The key distinction: the *own-price coefficient* in a regression like this should still be **negative** as a statistical matter — a positive coefficient on $P_B$ when estimating a demand function using observational data is a **symptom of model misspecification**, not a genuine Giffen effect.

For a properly specified demand function, own-price coefficient must be **negative**.

**How this relates to the Slutsky equation:** The own-price effect decomposes into:

$$\frac{\partial X_B}{\partial P_B} = \underbrace{\frac{\partial h_B}{\partial P_B}}_{\text{substitution effect }(\leq 0)} - \underbrace{X_B \frac{\partial X_B}{\partial w}}_{\text{income effect }(\lessgtr 0)}$$

Even for a Giffen good (where $X_B$ is strongly inferior, so $\partial X_B/\partial w < 0$ and the income effect overpowers substitution), the substitution effect $\partial h_B/\partial P_B$ remains negative. A regression coefficient of +1.3 implies the *total* uncompensated effect is positive, which is extremely rare and, in practice, nearly always signals misspecification rather than a true Giffen phenomenon.

> **Worked Counter-Example:** Suppose the demand *were* correctly specified as $Q = 10 - 1.3P_B + 0.4P_M - 3P_F + 2.2I$ (negative own-price coefficient). Then:
> - Own-price elasticity at $P_B = 5,\; Q = 10 - 6.5 + \dots$ would be calculated at the mean.
> - The sign of $\partial Q/\partial P_B = -1.3 < 0$ would satisfy the Law of Demand.
> - We could proceed to compute elasticities and revenue effects.

**Exam Tip:** Always check the sign of the own-price coefficient first. Positive own-price coefficient = misspecified model. The examiner expects you to say "I would reject this regression" before attempting any further interpretation.

**Exam Tip (Econometric Diagnosis):** A positive own-price coefficient in a demand regression is a classic symptom of:
1. **Omitted variable bias** — if a demand shifter (e.g., income, advertising) correlates positively with both price and quantity, the price coefficient can be biased upward.
2. **Simultaneous equations bias** — price and quantity are jointly determined; OLS on a single demand equation confounds supply and demand shifts.
3. **Measurement error** in price data.
In an exam setting, identifying these econometric issues scores points beyond merely spotting the sign error.

> **Professor's Corner:** This is a 30-second question once you spot the sign error. The examiner is testing whether you blindly apply formulas or first verify the data make sense. The model is unusable — you'd reject this regression before doing any elasticity calculations. Mention that a positive own-price coefficient might indicate omitted variable bias or simultaneous equations bias.
>
> **A-answer distinguishing insight:** The strongest answers connect this to the *identification problem* in demand estimation (Koutsoyiannis, p.55–57). A regression of quantity on price alone cannot recover the demand curve because observed price–quantity pairs trace out both supply and demand shifts over time. The positive coefficient on $P_B$ may reflect the upward-sloping *supply* curve, not the demand curve at all. This is why modern demand estimation uses instrumental variables — instruments that shift supply but not demand (e.g., input costs) to trace out the demand curve. A student who mentions IV identification at this point demonstrates genuine mastery.
>
> → *See also: [Topic 2 Q3](#q-demand-03) (correctly specified log-linear demand), [Consumer Theory Q4](./answers-consumer-theory.md#q-cons-04) (Slutsky equation)*

---

### Question 3 {#q-demand-03}

!!! tip "Marking Guide"
    Cross-price Elasticities (4) | Income Elasticity Classification (2) | Advertising Elasticity (2) | Lerner Index Derivation (3) | Competitive Response (3)

!!! success "High-Yield"
    Integrates elasticity interpretation, the Lerner Index (monopoly pricing), and competitive strategy. The profit-maximising price formula $P = MC/(1+1/\varepsilon)$ is a staple exam question.

Corrected demand: $Q = 150 P_B^{-1.5} P_{r1}^{0.75} P_{r2}^{-0.25} I^{0.8} A^{0.05}$

!!! quote "Formal Definition 5 — [Cross-Price Elasticity of Demand](GLOSSARY.md#term-elasticity)"
    
    The cross-price elasticity measures the percentage change in quantity demanded of good $i$ resulting from a 1% change in the price of good $j$ (Munoz-Garcia, p.93; Koutsoyiannis, eq. 2.7, p.49):
    
    $$\varepsilon_{Q_i,P_j} = \frac{\partial Q_i}{\partial P_j} \cdot \frac{P_j}{Q_i} = \frac{\% \Delta Q_i}{\% \Delta P_j}$$
    
    **Classification by sign:**
    - $\varepsilon_{Q_i,P_j} > 0$ → $i$ and $j$ are **gross substitutes** (rise in $P_j$ raises $Q_i$)
    - $\varepsilon_{Q_i,P_j} < 0$ → $i$ and $j$ are **gross complements** (rise in $P_j$ lowers $Q_i$)
    - $\varepsilon_{Q_i,P_j} = 0$ → $i$ and $j$ are **independent** in consumption (Cobb-Douglas case, Munoz-Garcia p.93)
    
    In the constant elasticity form, the exponents directly are the cross-price elasticities.

**(i) Which related good (r1 or r2) is French fries?**

French fries are a **complement** to Whoppers. Cross-price elasticity should be negative.

- $\varepsilon_{Q,P_{r1}} = 0.75 > 0$ → r1 is a **substitute** (e.g., chicken sandwich)
- $\varepsilon_{Q,P_{r2}} = -0.25 < 0$ → r2 is a **complement** = **French fries**

The magnitude $|0.75| > |{-0.25}|$ indicates the substitution relationship with r1 is stronger than the complement relationship with r2. This makes economic sense: customers view chicken sandwiches as closer alternatives to burgers than fries are as complements.

!!! quote "Formal Definition 6 — [Income Elasticity of Demand](GLOSSARY.md#term-elasticity)"
    
    Measures the percentage change in quantity demanded from a 1% change in income (Koutsoyiannis, eq. 2.6, p.49):
    
    $$\varepsilon_{Q,I} = \frac{\partial Q}{\partial I} \cdot \frac{I}{Q} = \frac{\% \Delta Q}{\% \Delta I}$$
    
    **Classification:**
    - $\varepsilon_{Q,I} > 1$ → **luxury** (income-elastic normal good)
    - $0 < \varepsilon_{Q,I} < 1$ → **necessity** (income-inelastic normal good)
    - $\varepsilon_{Q,I} < 0$ → **inferior good** (demand falls as income rises)

**(ii) Is Whopper a luxury, necessity, or inferior?**

Income elasticity $\eta = 0.8$.
- $0 < 0.8 < 1$ → **necessity** (normal good, income-inelastic).
- This is consistent with fast food being a normal good for the typical consumer but not a luxury — consumers do not dramatically increase burger purchases as income rises.

**(iii) If advertising ↑ 50%, by what % does demand change?**

$\varepsilon_{Q,A} = 0.05$ (advertising elasticity).

$\% \Delta Q = 0.05 \times 50\% = 2.5\%$ increase.

Demand is very advertising-inelastic (0.05).

**(iv) If BK lowers French fry price 50%, by what % does Whopper quantity change?**

French fries = r2. $\varepsilon_{Q,P_{r2}} = -0.25$.

$\% \Delta Q = -0.25 \times (-50\%) = +12.5\%$.

Whopper quantity **increases by 12.5%**.

**(v) If MC = \$1.00, what is profit-maximizing price?**

!!! quote "Formal Definition 7 — [Lerner Index of Market Power](GLOSSARY.md#term-lerner-index)"
    
    The Lerner Index measures the firm's price markup over marginal cost as a fraction of price (Munoz-Garcia, §7.2.3, p.497–499):
    
    $$L = \frac{P - MC}{P} = -\frac{1}{\varepsilon_{Q,P}}$$
    
    This is derived from the profit-maximising condition $MR = MC$. Starting from:
    
    $$MR = \frac{d(PQ)}{dQ} = P + Q\frac{dP}{dQ} = P\left(1 + \frac{dP}{dQ}\cdot\frac{Q}{P}\right) = P\left(1 + \frac{1}{\varepsilon}\right)$$
    
    **Full derivation:** Since $\varepsilon = \frac{dQ}{dP}\cdot\frac{P}{Q} < 0$, we have $\frac{1}{\varepsilon} = \frac{dP}{dQ}\cdot\frac{Q}{P}$. Substituting into $MR = P + Q\cdot dP/dQ$:
    
    $$MR = P + Q\frac{dP}{dQ} = P\left(1 + \frac{Q}{P}\cdot\frac{dP}{dQ}\right) = P\left(1 + \frac{1}{\varepsilon}\right)$$
    
    Setting $MR = MC$:
    
    $$P\left(1 + \frac{1}{\varepsilon}\right) = MC \;\Longrightarrow\; \frac{P - MC}{P} = -\frac{1}{\varepsilon}$$
    
    The **Inverse Elasticity Pricing Rule (IEPR)** solves for optimal price:
    
    $$P^* = \frac{MC}{1 + 1/\varepsilon}$$
    
    (Munoz-Garcia, p.498, eq. 7.5)
    
    **Interpretation:** The Lerner Index ranges from 0 (perfect competition, $\varepsilon \to -\infty$) to 1 (monopoly with perfectly inelastic demand, $\varepsilon \to 0$). Markets with more elastic demand have lower markups.
    
    **Real-world benchmark (Munoz-Garcia, p.498):** Perloff (2013) reports that Prilosec OTC had $\varepsilon \approx -1.2$, implying $P^* = 5.88 \times MC$ — a 488% markup. Designer jeans with $\varepsilon \approx -2$ give $P^* = 2 \times MC$, a 100% markup. Both are elastic, but the less elastic demand supports a much higher markup.

For BK, own-price elasticity $\varepsilon = -1.5$.

$$P\left(1 + \frac{1}{-1.5}\right) = 1$$
$$P\left(1 - \frac{2}{3}\right) = 1$$
$$P\left(\frac{1}{3}\right) = 1 \Rightarrow P = 3$$

**Profit-maximizing price = \$3.00.**

$$\text{Markup} = \frac{P - MC}{P} = \frac{3 - 1}{3} = \frac{2}{3} \text{ (or } -\frac{1}{\varepsilon} = \frac{2}{3})$$

**Exam Tip:** The Lerner Index formula $P = \frac{MC}{1 + 1/\varepsilon}$ only works when $\varepsilon < -1$ (elastic region). If $-1 < \varepsilon < 0$, $MR$ would be negative and the formula gives a nonsensical negative price. This is why a monopolist always operates on the elastic portion of the demand curve.

**Exam Tip (Additional Worked Example):** Suppose the own-price elasticity were $\varepsilon = -2.5$ instead (more elastic demand). Then:
$$P\left(1 + \frac{1}{-2.5}\right) = 1 \;\Rightarrow\; P\left(1 - 0.4\right) = 1 \;\Rightarrow\; P(0.6) = 1 \;\Rightarrow\; P = \$1.67$$
The markup falls from 67% to 40% — confirming that more elastic demand disciplines market power. If $\varepsilon = -4$ (highly elastic):
$$P\left(1 + \frac{1}{-4}\right) = 1 \;\Rightarrow\; P(0.75) = 1 \;\Rightarrow\; P = \$1.33$$
Markup = 25%. As $\varepsilon \to -\infty$, $P \to MC$ (perfect competition).

> **Professor's Corner:** Part (vi) is the strongest discriminator — most students stop at computing the 7.5% demand drop for Whoppers but fail to compute the required price offset. The key insight is that you use the *own-price elasticity* to determine how much price must change to restore quantity. This tests whether you truly understand elasticities as tools, not just classification labels.
>
> **A-answer distinguishing insight:** The strongest answers also note the *strategic pricing* dimension. BK's optimal price of \$3.00 was derived assuming no competitive response. But if McDonald's cuts the Big Mac price by 10%, BK faces reduced demand and must cut its own price by 5% just to hold quantity constant — reducing its profit margin. This illustrates *strategic complementarity* in pricing: when products are gross substitutes, a competitor's price cut forces your hand. Connect this to the Bertrand model (Munoz-Garcia, Ch.9): when firms compete in prices with differentiated substitutes, reaction functions slope upward. A price cut by McDonald's shifts BK's residual demand curve leftward, and the profit-maximising response (by the Lerner Index applied to the *new* demand level) may involve a price cut larger or smaller than 5% depending on whether the elasticity changes.
>
> → *See also: [Topic 2 Q1](#q-demand-01) (constant elasticity concepts), [Topic 3C Q1](#q-compet-01) (tax incidence with elasticities), [GE Game Extern Trade Topic 4](./answers-ge-game-extern-trade.md#q-game-01) (Bertrand competition)*

**(vi) McDonald's lowers Big Mac price 10%. By what % must BK lower its price to not lose customers?**

Big Mac is r1 (substitute). $\varepsilon_{Q,P_{r1}} = 0.75$.

If Big Mac price ↓ 10% → Whopper $Q$ falls by $0.75 \times 10\% = 7.5\%$ (ceteris paribus).

To neutralize this, BK must lower $P_B$ enough to raise $Q$ by 7.5%.

Own-price elasticity: $\varepsilon_{Q,P_B} = -1.5$.

$$\frac{\% \Delta Q}{\% \Delta P_B} = -1.5 \Rightarrow \% \Delta P_B = \frac{\% \Delta Q}{-1.5} = \frac{7.5\%}{-1.5} = -5\%$$

**BK must lower its price by 5%.**

> **Worked Verification:** Check that this response restores Whopper demand to its original level.
> - **Substitution effect from McDonald's price cut:** $\% \Delta Q = 0.75 \times (-10\%) = -7.5\%$
> - **Own-price offset from BK's price cut:** $\% \Delta Q = -1.5 \times (-5\%) = +7.5\%$
> - **Net effect:** $-7.5\% + 7.5\% = 0\%$ ✓
>
> The combination of cross-price and own-price elasticities precisely determines the competitive response needed.

---

## Topic 3A — Production Sets & Functions

---

### Question 1 {#q-prodset-01}

!!! tip "Marking Guide"
    Production Function (3) | Production Set (3) | Transformation Function (3) | Transformation Frontier (2) | MRPT Definition & Formula (3)

Define:

| Term | Definition |
|------|-----------|
| **Production function** | $q = f(z_1, z_2, ..., z_n)$ — maximum output obtainable from given input vector, given technology. $f: \mathbb{R}^{L-M}_+ \to \mathbb{R}^M_+$ |
| **Production set** | $Y = \{ y \in \mathbb{R}^L : F(y) \leq 0 \}$ — set of all technologically feasible production plans (input-output combinations). Positive components = outputs, negative = inputs. |
| **Transformation function** | $F(y)$ — implicit function where $F(y) \leq 0$ iff $y$ is feasible. $F(y) = 0$ defines the boundary. |
| **Transformation frontier** | $\{ y \in \mathbb{R}^L : F(y) = 0 \}$ — boundary of the production set where the firm is technically efficient (cannot increase one output without reducing another or using more inputs). |

**MRPT (Marginal Rate of Product Transformation):**
$$MRPT_{k,l}(y) = \frac{\partial F(y)/\partial y_k}{\partial F(y)/\partial y_l} = -\frac{dy_l}{dy_k} \text{ along } F(y)=0$$

Measures how much output $l$ must be reduced to increase output $k$ by one unit.

**Derivation from total differentiation (Munoz-Garcia §4.1):**

Along the transformation frontier $F(y) = 0$, totally differentiate:

$$dF(y) = \frac{\partial F(y)}{\partial y_k} dy_k + \frac{\partial F(y)}{\partial y_l} dy_l = 0$$

Solving for $dy_l/dy_k$:

$$\frac{dy_l}{dy_k} = -\frac{\partial F(y)/\partial y_k}{\partial F(y)/\partial y_l} \equiv -MRPT_{k,l}(y)$$

Hence $MRPT_{k,l}(y) = -dy_l/dy_k$ along $F(y)=0$. Intuitively, if the firm wants to produce one more unit of output $k$ while staying on the frontier (technically efficient), it must reduce output $l$ by $MRPT_{k,l}$ units.

**Duality result — MRPT equals the ratio of marginal costs (Munoz-Garcia §4.4):**

$$MRPT_{k,l} = \frac{MC_k}{MC_l}$$

*Proof sketch:* The firm's profit function is $\pi = p_k y_k + p_l y_l - C(y_k, y_l)$. FOCs: $p_k = MC_k$ and $p_l = MC_l$. Along the transformation frontier $F(y)=0$ the optimality condition equates $MRPT_{k,l} = p_k/p_l$. Substituting $p_k = MC_k$ and $p_l = MC_l$ yields $MRPT_{k,l} = MC_k/MC_l$. This duality mirrors consumer theory where $MRS = p_1/p_2 = MU_1/MU_2$.

> **Professor's Corner:** The MRPT definition is the production-side analogue of the MRS in consumption. Examiners frequently ask for the relationship $MRPT_{k,l} = MC_k/MC_l$ — know this duality cold. A common mistake is confusing MRPT (output transformation) with MRTS (factor substitution). In general equilibrium, MRPT = MRS is the condition for **production efficiency** (the first welfare theorem requires $MRPT_{AB}^F = MRS_{AB}^C$ for all firms $F$ and consumers $C$).
>
> → *See also: [Topic 3B Q2](#q-profit-02) (MRPT = MC_x/MC_y proof), [Topic 4 GE](./answers-ge-game-extern-trade.md#q-edge-03) (production efficiency condition)*

---

### Question 2 & 3 {#q-prodset-02}

!!! tip "Marking Guide"
    Property Definitions (6) | Graphical Interpretations (4) | Convexity Understanding (2) | Fixed-Cost Exception (2)

!!! success "High-Yield"
    The 11 properties of a production set form the axiomatic foundation of producer theory. Convexity and returns-to-scale properties are the most frequently examined.

**Properties of the production set** (graphically):

| # | Property | Meaning | Graph |
|---|----------|---------|-------|
| 1 | **Non-empty** | $Y \neq \varnothing$ — there is at least one feasible plan. | — |
| 2 | **Closed** | $Y$ includes its boundary points. | Solid boundary line |
| 3 | **No free lunch** | $y \in Y$ with $y \geq 0 \Rightarrow y = 0$. Cannot produce positive output with zero input. | $Y$ does not intersect $\mathbb{R}^L_{++}$ except at origin |
| 4 | **Possibility of inaction** | $0 \in Y$ — firm can shut down (use no inputs, produce no output). | Origin is in $Y$ |
| 5 | **Free disposal** | $y \in Y$ and $y' \leq y \Rightarrow y' \in Y$. Can throw away inputs/outputs at no cost. | If $y$ is feasible, any point southwest of $y$ is also feasible |
| 6 | **Irreversibility** | $y \in Y, y \neq 0 \Rightarrow -y \notin Y$. Cannot reverse production (unlike pure exchange). | $Y$ and $-Y$ do not overlap |
| 7 | **Non-increasing [RTS](GLOSSARY.md#term-rts)** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \in [0,1]$. Can scale down. | Cone containing origin |
| 8 | **Non-decreasing RTS** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \geq 1$. Can scale up. | Cone expanding outward |
| 9 | **[CRS](GLOSSARY.md#term-crs)** | $y \in Y \Rightarrow \alpha y \in Y$ for $\alpha \geq 0$. | Full cone through origin |
| 10 | **Additivity / Free entry** | $y, y' \in Y \Rightarrow y + y' \in Y$. Independent production plans can be combined. | $Y + Y \subseteq Y$ |
| 11 | **Convexity** | $y, y' \in Y, \alpha \in [0,1] \Rightarrow \alpha y + (1-\alpha)y' \in Y$. Balanced combinations are feasible. | Straight line between any two points in $Y$ stays in $Y$ |

**Formal textbook definitions (Munoz-Garcia §4.2):**

The properties above are drawn from the axiomatic foundations of producer theory. Key nuances from the textbook:

| Property | Formal Definition | Violation Example |
|----------|------------------|-------------------|
| **3. No free lunch** | $y \in Y$ with $y \geq 0 \Rightarrow y = 0$. Positive output requires positive input. | Producing output with zero inputs (perpetual motion) |
| **4. Possibility of inaction** | $0 \in Y$ — the firm can shut down. | With **sunk costs** (e.g., a signed non-cancellable lease), $0 \notin Y$ because the firm must still pay for inputs even if it produces nothing. |
| **6. Irreversibility** | $y \in Y, y \neq 0 \Rightarrow -y \notin Y$. Cannot reverse production. | If Y contains points in the southeast quadrant $(y_1 > 0, y_2 < 0)$, irreversibility may be violated — e.g., a farmer cannot instantly transform wheat back into labor and capital. |
| **11. Convexity** | $y, y' \in Y, \alpha \in [0,1] \Rightarrow \alpha y + (1-\alpha)y' \in Y$ | With **fixed/setup costs**, the production set has a "hole" near the origin — any convex combination of a point with positive output and the origin lies outside Y. |

**Convexity violation with fixed costs:**
With fixed costs, convexity fails — the production set becomes non-convex near the origin. For example, if the firm must spend \$100 on a license before producing any output, then the point $(y_1, y_2) = (-\$100, 0)$ is feasible (pay license, produce nothing) and the origin $(0,0)$ is feasible (inaction), but their convex combination $( -\$50, 0)$ is **not** feasible — you cannot "half-pay" the license. This non-convexity explains why natural monopolies (high fixed costs) cannot sustain competitive pricing.

**Exam Tip:** Differentiate between **convex production set** (which implies diminishing returns / [DRS](GLOSSARY.md#term-drs)) and **convex isoquants** (which imply diminishing MRTS). They are related but not identical:
- Convex production set → diminishing RTS (output grows less than proportionally to inputs)
- Convex isoquants → diminishing MRTS (isoquants bow toward the origin)
- A production set can have convex isoquants but still violate production set convexity (e.g., with fixed costs)

> **Professor's Corner:** A top answer doesn't just list the 11 properties — it groups them: (i) basic feasibility (non-empty, closed, inaction), (ii) physical constraints (no free lunch, irreversibility), (iii) disposal (free disposal), (iv) scalability (RTS properties), (v) aggregation (additivity), (vi) curvature (convexity). The fixed-cost exception to convexity is a favourite exam nuance. For graduate-level answers, note that **free disposal** plus **convexity** implies that conditional factor demands are well-behaved (downward-sloping), linking directly to the cost function properties in Q5.
>
> → *See also: [Topic 3B Q1](#q-profit-01) (profit function convexity — the dual of this), [Topic 3A Q5](#q-prodset-04) (cost function concavity — related to production set convexity)*

---

### Question 4 {#q-prodset-03}

!!! tip "Marking Guide"
    Definition & Formula (3) | Perfect Substitutes Derivation (4) | Leontief Derivation (4) | Comparison Table (3)

!!! success "High-Yield"
    The polar cases ($\sigma = \infty$ and $\sigma = 0$) and the Cobb-Douglas benchmark ($\sigma = 1$) are almost guaranteed exam questions. The CES generalisation $\sigma = 1/(1-\rho)$ is the capstone.

**Elasticity of Substitution (EoS)** — $\sigma$ measures the proportionate change in the $K/L$ ratio relative to the proportionate change in $MRTS_{L,K}$ along an isoquant:

$$\sigma = \frac{\% \Delta (K/L)}{\% \Delta MRTS} = \frac{d(K/L)}{d\,MRTS} \cdot \frac{MRTS}{K/L} = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)}$$

- $\sigma > 0$ always (K/L and MRTS move in same direction along isoquant).
- High $\sigma$ → isoquant almost flat (easy substitution).
- Low $\sigma$ → isoquant sharply curved (hard substitution).

**(i) EoS for $q = aK + bL$ (linear / perfect substitutes)**

$$MRTS = \frac{MP_L}{MP_K} = \frac{b}{a} \text{ (constant)}$$

$\% \Delta MRTS = 0 \Rightarrow \sigma = \frac{\% \Delta (K/L)}{0} = \infty$

**Perfect substitutes → $\sigma = \infty$.**

**(ii) EoS for fixed proportions (Leontief) $q = \min\{aK, bL\}$**

$K/L$ is fixed at $b/a$ along the ray from the origin (kink). $MRTS$ jumps from $0$ to $\infty$ at the kink.

$\% \Delta (K/L) = 0 \Rightarrow \sigma = 0$

**Fixed proportions → $\sigma = 0$.**

**(iii) EoS for Cobb-Douglas $Q = AK^\alpha L^\beta$ — formal proof that $\sigma = 1$ (Munoz-Garcia §4.3, Koutsoyiannis Ch.3):**

$$MRTS_{L,K} = \frac{MP_L}{MP_K} = \frac{\beta AK^\alpha L^{\beta-1}}{\alpha AK^{\alpha-1} L^\beta} = \frac{\beta}{\alpha} \cdot \frac{K}{L}$$

Taking logs:

$$\ln(MRTS) = \ln\left(\frac{\beta}{\alpha}\right) + \ln\left(\frac{K}{L}\right)$$

Rearranging:

$$\ln\left(\frac{K}{L}\right) = \ln(MRTS) - \ln\left(\frac{\beta}{\alpha}\right)$$

Therefore:

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = 1$$

All Cobb-Douglas production functions have unitary elasticity of substitution regardless of the exponent values $\alpha, \beta$.

**(iv) CES production function — general formula (Munoz-Garcia §4.3):**

The constant elasticity of substitution production function is:

$$q = f(K, L) = [\alpha K^\rho + (1-\alpha) L^\rho]^{\gamma/\rho}$$

where $\rho \leq 1$, $\rho \neq 0$, $\gamma > 0$ is the returns-to-scale parameter, and $\sigma = 1/(1-\rho)$.

**Derivation of $\sigma$ for CES:**

$$MRTS_{L,K} = \frac{MP_L}{MP_K} = \left(\frac{K}{L}\right)^{1-\rho}$$

Taking logs:

$$\ln(MRTS) = (1-\rho) \ln\left(\frac{K}{L}\right)$$

Rearranging:

$$\ln\left(\frac{K}{L}\right) = \frac{1}{1-\rho} \ln(MRTS)$$

Therefore:

$$\sigma = \frac{\partial \ln(K/L)}{\partial \ln(MRTS)} = \frac{1}{1-\rho}$$

**The $\rho$ parameter and polar cases:**

| $\rho$ value | $\sigma = 1/(1-\rho)$ | Implied production function |
|:---:|:---:|---|
| $\rho = 1$ | $\infty$ | Linear (perfect substitutes) $q = \alpha K + \beta L$ |
| $\rho \to 0$ | $1$ | Cobb-Douglas $q = AK^\alpha L^{1-\alpha}$ (in the limit) |
| $\rho \to -\infty$ | $0$ | Leontief $q = \min\{aK, bL\}$ (in the limit) |

**Exam Tip:** The parameter $\rho$ determines the substitution possibilities. When $\rho = 1$, inputs are perfect substitutes (linear isoquants). When $\rho \to 0$, the CES converges to Cobb-Douglas. When $\rho \to -\infty$, the CES converges to Leontief fixed proportions. For well-behaved CES, we require $\rho \le 1$ and $\rho \neq 0$.

**Worked numerical example — calculating $\sigma$ for given data:**

Suppose a firm uses $(K, L) = (100, 25)$ to produce $Q = 500$, with $MP_L = 8$ and $MP_K = 2$. Then:

$$MRTS = \frac{MP_L}{MP_K} = \frac{8}{2} = 4, \quad \frac{K}{L} = \frac{100}{25} = 4$$

Now suppose the firm changes to $(K, L) = (80, 40)$, still on the same isoquant, with $MP_L = 4$ and $MP_K = 4$. Then:

$$MRTS = \frac{4}{4} = 1, \quad \frac{K}{L} = \frac{80}{40} = 2$$

$$\sigma \approx \frac{\%\Delta(K/L)}{\%\Delta MRTS} = \frac{(2-4)/3}{(1-4)/2.5} = \frac{-0.667}{-1.2} \approx 0.56$$

This intermediate value (between 0 and 1) indicates moderate substitution possibilities.

> **Professor's Corner:** The derivation for linear ($\sigma = \infty$) is immediate from constant $MRTS$; the Leontief case ($\sigma = 0$) follows from the fact that $K/L$ is fixed at the kink. For Cobb-Douglas, the log-differentiation proof above is exam-ready. The CES derivation unifying all three polar cases is the capstone — master it for distinction-level answers. A common mistake is writing $\sigma = 1/(1-\rho)$ but forgetting that $\rho \le 1$ for well-behaved CES and that $\rho \to 0$ (not $\rho = 0$) gives Cobb-Douglas.
>
> → *See also: [Topic 3A Q7(vii)](#q-prodset-06) (Cobb-Douglas EoS verification), [Topic 1A Q7](./answers-consumer-theory.md#q-cons-07) (CES utility — same $\sigma$ concept in consumption)*

---

### Question 5 {#q-prodset-04}

!!! tip "Marking Guide"
    Property Definitions (6) | Intuitive Matching (4) | Concavity Insight (2) | Shephard's Lemma (2)

**Four properties of cost functions** — match to intuitive explanations:

| Property | Explanation |
|----------|-------------|
| **1. Homog(1) in $w$** | $c(\lambda w, q) = \lambda c(w, q)$. Doubling all input prices doubles costs. |
| **2. Non-decreasing in $q$** | $q_1 > q_0 \Rightarrow c(w, q_1) \geq c(w, q_0)$. More output cannot cost less. |
| **3. Concave in $w$** | $c(\alpha w + (1-\alpha)w', q) \geq \alpha c(w,q) + (1-\alpha)c(w',q)$. The firm adjusts input mix as relative prices change → cost increase is less than linear. |
| **4. Shephard's Lemma** | $\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$. The derivative of the cost function w.r.t. an input price gives the conditional factor demand for that input. |

**Intuitive explanations to match:**

1. "If all input prices rise by 10%, the minimum cost of producing $q$ rises by exactly 10%."
2. "To produce a larger quantity, you need at least as many inputs, so cost cannot fall."
3. "The firm can substitute away from inputs that become relatively more expensive, so costs rise less than linearly with input prices."
4. "The cost increase from a small rise in the price of input $k$ equals the quantity of input $k$ used at the optimum."

---

#### Formal derivation of conditional factor demands (Cost Minimization Problem — Munoz-Garcia §4.5)

The firm chooses inputs $z = (z_1, \dots, z_n)$ to minimize cost subject to reaching output $q$:

$$\min_{z \geq 0} \; w \cdot z \quad \text{subject to} \quad f(z) \geq q$$

**Lagrangian:**

$$\mathcal{L}(z; \lambda) = w \cdot z + \lambda[q - f(z)]$$

**First-order conditions** (for interior solution with $z_k > 0$):

$$\frac{\partial \mathcal{L}}{\partial z_k} = w_k - \lambda \frac{\partial f(z^*)}{\partial z_k} = 0 \quad \Rightarrow \quad w_k = \lambda \cdot MP_k(z^*)$$

Hence for any two inputs $k$ and $l$:

$$\frac{w_k}{w_l} = \frac{MP_k}{MP_l} = MRTS_{k,l}(z^*)$$

This is the **tangency condition**: the isocost line's slope ($-w_k/w_l$) equals the isoquant's slope ($-MP_k/MP_l = -MRTS_{k,l}$) at the optimum.

**Interpretation of the Lagrange multiplier $\lambda$:**

$$\lambda = \frac{w_k}{MP_k} = \frac{\partial c(w,q)}{\partial q} = MC(q)$$

The Lagrange multiplier equals the **marginal cost** — the increase in minimal cost from raising output by one unit.

#### Shephard's Lemma — formal statement and proof sketch (Munoz-Garcia §4.7)

**Shephard's Lemma:** If the conditional factor demand $z(w,q)$ is single-valued, then the cost function $c(w,q)$ is differentiable in $w$ and:

$$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q)$$

*Proof sketch (envelope theorem):* At the optimum, $c(w,q) = w \cdot z(w,q)$. By the envelope theorem, the indirect effect of $w_k$ on $z$ vanishes at the optimum, so:

$$\frac{\partial c(w,q)}{\partial w_k} = z_k(w,q) + \sum_j w_j \frac{\partial z_j}{\partial w_k} = z_k(w,q)$$

where the summation term equals zero by the first-order conditions.

#### Matrix properties of conditional factor demands (Munoz-Garcia §4.7)

If $z(w,q)$ is differentiable at $w$, then the matrix $D_w z(w,q) = D_w^2 c(w,q)$ is:

1. **Symmetric**: $\displaystyle \frac{\partial z_k}{\partial w_l} = \frac{\partial z_l}{\partial w_k}$ for all $k, l$ (cross-price effects are symmetric)
2. **Negative semidefinite (NSD)**: $\displaystyle \frac{\partial z_k}{\partial w_k} \leq 0$ for all $k$ (own-price effects are non-positive)
3. **Homogeneous of degree zero**: $D_w z(w,q) \cdot w = 0$

These properties imply that **conditional factor demands slope downward** (an increase in the price of an input reduces its demand), unlike unconditional demands which may have ambiguous cross-price effects.

#### Worked example — verifying Shephard's Lemma for Cobb-Douglas

Take $Q = K^{1/3}L^{1/3}$ from Q7. The [LR](GLOSSARY.md#term-lr) conditional factor demands are:

$$L(w,r,Q) = \left(\frac{r}{w}\right)^{1/2} Q^{3/2}, \quad K(w,r,Q) = \left(\frac{w}{r}\right)^{1/2} Q^{3/2}$$

The LR cost function is:

$$c(w,r,Q) = 2\sqrt{wr} \cdot Q^{3/2}$$

Verifying Shephard's Lemma:

$$\frac{\partial c}{\partial w} = 2 \cdot \frac{1}{2} \sqrt{\frac{r}{w}} \cdot Q^{3/2} = \sqrt{\frac{r}{w}} \cdot Q^{3/2} = L(w,r,Q) \quad \checkmark$$

$$\frac{\partial c}{\partial r} = 2 \cdot \frac{1}{2} \sqrt{\frac{w}{r}} \cdot Q^{3/2} = \sqrt{\frac{w}{r}} \cdot Q^{3/2} = K(w,r,Q) \quad \checkmark$$

**Exam Tip:** Property 3 (concavity in $w$) is the most commonly tested. It implies $\frac{\partial^2 c}{\partial w_k^2} \leq 0$ → conditional factor demand slopes downward. The NSD property of $D_w z$ is the production analogue of the Slutsky matrix in consumer theory.

> **Professor's Corner:** The cost function concavity result is the dual of profit function convexity. Top students explicitly link Shephard's Lemma to the envelope theorem: $\partial c(w,q)/\partial w_k = z_k(w,q)$. The intuitive matching questions test whether you can translate mathematical properties into plain English — practising this skill is worth 4 marks. For distinction-level answers, note the parallel between Shephard's Lemma in production and the **compensated demand / expenditure function relationship** in consumer theory ($\partial e(p,u)/\partial p_k = h_k(p,u)$).
>
> → *See also: [Topic 3B Q1](#q-profit-01) (profit function — the dual), [Topic 3A Q7](#q-prodset-06) (conditional factor demand application), [Topic 1B Q4](./answers-consumer-theory.md#q-cons-1b-04) (EMP duality — Shephard's Lemma in consumption)*

---

### Question 6 {#q-prodset-05}

!!! tip "Marking Guide"
    Production Function (2) | Conditional Factor Demand (2) | Cost Function (3) | Profit Maximisation (4) | MR=MC Alternative (3)

!!! success "High-Yield"
    The Leontief production function in a profit-maximisation context. Links production theory to pricing decisions.

**Sausage maker:** 3 oz pork + 2 oz veal → 5 oz sausage.

**(i) Production function**

Fixed proportions (Leontief):

$$Q = \min\left\{\frac{P}{3}, \frac{V}{2}\right\}$$

where $P$ = oz of pork, $V$ = oz of veal, $Q$ = oz of sausage.

Equivalently (per 5 oz sausage): $Q = \frac{1}{5} \min\left\{\frac{P}{0.6}, \frac{V}{0.4}\right\}$

**(ii) Conditional factor demand for pork — formal CMP approach**

The Leontief production function $Q = \min\{P/3, V/2\}$ is not differentiable at the kink, so the standard Lagrangian tangency condition cannot be applied. Instead, we use the **proportionality property**: at the cost-minimizing optimum, the firm uses inputs in exactly the ratio required by the production function.

*General principle:* For $Q = \min\{aK, bL\}$, the cost-minimizing input combination satisfies:

$$aK^* = bL^* = Q \quad \Rightarrow \quad K^*(Q) = \frac{Q}{a}, \quad L^*(Q) = \frac{Q}{b}$$

*Proof:* Suppose $aK > bL$ at some input combination. Then $Q = bL$, and we could reduce $K$ without affecting output, lowering costs. Hence optimality requires $aK = bL$.

Applying to our sausage problem:

$$\frac{P}{3} = \frac{V}{2} = Q \quad \Rightarrow \quad P^* = 3Q, \quad V^* = 2Q$$

Conditional factor demand: $P(Q) = 3Q$, $V(Q) = 2Q$.

These are **linear** in output — doubling output doubles the required input of each factor.

**(iii) Cost function**

$$c(Q) = p_P \cdot P(Q) + p_V \cdot V(Q) = p_P \cdot 3Q + p_V \cdot 2Q = Q(3p_P + 2p_V)$$

If $p_P = p_V = 1$: $c(Q) = 5Q$.

**Properties of the Leontief cost function:**
- **Linear in $Q$**: constant marginal cost $MC = 3p_P + 2p_V$ (CRS production → constant MC)
- **Homogeneous of degree 1 in input prices**: $c(\lambda p_P, \lambda p_V, Q) = \lambda \cdot c(p_P, p_V, Q)$ ✓
- **Shephard's Lemma**: $\partial c/\partial p_P = 3Q = P(Q)$ ✓
- **Average cost**: $AC(Q) = 3p_P + 2p_V = MC$, constant for all $Q$

**(iv) General form of Leontief cost minimization**

For a general Leontief production function $Q = \min\left\{\frac{z_1}{a_1}, \frac{z_2}{a_2}, \dots, \frac{z_n}{a_n}\right\}$:

- Conditional factor demands: $z_i^*(w, Q) = a_i Q$ for each input $i$
- Cost function: $c(w, Q) = Q \cdot \sum_{i=1}^n w_i a_i$
- Marginal cost: $MC = \sum_{i=1}^n w_i a_i$ (constant)
- The input-output coefficients $a_i$ are the **technical coefficients** from input-output analysis (Leontief 1951)

**(iv) If $Q = 200P^{-6}$, find profit-maximizing price**

$$\pi(P) = P \cdot Q(P) - c(Q(P)) = P \cdot 200P^{-6} - 5(200P^{-6})$$
$$\pi(P) = 200P^{-5} - 1000P^{-6}$$

FOC:
$$\frac{d\pi}{dP} = -1000P^{-6} + 6000P^{-7} = 0$$
$$6000P^{-7} = 1000P^{-6}$$
$$6000 = 1000P$$
$$P = 6$$

**Profit-maximizing price = \$6.**

Or using MR = MC approach: $Q = 200P^{-6} \Rightarrow P = (Q/200)^{-1/6}$.

$TR = P \cdot Q = Q^{5/6} \cdot 200^{1/6}$, $MR = \frac{5}{6} Q^{-1/6} \cdot 200^{1/6}$.

$MC = 5$. Set MR = MC → $Q^* = 200(6)^{-6} = 200/46656 \approx 0.00429$. $P^* = 6$.

> **Professor's Corner:** The direct $\pi(P)$ maximisation method is faster here and avoids inverting the demand function. However, the MR=MC method is more general and works when the demand function cannot be explicitly inverted. A common mistake is forgetting that the cost function $c(Q) = Q(3p_P + 2p_V)$ uses the *conditional* factor demands, not the production function directly.
>
> → *See also: [Consumer Theory Q6](./answers-consumer-theory.md#q-cons-06) (Negroni — Leontief in consumption), [Topic 2 Q3(v)](#q-demand-03) (Lerner Index pricing)*

---

### Question 7 {#q-prodset-06}

!!! tip "Marking Guide"
    SR Production (2) | SR Factor Demand & Cost (3) | Shutdown & Supply (2) | Returns to Scale (2) | EoS (1) | LR Factor Demand (2) | LR Cost & Supply (2)

!!! success "High-Yield"
    This is the most comprehensive production question, covering every major concept: [SR](GLOSSARY.md#term-sr) vs LR, conditional factor demands, cost functions, shutdown, supply, RTS, EoS, and duality. Master this and you master production theory.

$Q = (KL)^{1/3}$, short-run $K = 64$.

**(i) SR production function**

$$Q = (64 \cdot L)^{1/3} = 64^{1/3} \cdot L^{1/3} = 4L^{1/3}$$

**(ii) SR conditional factor demand for $L$**

Invert SR production function:

$$L = \left(\frac{Q}{4}\right)^3 = \frac{Q^3}{64}$$

**(iii) SR cost function**

$SRTC(Q) = wL + rK = w \cdot \frac{Q^3}{64} + r \cdot 64$.

If $w = 1, r = 1$: $SRTC(Q) = \frac{Q^3}{64} + 64$.

**(iv) Shutdown price**

$AVC(Q) = \frac{wL}{Q} = \frac{wQ^3/64}{Q} = \frac{wQ^2}{64}$.

Shutdown condition: $P < \min AVC$.

$AVC$ increasing in $Q$, $\min AVC$ at $Q = 0$: $AVC(0) = 0$.

Firm shuts down if $P \leq 0$. For any $P > 0$, the firm produces in SR (since fixed cost is sunk).

**More precisely:** shutdown price = $\min AVC = 0$.

**(v) SR supply curve**

From $P = MC$ (above shutdown):

$MC = \frac{dSRTC}{dQ} = \frac{3wQ^2}{64}$.

Set $P = \frac{3wQ^2}{64} \Rightarrow Q = \sqrt{\frac{64P}{3w}}$.

SR supply: $Q^S(P) = \sqrt{\frac{64P}{3w}}$ for $P > 0$ (and $w > 0$).

**(vi) Returns to scale**

$Q(tK, tL) = (tK \cdot tL)^{1/3} = t^{2/3} (KL)^{1/3} = t^{2/3} Q(K, L)$.

Sum of exponents: $\frac{1}{3} + \frac{1}{3} = \frac{2}{3} < 1$.

**Decreasing returns to scale (DRS).**

**(vii) Elasticity of substitution**

For Cobb-Douglas $Q = K^{1/3} L^{1/3}$:

$$\sigma = 1$$

All Cobb-Douglas functions have unitary elasticity of substitution.

**(viii) LR conditional factor demands — Lagrangian derivation (Munoz-Garcia §4.5)**

Set up the Cost Minimization Problem (CMP):

$$\min_{L,K \geq 0} \; wL + rK \quad \text{subject to} \quad (KL)^{1/3} = Q$$

**Lagrangian:**

$$\mathcal{L}(L,K; \lambda) = wL + rK + \lambda[Q - (KL)^{1/3}]$$

**First-order conditions:**

$$\frac{\partial \mathcal{L}}{\partial L} = w - \lambda \cdot \frac{1}{3} K^{1/3} L^{-2/3} = 0 \quad \Rightarrow \quad w = \lambda \cdot MP_L$$

$$\frac{\partial \mathcal{L}}{\partial K} = r - \lambda \cdot \frac{1}{3} K^{-2/3} L^{1/3} = 0 \quad \Rightarrow \quad r = \lambda \cdot MP_K$$

**Tangency condition** (ratio of FOCs):

$$\frac{w}{r} = \frac{MP_L}{MP_K} = \frac{(1/3)K^{1/3}L^{-2/3}}{(1/3)K^{-2/3}L^{1/3}} = \frac{K}{L} = MRTS_{L,K}$$

So $K = \frac{w}{r}L$.

Substitute into production function:

$$Q = \left(\frac{w}{r}L \cdot L\right)^{1/3} = \left(\frac{w}{r}\right)^{1/3} L^{2/3}$$

$$L(w,r,Q) = \left(\frac{r}{w}\right)^{1/2} Q^{3/2}$$

$$K(w,r,Q) = \frac{w}{r}L = \left(\frac{w}{r}\right)^{1/2} Q^{3/2}$$

**Lagrange multiplier = MC:**

$$\lambda = \frac{w}{MP_L} = \frac{w}{(1/3)(K/L)^{1/3}} = \cdots = 3\sqrt{wr} Q^{1/2} = MC$$

This confirms $\lambda = \partial c / \partial q = MC$ as established in Q5.

**(ix) LR cost function**

$$LRTC(Q) = wL + rK = w \cdot \left(\frac{r}{w}\right)^{1/2} Q^{3/2} + r \cdot \left(\frac{w}{r}\right)^{1/2} Q^{3/2}$$
$$= 2\sqrt{wr} \cdot Q^{3/2}$$

**Verifying Shephard's Lemma (dual to Q5):**

$$\frac{\partial LRTC}{\partial w} = \sqrt{\frac{r}{w}} \cdot Q^{3/2} = L(w,r,Q) \quad \checkmark$$

$$\frac{\partial LRTC}{\partial r} = \sqrt{\frac{w}{r}} \cdot Q^{3/2} = K(w,r,Q) \quad \checkmark$$

**Duality insight:** The cost function $c(w,q)$ and the production function $f(z)$ are **dual representations** of the firm's technology. Given $f(z)$, we derive $c(w,q)$ via the CMP. Conversely, given $c(w,q)$ satisfying the four properties (Q5), we can recover $f(z)$ via the identity $f(z) = \min\{q : w \cdot z \geq c(w,q) \; \forall w \gg 0\}$. This duality is analogous to the UMP-EMP duality in consumer theory.

**(x) LR supply curve**

$P = MC$:

$$MC = \frac{dLRTC}{dQ} = 2\sqrt{wr} \cdot \frac{3}{2} Q^{1/2} = 3\sqrt{wr} Q^{1/2}$$

Set $P = 3\sqrt{wr} Q^{1/2}$:

$$Q^S(P) = \frac{P^2}{9wr}$$

**Properties of LR supply:**
- **Upward-sloping**: $dQ^S/dP = 2P/(9wr) > 0$ (due to DRS)
- **Homogeneous of degree zero** in $(w,r)$: doubling both $w$ and $r$ leaves $Q^S$ unchanged ✓
- **Homogeneous of degree 1 in $P$**: doubling $P$ quadruples $Q^S$ (since $Q^S \propto P^2$)

**Exam Tip:** For DRS, LR supply slopes upward. For CRS, LR supply is horizontal at $P = MC$. For [IRS](GLOSSARY.md#term-irs), the firm would not have a well-defined supply curve (natural monopoly — links to Q8 on economies of scale).

> **Professor's Corner:** Part (iv) on the shutdown price is subtle — $\min AVC = 0$ means the firm never shuts down for any positive price (it always covers variable costs at some output). A top answer notes that with fixed costs sunk in the SR, any $P > 0$ justifies production. Part (x) derives the LR supply — note it's upward-sloping (DRS) and homogeneous of degree zero in $(w,r)$ as required. The LR conditional factor demands satisfy Shephard's Lemma — we verified this above. The Lagrangian derivation in (viii) explicitly shows $\lambda = MC$, linking cost minimization to profit maximization. In general equilibrium, the condition $MRTS_L^A = MRTS_L^B$ across firms ensures **production efficiency** (the first welfare theorem) — this firm's input mix choice is a building block of that result.
>
> → *See also: [Topic 3C Q1](#q-compet-01) (industry supply from firm supply), [Topic 4 GE](./answers-ge-game-extern-trade.md#q-edge-03) (production efficiency condition), [Topic 3A Q5](#q-prodset-04) (Shephard's Lemma general proof)*

---

<a id="q-prodset-08"></a>

### Question 8 {#q-prodset-07}

!!! tip "Marking Guide"
    Economies of Scale Identification (5) | Fixed Cost Spreading (4) | Marginal vs Average Cost (3) | Real-World Application (2)

**Starbucks Jumbo (62 oz) vs Trenta (31 oz). Will Jumbo cost twice as much, more, or less?**

**Answer: Less than twice as much.**

Reasoning: Food/beverage production typically exhibits economies of scale in packaging, serving, and overhead. A larger cup uses:
- ~same labor to serve
- ~same overhead (rent, equipment)
- slightly more ingredients (but less than proportional to volume due to fixed preparation steps)
- packaging costs that increase less than proportionally

The firm's average cost declines with output → the marginal cost of the second 31 oz is **less** than the average cost of the first 31 oz.

**Formal [AC](GLOSSARY.md#term-ac)/[MC](GLOSSARY.md#term-mc) relationship (Koutsoyiannis Ch.4, Munoz-Garcia §4.10):**

When there are **economies of scale**, the average cost curve is declining:

$$\frac{dAC(Q)}{dQ} < 0$$

Since $MC = AC + Q \cdot \frac{dAC}{dQ}$, when $AC$ is declining ($dAC/dQ < 0$), we have:

$$MC < AC$$

Conversely, when there are **diseconomies of scale** (DRS, as in Q7), $AC$ is rising and $MC > AC$.

**Worked numerical example:**

Suppose Starbucks has fixed costs $F = \$100$ per hour (rent, equipment, labor) and variable costs $VC(Q) = \$1.50Q$ (ingredients, cup). Then:

$$AC(Q) = \frac{100}{Q} + 1.50, \quad MC = 1.50$$

| Output (oz) | Total Cost | AC | MC |
|:---:|:---:|:---:|:---:|
| 31 (Trenta) | $100 + 46.50 = \$146.50$ | \$4.73/oz | \$1.50 |
| 62 (Jumbo) | $100 + 93 = \$193.00$ | **\$3.11/oz** | \$1.50 |

The Jumbo's AC (\$3.11/oz) is 34% lower than the Trenta's AC (\$4.73/oz). The total cost only rises from \$146.50 to \$193.00 (a 32% increase for a 100% increase in output) — **less than twice as much**.

**The economics:** Fixed costs (\$100) are spread over 62 oz instead of 31 oz. The marginal cost (\$1.50/oz) is constant, but average fixed cost halves from \$3.23/oz (\$100/31) to \$1.61/oz (\$100/62), driving the AC decline.

**Exam Tip:** This tests whether you understand economies of scale intuitively. The key is identifying that fixed costs (labor, rent, equipment) are spread over more output. A formal answer defines economies of scale as $AC(Q)$ decreasing in $Q$, which implies $MC < AC$. In general equilibrium, economies of scale create **natural monopoly** conditions — the first welfare theorem may fail because marginal cost pricing leads to losses (requiring subsidies or price discrimination).

> **Professor's Corner:** This is an intuitive application question — no math required, but the examiner wants to see you use economic reasoning, not common sense. Frame your answer around average cost declining with output: the second 31 oz has lower AC than the first because fixed costs are already covered. A top answer adds that marginal cost is below average cost when there are economies of scale. The numerical example above shows why the Jumbo costs less than twice as much — fixed cost spreading is the key mechanism. Link this to the DRS case in Q7(vii) where AC rises and MC > AC.
>
> → *See also: [Topic 3A Q7(vii)](#q-prodset-06) (DRS — the opposite case), Topic 4 GE (natural monopoly and the failure of the first welfare theorem)*

---

## Topic 3B — Profit Function

---

### Question 1 {#q-profit-01}

!!! tip "Marking Guide"
    Definition (2) | Property Listing (4) | Hotelling's Lemma (4) | Convexity Intuition (2) | Law of Supply (2)

!!! success "High-Yield"
    The profit function is the dual of the cost function. Its convexity in prices (not concavity!) is a classic exam trap. Hotelling's Lemma is the production-side analogue of Roy's Identity.

**Profit function:** $\pi(p) = \max_{y \in Y} p \cdot y$

The value function of the profit maximization problem (PMP). $\pi(p)$ maps price vectors to the maximum attainable profit.

If $Y$ is **closed** and satisfies **free disposal**, the profit function satisfies:

| Property | Meaning |
|----------|---------|
| **1. Homog(1) in $p$** | $\pi(\lambda p) = \lambda \pi(p)$ for $\lambda > 0$. Doubling all prices doubles nominal profit. |
| **2. Convex in $p$** | $\pi(\alpha p + (1-\alpha)p') \leq \alpha \pi(p) + (1-\alpha)\pi(p')$. The firm benefits more from extreme price vectors than balanced ones — convexity reflects option value of adjusting production. |
| **3. Non-decreasing in output prices, non-increasing in input prices** | $\frac{\partial \pi(p)}{\partial p_k} = y_k(p) \geq 0$ if $k$ is an output, $\leq 0$ if $k$ is an input (Hotelling's Lemma). |
| **4. Continuous in $p$** | Small price changes → small profit changes (given $Y$ closed). |

**Hotelling's Lemma:** $\nabla_p \pi(p) = y(p)$ — the supply of output $k$ equals the derivative of the profit function w.r.t. its price.

**Law of Supply:** $\frac{\partial y_k(p)}{\partial p_k} \geq 0$ — supply curves slope upward. Equivalently, $(p - p')(y - y') \geq 0$ for any two price vectors.

---

**Formal Derivation of Hotelling's Lemma (Envelope Theorem)**

Consider the profit maximization problem:

$$\pi(p) = \max_{y \in Y} p \cdot y$$

Let $y(p)$ be the optimal supply correspondence. By definition, $\pi(p) = p \cdot y(p)$. Apply the envelope theorem: differentiate $\pi(p)$ with respect to $p_k$, holding the production plan fixed at its optimum $y(p)$:

$$\frac{\partial \pi(p)}{\partial p_k} = \left. \frac{\partial}{\partial p_k} (p \cdot y) \right|_{y = y(p)} = y_k(p)$$

since $\frac{\partial(p \cdot y)}{\partial p_k} = y_k$ and the indirect effect through $y(p)$ vanishes by first-order optimality (the envelope condition). This gives us:

$$\nabla_p \pi(p) = y(p)$$

**Alternative proof via duality:** The profit function $\pi(p)$ is the support function of the negative production set $-\!Y$, i.e., $\pi(p) = \mu_{-Y}(p) = \min_{y \in Y} p \cdot (-y)$. By the duality theorem for support functions, the gradient of a support function yields the argmin, which here is $-y(p)$. Hence $\nabla_p \pi(p) = y(p)$.

**Economic intuition:** A \$1 increase in the price of output $k$ raises profit by exactly the amount of output $k$ the firm produces, because the firm is already optimizing — any adjustment to the production plan would only have a second-order effect on profit (by the envelope theorem).

---

**Proof of Convexity**

We need to show that for any two price vectors $p, p'$ and $\alpha \in [0,1]$:

$$\pi(\alpha p + (1-\alpha)p') \leq \alpha \pi(p) + (1-\alpha)\pi(p')$$

Let $\bar{p} = \alpha p + (1-\alpha)p'$. Let $y(\bar{p})$ be the optimal production plan at $\bar{p}$. Then:

$$\pi(\bar{p}) = \bar{p} \cdot y(\bar{p}) = \alpha[p \cdot y(\bar{p})] + (1-\alpha)[p' \cdot y(\bar{p})]$$

But by the definition of $\pi(p)$ as the maximum profit at prices $p$:

$$p \cdot y(\bar{p}) \leq \pi(p) \quad \text{and} \quad p' \cdot y(\bar{p}) \leq \pi(p')$$

Substituting:

$$\pi(\bar{p}) \leq \alpha \pi(p) + (1-\alpha)\pi(p')$$

**QED.**

**Second-derivative test:** If $\pi(p)$ is twice-differentiable, an equivalent condition is that the Hessian matrix $D^2 \pi(p)$ is positive semidefinite. From Hotelling's Lemma, $D^2 \pi(p) = Dy(p)$, the derivative of the supply correspondence. The symmetry and positive semidefiniteness of $Dy(p)$ follow from the fact that $y(p)$ is a gradient mapping of a convex function.

**Economic intuition:** Convexity in $p$ means that profit grows more than linearly in output prices. This reflects the firm's ability to **reallocate** production toward relatively more expensive outputs as prices change. If prices are extreme ($p$ vs $p'$), the firm specialises; if prices are averaged, it cannot exploit price differences as effectively, so profit is lower. Contrast this with the cost function $c(w, q)$, which is **concave** in input prices $w$ — when input prices rise, the firm substitutes away from expensive inputs, mitigating the cost increase. The profit function convexity is the **mirror image** of cost function concavity.

As a support function of a convex set, $\pi(p)$ inherits convexity automatically: the support function of any set is convex in its argument, regardless of whether the underlying set is convex.

**Exam Tip:** The profit function is convex (not concave!) in prices. This is the opposite of the cost function (concave in input prices). Don't confuse them.

> **Professor's Corner:** The convexity of $\pi(p)$ reflects the firm's ability to adjust its production plan as prices change — the firm benefits more from extreme price vectors because it can specialise. A top answer explains the economic intuition: a price-taking firm can reallocate resources toward relatively more expensive outputs, so profit grows more than linearly in prices. Contrast this with the cost function, where substitution mitigates cost increases, hence concavity.
>
> → *See also: [Topic 3A Q5](#q-prodset-04) (cost function concavity — the dual), [Topic 3B Q2](#q-profit-02) (MRPT application)*

---

### Question 2 {#q-profit-02}

!!! tip "Marking Guide"
    Setup & Differentiation (4) | Profit FOCs (4) | Substitution (3) | Intuitive Explanation (3)

!!! success "High-Yield"
    This duality result connects production theory (MRPT) with cost theory (MC ratio) and is the foundation for the product-mix efficiency condition in GE.

**Show: $MRPT_{x,y} = MC_x / MC_y$.**

**Proof:**

The transformation function $F(q_x, q_y, z) = 0$ describes the production possibility frontier.

Total differentiate along the frontier ($dF = 0$):

$$\frac{\partial F}{\partial q_x} dq_x + \frac{\partial F}{\partial q_y} dq_y = 0$$

$$MRPT_{x,y} = -\frac{dq_y}{dq_x} = \frac{\partial F/\partial q_x}{\partial F/\partial q_y}$$

Now consider the profit function $\pi = p_x q_x + p_y q_y - c(q_x, q_y)$.

FOCs for profit maximization:

$$\frac{\partial \pi}{\partial q_x} = p_x - \frac{\partial c}{\partial q_x} = 0 \Rightarrow p_x = MC_x$$
$$\frac{\partial \pi}{\partial q_y} = p_y - \frac{\partial c}{\partial q_y} = 0 \Rightarrow p_y = MC_y$$

From the tangency condition of the PMP, at the optimum:

$$MRPT_{x,y} = \frac{p_x}{p_y}$$

Substituting:

$$MRPT_{x,y} = \frac{p_x}{p_y} = \frac{MC_x}{MC_y}$$

**QED.**

**Alternative intuitive proof:** If $MRPT_{x,y} > MC_x/MC_y$, the firm can increase profit by reallocating resources from $y$ to $x$ (the gain in $x$ revenue exceeds the loss in $y$ revenue per unit of resource shift). Conversely, if $MRPT_{x,y} < MC_x/MC_y$, shifting resources from $x$ to $y$ raises profit. Only equality is optimal.

---

**Connection to General Equilibrium Product-Mix Efficiency**

The condition $MRPT = MC_x/MC_y$ is the **production-side** counterpart of the GE efficiency condition. In a competitive GE, profit-maximizing firms set $p_x = MC_x$ and $p_y = MC_y$, and utility-maximizing consumers set $MRS = p_x/p_y$. Combining these:

$$MRPT_{x,y} = \frac{MC_x}{MC_y} = \frac{p_x}{p_y} = MRS_{x,y}$$

This chain of equalities — **$MRPT = MRS$** — is the **product-mix efficiency** condition for a Pareto-optimal allocation in a production economy. It ensures that the rate at which the economy can transform $y$ into $x$ (on the PPF) equals the rate at which consumers are willing to substitute $x$ for $y$. Any deviation signals a potential welfare improvement through reallocation.

> **Exam Insight:** The chain $MRPT = MC_x/MC_y = p_x/p_y = MRS$ is one of the most powerful connections in micro theory — it ties together production, cost, profit maximization, and consumer choice into a single efficiency condition.

**Exam Tip:** This is a key duality result linking production theory with cost theory. The MRPT equals the ratio of marginal costs, which also equals the ratio of output prices under profit maximization.

> **Professor's Corner:** A complete answer has two parts: (i) the technical derivation via total differentiation of $F(y)=0$ and the PMP first-order conditions, and (ii) the intuitive explanation — if $MRPT > MC_x/MC_y$, reallocating resources from $y$ to $x$ raises revenue more than it raises cost. The connection to the GE efficiency condition $MRPT = MRS$ (product-mix efficiency) is what separates A from B answers.
>
> → *See also: [Topic 3A Q1](#q-prodset-01) (MRPT definition), [Topic 3A Q5](#q-prodset-04) (cost function properties)*

---

## Topic 3C — Competitive Industry

---

### Question 1 {#q-compet-01}

!!! tip "Marking Guide"
    SR Firm Supply (2) | Market Equilibrium (3) | Tax Incidence Computation (4) | DWL Calculation (3) | Welfare Summary (2)

!!! success "High-Yield"
    Competitive equilibrium with taxation is the most commonly examined numerical question in this topic. Tax incidence and DWL are almost guaranteed.

1,000 identical firms. $C_{SR}(q) = 0.5q^2 + 2q + 80$.

**(i) SR supply per firm**

$$MC = \frac{dC}{dq} = q + 2$$

Shutdown condition: $P \geq \min AVC$.

$$AVC = \frac{0.5q^2 + 2q}{q} = 0.5q + 2$$

$AVC$ minimized at $q = 0$: $\min AVC = 2$.

Supply: $P = MC \Rightarrow P = q + 2 \Rightarrow q(P) = P - 2$ for $P \geq 2$.

**(ii) Industry SR supply**

$$Q_S(P) = 1000 \times q(P) = 1000(P - 2) \text{ for } P \geq 2$$

**(iii) Market equilibrium**

Market demand: $Q_D(P) = 44,000 - 1000P$.

Set $Q_S = Q_D$:

$$1000(P - 2) = 44,000 - 1000P$$
$$1000P - 2000 = 44,000 - 1000P$$
$$2000P = 46,000$$
$$P = 23$$

$$Q = 1000(23 - 2) = 21,000$$

**Equilibrium: $P^* = 23$, $Q^* = 21,000$.**

Each firm produces $q = 21,000/1000 = 21$.

Profit per firm:

$$\pi = TR - TC = 23(21) - [0.5(21)^2 + 2(21) + 80]$$
$$= 483 - [220.5 + 42 + 80] = 483 - 342.5 = 140.5$$

**Each firm earns $\pi = 140.5$.**

**(iv) \$20/unit tax: new prices, quantity**

Tax shifts supply: effective price to firms is $P - t$.

Supply with tax: $P - 20 = q + 2 \Rightarrow q = P - 22$.

$$Q_S(P) = 1000(P - 22) \text{ for } P \geq 22$$

Set $Q_S = Q_D$:

$$1000(P - 22) = 44,000 - 1000P$$
$$1000P - 22,000 = 44,000 - 1000P$$
$$2000P = 66,000$$
$$P = 33$$

$$Q = 1000(33 - 22) = 11,000$$

**After tax: $P_b = 33$ (buyer price), $P_s = 13$ (seller price), $Q = 11,000$.**

Tax revenue = $t \times Q = 20 \times 11,000 = 220,000$.

Each firm produces $q = 11,000/1000 = 11$.

After-tax profit per firm: $\pi = 13(11) - [0.5(11)^2 + 2(11) + 80] = 143 - [60.5 + 22 + 80] = 143 - 162.5 = -19.5$.

Firms make losses in SR (but continue since $P_s = 13 > \min AVC = 2$).

**(v) Welfare cost of tax (DWL)**

**Method 1 — Triangle formula:**

$$DWL = \frac{1}{2} \times t \times \Delta Q = \frac{1}{2} \times 20 \times (21,000 - 11,000) = \frac{1}{2} \times 20 \times 10,000 = 100,000$$

**Method 2 — Area between demand and supply:**

$$\int_{11,000}^{21,000} [D(Q) - S(Q)] dQ = 100,000$$

**Deadweight loss = 100,000.**

**Exam Tip:** For linear supply and demand, DWL is always the triangle $\frac{1}{2} \times t \times \Delta Q$. The tax incidence depends on relative elasticities. Here both supply and demand slopes are equal ($\pm 1000$), so the tax burden is split evenly ($P$ rises by \$10 for buyers, falls by \$10 for sellers).

> **Professor's Corner:** The most common mistake is forgetting the shutdown condition — check $P \ge \min AVC$ before using $P = MC$ as the supply curve. Another frequent error: computing DWL as $\frac{1}{2} \times t \times Q_{after}$ instead of $\frac{1}{2} \times t \times \Delta Q$. The per-firm loss of $-\$19.5$ after tax is a key insight — firms produce despite losses because $P_s = 13 > \min AVC = 2$ (they are covering variable costs and contributing to fixed costs in the SR).
>
> → *See also: [Topic 3A Q7(iv)](#q-prodset-06) (shutdown condition), [Topic 3C Q2](#q-compet-02) (Walras' Law — GE extension)*

| Measure | Without Tax | With Tax |
|---------|-------------|----------|
| $P$ (buyer) | 23 | 33 |
| $P$ (seller) | 23 | 13 |
| $Q$ | 21,000 | 11,000 |
| Per-firm $q$ | 21 | 11 |
| Per-firm $\pi$ | 140.5 | −19.5 |
| Tax revenue | 0 | 220,000 |
| DWL | 0 | 100,000 |

---

**(vi) Long-Run Equilibrium After Tax**

In the SR after tax, firms earn $\pi = -19.5$ (losses). In the LR, firms exit until the remaining firms earn zero economic profit. The LR equilibrium condition for a competitive industry with free entry/exit is:

$$P = \min LAC$$

We need the LR cost function. Since the SR cost function $C_{SR}(q) = 0.5q^2 + 2q + 80$ has fixed cost 80, the LR (where all costs are variable) allows firms to choose plant size optimally. If the technology exhibits **constant returns to scale** at the firm level (the LRAC is flat), the LR supply is horizontal at $\min LAC$.

However, given the SR cost structure, the LR equilibrium with tax proceeds as follows:

**Step 1 — Zero-profit condition:** In LR equilibrium, each firm must earn $\pi = 0$:

$$P_s \cdot q - (0.5q^2 + 2q + 80) = 0$$

where $P_s$ is the seller price (post-tax price received by firms).

**Step 2 — Optimal output per firm:** Each firm produces where $P_s = MC$:

$$P_s = q + 2 \Rightarrow q = P_s - 2$$

**Step 3 — Substitute into zero-profit condition:**

$$P_s(P_s - 2) - [0.5(P_s - 2)^2 + 2(P_s - 2) + 80] = 0$$

$$P_s^2 - 2P_s - [0.5(P_s^2 - 4P_s + 4) + 2P_s - 4 + 80] = 0$$

$$P_s^2 - 2P_s - [0.5P_s^2 - 2P_s + 2 + 2P_s - 4 + 80] = 0$$

$$P_s^2 - 2P_s - [0.5P_s^2 + 78] = 0$$

$$0.5P_s^2 - 2P_s - 78 = 0$$

$$P_s^2 - 4P_s - 156 = 0$$

$$P_s = \frac{4 \pm \sqrt{16 + 624}}{2} = \frac{4 \pm \sqrt{640}}{2} = \frac{4 \pm 8\sqrt{10}}{2} = 2 \pm 4\sqrt{10}$$

Since $P_s > 0$: $P_s = 2 + 4\sqrt{10} \approx 2 + 12.65 = 14.65$.

**Step 4 — Buyer price:** $P_b = P_s + t = 14.65 + 20 = 34.65$.

**Step 5 — Market quantity:** $Q_D = 44,000 - 1000(34.65) = 44,000 - 34,650 = 9,350$.

**Step 6 — Per-firm output:** $q = P_s - 2 = 14.65 - 2 = 12.65$.

**Step 7 — Number of firms:** $N = Q/q = 9,350 / 12.65 \approx 739$ firms.

| LR Measure | Pre-tax | Post-tax |
|-----------|---------|---------|
| $P_b$ | 23 | 34.65 |
| $P_s$ | 23 | 14.65 |
| $Q$ | 21,000 | 9,350 |
| Per-firm $q$ | 21 | 12.65 |
| Per-firm $\pi$ | 140.5 | 0 |
| Number of firms | 1,000 | 739 |
| Tax revenue | 0 | $20 \times 9,350 = 187,000$ |
| DWL | 0 | $\frac{1}{2} \times 20 \times (21,000 - 9,350) = 116,500$ |

**Key insight:** In the LR, firms exit (1,000 → 739) until remaining firms earn zero profit. The DWL **increases** from 100,000 (SR) to 116,500 (LR) because the supply curve becomes more elastic in the LR (firms can exit), amplifying the quantity distortion. The tax burden now falls more heavily on consumers: $P_b$ rises by \$11.65 (from 23 to 34.65) while $P_s$ falls by \$8.35 (from 23 to 14.65), compared to the SR where the burden was split evenly (\$10 each).

> **Professor's Corner:** This LR calculation is a common extension in competitive equilibrium questions. The key intuition: in the SR, firms absorb part of the tax through losses; in the LR, firms exit to restore zero profit, passing more of the tax burden to consumers. The DWL in the LR exceeds the SR DWL because the long-run supply response (entry/exit) makes the effective supply more elastic. Notice that $P_s$ in LR equilibrium (\$14.65) lies between the SR pre-tax price (\$23) and the SR post-tax seller price (\$13) — entry/exit partially restores seller revenues but not completely.

---

**(vii) Formal Tax Incidence Decomposition (Elasticity Approach)**

The tax burden split between consumers and producers depends on the relative elasticities of supply and demand. Let $\varepsilon_S$ and $\varepsilon_D$ be the price elasticities of supply and demand evaluated at the pre-tax equilibrium.

**Incidence formula:**

$$\frac{P_b - P^*}{t} = \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D} \quad \text{(consumer share)}$$

$$\frac{P^* - P_s}{t} = \frac{-\varepsilon_D}{\varepsilon_S - \varepsilon_D} \quad \text{(producer share)}$$

where $P^*$ is the pre-tax equilibrium price, $P_b = P^* + \Delta P_b$ is the post-tax buyer price, and $P_s = P^* - \Delta P_s$ is the post-tax seller price.

**Derivation:** In equilibrium after a per-unit tax $t$, we have $Q_D(P_b) = Q_S(P_s)$ where $P_b = P_s + t$. Totally differentiate:

$$Q_D'(P_b) \, dP_b = Q_S'(P_s) \, dP_s$$

Since $dP_b = dP_s + dt$, and evaluating at the pre-tax equilibrium where $P_b = P_s = P^*$:

$$Q_D'(P^*) (dP_s + dt) = Q_S'(P^*) \, dP_s$$

Rearranging:

$$dP_s[Q_S'(P^*) - Q_D'(P^*)] = -Q_D'(P^*) \, dt$$

$$dP_s = -\frac{Q_D'(P^*)}{Q_S'(P^*) - Q_D'(P^*)} \, dt$$

Converting to elasticities ($\varepsilon_D = P^* Q_D'(P^*)/Q^*$, $\varepsilon_S = P^* Q_S'(P^*)/Q^*$):

$$\frac{dP_s}{dt} = -\frac{\varepsilon_D}{\varepsilon_S - \varepsilon_D}$$

And for buyer price:

$$\frac{dP_b}{dt} = 1 + \frac{dP_s}{dt} = 1 - \frac{\varepsilon_D}{\varepsilon_S - \varepsilon_D} = \frac{\varepsilon_S}{\varepsilon_S - \varepsilon_D}$$

**Application to our numerical example:**

At the pre-tax equilibrium ($P^* = 23$, $Q^* = 21,000$):

$$Q_S(P) = 1000(P - 2) \Rightarrow Q_S' = 1000 \Rightarrow \varepsilon_S = \frac{23}{21,000} \times 1000 = \frac{23}{21} \approx 1.095$$

$$Q_D(P) = 44,000 - 1000P \Rightarrow Q_D' = -1000 \Rightarrow \varepsilon_D = \frac{23}{21,000} \times (-1000) = -\frac{23}{21} \approx -1.095$$

Since $|\varepsilon_S| = |\varepsilon_D|$, the tax burden is split evenly:

$$\frac{P_b - P^*}{t} = \frac{1.095}{1.095 - (-1.095)} = \frac{1.095}{2.19} = 0.5$$

Hence $P_b = P^* + 0.5t = 23 + 10 = 33$, and $P_s = P^* - 0.5t = 23 - 10 = 13$, confirming our numerical result.

> **Exam Insight:** When supply and demand have equal slope magnitudes (as in this symmetric case), elasticities are equal in absolute value, and the tax burden is shared equally regardless of the absolute elasticities. When $|\varepsilon_S| > |\varepsilon_D|$, consumers bear more of the tax; when $|\varepsilon_D| > |\varepsilon_S|$, producers bear more. In the limiting cases: perfectly inelastic demand ($\varepsilon_D = 0$) → consumers bear all; perfectly inelastic supply ($\varepsilon_S = 0$) → producers bear all.

---

**(viii) DWL Formula Derivation**

For linear demand and supply, the deadweight loss of a per-unit tax $t$ is:

$$DWL = \frac{1}{2} \times t \times \Delta Q$$

**Derivation from Marshallian surplus:** The change in total surplus (consumer surplus + producer surplus + tax revenue) from introducing a tax is:

$$\Delta W = \Delta CS + \Delta PS + \Delta GR$$

where $CS$ is consumer surplus, $PS$ producer surplus, and $GR$ government revenue.

For a small tax $t$, the change in quantity is $\Delta Q = Q^* - Q_t$. The reduction in consumer surplus is the trapezoid bounded by prices $P^*$ and $P_b$ and quantities $Q_t$ and $Q^*$:

$$\Delta CS = -\int_{P^*}^{P_b} Q_D(p) \, dp = -\left[ P_b - P^* \right] \cdot \frac{Q^* + Q_t}{2}$$

The reduction in producer surplus is:

$$\Delta PS = -\int_{P_s}^{P^*} Q_S(p) \, dp = -\left[ P^* - P_s \right] \cdot \frac{Q^* + Q_t}{2}$$

Government revenue gain: $\Delta GR = t \cdot Q_t$.

Total welfare change:

$$\Delta W = -\frac{(P_b - P^*)(Q^* + Q_t)}{2} - \frac{(P^* - P_s)(Q^* + Q_t)}{2} + tQ_t$$

Since $t = (P_b - P^*) + (P^* - P_s)$:

$$\Delta W = -\frac{t(Q^* + Q_t)}{2} + tQ_t = -\frac{t(Q^* - Q_t)}{2} = -\frac{1}{2} \cdot t \cdot \Delta Q$$

The absolute value is the DWL triangle:

$$DWL = \frac{1}{2} \cdot t \cdot (Q^* - Q_t)$$

**More general DWL formula (using elasticities):** Express $\Delta Q$ in terms of elasticities:

$$\Delta Q \approx \frac{\varepsilon_S \varepsilon_D}{\varepsilon_S - \varepsilon_D} \cdot \frac{t}{P^*} \cdot Q^*$$

Substituting into the DWL formula:

$$DWL \approx \frac{1}{2} \cdot \frac{\varepsilon_S \varepsilon_D}{\varepsilon_S - \varepsilon_D} \cdot \frac{t^2}{P^*} \cdot Q^*$$

This shows that DWL is **quadratic in the tax rate** $t$ — doubling the tax quadruples the DWL. This is the familiar result that the marginal deadweight loss of taxation increases with the tax rate (the Laffer curve logic).

**Application:** With $t = 20$, $P^* = 23$, $Q^* = 21,000$, $\varepsilon_S = 23/21$, $\varepsilon_D = -23/21$:

$$DWL = \frac{1}{2} \times \frac{(23/21)(-23/21)}{(23/21) - (-23/21)} \times \frac{400}{23} \times 21,000$$

$$= \frac{1}{2} \times \frac{-529/441}{46/21} \times \frac{400}{23} \times 21,000$$

Simplifying gives 100,000, matching our earlier result.

> **Professor's Corner:** The elasticity-form DWL formula is the gold standard for welfare analysis in public finance. It shows that DWL depends on (i) the square of the tax rate, (ii) the relative elasticities, and (iii) the size of the market. This is why economists recommend broad-based, low-rate taxes — they minimise the quadratic distortion. The formula also explains why DWL is larger in the LR: LR elasticities are typically larger than SR elasticities, amplifying the quantity response.
>
> → *See also: [Welfare answers Q4](./answers-welfare.md#q-welfare-04) (DWL of taxation), [Topic 3C Q2](#q-compet-02) (Walras' Law)*

---

### Question 2 {#q-compet-02}

!!! tip "Marking Guide"
    Walras' Law Statement (2) | Algebraic Substitution (5) | Price Ratio Derivation (5) | Consistency Check (2)

!!! success "High-Yield"
    Walras' Law is the central organising principle of general equilibrium. Knowing how to use it to find equilibrium price ratios is essential for GE questions.

**Three-good world:** Walras' law: $p \cdot Z(p) = 0$ for all $p$.

Given $Z_2(p) = -3 + \frac{p_3}{p_2} + \frac{p_1}{p_2}$, $Z_3(p) = \frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7$.

**(i) Find $Z_1$**

From Walras' law: $p_1 Z_1 + p_2 Z_2 + p_3 Z_3 = 0$.

$$p_1 Z_1 = -p_2 Z_2 - p_3 Z_3$$
$$Z_1 = -\frac{p_2}{p_1} Z_2 - \frac{p_3}{p_1} Z_3$$

Substituting:

$$Z_1 = -\frac{p_2}{p_1}\left(-3 + \frac{p_3}{p_2} + \frac{p_1}{p_2}\right) - \frac{p_3}{p_1}\left(\frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7\right)$$

$$= \frac{3p_2}{p_1} - \frac{p_3}{p_1} - 1 - 3 - \frac{4p_2}{p_1} + \frac{7p_3}{p_1}$$

$$= \left(\frac{3p_2}{p_1} - \frac{4p_2}{p_1}\right) + \left(-\frac{p_3}{p_1} + \frac{7p_3}{p_1}\right) + (-1 - 3)$$

$$= -\frac{p_2}{p_1} + \frac{6p_3}{p_1} - 4$$

$$Z_1(p) = -4 + \frac{6p_3 - p_2}{p_1}$$

**(ii) Find market-clearing $p_2/p_1$, $p_3/p_1$**

Set $Z_1 = Z_2 = Z_3 = 0$ (we only need 2 equations, Walras' law gives third).

From $Z_2 = 0$:

$$-3 + \frac{p_3}{p_2} + \frac{p_1}{p_2} = 0 \Rightarrow \frac{p_3}{p_2} + \frac{p_1}{p_2} = 3$$

Let $r_2 = p_2/p_1$, $r_3 = p_3/p_1$. Then $p_3/p_2 = r_3/r_2$ and $p_1/p_2 = 1/r_2$.

Equation for good 2: $\frac{r_3}{r_2} + \frac{1}{r_2} = 3 \Rightarrow r_3 + 1 = 3r_2$ ... (1)

From $Z_3 = 0$:

$$\frac{3p_1}{p_3} + \frac{4p_2}{p_3} - 7 = 0 \Rightarrow \frac{3}{r_3} + \frac{4r_2}{r_3} = 7 \Rightarrow 3 + 4r_2 = 7r_3$$ ... (2)

Substitute (1) into (2): $3 + 4r_2 = 7(3r_2 - 1)$

$$3 + 4r_2 = 21r_2 - 7$$
$$10 = 17r_2$$
$$r_2 = \frac{10}{17}$$

From (1): $r_3 = 3r_2 - 1 = 3 \cdot \frac{10}{17} - 1 = \frac{30}{17} - 1 = \frac{13}{17}$.

**Market-clearing price ratios:**

$$\frac{p_2}{p_1} = \frac{10}{17}, \quad \frac{p_3}{p_1} = \frac{13}{17}$$

**Check with $Z_1 = 0$:**

$Z_1 = -4 + \frac{6r_3 - r_2}{1} = -4 + 6\cdot\frac{13}{17} - \frac{10}{17} = -4 + \frac{78}{17} - \frac{10}{17} = -4 + \frac{68}{17} = -4 + 4 = 0$ ✓

---

**Why Walras' Law is Fundamental to General Equilibrium Theory**

Walras' Law, $p \cdot Z(p) = 0$, is the cornerstone of general equilibrium analysis for three reasons:

1. **Existence proof foundation:** A Walrasian equilibrium exists if the excess demand function $Z(p)$ is continuous and satisfies Walras' Law (plus homogeneity of degree zero). The standard existence proof (Arrow-Debreu, 1954) uses Brouwer's or Kakutani's fixed-point theorem on a simplex of normalized prices — Walras' Law guarantees that the mapping from prices to excess demands stays within the simplex. Without Walras' Law, the fixed-point argument collapses.

2. **Redundant equation property:** In an $L$-good Walrasian system, if $L-1$ markets clear, the $L$-th market clears automatically. This means we only need to solve $L-1$ independent market-clearing equations for $L-1$ relative prices. This is precisely what we exploited above: we solved for $p_2/p_1$ and $p_3/p_1$ using $Z_2 = 0$ and $Z_3 = 0$, and verified $Z_1 = 0$ as a consistency check.

3. **Counting equations and unknowns:** Walras set up a system of simultaneous equations describing the economy. Without Walras' Law, the system appears to have $L$ equations in $L$ price unknowns, suggesting a unique solution. Walras' Law reveals that one equation is **redundant**, leaving $L-1$ independent equations for $L-1$ relative prices. The absolute price level is indeterminate — this is the **numeraire indeterminacy**.

**The Numeraire and Relative Prices**

Because excess demand functions are homogeneous of degree zero ($Z(\lambda p) = Z(p)$ for all $\lambda > 0$), only **relative prices** matter. This has two implications:

- We can normalize one price to unity, $p_1 = 1$, making good 1 the **numeraire**. All prices are then expressed relative to it.
- The equilibrium concept determines price **ratios**, not absolute price levels. In our example, $p_2/p_1 = 10/17$ and $p_3/p_1 = 13/17$ — consistent with $p_1$ being any positive number.

**Why only relative prices matter:** If all prices double, every consumer's budget constraint $p \cdot x_i = p \cdot e_i$ scales proportionally, leaving the feasible set unchanged. Real allocations depend only on relative prices, not on the nominal scale.

> **Key insight:** The [numeraire](GLOSSARY.md#term-numeraire) indeterminacy is not a flaw — it reflects the economic reality that only relative prices allocate resources. Money (as a medium of exchange, not just a numeraire) is needed to pin down the absolute price level, which is why monetary theory must be integrated into [GE](GLOSSARY.md#term-ge) models to determine nominal prices.

**Connection to the GE Existence Proof**

Arrow and Debreu (1954) proved that a competitive equilibrium exists under the following conditions:
- Continuous, strictly quasi-concave utility functions (or convex, continuous preferences)
- Closed, convex production sets with free disposal
- Strictly positive endowments

The proof constructs a continuous mapping from the price simplex to itself, using Walras' Law to ensure the mapping stays within the domain. A fixed point of this mapping is a price vector where $Z(p^*) \leq 0$ (no excess demand). Walras' Law then converts this to $Z(p^*) = 0$ (all markets clear exactly).

> **Exam Insight:** Walras' Law is not just an algebraic identity — it is a deep economic statement about the interdependence of markets. In a decentralized market economy, if all but one market are in equilibrium, the last must also be in equilibrium. This is because aggregate expenditure must equal aggregate income (the circular flow). A top answer connects Walras' Law to the budget constraints of all agents: summing individual budget constraints $p \cdot x_i = p \cdot e_i$ across all consumers yields $p \cdot \sum x_i = p \cdot \sum e_i$, which is exactly $p \cdot Z(p) = 0$.

**Exam Tip:** In a 3-good Walrasian system, you only need to solve 2 market-clearing equations. The third is automatically satisfied by Walras' law. Normalize $p_1 = 1$ (numeraire) to simplify.

> **Professor's Corner:** Top answers follow a clear three-step process: (1) write Walras' Law explicitly, (2) solve any two market-clearing conditions for price ratios, (3) verify the third market clears automatically. The most common error is algebraic: sign mistakes when substituting $Z_2$ and $Z_3$ into the Walras' Law identity. Always check your solution by verifying $Z_1 = 0$ with the computed ratios.
>
> → *See also: [GE answers Q8](./answers-ge-game-extern-trade.md#q-edge-08) (Walras' Law in GE context), [Topic 3C Q1](#q-compet-01) (partial equilibrium — the contrast)*

---

## 🔗 See also

| File | Related Content |
|------|----------------|
| [Answers: Consumer Theory](./answers-consumer-theory.md) | Walrasian demand (CT 1B.Q1), indirect utility (CT 1B.Q2), EMP (CT 1B.Q3), homogeneity (CT 1B.Q4–Q5) — *foundation for all demand analysis* |
| [Answers: Welfare](./answers-welfare.md) | CV/EV/CS (WF Q1–Q5), tax incidence & DWL (WF 5B.Q4), competition → SW max (WF 5B.Q8) — *DWL and producer surplus used in welfare assessment* |
| [Answers: GE, Game Theory & Trade](./answers-ge-game-extern-trade.md) | Walras' Law (GE 6B.Q8) — *same question cross-listed*; tariff DWL (GE 9.Q1) — *same DWL = ½ × t × ΔQ applied to trade* |
| [Formula Reference](./basics.md) | Production & costs, Lerner index, returns to scale, profit function |
| [Equation Explainer](./EQUATION-EXPLAINER.md) | Elasticities, production, cost minimization explained in plain English |
| [Cross-Reference Map](./answers-cross-reference.md) | Technique map, production chain, cost-profit duality |
| [Study Roadmap](./STUDY-ROADMAP.md) | 10-day study plan (production covered Days 4–5) |
| [Glossary](./GLOSSARY.md) | All abbreviations (EoS, MRTS, MRPT, CRTS/DRTS/IRTS, Lerner) |

> **End of answers.** Covers all questions from Topics 2, 3A, 3B, 3C.
