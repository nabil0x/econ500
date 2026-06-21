<!-- Extracted from: 502_Macroeconomics/TUTORIALS/MODELS/New Keynesian DSGE/Leibniz_integral_rule.pdf -->

Leibniz integral rule
In calculus, the Leibniz integral rule for differentiation under the integral sign, named after Gottfried Wilhelm Leibniz, states that
for an integral of the form




where                            and the integrands are functions dependent on      the derivative of this integral is expressible as




where the partial derivative      indicates that inside the integral, only the variation of          with     is considered in taking the
derivative.[1]

In the special case where the functions      and       are constants             and           with values that do not depend on        this
simplifies to:




If           is constant and           , which is another common situation (for example, in the proof of Cauchy's repeated integration
formula), the Leibniz integral rule becomes:




This important result may, under certain conditions, be used to interchange the integral and partial differential operators, and is
particularly useful in the differentiation of integral transforms. An example of such is the moment generating function in probability
theory, a variation of the Laplace transform, which can be differentiated to generate the moments of a random variable. Whether
Leibniz's integral rule applies is essentially a question about the interchange of limits.



General form: differentiation under the integral sign

        Theorem — Let           be a function such that both      and its partial derivative          are continuous in and
          in some region of the -plane, including                                      Also suppose that the functions
        and     are both continuous and both have continuous derivatives for                 Then, for




The right hand side may also be written using Lagrange's notation as:


Stronger versions of the theorem only require that the partial derivative exist almost everywhere, and not that it be continuous.[2] This
formula is the general form of the Leibniz integral rule and can be derived using the fundamental theorem of calculus. The (first)
fundamental theorem of calculus is just the particular case of the above formula where                      is constant,              and
               does not depend on
If both upper and lower limits are taken as constants, then the formula takes the shape of an operator equation:


where      is the partial derivative with respect to and  is the integral operator with respect to over a fixed interval. That is, it is
related to the symmetry of second derivatives, but involving integrals as well as derivatives. This case is also known as the Leibniz
integral rule.

