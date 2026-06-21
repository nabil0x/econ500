# Answers: R&D Monopolistic Competition

## Exam-ready Revision Notes — Econ 501/502

> **Math convention:** All equations use LaTeX notation. GitHub renders them natively.
> Display equations use `$$ ... $$`, inline formulas use `$ ... $`.
> Questions drawn from the Romer (1990) variety-expansion model with monopolistic competition in intermediate goods.
> Sources: Batch 47 MSc 2022 (Q6), Batch 48 MSc 2023 (Q6).
> **Model:** $Y = [\int L(i)^\phi di]^{1/\phi}$ (CES aggregator over differentiated varieties $i$), CRRA utility, $\dot{N} = BL_A$ (variety expansion via R&D).

---

# Section 1 — R&D Monopolistic Competition (Romer 1990)

---

### Question 26 {#q-rd-mono-batch47-q6}

**When output is produced by competitive firms using $Y = [\int L(i)^\phi di]^{1/\phi}$, with CRRA utility and knowledge creation $\dot{A} = BL_A$, answer the following: (a) What is the demand for the patent holder and the profit of the firm? (b) Briefly discuss the assumptions to construct the model. (c) How is long-run growth determined using present value of profits from new ideas? What is equilibrium $L_A$? (d) What is the socially optimal $L_A$? Explain how it differs from the equilibrium level. [3+4+4+3]**

**Answer:**

> **Marking Guide [14 marks]:** Demand derivation + profit (3) | Model assumptions (4) | PV of profits + equilibrium $L_A$ (4) | Social optimum vs equilibrium (3)
>
> **High-Yield** — The Romer (1990) variety-expansion model is the canonical framework for understanding how monopoly profits provide the incentive for innovation. The wedge between private and social returns to R&D is the central market failure in endogenous growth theory.

---

**a) Demand for the patent holder and profit (3 marks):**

The final good is produced by competitive firms using a CES technology over differentiated varieties $i \in [0, N]$:

$$Y = \left[\int_0^N L(i)^\phi di\right]^{1/\phi}, \quad 0 < \phi < 1$$

where $L(i)$ is the quantity of variety $i$ used and $N$ is the measure of available varieties (patents). The final good is the numeraire ($P_Y = 1$).

**Demand for variety $i$:** The final sector maximizes profit $\Pi = Y - \int p(i)L(i)di$. The first-order condition gives the inverse demand:

$$p(i) = \frac{\partial Y}{\partial L(i)} = Y^{1-\phi} L(i)^{\phi-1}$$

Rearranging yields the demand for variety $i$:

$$L(i) = Y \cdot p(i)^{-1/(1-\phi)}$$

The elasticity of substitution between any two varieties is $\sigma = 1/(1-\phi)$.

**Monopoly pricing:** Each patent holder is a monopolist in its own variety. Assuming one unit of labor produces one unit of the intermediate good (marginal cost = wage $w$), the monopolist chooses $p(i)$ to maximize:

$$\pi(i) = (p(i) - w)L(i)$$

The first-order condition yields the Lerner markup formula:

$$\frac{p(i) - w}{p(i)} = 1-\phi \quad\Longrightarrow\quad p(i) = \frac{w}{\phi}$$

Since $0 < \phi < 1$, the markup factor $1/\phi > 1$ reflects market power.

**Profit:** In symmetric equilibrium, all firms charge the same price $p(i) = p$ and hire the same labor $L(i) = L$. Output is:

$$Y = N^{1/\phi}L$$

Total revenue of intermediate firms equals final output: $N \cdot pL = Y$. Since $p = w/\phi$, we have $pL = wL/\phi = Y/N$, so $wL = \phi Y/N$.

Profit per firm is revenue minus cost:

$$\boxed{\pi_i = pL - wL = \frac{wL}{\phi} - wL = \frac{1-\phi}{\phi} wL = \frac{(1-\phi)Y}{N}}$$

Equivalently, using the elasticity of substitution: $\pi_i = Y/(N\sigma) = (1-\phi)Y/N$.

---

**b) Model assumptions (4 marks):**

The R&D monopolistic competition model is built on the following assumptions:

