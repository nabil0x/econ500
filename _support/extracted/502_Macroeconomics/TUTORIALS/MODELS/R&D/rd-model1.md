<!-- Extracted from: 502_Macroeconomics/TUTORIALS/MODELS/R&D/R&D Model(1).pdf -->

R&D Model




Note: This content will help you once you have gone through the book. If you did not read this model
from the book before, you may face some trouble. In that case, check that particular topic from the book
or simply ask someone to explain the issue who have the habit of reading books. Also do not use any
unfair means in the exam using this content (or any content).
                                         R&D Model

3.1 Framework and Assumptions

Overview

   •   To model the accumulation of knowledge, we need to introduce a separate sector of the economy
       where new ideas are developed.
   •   Which is research and development (or R&D)

Two major simplifications:

   •   First, both the R&D and goods production functions are assumed to be generalized Cobb–
       Douglas functions;
           ➢ that is, they are power functions, but the sum of the exponents on the inputs is not
                necessarily restricted to 1.
   •   Second, R&D model takes the fraction of output saved and the fractions of the labor force and
       the capital stock used in the R&D sector as exogenous and constant.

Specifics

   •   The model, involves four variables:
           ➢ labor (L), capital (K), technology (A), and output (Y).
   •   The model is set in continuous time.
   •   There are two sectors,
           ➢ A goods-producing sector where output is produced and
           ➢ An R&D sector where additions to the stock of knowledge are made.
   •   Fraction 𝒂𝑳 of the labor force is used in the R&D sector
   •   fraction 1−𝒂𝑳 in the goods-producing sector.
   •   Similarly, fraction 𝒂𝑲 of the capital stock is used in R&D and
   •   the rest 1−𝒂𝑲 in goods production.
   •   Both 𝑎𝐿 and 𝑎𝐾 are exogenous and constant.
   •   Because the use of an idea or a piece of knowledge in one place does not prevent it from being
       used elsewhere, both sectors use the full stock of knowledge, A.

   •   The quantity of output produced at time t is thus

              Y(t) = [(1 − 𝒂𝑲 )K(t)]𝜶 [A(t)(1 − 𝒂𝑳 )L(t) ]𝟏 −𝜶         0< α < 1                    (3.1)


            ➢ Equation (3.1) implies constant returns to capital and labor.
    •    Given our assumption of generalized Cobb–Douglas production, we can write

             𝐴̇(𝑡)= B [𝑎𝐾 K (t ) ]𝛽 [𝑎𝐿 L(t)]𝛾 A(t )𝜃            B > 0, β ≥ 0, γ ≥ 0,               (3.2)

where B is a shift parameter.

            ➢ The production function for knowledge is not assumed to have constant returns to
              scale to capital and labor.


             (You can ignore this if you want)

             The standard argument that:
                • there must be at least constant returns is a replication one:
                        ➢ if the inputs double, the new inputs can do exactly what the old ones were
                             doing, thereby doubling the amount produced.
                • But in the case of knowledge production, exactly replicating what the existing inputs
                     were doing would cause the same set of discoveries to be made twice, thereby
                      leaving 𝐴̇ unchanged.
                  •   Thus it is possible that there are diminishing returns in R&D.


             At the same time,
                 • interactions among researchers, fixed setup costs, and so on may be important
                     enough in R&D that
                         ➢ Doubling capital and labor more than doubles output.

                  •   We therefore also allow for the possibility of increasing returns.




    •   The parameter θ reflects the effect of the existing stock of knowledge on the success of R&D.
            ➢ This effect can operate in either direction.
    •   On the one hand, past discoveries may provide ideas and tools that make future discoveries
        easier.
            ➢ In this case, θ is positive.
    •   On the other hand, the easiest discoveries may be made first.
            ➢ In this case, it is harder to make new discoveries when the stock of knowledge is
                greater, and
            ➢ so θ is negative.

Because of these conflicting effects, no restriction is placed on θ in (3.2).

    •   The saving rate is exogenous and constant. (Similar to Solow)
    •   In addition, depreciation is set to zero for simplicity. (Similar to RCK)
Thus,
𝑲̇(𝒕) = sY (t)                                                                                             (3.3)

    •   Likewise, we continue to treat population growth as exogenous and constant.
            ➢ For simplicity, we do not consider the possibility that it is negative.

This implies
               𝑳̇(𝒕)= nL(t)                                  n≥0                                           (3.4)

    •   Finally, as in our earlier models, the initial levels of A, K, and L are given and strictly positive.

    •   Because the model has two state variables whose behavior is endogenous, K and A, it is more
        complicated to analyze than the Solow model.

    •   We therefore begin by considering the model without capital; that is, we set α and β to zero


