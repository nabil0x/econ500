<!-- Extracted from: 502_Macroeconomics/TUTORIALS/MODELS/RCK/RCK_Model_47th Batch_typed.pdf -->

Ramsey-Cass-Koopmans (RCK) Model

1     Motivation

Recall that one of the main assumption of the Solow model was that the sav-
ings rate was constant. No household optimization was involved, making
welfare analysis impossible. Ramsey model allows household optimization
int the growth model. As it turns out, British philosopher and mathemati-
cian Frank Ramsey solved this problem in 1928. Later in 1960 in the 1960s
David Cass and Tjalling Koopmans independently revived Ramsey’s contri-
bution. It has since become ubiquitous and, under the grand moniker of
Neoclassical Growth Model (NGM), it is the foremost example of the type of
dynamic general equilibrium model upon which the entire edifice of modern
macroeconomics is built.


2     The Economy

2.1    Simplifying assumptions

To make the problem manageable, we will assume that there is one rep-
resentative household, all of whose members are both consumer and pro-
ducer, living in a closed economy (we will lift this assumption in the next
chapter). There is one good and no government. Each consumer in the rep-
resentative household lives forever, and population growth is n > 0 as be-
fore. All quantities in small-case letters are per capita. Finally, we will look
at the problem as solved by a benevolent central planner who maximises
the welfare of that representative household, and evaluates the utility of
future consumption at a discounted rate ρ.


2.2    Social Planner’s Problem Vs. Market Problem

    • We first discuss Social Planner’s Problem (SPP) in lieu of market prob-
      lem because it is easier to solve and it provides the same results as the
      decentralised equilibrium, as long as both production and consump-
      tion sets. This is due to welfare theorems:
        – First Welfare Theorem (FWT): A competitive equilibrium is Pareto
          Optimal.
        – Second Welfare Theorem (SWT): All Pareto Optimal allocations can
          be decentralised as a competitive equilibrium under convexity as-
          sumptions.
    • In the social Planner’s Problem, the planer determines the allocation
      while in the market problem allocations are determined by prices.
    • A market problem has three components: (i) Household’s Problem, (ii)
      Firms problem, and (iii) Market clearing conditions (equilibrium). The
      social planer’s problem is similar to household’s problem except social
  0 I am truly grateful to my students who helped me prepare this handout.This handout is heavily based on

Macroeconomics textbooks written by Campante et al. (2021) and Barro & Sala-i-Martin (2004) and, therefore,
does not reflect my original scholarship.


Lectures on Macroeconomics               Ramsey- Cass- Koopmans Model                Md Nurul Hoque, JU


                                                    1
      planner faces resource constraint as opposed budget constraint of the
      representative household in a market economy.
    • Note that prices do not enter in a Social Planner’s Problem because he
      does not need market ( i.e., prices) to redistribute resources.


3    The Social Planner’s Problem (SPP)

The social planner maximizes
                           Z ∞
                                        u(ct )ent e−ρt dt                       (1)
                                   0

subject to the resource constraint:

                                Y = F (K, L) = C + I                            (2)

where ρ is the rate of time preference. A ρ = 0 implies that the household
does not distinguish between current and future consumption while a ρ > 0
indicates the household discounts future utility ( does not want to wait to
consume). We assume that the utility function has standard properties:
    • Strictly increasing: u′ (c) > 0 and u′′ (c) < 0
    • Maintains Inada conditions: limc→∞ u′ (c) = 0 and limc→0 u′ (c) = ∞
    • Twice continuously differentiable( C 2 ): the second derivative exists and
      is continuous.
The production function F (K, L) is Neoclassical ( See my note on the Solow
Model for detail).

 Recall that the constant returns to scale property allows us to write the
aggregate production function in intensive form. Using CRS,

 Resource constraint per capita:

                                  Y         C K̇
                                     =y= +
                                  L         L    L
                                                   K̇
                                 ⇒ y = f (k) = c +
                                                   L