| Assumption | Description |
|------------|-------------|
| **1. Final good sector** | Perfect competition; CRS CES production over differentiated varieties; price-taker. |
| **2. Intermediate goods** | Each variety $i$ is produced by a single patent-holding monopolist. Production uses labor with constant returns. |
| **3. Knowledge (R&D) sector** | New varieties are created by labor in R&D: $\dot{N} = BL_A$. Knowledge is **non-rival** (zero marginal cost of reproduction) and **partially excludable** (patents grant temporary monopoly). |
| **4. Households** | Identical, infinitely lived. CRRA utility $u(c) = (c^{1-\theta}-1)/(1-\theta)$. Maximize $\int e^{-\rho t} u(c) dt$ subject to intertemporal budget constraint. Euler equation: $\dot{c}/c = (r-\rho)/\theta$. |
| **5. Symmetric equilibrium** | All intermediate firms are ex post identical: $p(i) = p$, $L(i) = L$ for all $i$. |
| **6. Free entry into R&D** | The present value of monopoly profits from a new variety equals the cost of innovation. Zero-profit condition determines the equilibrium mass of researchers. |
| **7. Full employment** | Total labor supply $L$ is fixed and allocated between production and R&D: $L = L_Y + L_A$. |
| **8. No physical capital** | Production uses only differentiated intermediate goods (produced with labor). This is a simplified version of Romer (1990) which includes capital. |

These assumptions distinguish the model from neoclassical growth theory: (i) market power is essential for innovation, (ii) knowledge spillovers create increasing returns at the aggregate level, and (iii) the equilibrium allocation is not Pareto optimal due to the appropriability problem.

---

**c) Long-run growth via present value of profits and equilibrium $L_A$ (4 marks):**

**Present value of profits:** The value of a patent (claim to future monopoly profits) is:

$$v(t) = \int_t^\infty \pi(\tau) e^{-r(\tau-t)} d\tau$$

On the balanced growth path, the interest rate $r$ is constant and profits grow at the BGP rate $g$ (since $\pi_i = (1-\phi)Y/N$ and $Y$ and $N$ grow at the same rate on the BGP, $\pi$ is constant). Thus:

$$v = \frac{\pi}{r}$$

**Free entry condition:** Creating a new variety costs $w/B$ units of labor (from $\dot{N} = BL_A$, one unit of R&D labor creates $B$ new varieties). Free entry equates the value of a patent to its cost:

$$v = \frac{w}{B} \quad\Longrightarrow\quad \frac{\pi}{r} = \frac{w}{B}$$

**Equilibrium $L_A$:** Using $\pi = (1-\phi)Y/N$ and the wage $w = \partial Y/\partial L_Y$ from the production side (wage equals the marginal product of labor in final goods):

$$w = \frac{\phi Y}{L_Y} \quad\text{(from CES FOC for labor in final sector)}$$

Substituting into the free-entry condition:

$$\frac{(1-\phi)Y}{N} \cdot \frac{1}{r} = \frac{\phi Y}{B \cdot L_Y}$$

Simplifying:

$$L_Y = \frac{\phi r N}{B(1-\phi)}$$

Total labor $L$ is fixed, so equilibrium R&D labor is:

$$\boxed{L_A = L - L_Y = L - \frac{\phi r N}{B(1-\phi)}}$$

**Long-run growth rate:** The growth rate of varieties (and hence output) is:

$$g = \frac{\dot{N}}{N} = \frac{B L_A}{N}$$

Using the Euler equation $r = \rho + \theta g$, and noting that on the BGP $L_A$ and $N$ must be consistent, the equilibrium growth rate satisfies:

$$g = \frac{B}{N}\left(L - \frac{\phi(\rho + \theta g) N}{B(1-\phi)}\right)$$

$$g = \frac{BL}{N} - \frac{\phi(\rho + \theta g)}{1-\phi}$$

Solving for $g$ (in the large-$N$ limit where the model is on BGP):

$$\boxed{g^{eq} = \frac{BL}{N} - \frac{\phi\rho}{1-\phi + \phi\theta}}$$

In the standard Romer (1990) formulation with $\dot{N} = \delta L_N N$ (knowledge spillovers ensure $g_N$ is constant for fixed $L_N$), the equilibrium growth rate simplifies to an expression independent of $N$:

