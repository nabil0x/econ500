# 501 Micro — Exam Cheat Sheet

## Preferences
| | |
|---|---|
| **Rational** | Completeness: $\forall x,y,\;x\succeq y\lor y\succeq x$; Transitivity: $x\succeq y\land y\succeq z\Rightarrow x\succeq z$ |
| **SM⇒M⇒LNS** | SM: $x_k\ge y_k\forall k,\;x_l>y_l\exists l\Rightarrow x\succ y$; M: $x_k>y_k\forall k\Rightarrow x\succ y$; LNS: $\forall x,\varepsilon>0\;\exists y:\|y-x\|<\varepsilon,\;y\succ x$ |
| **Homothetic** | MRS constant on rays; Engel curves linear; $x(p,w)=w\cdot x(p,1)$; homogeneous $\subset$ homothetic |

## Convexity / Quasiconcavity
| | |
|---|---|
| **Chain** | Convex pref $\iff$ UCS convex $\iff u(\cdot)$ quasiconcave: $u(\lambda x+(1-\lambda)y)\ge\min\{u(x),u(y)\}$ |
| **dMRS/dx** | $\frac{dMRS}{dx}=\frac{u_x^2u_{yy}-2u_xu_yu_{xy}+u_y^2u_{xx}}{u_y^3}<0\iff$ quasiconcave |
| **BH** | $\begin{vmatrix}0&u_x&u_y\\ u_x&u_{xx}&u_{xy}\\ u_y&u_{yx}&u_{yy}\end{vmatrix}\ge0\Rightarrow 2u_xu_yu_{xy}-u_x^2u_{yy}-u_y^2u_{xx}\ge0$ |

## UMP
| | |
|---|---|
| **Lagrangian** | $\mathcal{L}=u(x)+\lambda(w-p\cdot x)$; FOC: $u_{x_k}=\lambda p_k$, $p\cdot x=w$ |
| **Walrasian demand** | $x(p,w)$: HD(0), $p\cdot x(p,w)=w$ (Walras' Law via LNS) |
| **Indirect utility** | $v(p,w)=u(x(p,w))$: HD(0), $\uparrow w$, $\downarrow p$ |
| **Roy's id** | $x_k(p,w)=-\frac{\partial v/\partial p_k}{\partial v/\partial w}$ |

## EMP
| | |
|---|---|
| **EMP** | $\min p\cdot x$ s.t. $u(x)\ge\bar u$; $\mathcal{L}=p\cdot x+\mu(\bar u-u(x))$ |
| **Hicksian demand** | $h(p,u)$: HD(0) in $p$, $\partial h_k/\partial p_k<0$ |
| **Expenditure fn** | $e(p,u)=p\cdot h(p,u)$: HD(1) in $p$, concave in $p$ |
| **Shephard's** | $\partial e(p,u)/\partial p_k=h_k(p,u)$ |

## Duality / Slutsky / Homogeneity
| | |
|---|---|
| **Duality** | $e(p,v(p,w))=w$; $v(p,e(p,u))=u$ |
| **Slutsky** | $\frac{\partial x_k}{\partial p_j}=\frac{\partial h_k}{\partial p_j}-x_j\frac{\partial x_k}{\partial w}$ |
| **HD** | $x(p,w),v(p,w),h(p,u):$ HD(0); $e(p,u),c(w,q),\pi(p):$ HD(1) |

## Elasticities / Production
| | |
|---|---|
| **Elasticities** | $\varepsilon_{kk}=\frac{\partial\ln x_k}{\partial\ln p_k}$; TR test: $|\varepsilon|>1\Rightarrow P\downarrow\Rightarrow TR\uparrow$; $\varepsilon_{kj}>0$ sub, $<0$ comp; $\eta_k$: $>1$ lux, $0<\eta<1$ nec, $<0$ inf |
| **Lerner** | $\frac{P-MC}{P}=-\frac1\varepsilon$; $P=MC/(1+1/\varepsilon)$ |
| **MRTS/$\sigma$** | $MRTS_{LK}=MP_L/MP_K=w/r$; $\sigma=\frac{d\ln(K/L)}{d\ln(MRTS)}$; linear $\infty$, CD 1, Leontief 0 |
| **Cost fn** | $c(w,q)$: HD(1), concave in $w$, $\partial c/\partial w_k=z_k$ |
| **Profit fn** | $\pi(p)$: HD(1), convex in $p$, Hotelling: $\partial\pi/\partial p_k=y_k$ |

## Welfare (CV, EV, CS)
| | |
|---|---|
| **CV** | $CV=e(p^1,u^1)-e(p^1,u^0)=w-e(p^1,u^0)$ (new $p$, old $u$) |
| **EV** | $EV=e(p^0,u^1)-e(p^0,u^0)=e(p^0,u^1)-w$ (old $p$, new $u$) |
| **CS** | $CS=\int_{p^0}^{p^1}x(p,w)\,dp$ (Marshallian area) |
| **Ordering** | $P\downarrow$ normal: $EV>CS>CV$; $P\uparrow$: $CV>CS>EV$; quasilinear: $CV=EV=CS$ |

## Social Welfare / GE
| | |
|---|---|
| **GUPF** | Envelope of all UPFs; point of bliss = GUPF tangent to SWF |
| **3 Pareto** | (i) $MRS^A=MRS^B$; (ii) $MRTS^X=MRTS^Y$; (iii) $MRPT=MRS$ |
| **FWT/SWT** | FWT: CE$\Rightarrow$PO (LNS, no ext.); SWT: PO$\Rightarrow$CE w/ transfers (convexity) |
| **Kaldor-Hicks** | Gainers can potentially compensate losers; Scitovsky: add reversal test |
| **Pareto** | Necessary, NOT sufficient for SW max (need SWF for distribution) |

## General Equilibrium
| | |
|---|---|
| **Excess demand** | $E(P)=QD-QS$; Walras' Law: $\sum P_iZ_i(P)=0$ |
| **Existence** | IVT: $E(0)>0$, $E(\infty)<0$, continuous $\Rightarrow\exists P^*$ s.t. $E(P^*)=0$ |
| **Stability** | $dE/dP<0$ stable; $>0$ unstable (tatonnement) |
| **Numeraire** | $n$ goods, $n-1$ indep eqns; set $P_1=1$; relative prices only |
| **Edgeworth** | Contract curve: $MRS^A=MRS^B$ (box); $MRTS^X=MRTS^Y$ (prod box) |

## Game Theory / Externalities / Trade
| | |
|---|---|
| **Nash** | $s_i^*\in\arg\max_{s_i}u_i(s_i,s_{-i}^*)$; Dominant: $s_i^*$ best $\forall s_{-i}$ |
| **Backward ind** | Roll back from terminal node; SPNE eliminates non-credible threats |
| **Folk Thm** | $\delta\ge\delta^*=\frac{\pi_{dev}-\pi_{coop}}{\pi_{dev}-\pi_{pun}}$ sustains cooperation; grim trigger: $\delta\ge2/3$ in PD |
| **Spence** | Separating: $w_H-w_L\in[c_H,c_L]$; single-crossing $c_L>c_H$ |
| **Pigou** | Tax = marginal external damage at social optimum |
| **Coase** | Zero TC + property rights $\Rightarrow$ bargaining achieves efficiency regardless of allocation |
| **Tariff DWL** | $DWL=\frac12\times t\times\Delta Q$; VER worse (quota rent to foreigners) |
