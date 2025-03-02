from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

# Load the saved model and scaler
model = joblib.load("car_mileage_model.pkl")
scaler = joblib.load("scaler.pkl")

# Define feature names
feature_names = ["Cylinders", "Displacement", "Horsepower", "Weight", 
                 "Acceleration", "Model Year", "Origin_2", "Origin_3"]

# Define which columns were scaled
scaled_features = ["Displacement", "Horsepower", "Weight", "Acceleration"]

# **Serve the HTML Page**
@app.route("/")
def home():
    return render_template("index.html")  # Loads the HTML file

# **API Route for Predictions**
@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON data
        data = request.json
        features = np.array(data["features"]).reshape(1, -1)

        # Convert input to DataFrame with column names
        features_df = pd.DataFrame(features, columns=feature_names)

        # Scale only the necessary columns
        features_df[scaled_features] = scaler.transform(features_df[scaled_features])

        # Convert back to NumPy array for prediction
        final_features = features_df.values

        # Make prediction
        prediction = model.predict(final_features)[0]

        return jsonify({"predicted_mileage": round(prediction, 2)})

    except Exception as e:
        return jsonify({"error": str(e)})

# **Run the Flask app**
if __name__ == "__main__":
    app.run(debug=True)
