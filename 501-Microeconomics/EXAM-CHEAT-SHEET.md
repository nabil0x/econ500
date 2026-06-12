# 501 Micro — Exam Cheat Sheet

## Preferences
| | |
|---|---|
| **[Rational](GLOSSARY.md#term-rationality)** | [Completeness](GLOSSARY.md#term-completeness): $\forall x,y,\;x\succeq y\lor y\succeq x$; [Transitivity](GLOSSARY.md#term-transitivity): $x\succeq y\land y\succeq z\Rightarrow x\succeq z$ |
| **[SM](GLOSSARY.md#term-sm)⇒[M](GLOSSARY.md#term-m)⇒[LNS](GLOSSARY.md#term-lns)** | [SM](GLOSSARY.md#term-sm): $x_k\ge y_k\forall k,\;x_l>y_l\exists l\Rightarrow x\succ y$; [M](GLOSSARY.md#term-m): $x_k>y_k\forall k\Rightarrow x\succ y$; [LNS](GLOSSARY.md#term-lns): $\forall x,\varepsilon>0\;\exists y:\|y-x\|<\varepsilon,\;y\succ x$ |
| **[Homothetic](GLOSSARY.md#term-homothetic)** | [MRS](GLOSSARY.md#term-mrs) constant on rays; Engel curves linear; $x(p,w)=w\cdot x(p,1)$; homogeneous $\subset$ homothetic |

## Convexity / Quasiconcavity
| | |
|---|---|
| **Chain** | Convex pref $\iff$ [UCS](GLOSSARY.md#term-ucs) convex $\iff u(\cdot)$ [quasiconcave](GLOSSARY.md#term-quasiconcave): $u(\lambda x+(1-\lambda)y)\ge\min\{u(x),u(y)\}$ |
| **d[MRS](GLOSSARY.md#term-mrs)/dx** | $\frac{dMRS}{dx}=\frac{u_x^2u_{yy}-2u_xu_yu_{xy}+u_y^2u_{xx}}{u_y^3}<0\iff$ [quasiconcave](GLOSSARY.md#term-quasiconcave) |
| **[BH](GLOSSARY.md#term-bh)** | $\begin{vmatrix}0&u_x&u_y\\ u_x&u_{xx}&u_{xy}\\ u_y&u_{yx}&u_{yy}\end{vmatrix}\ge0\Rightarrow 2u_xu_yu_{xy}-u_x^2u_{yy}-u_y^2u_{xx}\ge0$ |

## UMP
| | |
|---|---|
| **[Lagrangian](GLOSSARY.md#term-lagrangian)** | $\mathcal{L}=u(x)+\lambda(w-p\cdot x)$; [FOC](GLOSSARY.md#term-foc): $u_{x_k}=\lambda p_k$, $p\cdot x=w$ |
| **[Walrasian demand](GLOSSARY.md#term-walrasian-demand)** | $x(p,w)$: [HD(0)](GLOSSARY.md#term-hd-0), $p\cdot x(p,w)=w$ ([Walras' Law](GLOSSARY.md#term-walras-law) via [LNS](GLOSSARY.md#term-lns)) |
| **[Indirect utility](GLOSSARY.md#term-indirect-utility)** | $v(p,w)=u(x(p,w))$: [HD(0)](GLOSSARY.md#term-hd-0), $\uparrow w$, $\downarrow p$ |
| **[Roy's id](GLOSSARY.md#term-roy-identity)** | $x_k(p,w)=-\frac{\partial v/\partial p_k}{\partial v/\partial w}$ |

## EMP
| | |
|---|---|
| **[EMP](GLOSSARY.md#term-emp)** | $\min p\cdot x$ s.t. $u(x)\ge\bar u$; $\mathcal{L}=p\cdot x+\mu(\bar u-u(x))$ |
| **[Hicksian demand](GLOSSARY.md#term-hicksian-demand)** | $h(p,u)$: [HD(0)](GLOSSARY.md#term-hd-0) in $p$, $\partial h_k/\partial p_k<0$ |
| **[Expenditure fn](GLOSSARY.md#term-expenditure-function)** | $e(p,u)=p\cdot h(p,u)$: [HD(1)](GLOSSARY.md#term-hd-0) in $p$, concave in $p$ |
| **[Shephard's](GLOSSARY.md#term-shephard-lemma)** | $\partial e(p,u)/\partial p_k=h_k(p,u)$ |

## Duality / Slutsky / Homogeneity
| | |
|---|---|
| **[Duality](GLOSSARY.md#term-duality)** | $e(p,v(p,w))=w$; $v(p,e(p,u))=u$ |
| **[Slutsky](GLOSSARY.md#term-slutsky-equation)** | $\frac{\partial x_k}{\partial p_j}=\frac{\partial h_k}{\partial p_j}-x_j\frac{\partial x_k}{\partial w}$ |
| **[HD](GLOSSARY.md#term-hd-0)** | $x(p,w),v(p,w),h(p,u):$ [HD(0)](GLOSSARY.md#term-hd-0); $e(p,u),c(w,q),\pi(p):$ [HD(1)](GLOSSARY.md#term-hd-0) |

## Elasticities / Production
| | |
|---|---|
| **[Elasticities](GLOSSARY.md#term-elasticity)** | $\varepsilon_{kk}=\frac{\partial\ln x_k}{\partial\ln p_k}$; TR test: $|\varepsilon|>1\Rightarrow P\downarrow\Rightarrow TR\uparrow$; $\varepsilon_{kj}>0$ sub, $<0$ comp; $\eta_k$: $>1$ lux, $0<\eta<1$ nec, $<0$ inf |
| **[Lerner](GLOSSARY.md#term-lerner-index)** | $\frac{P-MC}{P}=-\frac1\varepsilon$; $P=MC/(1+1/\varepsilon)$ |
| **[MRTS](GLOSSARY.md#term-mrts)/[$\sigma$](GLOSSARY.md#term-eos)** | $MRTS_{LK}=MP_L/MP_K=w/r$; $\sigma=\frac{d\ln(K/L)}{d\ln(MRTS)}$; linear $\infty$, CD 1, Leontief 0 |
| **[Cost fn](GLOSSARY.md#term-cost-function)** | $c(w,q)$: [HD(1)](GLOSSARY.md#term-hd-0), concave in $w$, $\partial c/\partial w_k=z_k$ |
| **[Profit fn](GLOSSARY.md#term-pmp)** | $\pi(p)$: [HD(1)](GLOSSARY.md#term-hd-0), convex in $p$, [Hotelling](GLOSSARY.md#term-hotelling-lemma): $\partial\pi/\partial p_k=y_k$ |

## Welfare (CV, EV, CS)
| | |
|---|---|
| **[CV](GLOSSARY.md#term-cv)** | $CV=e(p^1,u^1)-e(p^1,u^0)=w-e(p^1,u^0)$ (new $p$, old $u$) |
| **[EV](GLOSSARY.md#term-ev)** | $EV=e(p^0,u^1)-e(p^0,u^0)=e(p^0,u^1)-w$ (old $p$, new $u$) |
| **[CS](GLOSSARY.md#term-cs)** | $CS=\int_{p^0}^{p^1}x(p,w)\,dp$ (Marshallian area) |
| **Ordering** | $P\downarrow$ normal: $EV>CS>CV$; $P\uparrow$: $CV>CS>EV$; quasilinear: $CV=EV=CS$ |

## Social Welfare / GE
| | |
|---|---|
| **[GUPF](GLOSSARY.md#term-gupf)** | Envelope of all [UPF](GLOSSARY.md#term-upf)s; point of bliss = GUPF tangent to [SWF](GLOSSARY.md#term-swf) |
| **3 Pareto** | (i) [MRS](GLOSSARY.md#term-mrs)$^A$=[MRS](GLOSSARY.md#term-mrs)$^B$; (ii) [MRTS](GLOSSARY.md#term-mrts)$^X$=[MRTS](GLOSSARY.md#term-mrts)$^Y$; (iii) [MRPT](GLOSSARY.md#term-mrpt)=[MRS](GLOSSARY.md#term-mrs) |
| **[FWT](GLOSSARY.md#term-fwt)/[SWT](GLOSSARY.md#term-swt)** | [FWT](GLOSSARY.md#term-fwt): CE$\Rightarrow$[PO](GLOSSARY.md#term-po) ([LNS](GLOSSARY.md#term-lns), no ext.); [SWT](GLOSSARY.md#term-swt): [PO](GLOSSARY.md#term-po)$\Rightarrow$CE w/ transfers (convexity) |
| **[Kaldor-Hicks](GLOSSARY.md#term-hicks-kaldor)** | Gainers can potentially compensate losers; [Scitovsky](GLOSSARY.md#term-scitovsky): add reversal test |
| **[Pareto](GLOSSARY.md#term-po)** | Necessary, NOT sufficient for SW max (need [SWF](GLOSSARY.md#term-swf) for distribution) |

## General Equilibrium
| | |
|---|---|
| **[Excess demand](GLOSSARY.md#term-excess-demand)** | $E(P)=QD-QS$; [Walras' Law](GLOSSARY.md#term-walras-law): $\sum P_iZ_i(P)=0$ |
| **Existence** | [IVT](GLOSSARY.md#term-intermediate-value-theorem): $E(0)>0$, $E(\infty)<0$, continuous $\Rightarrow\exists P^*$ s.t. $E(P^*)=0$ |
| **Stability** | $dE/dP<0$ stable; $>0$ unstable (tatonnement) |
| **[Numeraire](GLOSSARY.md#term-numeraire)** | $n$ goods, $n-1$ indep eqns; set $P_1=1$; relative prices only |
| **[Edgeworth](GLOSSARY.md#term-edgeworth-box)** | Contract curve: [MRS](GLOSSARY.md#term-mrs)$^A$=[MRS](GLOSSARY.md#term-mrs)$^B$ (box); [MRTS](GLOSSARY.md#term-mrts)$^X$=[MRTS](GLOSSARY.md#term-mrts)$^Y$ (prod box) |

## Game Theory / Externalities / Trade
| | |
|---|---|
| **[Nash](GLOSSARY.md#term-nash-equilibrium)** | $s_i^*\in\arg\max_{s_i}u_i(s_i,s_{-i}^*)$; [Dominant](GLOSSARY.md#term-dominant-strategy): $s_i^*$ best $\forall s_{-i}$ |
| **[Backward ind](GLOSSARY.md#term-backward-induction)** | Roll back from terminal node; [SPNE](GLOSSARY.md#term-subgame-perfect-ne) eliminates non-credible threats |
| **[Folk Thm](GLOSSARY.md#term-folk-theorem)** | $\delta\ge\delta^*=\frac{\pi_{dev}-\pi_{coop}}{\pi_{dev}-\pi_{pun}}$ sustains cooperation; grim trigger: $\delta\ge2/3$ in [PD](GLOSSARY.md#term-pd) |
| **[Spence](GLOSSARY.md#term-signaling)** | Separating: $w_H-w_L\in[c_H,c_L]$; single-crossing $c_L>c_H$ |
| **[Pigou](GLOSSARY.md#term-pigouvian-tax)** | Tax = marginal external damage at social optimum |
| **[Coase](GLOSSARY.md#term-coase-theorem)** | Zero TC + property rights $\Rightarrow$ bargaining achieves efficiency regardless of allocation |
| **Tariff [DWL](GLOSSARY.md#term-dwl)** | $DWL=\frac12\times t\times\Delta Q$; [VER](GLOSSARY.md#term-ver) worse (quota rent to foreigners) |
