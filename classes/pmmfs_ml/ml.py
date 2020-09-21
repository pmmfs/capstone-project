#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 13 10:54:27 2020

@author: sami elkhayri

This is a keras tensorflow machine learning library for training and testing neural network model 
"""

# Import the dependencies
import pandas as pd
from matplotlib import pyplot as plt

from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.metrics import r2_score

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

import re

class ml:
    
    # Constructor - Initialise all the instance variables
    # df - the dataframe to be analysed
    # title - the title to be used in the plots
    # features - the features to be used for the neural network analysis
    # test_size - the size of the test set
    # layers - a dictionary containing the neural network configuration
    # X_train_scaled - scaled X_train values
    # y_train_scaled - scaled y_train values
    # X_test_scaled - scaled X_test values
    # y_test_scaled - scaled y_test values
    # epochs - the number of neural network training epochs
    # nn_model - neural network model
    
    def __init__(self,df,feature_set,title,test_size,target,period,**layers):
        keras.backend.clear_session()
        self.df = df
        self.title = title
        self.features = None
        self.feature_set = feature_set
        self.test_size = test_size
        self.target = target
        self.period = period
        self.layers = layers
        self.X_train_scaled = None
        self.y_train_scaled = None
        self.X_scaler = None
        self.X_test_scaled = None
        self.y_test_scaled = None
        self.y = None
        self.y_test_pred = None
        self.y_train_pred = None
        self.y_scaler = None
        self.epochs = None
        self.nn_model = None
        
    
    # This function executes the machine training and testing
    
    def nn_ml(self):
        
        # Instantiate the neural network model
        self.nn_model= Sequential()
        
        # Use the information from the layers dictionary to construct the neural network 
        
        # Get the number of layers in the model
        n_layers = self.layers["n_layers"]
        
        # For each layer
        for layer in range(n_layers):
            
            # If this is the last layer, get the number of input features
            if layer == 0:
                number_input_features = self.layers["number_input_features"]
            
            # Otherwise, get the number of hidden nodes
            number_hidden_nodes = self.layers["l"+str(layer)]["number_hidden_nodes"]
            
            # Get the activation function for the layer
            activation = self.layers["l"+str(layer)]["activation_function"]
            
            # Add a Dense layer with the appropriate parameters to the neural network model
            self.nn_model.add(Dense(units=number_hidden_nodes, input_dim=number_input_features, activation=activation))
    
        # Display the summary of the neural network model
        self.nn_model.summary()
        
        # Compile the neural networking model
        self.nn_model.compile(loss="mean_squared_error", optimizer="adam", metrics=["mse"])
        
        # train the model
        train = self.nn_model.fit(self.X_train_scaled, self.y_train_scaled, epochs=self.epochs)
        
        # Set the name of the graph file to be stored on disk
        fig_name = "Resources/graphs/target-" + self.target + ",period:" + self.period + ",feature_set" + str(self.feature_set)
        fig_name = fig_name.replace(" ","")    
        
        # Plot the train and test loss function and save the plot to disk
        plt.plot(train.history["loss"])
        plt.title(self.title)
        plt.xlabel("Epochs")
        plt.ylabel("MSE")
        plt.legend(["loss"])
        plt.savefig(fig_name)
        plt.close()
        
        # Get the training and testing predictions of the model
        self.y_train_pred = self.nn_model.predict(self.X_train_scaled)
        self.y_test_pred = self.nn_model.predict(self.X_test_scaled)
        
        # Display the r-squared scored for both training and testing
        print(f"Training r2_score = {r2_score(self.y_train_scaled, self.y_train_pred)}")
        print(f"Testing  r2_score = {r2_score(self.y_test_scaled, self.y_test_pred)}")
        
    
    # This function implements the training and testing of the neural network model
    
    # Input
    # epochs - the number of epochs over which to run neural network machine training
    
    def train_test(self, epochs):
        
        print(f"\n\n Training and testing - {self.period} days ahead\n\n")
        
        # The name of the target column
        target_n = self.target + "_" + self.period
        
        print(f"target_n = {target_n}")
        
        # Get the columns of the dataframe under analysis
        df_columns = self.df.columns.values
        
        # Remove the target columns from the feature set
        features = [f for f in df_columns if re.search("_\d{2}$",f) == None]
        
        
        columns = features
        # print(f"columns = {columns}\n type(columns) = {type(columns)}")
        
        # Add the target columns to the feature set
        columns.append(target_n)
        
        # print(f"columns = {columns}")
        
        # Create a dataframe from the columns variable
        self.df = self.df[columns]

        # Drop all rows which contain Nans for the target_n column
        self.df = self.df.dropna()
        
        # Drop the date and the iso_code columns from the feature set
        features = features[2:-1]  # Remove date and iso_code
        
        print(f"\nfeatures = {features}")
        
        # Set the features instance variable
        self.features = features
        
        # Display the feature set
        for feature in features:
            print(feature + "\n")
        
        # Set the number of layers in the neural network model
        self.layers["number_input_features"] = len(features)
        
        # Set the X (feature) array for machine learning
        X = self.df[features].values
        
        # Set the y (target) array
        y = self.df[target_n].values
        
        # Make y a column array
        y = y.reshape(-1,1)
        
        # Set the y instance variable
        self.y = y
        
        # Split dataset into training and testing
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=self.test_size)

        # Create and train X_scaler, the scaler of the X (feature) data
        self.X_scaler = StandardScaler()
        self.X_scaler.fit(X_train)
            
        # Create and train y_scaler, the scaler of the y (target) data
        self.y_scaler= StandardScaler()
        self.y_scaler.fit(y_train)

        # Scale the y train and test arrays
        self.y_train_scaled = self.y_scaler.transform(y_train)
        self.y_test_scaled = self.y_scaler.transform(y_test)
        
        # Scale the X train and test arrays
        self.X_train_scaled = self.X_scaler.transform(X_train)
        self.X_test_scaled = self.X_scaler.transform(X_test)
        
        # Set the title of the graph 
        self.title = f"{self.period} Days - {self.target} prediction - loss_function"
        
        # Set the number of epochs for this instance
        self.epochs = epochs
        
        # Invoke the nn_ml machine learning function
        self.nn_ml()
    
    # This function returns the period value of this ml instance
    def get_period(self):
        return self.period
    
    # This function returns the feature list of this ml instance
    def get_features(self):
        return self.features
    
    # This function returns the target of this ml instance
    def get_target(self):
        return self.target
    
    # This function returns the neural network model of this ml instance
    def get_model(self):
        return self.nn_model
    
    # This function returns the feature scaler
    def get_X_scaler(self):
        return self.X_scaler
    
    # This function returns the target scaler
    def get_y_scaler(self):
        return self.y_scaler

    # This function returns the dataframe being analysed
    def get_df(self):
        return self.df
    
    # This function returns the title 
    def get_title(self):
        return self.title
    
