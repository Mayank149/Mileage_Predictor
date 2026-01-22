# Car Mileage Predictor

A machine learning project that predicts car mileage (MPG) based on vehicle specifications using linear regression.

---

## Overview

This project uses the Auto MPG dataset to build a regression model that estimates fuel efficiency from features such as engine displacement, horsepower, weight, acceleration, model year, and origin.

The goal of this project is to understand the complete regression pipeline including data preprocessing, feature scaling, model training, evaluation, and model persistence.

---

## Dataset

- Source: Auto MPG Dataset (UCI / Kaggle)
- Records: 398 cars
- Target variable: MPG (Miles Per Gallon)

### Features Used
- Cylinders
- Displacement
- Horsepower
- Weight
- Acceleration
- Model Year
- Origin (one-hot encoded)

The `Car Name` column is removed as it is not predictive.

---

## Preprocessing Steps

- Converted non-numeric values in `Horsepower` to missing values
- Handled missing values using mean imputation
- One-hot encoded the `Origin` feature
- Scaled numerical features using MinMaxScaler
- Split data into training and testing sets (80/20)

---

## Model

- Algorithm: Linear Regression
- Library: scikit-learn

The model is trained on the processed training data and evaluated on a held-out test set.

---

## Evaluation Metrics

The following regression metrics are used:
- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- R² Score

These metrics help assess prediction error and overall model performance.

