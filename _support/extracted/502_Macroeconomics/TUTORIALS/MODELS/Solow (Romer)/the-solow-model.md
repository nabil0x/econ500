<!-- Extracted from: 502_Macroeconomics/TUTORIALS/MODELS/Solow (Romer)/The Solow Model.pdf -->

                                 The Solow Model


1       The Stylized Facts about Growth
The modern study of economic growth starts in the post-war period
and was mostly motivated by the experience of the developed world.
In his classical article (Kaldor 1957), Nicolas Kaldor stated some basic
facts that he observed economic growth seemed to satisfy, at least in
those countries. These came to be known as the Kaldor facts, and the
main challenge of growth theory as initially constituted was to account
simultaneously for all these facts. But, what were these Kaldor facts?
Here they are:
    i. Output per worker shows continuous growth, with no tendency to
       fall.
  ii. The capital-output ratio is nearly constant. (But what is capital?)
 iii. Capital per worker shows continuous growth (... follows from the
      other two).
 iv. The rate of return on capital is nearly constant (real interest rates
     are flat).
    v. Labour and capital receive constant shares of total income.
 vi. The growth rate of output per worker differs substantially across
     countries (and over time, we can add, miracles and disasters).


                                            The Model

    2     Aggregate Demand and Supply

• Production Function:

    Consider a pure private economy with two inputs: L and K. The
    production function is given by:

                              Y = F (K, L, t)                                                         (1)

• Consumption and Saving

    Output is divided into consumption and saving i.e.,
                                               Y =C +I


    Solow assumed that households save a fixed percent of their income.
    In this economy, saving immediately translates into investment. The
    consumption and saving functions are given by:
                                                  c
                         C = (1 − s)Y ; (1 − s) =
                                                  y
                       ⇒ S = sY = sF (K, L) ; 0 ≤ s ≤ 1
                       ⇒ S = sF (K, L, t) = I                        (2)
  0 I am truly grateful to my students who helped me prepare this handout.This handout is heavily based

on Macroeconomics textbooks written by Campante et al. and Sala-i- Martin and, therefore, does not reflect
my original scholarship.


Lectures on Macroeconomics                     The Solow Model                    Md Nurul Hoque, JU



                                                    1
• Capital and Labor:

• Capital accumulation follows the following law of motion.
                            K̇ = I − δK , δ > 0
                                ⇒ K̇ = sF (K, L, t) − δK                          (3)

• Population (=Labor Force) grows at a constant rate n i.e,
                                Lt = L0 ent = ent , L0 = 1                        (4)

We assume that technology is fixed for the time being, allowing us to
drop t from the production function.


3    The Neoclassical Production Function:
The production function we are going to use in this model is Neoclas-
sical. It is very important that you understand these properties.

Y = F (K, L) satisfies the following three important Neoclassical proper-
ties:


1. MPK and MPL are positive and diminishing i.e.,

                                       ∂F        ∂F
                                           >0,       >0
                                      ∂K         ∂L
                                    ∂ 2F        ∂ 2F
                                          < 0 ,      <0
                                    ∂K 2        ∂L2
2. Constant Returns to Scale (CRS):


                             F (λK, λL) = λ · F (K, L) , ∀λ > 0

3. Inada Conditions:
                                      ∂F        ∂F
                                     lim = lim     =0
                                 K→∞ ∂K    L→∞ ∂L
                                      ∂F       ∂F
                              and lim    = lim     =∞
                                  K→0 ∂K   L→0 ∂L


Note: If a production function satisfies these three conditions, we call
it Neoclassical Production Function ( See Romer 2018, for detail).

Production Function in intensive form:

CRS allows us to write the production function in intensive/per capita
form:
                                  Y = F (K, L)
                                  Y      K L
                                ⇒   = F( , )
                                  L      L L
                                ⇒ y = F (k, 1)
                                                       K      Y
                                 ⇒ y = f (k) ; k ≡       , y≡
                                                       L      L
Example of Neoclassical Production Function :


Lectures on Macroeconomics                 The Solow Model        Md Nurul Hoque, JU



                                              2