Since,
                                          K
                                       k=
                                          L
                              ⇒ log k = log K − log L
                               d log k    d log K d log L
                             ⇒          =         −
                                  dt         dt       dt
                                     k̇   K̇ L̇
                                 ⇒ =         −
                                     k    K L
                                     k̇   K̇
                                 ⇒ =         −n
                                     k    K
                                          K̇ K
                                  ⇒ k̇ =     ×    − nk
                                          K     L
                                          K̇
                                  ⇒ k̇ =     − nk
                                          L

Lectures on Macroeconomics        Ramsey- Cass- Koopmans Model   Md Nurul Hoque, JU


                                             2
              ∴ y = f (k) = c + k̇ − nk
                  ⇒ k̇ = f (k) − c − nk → Resource constraint in per capita form


∴ The Social Planner’s Problem (SPP):
                                            Z ∞
                                  Max              u(ct )e−ρt ent dt
                                              0

                                  s.t. k̇t = f (kt ) − ct − nkt
                                              k0 > 0


3.1   Current Value Hamiltonian and Maximum Principle
                                                                         
                                         nt
                         Ht = u(ct )e + λt f (kt ) − nkt − ct

 Maximum Principle:
                           ∂Ht
                                = ent u′ (ct ) = λt                                          (1)
                           ∂ct
                                                             
                           ∂Ht                         ′
                                = −λ̇t + ρλt = λt f (Kt ) − n
                           ∂Kt
                                                   
                                          ′
                         ⇒ −λ̇t = λt f (kt ) − n − ρλt
                                                   
                            λ̇t
                          ⇒              ′
                                = − f (kt ) − n + ρ                                          (2)
                            λt
                        T V C : lim λt e−ρt kt = 0                                           (3)
                                   t→∞


3.2   Solving for BGP

From (1)

                               ent u′ (ct ) = λt
                                  log λt = nt + log u′ (ct )
                                d log λt          1              dc
                                         =n+ ′         u′′ (ct )
                                   dt          u (ct )           dt
                                    λ̇t     u′′ (ct )
                                  ⇒     =n+ ′         c˙t
                                    λt      u (ct )
                                             ′′             
                                    λ̇t       u (ct )           c˙t
                                  ⇒     =n+      ′
                                                          ct
                                    λt        u (ct )           ct
                                             ′′                
                                    λ̇t       −u (ct )              c˙t
                                  ⇒     =n−        ′
                                                             ct                              (4)
                                    λt           u (ct )            ct

                                                           −1
                                           −u′′ (ct )
                                       
                             Define:                  ct         = σ , IES.
                                            u′ (ct )


                                                  λ̇t     1 c˙t
                                     Then,            =n−                                    (5)
                                                  λt      σ ct




Lectures on Macroeconomics             Ramsey- Cass- Koopmans Model           Md Nurul Hoque, JU


                                                    3
By using (5) and (2),
                                1 ċ
                             n−       = −f ′ (kt ) + n + ρ
                               σc
                                                       
                                  c˙t
                              ⇒               ′
                                      = σ f (kt ) − ρ                           (6)
                                  ct

(6) is our Euler Equation (EE) or simply Keynes-Ramsey rule.

 Interpretation of the Euler Equation:

 When the household saves one unit of output, it goes to investment, which
converts into output given by f ′ (k). But it is worth less by a factor ρ. The
household will only postpone consumption i.e., save if f ′ (k) > ρ.

And σ gives the elasticity of intertemporal substitution (EIS) of consump-
tion. This is simply the elasticity of marginal utility of consummation.




Lectures on Macroeconomics        Ramsey- Cass- Koopmans Model   Md Nurul Hoque, JU


                                          4
3.3   Dynamics of the model

Two ODES and Terminal conditions:


                                           k̇ = f (k) − c − nk
                                              ċ
                                        and = σ(f ′ (k) − ρ)
                                              c
                             and TVC: lim λt e−ρt kt = 0, k0 > 0
                                         t→∞

