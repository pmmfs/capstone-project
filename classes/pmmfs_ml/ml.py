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

class ml:

    def __init__():
        print("Constructor")
    
    def nn_ml(self,period,X_train_scaled,y_train_scaled, X_test_scaled,y_test_scaled,**layers):
        
        nn = Sequential()
        n_layers = layers["n_layers"]
        
        for layer in range(n_layers):
            if layer == 0:
                number_input_features = layers["number_input_features"]
            number_hidden_nodes = layers["l"+str(layer)]["number_hidden_nodes"]
            activation = layers["l"+str(layer)]["activation_function"]
            nn.add(Dense(units=number_hidden_nodes, input_dim=number_input_features, activation=activation))
    
        nn.summary()
    
        # compile model
        nn.compile(loss="mean_squared_error", optimizer="adam", metrics=["mse"])
    
        # train model
        self.model = nn.fit(X_train_scaled, y_train_scaled, epochs=100)
    
        # Plot the train and test loss function
        plt.plot(self.model.history["loss"])
        plt.title(period + " Days - loss_function - 1 hidden layer")
        plt.legend(["loss"])
        plt.show()
    
        y_train_pred = nn.predict(X_train_scaled)
        y_test_pred = nn.predict(X_test_scaled)
    
        print(r2_score(y_train_scaled, y_train_pred))
        print(r2_score(y_test_scaled, y_test_pred))
    
        
    def train_test(self,df,test_size,target,**layers):
        for n in ['30','45','60','75']:
            print(f"\n\n Training and testing - {n} days ahead\n\n")
    
            total_deaths = "_".join(['total_deaths_updated',n])
            total_cases = "_".join(['total_cases_updated',n])
            df_n = df[['population', 'population_density', 'median_age', 'StringencyIndex_updated',\
                             "total_cases_updated", "total_deaths_updated", total_cases, total_deaths]]
            df_n.dropna(inplace=True)
            
            X_df = df_n.drop([total_cases,total_deaths],axis=1)
            print(f"X COLUMNS: {X_df.columns}")
            X = X_df.values
            
            if target == "deaths":
                y = df_n[total_deaths].values
            elif target == "cases":
                y = df_n[total_cases].values
                
            y = y.reshape(-1,1)
    
            # Split dataset into training and testing
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size)
    
            # scale data
            X_scaler = StandardScaler()
            X_scaler.fit(X_train)
    
            y_scaler= StandardScaler()
            y_scaler.fit(y_train)
    
            y_train_scaled=y_scaler.transform(y_train)
            y_test_scaled=y_scaler.transform(y_test)
    
            X_train_scaled = X_scaler.transform(X_train)
            X_test_scaled = X_scaler.transform(X_test)
    
            self.nn_ml(period = n, X_train_scaled = X_train_scaled, 
                  y_train_scaled = y_train_scaled, 
                  X_test_scaled = X_test_scaled, 
                  y_test_scaled = y_test_scaled, 
                  **layers)
    
    def getModel(self):
        return self.model