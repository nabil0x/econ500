# Microeconomics — MSc Exam Formula Reference

> **Quick navigation:** [answers-cross-reference.md](./answers-cross-reference.md) (full technique/dependency map) · [ANSWERS-INDEX.md](./ANSWERS-INDEX.md) (all answer files) · [GLOSSARY.md](./GLOSSARY.md) (term definitions) · [EQUATION-EXPLAINER.md](./EQUATION-EXPLAINER.md) (plain-English explanations) · [STUDY-ROADMAP.md](./STUDY-ROADMAP.md) (10-day study plan)
>
> Each formula below links to the answer file where it is derived and used. Click any **[blue link](./answers-consumer-theory.md)** to jump to the relevant question.

## 1 UMP ↔ EMP Duality

**UMP:** $\max_{x\ge 0} u(x)$ s.t. $p\cdot x \le w$
**EMP:** $\min_{x\ge 0} p\cdot x$ s.t. $u(x)\ge u$

| UMP (Primal) | EMP (Dual) |
|---|---|
| [Walrasian demand](./answers-consumer-theory.md#q-cons-1b-01) $x(p,w)$ | [Hicksian demand](./answers-consumer-theory.md#q-cons-1b-03) $h(p,u)$ |
| [Indirect utility](./answers-consumer-theory.md#q-cons-1b-02) $v(p,w)=\max u(x)$ s.t. $p\cdot x\le w$ | [Expenditure function](./answers-consumer-theory.md#q-cons-1b-03) $e(p,u)=\min p\cdot x$ s.t. $u(x)\ge u$ |

**Duality Identities:**
1. $e\bigl(p,\;v(p,w)\bigr)=w$
2. $v\bigl(p,\;e(p,u)\bigr)=u$
3. $h(p,u)=x\bigl(p,\;e(p,u)\bigr)$
4. $x(p,w)=h\bigl(p,\;v(p,w)\bigr)$

**Key Results:**
- [Roy's identity](./answers-consumer-theory.md#q-cons-1b-02): $\displaystyle x_k(p,w)=-\frac{\partial v(p,w)/\partial p_k}{\partial v(p,w)/\partial w}$
- [Shephard's lemma](./answers-consumer-theory.md#q-cons-1b-03): $\displaystyle h_k(p,u)=\frac{\partial e(p,u)}{\partial p_k}$
- [Slutsky equation](./answers-consumer-theory.md#q-cons-1b-04): $\displaystyle\frac{\partial x_k}{\partial p_j}=\underbrace{\frac{\partial h_k}{\partial p_j}}_{\text{SE}}\;-\;\underbrace{x_j\frac{\partial x_k}{\partial w}}_{\text{IE}}$
- Slutsky elasticity form: $\varepsilon_{kj}=\varepsilon_{kj}^h-s_j\varepsilon_{kw}$ with $s_j=p_jx_j/w$
- [Slutsky matrix](./answers-consumer-theory.md#q-cons-1b-04) $S(p,w)\equiv D_ph(p,u)$: NSD, symmetric, $S(p,w)p=0$

---

## 2 Properties Checklist

### Consumer & Utility Functions

| Function | Homogeneity | Monotonicity | Curvature | Other |
|---|---|---|---|---|
| $x(p,w)$ | HD0: $x(tp,tw)=x(p,w)$ | [Walras' law](./answers-consumer-theory.md#q-cons-1b-04) $p\cdot x=w$ | — | Slutsky $S$ [NSD, symmetric](./answers-consumer-theory.md#q-cons-1b-04) |
| $h(p,u)$ | HD0: $h(tp,u)=h(p,u)$ | $u\bigl(h(p,u)\bigr)=u$ | $D_ph$ NSD, symmetric | $S\equiv D_ph$ |
| $v(p,w)$ | HD0: $v(tp,tw)=v(p,w)$ | $\uparrow w,\;\downarrow p_k$ | Quasiconvex in $(p,w)$ | [Continuous](./answers-consumer-theory.md#q-cons-05) |
| $e(p,u)$ | HD1: $e(tp,u)=t\,e(p,u)$ | $\uparrow p_k,\;\uparrow u$ | [Concave](./answers-consumer-theory.md#q-cons-1b-03) in $p$ | Continuous |

### Production & Cost Functions

| Function | Homogeneity | Monotonicity | Curvature | Key Lemma |
|---|---|---|---|---|
| $\pi(p,w)$ | HD1: $\pi(tp,tw)=t\pi(p,w)$ | $\uparrow p,\;\downarrow w_i$ | [Convex](./answers-demand-production.md#q-profit-01) in $(p,w)$ | [Hotelling](./answers-demand-production.md#q-profit-01): $y=\partial\pi/\partial p,\;z_i=-\partial\pi/\partial w_i$ |
| $c(w,y)$ | HD1: $c(tw,y)=t\,c(w,y)$ | $\uparrow w_i,\;\uparrow y$ | [Concave](./answers-demand-production.md#q-prodset-05) in $w$ | [Shephard](./answers-demand-production.md#q-prodset-05): $z_i=\partial c/\partial w_i$ |

---

## 3 Demand Elasticities

> Elasticities are a core exam topic (Topic 2). All formulas derived in [DP 2 Q1–Q3](./answers-demand-production.md#q-demand-01).

### Point & Arc Elasticity

$$\varepsilon_{X,P} = \frac{\partial X}{\partial P} \cdot \frac{P}{X} = \frac{\% \Delta X}{\% \Delta P} \qquad
\varepsilon_{X,P}^{\text{arc}} = \frac{\Delta X}{\Delta P} \cdot \frac{P_1 + P_2}{X_1 + X_2}$$

**Log-linear (constant elasticity) demand:** $X = \alpha P_X^\gamma P_Z^\delta P_W^\varepsilon I^\eta$  
Exponents are **directly the elasticities**: $\gamma = \varepsilon_{X,P_X},\ \delta = \varepsilon_{X,P_Z},\ \varepsilon = \varepsilon_{X,P_W},\ \eta = \varepsilon_{X,I}$  
(See [GLOSSARY](./GLOSSARY.md#term-elasticity) · [→ explainer](./EQUATION-EXPLAINER.md#eq-elasticities))

### Classification Tables

| Own-Price $|\varepsilon|$ | Label | $P\downarrow$ ⇒ Expenditure |
|---|---|---|
| $>1$ | Elastic | ↑ (revenue rises) |
| $=1$ | Unit elastic | Unchanged (revenue max) |
| $<1$ | Inelastic | ↓ (revenue falls) |

| Income $\varepsilon_{X,I}$ | Label |
|---|---|
| $>1$ | Luxury (income-elastic normal) |
| $0<\cdot<1$ | Necessity (income-inelastic normal) |
| $<0$ | Inferior good | ([→ Glossary](./GLOSSARY.md#term-income-elasticity))

| Cross-price $\varepsilon_{X,P_Y}$ | Label |
|---|---|
| $>0$ | Gross substitutes ([→](./GLOSSARY.md#term-gross-substitutes)) |
| $<0$ | Gross complements ([→](./GLOSSARY.md#term-gross-substitutes)) |

### Marginal Revenue & Elasticity

$$MR = P\left(1 + \frac{1}{\varepsilon}\right) = P\left(1 - \frac{1}{|\varepsilon|}\right)$$

- Elastic region ($|\varepsilon|>1$): $MR>0$ — price cut raises revenue  
- Inelastic region ($|\varepsilon|<1$): $MR<0$ — price cut lowers revenue  
- Unit elastic ($|\varepsilon|=1$): $MR=0$ — revenue maximised  
- **See:** [DP 2.Q1](./answers-demand-production.md#q-demand-01) (derivation), [DP 2.Q3](./answers-demand-production.md#q-demand-03) ([Lerner index](./GLOSSARY.md#term-lerner-index))

### Slutsky in Elasticity Form

$$\varepsilon_{x_k,p_j} = \varepsilon_{x_k,p_j}^h - s_j\,\varepsilon_{x_k,w} \qquad s_j = p_j x_j / w$$

where $\varepsilon^h$ is the Hicksian (compensated) elasticity. ([→ Glossary](./GLOSSARY.md#term-slutsky-equation) · [→ DP 2 Q1](./answers-demand-production.md#q-demand-01))

**See:** [DP 2](./answers-demand-production.md#q-demand-01) (elasticity concepts, MR, revenue test), [DP 2.Q3](./answers-demand-production.md#q-demand-03) (Lerner index application) ([→ Glossary](./GLOSSARY.md#term-lerner-index))

---

## 4 Workhorse Utility Forms

### [Cobb-Douglas](./answers-consumer-theory.md#q-cons-1b-01) $u(x)=\prod_{i=1}^n x_i^{\alpha_i},\;\sum\alpha_i=1$ ([→ Glossary](./GLOSSARY.md#term-cd))
- $x_k(p,w)=\alpha_k w/p_k$
- $v(p,w)=w\prod_{k=1}^n\bigl(\alpha_k/p_k\bigr)^{\alpha_k}$
- $e(p,u)=u\prod_{k=1}^n\bigl(p_k/\alpha_k\bigr)^{\alpha_k}$
- **Properties:** Homothetic; Engel elasticity $=1$; $\varepsilon_{x_k,p_k}=-1$
- **See:** [CT 1B.Q1](./answers-consumer-theory.md#q-cons-1b-01) (Walrasian demand), [Q2](./answers-consumer-theory.md#q-cons-1b-02) (indirect utility), [Q3](./answers-consumer-theory.md#q-cons-1b-03) (EMP/Hicksian), [WF Q3](./answers-welfare.md#q-welfare-03) (EV/CV/CS computation)

### [CES](./answers-demand-production.md#q-prodset-03) $u(x)=\bigl(\sum_{i=1}^n x_i^\rho\bigr)^{1/\rho},\;\rho<1,\;\rho\neq0,\;\sigma=1/(1-\rho)$ ([→ Glossary](./GLOSSARY.md#term-eos))
- $x_k(p,w)=w\,p_k^{-\sigma}\bigm/\sum_{j}p_j^{1-\sigma}$
- $v(p,w)=w\bigl(\sum_k p_k^{1-\sigma}\bigr)^{-1/(1-\sigma)}$
- $e(p,u)=u\bigl(\sum_k p_k^{1-\sigma}\bigr)^{1/(1-\sigma)}$
- **Properties:** Homothetic; $\rho\to0\Rightarrow$ CD; $\rho\to-\infty\Rightarrow$ [Leontief](./answers-consumer-theory.md#q-cons-1b-06) ([→ Glossary](./GLOSSARY.md#term-leontief)); $\rho\to1\Rightarrow$ perfect substitutes
- **See:** [DP 3A.Q4](./answers-demand-production.md#q-prodset-03) (elasticity of substitution)

### [Quasilinear](./answers-consumer-theory.md#q-cons-1b-07) $u(x)=x_1+\varphi(x_2,\dots,x_n)$ ($p_1=1$ numeraire) ([→ Glossary](./GLOSSARY.md#term-quasilinear))
- $x_k(p)=\varphi_k'^{-1}(p_k)\;(k\ge2),\;x_1=w-\sum_{k\ge2}p_kx_k$
- $v(p,w)=w+\bigl[\varphi(x^*)-\sum_{k\ge2}p_kx_k^*\bigr]\equiv w+CS(p)$
- $e(p,u)=u-CS(p)$
- **Properties:** No income effects on $x_{k\ge2}$ ($\partial x_k/\partial w=0$); $CV=EV=CS$
- **See:** [CT 1A.Q10](./answers-consumer-theory.md#q-cons-10) (convex ICs), [CT 1B.Q7](./answers-consumer-theory.md#q-cons-1b-07) (demand derivation), [WF Q5](./answers-welfare.md#q-welfare-05) (Willig bounds)

### [Homothetic](./answers-consumer-theory.md#q-cons-08) $u(x)=F\bigl(g(x)\bigr),\;g$ HD1
- $x(p,w)=\tilde x(p)\,w$ (linear in wealth)
- $v(p,w)=v(p,1)\,w,\quad e(p,u)=e(p,1)\,u$
- **Properties:** Engel curves are rays through origin; CD and CES are special cases
- **See:** [CT 1A.Q8](./answers-consumer-theory.md#q-cons-08) (definition), [CT 1B.Q5](./answers-consumer-theory.md#q-cons-1b-05) (demand focus) | [→ glossary](./GLOSSARY.md#term-homothetic)

---

## 5 Welfare Measurement

- [Consumer surplus](./answers-welfare.md#q-welfare-01): $\displaystyle CS=\int_{p^1}^{p^0}x(p,w)\,dp$ ([→ Glossary](./GLOSSARY.md#term-cs))
- [Compensating variation](./answers-welfare.md#q-welfare-01): $CV=e(p^0,u^0)-e(p^1,u^0)=w-e(p^1,u^0)$ ([→ Glossary](./GLOSSARY.md#term-cv))
- [Equivalent variation](./answers-welfare.md#q-welfare-01): $EV=e(p^0,u^1)-e(p^0,u^0)=e(p^0,u^1)-w$ ([→ Glossary](./GLOSSARY.md#term-ev))

| Price Change | [Normal Good](./answers-welfare.md#q-welfare-02) | [Quasilinear](./answers-welfare.md#q-welfare-05) |
|---|---|---|
| Decrease ($p^1<p^0$) | $EV>CS>CV>0$ | $CV=EV=CS$ |
| Increase ($p^1>p^0$) | $CV<CS<EV<0$ | $CV=EV=CS$ |

**See:** [WF Q1–Q5](./answers-welfare.md#q-welfare-01) (full welfare analysis), [welfare-change-reference.md](./welfare-change-reference.md) (CV/EV/CS theory paper)

---

## 6 Production & Costs

**Profit maximization:** $\pi(p,w)=\max_{y,z}\,p\,y-w\cdot z$ s.t. $y\le f(z)$
- [Hotelling's lemma](./answers-demand-production.md#q-profit-01): $y(p,w)=\partial\pi/\partial p,\;z_i(p,w)=-\partial\pi/\partial w_i$ ([→ Glossary](./GLOSSARY.md#term-hotellings))
- Supply function $y(p,w)$; $\pi$ [convex](./answers-demand-production.md#q-profit-01) in $(p,w)$, HD1

**Cost minimization:** $c(w,y)=\min_z\,w\cdot z$ s.t. $f(z)\ge y$
- [Shephard's lemma](./answers-demand-production.md#q-prodset-05): $z_i(w,y)=\partial c/\partial w_i$ (conditional factor demand) ([→ Glossary](./GLOSSARY.md#term-shephards))
- $c$ [concave](./answers-demand-production.md#q-prodset-05) in $w$, HD1 in $w$, $\uparrow$ in $y$

**Production functions & returns to scale:**
- **Returns to scale test:** $f(tK,tL) = t^\nu f(K,L)$; $\nu>1$ IRTS, $\nu=1$ CRTS, $\nu<1$ DRTS ([→ DP 3A.Q1](./answers-demand-production.md#q-prodset-01)) ([→ Glossary](./GLOSSARY.md#term-returns-to-scale))
- **Elasticity of substitution:** $\displaystyle \sigma = \frac{d\ln(K/L)}{d\ln(MRTS)}$ ([→ DP 3A.Q4](./answers-demand-production.md#q-prodset-03)) ([→ Glossary](./GLOSSARY.md#term-eos))
- **CES production:** $q = [\alpha K^\rho + (1-\alpha)L^\rho]^{\gamma/\rho}$ where $\sigma = 1/(1-\rho)$ ([→ DP 3A.Q4](./answers-demand-production.md#q-prodset-03))

**MRPT (Marginal Rate of Product Transformation):**
$$\displaystyle MRPT_{k,l}(y) = \frac{\partial F(y)/\partial y_k}{\partial F(y)/\partial y_l} = -\frac{dy_l}{dy_k} = \frac{MC_k}{MC_l}$$
(Duality result: $MRPT = MC_k/MC_l$ — see [→ DP 3A.Q1](./answers-demand-production.md#q-prodset-01)) ([→ Glossary](./GLOSSARY.md#term-mrpt))

**Cost function properties:**
- $c$ concave in $w$ $\Rightarrow$ $\partial^2 c/\partial w_k^2 \le 0$ (conditional factor demand slopes downward) ([→ Glossary](./GLOSSARY.md#term-cost-function))
- Matrix $D_w z(w,y)$: symmetric, NSD, HD0 in $w$ ([→ DP 3A.Q5](./answers-demand-production.md#q-prodset-04))
- **Short-run shutdown:** produce if $P \ge \min AVC$ ([→ DP 3C.Q1](./answers-demand-production.md#q-compet-01)) ([→ Glossary](./GLOSSARY.md#term-shutdown-price))
- **Long-run zero-profit:** $P = \min LAC$ with free entry ([→ DP 3C.Q1](./answers-demand-production.md#q-compet-01))

**Returns to scale & cost shape:**

**[Lerner index](./answers-demand-production.md#q-demand-03):** $\displaystyle\frac{P-MC}{P}=-\frac{1}{\varepsilon}$ where $\varepsilon$ = demand price elasticity ([→ Glossary](./GLOSSARY.md#term-lerner-index))
- Perfect competition: $P=MC$, Lerner $=0$
- Monopoly (linear demand): $P=MC/(1+1/\varepsilon)$

**See:** [DP 3A](./answers-demand-production.md#q-prodset-01) (production theory), [DP 3B](./answers-demand-production.md#q-profit-01) (profit function), [DP 3C.Q1](./answers-demand-production.md#q-compet-01) (competitive equilibrium + tax)

---

## 7 General Equilibrium & Pareto Efficiency

### GE Concepts

**[Walras' law](./answers-ge-game-extern-trade.md#q-ge-02):** $p\cdot z(p)=0\;\forall p$ where $z(p)=\sum_i(x_i(p)-\omega_i)-\sum_jy_j(p)$ ([→ Glossary](./GLOSSARY.md#term-walras-law))

**Excess demand $z(p)$ properties:** HD0; continuous on $\mathbb{R}_{++}^n$; satisfies Walras' law; boundary behavior ($p_k\to0\Rightarrow z_k(p)\to+\infty$) ([→ Glossary](./GLOSSARY.md#term-excess-demand))

**Existence:** If $z(p)$ continuous, HD0, obeys Walras' law, and has boundary behavior $\Rightarrow\exists p^*>0$: $z(p^*)=0$

### Three Pareto Efficiency Conditions ($2\times2\times2$ Economy)

For an allocation to be Pareto-optimal, **all three** must hold simultaneously:

1. **Consumption efficiency:** $\displaystyle MRS_{XY}^A = MRS_{XY}^B$ — equal MRS across consumers (inside Edgeworth box: contract curve)
2. **Production efficiency:** $\displaystyle MRTS_{LK}^X = MRTS_{LK}^Y$ — equal MRTS across firms (inside Edgeworth production box)
3. **Product-mix efficiency:** $\displaystyle MRPT_{XY} = MRS_{XY}$ — on the PPC, the output transformation rate equals consumers' common MRS

**See:** [WF 5B.Q3](./answers-welfare.md#q-pareto-03) (Pareto conditions), [GE 6B.Q3](./answers-ge-game-extern-trade.md#q-edge-03) (Edgeworth box), [→ Glossary](./GLOSSARY.md#term-po)

### Welfare Theorems

**[FWT](./answers-welfare.md#q-pareto-05) (First Welfare Theorem):** Under local nonsatiation, every Walrasian (competitive) equilibrium allocation is Pareto optimal. ([→ Glossary](./GLOSSARY.md#term-fwt))

**[SWT](./answers-welfare.md#q-pareto-05) (Second Welfare Theorem):** If preferences and production sets are convex, any Pareto optimal allocation can be decentralized as a CE with lump-sum transfers. ([→ Glossary](./GLOSSARY.md#term-swt))

### Social Welfare Functions

- **Utilitarian (Bentham):** $W = \sum_i U_i$ — sum-ranking, indifference contours slope $-1$ ([→ Glossary](./GLOSSARY.md#term-bentham))
- **Rawlsian (maximin):** $W = \min_i U_i$ — cares only about worst-off, L-shaped contours ([→ Glossary](./GLOSSARY.md#term-rawlsian))
- **Nash (multiplicative):** $W = \prod_i U_i$ — symmetric, logarithmic social indifference ([→ Glossary](./GLOSSARY.md#term-swf))
- **Bergson-Samuelson:** $W = F(U_1,\dots,U_n)$ — general form, embodies any ethical judgement ([→ Glossary](./GLOSSARY.md#term-bergson-samuelson))

**Key result ($2\times2\times2$):** Tangency of GUPF and highest social indifference contour = **Point of Bliss** (social optimum) ([→ Glossary](./GLOSSARY.md#term-point-of-bliss)).  
**Arrow's Impossibility:** No SWF can simultaneously satisfy UD, P, IIA, and ND ([→ Glossary](./GLOSSARY.md#term-arrow-impossibility))

**See:** [WF 5A](./answers-welfare.md#q-socwel-06) (SWF criteria), [WF 5B.Q5](./answers-welfare.md#q-pareto-05) (Welfare Theorems)

---

## 8 Game Theory & IO

**Normal form:** $G=(N,\{S_i\},\{u_i\})$

**[Nash equilibrium](./answers-ge-game-extern-trade.md#q-game-01):** $s^*$ s.t. $u_i(s_i^*,s_{-i}^*)\ge u_i(s_i,s_{-i}^*)\;\forall s_i\in S_i,\forall i$ ([→ Glossary](./GLOSSARY.md#term-nash-equilibrium))

**[Best response](./answers-ge-game-extern-trade.md#q-game-01):** $BR_i(s_{-i}) = \arg\max_{s_i} u_i(s_i,s_{-i})$ — NE is a fixed point: $s_i^*\in BR_i(s_{-i}^*)$ ([→ Glossary](./GLOSSARY.md#term-best-response))

**[Dominant strategy](./answers-ge-game-extern-trade.md#q-game-02):** $s_i^D$ is dominant if $u_i(s_i^D,s_{-i})>u_i(s_i',s_{-i})\;\forall s_{-i},\forall s_i'\neq s_i^D$ ([→ Glossary](./GLOSSARY.md#term-dominant-strategy))

**[Prisoner's Dilemma](./answers-ge-game-extern-trade.md#q-game-02)** ($T>R>P>S,\;T+S<2R$):
| | Cooperate | Defect |
|---|---|---|
| Cooperate | $R,R$ | $S,T$ |
| Defect | $T,S$ | $P,P$ |

NE = $(\text{Defect},\text{Defect})$ (strictly dominant). In repeated PD: cooperation sustainable if $\delta\ge(T-R)/(T-P)$ (see [Folk Theorem](./answers-ge-game-extern-trade.md#q-game-04) ([→ Glossary](./GLOSSARY.md#term-folk-theorem))).

**Mixed strategy:** $\sigma^*$ is a mixed NE if for each $i$, every pure $s_i$ in the support yields equal expected payoff. ([→ Glossary](./GLOSSARY.md#term-mixed-strategy))

**[Subgame perfect equilibrium](./answers-ge-game-extern-trade.md#q-game-03):** Strategy profile that is a NE in every subgame; solved via backward induction. ([→ Glossary](./GLOSSARY.md#term-subgame-perfect-ne))

### IO Market Models

| Model | Strategic Variable | BR Slope | Equilibrium |
|---|---|---|---|
| **[Cournot](./answers-ge-game-extern-trade.md#q-game-01)** | Quantity $q_i$ | Downward (strategic substitutes) | $q_i^*$ from intersection of reaction curves |
| **[Bertrand (diff.)](./answers-ge-game-extern-trade.md#q-game-01)** | Price $p_i$ | Upward (strategic complements) | $p_i^*$ from intersection of BR functions |
| **[Stackelberg](./answers-ge-game-extern-trade.md#q-game-03)** | Quantity (leader → follower) | — | Follower's BR + leader's $MR=MC$ |

- **Cournot (homogeneous):** $P(Q) = a - bQ$, $Q = \sum q_i$, each firm solves $\max_{q_i} (P(Q)-c)q_i$ ([→ Glossary](./GLOSSARY.md#term-cournot))
- **Bertrand (differentiated):** $q_i = a - b p_i + d p_j$, BR: $p_i = (a + bc + d p_j)/2b$
- **Stackelberg:** Leader anticipates follower's BR, solves $\max_{q_L} P(q_L + BR_F(q_L))\cdot q_L$ ([→ Glossary](./GLOSSARY.md#term-stackelberg))

**See:** [GE 7](./answers-ge-game-extern-trade.md#q-game-01) (Bertrand, PD, entry, grim trigger, unraveling, centipede), [→ Glossary](./GLOSSARY.md#term-bertrand)

---

## 9 Trade & Tariffs

> Single trade question on the exam (Topic 9). Full analysis in [GE 9.Q1](./answers-ge-game-extern-trade.md#q-trade-01).

**Free trade vs autarky:** World price $P_W$ below autarky $\Rightarrow$ imports = $Q_d - Q_s$.

**Tariff analysis ($\tau$ per unit):** ([→ Glossary](./GLOSSARY.md#term-tariff))
- Buyer price rises to $P_W + \tau$, domestic $Q_s\uparrow$, $Q_d\downarrow$, imports $\downarrow$
- **Tariff DWL:** $\displaystyle \text{DWL} = \frac12\tau(\Delta Q_s + \Delta Q_d)$ — production + consumption distortion triangles
- **Tax incidence:** $\dfrac{P_b - P_W}{\tau} = \dfrac{\varepsilon_S}{\varepsilon_S - \varepsilon_D}$ (consumer share — [→ DP 3C](./answers-demand-production.md#q-compet-01)) ([→ Glossary](./GLOSSARY.md#term-tax-incidence))

**VER vs Tariff:**
- **VER:** Equivalent to tariff but **quota rent goes to foreign exporters** ($\tau \times Q_{\text{imports}}$), making it strictly worse for the importing country. ([→ Glossary](./GLOSSARY.md#term-ver))
- **Welfare ranking** (home country): Tariff $\succ$ VER (same DWL but tariff preserves revenue)

**See:** [GE 9.Q1](./answers-ge-game-extern-trade.md#q-trade-01) (tariff numerical + VER comparison), [→ Glossary](./GLOSSARY.md#term-dwl)

---

## 10 Externalities & Public Goods

**[Negative externality](./answers-ge-game-extern-trade.md#q-extern-02):** Optimal [Pigouvian tax](./answers-welfare.md#q-pareto-04) $t=MED$ (marginal external damage at $Q^*$) ([→ Glossary](./GLOSSARY.md#term-pigouvian-tax))
- With tax: $PMC+t=SMC\Rightarrow$ private $\to$ social optimum

**[Coase theorem](./answers-ge-game-extern-trade.md#q-extern-02):** If property rights well-defined, zero transaction costs, small number of agents $\Rightarrow$ private bargaining attains efficiency independently of initial rights allocation. ([→ Glossary](./GLOSSARY.md#term-coase-theorem))

**Samuelson condition (public good):** $\displaystyle\sum_{i=1}^n MRS_{G,x}^i = MRT_{G,x}$ ([→ Glossary](./GLOSSARY.md#term-samuelson))
- Private goods: $MRS_i=MRT$ for each $i$ (individual condition)
- Public goods: sum of MRS = MRT (aggregate condition)

**[Lindahl prices](./GLOSSARY.md#term-lindahl):** Personalized prices $p_G^i$ s.t. $MRS^i=p_G^i$ and $\sum_ip_G^i=MC_G$

**[Free rider problem](./answers-ge-game-extern-trade.md#q-extern-01):** Non-excludability $\Rightarrow$ each agent under-contributes to public good; Nash equilibrium voluntary contributions fall short of Samuelson optimum. ([→ Glossary](./GLOSSARY.md#term-free-rider))

**See:** [GE 8](./answers-ge-game-extern-trade.md#q-extern-01) (tragedy of commons, steel-fishery, lemons, Spence signaling, bandwagon/snob), [WF 5B.Q4](./answers-welfare.md#q-pareto-04) (Pigouvian tax numerical)

---

## 11 Cross-Course Connections

Microeconomic theory is the foundation for several other MSc economics courses. Here is where each micro concept reapplies:

| Micro Concept | Appears In | Why It Matters There |
|---|---|---|
| **Cobb-Douglas production** | [Macro (Solow model)](../macroeconomics/basics.md) | $Y = K^\alpha(AL)^{1-\alpha}$ is the workhorse aggregate production function; determines steady-state income |
| **Optimization (UMP/EMP)** | [Macro (Ramsey model)](../macroeconomics/basics.md) | Household intertemporal optimization uses same Lagrangian + FOC structure |
| **General Equilibrium stability** | [Macro (Solow convergence)](../macroeconomics/basics.md) | Conditional convergence to steady state = GE uniqueness/stability logic |
| **Pareto optimality** | [Macro (Golden Rule)](../macroeconomics/basics.md) | Golden Rule $f'(k^*) = n+g+\delta$ is a Pareto-efficient steady state |
| **Market failure (externalities)** | [Development (resource curse)](../503-Development/basics.md) · [Political Economy (intervention)](../512-Political-Economy/basics.md) | Venezuela oil dependency; state vs market debate |
| **Comparative advantage** | [Dev (trade specialization)](../503-Development/basics.md) · [Pol Econ (free trade)](../512-Political-Economy/basics.md) | RMG export concentration; WTO AoA critique |
| **DWL of tariffs/taxes** | [§9 Trade & Tariffs](#9-trade-tariffs) · [GE 9.Q1](./answers-ge-game-extern-trade.md#q-trade-01) · [Pol Econ](../512-Political-Economy/basics.md) | $½ \times t \times \Delta Q$ applied to trade policy |
| **Asymmetric information** | [Health (Lemons, SID)](../health-economics/basics.md) · [Pol Econ (MNC behavior)](../512-Political-Economy/basics.md) | Akerlof lemons → health insurance markets; OLI paradigm |
| **Game theory (PD)** | [Political Economy (trade negotiations)](../512-Political-Economy/basics.md) | Prisoners' Dilemma models tariff wars and WTO enforcement |
| **Consumer/producer surplus** | [Health (CEA/CUA, QALYs)](../health-economics/basics.md) · [Dev (project CBA)](../503-Development/basics.md) | Welfare measurement tools applied to health and development projects |
| **Production theory** | [Development (dual economy)](../503-Development/basics.md) | Lewis structural transformation; sectoral productivity gaps |

**Full cross-course reference:** [Cross-Links in README](./README.md#cross-course-links)