Law of motion of capital ( the resource constraint), Euler equation, and the
boundary conditions (initial condition and the TVC) will categorize the so-
lution. Once we get kt and ct , we can solve for any remaining variables.

 Balanced Growth Path (BGP):

 In the BGP, k̇ = 0 ⇒


                                     c∗ = f (k ∗ ) − n(k ∗ )

Dynamics of k:

 For a given k, the level of c that implies k̇ = 0 is given by c = f (k) − nk.
And k̇ = 0 when c equals the difference between output and break-even
investment (given by nk line). This value of c is increasing in k until c reaches
the maximum level.
 Now,


                      max c = f (k) − nk, implies
                           dc
                      FOC,    = 0 ⇒ f ′ (k) = n (golden rule)
                           dk
 So, c is increasing in k until f ′ (k) = n, and then c decreases. Hence, we
know a hump- shape k̇ = 0 locus.




Lectures on Macroeconomics           Ramsey- Cass- Koopmans Model   Md Nurul Hoque, JU


                                               5
                  ′
Suppose that c is the level of consumption that keeps k constant (on the
                                                     ′
k̇ = 0 line). Now, if the actual consumption c > c , the consumer will not
have adequate saving s to maintain existing level of capital stock. Hence,
k̇ < 0 for any value of c above the k̇ = 0 locus. Conversely, if c is below k̇ = 0
line, k̇ > 0.

 Dynamics of c:

From EE,
                                 ċ
                                    = σ(f ′ (k) − ρ)
                                 c
in the BGP,
                                      ċ
                                          =0⇒
                                      c
                                     f ′ (k) = ρ

let k ∗ denote this level of capital.
Note that cċ = 0 pins down the capital stock. So, c0 = 0 is a vertical line in
(c, k) space.




Now, if actual k > k ∗ , then f ′ (k) < ρ, hence, ċ < 0 (because of inada condi-
tion), and if k < k ∗ , ċ > 0.



 Steady State:

 Since at BGP k̇ = 0 and ċ = 0, the intersection of k̇ = 0 and ċ = 0 locii along
with the terminal conditions (TVC and initial value) will fully characterize
the steady state solution.

The following figure combines these two locii.




Lectures on Macroeconomics      Ramsey- Cass- Koopmans Model     Md Nurul Hoque, JU


                                         6
Note that k ∗ (when ċ = 0) is less than kgold .Because k ∗ requires f ′ (k) = ρ and
kgold requires f ′ (kg ) = n. Since kgold > k ∗ , this requires f ′ (kg ) at kgold < f ′ (k)
at k ∗ . This implies n < ρ. (and it holds, by assumption).


                                       Why n < ρ?
Recall that the lifetime utility
                                       Z ∞
                                  v=         u(c)e−ρt ent dt
                                        0

if n > ρ, then u(c) will explode, and there will be no maximum utility. Hence,
for finiteness of utility, we assume n > ρ

 Initial Value of c:

 The Social Planner is given the initial value of k > 0. But the consumer
will determine the initial value of c.

 Now we assume k(0) < k ∗ , for simplicity. We need to trace the trajectories
of k and c for various initial values of c. The trajectory that satisfies both
ODEs and boundary conditions(TVC) will be the feasible trajectory. Now
consider various values of c0 for a given initial value k0 .




Now if c(0) = D, consumption is too low, both c and k initially positive.

Lectures on Macroeconomics          Ramsey- Cass- Koopmans Model         Md Nurul Hoque, JU


                                              7
Once k crosses k ∗ , ċ becomes negative, but k̇ remains positive. The econ-
omy moves down and to the right.

 If c0 = C, both ċ and k̇ are initially positive, but k̇ becomes negative once c
crosses k̇ = 0 line. The economy eventually moves up and to the left.

Since k̇ and ċ are both continuous functions, there exists some critical
point say c(0) = F such that the economy converges to the stale point E,
where both c and k are constant.

Again if c(0) = B or c(0) = A, ċ > 0 which reduces capital and economy
moves up to the left.


All these various trajectories satisfy the two ODEs. Does this mean all of
                            these are possible?
                             The answer is NO.