The following three basic theorems on the interchange of limits are essentially equivalent:

    the interchange of a derivative and an integral (differentiation under the integral sign; i.e., Leibniz integral rule);
    the change of order of partial derivatives;
    the change of order of integration (integration under the integral sign; i.e., Fubini's theorem).


Three-dimensional, time-dependent case
A Leibniz integral rule for a two dimensional surface moving in three dimensional space
is[3][4]




                                                                                                Figure 1: A vector field F(r, t) defined
                                                                                                throughout space, and a surface Σ
                                                                                                bounded by curve ∂Σ moving with
                                                                                                velocity v over which the field is
                                                                                                integrated.




where:

    F(r, t) is a vector field at the spatial position r at time t,
    Σ is a surface bounded by the closed curve ∂Σ,
    dA is a vector element of the surface Σ,
    ds is a vector element of the curve ∂Σ,
    v is the velocity of movement of the region Σ,
    ∇⋅ is the vector divergence,
    × is the vector cross product,
    The double integrals are surface integrals over the surface Σ, and the line integral is over the bounding curve ∂Σ.


Higher dimensions
The Leibniz integral rule can be extended to multidimensional integrals. In two and three dimensions, this rule is better known from
the field of fluid dynamics as the Reynolds transport theorem:




where           is a scalar function, D(t) and ∂D(t) denote a time-varying connected region of R3 and its boundary, respectively,
is the Eulerian velocity of the boundary (see Lagrangian and Eulerian coordinates) and dΣ = n dS is the unit normal component of
the surface element.

The general statement of the Leibniz integral rule requires concepts from differential geometry, specifically differential forms,
exterior derivatives, wedge products and interior products. With those tools, the Leibniz integral rule in n dimensions is[4]
where Ω(t) is a time-varying domain of integration, ω is a p-form,               is the vector field of the velocity,    denotes the interior
product with , dxω is the exterior derivative of ω with respect to the space variables only and      is the time derivative of ω.

The above formula can be deduced directly from the fact that the Lie derivative interacts nicely with integration of differential forms




for the spacetime manifold                 , where the spacetime exterior derivative of      is                         and the surface

has spacetime velocity field                . Since    has only spatial components, the Lie derivative can be simplified using Cartan's
magic formula, to



which, after integrating over       and using generalized Stokes' theorem on the second term, reduces to the three desired terms.



Measure theory statement
Let    be an open subset of     , and   be a measure space. Suppose                     satisfies the following conditions:[5][6][2]

 1.         is a Lebesgue-integrable function of for each                .
 2. For almost all       , the partial derivative   exists for all           .
 3. There is an integrable function             such that                          for all         and almost every             .
Then, for all       ,




The proof relies on the dominated convergence theorem and the mean value theorem (details below).



Proofs

Proof of basic form
We first prove the case of constant limits of integration a and b.

We use Fubini's theorem to change the order of integration. For every x and h, such that h > 0 and both x and x +h are within
[x0,x1], we have:




Note that the integrals at hand are well defined since          is continuous at the closed rectangle                 and thus also
uniformly continuous there; thus its integrals by either dt or dx are continuous in the other variable and also integrable by it
(essentially this is because for uniformly continuous functions, one may pass the limit through the integration sign, as elaborated
below).

Therefore:




Where we have defined:




(we may replace x0 here by any other point between x0 and x)
F is differentiable with derivative                , so we can take the limit where h approaches zero. For the left hand side this limit
is:




For the right hand side, we get:




And we thus prove the desired result:




Another proof using the bounded convergence theorem
If the integrals at hand are Lebesgue integrals, we may use the bounded convergence theorem (valid for these integrals, but not for
Riemann integrals) in order to show that the limit can be passed through the integral sign.

Note that this proof is weaker in the sense that it only shows that fx(x,t) is Lebesgue integrable, but not that it is Riemann integrable.
In the former (stronger) proof, if f(x,t) is Riemann integrable, then so is fx(x,t) (and thus is obviously also Lebesgue integrable).

Let


                                                                                                                                        (1)


By the definition of the derivative,


                                                                                                                                        (2)

Substitute equation (1) into equation (2). The difference of two integrals equals the integral of the difference, and 1/h is a constant, so




We now show that the limit can be passed through the integral sign.

We claim that the passage of the limit under the integral sign is valid by the bounded convergence theorem (a corollary of the
dominated convergence theorem). For each δ > 0, consider the difference quotient




For t fixed, the mean value theorem implies there exists z in the interval [x, x + δ] such that


Continuity of fx(x, t) and compactness of the domain together imply that fx(x, t) is bounded. The above application of the mean value
theorem therefore gives a uniform (independent of ) bound on             . The difference quotients converge pointwise to the partial
derivative fx by the assumption that the partial derivative exists.

The above argument shows that for every sequence {δn} → 0, the sequence                      is uniformly bounded and converges
pointwise to fx. The bounded convergence theorem states that if a sequence of functions on a set of finite measure is uniformly
bounded and converges pointwise, then passage of the limit under the integral is valid. In particular, the limit and integral may be
exchanged for every sequence {δn} → 0. Therefore, the limit as δ → 0 may be passed through the integral sign.
If    instead    we   only   know     that there is an integrable function                    such that                             ,   then
                                    and the dominated convergence theorem allows us to move the limit inside of the integral.


Variable limits form
For a continuous real valued function g of one real variable, and real valued differentiable functions      and    of one real variable,




This follows from the chain rule and the First Fundamental Theorem of Calculus. Define




and




(The lower limit just has to be some number in the domain of )

Then,           can be written as a composition:                                      . The Chain Rule then implies that



By the First Fundamental Theorem of Calculus,                     . Therefore, substituting this result above, we get the desired equation:



Note: This form can be particularly useful if the expression to be differentiated is of the form:




Because        does not depend on the limits of integration, it may be moved out from under the integral sign, and the above form may
be used with the Product rule, i.e.,




General form with variable limits
Set




where a and b are functions of α that exhibit increments Δa and Δb, respectively, when α is increased by Δα. Then,




A form of the mean value theorem,                                  , where a < ξ < b, may be applied to the first and last integrals of the
formula for Δφ above, resulting in
Divide by Δα and let Δα → 0. Notice ξ1 → a and ξ2 → b. We may pass the limit through the integral sign:




again by the bounded convergence theorem. This yields the general form of the Leibniz integral rule,




Alternative proof of the general form with variable limits, using the chain rule
The general form of Leibniz's Integral Rule with variable limits can be derived as a consequence of the basic form of Leibniz's
Integral Rule, the multivariable chain rule, and the first fundamental theorem of calculus. Suppose is defined in a rectangle in the
      plane, for                and                . Also, assume    and the partial derivative       are both continuous functions on this
rectangle. Suppose         are differentiable real valued functions defined on                    , with values in           (i.e. for every
                                    ). Now, set




and




Then, by properties of definite Integrals, we can write




Since the functions         are all differentiable (see the remark at the end of the proof), by the multivariable chain rule, it follows
that is differentiable, and its derivative is given by the formula:




Now, note that for every               , and for every               , we have that                               , because when taking the
partial derivative with respect to    of   , we are keeping     fixed in the expression                  ; thus the basic form of Leibniz's
Integral Rule with constant limits of integration applies. Next, by the first fundamental theorem of calculus, we have that
                   ; because when taking the partial derivative with respect to    of , the first variable   is fixed, so the
fundamental theorem can indeed be applied.

Substituting these results into the equation for         above gives:




as desired.

There is a technical point in the proof above which is worth noting: applying the Chain Rule to     requires that    already be
differentiable. This is where we use our assumptions about . As mentioned above, the partial derivatives of    are given by the
formulas                                and                         . Since    is continuous, its integral is also a continuous function,[7]
and since is also continuous, these two results show that both the partial derivatives of         are continuous. Since continuity of partial
derivatives implies differentiability of the function,[8] is indeed differentiable.


Three-dimensional, time-dependent form
At time t the surface Σ in Figure 1 contains a set of points arranged about a centroid      . The function         can be written as


with independent of time. Variables are shifted to a new frame of reference attached to the moving surface, with origin at             . For
a rigidly translating surface, the limits of integration are then independent of time, so:




where the limits of integration confining the integral to the region Σ no longer are time dependent so differentiation passes through
the integration to act on the integrand only:




with the velocity of motion of the surface defined by




This equation expresses the material derivative of the field, that is, the derivative with respect to a coordinate system attached to the
moving surface. Having found the derivative, variables can be switched back to the original frame of reference. We notice that (see
article on curl)


and that Stokes theorem equates the surface integral of the curl over Σ with a line integral over ∂Σ:




The sign of the line integral is based on the right-hand rule for the choice of direction of line element ds. To establish this sign, for
example, suppose the field F points in the positive z-direction, and the surface Σ is a portion of the xy-plane with perimeter ∂Σ. We
adopt the normal to Σ to be in the positive z-direction. Positive traversal of ∂Σ is then counterclockwise (right-hand rule with thumb
along z-axis). Then the integral on the left-hand side determines a positive flux of F through Σ. Suppose Σ translates in the positive x-
direction at velocity v. An element of the boundary of Σ parallel to the y-axis, say ds, sweeps out an area vt × ds in time t. If we
integrate around the boundary ∂Σ in a counterclockwise sense, vt × ds points in the negative z-direction on the left side of ∂Σ (where
ds points downward), and in the positive z-direction on the right side of ∂Σ (where ds points upward), which makes sense because Σ is
moving to the right, adding area on the right and losing it on the left. On that basis, the flux of F is increasing on the right of ∂Σ and
decreasing on the left. However, the dot product v × F ⋅ ds = −F × v ⋅ ds = −F ⋅ v × ds. Consequently, the sign of the line
integral is taken as negative.

If v is a constant,




which is the quoted result. This proof does not consider the possibility of the surface deforming as it moves.


Alternative derivation
Lemma. One has:




Proof. From the proof of the fundamental theorem of calculus,
and




Suppose a and b are constant, and that f(x) involves a parameter α which is constant in the integration but may vary to form different
integrals. Assume that f(x, α) is a continuous function of x and α in the compact set {(x, α) : α0 ≤ α ≤ α1 and a ≤ x ≤ b}, and that the
partial derivative fα(x, α) exists and is continuous. If one defines:




then   may be differentiated with respect to α by differentiating under the integral sign, i.e.,




By the Heine–Cantor theorem it is uniformly continuous in that set. In other words, for any ε > 0 there exists Δα such that for all
values of x in [a, b],



On the other hand,




Hence φ(α) is a continuous function.

Similarly if             exists and is continuous, then for all ε > 0 there exists Δα such that:
Therefore,




where




Now, ε → 0 as Δα → 0, so




This is the formula we set out to prove.

Now, suppose




where a and b are functions of α which take increments Δa and Δb, respectively, when α is increased by Δα. Then,




A form of the mean value theorem,                                 where a < ξ < b, can be applied to the first and last integrals of the
formula for Δφ above, resulting in




Dividing by Δα, letting Δα → 0, noticing ξ1 → a and ξ2 → b and using the above derivation for




yields




This is the general form of the Leibniz integral rule.



Examples

Example 1: Fixed limits
Consider the function




The function under the integral sign is not continuous at the point (x, α) = (0, 0), and the function φ(α) has a discontinuity at α = 0
because φ(α) approaches ±π/2 as α → 0±.
If we differentiate φ(α) with respect to α under the integral sign, we get




for α≠0. This may be integrated (with respect to α) to find




Example 2: Variable limits
An example with variable limits:




Applications

Evaluating definite integrals
The formula




can be of use when evaluating certain definite integrals. When used in this context, the Leibniz integral rule for differentiating under
the integral sign is also known as Feynman's trick for integration.


Example 3
Consider




Now,




As     varies from   to , we have




Hence,




Therefore,
Integrating both sides with respect to , we get:




        follows from evaluating       :




To determine       in the same manner, we should need to substitute in a value of     greater than 1 in         . This is somewhat
inconvenient. Instead, we substitute     , where       . Then,




Therefore,

The definition of      is now complete:




The foregoing discussion, of course, does not apply when      , since the conditions for differentiability are not met.


Example 4




First we calculate:
The limits of integration being independent of , we have:




On the other hand:




Equating these two relations then yields




In a similar fashion, pursuing     yields




Adding the two results then produces




which computes       as desired.

This derivation may be generalized. Note that if we define




it can easily be shown that




Given , this integral reduction formula can be used to compute all of the values of   for   . Integrals like   and   may also be
handled using the Weierstrass substitution.


Example 5
Here, we consider the integral
Differentiating under the integral with respect to , we have




Therefore:




But            by definition so          and




Example 6
Here, we consider the integral




We introduce a new variable φ and rewrite the integral as




When φ = 1 this equals the original integral. However, this more general integral may be differentiated with respect to :




Now, fix φ, and consider the vector field on            defined by                                                                  .
Further, choose the positive oriented parameterization of the unit circle   given by                  ,                     , so that
                         . Then the final integral above is precisely
the line integral of   over   . By Green's Theorem, this equals the double integral




where is the closed unit disc. Its integrand is identically 0, so         is likewise identically zero. This implies that f(φ) is constant.
The constant may be determined by evaluating at            :




Therefore, the original integral also equals   .


Other problems to solve
There are innumerable other integrals that can be solved using the technique of differentiation under the integral sign. For example, in
each of the following cases, the original integral may be replaced by a similar integral having a new parameter :




The first integral, the Dirichlet integral, is absolutely convergent for positive α but only conditionally convergent when            .
Therefore, differentiation under the integral sign is easy to justify when      , but proving that the resulting formula remains valid
when          requires some careful work.


Infinite series
The measure-theoretic version of differentiation under the integral sign also applies to summation (finite or infinite) by interpreting
summation as counting measure. An example of an application is the fact that power series are differentiable in their radius of
convergence.


Euler-Lagrange equations
The Leibniz integral rule is used in the derivation of the Euler-Lagrange equation in variational calculus.



In popular culture
Differentiation under the integral sign is mentioned in the late physicist Richard Feynman's best-selling memoir Surely You're Joking,
Mr. Feynman! in the chapter "A Different Box of Tools". He describes learning it, while in high school, from an old text, Advanced
Calculus (1926), by Frederick S. Woods (who was a professor of mathematics in the Massachusetts Institute of Technology). The
technique was not often taught when Feynman later received his formal education in calculus, but using this technique, Feynman was
able to solve otherwise difficult integration problems upon his arrival at graduate school at Princeton University:
    One thing I never did learn was contour integration. I had learned to do integrals by various methods shown in a book
    that my high school physics teacher Mr. Bader had given me. One day he told me to stay after class. "Feynman," he said,
    "you talk too much and you make too much noise. I know why. You're bored. So I'm going to give you a book. You go up
    there in the back, in the corner, and study this book, and when you know everything that's in this book, you can talk
    again." So every physics class, I paid no attention to what was going on with Pascal's Law, or whatever they were doing.
    I was up in the back with this book: "Advanced Calculus" (https://books.google.com/books/about/Advanced_calculus.ht
    ml?id=94MZAQAAIAAJ), by Woods. Bader knew I had studied "Calculus for the Practical Man" (https://archive.org/det
    ails/calulusforthepra000526mbp) a little bit, so he gave me the real works—it was for a junior or senior course in college.
    It had Fourier series, Bessel functions, determinants, elliptic functions—all kinds of wonderful stuff that I didn't know
    anything about. That book also showed how to differentiate parameters under the integral sign—it's a certain operation. It
    turns out that's not taught very much in the universities; they don't emphasize it. But I caught on how to use that method,
    and I used that one damn tool again and again. So because I was self-taught using that book, I had peculiar methods of
    doing integrals. The result was, when guys at MIT or Princeton had trouble doing a certain integral, it was because they
    couldn't do it with the standard methods they had learned in school. If it was contour integration, they would have found
    it; if it was a simple series expansion, they would have found it. Then I come along and try differentiating under the
    integral sign, and often it worked. So I got a great reputation for doing integrals, only because my box of tools was
    different from everybody else's, and they had tried all their tools on it before giving the problem to me.




See also

    Mathematics portal


  Chain rule
  Differentiation of integrals
  Leibniz rule (generalized product rule)
  Reynolds transport theorem, a generalization of Leibniz rule


References
1. Protter, Murray H.; Morrey, Charles B. Jr. (1985). "Differentiation under the Integral Sign" (https://books.google.com/b
   ooks?id=3lTmBwAAQBAJ&pg=PA421). Intermediate Calculus (Second ed.). New York: Springer. pp. 421–426.
   doi:10.1007/978-1-4612-1086-3 (https://doi.org/10.1007%2F978-1-4612-1086-3). ISBN 978-0-387-96058-6.
2. Talvila, Erik (June 2001). "Necessary and Sufficient Conditions for Differentiating under the Integral Sign" (https://ww
   w.jstor.org/stable/2695709). American Mathematical Monthly. 108 (6): 544–548. arXiv:math/0101012 (https://arxiv.org/
   abs/math/0101012). doi:10.2307/2695709 (https://doi.org/10.2307%2F2695709). JSTOR 2695709 (https://www.jstor.o
   rg/stable/2695709). Retrieved 16 April 2022.
3. Abraham, Max; Becker, Richard (1950). Classical Theory of Electricity and Magnetism (2nd ed.). London: Blackie &
   Sons. pp. 39–40.
4. Flanders, Harly (June–July 1973). "Differentiation under the integral sign" (http://sgpwe.izt.uam.mx/files/users/uami/jd
   f/proyectos/Derivar_inetegral.pdf) (PDF). American Mathematical Monthly. 80 (6): 615–627. doi:10.2307/2319163 (htt
   ps://doi.org/10.2307%2F2319163). JSTOR 2319163 (https://www.jstor.org/stable/2319163).
5. Folland, Gerald (1999). Real Analysis: Modern Techniques and their Applications (2nd ed.). New York: John Wiley &
   Sons. p. 56. ISBN 978-0-471-31716-6.
6. Cheng, Steve (6 September 2010). Differentiation under the integral sign with weak derivatives (Report). CiteSeerX.
   CiteSeerX 10.1.1.525.2529 (https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.525.2529).
7. Spivak, Michael (1994). Calculus (https://archive.org/details/calculus00spiv_191) (3 ed.). Houston, Texas: Publish or
   Perish, Inc. pp. 267 (https://archive.org/details/calculus00spiv_191/page/n280)–268. ISBN 978-0-914098-89-8.
8. Spivak, Michael (1965). Calculus on Manifolds. Addison-Wesley Publishing Company. p. 31. ISBN 978-0-8053-9021-
   6.


Further reading
  Amazigo, John C.; Rubenfeld, Lester A. (1980). "Single Integrals: Leibnitz's Rule; Numerical Integration" (https://archi
  ve.org/details/advancedcalculus0000amaz/page/155). Advanced Calculus and its Applications to the Engineering and
  Physical Sciences. New York: Wiley. pp. 155–165 (https://archive.org/details/advancedcalculus0000amaz/page/155).
  ISBN 0-471-04934-4.
    Kaplan, Wilfred (1973). "Integrals Depending on a Parameter—Leibnitz's Rule". Advanced Calculus (2nd ed.).
    Reading: Addison-Wesley. pp. 285–288.


External links
    Harron, Rob. "The Leibniz Rule" (https://math.hawaii.edu/~rharron/teaching/MAT203/LeibnizRule.pdf) (PDF). MAT-
    203.

Retrieved from "https://en.wikipedia.org/w/index.php?title=Leibniz_integral_rule&oldid=1241050063"
