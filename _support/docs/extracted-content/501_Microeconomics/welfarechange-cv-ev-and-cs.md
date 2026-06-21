<!-- Extracted from: 501_Microeconomics/WelfareChange (CV, EV and CS).pdf -->

MEASURING WELFARE CHANGE



                                              1. I NTRODUCTION
   Welfare economics is first and foremost a policy science. In his classic treatise, A.K. Sen [30] says ”Welfare
economics is concerned with policy recommendations”. Gunnar Myrdal [27]in discussing the economist
and the politician proposes that ”The politician may reasonably expect from the economist that he should
explain the actual situation and state the effects of different modes of action in relation to the same initial
situation”. Empirical welfare economics provides guidance to policy makers in evaluating policies in ac-
tual or simulated markets using available data and reasonable methods. Three requirements of proposed
measurement methods seem essential.
      1.: For an individual or homogeneous group, the welfare measure can answer the question proposed
         by policymakers.
      2.: The welfare measure can be calculated from empirically estimated parameters that represent in-
         dividual optimizing behavior.
      3.: The welfare measure can be aggregated across individuals or homogeneous groups so as to obtain
         an overall measure of the desirability of a given policy.

                            2. A LTERNATIVE WAYS TO R EPRESENT P REFERENCES
2.1. Utility Function. Consider a consumption set is X = RL             L
                                                             + = {x ∈ R : x` ≥ 0 for ` = 1, ... , L}. A function
v: X → R is a utility function representing the preference relation  if, for all x1 ,x2 ∈ X,
         1



                                         x1  x2 ⇔ v(x1 ) ≥ v(x2 )                                            (1)
  We typically denote the utility function by v(x).
2.2. Indirect Utility Function. We obtain the indirect utility function by substituting the utility maximizing
levels of x for a given set of prices, p, and income, m, into the utility function.
                               ψ(m, p) = v [x1(m, p), x2 (m, p), . . . , xn (m, p)]                           (2)
  or

                                      ψ (m, p) = max [v(x) : px = m]                                          (3)
                                                     x
   The indirect utility function gives the maximum utility level obtainable with a given set of prices and
income (p,m). The indirect utility function is an ordinal ranking of price and income combinations.
2.3. Cost Function. The cost function gives the minimum cost way of obtaining a particular utility level
for a given set of prices.

                                                    X
                                                    n
                                   c(u, p) = min          pi xi   s.t. v(x) = u
                                              x≥0
                                                    i=1                                                       (4)
                                            = min [p x : v(x) = u]
                                                x

  Date: October 10, 2005.
                                                          1
2                                           MEASURING WELFARE CHANGE


2.4. Money Metric Utility Function. The money metric utility function gives the minimum cost of obtain-
ing the utility of the vector x when prices are p. Specifically,

                                              m(p, x) = C(u(x), p)                                              (5)
   The money metric defines the minimum cost of buying bundles as least as good as x. The money metric
utility function is sometimes called the ”minimum income function” or the ”direct compensation function”.

2.5. Money Metric Indirect Utility Function. For the price vectors p and p0 and income m, the money
metric indirect utility function is defined by

                                           µ(p, p0, m) = c(ψ(p0 , m), p)                                        (6)
   The indirect money metric utility function defines the minimum cost of buying bundles at prices p that
yield utility at least as large as than obtained when prices are p0 and income is m. The money metric
indirect utility function is sometimes called the indirect compensation function.

2.6. Ordinary Demand. An ordinary demand function specifies the optimal levels x for a given set of
prices and income.

                                      x(m, p) = argmax [v(x) : px = m]                                          (7)
    It is obtainable from the indirect utility function via Roy’s identity.

                                                  − ∂ ψ [c(u,p),p]
                                                         ∂ pi            − ∂ ψ∂(u,p)
                                                                                pi
                                    xi (m, p) =    ∂ ψ [c(u,p),p ]
                                                                     =    ∂ ψ u,p)
                                                                                                                (8)
                                                        ∂m                  ∂m


2.7. Hicksian Demand. An Hicksian or compensated demand function specifies the cost minimizing levels
x for a given set of prices and specified utility level.

                                       h(u, p) = argmin [p x : v(x) = u]                                        (9)
    It is obtainable from the cost function via Shephard’s lemma.

                                                              ∂c(u, p)
                                               hi (u, p) =                                                    (10)
                                                                ∂pi


                              3. C OMPENSATING AND E QUIVALENT VARIATION
3.1. Ideal welfare change measures. Consider two alternative states of the world. In the first state (or
status quo), the consumer faces prices p0 and has income m0. In the second state the consumer faces prices
pj and has income mj . The utility maximizing consumer will obtain utility level ψ(m0 ,p0 ) in the initial state
and utility level ψ(mj ,pj ) in state j. Here ψ(p,m) is the indirect utility function yielding the maximal level of
utility with prices p and income m. If all we care about is which state is optimal, this measure is sufficient.
Utility is an ordinal measure so the consumer is better or worse off as ψ(pj ,mj ) is greater than or less than
ψ(p0 ,m0 ). The difficulty with using this ordinal measure is that it allows no comparisons across individuals
and gives no indication of the strength of preference for {p0,m0} versus {pj ,mj }.
                                          MEASURING WELFARE CHANGE                                            3


3.2. Definitions of Compensating and Equivalent Variation. Sir John R. Hicks [17, 18] proposed two
”willingness to pay measures” to allow for monetary measurement of welfare change.
Definition 1 (Equivalent Variation). Equivalent variation (EV)is defined as the amount of money paid to
an individual with base prices and income that leads to the same satisfaction as that generated by a price
and income change.

                                 EV = c(ψ(mj , pj ), p0) − c(ψ(m0 , p0), p0 )
                                                                                                       (11)
                                      = c(ψ(mj , pj ), p0) − m0
   If there is no change in income between the initial price and income pair and the subsequent one, we can