$$g^{eq} = \frac{\delta L - \rho}{\theta + 1} \quad\text{(for } \phi = 1/\sigma \text{ with appropriate parameterization)}$$

The growth rate is increasing in R&D productivity ($\delta$ or $B$), labor supply ($L$), and the markup ($1/\phi$), and decreasing in the discount rate ($\rho$) and risk aversion ($\theta$).

---

**d) Socially optimal $L_A$ vs equilibrium (3 marks):**

A social planner maximizes the representative household's utility by choosing the allocation of labor across production and R&D to maximize consumption growth. The planner internalizes all spillovers from innovation.

**Planner's problem:** The planner allocates $L_A$ to R&D (which expands varieties) and $L_Y$ to current production, recognizing that:

$$\dot{N} = B L_A, \quad Y = N^{1/\phi} L_Y$$

The planner's optimality condition equates the **social** marginal benefit of an additional researcher with the marginal cost (foregone output):

$$\underbrace{\frac{Y}{\phi L_A}}_{\text{social MB of R\&D}} = \underbrace{\frac{Y}{L_Y}}_{\text{opportunity cost (MPL in production)}}$$

This gives $L_A^{opt}/L_Y^{opt} = 1/\phi$.

**Equilibrium allocation:** By contrast, the decentralized equilibrium equates **private** marginal benefits:

$$\underbrace{\frac{(1-\phi)Y}{N} \cdot \frac{B}{r}}_{\text{PV of private profit}} = \underbrace{\frac{w}{B}}_{\text{cost of innovation}}$$

**Comparison:**

| Feature | Equilibrium ($L_A^{eq}$) | Social Optimum ($L_A^{opt}$) |
|---------|------------------------|------------------------------|
| R&D labor share | $L_A^{eq} = L - \frac{\phi r N}{B(1-\phi)}$ | $L_A^{opt} = \frac{L}{1+\phi}$ |
| Private return to R&D | Monopoly profit $(1-\phi)Y/N$ | Full output gain $Y/N$ per new variety |
| Growth rate | $g^{eq}$ (suboptimally low) | $g^{opt} > g^{eq}$ |

**Sources of the wedge:**

1. **Appropriability effect** ($L_A^{eq} < L_A^{opt}$): The monopolist captures only the fraction $(1-\phi)$ of the social surplus from a new variety. The consumer surplus ($\phi Y/N$) is not appropriated, so private returns to R&D are below social returns.

2. **Consumer surplus effect** ($L_A^{eq} < L_A^{opt}$): New varieties benefit all consumers through lower effective prices and greater variety, but the innovator cannot price-discriminate to capture this.

3. **Business-stealing effect** ($L_A^{eq}$ could exceed $L_A^{opt}$): New varieties may reduce the profits of existing patent holders. However, in the pure variety-expansion model (unlike the Schumpeterian quality-ladder model), this effect is absent — new varieties do not render existing ones obsolete.

**Net result:** The appropriability effect dominates, so $L_A^{eq} < L_A^{opt}$, and the equilibrium growth rate is **suboptimally low**. This is the fundamental market failure in R&D-driven growth models.

**Policy implications:** R&D subsidies, patent protection (balanced against spillover losses), and direct government funding of basic research can raise $L_A$ toward the social optimum.

> **Exam Tip:** Draw two pie charts showing: (i) equilibrium — total output $Y$ split into wages $\phi Y$ and profits $(1-\phi)Y$; (ii) social optimum — the planner recognizes the full value of variety expansion, not just the profit share. The gap between the two allocations is the appropriability effect.

> **Professor's Corner:** The result that equilibrium R&D is suboptimally low in the variety-expansion model is not universal. In Aghion-Howitt (1992) Schumpeterian model, the business-stealing effect can dominate, producing excessive R&D. The empirical evidence (Jones & Williams, 1998) suggests that, on net, private returns to R&D are about one-third of social returns, consistent with the appropriability effect dominating. This justifies R&D subsidies of roughly 50-100%.

---

### Question 27 {#q-rd-mono-batch48-q6}

