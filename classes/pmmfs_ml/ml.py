#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 13 10:54:27 2020

@author: sami
"""
import pandas as pd
from matplotlib import pyplot as plt

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.metrics import r2_score

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

import re

class ml:
    
    def __init__(self,df,test_size,target,period,**layers):
        self.df = df
        self.title = None
        self.test_size = test_size
        self.target = target
        self.period = period
        self.layers = layers
        self.X_train_scaled = None
        self.y_train_scaled = None
        self.X_test_scaled = None
        self.y_test_scaled = None
        
    def nn_ml(self):
        nn = Sequential()
        n_layers = self.layers["n_layers"]
        
        for layer in range(n_layers):
            if layer == 0:
                number_input_features = self.layers["number_input_features"]
            number_hidden_nodes = self.layers["l"+str(layer)]["number_hidden_nodes"]
            activation = self.layers["l"+str(layer)]["activation_function"]
            nn.add(Dense(units=number_hidden_nodes, input_dim=number_input_features, activation=activation))
    
        nn.summary()
    
        # compile model
        nn.compile(loss="mean_squared_error", optimizer="adam", metrics=["mse"])
    
        # train model
        self.model = nn.fit(self.X_train_scaled, self.y_train_scaled, epochs=100)
    
        # Plot the train and test loss function
        plt.plot(self.model.history["loss"])
        plt.title(self.title)
        plt.legend(["loss"])
        plt.show()
    
        y_train_pred = nn.predict(self.X_train_scaled)
        y_test_pred = nn.predict(self.X_test_scaled)
    
        print(r2_score(self.y_train_scaled, y_train_pred))
        print(r2_score(self.y_test_scaled, y_test_pred))
        
    def train_test(self):
        
        print(f"\n\n Training and testing - {self.period} days ahead\n\n")
            
        target_n = self.target + "_" + self.period
        
        print(f"target_n = {target_n}")
        
        features = self.df.columns.values
        # print(f"features = {features}")
        
        features = [f for f in features if re.search("_\d{2}$",f) == None]
#         features = features[2:]  # Remove date and iso_code
#         self.layers["number_input_features"] = len(features)
        
        print(f"features = {len(features)}")
        
        columns = features
        # print(f"columns = {columns}\n type(columns) = {type(columns)}")
        
        columns.append(target_n)
        
        # print(f"columns = {columns}")
        
        self.df = self.df[columns]

        self.df = self.df.dropna()
        
        features = features[2:]  # Remove date and iso_code
        self.layers["number_input_features"] = len(features)
        
        X = self.df[features].values
        
        # print(f"df_n.columns = {self.df.columns}")
        
        y = self.df[target_n].values

        y = y.reshape(-1,1)
        
        # print(f"self.df.shape = {self.df.shape}")
        
        print(f"X.shape = {X.shape}, y.shape = {y.shape}")
        
        # Split dataset into training and testing
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=self.test_size)

        # scale data
        X_scaler = StandardScaler()
        X_scaler.fit(X_train)

        y_scaler= StandardScaler()
        y_scaler.fit(y_train)

        self.y_train_scaled=y_scaler.transform(y_train)
        self.y_test_scaled=y_scaler.transform(y_test)

        self.X_train_scaled = X_scaler.transform(X_train)
        self.X_test_scaled = X_scaler.transform(X_test)

        self.title = f"{self.period} Days - {self.target} prediction - loss_function"
        self.nn_ml()
            

    def get_model(self):
        return self.model