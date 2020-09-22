#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Sep 13 10:54:27 2020

@author: sami elkhayri

This is a keras tensorflow machine learning library for training and testing neural network model 
"""

# Import the dependencies
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

from datetime import timedelta

import re

# The following function creates a dataframe for each individual iso_code (country code), which contains the 
# following information:
# - date, iso_code, future date

# It returns a dictionary of the country codes dataframes and a list of the iso_codes used as dictionary key values

# Input: 
# df - A list of dataframes

# Returns:
# - A countries dictionary, each element of which contains future date dictionaries, each of which has 
# three columns: data, iso_code, and future date
# - A iso_codes list contain a unique list of all the country codes

# Initialize the future days list 
# future = ["30","45","60","75"]

gr_regex = "^[A-Z]\d"
target_regex = "_\d{2}$"

def get_iso_dicts(df,day):
    
    # Get a lost of the iso_codes
    iso_codes = df["iso_code"].unique()
    
    # Initialize the country codes dictionary
    iso_dicts = {}
    
    # Create a dictionary for the current iso_code
    iso_dicts[day] = {}
        
    # Iterate through the iso_cides
    for code in iso_codes:

        # Create the future date column name
        date_col = "_".join(["date",day])

        # Copy the date and iso_code columns to a new dataframe, df_iso
        df_iso = df[df["iso_code"]==code][["date","iso_code"]]

        # Set the future date column to the current date + the current value of day
        df_iso[date_col] = pd.to_datetime(df_iso["date"]) + timedelta(days=int(day))

        # Set the type of the future date column to str so that it can be used in merge operations
        df_iso[date_col] = df_iso[date_col].astype(str)

        # Add the dataframe to the iso_dicts country dictionaries 
        iso_dicts[day][code] = df_iso
            
    # Return the country dataframes and the country codes        
    return iso_dicts, iso_codes
    

# This function groups all the country-day dataframe by the number of days into the future (30,45,60,75) into
# a list of four dataframes
#
# Input:
# iso_codes - country codes list
# iso_dicts - country-future-dates dictionaries
#
# Returns:
# A list of dataframes, one for each of the future days being considered
def get_cum_day(day, *iso_codes, **iso_dicts):
    
    # Create a new cumulative dataframe
    cum_df = pd.DataFrame()
    
    # For each iso code (country code)
    for code in iso_codes:

        # Append the dataframe corresponding to the country and the future days to the current cumulative dataframe
        cum_df = cum_df.append(iso_dicts[day][code])

    cum_df.reset_index(drop=True)
    
    return cum_df


# This function creates the future total cases and future total deaths columns by left joining the days dataframes
# with the original dataframe on the future date, the current date, and the iso_code columns.

# Input:
# days - list of future date dataframe

# Return:
# m_days - list of dataframes containing future total deaths and future total cases

def get_amended_day(df,day_df,day):
         
    # Merge the current days dataframe with the original dataframe and append it to m_days
    day_df = day_df.merge(df,left_on=["date_" + day,"iso_code"],right_on=["date","iso_code"],how="left",suffixes=["","_" + day])

    # Drop the index of the merged dataframe
    day_df = day_df.reset_index(drop=True)

    # Choose the useful columns from the merged dataframe
    day_df = day_df[["date","iso_code","date_" + day,"total_cases","total_deaths"]]

    # Rename the total_cases and total_deaths case to identify to which future period they belong
    day_df.rename(columns={"total_cases":"total_cases_" + day,
                       "total_deaths":"total_deaths_" + day},inplace=True)
        
    return day_df

# This function creates the list of day dataframes, one for each of the future periods under consideration. 
# The dataframes contain the following columns: date, iso_code, future_date, future total cases, future total deaths

def get_day_df(df,day):
    
    # Get the country-days dicts and the country iso codes
    iso_dicts, iso_codes = get_iso_dicts(df,day)
    
    # Get the list of days dataframes for each of the future period lengths
    day_df = get_cum_day(day, *iso_codes, **iso_dicts)
        
    # Append to the list the future total deaths and the future total cases
    day_df = get_amended_day(df, day_df, day)

    return day_df


