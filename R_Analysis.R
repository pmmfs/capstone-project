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