also write EV as follows given that c(ψ(m,pj ),pj ) = c(ψ(m,p0 ),p0 )

                                 EV = c(ψ(mj , pj ), p0) − c(ψ(m0 , p0), p0 )
                                                                                                           (12)
                                       = c(ψ(m, pj ), p0) − c(ψ(m, pj ), pj )
   In equation 11, c(u,p) is the cost or expenditure function, ψ(m,p) is the indirect utility function, p0 is
the initial price vector, pj is any other price vector, m0 is initial income and mj is subsequent income.
Equivalent variation is the amount of money one has to give to a consumer so that she could attain the
utility level possible with the new prices and income while facing base prices and only having base income.
Equivalent variation can be thought of as the amount of money the consumer would accept in lieu of the
price change. Equivalent variation measures the difference in attaining the inital utility level at the initial
and subsequent prices.Equivalent variation is negative if the price and income change would make the
consumer worse off.
Definition 2 (Compensating Variation). Compensating variation (CV)measures the net revenue of a plan-
ner who must compensate the consumer for a price change after it occurs, bringing her back to the utility
level ψ(m0,p0 ). Compensating variation would be negative if the planner would have to pay the consumer
a positive level of compensation because the price change makes her worse off. Compensating Variation is
defined implicitly by

                                  CV = c(ψ(mj , pj ), pj ) − c(ψ(m0 , p0), pj )
                                                                                                       (13)
                                      = mj − c(ψ(m0 , p0), pj )
   If there is no change in income between the initial price and income pair and the subsequent one, we can
also write CV as follows given that c(ψ(m,pj ),pj ) = c(ψ(m,p0 ),p0 )

                                   CV = c(ψ(m, pj ), pj ) − c(ψ(m, p0 ), pj )
                                                                                                           (14)
                                        = c(ψ(m, p0 ), p0) − c(ψ(m, p0 ), pj )
   Compensating variation is negative of the amount of money the consumer would be just willing to accept
from the planner to allow the price change to take place. Compensating variation measures the difference
in attaining the inital utility level at the initial and subsequent prices. Compensation takes place after the
price and income change, so that compensating variation uses the after change prices.
3.3. Graphical Analysis of Compensating Variation and Equivalent Variation. Consider figure 1. At the
prices and income (m,p0) the optimal demand is at x(m,p0 ) along the indifference curve U0 . As the price
of good one falls, the budget line rotates outward and the consumer moves to point x(m,p1 ) along the
indifference curve U1 . Compensating variation measures the amount of income that must be taken away
from the consumer at the new lower prices to leave her at the old utility level. At the new prices and this
4                                       MEASURING WELFARE CHANGE


lower income level she consumes at point x(m-CV,p1). Compensating variation is the distance between the
two budget lines along the vertical axis.


                                   F IGURE 1. Compensating Variation
                    x2


                80



          CV
                60

                                                          xHm,p1L
                                                                                    U1
                                                xHm-CV,p1L
                40

                          xHm,p0L                                                 U0

                20




                                                                                               x1
      -20                       20          40          60           80         100         120

   Consider figure 2. At the prices and income (m,p0 ) the optimal demand is at x(m,p0 ) along the indiffer-
ence curve U0 . As the price of good one falls, the budget line rotates outward and the consumer moves to
point x(m,p1 ) along the indifference curve U1. Equivalent variation measures the amount of income that
must be given to the consumer at the old prices to make her as well off as with the lower prices. At the new
prices and this higher income level she consumes at point x(m+EV,p0 ). Equivalent variation is the distance
between the two budget lines along the vertical axis.
                                          MEASURING WELFARE CHANGE                                          5



                                       F IGURE 2. Equivalent Variation
                    x2


              100

          EV
                80




                                                         xHm+EV,p0L
                60

                                                             xHm,p1L
                40                                                                      U1

                           xHm,p0L                                                    U0

                20



                                                                                                x1
      -20                        20           40           60             80        100      120
3.4. Compensating and Equivalent Variation and the Indirect Money Metric Utility Function. For the
price vectors p and a reference set p̄ and income m, the money metric indirect utility function is defined by

                                           µ(p, p̄, m) = c(ψ(m, p̄), p)                                  (15)
  It represents the cost of attaining utility level ψ(m,p̄) when prices are p. Similarly,

                                         µ(p1, p̄, m) = c(ψ(m, p̄), p1)                                (16a)

                                         µ(p0, p̄, m) = c(ψ(m, p̄), p0)                                (16b)
6                                            MEASURING WELFARE CHANGE


  If we choose p0 as the base set of prices, we obtain one indirect money metric utility function, it we
choose p1 as the base set of prices, we obtain a different one indirect money metric utility function.

                                          µ(p1 , p0, m) = c(ψ(m, p0 ), p1)                                 (17a)

                                          µ(p0 , p0, m) = c(ψ(m, p0 ), p0)                                 (17b)

                                          µ(p1 , p1, m) = c(ψ(m, p1 ), p1)                                 (17c)

                                          µ(p0 , p1, m) = c(ψ(m, p1 ), p0)                                 (17d)
    The definition of compensating variation then becomes

                                    CV = c(ψ(m, p1 ), p1) − c(ψ(m, p0 ), p1)
                                                                                                            (18)
                                          = µ(p1, p1, m) − µ(p1, p0, m)
    while equivalent variation becomes

                                    EV = c(ψ(m, p1 ), p0) − c(ψ(m, p0 ), p0)
                                                                                                            (19)
                                          = µ(p0, p1, m) − µ(p0 , p0, m)

3.5. Compensating and Equivalent Variation and Hicksian Demand Curves. We know from Shephard’s
lemma that

                                              ∂c(u, p)
                                                       = hi (u, p)                                          (20)
                                                ∂pi
   where hi (u,p) is Hicksian demand function for the ith good. It depend on the utility level and the prices
