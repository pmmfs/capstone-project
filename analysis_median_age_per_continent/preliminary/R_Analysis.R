new_cases_avg <- covid_stats %>% group_by(continent) %>% summarize(average_new_cases=mean(new_cases)) #create summary table

summarize_covid_stats <- covid_stats %>% group_by(continent) %>% summarize(average_new_cases=mean(new_cases),average_new_deaths=mean(new_deaths)) #create summary table with multiple columns

#Plot of Covid_stats
plt <- ggplot(covid_stats,aes(x=continent)) #import dataset into ggplot2
plt + geom_bar() #plot a bar plot

# Slice data based on index and using pairs function to correlate all data 
covid_stats_cor <-covid_stats[,5:10]
pairs(covid_stats_cor)

# Slice data based on index and using pairs function to correlate all data 
covid_stats_ma_cor <- covid_stats_ma[,5:13]
pairs(covid_stats_ma_cor)

# Slice data based on index and using pairs function to correlate all data 
govt_reg_cor <- government_regulation[,4:8]
pairs(govt_reg_cor)

# Slice data  based on index and using pairs function to correlate all data 
merged_covid_cor <- merged_covid[,5:15]
pairs(merged_covid_cor)

updated_merged_covid <-merged_covid %>%relocate(location, .before = continent)
merged_covid_new <- updated_merged_covid[,4:15]

# Visual Test for Normality 
ggplot(merged_covid_new,aes(x=GovernmentResponseIndex_updated)) + geom_density() #visualize distribution using density plot

ggplot(updated_merged_covid,aes(x=StringencyIndex_updated)) + geom_density() #visualize distribution using density plot
ggplot(merged_covid_new,aes(x=ContainmentHealthIndex_updated)) + geom_density() #visualize distribution using density plot

# Qualitative test for Normality for noisy data
shapiro.test(merged_covid_new$StringencyLegacyIndex_updated)

# Random Sampling

sample_updated_merged_covid <- updated_merged_covid %>% sample_n(50) #randomly sample 50 data points
plt <- ggplot(sample_updated_merged_covid,aes(x=(GovernmentResponseIndex_updated))) #import dataset into ggplot2
plt + geom_density() #visualize distribution using density plot

# T-Test- To check for statistical difference between sample and population dataset

t.test((sample_updated_merged_covid$new_cases),mu=mean((updated_merged_covid$new_cases))) #compare sample versus population means

# Output
#One Sample t-test

#data:  (sample_updated_merged_covid$new_cases)
#t = 0.3224, df = 49, p-value = 0.7485
#alternative hypothesis: true mean is not equal to 6963.026
#95 percent confidence interval:
 # 3038.544 12387.336
#sample estimates:
#  mean of x 
#7712.94 
# With a significance level of 0.05 percent, our p-value is above our significance level. 
#Therefore, we do not have sufficient evidence to reject the null hypothesis, and we would state that the 
#two means are statistically similar.


#Test For Correlation
plt <- ggplot(merged_covid_stats_population,aes(x=StringencyIndex_updated,y=new_deaths)) #import dataset into ggplot2
plt + geom_point() #create merged_covid_stats_population
cor(merged_covid_stats_population$new_deaths,merged_covid_stats_population$StringencyIndex_updated) #calculate correlation coefficient


lm(total_cases_updated ~ total_deaths_updated,merged_covid_stats_population) #create linear model
summary(lm(total_cases_updated~total_deaths_updated,merged_covid_stats_population)) #summarize linear model

# Output
#Call:
  #lm(formula = total_cases_updated ~ total_deaths_updated, data = merged_covid_stats_population)

#Residuals:
 # Min      1Q  Median      3Q     Max 
#-902130    1995    2079    3735 2116003 

#Coefficients:
 # Estimate Std. Error t value Pr(>|t|)    
#(Intercept)          -1.995e+03  5.952e+02  -3.351 0.000806 ***
 # total_deaths_updated  2.338e+01  5.747e-02 406.837  < 2e-16 ***
  ---
  #Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

#Residual standard error: 108900 on 34735 degrees of freedom
#(190 observations deleted due to missingness)
#Multiple R-squared:  0.8265,	Adjusted R-squared:  0.8265 
#F-statistic: 1.655e+05 on 1 and 34735 DF,  p-value: < 2.2e-16
  
model <- lm(total_cases_updated ~ total_deaths_updated,merged_covid_stats_population)#create linear model
yvals <- model$coefficients['total_cases_updated']*merged_covid_stats_population$total_cases_updated + model$coefficients['(Intercept)'] #determine y-axis values from linear model

plt <- ggplot(merged_covid_stats_population,aes(x=total_cases_updated,y=total_deaths_updated)) #import dataset into ggplot2
plt + geom_point() + geom_line(aes(y=yvals), color = "red") #plot scatter and linear model
