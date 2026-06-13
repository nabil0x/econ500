# Microeconomics — MSc Exam Formula Reference

## 1 UMP ↔ EMP Duality

**UMP:** $\max_{x\ge 0} u(x)$ s.t. $p\cdot x \le w$
**EMP:** $\min_{x\ge 0} p\cdot x$ s.t. $u(x)\ge u$

| UMP (Primal) | EMP (Dual) |
|---|---|
| Walrasian demand $x(p,w)$ | Hicksian demand $h(p,u)$ |
| Indirect utility $v(p,w)=\max u(x)$ s.t. $p\cdot x\le w$ | Expenditure $e(p,u)=\min p\cdot x$ s.t. $u(x)\ge u$ |

**Duality Identities:**
1. $e\bigl(p,\;v(p,w)\bigr)=w$
2. $v\bigl(p,\;e(p,u)\bigr)=u$
3. $h(p,u)=x\bigl(p,\;e(p,u)\bigr)$
4. $x(p,w)=h\bigl(p,\;v(p,w)\bigr)$

**Key Results:**
- Roy's identity: $\displaystyle x_k(p,w)=-\frac{\partial v(p,w)/\partial p_k}{\partial v(p,w)/\partial w}$
- Shephard's lemma: $\displaystyle h_k(p,u)=\frac{\partial e(p,u)}{\partial p_k}$
- Slutsky: $\displaystyle\frac{\partial x_k}{\partial p_j}=\underbrace{\frac{\partial h_k}{\partial p_j}}_{\text{SE}}\;-\;\underbrace{x_j\frac{\partial x_k}{\partial w}}_{\text{IE}}$
- Slutsky elasticity form: $\varepsilon_{kj}=\varepsilon_{kj}^h-s_j\varepsilon_{kw}$ with $s_j=p_jx_j/w$
- Slutsky matrix $S(p,w)\equiv D_ph(p,u)$: NSD, symmetric, $S(p,w)p=0$

---

## 2 Properties Checklist

### Consumer & Utility Functions

| Function | Homogeneity | Monotonicity | Curvature | Other |
|---|---|---|---|---|
| $x(p,w)$ | HD0: $x(tp,tw)=x(p,w)$ | Walras' law $p\cdot x=w$ | — | Slutsky $S$ NSD, symmetric |
| $h(p,u)$ | HD0: $h(tp,u)=h(p,u)$ | $u\bigl(h(p,u)\bigr)=u$ | $D_ph$ NSD, symmetric | $S\equiv D_ph$ |
| $v(p,w)$ | HD0: $v(tp,tw)=v(p,w)$ | $\uparrow w,\;\downarrow p_k$ | Quasiconvex in $(p,w)$ | Continuous |
| $e(p,u)$ | HD1: $e(tp,u)=t\,e(p,u)$ | $\uparrow p_k,\;\uparrow u$ | Concave in $p$ | Continuous |

### Production & Cost Functions

| Function | Homogeneity | Monotonicity | Curvature | Key Lemma |
|---|---|---|---|---|
| $\pi(p,w)$ | HD1: $\pi(tp,tw)=t\pi(p,w)$ | $\uparrow p,\;\downarrow w_i$ | Convex in $(p,w)$ | Hotelling: $y=\partial\pi/\partial p,\;z_i=-\partial\pi/\partial w_i$ |
| $c(w,y)$ | HD1: $c(tw,y)=t\,c(w,y)$ | $\uparrow w_i,\;\uparrow y$ | Concave in $w$ | Shephard: $z_i=\partial c/\partial w_i$ |

---

## 3 Workhorse Utility Forms

### Cobb-Douglas $u(x)=\prod_{i=1}^n x_i^{\alpha_i},\;\sum\alpha_i=1$
- $x_k(p,w)=\alpha_k w/p_k$
- $v(p,w)=w\prod_{k=1}^n\bigl(\alpha_k/p_k\bigr)^{\alpha_k}$
- $e(p,u)=u\prod_{k=1}^n\bigl(p_k/\alpha_k\bigr)^{\alpha_k}$
- **Properties:** Homothetic; Engel elasticity $=1$; $\varepsilon_{x_k,p_k}=-1$

### CES $u(x)=\bigl(\sum_{i=1}^n x_i^\rho\bigr)^{1/\rho},\;\rho<1,\;\rho\neq0,\;\sigma=1/(1-\rho)$
- $x_k(p,w)=w\,p_k^{-\sigma}\bigm/\sum_{j}p_j^{1-\sigma}$
- $v(p,w)=w\bigl(\sum_k p_k^{1-\sigma}\bigr)^{-1/(1-\sigma)}$
- $e(p,u)=u\bigl(\sum_k p_k^{1-\sigma}\bigr)^{1/(1-\sigma)}$
- **Properties:** Homothetic; $\rho\to0\Rightarrow$ CD; $\rho\to-\infty\Rightarrow$ Leontief; $\rho\to1\Rightarrow$ perfect substitutes

### Quasilinear $u(x)=x_1+\varphi(x_2,\dots,x_n)$ ($p_1=1$ numeraire)
- $x_k(p)=\varphi_k'^{-1}(p_k)\;(k\ge2),\;x_1=w-\sum_{k\ge2}p_kx_k$
- $v(p,w)=w+\bigl[\varphi(x^*)-\sum_{k\ge2}p_kx_k^*\bigr]\equiv w+CS(p)$
- $e(p,u)=u-CS(p)$
- **Properties:** No income effects on $x_{k\ge2}$ ($\partial x_k/\partial w=0$); $CV=EV=CS$