of all goods. Consider a situation with only the ith price changes and write hi (u,p) as follows hi (u,pi ,p̃−i )
where p̃−i represents all prices except pi . Equivalent variation from a change in the ith price from p0i to p1i
is defined as

                          EV = c(ψ(m, p1i , p̃−i), p0i , p̃−i) − c(ψ(m, p0i , p̃−i), p0i , p̃−i)
                                                                                                            (21)
                               = c(ψ(m, p1i , p̃−i), p0i , p̃−i) − c(ψ(m, p1i , p̃−i), p1i , p̃−i)
    This can be written as an integral in the following manner,,
                                             Z p0i
                                    EV =             hi(ψ(m, p1i , p̃−i), pi, p̃−i) dpi                     (22)
                                               p1i
   Thus the change in consumer welfare as measured by equivalent variation can be represented by the
area lying between p0i and p1i and to the left of the Hicksian demand curve for good i associated with new
utility level ψ m, p1i , p̃1−i .

    Similarly compensating variation from a change in the ith price from p0i to p1i is defined as

                          CV = c(ψ(m, p1i , p̃−i), p1i , p̃−i) − c(ψ(m, p0i , p̃−i), p1i , p̃−i)
                                                                                                            (23)
                               = c(ψ(m, p0i , p̃−i), p10, p̃−i) − c(ψ(m, p0i , p̃−i), p1i , p̃−i)
    This can be written as an integral in the following manner,,
                                          MEASURING WELFARE CHANGE                                                7



                                           Z p0i
                                  CV =              hi(ψ(m, p0i , p̃−i), pi, p̃−i) dpi                         (24)
                                              p1i
   Thus the change in consumer welfare as measured by compensating variation can be represented by the
area lying between p0i and p  1
                              i and to the left of the Hicksian demand curve for good i associated with initial
                    0 0
utility level ψ m, pi , p̃−i .

   For a single price change and a normal good, EV will be larger than CV for a fall in price and EV < CV
for an increase in price. This relation changes then the good in question is an inferior good. If there are no
wealth effects for a particular good, then EV and CV will be the same for a given price change. As will be
discussed later, in this case, CV and EV and the consumer surplus will all be equivalent. For the example
in figures 1 and 2, compensating variation is 79.3 while equivalent variation is 107.8.

   Chipman and Moore [7] and McKenzie [24] have argued that compensating variation cannot be a valid
measure of welfare change because it is not a monotonic, increasing transformation of the indirect utility
function and thus preferences. They call for the use of equivalent variation. Their arguments are appro-
priate when considering all possible price changes and economic environments but many policy questions
are specifically concerned with changes from the status quo. If consumers have a property right to the sta-
tus quo then the appropriate welfare measure is compensating variation because the policymaker wants to
know how much the consumer must be paid to give up that right.
                                                                                                       1   1
3.6. example problem. Consider a consumer with the following utility function: v(x1 , x2) = x14 x22 . To
maximize utility subject to a budget constraint we obtain we set up a Lagrangian function.
                                          1     1
                                   L = x14 x22 − λ [ p1 x1 + p2 x2 − m ]                                       (25)

                                                    1       1
                                          1 4 2
                                    ∂L     x x
                                        = 4 1 2 − λ p1 = 0                                                 (26a)
                                    ∂x1     x1
                                                    1       1
                                          1 4 2
                                    ∂L     x x
                                        = 2 1 2 − λ p2 = 0                                                 (26b)
                                    ∂x2     x2
                                   ∂L
                                        = − [ p1 x1 + p2 x2] + m = 0                                       (26c)
                                    ∂λ
  Take the ratio of the 26a and 26b to obtain
                                                             1    1
                                                        1
                                                        4   x14 x22
                                                             x1           p1
                                                              1   1   =
                                                        1
                                                            x14 x22       p2
                                                        2
                                                             x2
                                                                                                               (27)
                                                   x2    p1
                                                     ⇒ =
                                                  2 x1   p2
   We can now solve the equation for the quantity of good 2 as a function of the quantity of good 1 and the
prices of both goods. Doing so we obtain
                                                                  2 x1 p1
                                                    x2 =                                                       (28)
                                                                    p2
  Now substitute 28 in 26c to obtain
8                                          MEASURING WELFARE CHANGE



                                             ∂L
                                                 = − [ p1 x1 + p2 x2 ] + m = 0
                                             ∂λ
                                         2 x1 p1
                            ⇒ p1 x1 + p2         =m
                                            p2
                               ⇒ p1 x1 + 2 x1 p1 = m                                                    (29)

                                        ⇒ 3, p1 x1 = m
                                                          m
                                             ⇒ x1 =
                                                         3p1
    Similarly for x2 so that we have

                                                            2m
                                                    x2 =                                                (30)
                                                            3p2
    We can find the indirect utility function ψ(m, p1 , p2) by substitution

                                                          1    1
                                       ψ(m, p1 , p2) = x14 x22

                                                                    14           12
                                                               m             2m
                                                     =                                                  (31)
                                                              3p1            3p2
                                                 √  1  1
                                                   2 m 4 m 2
                                               = 3
                                                 34    p1     p2
   The cost function for this consumer is obtained by minimizing cost subject to a utility constraint. First
set up the Lagrangian problem
                                                                        1     1
                                     L = p1 x1 + p2 x2 − λ (x14 x22 − u )                               (32)
    The first order conditions are as follows

                                                      1
                                           ∂L           v
                                               = p1 − 4 λ = 0                                          (33a)
                                           ∂x1        x1
                                                      1
                                           ∂L           v
                                               = p2 − 2 λ = 0                                         (33b)
                                           ∂x2        x2
                                           ∂L         1  1
                                               = − x14 x22 + u = 0                                     (33c)
                                           ∂λ
    Taking the ratio of the equations 33a and 33b we obtain
                                                    p1    x2
                                                       =                                                (34)
                                                    p2   2x1
    We can then solve for x2 as

                                                          2 x1 p1
                                                  x2 =                                                  (35)
                                                            p2
    Substituting in the equation 33c we obtain
                                                   MEASURING WELFARE CHANGE                                      9



                                                              1       1
                                                        u = x14 x22
                                                                         1
                                                              1    2 x1 p1 2
                                                          = x14

                                                                      p2                                      (36)
                                                                  12
                                                             1     p1      3
                                                          = 22           x14
                                                                   p2