If c(0) > F , k continuously decreases while c continuously increases. At
some point k will eventually be zero. For two ODEs to continue to be sat-
isfied, c must continue to rise and k must continue to fall and become
negative, which violates the resource constraint (and also violates TVC).
Therefore, any initial value for c above F is not possible.

On the other hand, if c(0) < F , then eventually k becomes very large and c
becomes zero.

Now TVC says,

                              lim λt e−ρt kt = 0
                              t→0

                             ⇒ lim u′ (c)kt = 0
                                t→0

                        Since u′ (c) ̸= 0, TVC does not hold.

Hence, any initial value of c(0) < F is not possible.

 Finally, if c(0) = F , then c and k continuously rise and converge to k ∗ . At
k ∗ , limt→0 λt→0 kt = 0 because it is an optimality condition that gives k ∗ .

Hence, there is a unique initial value of c(0) = F that is consistent with
household’s intertemporal optimization. The function that gives this initial
value of c as a function of k is known as saddle path.




Lectures on Macroeconomics          Ramsey- Cass- Koopmans Model   Md Nurul Hoque, JU


                                            8
In short, the first two dynamic equations provide the dynamics at any point
in the (c, k) space, but only the TVC allows us to choose a single path that
we will use to describe our equilibrium dynamics.



4     Effects of Shocks

4.1  A permanent increase in discount rate/fall in ρ
                    
Since c = σ f (k) − ρ , consumption immediately reduces to A ( See figure
      ċ     ′


below). Since both ċ and k̇ are positive at A, the economy converges to E ′ .
Both c and k eventually rises.




5     The Equivalence with the decentralized equilibrium

In a decentralized economy We have households and firms (owned by house-
holds) who independently make their decisions in a perfectly competitive
environment. Recall that a market problem has three components:
    • Household’s problem
    • Firm’s problem
    • Market clears (Market equilibrium)

Lectures on Macroeconomics    Ramsey- Cass- Koopmans Model    Md Nurul Hoque, JU


                                      9
5.1   Household’s problem:

In a market economy, the representative household maximizes lifetime util-
ity subject to budget constraint (given other restrictions). That is,

                                        Z ∞
                                              u(ct )ent e−ρt dt
                                          0

                               s.t. Ȧ = wt Lt − ct Lt + rAt

 Where A denotes aggregate asset ( e.g., bond). Assuming capital and assets
are prefect substitutes, the household’s saving converts into bond which
gives interest at a rate r. Household’s saving (Ȧ) is given by the difference
between earnings (from labor and non-labor income) and consumption.

 Budget Constraint in per capita form:


                                             A
                             Since let a ≡
                                             L
                                ⇒ log a = log A − log L
                                 d log a     d log A d log L
                               ⇒           =         −
                                    dt          dt      dt
                                        ȧ   dotA
                                   ⇒ =              −n
                                        a      A
                                             Ȧ A
                                    ⇒ ȧ =         − na
                                             AL
                                             Ȧ
                                    ⇒ ȧ = − na
                                             L
                                       Ȧ
                                  ⇒ = ȧ + na
                                       L
                              Hence, Ȧ = wt Lt + rAt − ct Lt
                                      Ȧ        A
                                   ⇒     =w+r −c
                                       L        L
                               ⇒ ȧ + na = w + ra − c
                                    ⇒ ȧ = (r − n)a + w − c




 Restriction on borrowing

Households cannot pursue the easy path of getting arbitrarily rich by bor-
rowing money and borrowing even more to pay for the interest owed on
previously contracted debt. If possible that would be the optimal solution.
However, the market will not allow these Ponzi schemes, so we impose this
as a constraint on household behaviour.

 Household’s problem:

 A complete household problem is given by:




Lectures on Macroeconomics         Ramsey- Cass- Koopmans Model   Md Nurul Hoque, JU


                                              10
                                                    Z ∞
                                              Max         u(ct )e−ρt ent dt
                                                      0

                                            s.t. ȧ = (r − n)a + w − c,
                                             NPG: lim at e−(r−n)t ≥ 0,
                                                    t→∞

                                                                  a0 > 0
                    State variable: at and control variable: ct