Cobb-Douglas production function is an classic example of Neoclassical
production function:
                                   Y = AK α L1−α

 (1)                          ∂Y
                                    = MPK = αAK α−1 L1−α
                              ∂K
                                    = αAk α−1 > 0
                             ∂ 2Y
                                 2
                                    = α(α − 1)AK α−2 L1−α
                             ∂K
                                        ∂ 2Y
                    Since (α − 1) < 0 ,       < 0, MPK diminishing
                                        ∂K 2
                                   ∂Y
                                       = MPL = (1 − α)AK α L−α
                                   ∂L
                                       = (1 − α)Ak α > 0
                                 ∂ 2Y
                                       = −α(1 − α)AK α L−(α+1) < 0
                                 ∂L2
 (2) CRS:
                                   Y = AK α L1−α
                             Now, λY = A(λK)α (λL)1−α
                                      = Aλα K α · λ1−α · L1−α
                                      = Aλα+1−α · K α L1−α
                                      = A · λ · K α L1−α
                                      = λ · (AK α L1−α )
                                      =λ·Y

 (3) Inada Conditions:
                     lim MPK = lim αAK α−1 L1−α
                         K→∞          K→∞

                                    = lim α · A · K −(1−α) L1−α
                                      K→∞
                                          αAL1−α
                                    = lim
                                      K→∞ K 1−α
                                      αAL1−α
                                    =
                                        ∞
                                    =0

       Similarly,            lim MPL = lim (1 − α)AK α L−α
                             L→∞        L→∞
                                            (1 − α)AK α
                                     = lim
                                       L→∞       Lα
                                       (1 − α)AK α
                                     =
                                            ∞
                                     =0

       And,                            αAL1−α     αAL1−α
                       lim MPK = lim            =         =∞
                       K→0          K→0 K 1−α         0
                                              (1 − α)AK α
                                lim MPL = lim             =∞
                                L→0       L→0      Lα

So, Cobb-Douglas production function follows Neoclassical properties.
Intensive form:




Lectures on Macroeconomics           The Solow Model              Md Nurul Hoque, JU



                                         3
With CRS,

                               Y = AK α L1−α
                                         1−α
                               Y      αL
                             ⇒   = AK
                               L         L
                             ⇒ y = AK α L−α
                                     K
                             ⇒ y = A( )α = Ak α                              (5)
                                     L




4    Fundamental Equation of the Solow Model
From the law of motion of capital,

                                   K̇ = sY − δK
                                 K̇    Y      K
                               ⇒    =s −δ
                                 L     L      L
                                 K̇
                               ⇒    = sf (k) − δk                            (6)
                                 L
R.H.S is in per capita form but the L.H.S is not.
We know,
                                  K
                             k=
                                  L
                     ⇒ log kt = log Kt − log Lt
                      d log kt    d log Kt d log Lt
                    ⇒           =         −
                         dt          dt        dt
                             k̇   K̇ L̇
                         ⇒ =         −
                             k    K L
                             k̇   K̇
                         ⇒ =         − n (Since, the labor force grows at n rate)
                             k    K
                                  K̇ K
                          ⇒ k̇ =     ×    − nk
                                  K     L
                                  K̇
                          ⇒ k̇ =     − nk                                   (7)
                                  L
Using (7) in (6),

                                  k̇ + nk = sf (k) − δk
                              ⇒ k̇ = sf (k) − δk − nk
                             ⇒ k̇ = sf (k) − (δ + n)k                        (8)

(8) gives the fundamental equation of the Solow model where (δ + n) is
the effective depreciation rate for k = K
                                        L
                                          . Capital per person reduces
because capital wears out and population is growing.


5    Balanced Growth Path
A balanced growth path is a situation in which various quantities grow
at constant rates. In the Solow Model, BGP corresponds to steady state
equilibrium where k̇ = 0.
Denote k ∗ ≡ steady state level of k.


Lectures on Macroeconomics           The Solow Model         Md Nurul Hoque, JU



                                         4
Now setting k̇ = 0 in (8),
                                0 = sf (k) − (n + δ)k
                                ⇒ sf (k ∗ ) = (n + δ)k ∗                        (9)
(9) gives the condition for steady state (when capital stops). The situa-
tion is shown in the graph:




5.1   Growth rate of variables:
Since k stops in the BGP, y = f (k) also stops i.e.,
                               γk = 0 = γy
                        Since, c∗ = (1 − s)f (k ∗ ) , gk = 0 ⇒ γc = 0
                       Hence, γk = γc = γy = 0 in the BGP.
