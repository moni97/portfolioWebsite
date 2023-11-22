# Lathe Machine

Created: October 10, 2023 6:19 PM
Tags: Data Generation, Data Science, Fun!, Machine Learning, Time Series Forecasting
Developed at: Manipal University Jaipur (../All%20my%20work%20Ever%206517ef85bb234fe9b62b79b0a4608f13/My%20Work%20History%2027249e2628ea4e3a8ca4eb4a5c0e51a0/Manipal%20University%20Jaipur%203c9f570a4d7e46b78eb9faff9dcd1fd7.md)
Github: https://github.com/Swagget/lathe-machine-damage-analysis

# lathe-machine-damage-analysis

Connected a vibration sensor to a lathe machine to predict the level of wear using the amplitude of vibrations.

## Data

The data was obtained by connecting a vibration sensor to lathe machines at Manipal University Jaipur. We connected sensors to machines where the drill bits have been replaced recently and ones that need to be switched.
We used the points where the drill bits were changed to test when a machine would require changing the drill bit.

## Techiniques

Used ExponentialSmoothing, SimpleExpSmoothing, HoltWinters time-series forecasting algorithms to predict the vibrations and the increasing wear and tear of the machines.

# Conclusions

We discovered that counterintuitively the vibrations were decreasing over time, this is likely because the timeframe of the data isn't sufficient to calculate an increasing trajectory of vibrations.

Connected a vibration sensor to a lathe machine to predict the level of wear using the amplitude of vibrations.