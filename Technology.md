# Technologies Used

## Data Cleaning and Analysis
Pandas library in Jupyter notebook will be used to clean the data and perform exploratory analysis. Further analysis will be completed using Python.

## Database Storage
SQLite is the database we intend to use, and we will integrate Flask to display the data.

## Machine Learning
sciki-learn and tensorflow are the machine learning libraries we'll be using to create a neural network model for regression analysis. The dataset will be split into training and testing sets (95% and 5%, respectively) and feature variables will be scaled with encoding as needed. 

Both shallow and deep neural network models will be trialed. Parameters such as the number of inputs, neurons, and hidden layers, and the types of functions used (i.e. activation and output) will be optimized for correlation between feature and target variables. Model output will be the R-squared values of the training and testing sets. These will be compared to assess for overfitting. During training, performance of each epoch (i.e. loss) will be evaluated using mean squared error (MSE).

## Dashboard
The dashboard will be hosted on Heroku or GitHub Pages. It will be created using JavaScript, HTML and CSS languages, and a Flask template. D3.js will be integrated to create an interactive dashboard. 
