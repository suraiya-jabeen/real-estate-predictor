import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { FaBath, FaBed, FaHome, FaLocationArrow, FaTag } from 'react-icons/fa';
import './App.css'; // Adjust the path to your CSS file if needed
import PredictionChart from './components/PredictionChart'; // Import PredictionChart component
import { predictPrice } from './neuralNetwork';

const App = () => {
  const [userInput, setUserInput] = useState({
    area: '',
    bedrooms: '',
    bathrooms: '',
    location: '',
    age: '',
    price: '',
  });

  const [predictedPrice, setPredictedPrice] = useState(null);
  const [predictions, setPredictions] = useState([]); // State to store predictions
  const [actualPrices, setActualPrices] = useState([]); // State to store actual prices

  const handleInputChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    const { area, bedrooms, bathrooms, location, age, price } = userInput;

    if (
      !area ||
      !bedrooms ||
      !bathrooms ||
      !location ||
      !age ||
      !price
    ) {
      alert('Please fill all fields!');
      return;
    }

    // Validate area (positive number)
    if (isNaN(area) || area <= 0) {
      alert("Please enter a valid positive number for area.");
      return;
    }

    if (isNaN(bedrooms) || bedrooms <= 0) {
      alert("Please enter a valid positive number for number of bedrooms.");
      return;
    }

    if (isNaN(bathrooms) || bathrooms <= 0) {
      alert("Please enter a valid positive number for number of bathrooms.");
      return;
    }

    if (!location.trim()) {
      alert("Please enter a valid location.");
      return;
    }

    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid positive number for the age of the property.");
      return;
    }

    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid positive number for the price.");
      return;
    }

    // Prepare input data for prediction
    const input = {
      area: parseFloat(area),
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms),
      location: location,
      age: parseInt(age),
      price: parseFloat(price),
    };

    // Predict the price
    const predicted = predictPrice(input);
    setPredictedPrice(predicted);

    // Store predictions and actual prices for the chart
    setPredictions((prev) => [...prev, predicted]);
    setActualPrices((prev) => [...prev, parseFloat(price)]); // Assuming 'price' is the actual price entered

    // Reset form
    setUserInput({
      area: '',
      bedrooms: '',
      bathrooms: '',
      location: '',
      age: '',
      price: '',
    });
  };

  return (
    <div className="container" style={{ background: '#f9e8f8', padding: '30px', borderRadius: '10px' }}>
      <h1 className="text-center mb-5" style={{ color: '#34495e', fontFamily: 'Arial, sans-serif' }}>Real Estate Price Prediction</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label>Area <FaHome /></label>
          <input
            type="number"
            className="form-control"
            name="area"
            value={userInput.area}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Bedrooms <FaBed /></label>
          <input
            type="number"
            className="form-control"
            name="bedrooms"
            value={userInput.bedrooms}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Bathrooms <FaBath /></label>
          <input
            type="number"
            className="form-control"
            name="bathrooms"
            value={userInput.bathrooms}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Location <FaLocationArrow /></label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={userInput.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Age <FaTag /></label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={userInput.age}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Price <FaTag /></label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={userInput.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-pink w-50 mt-4" style={{ padding: '12px', fontWeight: 'bold' }}>
            Predict Price
          </button>

          {/* Predicted Price section */}
          {predictedPrice && (
            <div
              className="p-3 ml-3 text-center"
              style={{
                backgroundColor: '#918cd7',
                borderRadius: '8px',
                fontSize: '1.0rem',
                fontWeight: 'bold',
                color: '#ffffff',
                width: '40%',
              }}
            >
              ${predictedPrice.toFixed(2)}
            </div>
          )}
        </div>
      </form>

      {/* Display PredictionChart component */}
      {predictions.length > 0 && (
        <PredictionChart predictions={predictions} actualPrices={actualPrices} />
      )}
    </div>
  );
};

export default App;