3.2 The Model without Capital

The Dynamics of Knowledge Accumulation

When there is no capital in the model, the production function for output (equation [3.1]) becomes

         Y(t) = A(t) (1 − 𝒂𝑳 )L(t)                                                                         (3.5)

Similarly, the production function for new knowledge (equation [3.2]) is now

         𝑨̇(𝒕)= B [𝒂𝑳 L(t)]𝜸 A(t )𝜽                                                                        (3.6)

Population growth continues to be described by equation (3.4).

    •   Equation (3.5) implies that output per worker is proportional to A.

            ➢ Thus the growth rate of output per worker equals the growth rate of A.
            ➢ We therefore focus on the dynamics of A, which are given by (3.6).
            ➢ This equation implies that the growth rate of A, denoted 𝒈𝑨 , is

                                    𝐴̇(𝑡)
                      𝑔𝐴 (𝑡) ≡ A(t)
                                  = B 𝑎𝐿 L(t )𝛾 A(t )𝜃−1                                                  (3.7)

    •   Taking logs of both sides of (3.7) and differentiating the two sides with respect to time gives us an
        expression for the growth rate of 𝒈𝑨 ,

                      𝑔 ̇𝐴 (𝑡)
                      𝑔𝐴 (𝑡)
                                 = γn + (θ − 1) 𝑔𝐴 (𝑡)                                                     (3.8)
        Multiplying both sides of this expression by 𝑔𝐴 (𝑡) yields

                      𝑔𝐴̇ (𝑡) = γn𝑔𝐴 (𝑡) + (θ−1)[𝑔𝐴 (𝑡)]𝟐                                           (3.9)

    • To describe further how the growth rate of A behaves (and thus to characterize
the behavior of output per worker), we must distinguish among the cases

            ➢ θ <1
            ➢ θ >1 and
            ➢ θ=1

Case 1: θ < 1
Figure 3.1 shows the phase diagram for 𝑔𝐴 when θ is less than 1.
That is, it plots 𝑔𝐴̇ as a function of A for this case.




    •   Equation (3.9) implies that
           ➢ 𝑔𝐴̇ is positive for small positive values of 𝑔𝐴
           ➢ Negative for large values.
    •   We will use 𝒈𝑨 ∗ to denote the unique positive value of 𝑔𝐴 that implies that 𝒈𝑨̇ is zero.
    •   From (3.9), 𝑔𝐴 ∗ is defined by γn+ (θ−1) 𝑔𝐴 ∗ = 0

Solving this for 𝑔𝐴 ∗ yields

                     𝛾
            𝑔𝐴∗ =       n                                                                             (3.10)
                    1−𝜃


    •   This analysis implies that regardless of the economy’s initial conditions,
𝒈𝑨 converges to 𝒈𝑨 ∗

    •   If the parameter values and the initial values of L and A imply 𝒈𝑨 (0) < 𝒈∗
             ➢ 𝒈𝑨̇ is positive
            ➢ that is, 𝒈𝑨 is rising
            ➢ It continues to rise until it reaches 𝒈𝑨 ∗
    •   Similarly, if 𝒈𝑨 (0) > 𝒈∗
           ➢ then 𝒈𝑨 falls until it reaches 𝒈𝑨 ∗
    •   Once 𝑔𝐴 reaches 𝑔𝐴 ∗
                           𝑌
            ➢ both A and grow steadily at rate 𝑔𝐴 ∗
                           𝐿
    •   Thus the economy is on a BGP.

This model is our first example of a model of endogenous growth.

   • The model implies that the long-run growth rate of output per worker,
   ∗
𝒈𝑨 is an increasing function of the rate of population growth, n.

    • Equation (3.10) also implies that the fraction of the labor force engaged
in R&D does not affect long-run growth.

To see why it does not:

    •   Suppose there is a permanent increase in 𝒂𝑳 starting from a situation
            ➢ where A is growing at rate 𝑔𝐴 ∗
    •   𝑎𝐿 does not enter expression (3.9) for 𝑔𝐴̇
    •   Thus the rise in 𝑎𝐿 does not affect the curve showing 𝒈𝑨̇ as a function of 𝑔𝐴 .
    •   But 𝑎𝐿 does enter expression (3.7) for 𝑔𝐴
    •   The increase in 𝑎𝐿 therefore
            ➢ causes an immediate increase in 𝑔𝐴
            ➢ but no change in 𝒈𝑨̇ as a function of 𝑔𝐴 .