### Homothetic $u(x)=F\bigl(g(x)\bigr),\;g$ HD1
- $x(p,w)=\tilde x(p)\,w$ (linear in wealth)
- $v(p,w)=v(p,1)\,w,\quad e(p,u)=e(p,1)\,u$
- **Properties:** Engel curves are rays through origin; CD and CES are special cases

---

## 4 Welfare Measurement

- Consumer surplus: $\displaystyle CS=\int_{p^1}^{p^0}x(p,w)\,dp$
- Compensating variation: $CV=e(p^0,u^0)-e(p^1,u^0)=w-e(p^1,u^0)$
- Equivalent variation: $EV=e(p^0,u^1)-e(p^0,u^0)=e(p^0,u^1)-w$

| Price Change | Normal Good | Quasilinear |
|---|---|---|
| Decrease ($p^1<p^0$) | $EV>CS>CV>0$ | $CV=EV=CS$ |
| Increase ($p^1>p^0$) | $CV<CS<EV<0$ | $CV=EV=CS$ |

---

## 5 Production & Costs

**Profit maximization:** $\pi(p,w)=\max_{y,z}\,p\,y-w\cdot z$ s.t. $y\le f(z)$
- Hotelling's lemma: $y(p,w)=\partial\pi/\partial p,\;z_i(p,w)=-\partial\pi/\partial w_i$
- Supply function $y(p,w)$; $\pi$ convex in $(p,w)$, HD1

**Cost minimization:** $c(w,y)=\min_z\,w\cdot z$ s.t. $f(z)\ge y$
- Shephard's lemma: $z_i(w,y)=\partial c/\partial w_i$ (conditional factor demand)
- $c$ concave in $w$, HD1 in $w$, $\uparrow$ in $y$

**Returns to scale & cost shape:**
- CRTS $\iff c(w,y)=y\,c(w,1)$ (AC constant)
- IRTS $\iff$ AC$\downarrow$ with $y$ (economies of scale)
- DRTS $\iff$ AC$\uparrow$ with $y$ (diseconomies)

**Lerner index:** $\displaystyle\frac{P-MC}{P}=-\frac{1}{\varepsilon}$ where $\varepsilon$ = demand price elasticity
- Perfect competition: $P=MC$, Lerner $=0$
- Monopoly (linear demand): $P=MC/(1+1/\varepsilon)$

---

## 6 General Equilibrium

**Walras' law:** $p\cdot z(p)=0\;\forall p$ where $z(p)=\sum_i(x_i(p)-\omega_i)-\sum_jy_j(p)$

**Excess demand $z(p)$ properties:** HD0; continuous on $\mathbb{R}_{++}^n$; satisfies Walras' law; boundary behavior ($p_k\to0\Rightarrow z_k(p)\to+\infty$)

**Existence:** If $z(p)$ continuous, HD0, obeys Walras' law, and has boundary behavior $\Rightarrow\exists p^*>0$: $z(p^*)=0$

**FWT (First Welfare Theorem):** Under local nonsatiation, every Walrasian (competitive) equilibrium allocation is Pareto optimal.

**SWT (Second Welfare Theorem):** If preferences and production sets are convex, any Pareto optimal allocation can be decentralized as a CE with lump-sum transfers.

---

## 7 Game Theory Essentials

**Normal form:** $G=(N,\{S_i\},\{u_i\})$

**Nash equilibrium:** $s^*$ s.t. $u_i(s_i^*,s_{-i}^*)\ge u_i(s_i,s_{-i}^*)\;\forall s_i\in S_i,\forall i$

**Dominant strategy:** $s_i^D$ is dominant if $u_i(s_i^D,s_{-i})>u_i(s_i',s_{-i})\;\forall s_{-i},\forall s_i'\neq s_i^D$

**Prisoner's Dilemma** ($T>R>P>S,\;T+S<2R$):
| | Cooperate | Defect |
|---|---|---|
| Cooperate | $R,R$ | $S,T$ |
| Defect | $T,S$ | $P,P$ |

NE = $(\text{Defect},\text{Defect})$ (strictly dominant). In repeated PD: cooperation sustainable if $\delta\ge(T-R)/(T-P)$.

**Mixed strategy:** $\sigma^*$ is a mixed NE if for each $i$, every pure $s_i$ in the support yields equal expected payoff.

**Subgame perfect equilibrium:** Strategy profile that is a NE in every subgame; solved via backward induction.

---

## 8 Externalities & Public Goods

**Negative externality:** Optimal Pigouvian tax $t=MED$ (marginal external damage at $Q^*$)
- With tax: $PMC+t=SMC\Rightarrow$ private $\to$ social optimum

**Coase theorem:** If property rights well-defined, zero transaction costs, small number of agents $\Rightarrow$ private bargaining attains efficiency independently of initial rights allocation.

**Samuelson condition (public good):** $\displaystyle\sum_{i=1}^n MRS_{G,x}^i = MRT_{G,x}$
- Private goods: $MRS_i=MRT$ for each $i$ (individual condition)
- Public goods: sum of MRS = MRT (aggregate condition)

**[Lindahl prices](GLOSSARY.md#term-lindahl):** Personalized prices $p_G^i$ s.t. $MRS^i=p_G^i$ and $\sum_ip_G^i=MC_G$

**Free rider problem:** Non-excludability $\Rightarrow$ each agent under-contributes to public good; Nash equilibrium voluntary contributions fall short of Samuelson optimum.