Per capita variables do not grow in the long run. That is, it is a growth
model without growth.

However, aggregate variables grow at positive rates in the BGP:
                                         Y
                                     y=
                                         L
                              ⇒ log y = log Y − log L
                               d log y   d log Y   d log L
                             ⇒         =         −
                                  dt        dt        dt
                                ⇒ γy = γY − γL
                                  ⇒ 0 = γY − n
                                ⇒ γY = n
That is, in the BGP, aggregate output Y grows at a constant rate, n.
Similarly,
                                          K
                                       k=
                                          L
                                   ⇒ γk = γK − γL
                                    ⇒ 0 = γK − n
                                   ⇒ γK = n
and
                                          C
                                        c=
                                          L
                                   ⇒ γc = γC − γL
                                   ⇒ γC = n

Lectures on Macroeconomics             The Solow Model          Md Nurul Hoque, JU



                                           5
In the Solow model, without technological progress, per capita variables
c, k and y grow at the constant rate 0, but aggregate variables grow by
the growth rate of population n.

5.2   Solving for k ∗ , y ∗ and c∗ :
Using Cobb-Douglas production function, we can get analytical expres-
sions ( closed-form solution) for k ∗ , y ∗ and c∗ .

At the steady state,
                                             sf (k ∗ ) = (n + δ)k ∗
                                   Now, with Y = AK α L1−α
                                             Y        L1−α
                                          ⇒    = AK α
                                             L         L
                                                   α
                                           ⇒ y = Ak = f (k)

      ∴ Steady state condition becomes:
                                  s · Ak ∗ α = (n + δ)k ∗
                                               n+δ
                                     ⇒ sA = ∗α · k ∗
                                                k
                                       ∗1−α     sA
                                 ⇒k          =
                                               n+δ
                                                 sA 1−α  1
                                      ⇒ k∗ = (        )    , constant.
                                                n+δ
k ∗ rises with s and A, but falls with n and δ.

Output per capita:
                                           sA 1−α α
                Now, y ∗ = Ak α = A · (         )
                                         n+δ
                                           α        s 1−α  α
                                  = A · A 1−α · (       )
                                                  n+δ
                                         α
                                     1+ 1−α     s 1−α α
                                  =A        (       )
                                              n+δ
                                       1        s 1−α α
                              y ∗ = A 1−α · (       )     , constant.
                                              n+δ


Consumption per capita:
                       c∗ = (1 − s)y ∗
                                         1    s 1−αα
                   ⇒ c∗ = (1 − s)A 1−α (         )   , constant.
                                             n+δ

6     Transitional Dynamics

The Solow model generates growth in the transition to the BGP. Recall
the fundamental equation of the model.
                                k̇ = sf (k) − (n + δ)k
Divide this by k,
                          k̇        sf (k)
                             = γk =        − (n + δ)                   (1)
                          k           k
(1) says that γk is given by the difference between two terms: sfk(k) and
(n + δ). Note that

Lectures on Macroeconomics               The Solow Model              Md Nurul Hoque, JU



                                             6
• sfk(k) curve is downward sloping, and note that limk→∞ sfk(k) = 0 and
  limk→0 sfk(k) = ∞.
• (n + δ) is a horizontal line crossing the vertical axis at (n + δ).
The vertical distance between these two curves equals the growth rate
of k, and the point of intersection corresponds to BGP. Note that this
intersection occurs only once; hence, solution exists and it is unique.
Figure 2 shows this situation.




Now output,                 y = Ak α
                           dy               dk    Ak α
                         ⇒     = αAk α−1 ·     =α      · k̇
                           dt               dt     k
                            ẏ   αAk α · k̇    k̇
                          ⇒ =               =α
                            y      k·y         k
                            ẏ
                          ⇒ = γy = α · γk
                            y
This gives that growth rate of output per capita in the transition to the
BGP ( transitional growth).

Formal treatment:

Note that with (n + δ)k line having a constant slope, we require k̇ < 0 if
k > k ∗ and k̇ > 0 if k < k ∗ . This requires the slope of sf (k) must decline
and eventually cut the (n + δ)k line.

Mathematically, differentiating the k̇ with respect to capital,

                               dk̇
                                   = sf ′ (k) − (n + δ)                       (2)
                               dk