This is shown by the dotted arrow in Figure 3.2.




    • As the phase diagram shows, the increase in the growth rate of knowledge
is not sustained.
    • When 𝑔𝐴 is above 𝑔𝐴 ∗
             ➢ 𝒈𝑨̇ is negative
            ➢ 𝒈𝑨 therefore returns gradually to 𝒈𝑨 ∗ and then remains there.
            ➢ This is shown by the solid arrows in the figure.

    •   Intuitively, the fact that θ is less than 1 means that
            ➢ The contribution of additional knowledge to the production of new knowledge is not
                 strong enough to be self-sustaining.

    •   This analysis implies that
            ➢ the increase in 𝒂𝑳 results in a rise in 𝒈𝑨 followed by a gradual return to its initial
                 level.
    •   That is, it has a level effect but not a growth effect on the path of A.

This information is summarized in Figure 3.3




Case 2: θ > 1

Equation (3.9): 𝒈𝑨̇ = γn 𝒈𝑨 + (θ−1) 𝒈𝟐𝑨
.
   • When θ exceeds 1, equation (3.9) implies that
            ➢ 𝒈𝑨̇ is positive for all possible values of 𝒈𝑨
            ➢ Further, it implies that 𝒈𝑨̇ is increasing in 𝒈𝑨
            ➢ The phase diagram is shown in Figure 3.4.
    •    As the phase diagram shows, the economy exhibits ever-increasing growth rather than
         convergence to a BGP.
    •    Thus once the accumulation of knowledge begins the economy embarks on a path of ever-
         increasing growth.

The impact of an increase in the fraction of the labor force engaged in R&D is now dramatic.

    •    From Equation (3.7) an increase in 𝒂𝑳
            ➢ causes an immediate increase in 𝒈𝑨 , as before.
            ➢ But 𝒈𝑨̇ is an increasing function of 𝒈𝑨
            ➢ thus 𝒈𝑨̇ rises as well.
    •    And the more rapidly 𝒈𝑨 rises, the more rapidly its growth rate rises.
    •    Thus the increase in 𝒂𝑳 causes the growth rate of A to exceed what it would have been otherwise
         by an ever-increasing amount.

Case 3: θ = 1

    •    When θ is exactly equal to 1
           ➢ existing knowledge is just productive enough in generating new knowledge
           ➢ that the production of new knowledge is proportional to the stock.

In this case, expressions (3.7) and (3.9) for 𝒈𝑨 and 𝒈𝑨̇ simplify to
                    𝛾
        𝑔𝐴 (𝑡)= B 𝑎𝐿 L(t )𝛾                                                                       (3.11)
        𝑔𝐴̇ (𝑡)= γn𝑔𝐴 (𝑡)                                                                         (3.12)

    •    If population growth is positive
             ➢ 𝑔𝐴 is growing over time
             ➢ in this case the dynamics of the model are similar to those when θ >1.

    •    If population growth is zero
             ➢ 𝒈𝑨 is constant regardless of the initial situation.
             ➢ Thus there is no adjustment toward a BGP:
             ➢ No matter where it begins, the economy immediately exhibits steady growth.
             ➢ As equations (3.5) and (3.11) show, the growth rates of knowledge, output, and output per
                                          𝜸
               worker are all equal to B 𝒂𝑳 𝑳𝜸 in this case.
             ➢ Thus changes in 𝒂𝑳 affect the long-run growth rate of the economy.



How the saving rate affects long-run growth

    •   Since the output good in this economy has no use other than in consumption
            ➢ it is natural to think of it as being entirely consumed.
    •   Thus 1 − 𝒂𝑳 is the fraction of society’s resources devoted to producing goods for current
        consumption,
    •   and 𝒂𝑳 is the fraction devoted to producing a good (namely, knowledge) that is useful for
        producing output in the future.
    •   Thus one can think of 𝒂𝑳 as a measure of the saving rate in this economy.

❖ With this interpretation, the case of θ =1 and n = 0 provides a simple example of a model where the
  saving rate affects long-run growth.
❖ Models of this form are known as linear growth models
❖ They are also known as Y = AK models

The Importance of Returns to Scale to Produced Factors

         •    The reason that the three cases have such different implications is that
              ➢ whether θ is less than, greater than, or equal to 1
                determines whether there are decreasing, increasing, or constant returns to scale to
                produced factors of production.
         •    The growth of labor is exogenous, and we have eliminated capital from the model
              ➢ thus knowledge is the only produced factor.
         •    There are constant returns to knowledge in goods production.
         •    Thus whether there are on the whole increasing, decreasing, or constant returns to
              knowledge in this economy
              ➢ is determined by the returns to scale to knowledge in knowledge production
              ➢ that is, by θ.