Solving for x1 we obtain
                                                                 1   
                                                              p1 2 34
                                                                  1
                                                  u =2            2 x1
                                                              p2
                                                                 12
                                                  3        −1    p2
                                               ⇒ x1 = u 2
                                                  4         2
                                                                 p1
                                                                                                              (37)
                                                                   23
                                                         4    −2   p2
                                               ⇒ x1 = u 3 2 3
                                                                   p1
                                                             23   23
                                                        4     1       p2
                                                    =u  3
                                                              2       p1
Similarly for x2
                                                           1                 
                                                        p1 3      4       1
                                         x2 = u 2                 3       3                                   (38)
                                                        p2
Now if we substitute for the x1 and x2 in the cost expression we obtain

                           c = p1 x1 + p2 x2
                                          23   23 !                                              13 !
                                         1 4    p2                                 4    1       p1
                             = p1     u    3            + p2                      u 2
                                                                                   3    3
                                         2      p1                                              p2
                                        23                          !
                                 4       1       1   2       1
                                                                 1 2
                             =u  3             p13 p23 + 2 3 p13 p23
                                         2
                                              23           !
                                 4   1   2    1            1
                             = u 3 p1 p2
                                     3   3
                                                      + 23                                                    (39)
                                              2
                                 4   1   2
                                            −2        1
                                                         
                             = u 3 p13 p23 2 3 + 2 3
                                 4    1    2        −2
                                                          −2 2     1  2
                                                                         
                             = u 3 p13 p23 2 3            2 3 23 + 23 23
                                 4    1    2        −2
                             = u 3 p13 p23 2 3 (1 + 2)
                                 3     4       1    2
                             =   2   u 3 p13 p23
                            2    3

How consider two sets of prices with the same income. Specifically,
10                                          MEASURING WELFARE CHANGE




                                               {p0, m0 } = {4, 4, 300}

                                               {p1, m0 } = {2, 4, 300}


     We compute indirect utility in the initial situation as follows


                                                    √  1  1
                                           0    0     2 m 4 m 2
                                       ψ0(p , m ) = 3
                                                    34   p1        p2
                                                    √         1      1
                                                      2 300 4 300 2
                                                  = 3
                                                    34     4          4
                                                    √
                                                      2 3
                                                  = 3 75 4
                                                    34
                                                    √
                                                      2 3 3                  (40)
                                                  = 3 3 4 25 4
                                                    34
                                                    √    3
                                                  = 2 25 4
                                                    √    1     1
                                                  = 2 25 2 25 4
                                                     √ √
                                                  =5 2 5
                                                     √
                                                  = 5 10


     We compute indirect utility in the subsequent situation as follows


                                                     √  1  1
                                                      2 m 4 m 2
                                       ψ1(p1 , m1 ) = 3
                                                     34  p1    p2
                                                     √     1     1
                                                      2 300 4 300 2
                                                    = 3
                                                     34   2       4
                                                            3
                                                        24       1     3     (41)
                                                    =       3   2 3 75 4
                                                        3   4

                                                            3
                                                      24 3 3
                                                    =  3 3
                                                           4 25 4
                                                      34
                                                       3  √
                                                    = 24 5 5


     Now compute the various measures of cost. Before doing so note that
                                          MEASURING WELFARE CHANGE                                             11



                                                   4
                                                           √  43
                                       ψ0(p0 , m0) 3 =     5 10
                                                              4     2   2
                                                        = 53 53 23
                                                              2
                                                        = 2 3 25                                             (42)
                                                   4
                                                        3 √  43
                                       ψ1(p1 , m1) 3 = 2 4 5 5
                                                         2 4
                                                     = 2 5 3 5 3 = 50

   Now for the cost of obtaining utility level ψ1 at prices p1. First find the cost of obtaining utility level ψ1
at prices p1 .

                                                         3 4 13 23
                                          c(ψ1 , p1) =    2 u
                                                              3 p p
                                                                 1 2
                                                        23
                                                         3       1  2
                                                       = 2 50 2 3 4 3
                                                        2 3

                                                                        −1       2                           (43)
                                                       = 150 × 2 3 × 4 3
                                                                        −1       4
                                                       = 150 × 2 3 × 2 3
                                                       = 150 × 2 = 300
  Now find the cost of obtaining utility level ψ1 at prices p0 .

                                                          3         4   1    2
                                          c(ψ1 , p0) =     2      u 3 p13 p23
                                                         2 3


                                                          3     1   2
                                                       = 2 50 4 3 4 3
                                                         23
                                                         3 × 50 × 4
                                                       =      2                                              (44)
                                                             23
                                                                        −2
                                                       = 600 × 2 3
                                                                                 1
                                                       = 600 × 2−1 × 2 3
                                                                        1
                                                       = 300 × 2 3
  Similarly for the other costs.

                                             c(ψ1 , p1) = 300
                                                                             1
                                             c(ψ1 , p0) = 300 × 2 3
                                                                                                             (45)
                                             c(ψ0 , p0) = 300
                                                                             2
                                             c(ψ0 , p1) = 150 × 2 3
  Equivalent variation is given by
