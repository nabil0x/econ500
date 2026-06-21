<!-- Extracted from: 502_Macroeconomics/TUTORIALS/MODELS/RBC/Hodrick–Prescott_filter.pdf -->

Hodrick–Prescott filter
The Hodrick–Prescott filter (also known as Hodrick–Prescott decomposition) is a mathematical tool
used in macroeconomics, especially in real business cycle theory, to remove the cyclical component of a
time series from raw data. It is used to obtain a smoothed-curve representation of a time series, one that is
more sensitive to long-term than to short-term fluctuations. The adjustment of the sensitivity of the trend to
short-term fluctuations is achieved by modifying a multiplier .

The filter was popularized in the field of economics in the 1990s by economists Robert J. Hodrick and
Nobel Memorial Prize winner Edward C. Prescott,[1] though it was first proposed much earlier by E. T.
Whittaker in 1923.[2] The Hodrick-Prescott filter is a special case of a smoothing spline.[3]



The equation
The reasoning for the methodology uses ideas related to the decomposition of time series. Let    for
                  denote the logarithms of a time series variable. The series is made up of a trend
component       and a cyclical component       such that               [4]
                                                                      . Given an adequately chosen,
positive value of , there is a trend component that will solve




The first term of the equation is the sum of the squared deviations                 , which penalizes the
cyclical component. The second term is a multiple of the sum of the squares of the trend component's
second differences. This second term penalizes variations in the growth rate of the trend component. The
larger the value of , the higher is the penalty. Hodrick and Prescott suggest 1600 as a value for for
quarterly data. Ravn and Uhlig (2002) state that should vary by the fourth power of the frequency
observation ratio; thus,   should equal 6.25 (1600/4^4) for annual data and 129,600 (1600*3^4) for
              [5]
monthly data; in practice,             for yearly data and               for monthly data are commonly
used, however.

The Hodrick–Prescott filter is explicitly given by




where    denotes the lag operator, as can be seen from the first-order condition for the minimization
problem.



Drawbacks to the Hodrick–Prescott filter
The Hodrick–Prescott filter will only be optimal when:[6]
    Data exists in a I(2) trend.
        If one-time permanent shocks or split growth rates occur, the filter will generate shifts in
        the trend that do not actually exist.
    Noise in data is approximately normally distributed.
    Analysis is purely historical and static (closed domain). The filter causes misleading
    predictions when used dynamically since the algorithm changes (during iteration for
    minimization) the past state (unlike a moving average) of the time series to adjust for the
    current state regardless of the size of used.
The standard two-sided Hodrick–Prescott filter is non-causal as it is not purely backward looking. Hence, it
should not be used when estimating DSGE models based on recursive state-space representations (e.g.,
likelihood-based methods that make use of the Kalman filter). The reason is that the Hodrick–Prescott filter
uses observations at               to construct the current time point , while the recursive setting assumes
that only current and past states influence the current observation. One way around this is to use the one-
sided Hodrick–Prescott filter.[7]

Exact algebraic formulas are available for the two-sided Hodrick–Prescott filter in terms of its signal-to-
noise ratio .[8]

A working paper by James D. Hamilton at UC San Diego titled "Why You Should Never Use the Hodrick-
Prescott Filter"[9] presents evidence against using the HP filter. Hamilton writes that:

 1. The HP filter produces series with spurious dynamic relations that have no basis in the
    underlying data-generating process.
 2. A one-sided version of the filter reduces but does not eliminate spurious predictability and
    moreover produces series that do not have the properties sought by most potential users of
    the HP filter.
 3. A statistical formalization of the problem typically produces values for the smoothing
    parameter vastly at odds with common practice, e.g., a value for λ far below 1600 for
    quarterly data.
 4. There's a better alternative. A regression of the variable at date t+h on the four most recent
    values as of date t offers a robust approach to detrending that achieves all the objectives
    sought by users of the HP filter with none of its drawbacks."
A working paper by Robert J. Hodrick titled "An Exploration of Trend-Cycle Decomposition
Methodologies in Simulated Data"[10] examines whether the proposed alternative approach of James D.
Hamilton is actually better than the HP filter at extracting the cyclical component of several simulated time
series calibrated to approximate U.S. real GDP. Hodrick finds that for time series in which there are distinct
growth and cyclical components, the HP filter comes closer to isolating the cyclical component than the
Hamilton alternative.



See also
    Band-pass filter
    Kalman filter
   Smoothing spline


