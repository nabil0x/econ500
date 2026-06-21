# Equation Explainer — Macroeconomics 502

> Plain-English explanations for every key equation in the course. Use the anchor links from the exam cheat sheet to jump directly to the relevant explanation.

## How to Use This Page

Each entry follows the same order:

1. **Equation** — the formula you need to recognise.
2. **Derivation / logic** — where the formula comes from.
3. **Intuition** — what the equation means economically.
4. **Exam tip** — how to use it quickly in answers.

For exam writing, do not only state the final formula. Start from the economic problem (e.g., capital accumulation identity), take logs and differentiate, then explain the economic meaning in one sentence.

---

## 1. Solow Fundamental Equation {#eq-solow-fundamental}

**Equation:**
$$\dot{k}(t) = s f(k(t)) - (n + g + \delta) k(t)$$

**Variables:** $k = K/(AL)$ = capital per effective worker; $s$ = saving rate; $f(k)$ = output per effective worker; $n$ = population growth rate; $g$ = technological progress rate; $\delta$ = depreciation rate; $\dot{k}$ = time derivative of $k$

**Derivation / logic:**
1. Start from the capital accumulation identity: $\dot{K} = sY - \delta K$.
2. Define $k \equiv K/(AL)$. Take logs: $\ln k = \ln K - \ln A - \ln L$.
3. Differentiate with respect to time: $\dot{k}/k = \dot{K}/K - \dot{A}/A - \dot{L}/L = \dot{K}/K - g - n$.
4. Substitute $\dot{K}/K = (sY - \delta K)/K = sf(k)/k - \delta$.
5. Result: $\dot{k}/k = sf(k)/k - \delta - g - n$.
6. Multiply through by $k$ to obtain the fundamental equation.

**Intuition:** This single equation governs the entire Solow model. Actual investment per effective worker is $sf(k)$. Break-even investment (the amount needed to keep $k$ from falling) is $(n+g+\delta)k$. When actual investment exceeds break-even, $k$ rises (capital deepening). When it falls short, $k$ falls (capital shallowing). The steady state $k^*$ is where the two are equal.

**Exam tip:** This is the single most important algebraic result in growth economics. Draw the Solow diagram: upward-sloping $sf(k)$ curve crossing the straight line $(n+g+\delta)k$ from above. Label $\dot{k}>0$ below $k^*$ and $\dot{k}<0$ above $k^*$. Show that at $k^*$, all per-capita variables grow at rate $g$.

---

## 2. Solow Steady-State $k^*$ {#eq-steady-state-k}

**Equation:**
$$k^* = \left( \frac{s}{n+g+\delta} \right)^{\frac{1}{1-\alpha}}$$

**Variables:** $k^*$ = steady-state capital per effective worker; $s$ = saving rate; $n$ = population growth; $g$ = technological progress; $\delta$ = depreciation; $\alpha$ = capital share in Cobb-Douglas $f(k)=k^\alpha$

**Derivation / logic:**
1. Set $\dot{k} = 0$ in the fundamental equation: $s k^{*\alpha} = (n+g+\delta) k^*$.
2. Divide both sides by $k^{*\alpha}$: $s = (n+g+\delta) k^{*1-\alpha}$.
3. Solve for $k^*$: $k^{*1-\alpha} = s/(n+g+\delta)$.
4. Raise both sides to $1/(1-\alpha)$.

**Intuition:** The steady-state capital stock depends positively on the saving rate $s$ (more saving = more capital) and negatively on $n$, $g$, and $\delta$ (faster depreciation/ dilution = less capital). The elasticity of $k^*$ with respect to $s$ is $1/(1-\alpha)$ — with $\alpha = 1/3$, a 10% increase in saving raises $k^*$ by 15%.

**Exam tip:** From $k^*$, derive $y^* = k^{*\alpha}$ and $c^* = (1-s)y^*$. Show comparative statics: $\partial k^*/\partial s > 0$, $\partial k^*/\partial n < 0$, $\partial k^*/\partial \delta < 0$.