The Importance of Population Growth

When θ < 1

         •    The model has the surprising implication that
              ➢ Positive population growth is necessary for long-run growth in income per person
              ➢ the economy’s long-run growth rate is increasing in population growth.

The other cases have similar implications.
When θ = 1 and n = 0
       • long-run growth is an increasing function of the level of population.

When θ > 1 (or θ = 1 and n > 0)
       • one can show that an increase in population growth causes
            ➢ income per person to be higher than it otherwise would have been by an ever-
                increasing amount.



 To understand these results,
         • Consider equation (3.7) for knowledge accumulation: 𝑔𝐴 (𝑡) = B 𝑎𝐿 L(t )𝛾 A(t
            )𝜃−1
         • Built into this expression is the completely natural idea that
            ➢ when there are more people to make discoveries, more discoveries are made.
         • And when more discoveries are made
            ➢ the stock of knowledge grows faster, and
            ➢ so (all else equal) output per person grows faster.


A natural interpretation of the model is that
        • A represents knowledge that can be used anywhere in the world.
        • With this interpretation,
            ➢ the model does not imply that countries with larger populations, or countries with
                greater population growth, enjoy greater income growth
            ➢ it only implies that higher worldwide population growth raises worldwide income
                growth.
            ➢ Because higher population growth is beneficial to the growth of worldwide knowledge.


3.3 The General Case
We now want to reintroduce capital into the model

The Dynamics of Knowledge and Capital

         •   When the model includes capital, there are two endogenous state variables, A and K.
         •   We focus on the dynamics of the growth rates of A and K.
         •   Substituting the production function, (3.1), into the expression for capital accumulation,
             (3.3), yields
               𝐾̇ (𝑡) = 𝑠(1 − 𝑎𝑘 )𝛼 (1 − 𝑎𝐿 )1−𝛼 𝐾(𝑡 )𝛼 𝐴(𝑡 )1−𝛼 𝐿(𝑡 )1−𝛼                             (3.13)

Dividing both sides by 𝐾(𝑡 ) and defining 𝑐𝐾 = 𝑠(1 − 𝑎𝑘 )𝛼 (1 − 𝑎𝐿 )1−𝛼 gives us

                                             𝐾̇(𝑡)
                                    𝑔𝐾 (𝑡) ≡ 𝐾(𝑡)
                                                     𝐴(𝑡)𝐿(𝑡)
                                           = 𝑐𝐾 [ K(t) ]1−𝛼                                          (3.14)
Taking logs of both sides and differentiating with respect to time yields

                    𝒈𝑲
                     ̇ (𝒕)
                    𝒈𝑲 (𝒕)
                             =(𝟏 − 𝜶)[ 𝒈𝑨 (𝒕)+n−𝒈𝑲 (𝒕)]                                             (3.15)


         •    From (3.13), 𝑔𝐾 is always positive.
              ➢ Thus 𝒈𝑲 is rising if 𝒈𝑨 + n −𝒈𝑲 is positive,
              ➢ falling if this expression is negative, and
              ➢ constant if it is zero.

This information is summarized in Figure 3.5. In (𝑔𝐴 , 𝑔𝐾 ) space,




         •    The locus of points where 𝑔𝐾 is constant has an intercept of n and a slope of 1.
                                                                  [Because 𝒈𝑲 = n +1. 𝒈𝑨 ]
         •    Above the locus, 𝒈𝑲 is falling
         •    below the locus, it is rising

Similarly, dividing both sides of equation (3.2), 𝐴̇= B (𝑎𝐾 K )𝛽 (𝑎𝐿 L)𝛾 𝐴𝜃 by A yields an expression for
the growth rate of A:

          𝑔𝐴 (𝑡)= 𝑐𝐴 K(t )𝛽 L(t )𝛾 A(t )𝜃−1                                                          (3.16)

                                𝛽 𝛾
         where 𝑐𝐴 ≡ B 𝑎𝐾 𝑎𝐿
Taking logs and differentiating with respect to time gives

         𝒈𝑨̇ (𝒕)
                   = 𝜷𝒈𝑲 (𝒕) + γn +(θ−1)𝒈𝑨 (𝒕)                                                       (3.17)
         𝒈𝑨 (𝒕)


         •    Thus 𝒈𝑨 is rising if 𝜷𝒈𝑲 + γn +(θ−1)𝒈𝑨 is positive,
         •    falling if it is negative
         •    constant if it is zero