**Consider the R&D monopolistic competition model with $Y = [\int L(i)^\phi di]^{1/\phi}$, discount rate $\rho$, CRRA utility $\dot{C}/C = (r-\rho)/\theta$, and knowledge creation $\dot{A} = BL_A$ with zero population growth. (a) Briefly discuss assumptions to construct the model. (b) How is long-run growth determined using present value of profits from new ideas? What is equilibrium $L_A$? (c) What is socially optimal $L_A$? Explain how it differs from the equilibrium level. (d) Explain implications of this model and its extensions. [3+5+3+3]**

**Answer:**

> **Marking Guide [14 marks]:** Model assumptions (3) | PV of profits + equilibrium $L_A$ (5) | Social optimum vs equilibrium (3) | Implications and extensions (3)

---

**a) Model assumptions (3 marks):**

The model is the Romer (1990) variety-expansion framework with monopolistic competition:

1. **Final goods** are produced competitively using a CES aggregator over differentiated varieties $i \in [0,N]$; the final good is the numeraire.
2. **Intermediate goods** are produced by monopolistically competitive patent holders, each charging a markup $p = w/\phi$ over marginal cost $w$.
3. **R&D** creates new varieties: $\dot{N} = BL_A$, where $L_A$ is R&D labor. Knowledge is non-rival and partially excludable.
4. **Households** have CRRA utility $u(c) = (c^{1-\theta}-1)/(1-\theta)$ and maximize intertemporal utility, yielding the Euler equation $\dot{c}/c = (r-\rho)/\theta$.
5. **Zero population growth**: total labor $L$ is fixed. Full employment: $L = L_Y + L_A$.
6. **Free entry into R&D**: the present value of monopoly profits equals the cost of creating a new variety ($w/B$).
7. **Symmetric equilibrium**: all intermediate firms are identical ex post — same price, quantity, and profit.

These assumptions depart from the neoclassical Solow model in three fundamental ways: (i) market power is necessary to fund fixed R&D costs, (ii) knowledge is a non-rival input generating increasing returns, and (iii) the decentralized equilibrium is inefficient due to knowledge externalities.

---

**b) Long-run growth via present value of profits and equilibrium $L_A$ (5 marks):**

**Present value of profits:** The value of a patent (the right to produce a differentiated variety) is the discounted stream of future monopoly profits:

$$v(t) = \int_t^\infty \pi(\tau) e^{-\int_t^\tau r(s)ds} d\tau$$

On the BGP with constant interest rate $r$ and time-invariant profit flow $\pi$ (because $Y$ and $N$ grow at the same rate on the BGP, so $\pi = (1-\phi)Y/N$ is constant):

$$\boxed{v = \frac{\pi}{r}}$$

**Free entry condition:** From $\dot{N} = BL_A$, one unit of R&D labor produces $B$ new varieties. The marginal cost per variety is $w/B$. Free entry drives the value of a patent to its cost:

$$v = \frac{w}{B} \quad\Longrightarrow\quad \frac{\pi}{r} = \frac{w}{B}$$

**Equilibrium $L_A$:** Profit per firm from part (a) of Question 26: $\pi = (1-\phi)Y/N$. The wage from the final sector FOC: $w = \phi Y/L_Y$.

Substituting into the free-entry condition:

$$\frac{(1-\phi)Y}{N} \cdot \frac{1}{r} = \frac{\phi Y}{B L_Y}$$

Cancelling $Y$ and rearranging:

$$\boxed{L_Y = \frac{\phi r N}{B(1-\phi)}}$$

With fixed total labor $L = L_Y + L_A$:

$$\boxed{L_A = L - \frac{\phi r N}{B(1-\phi)}}$$

**Consistency condition (steady state):** On the BGP, $L_A$ must be such that $N$ grows at a constant rate $g = \dot{N}/N = BL_A/N$. This requires $BL_A/N$ to be constant, which with fixed $L$ and $N$ growing implies $L_A$ grows at rate equal to $g_N$. Since $L$ is fixed and $L_A$ cannot grow indefinitely, the model requires an alternative formulation: in the standard Romer model, the knowledge production function is $\dot{N} = \delta L_N N$, which preserves constant $g$ for fixed $L_N$.

With $\dot{N} = \delta L_N N$ (the standard specification), the equilibrium is:

