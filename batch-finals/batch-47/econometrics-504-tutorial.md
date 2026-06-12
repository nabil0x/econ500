# Course 504 — Econometrics (2022)

> **Exam:** M.Sc. Tutorial Examination 2022
> **Course:** Econometrics (Econ 504)

---

## Tutorial 1

> **Time:** 1 Hour | **Full Marks:** 20
> **Instructions:** Answer any one question.

---

### Question 1

A. What do you mean by stochastic process and stationary process?

B. Explain the AR, MA and ARIMA models with examples.

---

### Question 2

A. What is the cointegration problem in a time series data? Explain the steps of augmented Engle-Granger (AEG) test for cointegration.

B. "If the primary objective is forecasting, VAR will do the job." Critically evaluate this statement.

C. Given the DF test result of a variable on time series data. Comment on the result.

|                                   | Interpolated Dickey-Fuller           |           |            |
|-----------------------------------|--------------------------------------|-----------|------------|
| Test Statistic                    | 1% Critical Value                    | 5% Critical Value | 10% Critical Value |
| —                                 | —                                    | —         | —          |

---

### Question 3

A. What do you mean by random walk with drift and without drift model?

B. Distinguish between time trend stationary (TS) and difference stationary (DS) process.

C. What is 'unit root' problem in a time series data? Explain the steps of Augmented Dickey-Fuller (ADF) for unit root problem.

D. What do you mean by the ARCH and GARCH model in time series data forecasting?

E. Given the DF test result of a variable on time series data. Comment on the result.

|                                   | Interpolated Dickey-Fuller           |           |            |
|-----------------------------------|--------------------------------------|-----------|------------|
| Test Statistic                    | 1% Critical Value                    | 5% Critical Value | 10% Critical Value |
| z(t) = -7.364                     | -3.1102                              | -2.980    | -2.622     |

MacKinnon approximate $p$-value for $z(t) = 0.0000$

---

### Question 4

A. What is integrated stochastic process?

B. What is the error correction mechanism (ECM)? What is its relationship with cointegration?

C. From the BJ methodology explain the identification step to find the value of $p$, $d$, $q$ for the model using correlogram and partial correlogram.

D. What are the limitations of the VAR model?

E. Given the result of a variable on time series data. How many lags should be chosen and why?

| Lag | LL       | LR       | df | $p$    | FPE        | AIC        | HQIC       | SBIC        |
|-----|----------|----------|----|--------|------------|------------|------------|-------------|
| 0   | -21.7346 |          |    |        | 0.000065   | 1.71564    | 1.7754     | 1.90246     |
| 1   | 126.437  | 296.34   | 16 | 0.000  | 9.9e-09    | -7.09581   | -6.79697   | -6.16168\* |
| 2   | 148.47   | 44.066   | 16 | 0.000  | 7.0e-09    | -7.49799   | -6.96009   | -5.81656    |
| 3   | 168.722  | 40.505   | 16 | 0.001  | 6.3e-09    | -7.78148   | -7.0045    | -5.35274    |
| 4   | 193.517  | 49.59    | 16 | 0.000  | 5.0e-09\*  | -8.36781\* | -7.35176\* | -5.19176    |

\* indicates optimal lag selected by the respective criterion.

---

## Tutorial 2

> **Time:** 1 Hour 10 Minutes | **Full Marks:** 20
> **Instructions:** Answer any one from the following questions. All parts of a question must be answered consecutively.

---

### Question 1

A. What is linear probability model (LPM)? What are its limitations? What are the advantages of Probit model over the other models? Explain. [6]

B. What is meant by a fixed effect model (FEM)? Since panel data have both time and space dimensions, how does FEM allow for both dimensions? [5]

C. What is distributed-lag model and dynamic model? Give examples. [5]

D. C. W. J. Granger (1969) has proposed to test the 'causality' between the variables. Explain the procedure using an appropriate economic example. [4]

---

### Question 2

A. How would you explain the Logit model? What are the remarkable features of this model? [4]

B. Write the Fixed Effect Least-Squares Dummy Variable (LSDV) regression model and explain it. What are the causations to use of it? [4]

C. What are the advantages of panel data over cross-section or time series data? [4]

D. How Koyck has proposed an ingenious method of estimating distributed-lag models? [5]

E. What is meant by an error components model (ECM)? How does it differ from FEM? [3]

---

## Tutorial 3

> **Time:** 1 Hour 10 Minutes | **Full Marks:** 20
> **Instructions:** Answer any one question. All parts of a question try to answer consecutively.

---

### Question 1

A. What is structural or behavioral and reduced-form equation system? Define those with examples. [4]

B. What do you mean by an 'instrumental variable'? Using a simultaneous model, show the estimation procedure of 2SLS method. [4]

C. "The problem of simultaneity does not arise in a recursive simultaneous equation model" — state whether the statement is true or false with reasoning. [4]

D. Verify the following equations whether they are identified by both identification rules or not. [8]

| Eq | $Y_1$ | $Y_2$ | $Y_3$ | $X_1$ | $X_2$ | $X_3$ |
|----|-------|-------|-------|-------|-------|-------|
| 1  | $-\beta_{10}$ | $1$ | $-\beta_{13}$ | $0$ | $-\gamma_{11}$ | $0$ |
| 2  | $-\beta_{20}$ | $-\beta_{21}$ | $1$ | $-\gamma_{21}$ | $0$ | $0$ |
| 3  | $-\gamma_{30}$ | $0$ | $1$ | $0$ | $-\gamma_{32}$ | $0$ |

---

### Question 2

A. "The method of OLS is not applicable to estimate a structural equation in a simultaneous-equation model" — state whether the statement is true or false. Explain the reasoning. [6]

B. How could you test the 'simultaneity' of a model according to the Hausman specification test? Explain the necessary steps. [3]

C. Explain the steps of the Indirect Least Square (ILS) method to estimate the simultaneous equation with example. [4]

D. What is the necessary condition for use of the 2SLS? Explain the steps of it with example. [4]

E. Given the two regression model's results:

**2SLS Regression Results:**

$$\hat{Y} = -4236.89 + 0.5785Y_2 + 1.8700X_2 + 2.0343X_3$$

$$\text{se} = (125.352)\;(0.0214)\;(0.756)\;(0.754)$$

$$t = (\;?\;)\;(\;?\;)\;(\;?\;)\;(\;?\;)$$

$$R^2 = 0.9776$$

**OLS Regression Results:**

$$\hat{Y} = -4378.24 + 0.5776Y_2 + 1.8679X_2 + 2.0336X_3$$

$$\text{se} = (135.352)\;(0.0209)\;(0.4571)\;(0.6874)$$

$$t = (\;?\;)\;(\;?\;)\;(\;?\;)\;(\;?\;)$$

$$R^2 = 0.9780$$

Here, $Y$ = GDP; $X_2$ = private investment; $X_3$ = government spending; and $Y_2$ = money supply.

"Since the OLS and 2SLS results are practically identical, 2SLS is meaningless." Comment. [3]