This is shown in Figure 3.6.




                                                                         𝜸𝒏                𝟏−𝜽
         •   The set of points where 𝒈𝑨 is constant has an intercept of − 𝜷 and a slope of 𝜷
                                                                       [See explanation]
         •   Above this locus, 𝒈𝑨 is rising
         •   Below the locus, it is falling


                        Explanation:

                        When 𝑔𝐴 is constant:
                        𝛽𝑔𝐾 + γn +(θ−1)𝑔𝐴 = 0
                        𝛽 𝑔𝐾 = − γn + (1− θ)𝑔𝐴
                               − 𝛾𝑛 + (1− 𝜃)𝑔𝐴
                        𝑔𝐾 =     𝛽
                              𝜸𝒏  𝟏−𝜽
                        𝑔𝐾 =− 𝜷 + 𝜷 𝑔𝐴

                                                 𝜸𝒏
                        Thus, the intercept is − 𝜷
                                      𝟏−𝜽
                        The slope is 𝜷



❖ The production function for output (equation [3.1]) exhibits constant returns to scale in the two
  produced factors of production, capital and knowledge.
      • Thus whether there are on net increasing, decreasing, or constant returns to scale to the
          produced factors depends on
          ➢ their returns to scale in the production function for knowledge, equation (3.2).
          ➢ As that equation shows, the degree of returns to scale to K and A in knowledge
              production is β + θ
        •   Thus the key determinant of the economy’s behavior is how β + θ compares with 1
        •   We will limit our attention to the cases of
             i)       β + θ <1 and of
             ii)      β + θ =1 with n = 0

The remaining cases (β + θ >1 and β + θ =1 with n > 0) have implications similar to those of θ >1 in
the simple model.
                                                                                                   Explanation:
Case 1: β +θ < 1

                              1−𝜃                                                                    β+θ<1
        •   If β + θ < 1, then 𝛽    > 1.
                                                                                                     β<1–θ
        •   Thus the locus of points where 𝒈𝑨̇ = 0 is steeper than the locus where 𝒈𝑲
                                                                                    ̇ =0             1–θ>β
                                                                                                     𝟏−𝜽
                                                                                                           >1
                                                                                                      𝜷




        •   Figure 3.7 shows that regardless of where 𝒈𝑨 and 𝒈𝑲 begin,
            ➢ they converge to Point E in the diagram.
            ➢ Both 𝒈𝑨̇ and 𝒈𝑲  ̇ are zero at this point.
        •   Thus the values of 𝒈𝑨 and 𝒈𝑲 at Point E, which we denote 𝑔𝐴 ∗ and 𝑔𝐾 ∗ must satisfy

              𝑔𝐴∗ + 𝑛 − 𝑔𝐾∗ =0                                                                    (3.18)
and
              β𝑔𝐾∗ +γn+(θ−1) 𝑔𝐴∗ = 0                                                              (3.19)
Rewriting (3.18) as 𝑔𝐾∗ = 𝑔𝐴∗ + 𝑛 and substituting into (3.19) yields

              β𝑔𝐴∗ +(β+γ)n+(θ−1) 𝑔𝐴∗ = 0                                                           (3.20)
or
                       𝛽+𝛾
             𝑔𝐴∗ =           n                                                                     (3.21)
                     1−(𝜃+𝛽)


                                 Explanation:
                                 β(𝑔𝐴∗ + 𝑛 )+γn+(θ−1) 𝑔𝐴∗ = 0
                                 β𝑔𝐴∗ +𝛽𝑛 +γn+(θ−1) 𝑔𝐴∗ = 0
                                 β𝑔𝐴∗ +(β+γ)n+(θ−1) 𝑔𝐴∗ = 0
                                 β𝑔𝐴∗ +(θ−1) 𝑔𝐴∗ = −(β+γ)n
                                 𝑔𝐴∗ [ β+(θ−1)] = −(β+γ)n
                                          (𝛽+𝛾) 𝑛
                                 𝑔𝐴∗ = − [𝛽+(𝜃−1)]
                                           (𝛽+𝛾) 𝑛
                                 𝑔𝐴∗ = − −(−𝛽−𝜃+1)
                                        𝜷+𝜸
                                 𝒈∗𝑨 = 𝟏−(𝜽+𝜷) n



         •    From above, 𝑔𝐾∗ is simply 𝑔𝐴∗ + 𝑛
         •    Equation (3.1) then implies that
                                                                                    ∗
              ➢ when A and K are growing at these rates, output is growing at rate 𝒈𝑲
              ➢ Output per worker is therefore growing at rate 𝒈∗𝑨

         •    This case is similar to the case
              ➢ when θ is less than 1 in the version of the model without capital.