Since we are interested about BGP, we want to study the dynamics of k
around BGP k ∗ . Then evaluating (2) by k ∗ ,
                        dk̇
                               = sf ′ (k ∗ ) − (n + δ)
                        dk   ∗ k=k


We see that BGP requires dkdk̇
                                    < 0. That is, the difference between
                               k=k∗
the slope of the saving function and the slope of the depreciation line
must be negative.

Lectures on Macroeconomics            The Solow Model         Md Nurul Hoque, JU



                                          7
In the case of Cobb-Douglas case this requires,
                      k̇ = sAk α − (n + δ)k
                             dk̇
                      ⇒          = s · Aαk α−1 − (n + δ)
                             dk
                                           sA 1−α1
                                 = sAα[(        ) ]α−1 − (n + δ)
                                         n+δ
                                          sA −1
                                 = sAα(        ) − (n + δ)
                                         n+δ
                                 = α(n + δ) − (n + δ)
                                 = (n + δ)(α − 1)

                                 dk̇
                             ∵       < 0 ⇒(n + δ)(α − 1) < 0
                                 dk
                                         ⇒α<1
∴ BGP requires α < 1 i.e., diminishing returns to k. You should memo-
rize this result by heart.

With diminishing returns, when k is low, MPK = f ′ (k) is relatively high.
Since s is constant, by assumption, sf ′ (k) is also relatively high. Again,
Since k depreciates at (n + δ) rate, a constant, k̇ is also relatively high.
In fact, for k < k ∗ , k̇ > 0. Conversely, for k > k ∗ , k̇ < 0.


7     Policy Experiments:
Suppose that the economy’s initial k ∗ = k1∗ . We can now change different
parameters to study their impacts on growth and level of the variables
of the model.

7.1    Impact of saving:
A permanent increase in saving from s1 to s2 shifts sf (k) schedule to the
right. Hence, the intersection of sf (k) and (n + δ) line also shifts to the
right, from k1∗ to k2∗ . An increase in saving temporarily generates growth
( transitional growth). But in the BGP, y , c and k growth stops once
again at k2∗ .




A permanent increase in technology also has similar effect.




Lectures on Macroeconomics               The Solow Model           Md Nurul Hoque, JU



                                            8
7.2    Dynamic inefficiency:
Clearly, steady state/BGP k ∗ is depending on s. For each s, we have a
corresponding k ∗ .

                                                      ˙
                                                 dk ∗ (s)
                      So, define k ∗ = k ∗ (s) ,          >0
                                                   ds
                              Then c∗ = (1 − s)f (k ∗ (s))
                                ⇒ c∗ = f (k ∗ (s)) − sf (k ∗ (s))
                                ⇒ c∗ = f (k ∗ (s)) − (n + δ)k(s)
Consumer’s welfare is maximized with the maximum per capita con-
sumption and is given by:

                                   dc∗             dk           dk
                                         = f ′ (k)    − (n + δ)
                                     ds            ds           ds
                                                               dk
                                         = [f ′ (k) − (n + δ)]    =0
                                                               ds
                                     dk
                             Since       > 0 , f ′ (k) − (n + δ) = 0
                                     ds
                               ⇒ f ′ (k) = (n + δ)

Clearly c is maximized when f ′ (k) = n + δ. Let’s denote the level of
capital which satisfies this condition by kg . Then the corresponding
consumption:

    cg = f (kg ) − (n + δ)kg , is called the golden rule of consumption rate.
If s > sg , then it is possible to increase consumption on BGP and
also in the transition to the BGP. We refer to this situation, when ev-
eryone would be made better off by an alternative allocation, as one
of dynamic inefficiency. The Solow Model leaves some scope for this
type of dynamic inefficiency because saving ratio was imposed on the
consumer/household.


8     Absolute and Conditional Convergence

Recall that
                               ∂γk  s           f (k)
                                   = (f ′ (k) −       )<0
                               ∂k   k             k
This implies that a country with lower capital stock grows faster. Is
there any convergence across economies?

The Solow model suggest that economies that are structurally similar
in the sense that they have the same values of the parameters s, n, and δ
and also have the same production function, F (·) , have the same BGP
values k ∗ , y ∗ , no matter what their initial conditions are. This hypoth-
esis is known as conditional convergence. This hypothesis match the
data (e.g.,European Countries).

