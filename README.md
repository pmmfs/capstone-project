# Capstone Project: Segment 1 Deliverables

## Overview
Our group (Martin Kaminskyj, Sami Elkhayri, Muzznah Ansari, Femi Adeleke, and Patricia Lan) chose to perform data analysis on coronavirus disease of 2019 (COVID-19). The topic of COVID-19 was chosen because it is a current, global issue with extensive socioeconomic impact, and public data is available. Thus, many approaches to analysis are possible. 

This project evaluates government measures to contain the spread of COVID-19, starting from Dec 2019 to Aug 2020. It also investigates whether there is a correlation between peoples' mobility (e.g. to the workplace or recreation centers) and the number of confirmed COVID-19 cases. The dataset from Oxford university's Blavatnik School of Government contained indices that categorized government responses to COVID-19, Google Community Mobility Reports recorded changes in people's mobility, and Our World in Data and Esri Canada provided medical data on COVID-19 (e.g. number of confirmed cases and deaths).

Provisional machine learning models (investigating [mobility](mobility/analysis/mobilityML.ipynb) and [government regulations](regulation/Analysis/FINAL_government_regulation_impact_machine_learning.ipynb)) were created to assess for correlation between mobility and number of COVID-19 cases, and for correlation between several variables (population density, median age, etc.) and number of total cases or total deaths. Data was stored in SQLite databases ([mobility_db.db](mobility/resources/mobility_db.db) and [covid_db.db](regulation/Resources/covid_db.db)) and queried for input into neural network regression models. Strengths of correlations were assessed using the resulting R-squared values. See Figures 1a and 1b for entity relationship diagrams (ERD) of the databases. Currently, there are two databases for each arm of the project (mobility and government regulations). However, moving forward, tables in these databases will be aggregated into one database.

#### Figure 1a. Database ERD - Mobility
![ERD](ERD.png)

#### Figure 1b. Database ERD - Regulation
![](ERD_regulation.png)

For effective group communication, protocols include weekly "Zoom" meetings, messaging through Slack, and file-sharing using GitHub and Google Drive. Group members are also assigned project roles and tasks at meetings. Post-meeting, this allows for members to break off into smaller groups for collaboration. Finally, [Technology.md](Technology.md) describes the software used in this project. 

## Resources
### Data
- [regional_mobility.csv](mobility/resources/raw_data/regional_mobility.csv) (Google Community Mobility Reports)
- [canada_esri.csv](mobility/resources/raw_data/canada_esri.csv) (Esri Canada)
- [owid-covid-data(Aug31,2020).csv](regulation/Resources/raw/owid-covid-data(Aug31,2020).csv) (Our World in Data - COVID-19 database)
- [OxCGRT_latest(Aug31,2020).csv](regulation/Resources/raw/OxCGRT_latest(Aug31,2020).csv) (University of Oxford - COVID-19 Government Response Tracker)

### Software
See [Technology.md](Technology.md).