# 502 Macro — Detailed Glossary

> Detailed context for every term in the main [GLOSSARY.md](./GLOSSARY.md). Each entry explains the core concept, its role in the course, and exam strategies. Cross-references point to the [Equation Explainer](./EQUATION-EXPLAINER.md) and main glossary anchors.

---

## 1. Abbreviations & Acronyms

<a id="detail-term-bgp"></a>
### **BGP — Balanced Growth Path**
**What it is:** State where all endogenous variables grow at constant exponential rates. Per-capita output, capital, and consumption all grow at rate $g$ on the BGP, while $K/Y$ and per-effective-worker variables ($k$, $y$, $c$) remain constant.
**Why it matters:** The BGP is the macroeconomist's concept of long-run equilibrium. Most growth models are analysed by first characterising the BGP and then studying transitions to it. The constancy of $K/Y$ is the single most robust fact of long-run growth.
**Exam tip:** On the BGP, $g_Y = g_K = g_A + n$. Derive $g_K = g_A + n$ from the capital accumulation identity. Contrast BGP behaviour of per-capita vs aggregate variables.
**Also see:** [Glossary](../GLOSSARY.md#term-bgp) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-crra"></a>
### **CRRA — Constant Relative Risk Aversion**
**What it is:** Utility function $u(c) = (c^{1-\theta} - 1)/(1-\theta)$. Features constant relative risk aversion $\theta$ and constant intertemporal elasticity of substitution $IES = 1/\theta$.
**Why it matters:** CRRA is the workhorse preference for intertemporal macro because it is scale-invariant and yields a tractable Euler equation. It separates risk aversion from time preference, enabling the Ramsey model's endogenous saving rate.
**Exam tip:** When $\theta = 1$, log utility gives $\dot{c}/c = f'(k) - \rho - g - \delta$. Higher $\theta$ = stronger consumption smoothing. Always check whether the exam uses general CRRA or the log special case.
**Also see:** [Glossary](../GLOSSARY.md#term-crra) | [Eqn Explainer: CRRA Utility](../EQUATION-EXPLAINER.md#eq-crra-utility)

<a id="detail-term-crs"></a>
### **CRS / CRTS — Constant Returns to Scale**
**What it is:** $F(\lambda K, \lambda AL) = \lambda F(K, AL)$ for $\lambda > 0$. Doubling all inputs exactly doubles output. The production function is homogeneous of degree 1.
**Why it matters:** CRS permits aggregation and the per-effective-worker transformation that reduces growth models to a single differential equation. CRS plus perfect competition implies zero profits and factor exhaustion (Euler's theorem).
**Exam tip:** Under CRS Cobb-Douglas $Y = K^\alpha(AL)^{1-\alpha}$, output per effective worker is $y = k^\alpha$. Use Euler's theorem: $Y = F_K K + F_L L$ to show total output equals factor payments.
**Also see:** [Glossary](../GLOSSARY.md#term-crs) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-divine-coincidence"></a>
### **DC — Divine Coincidence**
**What it is:** The NK model property (Blanchard and Gali, 2007) where stabilising inflation automatically stabilises the output gap. Holds only when disturbances are demand shocks, not cost-push or markup shocks.
**Why it matters:** Divine coincidence implies the central bank faces no inflation-output gap trade-off. When cost-push shocks exist (e.g., oil price spikes), the trade-off reappears and optimal policy balances both objectives.
**Exam tip:** Divine coincidence breaks if the NK PC includes a cost-push shock term $u_t$: $\pi_t = \beta E_t \pi_{t+1} + \kappa x_t + u_t$. Always mention this qualification.
**Also see:** [Glossary](../GLOSSARY.md#term-divine-coincidence) | [Eqn Explainer: NK Phillips Curve](../EQUATION-EXPLAINER.md#eq-nk-phillips)

<a id="detail-term-dsge"></a>
### **DSGE — Dynamic Stochastic General Equilibrium**
**What it is:** Macro models built from microfoundations (optimising agents), forward-looking expectations, and stochastic shocks. Agents solve intertemporal problems and markets clear in general equilibrium. NK DSGE is the workhorse central bank model.
**Why it matters:** DSGE models replaced old Keynesian models because they are immune to the Lucas Critique (policy changes alter behavioural parameters). Every modern central bank uses some variant for forecasting and policy analysis.
**Exam tip:** The three-equation NK DSGE (NK IS + NK PC + Taylor rule) is the minimum exam version. Understand how each equation derives from microfoundations.
**Also see:** [Glossary](../GLOSSARY.md#term-dsge) | [Eqn Explainer: NK IS](../EQUATION-EXPLAINER.md#eq-nk-is) | [Eqn Explainer: NK PC](../EQUATION-EXPLAINER.md#eq-nk-phillips)

<a id="detail-term-ies"></a>
### **IES — Intertemporal Elasticity of Substitution**
**What it is:** Measures willingness to substitute consumption across time: $IES = 1/\theta$ under CRRA utility. It answers: by what percentage does consumption growth change when the real interest rate changes by 1%?
**Why it matters:** IES determines the consumption response to interest rates. High IES (low $\theta$) means strong consumption growth response. Low IES (high $\theta$) means smooth, unresponsive consumption. In Ramsey, IES directly affects the saddle path slope and convergence speed.
**Exam tip:** The Euler equation $\dot{c}/c = IES \cdot (f'(k) - \rho - \theta g - \delta)$ shows IES scales the consumption growth response to the MPK-discount rate gap.
**Also see:** [Glossary](../GLOSSARY.md#term-ies) | [Eqn Explainer: Euler Equation](../EQUATION-EXPLAINER.md#eq-euler-ramsey)

<a id="detail-term-mpk"></a>
### **MPK — Marginal Product of Capital**
**What it is:** Additional output from one more unit of capital: $MP_K = f'(k)$. Under perfect competition, the real rental rate is $r = MP_K - \delta$.
**Why it matters:** MPK determines the return to saving and investment. Diminishing MPK drives Solow convergence. In Ramsey, MPK relative to the discount rate drives the Euler equation. Cross-country MPK differences inform capital flow debates.
**Exam tip:** For Cobb-Douglas $f(k) = k^\alpha$, $MP_K = \alpha k^{\alpha-1} = \alpha y/k$. In steady state, $MP_K^* = \alpha(n+g+\delta)/s$.
**Also see:** [Glossary](../GLOSSARY.md#term-mpk) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-mpl"></a>
### **MPL — Marginal Product of Labour**
**What it is:** Additional output from one more unit of labour: $MP_L = \partial F(K, AL)/\partial L$. Under perfect competition, the real wage equals $MP_L$.
**Why it matters:** MPL determines the wage rate and labour's share of income. MPL grows at rate $g$ along the BGP. Cross-country wage differences reflect differences in capital per worker and TFP.
**Exam tip:** Under Cobb-Douglas, $MP_L = (1-\alpha)Y/L$. Labour's share is constant at $1-\alpha$, a robust empirical regularity.
**Also see:** [Glossary](../GLOSSARY.md#term-mpl)

<a id="detail-term-nk"></a>
### **NK — New Keynesian**
**What it is:** A school/models combining microfoundations with nominal rigidities (sticky prices). Core NK model: NK IS curve + NK Phillips curve + Taylor rule.
**Why it matters:** NK models are the dominant framework for monetary policy analysis. They provide microfoundations while retaining Keynesian features (monetary non-neutrality in the short run).
**Exam tip:** Know Calvo pricing for NK PC and Euler-equation derivation for NK IS. The Taylor principle ($\phi_\pi > 1$) is essential for determinacy.
**Also see:** [Glossary](../GLOSSARY.md#term-nk) | [Eqn Explainer: NK IS](../EQUATION-EXPLAINER.md#eq-nk-is) | [Eqn Explainer: NK PC](../EQUATION-EXPLAINER.md#eq-nk-phillips)

<a id="detail-term-olgi"></a>
### **OLG / OLGI — Overlapping Generations Model**
**What it is:** Discrete-time model where agents live two periods (young/old). The young work and save; the old consume savings. New generations are born each period.
**Why it matters:** OLG allows heterogeneity across generations, which Ramsey (infinitely-lived agent) cannot capture. It can generate dynamic inefficiency ($k > k_{gold}$) and analyse intergenerational transfers (social security, public debt).
**Exam tip:** Key difference from Ramsey: OLG can have $k > k_{gold}$ because agents do not internalise future generations' welfare. Ricardian equivalence fails in OLG.
**Also see:** [Glossary](../GLOSSARY.md#term-olgi)

<a id="detail-term-rbc"></a>
### **RBC — Real Business Cycle**
**What it is:** Theory (Kydland and Prescott, 1982) that business cycles are driven by real technology shocks, not monetary/nominal shocks. Assumes flexible prices, perfect competition, and rational expectations.
**Why it matters:** RBC revolutionised macro by introducing microfoundations to business cycle analysis. Its methodology (calibration, simulation) became standard for DSGE modelling. First-generation RBC struggled to explain large recessions and monetary non-neutrality.
**Exam tip:** Key critiques: technology shocks are hard to measure; the model cannot explain 2008; it requires implausibly large shocks. Hansen's indivisible labour solved the labour-volatility puzzle.
**Also see:** [Glossary](../GLOSSARY.md#term-rbc)

<a id="detail-term-rcm"></a>
### **RCK / RCM — Ramsey-Cass-Koopmans Model**
**What it is:** Neoclassical growth model with optimising households choosing consumption/saving endogenously. Two-equation system ($\dot{k}$, $\dot{c}$) with saddle-path stability.
**Why it matters:** RCK endogenises the saving rate Solow takes as given, enabling welfare analysis. It introduces the Euler equation and Modified Golden Rule. Foundation for RBC, NK DSGE, and fiscal policy models.
**Exam tip:** The phase diagram ($\dot{k}=0$ hump, $\dot{c}=0$ vertical) and saddle path are the most examined elements. Always derive the Euler equation via the present-value Hamiltonian.
**Also see:** [Glossary](../GLOSSARY.md#term-rcm) | [Eqn Explainer: Euler Equation](../EQUATION-EXPLAINER.md#eq-euler-ramsey) | [Eqn Explainer: c-dot-zero](../EQUATION-EXPLAINER.md#eq-c-dot-zero)

<a id="detail-term-r-d"></a>
### **R&D — Research and Development**
**What it is:** Knowledge-producing activity in endogenous growth models. The R&D sector: $\dot{A} = B(a^K K)^\beta (a^L L)^\theta A^\phi$. Resources allocated to R&D drive long-run technological progress.
**Why it matters:** R&D explains the ultimate source of growth that Solow treats as exogenous. Parameters $\beta, \theta, \phi$ determine whether growth is semi-endogenous or fully endogenous, with major policy implications.
**Exam tip:** The critical distinction: $\phi = 1$ with $\beta+\theta = 1$ gives fully endogenous growth (scale effects). $\beta+\theta < 1$ gives semi-endogenous growth (no scale effects, growth driven by $n$).
**Also see:** [Glossary](../GLOSSARY.md#term-r-d) | [Eqn Explainer: R&D Knowledge](../EQUATION-EXPLAINER.md#eq-rd-knowledge) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-tfp"></a>
### **TFP — Total Factor Productivity**
**What it is:** Efficiency of combined factor inputs. Measured as the Solow residual: $\dot{A}/A = \dot{Y}/Y - \alpha \dot{K}/K - (1-\alpha)\dot{L}/L$.
**Why it matters:** TFP accounts for roughly half of US long-run growth and an even larger share of cross-country income differences. Low TFP explains poverty even with high capital per worker (development accounting).
**Exam tip:** The Solow residual is "a measure of our ignorance." Decompose growth into TFP and factor accumulation. Without TFP growth, per-capita growth stops due to diminishing returns.
**Also see:** [Glossary](../GLOSSARY.md#term-tfp) | [Eqn Explainer: Growth Accounting](../EQUATION-EXPLAINER.md#eq-growth-accounting)

<a id="detail-term-tvc"></a>
### **TVC — Transversality Condition**
**What it is:** Terminal condition $\lim_{t\to\infty} \lambda(t) k(t) = 0$ (or $\lim_{t\to\infty} e^{-\int_0^t (r(s)-n)ds} a(t) = 0$). Prevents infinite debt accumulation. Ensures intertemporal budget balance in Ramsey/OLG.
**Why it matters:** TVC is necessary for optimality in infinite-horizon problems. Without it, households could borrow indefinitely. Together with the Euler equation, the TVC pins down the unique saddle path.
**Exam tip:** In the Ramsey phase diagram, TVC excludes trajectories that spiral out or approach $k=0$ with positive $c$. Only the saddle path satisfies the TVC.
**Also see:** [Glossary](../GLOSSARY.md#term-tvc) | [Eqn Explainer: Euler Equation](../EQUATION-EXPLAINER.md#eq-euler-ramsey)

---

## 2. Core Assumptions

<a id="detail-term-inada"></a>
### **Inada Conditions**
**What it is:** $\lim_{k\to 0} f'(k) = \infty$, $\lim_{k\to\infty} f'(k) = 0$. Marginal product goes to infinity at zero capital and zero at infinite capital.
**Why it matters:** Guarantees a unique interior steady state. Without the first condition, the economy could get stuck at $k = 0$. Without the second, output could grow unboundedly from capital alone.
**Exam tip:** Cobb-Douglas $f(k) = k^\alpha$ automatically satisfies Inada conditions. CES with $\rho \ge 0$ may not.
**Also see:** [Glossary](../GLOSSARY.md#term-inada) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-crs-prod"></a>
### **CRS Production**
**What it is:** $F(\lambda K, \lambda AL) = \lambda F(K, AL)$. Allows analysis in per-effective-worker terms. Factor payments exhaust output (Euler's theorem).
**Why it matters:** CRS permits aggregation and the per-effective-worker transformation. Necessary for a steady state with constant $k$. If returns were increasing, the economy would explode.
**Exam tip:** CRS is necessary for the existence of a steady state. Under CRS + perfect competition, profits are zero and firm size is indeterminate.
**Also see:** [Glossary](../GLOSSARY.md#term-crs-prod) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-diminishing-returns"></a>
### **Diminishing Marginal Returns**
**What it is:** $F_{KK} < 0$, $F_{LL} < 0$. Each additional unit of an input adds less to output.
**Why it matters:** Diminishing returns to capital is why Solow converges to a steady state. If returns were constant (AK model), growth would be endogenous. It also implies conditional convergence.
**Exam tip:** For Cobb-Douglas $f(k) = k^\alpha$, $f''(k) = \alpha(\alpha-1)k^{\alpha-2} < 0$. Lower $\alpha$ = stronger diminishing returns = faster convergence.
**Also see:** [Glossary](../GLOSSARY.md#term-diminishing-returns) | [Eqn Explainer: Speed of Convergence](../EQUATION-EXPLAINER.md#eq-speed-of-convergence)

<a id="detail-term-perfect-competition-macro"></a>
### **Perfect Competition**
**What it is:** Firms are price-takers in factor markets. Factor prices equal marginal products: $r = f'(k) - \delta$, $w = f(k) - kf'(k)$.
**Why it matters:** Justifies aggregate production function and factor pricing underlying growth accounting. Under CRS, implies zero profits. Relaxed in R&D and NK models (monopolistic competition).
**Exam tip:** In Solow, perfect competition is used to derive factor prices. In NK, it is explicitly violated. Always note which pricing regime the model uses.
**Also see:** [Glossary](../GLOSSARY.md#term-perfect-competition-macro)

<a id="detail-term-exogenous-saving"></a>
### **Exogenous Saving Rate**
**What it is:** The saving rate $s$ is constant and given. Households save a fixed fraction of income regardless of the interest rate.
**Why it matters:** Key simplification making Solow a single differential equation. It is also the main weakness: prevents welfare analysis of saving. Ramsey relaxes this by making $s$ endogenous.
**Exam tip:** Exogenous saving means policy cannot affect long-run growth — only level effects. A permanent increase in $s$ raises $k^*$ but not the asymptotic growth rate.
**Also see:** [Glossary](../GLOSSARY.md#term-exogenous-saving) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-exogenous-tech"></a>
### **Exogenous Technological Progress**
**What it is:** $\dot{A}/A = g$ is given — technology is "manna from heaven," not using resources.
**Why it matters:** Defining feature of neoclassical growth models. Explains positive long-run per-capita growth despite diminishing returns. Unsatisfying because it leaves growth unexplained — endogenous growth relaxes this.
**Exam tip:** Exogenous tech means policy cannot affect the long-run growth rate in Solow and Ramsey. Uzawa's theorem shows sustained BGP growth requires labour-augmenting technical change.
**Also see:** [Glossary](../GLOSSARY.md#term-exogenous-tech) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-exogenous-pop"></a>
### **Exogenous Population Growth**
**What it is:** $\dot{L}/L = n$ is given. Labour force grows at a constant rate.
**Why it matters:** Population growth dilutes capital per worker. Higher $n$ lowers steady-state $k^*$. In semi-endogenous models, $n$ is the ultimate driver of long-run TFP growth.
**Exam tip:** In Solow, higher $n$ lowers $k^*$ and $y^*$. In semi-endogenous models ($\beta+\theta < 1$), $g_A^* \propto n$. If $n = 0$, long-run TFP growth is zero — a key policy implication.
**Also see:** [Glossary](../GLOSSARY.md#term-exogenous-pop) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-crra-assumption"></a>
### **CRRA Utility**
**What it is:** $u(c) = (c^{1-\theta} - 1)/(1-\theta)$ with constant IES $= 1/\theta$. Only functional form consistent with balanced growth.
**Why it matters:** CRRA separates consumption-smoothing ($\theta$) from time preference ($\rho$). The Euler equation connects consumption growth to the interest rate-discount rate gap.
**Exam tip:** Log utility ($\theta = 1$) gives the cleanest derivations. Higher $\theta$ = stronger smoothing = slower consumption response to interest rate changes.
**Also see:** [Glossary](../GLOSSARY.md#term-crra-assumption) | [Eqn Explainer: CRRA Utility](../EQUATION-EXPLAINER.md#eq-crra-utility)

<a id="detail-term-no-ponzi"></a>
### **No-Ponzi Condition**
**What it is:** $\lim_{t\to\infty} a(t)e^{-\int_0^t (r(s)-n)ds} = 0$. Prevents households from borrowing indefinitely.
**Why it matters:** Necessary for well-defined intertemporal optimisation. Without it, households could achieve arbitrarily high consumption by borrowing forever. Together with the Euler equation, it pins down the unique consumption path.
**Exam tip:** TVC and no-Ponzi are related: no-Ponzi rules out positive debt accumulation; TVC rules out positive terminal capital. Both ensure saddle-path convergence.
**Also see:** [Glossary](../GLOSSARY.md#term-no-ponzi) | [Eqn Explainer: Euler Equation](../EQUATION-EXPLAINER.md#eq-euler-ramsey)

<a id="detail-term-non-rivalry"></a>
### **Non-Rivalry of Knowledge**
**What it is:** One agent's use of knowledge does not reduce its availability for others. Unlike capital and labour, ideas can be used by everyone simultaneously.
**Why it matters:** Non-rivalry is fundamental to endogenous growth. It creates increasing returns (ideas used freely by all) and market failures (social return > private return). Motivates patents, R&D subsidies, and public research funding.
**Exam tip:** Non-rivalry is why R&D models generate sustained growth: ideas do not face diminishing returns at the aggregate level. Always contrast $A$ (non-rival) with $K$ and $L$ (rival).
**Also see:** [Glossary](../GLOSSARY.md#term-non-rivalry) | [Eqn Explainer: R&D Knowledge](../EQUATION-EXPLAINER.md#eq-rd-knowledge)

<a id="detail-term-partial-excludability"></a>
### **Partial Excludability**
**What it is:** Difficult but not impossible to prevent others from using an idea. Patents create legal excludability, but knowledge inevitably spills over.
**Why it matters:** Creates a wedge between private and social returns to R&D. Private return < social return, justifying government intervention. The optimal patent length balances innovation incentives against static deadweight loss.
**Exam tip:** If excludability were perfect, the market would provide socially optimal R&D. Partial excludability is the key market failure in endogenous growth theory.
**Also see:** [Glossary](../GLOSSARY.md#term-partial-excludability) | [Eqn Explainer: R&D Knowledge](../EQUATION-EXPLAINER.md#eq-rd-knowledge)

<a id="detail-term-monopolistic-competition"></a>
### **Monopolistic Competition**
**What it is:** Firms have market power over differentiated products, setting price above marginal cost. Entry drives profits to zero.
**Why it matters:** In R&D models, generates profits that fund innovation. In NK models, gives firms pricing power that, with sticky prices, creates monetary non-neutrality. The markup is a key parameter in both model classes.
**Exam tip:** In NK, the steady-state markup distortion creates a gap between flexible-price and efficient output. An optimal subsidy can eliminate this. The markup appears in the NK PC slope $\kappa$.
**Also see:** [Glossary](../GLOSSARY.md#term-monopolistic-competition)

<a id="detail-term-sticky-prices"></a>
### **Sticky Prices**
**What it is:** Firms cannot adjust prices instantly (menu costs, Calvo contracts). Price stickiness makes monetary policy non-neutral in the short run.
**Why it matters:** Central friction in NK models. When aggregate demand falls, sticky prices prevent market-clearing price adjustment, so output falls instead. The degree of stickiness determines the NK PC slope.
**Exam tip:** In Calvo pricing, $\theta$ = probability firm cannot reset price. NK PC slope $\kappa = (1-\theta)(1-\beta\theta)/\theta \cdot (\sigma + \varphi)$. Higher $\theta$ = flatter Phillips curve.
**Also see:** [Glossary](../GLOSSARY.md#term-sticky-prices) | [Eqn Explainer: NK Phillips Curve](../EQUATION-EXPLAINER.md#eq-nk-phillips)

<a id="detail-term-rational-expectations"></a>
### **Rational Expectations**
**What it is:** Agents use all available information and make no systematic forecast errors. Expected values are model-consistent: $E_t[\pi_{t+1}]$ uses the true model.
**Why it matters:** Expectations are central to NK dynamics (both IS and PC equations are forward-looking). The Lucas Critique: models estimated from past data cannot evaluate policy regimes because expectations change with policy.
**Exam tip:** Rational expectations + sticky prices overturn the policy ineffectiveness proposition. Unanticipated vs anticipated policy have different effects — a key exam distinction.
**Also see:** [Glossary](../GLOSSARY.md#term-rational-expectations) | [Eqn Explainer: NK IS](../EQUATION-EXPLAINER.md#eq-nk-is) | [Eqn Explainer: NK PC](../EQUATION-EXPLAINER.md#eq-nk-phillips)

---

## 3. Key Theorems & Conditions

<a id="detail-term-golden-rule"></a>
### **Golden Rule**
**What it is:** $f'(k_{gold}) = n + g + \delta$ maximises steady-state consumption per effective worker. For Cobb-Douglas, $s_{gold} = \alpha$.
**Why it matters:** Provides a welfare benchmark. If $k^* > k_{gold}$, consumption can be permanently increased by reducing saving (dynamic inefficiency). Solow can have $k^*$ above or below $k_{gold}$.
**Exam tip:** Golden Rule = technological (depends on $n$, $g$, $\delta$). Modified Golden Rule = preference-dependent ($\rho$, $\theta$). Golden Rule gives maximal $c$; MGR gives optimal $c$ given impatience.
**Also see:** [Glossary](../GLOSSARY.md#term-golden-rule) | [Eqn Explainer: Golden Rule](../EQUATION-EXPLAINER.md#eq-golden-rule)

<a id="detail-term-modified-golden-rule"></a>
### **Modified Golden Rule**
**What it is:** $f'(k^*) = \rho + \theta g + \delta$ — the Ramsey steady-state condition from $\dot{c}=0$. For $\rho > 0$, $k^* < k_{gold}$.
**Why it matters:** Shows optimal capital depends on preferences ($\rho$, $\theta$) as well as technology ($\delta$). The gap $k_{gold} - k^*$ measures the cost of impatience.
**Exam tip:** In the Ramsey phase diagram, the $\dot{c}=0$ locus is vertical at $k^*$. Any shock shifting $\dot{c}=0$ (e.g., $\rho$ change) permanently changes $k^*$.
**Also see:** [Glossary](../GLOSSARY.md#term-modified-golden-rule) | [Eqn Explainer: c-dot-zero](../EQUATION-EXPLAINER.md#eq-c-dot-zero)

<a id="detail-term-uzawa-theorem"></a>
### **Uzawa's Theorem**
**What it is:** Sustained steady-state growth requires purely labour-augmenting (Harrod-neutral) technical progress: $Y = F(K, AL)$. This is the only form consistent with constant $K/Y$.
**Why it matters:** Justifies the ubiquitous $Y = F(K, AL)$ specification. Uzawa says if the economy is on a BGP, technical progress must be representable as labour-augmenting.
**Exam tip:** Uzawa does NOT say technical progress is actually labour-augmenting — it says BGP requires it to be representable as such. For Cobb-Douglas, the distinction between Harrod and Hicks neutrality is irrelevant.
**Also see:** [Glossary](../GLOSSARY.md#term-uzawa-theorem) | [Glossary: Harrod-Neutral](../GLOSSARY.md#term-harrod-neutral)

<a id="detail-term-euler-equation"></a>
### **Euler Equation**
**What it is:** $\dot{c}/c = (1/\theta)(f'(k) - \rho - \theta g - \delta)$. Intertemporal optimality condition linking consumption growth to MPK-discount rate gap.
**Why it matters:** The single most important behavioural equation in dynamic macro. Appears in Ramsey, RBC, NK DSGE, and household finance. Derived from the present-value Hamiltonian.
**Exam tip:** Derive in three steps: (1) write Hamiltonian, (2) FOCs, (3) eliminate costate variable $\lambda$. Log-linearised version $\dot{c}/c = \sigma(r - \rho)$ is the common NK form.
**Also see:** [Glossary](../GLOSSARY.md#term-euler-equation) | [Eqn Explainer: Euler Equation](../EQUATION-EXPLAINER.md#eq-euler-ramsey)

<a id="detail-term-jones-critique"></a>
### **Jones Critique**
**What it is:** Fully endogenous models predict TFP growth rises with R&D labour; US data shows no such trend despite massive R&D increase (Jones, 1995).
**Why it matters:** Discredited first-generation fully endogenous models. Led to semi-endogenous growth ($\beta+\theta < 1$) where the scale effect is eliminated and long-run growth is driven by population growth.
**Exam tip:** If $\beta+\theta = 1$ and $\phi = 1$, the model is fully endogenous with scale effects. If $\beta+\theta < 1$, semi-endogenous — policy has level effects only. Always cite Jones Critique when discussing policy and long-run growth.
**Also see:** [Glossary](../GLOSSARY.md#term-jones-critique) | [Eqn Explainer: R&D Knowledge](../EQUATION-EXPLAINER.md#eq-rd-knowledge) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-conditional-convergence"></a>
### **Conditional Convergence**
**What it is:** Poor countries grow faster the further they are from their own steady state, controlling for $s$, $n$, $g$, $\delta$. Speed: $\lambda = (1-\alpha)(n+g+\delta)$.
**Why it matters:** Reconciles Solow with data: absolute convergence fails, but conditional convergence holds once differences in saving, population, and human capital are controlled (Barro regressions).
**Exam tip:** Distinguish absolute vs conditional convergence. Use the Solow diagram to show how different $s$ or $n$ produce different $k^*$ even for identical $k(0)$.
**Also see:** [Glossary](../GLOSSARY.md#term-conditional-convergence) | [Eqn Explainer: Speed of Convergence](../EQUATION-EXPLAINER.md#eq-speed-of-convergence)

<a id="detail-term-harrod-neutral"></a>
### **Harrod-Neutral (Labour-Augmenting) Tech Progress**
**What it is:** $Y = F(K, AL)$. Technology multiplies labour, making workers more productive. Only form consistent with BGP (Uzawa).
**Why it matters:** Implies $K/Y$ constant on the BGP — the most robust growth fact. Real wage grows at $g$, return to capital is constant on the BGP.
**Exam tip:** Contrast with Hicks-neutral: $Y = AF(K, L)$. Under Harrod-neutral, $MP_K$ is constant on the BGP. Under Hicks-neutral, both $MP_K$ and $MP_L$ rise proportionally.
**Also see:** [Glossary](../GLOSSARY.md#term-harrod-neutral) | [Glossary: Uzawa](../GLOSSARY.md#term-uzawa-theorem)

<a id="detail-term-hicks-neutral-macro"></a>
### **Hicks-Neutral (Output-Augmenting) Tech Progress**
**What it is:** $Y = A(t) F(K, L)$. Technology multiplies output directly. Standard in growth accounting and RBC models.
**Why it matters:** Not consistent with balanced growth (Uzawa). For Cobb-Douglas, Hicks-neutral and Harrod-neutral are observationally equivalent — the distinction matters for CES or general production forms.
**Exam tip:** For $Y = K^\alpha(AL)^{1-\alpha}$, this is Harrod-neutral but can be rewritten as $A^{1-\alpha}K^\alpha L^{1-\alpha}$, looking Hicks-neutral. The observational equivalence only holds for Cobb-Douglas.
**Also see:** [Glossary](../GLOSSARY.md#term-hicks-neutral-macro)

<a id="detail-term-ricardian-equivalence"></a>
### **Ricardian Equivalence**
**What it is:** Under lump-sum taxes, debt-financed and tax-financed spending have identical effects. Households internalise the government budget constraint — private saving offsets public dissaving.
**Why it matters:** Implies deficit-financed fiscal stimulus is ineffective. Conditions: lump-sum taxes, perfect capital markets, infinitely-lived agents. Each violation weakens the result.
**Exam tip:** Ricardian equivalence holds in Ramsey (infinitely-lived agents) but fails in OLG (future taxes fall on generations not yet born). State assumptions explicitly.
**Also see:** [Glossary](../GLOSSARY.md#term-ricardian-equivalence)

<a id="detail-term-chamley-judd"></a>
### **Chamley-Judd Result**
**What it is:** Optimal long-run capital income tax rate is zero in the Ramsey model. Taxing capital has compounding distortionary effects.
**Why it matters:** Cornerstone of optimal tax theory. Suggests taxing labour or consumption rather than capital. With heterogeneity or political constraints, positive capital taxes may be optimal.
**Exam tip:** Intuition: capital tax distorts both the level and growth rate of capital. The distortion compounds over time, making the optimal long-run rate zero.
**Also see:** [Glossary](../GLOSSARY.md#term-chamley-judd)

<a id="detail-term-scale-effect"></a>
### **Scale Effect**
**What it is:** Prediction that larger economies (more R&D workers) have faster TFP growth. In Romer (1990), doubling R&D workforce doubles the rate of idea creation.
**Why it matters:** Empirically false (Jones Critique). Led to semi-endogenous models where $\beta+\theta < 1$ eliminates the scale effect. Central empirical test distinguishing model generations.
**Exam tip:** In semi-endogenous models, $g_A^*$ depends only on $n$, not the level of R&D labour. A one-time increase in R&D labour raises the level of $A$ permanently but does not affect $g_A^*$.
**Also see:** [Glossary](../GLOSSARY.md#term-scale-effect) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-samuelson-condition-macro"></a>
### **Dynamic Efficiency**
**What it is:** Economy is dynamically efficient if $k \le k_{gold}$ (consumption cannot be increased by lowering saving). Equivalent to $r \ge g$.
**Why it matters:** Dynamic inefficiency ($k > k_{gold}$) means the economy oversaves. Possible in Solow (if $s$ is very high) and OLG, but not Ramsey (Modified Golden Rule ensures $k^* < k_{gold}$).
**Exam tip:** The condition $r < g$ (Piketty) has revived dynamic efficiency debates. In OLG, dynamic inefficiency provides a rationale for pay-as-you-go social security.
**Also see:** [Glossary](../GLOSSARY.md#term-samuelson-condition-macro) | [Eqn Explainer: Golden Rule](../EQUATION-EXPLAINER.md#eq-golden-rule)

<a id="detail-term-growth-accounting"></a>
### **Growth Accounting**
**What it is:** $\dot{Y}/Y = \dot{A}/A + \alpha \dot{K}/K + (1-\alpha)\dot{L}/L$. Decomposes growth into TFP and factor accumulation.
**Why it matters:** Primary empirical tool for understanding growth sources. Answers: how much comes from accumulating inputs vs using them more efficiently? Development accounting extends the method to cross-country income differences.
**Exam tip:** Rearrange to isolate $\dot{A}/A$ (Solow residual = TFP). With $\alpha = 1/3$, 1% output growth from 1% capital and 1% labour growth gives zero TFP growth — all factor accumulation.
**Also see:** [Glossary](../GLOSSARY.md#term-growth-accounting) | [Eqn Explainer: Growth Accounting](../EQUATION-EXPLAINER.md#eq-growth-accounting)

---

## 4. Key Models

<a id="detail-term-solow"></a>
### **Solow Growth Model**
**What it is:** $\dot{k} = s f(k) - (n+g+\delta)k$. CRS, diminishing returns, Inada conditions, exogenous $s$, $n$, $g$. Unique stable steady state $k^*$.
**Why it matters:** Foundation of all modern growth theory. Explains how capital accumulation drives transition and why long-run growth requires tech progress. Predicts conditional convergence. Limitation: $s$ and technology are exogenous.
**Exam tip:** The Solow diagram ($sf(k)$ vs $(n+g+\delta)k$) is the most important graph in growth. Practise shocks: $s \uparrow$ shifts $sf(k)$ up; $n \downarrow$ flattens break-even line. Speed of convergence: $\lambda = (1-\alpha)(n+g+\delta)$.
**Also see:** [Glossary](../GLOSSARY.md#term-solow) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental) | [Eqn Explainer: Steady State](../EQUATION-EXPLAINER.md#eq-steady-state-k)

<a id="detail-term-ramsey"></a>
### **Ramsey-Cass-Koopmans Model**
**What it is:** Neoclassical growth with optimising households — endogenous saving. Two equations: $\dot{k} = f(k) - c - (n+g+\delta)k$, $\dot{c}/c = (f'(k) - \rho - \theta g - \delta)/\theta$. Saddle-path stability.
**Why it matters:** Endogenises saving for welfare analysis. Introduces Euler equation and Modified Golden Rule. Foundation for RBC, fiscal policy, and NK DSGE. Key results: $k^* < k_{gold}$, slower convergence than Solow.
**Exam tip:** Phase diagram: $\dot{k}=0$ (hump), $\dot{c}=0$ (vertical at $k^*$). Saddle path is the unique convergent trajectory. Government spending shifts $\dot{k}=0$ down; higher $\rho$ shifts $\dot{c}=0$ left.
**Also see:** [Glossary](../GLOSSARY.md#term-ramsey) | [Eqn Explainer: Euler Equation](../EQUATION-EXPLAINER.md#eq-euler-ramsey) | [Eqn Explainer: c-dot-zero](../EQUATION-EXPLAINER.md#eq-c-dot-zero)

<a id="detail-term-endogenous-growth"></a>
### **R&D Endogenous Growth (Romer/GH/AGH)**
**What it is:** $\dot{A} = B(a^K K)^\beta (a^L L)^\theta A^\phi$. Knowledge is endogenously produced by profit-driven R&D. Non-rivalry creates increasing returns.
**Why it matters:** Explains the ultimate source of growth that Solow treats as exogenous. Three generations: fully endogenous (Romer 1990, $\beta+\theta=1$), Schumpeterian (Aghion-Howitt), semi-endogenous (Jones 1995, $\beta+\theta<1$).
**Exam tip:** Semi-endogenous: $g_A^* = (\theta+\beta)n/(1-\phi-\beta)$. Fully endogenous: policy can permanently raise $g$. Jones Critique empirically favours semi-endogenous. Know the $(g_A, g_K)$ phase diagram.
**Also see:** [Glossary](../GLOSSARY.md#term-endogenous-growth) | [Eqn Explainer: R&D Knowledge](../EQUATION-EXPLAINER.md#eq-rd-knowledge) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-olgi-model"></a>
### **Overlapping Generations (OLG) Model**
**What it is:** Discrete-time, two-period lives (young/old). The young work and save; the old consume. $k_{t+1} = (1/(1+n)(1+g)) s(w_t)$.
**Why it matters:** Introduces intergenerational heterogeneity impossible in Ramsey. Can generate dynamic inefficiency ($k > k_{gold}$). Ricardian equivalence fails. Framework for analysing social security and public debt.
**Exam tip:** Key differences from Ramsey: OLG can have $k > k_{gold}$; speed of convergence differs; future tax increases fall on unborn generations. Dynamic efficiency condition in OLG: $r > n$.
**Also see:** [Glossary](../GLOSSARY.md#term-olgi-model)

<a id="detail-term-rbc-model"></a>
### **Real Business Cycle (RBC) Model**
**What it is:** $y_t = z_t k_t^\theta l_t^{1-\theta}$ with technology shocks $z_{t+1} = \phi z_t + \varepsilon_t$. Flexible prices, perfect competition, rational expectations. Business cycles driven by real shocks.
**Why it matters:** Introduced DSGE methodology (calibration, simulation). Demonstrated technology shocks can replicate key business cycle facts. Hansen's indivisible labour solved labour-volatility puzzle.
**Exam tip:** Critiques: technology shocks are unobservable; cannot explain 2008; money is neutral. NK DSGE incorporates RBC features plus sticky prices. Know the AR(1) shock process.
**Also see:** [Glossary](../GLOSSARY.md#term-rbc-model)

<a id="detail-term-nk-dsge"></a>
### **New Keynesian DSGE Model**
**What it is:** RBC microfoundations + sticky prices (Calvo). Three equations: NK IS ($x_t = E_t x_{t+1} - \sigma^{-1}(i_t - E_t\pi_{t+1} - r_t^n)$), NK PC ($\pi_t = \beta E_t\pi_{t+1} + \kappa x_t$), Taylor rule ($i_t = \bar{r} + \pi_t + \phi_\pi(\pi_t - \bar{\pi}) + \phi_x x_t$).
**Why it matters:** Workhorse central bank model. Integrates short-run fluctuations (sticky prices) with long-run growth (RBC microfoundations). Used for inflation targeting, forward guidance, ZLB analysis.
**Exam tip:** Divine coincidence holds only without cost-push shocks. Taylor principle ($\phi_\pi > 1$) ensures determinacy. The natural rate $r_t^n$ is the monetary policy benchmark.
**Also see:** [Glossary](../GLOSSARY.md#term-nk-dsge) | [Eqn Explainer: NK IS](../EQUATION-EXPLAINER.md#eq-nk-is) | [Eqn Explainer: NK PC](../EQUATION-EXPLAINER.md#eq-nk-phillips)

---

## 5. Equilibrium & Growth Concepts

<a id="detail-term-steady-state"></a>
### **Steady State**
**What it is:** $\dot{k} = 0$: $s f(k^*) = (n+g+\delta)k^*$. Per-effective-worker variables constant; per-capita variables grow at $g$; aggregates at $n+g$.
**Why it matters:** Long-run equilibrium of growth models. Provides baseline for transition dynamics. Cross-country income differences interpreted as steady-state differences.
**Exam tip:** Start Solow analysis by computing $k^*$, then $y^* = f(k^*)$, $c^* = (1-s)y^*$. The condition $sf(k^*) = (n+g+\delta)k^*$ implies convergence from any initial $k$.
**Also see:** [Glossary](../GLOSSARY.md#term-steady-state) | [Eqn Explainer: Steady State](../EQUATION-EXPLAINER.md#eq-steady-state-k)

<a id="detail-term-saddle-path"></a>
### **Saddle Path**
**What it is:** The unique convergent trajectory in the Ramsey phase diagram. Consumption $c$ jumps to the saddle path at $t=0$ (jump variable); $k$ evolves continuously (state variable).
**Why it matters:** The saddle path is the equilibrium of the Ramsey model. Only this trajectory satisfies the TVC and converges to $(k^*, c^*)$. Determines whether the model has a unique equilibrium.
**Exam tip:** Draw four directional arrows in $(k,c)$ space. Saddle path enters steady state from north-east and south-west quadrants. A permanent shock shifts the $\dot{c}=0$ locus — the saddle path jumps to a new trajectory.
**Also see:** [Glossary](../GLOSSARY.md#term-saddle-path) | [Eqn Explainer: c-dot-zero](../EQUATION-EXPLAINER.md#eq-c-dot-zero)

<a id="detail-term-phase-diagram"></a>
### **Phase Diagram**
**What it is:** $(k,c)$ space with $\dot{k}=0$ (hump-shaped: $c = f(k) - (n+g+\delta)k$) and $\dot{c}=0$ (vertical: $f'(k)=\rho+\theta g+\delta$) loci. Four directional quadrants.
**Why it matters:** Central analytical tool for the Ramsey model. Reveals saddle-path stability: one convergent arm, all other trajectories diverge. Used to analyse policy shock effects.
**Exam tip:** Memorise the four quadrants. North-west: $\dot{k} < 0$, $\dot{c} > 0$. Saddle path has positive slope. Government spending shifts $\dot{k}=0$ down but does not affect $\dot{c}=0$.
**Also see:** [Glossary](../GLOSSARY.md#term-phase-diagram) | [Eqn Explainer: c-dot-zero](../EQUATION-EXPLAINER.md#eq-c-dot-zero)

<a id="detail-term-transition-dynamics"></a>
### **Transition Dynamics**
**What it is:** Adjustment path from initial $k(0)$ to $k^*$. Solow: monotonic at decreasing rate $\lambda$. Ramsey: $c$ jumps to saddle path, then both converge together.
**Why it matters:** Explains why growth rates differ across countries even with the same steady state. Countries far below $k^*$ grow faster. Speed of convergence determines how long reforms take to affect output.
**Exam tip:** In Solow, $\dot{k} \approx -\lambda(k - k^*)$. Half-life: $t_{1/2} = \ln 2/\lambda$. In Ramsey, the initial consumption jump is determined by the saddle path condition.
**Also see:** [Glossary](../GLOSSARY.md#term-transition-dynamics) | [Eqn Explainer: Speed of Convergence](../EQUATION-EXPLAINER.md#eq-speed-of-convergence)

<a id="detail-term-speed-of-convergence"></a>
### **Speed of Convergence**
**What it is:** $\lambda_{solow} = (1-\alpha)(n+g+\delta)$; $\lambda_{ramsey} \approx 0.04$. Rate at which $k$ approaches $k^*$. Ramsey converges slower due to consumption smoothing.
**Why it matters:** Determines how long policy reforms take to affect output. Empirical estimate $\lambda \approx 0.02$ (Barro) gives half-life ~35 years. The difference between Solow (half-life 13yr) and Ramsey (half-life 17yr) reflects the additional consumption-smoothing margin.
**Exam tip:** For Solow: $\lambda = (1-\alpha)(n+g+\delta)$ = labour share $\times$ effective depreciation rate. For Ramsey: linearise the system and note the negative eigenvalue is smaller.
**Also see:** [Glossary](../GLOSSARY.md#term-speed-of-convergence) | [Eqn Explainer: Speed of Convergence](../EQUATION-EXPLAINER.md#eq-speed-of-convergence)

<a id="detail-term-dynamic-inefficiency"></a>
### **Dynamic Inefficiency**
**What it is:** $k > k_{gold}$ — saving rate too high; reducing $s$ would permanently increase consumption. Condition: $r < g$.
**Why it matters:** Possible in Solow (if $s > s_{gold}$) and OLG (disconnected generational saving). Impossible in Ramsey (Modified Golden Rule ensures $k^* < k_{gold}$). $r < g$ (Piketty) has revived interest.
**Exam tip:** Distinguish: Solow can have dynamic inefficiency but requires high $s$; Ramsey never does; OLG can because generations do not coordinate.
**Also see:** [Glossary](../GLOSSARY.md#term-dynamic-inefficiency) | [Eqn Explainer: Golden Rule](../EQUATION-EXPLAINER.md#eq-golden-rule)

<a id="detail-term-semi-endogenous"></a>
### **Semi-Endogenous Growth**
**What it is:** $\beta+\theta < 1$ — diminishing returns to idea production. Steady-state $g_A^* = (\theta+\beta)n/(1-\phi-\beta)$, driven solely by population growth. Policy has level effects, not growth effects.
**Why it matters:** Resolves Jones Critique — eliminates the empirically false scale effect. Implication: long-run growth is ultimately determined by $n$, not R&D policy. R&D subsidies raise the level of TFP but not its long-run growth rate.
**Exam tip:** Condition $\beta+\theta < 1$ is the defining feature. In $(g_A, g_K)$ space, $\dot{g}_A=0$ slopes upward. A permanent increase in R&D labour shifts $\dot{g}_A=0$ temporarily but does not change $g_A^*$ in the long run.
**Also see:** [Glossary](../GLOSSARY.md#term-semi-endogenous) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-fully-endogenous"></a>
### **Fully Endogenous Growth**
**What it is:** $\beta+\theta = 1$, $\phi = 1$ (Romer 1990). Sustained per-capita growth even with $n = 0$. Policy can permanently affect $g_A$.
**Why it matters:** First models to explain sustained growth from within. Showed profit-driven innovation generates perpetual progress. However, predicts scale effect (empirically rejected by Jones Critique).
**Exam tip:** Fully endogenous = growth effects from policy; semi-endogenous = level effects only. Always check $\beta+\theta = 1$ and whether $n > 0$ is required. Jones (1995) empirically favours semi-endogenous.
**Also see:** [Glossary](../GLOSSARY.md#term-fully-endogenous) | [Eqn Explainer: gg-loci](../EQUATION-EXPLAINER.md#eq-gg-loci)

<a id="detail-term-poverty-trap"></a>
### **Poverty Trap**
**What it is:** Self-reinforcing mechanism keeping economy at low income. $\dot{k}/k$ crosses zero at three points: two stable steady states (poverty and prosperity) separated by an unstable threshold.
**Why it matters:** Explains why some countries fail to grow despite low initial income. Mechanisms: low saving, high fertility, low human capital, weak institutions. Justifies "Big Push" development strategies.
**Exam tip:** Draw $\dot{k}/k$ with three crossings. The unstable threshold means $k < k_{threshold}$ leads to poverty, $k > k_{threshold}$ leads to prosperity. A one-time capital injection can push past the threshold.
**Also see:** [Glossary](../GLOSSARY.md#term-poverty-trap) | [Glossary: Big Push](../GLOSSARY.md#term-big-push)

<a id="detail-term-convergence-club"></a>
### **Convergence Club**
**What it is:** Group of countries converging to the same steady state, while others converge to a different one. Multiple clubs arise from threshold externalities and institutional differences.
**Why it matters:** Reconciles Solow with "twin peaks" (Quah, 1997) — the world income distribution is bimodal. Club membership depends on initial conditions, institutions, geography, and policy.
**Exam tip:** Convergence clubs = multiple equilibria. Use the poverty trap diagram (three intersections) to show how multiple steady states create clubs. The "club" depends on which basin the economy starts in.
**Also see:** [Glossary](../GLOSSARY.md#term-convergence-club) | [Glossary: Poverty Trap](../GLOSSARY.md#term-poverty-trap)

<a id="detail-term-big-push"></a>
### **Big Push**
**What it is:** Coordinated, large-scale investment (Rosenstein-Rodan, 1943) to push an economy past the poverty trap threshold. Simultaneous investment across sectors creates demand spillovers making each investment profitable.
**Why it matters:** Provides rationale for coordinated industrial policy and foreign aid. Challenges the view that incremental reforms suffice. Sachs (2005) advocated it for Africa; Easterly (2001) critiques aid effectiveness.
**Exam tip:** Connect to the poverty trap diagram: a Big Push raises capital above the unstable threshold. Discuss both theoretical logic and empirical challenges (coordination, governance, absorptive capacity).
**Also see:** [Glossary](../GLOSSARY.md#term-big-push) | [Glossary: Poverty Trap](../GLOSSARY.md#term-poverty-trap)

<a id="detail-term-level-effect"></a>
### **Level Effect vs Growth Effect**
**What it is:** Level effect: permanent change in $y^*$ but not $\dot{y}/y$. Growth effect: permanent change in long-run $\dot{y}/y$. Solow: level only. Fully endogenous: possible growth effect.
**Why it matters:** Growth effects compound forever, making them vastly more important for welfare. Central policy question: can policy permanently raise the growth rate? Solow/Ramsey: no. Fully endogenous: yes. Semi-endogenous: no.
**Exam tip:** In Solow, $s$ increase raises $y^*$ (level) but asymptotic growth stays $g$. In semi-endogenous models, $a^L$ increase raises $A$ level but not $g_A^*$. In fully endogenous, it raises $g_A^*$.
**Also see:** [Glossary](../GLOSSARY.md#term-level-effect) | [Eqn Explainer: Solow Fundamental](../EQUATION-EXPLAINER.md#eq-solow-fundamental)

<a id="detail-term-taylor-rule"></a>
### **Taylor Rule**
**What it is:** $i_t = \bar{r} + \pi_t + \phi_\pi(\pi_t - \bar{\pi}) + \phi_x x_t$. Central bank sets nominal rate in response to inflation and output gap. $\phi_\pi > 1$ (Taylor principle) ensures determinacy.
**Why it matters:** Closes the NK DSGE model. The Taylor principle is necessary for unique equilibrium — if $\phi_\pi < 1$, sunspot fluctuations are possible. Both a positive description and normative prescription.
**Exam tip:** In the NK model, the Taylor rule determines $i_t$ entering the NK IS. The natural rate $r_t^n$ is the benchmark: when $i_t = r_t^n + E_t\pi_{t+1}$, the output gap is zero.
**Also see:** [Glossary](../GLOSSARY.md#term-taylor-rule) | [Eqn Explainer: NK IS](../EQUATION-EXPLAINER.md#eq-nk-is)

<a id="detail-term-wicksellian-rate"></a>
### **Wicksellian (Natural) Rate**
**What it is:** $r_t^n = \rho + \sigma^{-1} g$ — the real rate that would prevail with flexible prices. The benchmark real rate equating saving and investment at potential output.
**Why it matters:** The natural rate is the monetary policy benchmark (Woodford, 2003). When the central bank sets $i_t = r_t^n + E_t\pi_{t+1}$, the output gap is zero and (under divine coincidence) inflation is stabilised.
**Exam tip:** $r_t^n$ is not directly observable — it must be estimated. The real interest rate gap ($i_t - E_t\pi_{t+1} - r_t^n$) drives the output gap in the NK IS. Secular decline in $r^n$ is a major current topic.
**Also see:** [Glossary](../GLOSSARY.md#term-wicksellian-rate) | [Eqn Explainer: NK IS](../EQUATION-EXPLAINER.md#eq-nk-is)

<a id="detail-term-learning-by-doing"></a>
### **Learning by Doing**
**What it is:** Knowledge accumulates as a byproduct of production (Arrow, 1962). $\dot{A} = \delta L$: knowledge growth proportional to labour engaged in production. No deliberate R&D required.
**Why it matters:** Simplest endogenous growth mechanism. Does not require monopolistic competition — learning is a byproduct, not a deliberate investment. Shares the scale effect problem. Implies trade protection (protecting manufacturing) can promote learning.
**Exam tip:** Compare with R&D models: learning by doing has no resource cost but weaker microfoundations. Use in answers about knowledge spillovers and industrial policy in developing countries.
**Also see:** [Glossary](../GLOSSARY.md#term-learning-by-doing)

---

> **Navigation:** [Main Glossary](./GLOSSARY.md) | [Equation Explainer](./EQUATION-EXPLAINER.md) | [Exam Cheat Sheet](./EXAM-CHEAT-SHEET.md) | [Answers: Solow-Ramsey-Endogenous](./answers-solow-ramsey-endogenous.md)