12                                          MEASURING WELFARE CHANGE



                                    EV = c(ψ(m1 , p1), p0) − c(ψ(m0 , p0), p0)
                                                          1
                                         = (300 × 2 3 ) − 300
                                                1                                         (46)
                                         = 300 2 3 − 1

                                         = 77.7963
     Compensating variation is given by

                                    CV = c(ψ(m1 , p1), p1) − c(ψ(m0 , p0), p1)
                                                                           2
                                         = 300 − (150 × 2 3 )                               (47)

                                         = 61.8898
     Consider the Hicksian demand for x1 from equation 37
                                                        23   23
                                                        1     4 p2
                                             x1 = u 3                                       (48)
                                                        2       p1
     Substituting into equation 48 the subsequent utility level and price of p2 we obtain
                                                   23   23
                                                  4 1    p2
                                          x1 = u 3
                                                    2    p1
                                                3 √  43 −2  4  23
                                              = 24 5 5   23                                 (49)
                                                               p1
                                                          −2       4       −2
                                              = 50 2 3 2 3 p13
                                                          2       −2
                                              = 50 2 3 p13
     Now integrate this from 2 to 4 to obtain equivalent variation
                                                  Z 4                          −2
                                                                       2
                                          EV =                50 2 3 p13 dp1
                                                      2
                                                                  Z 4          −2
                                                              2
                                               = 50 2 3                    p13 dp1
                                                                   2
                                                              2        1
                                               = 50 2 3 p13 |42
                                                              3

                                                       2
                                                           1        1
                                                                                           (50)
                                               = 150 2 3        43 − 23
                                                      −1   2         1
                                                                          
                                               = 300 2 3         23 − 23
                                                      1         
                                               = 300 2 3 − 1

                                               = 77.9763
     Substituting into equation 48 the initial utility level and price of p2 we obtain
                                        MEASURING WELFARE CHANGE                                          13



                                                23   23
                                               1
                                               4      p2
                                       x1 = u  3
                                               2      p1
                                             √  43 −2  4  23
                                          = 5 10     23                                                 (51)
                                                           p1
                                               2         −2           4    −2
                                           = 2 3 25 2 3 2 3 p13
                                                         1            −2
                                           = 50 × 2 3 × p13
  Now integrate this from 2 to 4 to obtain equivalent variation
                                              Z 4                     −2
                                                                 1
                                      CV =           50 2 3 p13 dp1
                                               2
                                                         Z 4          −2
                                                    1
                                           = 50 2 3                  p13 dp1
                                                             2
                                                    1            1
                                           = 50 2 3 p13 |42
                                                    3

                                                   1
                                                       1        1
                                                                                                       (52)
                                           = 150 2 3        43 − 23
                                                  −2   2         1
                                                                      
                                           = 300 2 3         23 − 23
                                                           −1
                                                               
                                           = 300 1 − 2 3

                                           = 61.8898

                                         4. C ONSUMER S URPLUS
4.1. Definition of consumer surplus. Consider the demand for a product xi (p,m) and a change in price
from p0i and p1i . The area to the left of the ordinary demand curve for good i is called the change in
consumer surplus [9] associated with the change in price from p0i and p1i . Mathematically it is given by
                                               Z p0i
                                      ∆CS =              xi (pi, p̃−i , m) dpi                          (53)
                                                   p1i
  Consider figure 3. The area to the left of the demand curve between the two prices of good i is equal to
consumer surplus.
  If preferences can be represented by a quasilinear indirect utility function

                                           ψ(m, p) = g(p) + m                                         (54)
   then compensating variation will be equal to equivalent variation and both are equal to the integral in
equation 53. With other preferences, there will be a divergence between compensating variation, equivalent
variation and consumer surplus. With quasilinear preferences, when there are no wealth effects for good i,
the measure in equation 53 is referred to as Marshallian [22] consumer surplus.

  When good i is a normal good, Marshallian consumer surplus overstates compensating variation and
understates equivalent variation for both increases and decreases in pi. If good i is an inferior good, Mar-
shallian consumer surplus understates compensating variation and overstates equivalent variation for both
14                                       MEASURING WELFARE CHANGE



                                      F IGURE 3. Consumer Surplus
                      pi




                pi0




                pi1                                               xiHm,pi,p
                                                                           L
                                                                           -i


                                                                                          xi
                               5       10       15       20       25       30        35


increases and decreases in pi. If the wealth effects for the goods in question are small, consumer surplus
will be very close to both CV and EV. If the good being considered is one among many, because changes in
real income will be spread around among many goods, the wealth effects will be small and the error from
using consumer surplus instead of EV or CV will be small for the good in question.

  Consider figure 4. Consumer surplus is less than EV which is measured at the higher utility level possible
due to a decrease in pi .


                           F IGURE 4. Consumer Surplus and Equivalent Variation
                      pi



                                    hiHj1,pi,p
                                              L
                                               -i


                pi0




                pi1                                               xiHm,pi,p
                                                                           L
                                                                           -i


                                                                                          xi
                               5       10       15       20       25       30        35
                                          MEASURING WELFARE CHANGE                                     15


  Consider figure 5. Consumer surplus is greater than CV which is measured at the initial utility level
possible with the original price of pi . Also consider figure 6 where consumer surplus is greater than CV
and less than EV.

                           F IGURE 5. Consumer Surplus and Compensating Variation
                      pi




                pi0



                       hiHj0,pi,p
                                 L
                                                                 xiHm,pi,p
                                                                          L
                                  -i

                pi1                                                       -i


                                                                                         xi
                                 5      10      15       20      25      30         35


            F IGURE 6. Consumer Surplus, Equivalent Variation and Compensating Variation
                      pi



                                      hiHj1,pi,p
                                                L
                                                 -i


                pi0



                       hiHj0,pi,p
                                 L
                                                                 xiHm,pi,p
                                                                          L
                                  -i

                pi1                                                       -i


                                                                                         xi
                                 5      10      15       20      25      30         35

   While the approximation error may be small for an individual commodity, when we are dealing with a
large number of commodities, the aggregate error may become large. Hausman [15] has also pointed out
that while the approximation error may be small as a percentage of the true welfare change, it may not be
small as a percentage of deadweight loss.
16                                          MEASURING WELFARE CHANGE


4.2. Quasilinear Utility.
4.2.1. Homothetic Preferences. A preference relation is said to be homothetic if the slope of indifference
curves remains constant along any ray through the origin. If preferences take this form, then knowing
the shape of one indifference curve lets us know the shape of all indifference curves because they are ”ra-
dial blowups” of each other. A preference relation is homothetic if for any two bundles x1 and x2 such that x1
∼ x2 , then αx1 ∼ αx2 for any α > 0. A preference relation  is homothetic if and only if it can be represented
by a utility function that is homogeneous of degree one.
4.2.2. Quasilinear Preferences. Consider a set of commodities x0 , x1 , x2 , . . . ,xn . Let the utility function have
the following form.

                                         v(x0 , x1, x2, . . . , xn) = x0 + ν(x1, x2, . . . , xn)               (55)
   With these preferences, all indifference sets are parallel displacements of each other along the axis of