$$g = \delta L_N, \quad L_N = L - \frac{r}{\alpha\delta}$$

Using $r = \rho + \theta g$ from the Euler equation:

$$g = \delta L - \frac{\rho + \theta g}{\alpha}$$

$$\boxed{g^{eq} = \frac{\alpha\delta L - \rho}{\alpha + \theta}}$$

The equilibrium growth rate is increasing in R&D productivity ($\delta$), labor supply ($L$), and the markup ($1/\alpha$), and decreasing in patience ($\rho$) and risk aversion ($\theta$).

---

**c) Socially optimal $L_A$ vs equilibrium (3 marks):**

The social planner maximizes intertemporal utility by choosing the allocation of labor across production and R&D without the constraint of market prices. The planner internalizes the full social value of variety expansion.

**Planner's optimality condition:**

$$\underbrace{\frac{Y}{\phi L_A^{opt}}}_{\text{social MB of R\&D}} = \underbrace{\frac{Y}{L_Y^{opt}}}_{\text{opportunity cost}} \quad\Longrightarrow\quad \frac{L_A^{opt}}{L_Y^{opt}} = \frac{1}{\phi}$$

Since $L = L_Y + L_A$, this gives $L_A^{opt} = L/(1+\phi)$.

**Equilibrium condition (from part b):**

$$L_A^{eq} = L - \frac{\phi r N}{B(1-\phi)}$$

**Comparison of allocations:**

| Aspect | Equilibrium | Social Optimum | Direction |
|--------|-------------|----------------|-----------|
| R&D labor | $L_A^{eq} \approx \frac{BL - \phi\rho/(1-\phi)}{B + \phi\theta/(1-\phi)}$ | $L_A^{opt} = \frac{L}{1+\phi}$ | $L_A^{eq} < L_A^{opt}$ |
| Growth rate | $g^{eq} < g^{opt}$ | $g^{opt} > g^{eq}$ | Under-investment in R&D |
| Welfare | Suboptimal | Pareto optimal | Intervention justified |

**Why the market under-provides R&D:**

- **Appropriability effect:** The innovator captures only the profit share $(1-\phi)Y/N$ of the social surplus $Y/N$ created by a new variety. The remaining $\phi Y/N$ accrues to consumers as lower prices and greater variety.
- **Knowledge spillovers:** When a firm creates a new variety, it contributes to the knowledge stock $N$, making future R&D more productive. This positive externality is not compensated in the market.
- **No offsetting distortion:** In the variety-expansion model, there is no business-stealing effect (unlike the Schumpeterian model), so the appropriability effect is the dominant distortion.

**Quantifying the wedge:** The ratio of equilibrium to optimal R&D is:

$$\frac{L_A^{eq}}{L_A^{opt}} = 1 - \phi < 1$$

The larger the markup $(1/\phi)$, the greater the appropriability problem. Paradoxically, a higher markup means more profit per variety (which encourages R&D) but also means a larger gap between price and marginal cost (a static distortion that reduces output). The net effect on the R&D gap depends on the specific parameterization.

---

**d) Implications and extensions (3 marks):**

**Implications of the model:**

| Implication | Description |
|-------------|-------------|
| **1. Endogenous growth** | Technical change is driven by profit-seeking firms, not exogenous forces. Sustained growth is possible without population growth. |
| **2. Market failure** | Decentralized equilibrium under-provides innovation. Laissez-faire growth is suboptimally slow. |
| **3. Scale effects** | Larger economies (higher $L$) have faster growth (in the simple $\dot{N} = BL_A$ formulation). This is the controversial "scale effect" prediction. |
| **4. Role of policy** | R&D subsidies, patent policy, and public research investment can raise welfare by aligning private and social returns. |
| **5. Income distribution** | Monopoly profits generate income for patent holders; workers earn competitive wages. Growth benefits both factors but asymmetrically. |

**Key extensions:**