References
 1. Hodrick, Robert; Prescott, Edward C. (1997). "Postwar U.S. Business Cycles: An Empirical
    Investigation" (http://www.kellogg.northwestern.edu/research/math/papers/451.pdf) (PDF).
    Journal of Money, Credit, and Banking. 29 (1): 1–16. doi:10.2307/2953682 (https://doi.org/10.
    2307%2F2953682). JSTOR 2953682 (https://www.jstor.org/stable/2953682).
    S2CID 154995815 (https://api.semanticscholar.org/CorpusID:154995815).
 2. Whittaker, E. T. (1923). "On a New Method of Graduation" (https://doi.org/10.1017%2FS0013
    091500077853). Proceedings of the Edinburgh Mathematical Association. 41: 63–75.
    doi:10.1017/S0013091500077853 (https://doi.org/10.1017%2FS0013091500077853).
    S2CID 120579706 (https://api.semanticscholar.org/CorpusID:120579706). - as quoted in
    Philips 2010 (http://cowles.econ.yale.edu/P/cd/d17b/d1771.pdf)
 3. Paige, Robert L.; Trindade, A. Alexandre (2010). "The Hodrick-Prescott Filter: A special case
    of penalized spline smoothing" (https://projecteuclid.org/journals/electronic-journal-of-statisti
    cs/volume-4/issue-none/The-Hodrick-Prescott-Filter--A-special-case-of-penalized/10.1214/1
    0-EJS570.full). Electronic Journal of Statistics. 4: 856–874. doi:10.1214/10-EJS570 (https://d
    oi.org/10.1214%2F10-EJS570). hdl:2346/89336 (https://hdl.handle.net/2346%2F89336).
    ISSN 1935-7524 (https://search.worldcat.org/issn/1935-7524).
 4. Kim, Hyeongwoo. "Hodrick–Prescott Filter (http://www.auburn.edu/~hzk0001/hpfilter.pdf)"
    March 12, 2004
 5. Ravn, Morten; Uhlig, Harald (2002). "On adjusting the Hodrick–Prescott filter for the
    frequency of observations" (https://www.econstor.eu/bitstream/10419/75742/1/cesifo_wp479.
    pdf) (PDF). The Review of Economics and Statistics. 84 (2): 371.
    doi:10.1162/003465302317411604 (https://doi.org/10.1162%2F003465302317411604).
    S2CID 845683 (https://api.semanticscholar.org/CorpusID:845683).
 6. French, Mark W. (2001). "Estimating Changes in Trend Growth of Total Factor Productivity:
    Kalman and H-P Filters versus a Markov-Switching Framework". FEDS Working Paper No.
    2001-44. SSRN 293105 (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=293105).
 7. Stock; Watson (1999). "Forecasting Inflation". Journal of Monetary Economics. 44 (2): 293–
    335. doi:10.1016/s0304-3932(99)00027-6 (https://doi.org/10.1016%2Fs0304-3932%2899%2
    900027-6).
 8. McElroy (2008). "Exact Formulas for the Hodrick-Prescott Filter". Econometrics Journal. 11:
    209–217. doi:10.1111/j.1368-423x.2008.00230.x (https://doi.org/10.1111%2Fj.1368-423x.20
    08.00230.x). S2CID 17526059 (https://api.semanticscholar.org/CorpusID:17526059).
 9. Hamilton, James D. (2017). "Why You Should Never Use the Hodrick-Prescott Filter" (http://e
    conweb.ucsd.edu/~jhamilto/hp.pdf) (PDF). Working Paper.
10. Hodrick, Robert J. (2020). "An Exploration of Trend-Cycle Decomposition Methodologies in
    Simulated Data" (https://www0.gsb.columbia.edu/mygsb/faculty/research/pubfiles/26120/Ho
    drick.Filtering%20Cycles.NBERw26750.2020.pdf) (PDF). Working Paper.


Further reading
   Enders, Walter (2010). "Trends and Univariate Decompositions". Applied Econometric Time
   Series (Third ed.). New York: Wiley. pp. 247–7. ISBN 978-0470-50539-7.
   Favero, Carlo A. (2001). Applied Macroeconometrics (https://books.google.com/books?id=P
   BToVOKpyL4C&pg=PA54). New York: Oxford University Press. pp. 54–5. ISBN 0-19-
   829685-1.
    Mills, Terence C. (2003). "Filtering Economic Time Series". Modelling Trends and Cycles in
    Economic Time Series. New York: Palgrave Macmillan. pp. 75–102. ISBN 1-4039-0209-7.


External links
    a freeware Hodrick Prescott Excel Add-In (http://www.web-reg.de/hp_addin.html)
    Prescott's Fortran code (http://dge.repec.org/codes/prescott/hpfilter.for)
    Hodrick–Prescott filter in matlab (http://www.mathworks.com/matlabcentral/fileexchange/397
    2-hodrick-prescott-filter)
    One-sided Hodrick–Prescott filters in matlab (https://ideas.repec.org/c/dge/qmrbcd/181.html)
    HP filter in R with package 'mFilter' (https://cran.r-project.org/web/packages/mFilter/mFilter.p
    df)
    HP filter online app (https://dge.repec.org/cgi-bin/hpfilter.cgi)
    One-sided Hodrick-Prescott filter in Excel (https://www.linkedin.com/pulse/new-hodrick-presc
    ott-excel-add-in-available-webreg-hp-kurt-annen/)

Retrieved from "https://en.wikipedia.org/w/index.php?title=Hodrick–Prescott_filter&oldid=1215151293"
