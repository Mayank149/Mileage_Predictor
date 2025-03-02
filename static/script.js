document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('mileageForm').addEventListener('submit', function(event) {
        event.preventDefault();  // ✅ Stops page reload

        const cylinders = document.getElementById('cylinders').value;
        const displacement = document.getElementById('displacement').value;
        const horsepower = document.getElementById('horsepower').value;
        const weight = document.getElementById('weight').value;
        const acceleration = document.getElementById('acceleration').value;
        const model_year = document.getElementById('model_year').value;
        const origin_2 = document.getElementById('origin_2').value;
        const origin_3 = document.getElementById('origin_3').value;

        const features = [
            parseInt(cylinders),
            parseFloat(displacement),
            parseFloat(horsepower),
            parseFloat(weight),
            parseFloat(acceleration),
            parseInt(model_year),
            parseInt(origin_2),
            parseInt(origin_3),
        ];

        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ features: features })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('result').innerHTML = `<p class="error">Error: ${data.error}</p>`;
            } else {
                document.getElementById('result').innerHTML = `<p>Predicted Mileage: <strong>${data.predicted_mileage} MPG</strong></p>`;
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p class="error">Error: Could not connect to server.</p>`;
            console.error('Error:', error);
        });
    });
});