commodity 0. Specifically, a preference relation is quasilinear if there is one commodity, called the numeraire,
which shifts the indifference curves outward as consumption of it increases, without changing their slope.
A preference relation is quasilinear if for any two bundles x1 and x2 such that x1 ∼ x2 , then (x1 +αe0) ∼ (x2 +
αe0) for e0 = (1, 0, . . . ,0,. . . , 0) and any α > 0 where e0 is an n+1 vector. We also assume that x+αe0  x for
all x and α > 0. If we compute the marginal rate of substitution between any commodity and commodity
0, we obtain
                                                        ∂v         ∂ν
                                                                   ∂ν
                                      M RSx0 xi = − ∂x
                                                    ∂v
                                                       i
                                                         = − ∂xi =                                               (56)
                                                    ∂x
                                                              1    ∂xi
                                                          0

     Normalize the prices of all commodities such that p0 = 1 and consider the utility maximization problem.

                            L = v(x) − λ (x0 + Σn
                                                i=1 pi xi − m )
                                                                                                                 (57)
                               = x0 + ν(x1, x2, . . . , xn) − λ (x0 + Σn
                                                                       i=1 pi xi − m)
     The first order conditions are

                                              ∂L
                                                  =1 − λ = 0                                                    (58a)
                                              ∂x0
                                              ∂L    ∂ν
                                                  =      − λ pi = 0,        i = 1, 2, . . . , n                 (58b)
                                              ∂xi   ∂ xi
                         −x0 − Σn
                                i=1 pi xi + m = 0                                                               (58c)
     From equation 58a, λ =1. This then implies from equation 58b

                                                   ∂ν
                                                        = pi                                                 (59)
                                                  ∂ xi
   or that the marginal utility of consumption of the ith good is equal to its price. This allows us to solve the
n equations in 58b for the n demands as functions of the n prices. Thus the demand for the ith commodity
does not depend on income.

     The indirect utility function for quasilinear preferences is of the form

                                               ψ(m, p) = m − θ(p)
                                                                                                                 (60)
                                                         = m + φ(p)
                                               MEASURING WELFARE CHANGE                                          17


  By Roy’s identity, the demand for the ith good is given by

                                                                  − ∂ ψ(m,p)
                                                                       ∂ pi
                                                 xi(m, p) =         ∂ ψ (m,p)
                                                                       ∂m                                      (61)
                                                                   ∂ φ(p)
                                                               = −
                                                                    ∂ pi
4.3. Approximating Compensating Variation for Small Price Changes. Consider the situation when the
change in the price of a good is reasonably small. The Hicksian demand function for good i at the intimal
utility level is given by

                                     hi(ψ[m, (p0i , p̃−i)], pi, p̃−i) = hi (ψ0 , pi, p̃−i)
                                                                                                               (62)
                                                                        = hi (ψ0 , p)
  Compensating variation is obtained by integrating 62 from the initial level of pi to the subsequent one.
Consider a first order Taylor Series approximation to the Hicksian demand vector

                         h̄(ψ[m, p0 ], p) = h(ψ[m, p0 ], p0) + ∇p h(ψ[m, p0], p0) (p − p0 )
                                                                                                               (63)
                                           = h(ψ0 , p0) + ∇p h(ψ0 , p0) (p − p0)
  Approximate compensating variation is obtained by integrating 63 from the initial level of pi to the
subsequent one or
                                                 Z p0i
                                                         h̄i (ψ0 , pi, p̃−i) dpi                               (64)
                                                  p1i
   If the price change is small the linear approximation to Hicksian demand which has the same slope as
the compensated demand at the initial price combination may provide a better approximation to CV than
consumer surplus computed using ordinary demand. The relation between the slopes of the ordinary and
Hicksian demand curves for normal goods is such that

                                            ∂ hi(u, p)    ∂ xi(m, p)
                                                       <                                                    (65)
                                               ∂ pi           ∂ pi
   Consider figure 7. In this case the linear approximation to Hicksian demand understates CV by less than
consumer surplus overstates it.
   We could also consider higher order approximations to Hicksian demand. The question is whether we
have the information to compute h̄(ψ[m, p0], p). The first term in the Taylor series expansion is just the level
of demand at the initial prices and income. We know that at the initial point Hicksian and ordinary demand
are the same so h(ψ0 , p0) = x(m0 , p0). The Slutsky equation allows us to write Hicksian demand in terms
of ordinary demand as follows

                              ∂ hi (u, p)   ∂ xi(m, p)   ∂ xi (m, p)
                                          =            +             xj (m, p)                                 (66)
                                 ∂ pj          ∂ pj         ∂m
  For this specific case we obtain

          ∂ hi (ψ[m, (p0i , p̃−i )], pi, p̃−i )   ∂ xi (m, pi , p̃−i)   ∂ xi(m, pi , p̃−i)
                                                =                     +                    xi (m, pi, p̃−i )   (67)
                       ∂ pi                             ∂ pi                 ∂m
  Combining the information in equations 63, 64 and 67
18                                                MEASURING WELFARE CHANGE



                                   F IGURE 7. Approximating Compensating Variation
                            pi



                                             hiHj1,pi,p
                                                       L
                                                        -i


                      pi0



                             hiHj0,pi,p
                                       L
                                                                                xiHm,pi,p
                                                                                         L
                                        -i

                      pi1                                                                -i


                                                                                                          xi
                                      5         10         15        20         25        30         35



Z p0i                            Z p0i                                                                                              
              0                             0 0               ∂xi (m0 , p0i , p̃−i) ∂xi (m0 , p0i , p̃−i)      0 0                  0
         h̄i(ψ , pi, p̃−i) dpi =        xi(m , pi , p̃−i) +                        +                      xi (m , pi , p̃−i) (pi − pi ) dpi
     p1i                          p1i                               ∂ pi                  ∂m
                                                                                                                              (68)
       All the terms in equation 68 are obtainable from information on ordinary demand. Note that xi (m0 , p0i , p̃0−i),
