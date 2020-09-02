# capstone-project
# Capstone Project: Segment 1 Deliverables

## Overview
Our group (Martin Kaminskyj, Sami Elkhayri, Muzznah Ansari, Femi Adeleke, and Patricia Lan) chose to perform data analysis on coronavirus disease of 2019 (COVID-19). The topic of COVID-19 was chosen because it is a current, global issue with extensive socioeconomic impact, and public data is available. Thus, many approaches to analysis are possible. 

This project evaluates government measures to contain the spread of COVID-19. It also
investigates whether there is a correlation between peoples' mobility (e.g. to the workplace or recreation centers) and the number of confirmed COVID-19 cases. The dataset from Oxford university's Blavatnik School of Government contained indices that categorized government responses to COVID-19, Google Community Mobility Reports recorded changes in people's mobility, and Our World in Data and Esri Canada provided medical data on COVID-19 (e.g. number of confirmed cases and deaths).

A [provisional machine learning model](analysis/mobilityML_seg1.ipynb) was created to assess for correlation between mobility and counts of COVID-19 cases. Data was stored in an [SQLite database](resources/mobility_db.db) and queried for input into a neural network regression model. Strength of correlation was assessed using the resulting R-squared values. See Figure 1 for an entity relationship diagram (ERD) of the database. 

#### Figure 1. Database ERD
![ERD](ERD.png)

For effective group communication, protocols include weekly "Zoom" meetings, messaging through Slack, and file-sharing using GitHub and Google Drive. Group members are also assigned project roles and tasks at meetings. Post-meeting, this allows for members to break off into smaller groups for collaboration. Finally, Technology.md describes the software used in this project. 

## Resources
### Data
- [regional_mobility.csv](resources/raw/regional_mobility.csv) (Google Community Mobility Reports)
- [canada_esri.csv](resources/raw/canada_esri.csv) (Esri Canada)

### Software
See Technology.md.