Note that the model does not say that there would be absolute con-
vergence. The model does not say all countries will converge to the
same BGP equilibrium, regardless of the fundamentals.




Lectures on Macroeconomics               The Solow Model               Md Nurul Hoque, JU



                                             9
8.1    Cross country differences in income (levels)
We have seen that γk = γy = γc = 0 in the Solow Model ( within a coun-
try). And like countries converge to like countries ( conditional conver-
gence). But can it help us understand income differential?

Today (2020) income varies $138,000 in Qatar to $80,000 in Norway
to $700 in Burundi. Can the Solow Model answer the question:
 Why are the poor countries poor? Why is Qatar 200 times richer than
                              Burundi?
To answer this question, recall that along the BGP,
                                         1        s 1−αα
                              y ∗ = A 1−α (          )
                                                 n+δ
 (i). For simplicity, assuming A = 1 and n = 0, then
                                       s α
                                y ∗ = ( ) 1−α
                                       δ
      Consider two countries: Country 1 and 2, then
                                                  α
                                  y1  ( sδ1 ) 1−α s1 α
                                     = s α = ( ) 1−α
                                  y2  ( δ ) 1−α
                                          2       s2
      Then cross country differences in income come from differences in
      saving and capital’s share (α) across countries. The following table
      shows income differences for various values of s and α.
                                        y1
                                       ( − 1)
                                        y2
                             s1              1         1        2
                                    α=            α=       α=
                             s2              3         2        3
                              1      0              0    0
                             1.5    22%           50% 125%
                              2     41%           100% 300%
                              3     73%           200% 800%

      Even with ss12 = 3 and α = 23 , the first country is 800% richer than
      the 2nd country. But 138000
                                700
                                      × 100 = 19714 ≈ 20, 000, shows Qatar
      is 20,000% richer than Burundi. So, we need to look for other
      reasons.
(ii). Differences in income may come from differences in the total factor
      productivity, A.

        Q. How large do these differences need to be to explain output
                                differential?
                                                                    1
      Let α = 32 , (after Presscott, Parente 2002). Then A 1−α = A3 . Now let
      s, δ, and n are the same across countries and just focus on only A.
                                             1
                                    y1   A1 1−α    A1 1
                                       =     1  = ( ) 1−α
                                    y2   A2 1−α    A2
                                             2 y1     A1
                                        α= ,      = ( )3
                                             3 y2     A2
                                     A1            y1
                              Now if    = 3, then     = 27
                                     A2            y2
      Parente and Presscott (2002) used this to estimate how much the
      productivity gap should there be to account for observed gap in

Lectures on Macroeconomics            The Solow Model               Md Nurul Hoque, JU



                                             10
     income relative to USA. The following shows this for some of the
     countries:

                  Country            Relative Income       Relative TFP
                     UK                    60%                 80%
                  Columbia                 22%                 64%
                  Paraguay                 16%                 59%
                  Pakistan                 10%                 51%

Solow Model requires substantial gap in factor productivity to explain
existing cross country differences in income.
    This begs the question of what makes the productivity so different
                            across countries?
To answer this question we need to study New Growth Theory. For now,
we focus on growth itself.


9    The Solow Model with exogenous technological change

    Ȧ
Let    = γA = g , where g is a constant. That is, technology grows by an
    A
exogenous g rate.

Then,
                              y = Ak α
                       ⇒ log y = log A(t) + α log k(t)
                        d log y        d log A     d log k(t)
                      ⇒         = γy =         +α
                           dt             dt           dt
                           ∴ γy = γA + αγk
Since along BGP k is constant, γy = γA = g.

In the long run, technological growth is the only source of growth in
the per capita output.
     How can we introduce this technological change in the model?
It tuns out only labor augmenting (Harrod-neutral) technological progress
is consistent with the BGP. So, we attach technology to the the labor
force.

Define
                                        E ≡ Lt · egt
                                          = L0 ent · egt
                                          = L0 e(n+g)t
                             Assume L0 = 1 ⇒ E = e(n+g)t

Production Function:
                                              Y         K
                             Y = F (Kt , Et ) ⇒   = F ( , 1)
                                              E         E
                                             ⇒ ŷ = f (k̂)
              K