∂xi (m0 ,p0i ,p̃0−i )     ∂xi (m0 ,p0i ,p̃0−i )
      ∂ pi            and       ∂m              are all evaluated at the initial prices and income and are more or less con-
stants when we perform the integration. For small changes in price this will be a better approximation than
consumer surplus, for larger changes, it is not clear which is better. But for larger changes we can always
compute a higher order Taylor series approximation that will be closer than consumer surplus. A similar
approach can be used to approximate equivalent variation.

  McKenzie and Pearce, [23] in particular, have advocated the use of Taylor series approximations. The
procedure is to estimate a system of demand equations that satisfy the standard integrability conditions
(Hurwicz and Uzawa, [20]) and then use the derivatives of these estimated functions as parameters in a
Taylor series approximation to equivalent variation or the money metric.

   Applied researchers continue to use consumer surplus in hope that errors caused by non-constancy
of the marginal utility of income are not large. Willig [36] formalized this approximation by developing
bounds on consumer surplus that relate it directly to compensating and equivalent variation based on price
and income elasticities. The bounds are obtained assuming that estimated ordinary demand functions are
generated by utility maximizing consumers and using the money metric indirect utility function, that is
c(ψ(m,p̄),p) to develop an approximate relationship between consumer surplus and CV and EV. McKenzie
and Pearce [23] have criticized the use such approximations and proposed direct calculation of the money
metric or approximation via a Taylor series. Because a Taylor series can be made arbitrarily accurate, he
argues that ”Willig type” approximations are not necessary.
                                          MEASURING WELFARE CHANGE                                           19


   Vartia [34] has proposed an alternative method for calculating willingness to pay measures. He develops
a way to computationally change prices while remaining on a given indifference surface. In effect he solves
the differential equation

                                                Xn
                                       d c(t)                      dpi (t)
                                              =     xi(c(t), p(t))
                                         dt     i=1
                                                                     dt                                    (69)
                                                               0
                                         t ∈ [0,1],   c(0) = c
   where xi is the ordinary demand curve, and the vector of prices p varies over some path from the initial
situation to a subsequent one. Specifically, p(t) is a differentiable curve in price space connecting p0 = p(0)
to p1 = p(1) and c(t) is any expenditure path starting c0 = c(0). Using parameters of estimated ordinary
demand functions Vartia’s algorithm calculates c(ψ(m,p̄),p) and h(ψ(m0,p̄),p) (the Hicksian demand curves)
by solving the differential equation using numerical methods. The cost function or the Hicksian demand
curves can be used to compute alternative welfare measures.

    The most straightforward approach for obtaining the these measures is to specify a functional form for
the direct utility function and solve it for the implied demand equations to use in estimation. Changes in
welfare can be evaluated using the implied indirect utility or expenditure function. Since the forms for
which utility maximization leads to a closed form demand system are limited and restrictive, an alternative
is to specify an indirect utility function and obtain demand equations using Roy’s identity. The resulting
system can be integrated to compute the appropriate welfare measures.

   Each of the measurement methods discussed assumes estimated ordinary demand equations consistent
with utility maximization by a consumer or profit maximization by a producer. The Willig approach is
justified in few cases because if an estimated integrable system exists, exact as opposed to approximate
methods are appropriate. If the system isn’t integrable then the Willig approximations don’t apply anyway.


   The methods proposed by McKenzie and Vartia also require a system of integrable demand equations.
The simplest way to obtain a system is to differentiate an indirect utility function, but this would lobby
for the direct calculation of welfare change. These methods may allow for more general specifications of
demand systems, where for example an indirect utility function may not have a closed form solution for
the associated expenditure function. While this generalization is appealing in theory, determining and im-
posing these conditions in econometric estimation is often far from trivial. Furthermore, global imposition
of these restrictions on arbitrary systems may add other undesired restrictions (Barnett [1]). While ability
to impose and test restrictions is improving (Diewert and Wales [8]), estimation of systems derived from
indirect utility functions seems the best current alternative.



                                              5. A GGREGATION
   The final issue is aggregation. Welfare measurement is of value to policymakers as it allows the aggre-
gation of individual welfare. Even ignoring the issue of welfare weights, serious problems occur. While
aggregation for producers under certainty is straightforward, the conditions for an aggregate demand sys-
tem depending on prices and aggregate income to be consistent with individual demand systems generated
by utility maximization are fairly restrictive (Gorman [10]). In particular, we know that for linear aggrega-
tion the indirect utility function for the ith consumer is given by
20                                         MEASURING WELFARE CHANGE



                                                         mi − fi (p)
                                         ψi (p, mi ) =
                                                            g(p)
                                                                                                      (70)
                                                         1        fi (p)
                                                     =       mi −
                                                        g(p)      g(p)
     The aggregate indirect utility function is given by
                                                             PI
                                                   m −        i=1 fi (p)
                                       ψ(p, m) =
                                                             g(p)
                                                                    PI                                (71)
                                                    1                    i=1 fi (p)
                                                 =      m −
                                                   g(p)                   g(p)
                PI
     The term    i=1 fi (p) just depends on prices and so could be written as θ(p) which would give

                                                1       θ(p)
                                   ψ(p, m) =        m −
                                               g(p)     g(p)
                                                                                                  (72)
                                               1                       θ(p)
                                           =       m − µ(p), µ(p) =
                                              g(p)                     g(p)
   If preferences are quasilinear, then g(p) ≡ 1 and we obtain ψ(p, m) = m − µ(p) where µ(p) = θ(p) so
that

                                                                   X
                                                                   I
                                           ψ(p, m) = m −                 fi (p)
                                                                   i=1                                (73)
                                                  = m − θ(p)
     Consider using Roy’s identity to obtain demand from this indirect utility function.

                                                          XI
                                           ∂ ψ (p, m)         ∂fi (p)
                                                  k
                                                      = −
                                              ∂p          i=1
                                                               ∂ pk

                                          ∂ ψ (p , m)
                                                      =1
                                              ∂m
                                                                                                      (74)
                                                             I
                                                             X ∂fi (p)
                                          ⇒ xk (m, p) =
                                                             i=1
                                                                    ∂ pk

                                                        ∂θ(p)
                                                         =
                                                         ∂ pk
  This implies that we can integrate ordinary demand functions to get back the aggregate indirect utility
