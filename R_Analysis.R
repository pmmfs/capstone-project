new_cases_avg <- covid_stats %>% group_by(continent) %>% summarize(average_new_cases=mean(new_cases)) #create summary table

summarize_covid_stats <- covid_stats %>% group_by(continent) %>% summarize(average_new_cases=mean(new_cases),average_new_deaths=mean(new_deaths)) #create summary table with multiple columns

#Plot of Covid_stats
plt <- ggplot(covid_stats,aes(x=continent)) #import dataset into ggplot2
plt + geom_bar() #plot a bar plot

# Sicing data sets based on index and using pairs function to correlate all data 
covid_stats_cor <-covid_stats[,5:10]
pairs(covid_stats_cor)

covid_stats_ma_cor <- covid_stats_ma[,5:13]
pairs(covid_stats_ma_cor)

govt_reg_cor <- government_regulation[,4:8]
pairs(govt_reg_cor)

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
