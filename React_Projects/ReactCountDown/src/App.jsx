import React, { useState, useEffect } from 'react';

// Main App component for the countdown timer
const App = () => {
  // State to store the target date for the countdown.
  // Initialized to null, meaning no countdown is active initially.
  const [targetDate, setTargetDate] = useState(null);

  // State to store the remaining time in milliseconds.
  const [remainingTime, setRemainingTime] = useState(0);

  // State to manage the input value for setting a new countdown.
  const [inputMinutes, setInputMinutes] = useState('');

  // Effect hook to update the countdown every second.
  useEffect(() => {
    // If no target date is set, do nothing.
    if (!targetDate) {
      return;
    }

    // Function to calculate the remaining time.
    const calculateRemainingTime = () => {
      const now = new Date().getTime(); // Current time in milliseconds
      console.log("Current time:", now);

      const target = targetDate.getTime(); // Target time in milliseconds
      const difference = target - now; // Difference in milliseconds

      // If the difference is negative, the countdown has ended.
      if (difference <= 0) {
        setRemainingTime(0);
        clearInterval(interval); // Stop the interval when countdown finishes
        return;
      }
      setRemainingTime(difference); // Update remaining time
    };

    // Call once immediately to set the initial time.
    calculateRemainingTime();

    // Set up an interval to update the time every second.
    const interval = setInterval(calculateRemainingTime, 1000);

    // Clean up the interval when the component unmounts or targetDate changes.
    return () => clearInterval(interval);
  }, [targetDate]); // Re-run effect if targetDate changes

  // Function to format the remaining time into HH:MM:SS.
  const formatTime = (timeInMs) => {
    if (timeInMs <= 0) {
      return '00:00:00';
    }

    const totalSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Pad with leading zeros if necessary.
    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Handler for input change.
  const handleInputChange = (e) => {
    setInputMinutes(e.target.value);
  };

  // Handler for setting a new countdown.
  const handleSetCountdown = () => {
    const minutes = parseInt(inputMinutes, 10);
    if (!isNaN(minutes) && minutes > 0) {
      const now = new Date();
      now.setMinutes(now.getMinutes() + minutes); // Add minutes to current time
      setTargetDate(now); // Update target date
      setRemainingTime(now.getTime() - new Date().getTime()); // Recalculate remaining time immediately
      setInputMinutes(''); // Clear input field
    } else {
      // Basic feedback for invalid input.
      console.log("Please enter a valid positive number of minutes.");
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <div>
        {formatTime(remainingTime)}
      </div>

      <div>
        <input
          type="number"
          value={inputMinutes}
          onChange={handleInputChange}
          placeholder="Minutes to count down"
          min="1"
        />
        <button onClick={handleSetCountdown}>
          Set Countdown
        </button>
      </div>

      <p>
        Enter the number of minutes and click "Set Countdown".
      </p>
    </div>
  );
};

export default App;