Define k̂ ≡
              E




Lectures on Macroeconomics               The Solow Model        Md Nurul Hoque, JU



                                            11
So,                    log k̂ = log K − log E
                   d log k̂   d log K̂ dlogE
                  ⇒         =            −
                      dt           dt         dt
                          ˙
                         k̂           K̇ Ė
                     ⇒ = γk̂ =           −
                         k̂           K E
                          ˙
                         k̂   I − δK
                     ⇒ =                 − (n + g)
                         k̂        K
                          ˙
                         k̂   sY
                     ⇒ =             − (n + g + δ)
                         k̂   K
                          ˙   s YE
                         k̂
                     ⇒ = K − (n + g + δ)
                         k̂    E
                          ˙
                         k̂   sŷ
                     ⇒ =            − (n + g + δ)
                         k̂   k̂
                          ˙
                         k̂   sf (k̂)
                     ⇒ =               − (n + g + δ)
                         k̂       k̂
                          ˙
                         k̂                sf (k̂)
            Along BGP, = γk̂ = 0 ⇒                 − (n + g + δ) = 0
                         k̂                  k̂
                   ⇒ sf (k̂) = (n + g + δ)k̂ → (Condition for BGP)



9.1   Growth rates
                      ˙
In the steady state, k̂ = 0. Therefore,
                                   K̇ Ė
                                      − =0
                                   K E
                                  K̇
                               ⇒      = gK = (n + g)
                                  K
                               K       K
                    Now, k̂ =    =           = k · e−gt
                               E     L · egt
                                    ∴ log k̂ = log k − gt
                                          d log k̂   d log k
                                      ⇒            =         −g
                                             dt         dt
                                                 ˙
                                                k̂   k̇
                                            ⇒ = −g
                                                k̂   k
                                                     k̇
                                             ⇒0= −g
                                                     k
                                                k̇
                                           ⇒       = g = γk
                                                k
                             Similarly, γk = γy = γc = g (find it)
                                 Since ŷ = f (k̂), γk̂ = 0 ⇒ γŷ = 0
                                                          Y       Y
                                              But ŷ =      =
                                                          E    L · egt
                                                          Y
                                                 ⇒ ŷ = · e−gt
                                                          L
                                               ⇒ γy = g
                  Similarly, ĉ = (1 − s)f (k̂) ⇒ γc = g
                                      ∴ γk = γy = γc = g

Lectures on Macroeconomics             The Solow Model               Md Nurul Hoque, JU



                                           12
And one can show K, L, and C grow by the rate (n+g). Although k̂ stops
in the BGP, k grows by the rate of technological change. This is what
we need to confirm stylized fact iii.



10     Conclusion ( From Campante et al., 2021)
The Solow model shows that capital accumulation by itself cannot sus-
tain growth in per capita income in the long run. This is because ac-
cumulation runs into diminishing marginal returns. At some point the
capital stock becomes large enough – and its marginal product cor-
respondingly small enough – that a given savings rate can only pro-
vide just enough new capital to replenish ongoing depreciation and in-
creases in labour force.

Alternatively, if we introduce exogenous technological change that in-
creases productivity, we can generate long-run growth in income per
capita, but we do not really explain it. In fact, any differences in long-
term growth rates come from exogenous differences in the rate of tech-
nological change – we are not explaining those differences, we are just
assuming them! As a result, nothing within the model tells you what
policy can do about growth in the long run. That said, we do learn a
lot about growth in the transition to the long run, about differences in
income levels, and how policy can affect those things.

There are, however, clear lessons about: (i) convergence – the model
predicts conditional convergence; (ii) dynamic inefficiency – it is pos-
sible to save too much in this model; and (iii) long-run differences in
income – they seem to have a lot to do with differences in productivity.
Very importantly, the model also points at the directions we can take
to try and understand long-term growth. We can have a better model
of savings behaviour: how do we know that individuals will save what
the model says they will save? And, how does that relate to the issue of
dynamic inefficiency?

We can look at different assumptions about technology: maybe we can
escape the shackles of diminishing returns to accumulation? Or can
we think more carefully about how technological progress comes about?
The New Growth Theories will answer many of these questions.



                             ...............XXXX...............




Lectures on Macroeconomics               The Solow Model          Md Nurul Hoque, JU



                                            13
