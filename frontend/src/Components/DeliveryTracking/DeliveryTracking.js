import React, { useState } from 'react';
import axios from "axios";
import "./DeliveryTracking.css";

const DeliveryTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [deliveryData, setDeliveryData] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!trackingId) {
      setError("Please enter a Tracking ID.");
      return;
    }
    setError("");

    try {
      // Correct API Endpoint
      const response = await axios.get`(http://localhost:5000/Delivery/${trackingId})`;
      setDeliveryData(response.data);
    } catch (err) {
      setError("Tracking ID not found or delivery details unavailable.");
      setDeliveryData(null);
    }
  };

  return (
    <div className="container">
        
      <h2 className="heading">Track Your Delivery</h2>
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        className="input"
      />
      <button onClick={handleTrack} className="button">Track</button>

      {error && <p className="error">{error}</p>}

      {deliveryData && (
        <div className="result">
          <h3>Delivery Status:  Reached to warehouse {deliveryData.status}</h3>
          <p><strong>Current Location:  Colombo </strong> {deliveryData.currentLocation}</p>
          <p><strong>Estimated Delivery:  05/04/2025</strong> {deliveryData.estimatedDate}</p>
          <p><strong>Delivery Partner ID:  7541A452 </strong> {deliveryData.deliveryID}</p>
          <p><strong>Delivery Partner:  A.P.Samankumara</strong> {deliveryData.DeliveryPartner}</p>
          <p><strong>Delivery Vehicle:  BXD-3324 </strong> {deliveryData.DeliveryVehicle}</p>
          <br />
          <button type="button" onClick={() => window.history.back()} className="back-button">Back</button>
        </div>
      )}
    </div>
  );
};

export default DeliveryTracking;