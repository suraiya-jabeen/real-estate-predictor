import { NeuralNetwork } from 'brain.js';

// Import the preprocessed data
import { processedData } from './data/real-estate-data'; // Ensure this data has 7 inputs for each entry

// Create the neural network
const net = new NeuralNetwork();

// Train the network with data
net.train(processedData);

// Function to normalize data (for demonstration purposes)
const normalize = (value) => {
  return value / 10000; // Adjust based on your data range
};

// Function to encode location (for demonstration purposes)
const encodeLocation = (location) => {
  const locations = ['Downtown', 'Suburban', 'Rural']; // Define your locations
  const encoded = locations.map(loc => loc === location ? 1 : 0); // One-hot encoding
  return encoded;
};

// Function to predict the price based on the input data
const predictPrice = (inputData) => {
  // Normalize and prepare the input data with 7 values (4 normalized + 3 one-hot location)
  const normalizedInput = [
    normalize(inputData.area),               // Area
    normalize(inputData.bedrooms),            // Bedrooms
    normalize(inputData.bathrooms),           // Bathrooms
    ...encodeLocation(inputData.location),    // Location (3 values for one-hot encoding)
    normalize(inputData.age),                 // Age
  ];

  // Debugging: Log the input length to ensure it matches the expected size (7)
  console.log('Normalized Input:', normalizedInput);
  console.log('Input Length:', normalizedInput.length);

  if (normalizedInput.length !== 7) {
    console.error('Expected input length of 7, but got:', normalizedInput.length);
    return;
  }

  // Run the neural network to predict the price
  const prediction = net.run(normalizedInput);
  return prediction[0];  // Return the predicted price
};

// Optionally, you can save and load the trained model to/from localStorage
const saveModel = () => {
  localStorage.setItem('real-estate-model', JSON.stringify(net.toJSON()));
};

const loadModel = () => {
  const savedModel = localStorage.getItem('real-estate-model');
  if (savedModel) {
    net.fromJSON(JSON.parse(savedModel));
  }
};

export { loadModel, net, predictPrice, saveModel };