---

## 3. Golden Rule Condition {#eq-golden-rule}

**Equation:**
$$f'(k_{gold}) = n + g + \delta$$

**Variables:** $f'(k_{gold})$ = marginal product of capital at the Golden Rule; $n$ = population growth; $g$ = technological progress; $\delta$ = depreciation

**Derivation / logic:**
1. Steady-state consumption per effective worker: $c^* = f(k^*) - (n+g+\delta)k^*$.
2. Choose $k^*$ to maximise $c^*$. First-order condition: $\partial c^*/\partial k^* = f'(k^*) - (n+g+\delta) = 0$.
3. The $k^*$ satisfying this is the Golden Rule level $k_{gold}$.

**Intuition:** The Golden Rule answers: "What level of capital maximises long-run consumption?" The answer: accumulate capital until the marginal product of capital exactly offsets the "effective depreciation" rate $n+g+\delta$. Beyond this point, extra capital adds less to output than it costs to maintain — consumption falls. In the Solow model, the Golden Rule saving rate is $s_{gold} = \alpha$ (for Cobb-Douglas). Most steady states do NOT automatically satisfy the Golden Rule.

**Exam tip:** $k_{gold}$ is purely technological — it does NOT depend on preferences. The Ramsey model's steady state $k^*$ is always below $k_{gold}$ (for $\rho > 0$). This contrast is a standard exam question. Draw the hump-shaped $c^*$ vs $s$ curve.

---

## 4. Ramsey Euler Equation {#eq-euler-ramsey}