Here, as in that case,
          • the long-run growth rate of the economy is endogenous, and
          • again long-run growth is an increasing function of population growth
              ➢ and is zero if population growth is zero
          • The fractions of the labor force and the capital stock engaged in R&D,
              ➢ 𝒂𝑳 and 𝒂𝑲 , do not affect long-run growth;
              ➢ nor does the saving rate, s.
          • The reason that these parameters do not affect long-run growth is essentially the same as the
              reason that 𝑎𝐿 does not affect long-run growth in the simple version of the model.


     ❖ Models like this one and like the model without capital in the case of θ <1 are often referred to
       as semi-endogenous growth models.

              ➢ On the one hand, long-run growth arises endogenously in the model.
            ➢ On the other, it depends only on population growth and parameters of the
                 knowledge production function,
            ➢ and is unaffected by any other parameters of the model.
         • Thus, as the name implies, growth seems only somewhat endogenous.
Case 2: β +θ = 1 and n = 0

        •   We have seen that the locus of points where 𝒈𝑲
                                                         ̇ = 0 is given by 𝒈𝑲 = 𝒈𝑨 + 𝒏
                                                                           𝜸𝒏       𝟏−𝜽
        •   and that the locus of points where 𝒈𝑨̇ = 0 is given by 𝒈𝑲 =− 𝜷 + 𝜷 𝒈𝑨
        •   When β +θ = 1 and n=0, both expressions simplify to 𝒈𝑲 = 𝒈𝑨



                   Explanation:

                   When β +θ = 1 and n=0

                           If, β +θ = 1
                               β=1–θ
                               1−𝜃
                                𝛽
                                   =1 ………………………..(i)

                             •    the locus of 𝒈𝑲
                                                ̇ =0
                                 𝑔𝐾 = 𝑔𝐴 + 𝑛 can be written as:
                                 𝒈𝑲 = 𝒈𝑨        (since, n=0 )

                             •    the locus of 𝒈𝑨̇ = 0
                                      𝛾𝑛   1−𝜃
                              𝑔𝐾 =− 𝛽 + 𝛽 𝑔𝐴 can be written as:
                                     1−𝜃
                                 𝑔𝐾 = 𝛽 𝑔𝐴         (since, n=0 )
                                 𝒈𝑲 = 𝒈𝑨           [substituting the value from (i)]



        •   That is, in this case the two loci lie directly on top of each other:
            ➢ both are given by the 45-degree line.
            ➢ Figure 3.8 shows the dynamics of the economy in this case.
•   As the figure shows, regardless of where the economy begins,
    ➢ the dynamics of 𝒈𝑨 and 𝒈𝑲 carry them to the 45-degree line.
    ➢ Once that happens, 𝒈𝑨 and 𝒈𝑲 are constant
    ➢ and the economy is on a BGP.




•   As in the case of θ =1 and n = 0 in the model without capital
    ➢ the phase diagram does not tell us what BGP the economy converges to

•   However one can show that
    ➢ the economy has a unique BGP for a given set of parameter values
    ➢ Increases in the saving rate and in the size of the population increase this long-run
       growth rate
    ➢ And because changes in 𝒂𝑳 and 𝒂𝑲 involve shifts of resources between goods
       production and R&D, they have ambiguous effects on long-run growth
Because long-run growth depends on a wide range of parameters, models like this one, as well as the
model of the previous section when θ ≥1 and the model of this section when β + θ >1 or β + θ =1 and
n > 0, are known as fully endogenous growth models.

3.4 The Nature of Knowledge and the Determinants of the Allocation of Resources to R&D

This part does not look much important for the exam. But you should give it a read. Life is
unpredictable.

