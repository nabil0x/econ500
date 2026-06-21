# 502 Macro — Exam Cheat Sheet

## Solow Growth Model
| | |
|---|---|
| **Production (CD)** | $Y=K^\alpha(AL)^{1-\alpha}$, $y=f(k)=k^\alpha$ per eff. worker |
| **Capital accumulation** | $\dot{K}=sY-\delta K$; $\dot{k}=sf(k)-(n+g+\delta)k$ |
| **Steady state ($\dot{k}=0$)** | $k^*=\bigl(\frac{s}{n+g+\delta}\bigr)^{\frac1{1-\alpha}}$, $y^*=\bigl(\frac{s}{n+g+\delta}\bigr)^{\frac{\alpha}{1-\alpha}}$ |
| **Golden Rule** | $f'(k_{gold})=n+g+\delta$; $s_{gold}=\alpha$; $c^*$ max |
| **Speed of convergence** | $\lambda=(1-\alpha)(n+g+\delta)$; half-life $t_{1/2}=\ln2/\lambda\approx13$yr |
| **Elasticity of $y^*$ wrt $n$** | $\varepsilon_{y^*,n}=-\frac{\alpha}{1-\alpha}\frac{n}{n+g+\delta}$; e.g. $n\downarrow2\%\to1\%\Rightarrow y^*\uparrow\sim7.8\%$ |
| **Growth accounting** | $\frac{\dot{Y}}{Y}=\frac{\dot{A}}{A}+\alpha\frac{\dot{K}}{K}+(1-\alpha)\frac{\dot{L}}{L}$; Solow residual = TFP |
| **BGP** | $k,y,c$ per eff. worker constant; $K/L$, $Y/L$ grow at $g$; aggregates at $n+g$ |
| **Steady-state $c$** | $c^*(s)=(1-s)\bigl(\frac{s}{n+g+\delta}\bigr)^{\alpha/(1-\alpha)}$; hump-shaped in $s$ |
| **Elasticity of $y^*$ wrt $s$** | $\varepsilon_{y^*,s}=\frac{\alpha}{1-\alpha}$; $\alpha=1/3\Rightarrow10\%\ \Delta s\Rightarrow5\%\ \Delta y^*$ |
| **Level vs growth effect** | $\partial\ln y(t)/\partial t=g$ indep. of $s$; saving changes $y$-path level, not slope |