function that represents the welfare of the aggregate of consumers.
                                                  MEASURING WELFARE CHANGE                                                         21


                                                          R EFERENCES
 [1] Barnett, W. A. ”Theoretical Foundations of the Rotterdam Model.” Review of Economic Studies 46 (1979): 109-130.
 [2] Berndt, E. R., M. N. Darrough, and W. E. Diewert. ”Flexible Functional Forms and Expenditure Distributions: An Application to
     Canadian Consumer Demand Data.” International Economic Review 18 (1977): 651-75.
 [3] Blackorby, C., D. Donaldson and D. Moloney. ”Consumer’s Surplus and Welfare Changes in a Simple Dynamic Model.” Review
     of Economic Studies 51 (January 1984): 171-76.
 [4] Boadway, R. W. ”The Welfare Foundations of Cost-Benefit Analysis.” Economic Journal 86 (December 1974): 926-39.
 [5] Burns, M. E. ”On the Uniqueness of Consumer’s Surplus and the Invariance of Economic Index Numbers.” Manchester School of
     Economic and Social Studies 45(1) (March 1977): 41-61.
 [6] Burns, M. E. ”A Note on the Concept and Measure of Consumer’s Surplus.” The American Economic Review 63 (June 1973): 335-44.
 [7] Chipman, J. S., and J. C. Moore. ”Compensating Variation, Consumer’s Surplus and Welfare.” The American Economic Review 70
     (1980): 933-49.
 [8] Diewert, W. E. and T. D. Wales. ”Flexible Functional Forms and Global Curvature Conditions.” Econometrica 55 (1987): 43-68.
 [9] Dupuit, J. ”On the Measurement of the Utility of Public Works,” (1844), translated and reprinted in K. J. Arrow and T. Scitovsky,
     eds., Readings in Welfare Economics. Vol. 12, Homewood 1969, 255-83.
[10] Gorman, W. M. ”Community Preference Fields.” Econometrica 21 (1953): 63-80.
[11] Gorman, W. M. ”On a Class of Preference Fields.” Metroeconomica 13 (August 1961): 53-56.
[12] Gorman, W. M. “Some Engel Curves” in The Theory and Measurement of Consumer Demand, ed. A. Deaton, Cambridge University
     Press, 1981.
[13] Harberger, A. C. ”Three Basic Postulates for Applied Welfare Economics: An Interpretive Essay.” Journal of Economic Literature 9
     (September 1971): 785- 97.
[14] Hause, J. C. ”The Theory of Welfare Cost Measurement.” Journal of Political Economy 83(6) (1975): 1145-82.
[15] Hausman, J. A. ”Exact Consumer’s Surplus and Deadweight Loss.” The American Economic Review 71 (1981): 662-76.
[16] Henderson, A. ”Consumer’s Surplus and the Compensating Variation.” The Review of Economic Studies 8(2) (February 1941): 117-
     21.
[17] Hicks. J. R. ”The Rehabilitation of Consumers’ Surplus.” Review of Economic Studies 8 (1941): 108-16.
[18] Hicks, J. R. ”The Four Consumers’ Surpluses.” Review of Economic Studies 11 (1943): 37-41.
[19] Hicks, J. R. A Revision of Demand Theory. London, 1956.
[20] Hurwicz, L., and H. Uzawa. ”On the Integrability of Demand Functions.” Preferences, Utility and Demand, ed. John S. Chipman et
     al., pp. 114-48. New York: Harcourt Brace Jovanovich, 1971.
[21] Lau, L. O. ”A Note on the Fundamental Theorem of Exact Aggregation.” Economic Letters 9 (1982): 119-26.
[22] Marshall, A. Principles of Economics. 9th Edition. New York: 1961.
[23] McKenzie, G. W., and I. F. Pearce. ”Welfare Measurement – A Synthesis.” The American Economic Review 72(4) (September 1982):
     669-82.
[24] McKenzie, G. Measuring Economic Welfare: New Methods. Cambridge: Cambridge University Press. 1983.
[25] McKenzie, L. W. ”Demand Theory without a Utility Index.” Review of Economic Studies 24 (June 1957): 185-89.
[26] Mishan, E. J. ”What is Producer’s Surplus?” American Economic Review 58 (1968): 1269-1282.
[27] Myrdal, G. ”Implicit Values in Economics.” The Philosophy of Economics: An Anthology, ed. D. Hausman. Cambridge, Cambridge
     University Press, 1984.
[28] Samuelson, P. ”Constancy of the Marginal Utility of Income,” in Studies in Mathematical Economics or Econometrics in Memory of
     Herz Schultz, ed. O. Lange et al., Chicago: University of Chicago Press, 1942.
[29] Samuelson, P. A. Foundations of Economic Analysis. Cambridge, MA: Harvard University Press, 1983.
[30] Sen, A. K. ”Collective Choice and Social Welfare.” San Francisco: Holden-Day, 1970.
[31] Silberberg, E. ”Duality and the Many Consumer’s Surpluses.” American Economic Review 62 (1972): 942-51.
[32] Slivinski, A. ”The Normative Characterization of Aggregate Consumers’ Surplus Measures.” International Economic Review 28
     (1987): 559-81.
[33] Varian, H. R. Microeconomic Analysis. 3rd Edition. New York: Norton, 1992.
[34] Vartia, Y. ”Efficient Methods of Measuring Welfare Change and Compensated Income in Terms of Ordinary Demand Functions.”
     Econometrica 51 (1983): 79-98.
[35] Vives, X. ”Small Income Effects: A Marshallian Theory of Consumer Surplus and Downward Sloping Demand.” Review of Eco-
     nomic Studies 54(1) (January 1987): 87-103.
[36] Willig, R. D. ”Consumer’s Surplus Without Apology” American Economic Review 66 (September 1976): 589-597.