Note on No-Ponzi game condition (NPG):

 The no-Ponzi condition is very similar to the TVC in the social planner’s
problem, but they are different. We did not need no-ponzi game condi-
tion for the SPP because there was nobody to borrow from. No-ponzi is a
constraint ( restriction) on optimization, but TVC is an optimality condition.



5.1.1   Current value Hamiltonian and the maximum principle:

The current value Hamiltonian and the corresponding maxim principles
become:
                                                    
                              nt
                   H = u(ct )e + λt (r − n)a + w − c


Maximum principle:


                               ∂H
                                   = 0 ⇒ u′ (ct )ent = λt                                    (1)
                               ∂c
                               ∂H
                                   = −λ̇t + ρλt = (r − n)λt                                  (2)
                               ∂at
                             TVC: lim λt e−ρt at = 0                                         (3)
                                      t→∞

 From (1),

                               u′ (ct )ent = λt
                              ⇒ log λt = log u′ (c) + nt
                                  dλt       1        dc
                               ⇒        = ′ u′′ (c) + n
                                   dt     u (c)      dt
                                           ′′       
                                    λ̇t     u (c) · c ċ
                                ⇒       =                +n                                  (4)
                                    λt        u′ (c)   c
From (2):
                               ∂H
                                    = −λ̇t + ρλt = (r − n)λt
                               ∂at
                               −λ̇t
                             ⇒      =r−n−ρ
                               λt
                                λ̇t
                              ⇒     = −r + n + ρ                                             (5)
                                λt



Lectures on Macroeconomics           Ramsey- Cass- Koopmans Model             Md Nurul Hoque, JU


                                              11
Using (4) and (5),
                                                    u′′ (c) · c ċ
                                   −r + n + ρ = (              ) +n
                                                      u′ (c) c
                                                    −u′′ (c) · c
                                    ⇒r−ρ=(                       )
                                                        u′ (c)
                                  −u′′ (c) · c
                       Define : (              ) = σ (IES)
                                    u′ (c)
                                                      
                                                   1 ċ
                                    ⇒r−ρ=
                                                   σ c
                                                ċ
                                           ⇒       = σ(r − ρ)                        (6)
                                                c
6 gives the Euler equation for the market problem.



5.2   Firm’s problem

Because the representative firm does not own capital, firm’s problem is
static. Firms maximize profit subject to production technology.




                  M ax π = F (K, L) − rK − wL
                                               
                              F (K, L)    K   L
                         =L            −r −w
                                  L       L   L
                                           
                         = L f (k) − rk − w

                  F OCs :
                      ∂π              ∂k     dk
                          = L(f ′ (k)     −r    )=0
                      ∂k             ∂K
                                            dK
                            ′           dk
                      ⇒ f (k) − r          =0
                                        dK
               ∂k
                  ̸= 0 ⇒
               ∂K
                        f ′ (k) = r
                   Again,
                         π = L · f (k) − rk · L − wL
                       ∂π                   −K               −K
                           = f (k) + f ′ (k) 2 − rk − f ′ (k) 2 − w = 0
                       ∂L                   L                L
                   ⇒ f (k) − rk − w = 0
                   ⇒ f (k) − f ′ (k) · k = w

Conclusion # 01: Since f ′ (k) = r, from firm’s optimization, Euler equations
in both market and social planner’s problems are equivalent.

Now, from 1,




Lectures on Macroeconomics          Ramsey- Cass- Koopmans Model      Md Nurul Hoque, JU


                                               12
                                       u′ (ct )ent = λt
                             ⇒ log u′ (ct ) + nt = log λt
                                    d log u′ (ct )    λ̇t
                                ⇒                   =     −n
                                         dt           λt
                                          u̇′ (ct )
                                      ⇒ t′          = −r + n + ρ − n
                                          u (ct )
                                                u̇′
                                           ⇒ ′ =ρ−r
                                                u
                                           ⇒ u̇′ = (ρ − r)u′
                             ⇒ u̇′ − (ρ − r)u′ = 0