| Extension | Innovation | Key Result |
|-----------|------------|------------|
| **Jones (1995) semi-endogenous growth** | $\dot{N} = \delta L_N^\lambda N^\phi$ with $\phi < 1$ | Removes scale effect; growth determined by population growth $n$ |
| **Aghion-Howitt (1992) Schumpeterian** | Creative destruction — new innovations destroy old ones | Business-stealing effect can produce excessive R&D |
| **Grossman-Helpman (1991) quality ladders** | Vertical innovation improves existing products | Growth depends on the size of innovations and market structure |
| **Young (1998) limited scope for variety** | Bounded variety with quality upgrading within each variety | Growth is driven by quality improvements, not variety expansion |
| **Directed technical change** (Acemoglu, 2002) | R&D can be directed toward different sectors | Explains skill-biased technical change, factor biases |
| **Endogenous market structure** (Melitz, 2003) | Heterogeneous firms with selection into exporting | Productivity gains from trade through firm selection |

**Empirical relevance:**

- The model predicts that stronger patent protection and larger markets increase R&D intensity — broadly consistent with cross-country evidence (Lederman & Maloney, 2003).
- The scale effect prediction is rejected by time-series data (Jones, 1995): TFP growth in the US has been stable despite massive increases in R&D employment.
- Semi-endogenous extensions address this by making long-run growth depend on population growth, not R&D labor levels.
- The model provides microfoundations for technology policy: the optimal R&D subsidy rate in calibrated versions is 50-100% (Jones & Williams, 1998).

> **Exam Tip:** For part (d), connect the model to real-world policy debates: patent length vs breadth, R&D tax credits in OECD countries, and the role of public research universities in basic science. These concrete applications score highly.

> **Professor's Corner:** The Romer (1990) model won Paul Romer the 2018 Nobel Prize for integrating technological change into macroeconomics. Its central contribution was showing that **ideas are different from ordinary goods** — non-rivalry creates increasing returns, making sustained growth possible, while partial excludability (via patents) creates the market failure that justifies policy intervention. The subsequent literature has debated whether the scale effect is empirically relevant and whether the appropriability or business-stealing effect dominates, but the core insight — that market power is both necessary and distortionary in an innovative economy — remains foundational.
>
> → *See also: [Q20](#q-batch47-macro-05) (Romer/GH/AGH knowledge accumulation), [Q15](#q-endogrowth-04) (nature of knowledge), [Q12](#q-endogrowth-01) (role of $a^L$)*

---

# Key Formulas

| Concept | Formula | Parameters |
|---------|---------|------------|
| **CES production** | $Y = [\int_0^N L(i)^\phi di]^{1/\phi}$ | $\phi = (\sigma-1)/\sigma$, $\sigma$ = elasticity of substitution |
| **Elasticity of substitution** | $\sigma = 1/(1-\phi)$ | |
| **Inverse demand** | $p(i) = Y^{1-\phi} L(i)^{\phi-1}$ | |
| **Monopoly price** | $p = w/\phi$ | Markup $1/\phi$ |
| **Profit per firm** | $\pi_i = (1-\phi)Y/N$ | |
| **R&D knowledge creation** | $\dot{N} = BL_A$ (or $\dot{N} = \delta L_N N$) | |
| **Value of patent** | $v = \pi/r$ (steady state) | |
| **Free entry** | $v = w/B$ | |
| **Euler equation** | $\dot{c}/c = (r-\rho)/\theta$ | |
| **Equilibrium R&D labor** | $L_A = L - \phi r N/[B(1-\phi)]$ | |
| **Equilibrium growth (Romer)** | $g^{eq} = (\delta L - \rho)/(\theta+1)$ | Simplified |
| **Socially optimal R&D labor** | $L_A^{opt} = L/(1+\phi)$ | |
| **Appropriability ratio** | $\pi/(Y/N) = 1-\phi$ | Private share of social surplus |

---

> **Cross-Reference Index:**
> - R&D monopolistic competition: Questions [26](#q-rd-mono-batch47-q6), [27](#q-rd-mono-batch48-q6)
> - R&D knowledge accumulation (Romer/GH/AGH): [Q12–15](#q-endogrowth-01), [Q20](#q-batch47-macro-05), [Q22](#q-batch48-macro-02), [Q24](#q-batch48-macro-04)
> - Nature of knowledge: [Q15](#q-endogrowth-04)
> - Solow model: [Q1–6](#q-solow-01)
> - Ramsey model: [Q7–11](#q-ramsey-01)