**Equation:**
$$\frac{\dot{c}(t)}{c(t)} = \frac{1}{\theta} \left( f'(k(t)) - \rho - \theta g - \delta \right)$$

**Variables:** $c$ = consumption per effective worker; $\dot{c}/c$ = consumption growth rate; $\theta$ = CRRA coefficient (inverse of IES); $f'(k)$ = marginal product of capital; $\rho$ = subjective discount rate; $g$ = tech progress; $\delta$ = depreciation

**Derivation / logic:**
1. Set up the present-value Hamiltonian: $\mathcal{H} = e^{-(\rho-n)t} \frac{c^{1-\theta}-1}{1-\theta} + \lambda [f(k) - c - (n+g+\delta)k]$.
2. FOC 1 ($\partial\mathcal{H}/\partial c = 0$): $c^{-\theta} e^{-(\rho-n)t} = \lambda$.
3. FOC 2 ($\partial\mathcal{H}/\partial k = -\dot{\lambda}$): $\lambda[f'(k) - (n+g+\delta)] = -\dot{\lambda}$.
4. Take logs and differentiate FOC 1: $\dot{\lambda}/\lambda = -\theta \dot{c}/c - (\rho-n)$.
5. Equate with FOC 2: $-\theta \dot{c}/c - (\rho-n) = -[f'(k) - (n+g+\delta)]$.
6. Rearrange to obtain the Euler equation (adjusting for $g$).

**Intuition:** The Euler equation governs the optimal intertemporal allocation of consumption. If the marginal product of capital exceeds the effective discount rate ($\rho + \theta g + \delta$), consumption grows over time — households defer consumption because the return to saving is high. If $f'(k) < \rho + \theta g + \delta$, consumption falls — households prefer to consume now. At steady state ($\dot{c}=0$), $f'(k^*) = \rho + \theta g + \delta$ (Modified Golden Rule).

**Exam tip:** The Euler equation is the core behavioural equation in all intertemporal macro models — Ramsey, RBC, and NK DSGE. Memorise its derivation via the Hamiltonian. For the exam, always write the Hamiltonian first, then the FOCs, then eliminate $\lambda$.

---

## 5. CRRA Utility Function {#eq-crra-utility}

**Equation:**
$$u(c) = \frac{c^{1-\theta} - 1}{1-\theta}, \quad \theta > 0$$

**Variables:** $u(c)$ = instantaneous utility; $c$ = consumption; $\theta$ = coefficient of relative risk aversion; $1/\theta$ = intertemporal elasticity of substitution (IES)

**Derivation / logic:**
- The CRRA (Constant Relative Risk Aversion) form is the unique utility function with constant elasticity of substitution between consumption at any two points in time.
- Special cases: as $\theta \to 1$, $u(c) \to \ln c$ (log utility, the most common exam case).
- Marginal utility: $u'(c) = c^{-\theta}$ (positive, decreasing).
- Arrow-Pratt measure of relative risk aversion: $-c u''(c)/u'(c) = \theta$.

**Intuition:** CRRA utility has two key properties: (1) constant relative risk aversion $\theta$ — the consumer treats a 1% consumption gamble the same regardless of wealth level; (2) constant intertemporal elasticity of substitution $1/\theta$ — the willingness to substitute consumption across time is constant. Higher $\theta$ means more consumption smoothing (the consumer dislikes consumption volatility and is slow to adjust consumption to interest rate changes).

**Exam tip:** When $\theta = 1$ (log utility), the Euler equation simplifies to $\dot{c}/c = f'(k) - \rho - g - \delta$, which is the most common exam version. Log utility also often yields closed-form solutions.

---

## 6. Ramsey $\dot{c}=0$ Locus (Modified Golden Rule) {#eq-c-dot-zero}

**Equation:**
$$f'(k^*) = \rho + \theta g + \delta$$
$$k^* = \left( \frac{\alpha}{\rho + \theta g + \delta} \right)^{\frac{1}{1-\alpha}} \quad \text{(Cobb-Douglas)}$$

**Variables:** $k^*$ = steady-state capital per effective worker; $\rho$ = discount rate; $\theta$ = CRRA coefficient; $g$ = tech progress; $\delta$ = depreciation; $\alpha$ = capital share

**Derivation / logic:**
1. Set $\dot{c}/c = 0$ in the Euler equation: $f'(k^*) - \rho - \theta g - \delta = 0$.
2. For Cobb-Douglas $f(k) = k^\alpha$: $\alpha k^{*\alpha-1} = \rho + \theta g + \delta$.
3. Solve: $k^{*\alpha-1} = (\rho + \theta g + \delta)/\alpha$, then $k^* = (\alpha/(\rho+\theta g+\delta))^{1/(1-\alpha)}$.

**Intuition:** The $\dot{c}=0$ locus is a vertical line at $k^*$ in the Ramsey phase diagram. For capital below $k^*$ (left of the line), $f'(k) > \rho + \theta g + \delta$, so consumption grows ($\dot{c} > 0$). For capital above $k^*$ (right of the line), consumption falls ($\dot{c} < 0$). The steady-state capital $k^*$ in Ramsey is lower than the Golden Rule $k_{gold}$ because households discount the future ($\rho > 0$). The gap $k_{gold} - k^*$ measures "impatience-driven under-accumulation."

**Exam tip:** Contrast with the $\dot{k}=0$ locus ($c = f(k) - (n+g+\delta)k$, hump-shaped). The intersection of $\dot{c}=0$ (vertical) and $\dot{k}=0$ (hump) gives the steady state. The $\dot{c}=0$ locus is NOT affected by government spending $G$ — this is a key exam distinction.

---

## 7. Speed of Convergence {#eq-speed-of-convergence}

**Equation:**
$$\lambda_{solow} = (1-\alpha)(n+g+\delta)$$
$$\lambda_{ramsey} \approx 0.04 \text{ (under standard calibration)}$$

**Variables:** $\lambda$ = speed of convergence (annual rate); $\alpha$ = capital share; $n$ = population growth; $g$ = tech progress; $\delta$ = depreciation

**Derivation / logic (Solow):**
1. Taylor-expand $\dot{k} = sf(k) - (n+g+\delta)k$ around $k^*$.
2. $\dot{k} \approx [sf'(k^*) - (n+g+\delta)](k-k^*)$.
3. From steady-state condition $sf(k^*) = (n+g+\delta)k^*$, we have $sf'(k^*) = s\alpha k^{*\alpha-1} = \alpha(n+g+\delta)$.
4. Thus $\dot{k} \approx [\alpha(n+g+\delta) - (n+g+\delta)](k-k^*) = -(1-\alpha)(n+g+\delta)(k-k^*)$.
5. The eigenvalue $\lambda = (1-\alpha)(n+g+\delta)$.

**Derivation / logic (Ramsey):**
1. Linearise the two-equation system around $(k^*, c^*)$.
2. The Jacobian has one negative ($\mu_1 < 0$) and one positive eigenvalue.
3. Speed of convergence is $|\mu_1|$, which under standard parameters ($\alpha=1/3$, $\rho=0.02$, $\theta=1$, $g=0.02$, $n=0.01$, $\delta=0.05$) yields $\lambda_{ramsey} \approx 0.04$.
4. Half-life: $t_{1/2} = \ln 2 / \lambda$.

**Intuition:** $\lambda$ measures how fast $k$ approaches $k^*$. In Solow ($\lambda \approx 0.053$, half-life ~13 years), the fixed saving rate means investment responds fully to the gap — convergence is faster. In Ramsey ($\lambda \approx 0.04$, half-life ~17 years), households smooth consumption, dampening the investment response and slowing convergence. The additional margin (consumption smoothing) means the adjustment burden is spread across both $k$ and $c$.

**Exam tip:** For Solow, memorise $\lambda = (1-\alpha)(n+g+\delta)$ — it is the product of labour's share and the effective depreciation rate. For Ramsey, you only need to show the linearised system and note that $|\mu_1| < \lambda_{solow}$.

---

## 8. R&D Knowledge Accumulation {#eq-rd-knowledge}

**Equation:**
$$\dot{A} = B (a^K K)^\beta (a^L L)^\theta A^\phi$$

**Variables:** $\dot{A}$ = new knowledge produced; $B$ = R&D efficiency parameter; $a^K$ = fraction of capital in R&D; $K$ = total capital stock; $\beta$ = elasticity of R&D output to capital; $a^L$ = fraction of labour in R&D; $L$ = total labour; $\theta$ = elasticity of R&D output to labour; $A^\phi$ = spillover from existing knowledge; $\phi$ = returns to knowledge in R&D

**Derivation / logic:**
1. The R&D sector uses capital ($a^K K$) and labour ($a^L L$) to produce new ideas.
2. Existing knowledge $A$ affects R&D productivity (standing on shoulders $\phi > 0$).
3. Convert to growth rate: $g_A = \dot{A}/A = B (a^K K)^\beta (a^L L)^\theta A^{\phi-1}$.
4. Taking logs and differentiating: $\dot{g}_A/g_A = \beta g_K + \theta n + (\phi-1)g_A$.

**Intuition:** Knowledge production uses resources (capital and labour) and benefits from existing knowledge. The parameter $\phi$ determines whether R&D has diminishing ($\phi < 1$), constant ($\phi = 1$), or increasing ($\phi > 1$) returns to knowledge. The "standing on shoulders" effect ($\phi > 0$) means researchers today are more productive because they build on past discoveries. The parameters $\beta$ and $\theta$ measure how productive capital and labour are in R&D.

**Exam tip:** The critical distinction is $\beta+\theta < 1$ (semi-endogenous, Jones 1995) vs $\beta+\theta = 1$ (fully endogenous, Romer 1990). This determines whether policy has level effects or growth effects. In the no-capital version: $\dot{A} = B (a^L L)^\theta A^\phi$ leading to $g_A^* = \theta n / (1-\phi)$.

---

## 9. Steady-State Knowledge Growth ($\dot{g}_A = 0$ and $\dot{g}_K = 0$ Loci) {#eq-gg-loci}

**Equation:**
$$\frac{\dot{g}_A}{g_A} = \beta g_K + \theta n + (\phi - 1) g_A$$
$$\frac{\dot{g}_K}{g_K} = g_A + n - g_K \quad \text{(BGP condition)}$$

**Steady-state solutions:**
$$g_A^* = \frac{(\theta + \beta)n}{1 - \phi - \beta}$$
$$g_K^* = g_A^* + n$$

**Variables:** $g_A = \dot{A}/A$ = knowledge growth rate; $g_K = \dot{K}/K$ = capital growth rate; $\beta, \theta, \phi$ = R&D elasticities; $n$ = population growth

**Derivation / logic:**
1. From $\dot{g}_A/g_A = \beta g_K + \theta n + (\phi-1)g_A$, set $\dot{g}_A = 0$: $\beta g_K = (1-\phi)g_A - \theta n$.
2. From balanced growth: $g_K = g_A + n$ (capital and output grow at same rate).
3. Substitute $g_K$ into $\dot{g}_A=0$: $\beta(g_A + n) = (1-\phi)g_A - \theta n$.
4. Solve: $(\beta - (1-\phi))g_A = -\theta n - \beta n$, giving $g_A^* = (\theta+\beta)n/(1-\phi-\beta)$.

**Intuition:** The $\dot{g}_A=0$ locus in $(g_A, g_K)$ space slopes upward (if $\phi < 1$). The $\dot{g}_K=0$ locus is a 45-degree line shifted by $n$. Their intersection determines the balanced growth path. Population growth $n$ is the ultimate driver of long-run knowledge growth in the semi-endogenous model — without population growth, $g_A^* = 0$ when $\beta+\theta < 1$. An increase in $n$ raises $g_A^*$ (more researchers entering the economy).

**Exam tip:** Draw the $(g_A, g_K)$ plane. Show shifts from changes in $n$, $a^K$, or $a^L$. For a decrease in $n$: $\dot{g}_A=0$ shifts up (less negative intercept), $\dot{g}_K=0$ shifts down — lower $g_A^*$ and $g_K^*$.

---

## 10. Growth Accounting (Solow Residual) {#eq-growth-accounting}

**Equation:**
$$\frac{\dot{Y}}{Y} = \frac{\dot{A}}{A} + \alpha \frac{\dot{K}}{K} + (1-\alpha) \frac{\dot{L}}{L}$$

**Variables:** $\dot{Y}/Y$ = output growth rate; $\dot{A}/A$ = TFP growth (Solow residual); $\dot{K}/K$ = capital growth; $\dot{L}/L$ = labour growth; $\alpha$ = capital's share of output

**Derivation / logic:**
1. Start with Cobb-Douglas $Y = K^\alpha (AL)^{1-\alpha}$.
2. Take logs: $\ln Y = \alpha \ln K + (1-\alpha)(\ln A + \ln L)$.
3. Differentiate: $\dot{Y}/Y = \alpha \dot{K}/K + (1-\alpha)(\dot{A}/A + \dot{L}/L)$.
4. Rearrange: $\dot{A}/A = \dot{Y}/Y - \alpha \dot{K}/K - (1-\alpha)\dot{L}/L$.

**Intuition:** Growth accounting decomposes observed output growth into three components: (1) capital accumulation, (2) labour growth, and (3) a residual — total factor productivity growth (the Solow residual). The residual captures everything not explained by measured factor inputs: technological progress, institutional improvements, organisational change, and measurement error. Under standard calibration ($\alpha = 1/3$), TFP accounts for roughly half of US long-run growth.

**Exam tip:** The Solow residual is often called "a measure of our ignorance." For exam answers, rearrange to isolate $\dot{A}/A$ and interpret it as TFP growth. Use this to argue that technology, not just factor accumulation, drives long-run growth.

---

## 11. New Keynesian IS Curve {#eq-nk-is}

**Equation:**
$$x_t = E_t x_{t+1} - \frac{1}{\sigma} (i_t - E_t \pi_{t+1} - r_t^n)$$

**Variables:** $x_t$ = output gap (log deviation of output from natural level); $E_t x_{t+1}$ = expected future output gap; $\sigma$ = CRRA coefficient (inverse of IES); $i_t$ = nominal interest rate; $E_t \pi_{t+1}$ = expected inflation; $r_t^n$ = natural (Wicksellian) real interest rate

**Derivation / logic:**
1. Start from the household's Euler equation: $c_t^{-\sigma} = \beta (1+i_t) E_t [c_{t+1}^{-\sigma} / (1+\pi_{t+1})]$.
2. Log-linearise around steady state.
3. Express in terms of output gap $x_t$ (deviations from flexible-price output).
4. The natural rate $r_t^n = \rho + \sigma^{-1} g$ is the real rate that would prevail with flexible prices.

**Intuition:** The NK IS curve is the forward-looking demand side of the New Keynesian model. It says the current output gap depends positively on the expected future output gap (intertemporal substitution) and negatively on the real interest rate gap ($i_t - E_t \pi_{t+1} - r_t^n$). When the real rate is above the natural rate, agents save more and consume less — the output gap falls. The natural rate $r_t^n$ shifts with changes in productivity growth, preferences, or fiscal policy.

**Exam tip:** The NK IS curve is the dynamic analogue of the traditional IS curve, but it is forward-looking (expected future output matters). Distinguish clearly from the static IS: $x_t$ depends on $E_t x_{t+1}$, not just current variables. Combine with the NK PC to form the backbone of the NK DSGE model.

---

## 12. New Keynesian Phillips Curve {#eq-nk-phillips}

**Equation:**
$$\pi_t = \beta E_t \pi_{t+1} + \kappa x_t$$

**Variables:** $\pi_t$ = current inflation; $\beta$ = household discount factor; $E_t \pi_{t+1}$ = expected future inflation; $\kappa$ = slope of Phillips curve (increasing in price stickiness, decreasing in discount rate); $x_t$ = output gap

**Derivation / logic:**
1. Firms set prices subject to Calvo contracts: each period fraction $(1-\theta)$ of firms reset price.
2. Firms choose optimal reset price maximising expected discounted profits under sticky prices.
3. Log-linearise the optimal price-setting condition around zero-inflation steady state.
4. Aggregate across all firms: inflation equals discounted expected future inflation plus a term proportional to real marginal cost (which maps to the output gap).
5. The slope $\kappa = (1-\theta)(1-\beta\theta)/\theta \cdot (\sigma + \varphi)$, where $\varphi$ is the inverse Frisch elasticity and $\sigma$ is CRRA.

**Intuition:** The NK PC links current inflation to expected future inflation and the output gap. It is forward-looking: if firms expect higher inflation tomorrow, they raise prices today. The output gap $x_t$ drives marginal cost — when output is above natural, firms face higher costs and raise prices. The slope $\kappa$ is larger when prices are more flexible (fewer Calvo firms). The crucial feature: there is NO automatic trade-off between inflation and the output gap — stabilising inflation also stabilises the output gap when only demand shocks hit (divine coincidence).

**Exam tip:** "Divine coincidence" (Blanchard & Gali, 2007) holds when the only disturbances are to the NK IS curve (demand shocks). With cost-push shocks (markup shocks), there IS a trade-off. The Taylor principle ($\phi_\pi > 1$) is needed to ensure determinacy (unique equilibrium). Draw the three-equation NK DSGE: NK IS + NK PC + Taylor rule.