Overview

        •   This section is devoted to the discussion of what determines 𝒂𝑳 and 𝒂𝑲
        •   So far we have simply described
            ➢ the “A” variable produced by R&D as knowledge.
        •   But knowledge comes in many forms
        •   Many of these different types of knowledge
            ➢ play important roles in economic growth.
        •   There is no reason to expect
            ➢ the determinants of the accumulation of these different types of knowledge to be the
                same
        •   we should expect to find various factors underlying the accumulation of knowledge.
        •   At the same time, all types of knowledge share one essential feature:
            ➢ they are nonrival
            ➢ That is, the use of an item of knowledge, in one application makes its use by someone
                else no more difficult

        •   An immediate implication of this fundamental property of knowledge is that
            ➢ the production and allocation of knowledge cannot be completely governed by
                competitive market forces.




        •   Although all knowledge is nonrival
            ➢ it is heterogeneous along a second dimension: excludability.
            ➢ A good is excludable if it is possible to prevent others from using it.

        •   In the case of knowledge, excludability depends both on the
            ➢ nature of the knowledge itself
            ➢ and on economic institutions governing property rights.
            ➢ Patent laws, for example, give inventors rights over the use of their designs and
                 discoveries.

        •   In some cases, excludability is
            ➢ more dependent on the nature of the knowledge
            ➢ and less dependent on the legal system.
            ➢ The recipe for Coca-Cola is sufficiently complex that it can be kept secret without
              copyright or patent protection.

        •   The degree of excludability is likely to have a strong influence on
            ➢ how the development and allocation of knowledge depart from perfect competition.
        •   If a type of knowledge is entirely nonexcludable,
            ➢ there can be no private gain in its development;
            ➢ thus R&D in these areas must come from elsewhere.
        •   But when knowledge is excludable
            ➢ the producers of new knowledge can license the right to use the knowledge at positive
                 prices,
            ➢ and hence hope to earn positive returns on their R&D efforts.

    ❖ With these broad remarks, we can now turn to a discussion of some of the major forces
      governing the allocation of resources to the development of knowledge

    ❖ Four forces have received the most attention:

            ▪   Support for basic scientific research
            ▪   Private incentives for R&D and innovation,
            ▪   Alternative opportunities for talented individuals, and
            ▪   Learning-by-doing.


Support for Basic Scientific Research

        •   Basic scientific knowledge has traditionally been made available relatively freely
        •   This research is not motivated by the desire to earn private returns in the market.
        •   Instead it is supported by governments, charities, and wealthy individuals
        •   Since it is useful in production and is given away at zero cost
            ➢ it has a positive externality


Private Incentives for R&D and Innovation

        •   Many innovations are motivated almost entirely by the desire for private gain
        •   For R&D to result from economic incentives,
            ➢ the knowledge that is created must be at least somewhat excludable.
            ➢ Thus the developer of a new idea has some degree of market power

        •   Since economies like these are not perfectly competitive, their equilibria are not in general
            optimal.
        •   In particular, the decentralized equilibria may have inefficient divisions of resources
            between R&D and conventional goods production.
        •   There are in fact three distinct externalities from R&D:
            ➢ the consumer-surplus effect
            ➢ the business-stealing effect, and
            ➢ the R&D effect

        •   The consumer-surplus effect is that the individuals or firms licensing ideas from
            innovators obtain some surplus, since innovators cannot engage in perfect price
            discrimination. Thus this is a positive externality from R&D.
        •   The business-stealing effect is that the introduction of a superior technology typically
            makes existing technologies less attractive, and therefore harms the owners of those
            technologies. This externality is negative.
        •   Finally, the R&D effect is that innovators are generally assumed not to control the use of
            their knowledge in the production of additional knowledge. Thus the development of new
            knowledge has a positive externality on others engaged in R&D.

   ▪   The net effect of these three externalities is ambiguous.
           ➢ It is possible to construct examples where the business-stealing externality outweighs
                both the consumer-surplus and R&D externalities.
           ➢ In this case the incentives to capture the profits being earned by other innovators cause
                too many resources to be devoted to R&D.
        • However, it is generally believed, that
           ➢ the normal situation is for the overall externality from R&D to be positive.

   •   There can be additional externalities as well.
           ➢ For example, if innovators have only incomplete control over the use of their ideas in
               goods production there is an additional reason that the private return to R&D is below
               the social return.
           ➢ On the other hand, the fact that the first individual to create an invention is awarded
               exclusive rights to the invention can create excessive incentives for some kinds of R&D;


Alternative Opportunities for Talented Individuals

        •   Baumol (1990) and Murphy, Shleifer, and Vishny (1991) observe that
            ➢ major innovations and advances in knowledge are often the result of the work of
               extremely talented individuals
              Ignore this list

              Baumol argues that, in various places and times
                           ➢ military conquest
                           ➢ political and religious leadership
                           ➢ tax collection
                           ➢ criminal activity
                           ➢ philosophical contemplation
                           ➢ financial dealings and
                           ➢ manipulation of the legal system
              have been attractive to the most talented members of society.



         •   Baumol argues that activities of the most talented members of society
             ➢ often have negligible (or even negative) social returns
             ➢ these activities are often forms of rent-seeking—attempts to capture existing wealth
                rather than to create new wealth.
             ➢ there has been a strong link between how societies direct the energies of their most able
                members and whether the societies flourish over the long term.

