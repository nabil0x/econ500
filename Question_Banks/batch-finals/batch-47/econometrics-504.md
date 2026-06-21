# Course 504 — Econometrics (2022)

> **Exam:** M.Sc. Final Examination 2022
> **Time:** 4 Hours | **Full Marks:** 70
> **Instructions:** Answer ANY FIVE questions. All parts of a question to be answered consecutively.

---

### Question 1 [14]

**A:** What are the advantages of panel data over cross-section or time series data?

**B:** What is meant by a fixed effects model (FEM)? Since panel data have both time and space dimensions, how does FEM allow for both dimensions?

**C:** What is meant by an error components model (ECM)? How does it differ from FEM? When will ECM be appropriate? When will FEM be appropriate?

---

### Question 2 [14]

**A:** What is a linear probability model (LPM)? What are its limitations? What are the advantages of Probit model over the other models?

**B:** How would you explain the Logit model? What are the remarkable features of this model?

**C:** Car ownership is a binary variable. $Y = 1$ if a person owns a car, zero $(0)$ otherwise. The model is estimated as:

$$L = -2.5423 + 0.4347 \ln(\text{Income})$$
$$t = (-2.98) \; (3.67)$$

where $L =$ estimated logit model.

i) Interpret the estimated logit model.

ii) From this estimated model, how would you obtain the expression for the probability of car ownership?

iii) What is the probability that a person with an income of \$14,000 will own a car? And at an income level of \$20,000? What is the rate of change of probability at the income level of \$18,000?

---

### Question 3 [3+3+4+4=14]

**A:** What are the distributed-lag and dynamic model? Give examples.

**B:** What is the role of lags in economics? Give two economic models as examples.

**C:** How has Koyck proposed an ingenious method of estimating distributed-lag models?

**D:** C. W. J. Granger (1969) has proposed to test the 'causality' between the variables. Explain the procedure using an appropriate economic example.

---

### Question 4 [3+7+4=14]

**A:** What is the simultaneous equation system? Explain it with an example.

**B:** What is the problem(s) that may arise if we apply the OLS method in a simultaneous equation system? Show and explain your necessary derivation.

**C:** Using the stock adjustment model, we obtained the following results for the period 1980–2022:

$$\log \hat{T}_t = \text{constant} - 0.218 \log X_{1,t-1} - 0.855 \log X_{2,t-1} + 0.864 \log T_{t-1}$$
$$(0.051) \qquad (0.170) \qquad (0.035)$$
$$R^2 = 0.987$$

where the figures in the parentheses are the estimated standard errors.

$T_t =$ desired stock of tractors; $X_1 =$ relative price of tractors; $X_2 =$ interest rate

i) What is the estimated coefficient of adjustment?

ii) What are the short- and long-run price elasticities?

iii) What are the corresponding interest elasticities?

iv) What are the reasons for high or low rate of adjustment in the present model?

---

### Question 5 [2+6+6=14]

**A:** Define stationary and non-stationary time series.

**B:** What do you mean by Random Walk Model? Show that Random Walk Models without drift and with drift are non-stationary stochastic processes.

**C:** Explain the Unit root test. The following results are obtained for the US CPI series from January 1947 to January 2000 for a total of 649 observations. Use the unit root test to determine the stationarity of the CPI series:

$$\Delta \text{CPI}_t = -0.0094 + 0.00051 t - 0.00066 \text{CPI}_{t-1} + 0.5473 \Delta \text{CPI}_{t-1}$$
$$t = (-0.6538) \quad (4.3431) \quad (-1.5472) \quad (16.448)$$
$$R^2 = 0.5177 \qquad d = 2.1410$$

(The 10% critical $\tau$ value is $-3.1317$)

---

### Question 6 [4+3+4+3=14]

**A:** What is the structural or behavioral and reduced-form equation system? Define those with examples.

**B:** What is the identification problem? Explain the under-identification and over-identification problem with examples.

**C:** Verify the following equations whether they are identified by both identification rules or not.

| Eq | $Y_1$ | $Y_2$ | $Y_3$ | $X_1$ | $X_2$ | $X_3$ |
|----|-------|-------|-------|-------|-------|-------|
| 1 | $-\beta_{10}$ | $1$ | $-\beta_{13}$ | $0$ | $-\gamma_{11}$ | $0$ |
| 2 | $-\beta_{20}$ | $-\beta_{21}$ | $1$ | $-\gamma_{21}$ | $0$ | $0$ |
| 3 | $-\gamma_{30}$ | $0$ | $1$ | $0$ | $-\gamma_{32}$ | $0$ |

**D:** How could you test the 'simultaneity' of a model according to the Hausman specification test? Explain the necessary steps.

---

### Question 7 [3+4+4+3=14]

**A:** Explain with examples the steps of the Indirect Least Square (ILS) method to estimate a simultaneous equation system.

**B:** How would the recursive models be used to estimate the simultaneous equations?

**C:** What is the necessary condition for using the 2SLS? Explain its steps with example.

**D:** Given the results of two regression models:

**2SLS Regression Results:**
$$\hat{Y}_1 = -3521.65 + 0.6230 Y_2$$
$$se = (125.352) \; (0.0214)$$
$$R^2 = 0.9804$$

**OLS Regression Results:**
$$\hat{Y}_1 = -3234.24 + 0.6210 Y_2$$
$$se = (135.352) \; (0.0209)$$

Here, $Y_1 =$ GDP; $Y_2 =$ money supply.

"Since the OLS and 2SLS results are practically identical, 2SLS is meaningless." — Comment.

---

### Question 8 [4+2+4+2+2=14]

**A:** What is integrated stochastic process? Explain the AR, MA and ARIMA models with examples.

**B:** What is the error correction mechanism (ECM)? What is its relationship with cointegration?

**C:** What is the 'unit root' problem in a time series data? Explain the steps of Augmented Dickey-Fuller (ADF) test for the unit root problem.

**D:** What are the limitations of the Vector Autoregressive (VAR) model?

**E:** Given the results involving a variable with time series data, how many lags should be chosen and why?

| Lag | LL | LR | df | p | FPE | AIC | HQIC | SBIC |
|-----|----|----|----|----|-----|-----|------|------|
| 0 | $-21.7346$ | — | — | — | $0.000065$ | $1.71564$ | $1.7754$ | $1.90246$ |
| 1 | $126.437$ | $296.34$ | $16$ | $0.000$ | $9.9\text{e-}09$ | $-7.09581$ | $-6.79697$ | $-6.16168^\ast$ |
| 2 | $148.47$ | $44.066$ | $16$ | $0.000$ | $7.0\text{e-}09$ | $-7.49799$ | $-6.96009$ | $-5.81656$ |
| 3 | $168.722$ | $40.505$ | $16$ | $0.001$ | $6.3\text{e-}09$ | $-7.78148$ | $-7.0045$ | $-5.35274$ |
| 4 | $193.517$ | $49.59$ | $16$ | $0.000$ | $5.0\text{e-}09$ | $-8.36781$ | $-7.35176$ | $-5.19176$ |

$(\ast)$ indicates optimal lag selected by the respective criterion.