## Ramsey-Cass-Koopmans
| | |
|---|---|
| **CRRA utility** | $u(c)=\frac{c^{1-\theta}-1}{1-\theta}$; IES $=1/\theta$ |
| **Objective** | $U=\int_0^\infty e^{-\rho t}u(c(t))\frac{L(t)}{H}dt$ |
| **Household constraint** | $\dot{a}=ra+w-c-na$ |
| **Capital dynamics** | $\dot{k}=f(k)-c-(n+g+\delta)k$ |
| **Euler equation** | $\frac{\dot{c}}{c}=\frac1\theta\bigl(f'(k)-\rho-\theta g-\delta\bigr)$ |
| **$\dot{c}=0$ locus** | $f'(k^*)=\rho+\theta g+\delta$ (vertical line at $k^*$) |
| **$\dot{k}=0$ locus** | $c=f(k)-(n+g+\delta)k$ (inverted-U, peaks at $k_{gold}$) |
| **Steady-state $k^*$ (CD)** | $k^*=\bigl(\frac{\alpha}{\rho+\theta g+\delta}\bigr)^{\frac1{1-\alpha}}$ |
| **Modified Golden Rule** | $f'(k^*)=\rho+\theta g+\delta$; $k^*<k_{gold}$ (for $\rho>0$) |
| **Saddle path** | Unique stable manifold; slope $\frac{dc}{dk}\big|_{sp}=\frac{c^*f''(k^*)}{\theta\mu_1}>0$ |
| **Speed (Taylor approx)** | $\phi\approx\frac12\bigl(Tr+\sqrt{Tr^2-4\det J}\bigr)\approx0.04$; slower than Solow |
| **Jacobian** | $J=\begin{pmatrix}f'(k^*)-(n+g+\delta)&-1\\\frac{c^*}{\theta}f''(k^*)&0\end{pmatrix}$; $Tr(J)=\rho-n+(\theta-1)g$, $\det J>0$ |

## Endogenous Growth (Romer/GH/AGH)
| | |
|---|---|
| **Knowledge accumulation** | $\dot{A}=B(a^K K)^\beta(a^L L)^\theta A^\phi$ |
| **Growth rate of $A$** | $g_A=\dot{A}/A=B(a^K K)^\beta(a^L L)^\theta A^{\phi-1}$ |
| **$g_A$ dynamics** | $\dot{g}_A/g_A=\beta g_K+\theta n+(\phi-1)g_A$ |
| **BGP condition** | $g_K=g_A+n$ |
| **$\dot{g}_A=0$ locus** | $\beta g_K=(1-\phi)g_A-\theta n$ |
| **Steady-state $g_A^*$ ($\beta+\theta<1$)** | $g_A^*=\frac{(\theta+\beta)n}{1-\phi-\beta}$; depends only on $n$ and params |
| **Semi-endogenous** | $\beta+\theta<1$: $a^L$ has level effect, no long-run growth effect |
| **Fully endogenous** | $\beta+\theta=1$, $n=0$: $g_A$ depends on $a^L,a^K$; scale effect (Romer 1990) |
| **Jones critique** | TFP growth flat despite rising R&D labor → supports semi-endogenous |
| **Nature of knowledge** | Non-rival, partially excludable, cumulative; creates increasing returns |

## Overlapping Generations (OLG)
| | |
|---|---|
| **Individual maximization** | $\max u(c_{1t})+\frac1{1+\rho}u(c_{2,t+1})$ s.t. $c_{1t}+\frac{c_{2,t+1}}{1+r_{t+1}}=w_t$ |
| **Euler (OLG)** | $u'(c_{1t})/u'(c_{2,t+1})=(1+r_{t+1})/(1+\rho)$ |
| **Capital transition** | $k_{t+1}=\frac1{(1+n)(1+g)}s(w_t,r_{t+1})$ where $s$ = saving of young |
| **Dynamic inefficiency** | Possible when $r<n+g$ (i.e. $k>k_{gold}$); economy over-accumulates capital |
| **Convergence speed** | Similar to Solow in log-linearized case; differs with general utility |

## Real Business Cycle (RBC)
| | |
|---|---|
| **Production** | $y_t=z_tk_t^\theta l_t^{1-\theta}$ |
| **Technology shock** | $z_{t+1}=\phi z_t+\varepsilon_t$, $\varepsilon_t\sim\text{WN}$ |
| **Household (log utility)** | $\max E_0\sum\beta^t[\ln c_t+\gamma\ln(1-l_t)]$ |
| **Short-run labor supply** | $l_t=1-\frac{\gamma c_t}{w_t}$; $\uparrow w\Rightarrow\uparrow l$ via substitution effect |
| **FOC labor** | $u_l/u_c=w_t$: $\gamma/(1-l_t)=w_t/c_t$ |
| **FOC consumption** | $1/c_t=\beta E_t[(1/c_{t+1})(1+r_{t+1}-\delta)]$ |
| **Long-run labor supply** | Independent of wage when $\beta=\phi$ (stationary distribution) |
| **Hansen indivisible labor** | $v(h)=-\gamma^{-1}(1-h)^{\gamma-1}$; lotteries — labor supply elasticity $\to\infty$ at extensive margin |
| **Calibration** | Match 1st & 2nd moments of US data; shocks amplified via intertemporal substitution |

## New Keynesian
| | |
|---|---|
| **Lucas supply curve** | $Y=\bar Y+\alpha(P-P^e)+\varepsilon$; only unexpected money affects output |
| **NK IS curve (cont.)** | $\dot C/C=\sigma(r_t-\rho)$; in output-gap form: $\dot x=\sigma(r_t-r_t^n)$ |
| **Wicksellian natural rate** | $r_t^n=\rho+\sigma^{-1}g$ |
| **NK PC (NK Phillips Curve)** | $\pi_t=\beta E_t\pi_{t+1}+\kappa x_t$ (forward-looking); derived from Calvo pricing |
| **Divine coincidence** | Stabilizing $\pi$ also stabilizes $x$ when no cost-push shocks (Blanchard-Gali) |
| **Taylor rule** | $i_t=r^n+\pi^*+\phi_\pi(\pi_t-\pi^*)+\phi_x x_t$; $\phi_\pi>1$ (Taylor principle) |
| **Yun (1996) optimal price** | $v_t=p_t^a+\int[(w_s-p_s)+\eta x_s]e^{\theta(s-t)}ds$ |

## Convergence Clubs & Extensions
| | |
|---|---|
| **Conditional convergence** | $g_{y_i}=\beta(\ln y_i^*-\ln y_i(0))$; poor grow faster controlling for $s,n,A(0)$ |
| **Convergence clubs** | Multiple steady states due to threshold externalities, complementarities, institutions |
| **Poverty trap condition** | $\dot{k}/k<0$ for $k\in(0,k_{low})$, $>0$ for $k\in(k_{low},k^*)$; Big Push needed |
| **Multiple equilibria** | S-shaped $s(k)$ creates 3 intersections (2 stable, 1 unstable); history vs expectations |
| **MRW augmented Solow** | $Y=K^\alpha H^\beta(AL)^{1-\alpha-\beta}$; human capital explains $\sim80\%$ of cross-country income |