Murphy, Shleifer, and Vishny provide a general discussion of the
        • forces that influence talented individuals’ decisions
            ➢ whether to pursue activities that are socially productive



They emphasize three factors in particular.

         •   The first is the size of the relevant market
             ➢ the larger is the market from which a talented individual can reap returns
             ➢ the greater are the incentives to enter a given activity

         •   The second factor is the degree of diminishing returns
             ➢ Activities whose scale is limited by the entrepreneur’s time
             ➢ do not offer the same potential returns
             ➢ as activities whose returns are limited only by the scale of the market

         •   The final factor is the ability to keep the returns from one’s activities.
             ➢ Thus, clear property rights tend to encourage entrepreneurship
.
Learning-by-Doing

According to Arrow (1962)
        • the accumulation of knowledge occurs in part not as a result of deliberate efforts
            ➢ but as a side effect of conventional economic activity.
        • This type of knowledge accumulation is known as learning-by-doing
When learning-by-doing is the source of technological progress
        • the rate of knowledge accumulation
            ➢ depends on how much new knowledge is generated by conventional economic
               activity.

Analyzing learning-by-doing therefore requires some changes to our model.
        • All inputs are now engaged in goods production
        • thus the production function becomes

           Y(t) = 𝐾(𝑡)𝛼 [A(t )𝐿(𝑡)]1−𝛼                                                          (3.22)

With this formulation
         • the increase in knowledge is a function of the increase in capital
         • the stock of knowledge is a function of the stock of capital
         • Thus there is only one state variable
         • Making our usual choice of a power function, we have

             A(t) = 𝐾(𝑡)𝛼 ,   B >0,      φ>0.                                                   (3.23)

To analyze the economy, we begin by substituting (3.23) into (2.22)
This yields
            Y(t) = 𝐾(𝑡)𝛼 𝐵1−𝛼 𝐾(𝑡)𝜑(1−𝛼) 𝐿(𝑡)1−𝛼                                                    (3.24)

Since 𝐾̇(𝑡) = 𝑠 𝑌 (𝑡), the dynamics of K are given by
             𝐾̇ (𝑡) = 𝑠𝐵1−𝛼 𝐾(𝑡)𝛼 𝐾(𝑡)𝜑(1−𝛼) 𝐿(𝑡)1−𝛼                                            (3.25)



In our model of knowledge accumulation without capital in Section 3.2,
        • the dynamics of A are given 𝑨̇(𝒕)= B [𝒂𝑳 L(t)]𝜸 A(t )𝜽 (equation [3.6])

Comparing equation (3.25) of the learning-by-doing model with this equation shows that
           ➢ the structures of the two models are similar.
           ➢ the dynamics of the two models are essentially the same.

Thus we can use the results of our analysis of the earlier model to analyze this one.
        • In the model of knowledge accumulation without capital
            ➢ the key determinant of the economy’s dynamics is how θ compares with 1.
        • Here, by analogy, it is how 𝜶 + 𝝋(𝟏 − 𝜶) compares with 1
            ➢ which is equivalent to how φ compares with 1

    ▪   If 𝝋 < 1, the long-run growth rate of the economy is a function of the rate of population
        growth, n.
    ▪   If 𝝋 > 1, there is explosive growth
    ▪   if 𝝋 = 1, there is explosive growth if n > 0 and steady growth if n = 0
         •   Once again, a case that has received particular attention is 𝝋 = 1 and n = 0
         •   In this case, the production function (equation [3.24]) becomes

                Y(t) = bK(t),      b≡ 𝐵1−𝛼 𝐿1−𝛼                                                    (3.26)

Capital accumulation is therefore given by

                 𝐾̇ (𝑡) = sbK(t)                                                                   (3.27)

The dynamics of this economy are straightforward
        • Equation (3.27) immediately implies that K grows steadily at rate sb
        • And since output is proportional to K, it also grows at this rate.

    ❖ Thus we have another example of a model in which long-run growth is endogenous and
      depends on the saving rate

         •   In this model, the saving rate affects long-run growth
             ➢ because the contribution of capital is larger than its conventional contribution

    ▪   increased capital raises output not only through its direct role in production
            ➢ but also by indirectly contributing to the development of new ideas
            ➢ and thereby making all other capital more productive

Because the production function in these models is often written using the symbol “A” rather than the “b”
used in (3.26), these models are often referred to as “Y = AK” models.