The above is a homogeneous linear differential equation and,hence, we can
separate variables.


                                      Solution:
                                                         u̇′ = (ρ − r)u
                                                        du′
                                                   ⇒        = (ρ − r)u′
                                               Z        dt    Z
                                                    1 ′
                                           ⇒           du =      (ρ − r)dt
                                                    u′
                                               ⇒ log u′ = (ρ − r)t + log c
                                                    ⇒ u′ = Ce(ρ−r)t
                    ⇒ Assuming C = 1,                    u′ = e(ρ−r)t


Conclusion # 02: TVCs in both market and social planner’s problems are
equivalent.




                              From FOCs, u′ (c)ent = λt
                                            ⇒ e(ρ−r)t ent = λt
                                           ⇒ eρt e−rt ent = λt
                                               ⇒ e(n−r)t = λt e−ρt

∴ TVC:

                                lim at e−(r−n)t = 0 )
                                t→0
                                                           same TVC
                              ⇒ lim at λt e−ρt = 0
                                 t→∞


5.3   Market Clearing

We can show market clearing condition are equivalent to resource con-
straint in the social planners problem. (Math Later) In the current setup
we have three markets: Goods market, asset market and the market for


Lectures on Macroeconomics             Ramsey- Cass- Koopmans Model          Md Nurul Hoque, JU


                                                   13
capital services. By Walrus law, we need to clear just two markets out of
the three. The following are the market clearing conditions in goods and
bond markets.
    • Goods market:


                                     X                    X
                                           (ci + ii ) =       yi
                                              ⇒C +I =Y

    • Bond market:
                                    X
                                           ai = 0

 Note on market clearing:

Since all households are alike,if anyone wants to buy bonds, everybody
else does the same. This gives rise to the problem of lack of double coinci-
dence of wants. Therefor, no trade of bonds take place in equilibrium.

Conclusion# 03: Resource constraint in the social planner’s problem is
the same as market clearing condition in the market problem.

 In conclusion, two problems deliver the same EE, they have the same FOC,
the same TVC, and, finally, resource constraint is the same as market clear-
ing condition. Therefore, we can conclude that two problems are equivalent
i.e., SPP ⇔ Market Problem.


6    Concuding Remarks (from Campante et al.,2021)

It can be shown that without technological growth, per capita variables
grow at zero rate ( same as the Solow model). That is, we are still left with
a growth model without long-run growth: it was not the exogeneity of the
savings rate that generated the unsatisfactory features of the Solow model
when it comes to explaining long-run growth. We will have to keep look-
ing by moving away from diminishing returns or by modelling technological
progress. On the other hand, our exploration of the Ramsey model has left
us with a microfounded framework that is the foundation of a lot of mod-
ern macroeconomics. This is true not only of our further explorations that
will lead us into endogenous growth, but eventually also when we move to
the realm of short term fluctuations. At any rate, the NGM is a dynamic
general equilibrium framework that we will use over and over again.

 Even in this basic application some key results have emerged. First, we
have the Euler equation that encapsulates how consumers make optimal
choices between today and tomorrow. If the marginal benefit of reducing
consumption – namely, the rate of return on the extra capital you accumu-
late – is greater than the consumer’s impatience – the discount rate – then
it makes sense to postpone consumption. This crucial piece of intuition

Lectures on Macroeconomics    Ramsey- Cass- Koopmans Model         Md Nurul Hoque, JU


                                      14
will appear again and again as we go along in the book, and is perhaps the
key result in modern macroeconomics. Second, in this context there is no
dynamic inefficiency, as forward-looking consumers would never choose to
oversave in an inefficient way. Most importantly, now we are in possession
of a powerful toolkit for dynamic analysis, and we will make sure to put it
to use from now on.



                             .............The End...........




Lectures on Macroeconomics        Ramsey- Cass- Koopmans Model   Md Nurul Hoque, JU


                                           15
