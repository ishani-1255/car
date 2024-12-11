function fireworkBurst() {
    // Generate a burst from a random position
    const origin = {
      x: Math.random(), // Random x-coordinate
      y: Math.random() * 0.5 // Random y-coordinate, only upper half
    };

    confetti({
      particleCount: 100,
      startVelocity: 60,
      spread: 360,
      ticks: 100,
      origin: origin,
      colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF69B4"]
    });
  }

  // Trigger multiple fireworks bursts
  function startFireworks() {
    const duration = 5000; // 5 seconds of fireworks
    const endTime = Date.now() + duration;

    (function launchFireworks() {
      fireworkBurst(); // Launch a single burst
      if (Date.now() < endTime) {
        setTimeout(launchFireworks, 200); // Launch bursts every 300ms
      }
    })();
  }

  // Start the fireworks on page load
  window.addEventListener("load", startFireworks);

  // Set the date and time of the event
  const eventDate = new Date("2024-12-14T10:00:00").getTime(); // Replace with your event date and time

  function updateCountdown() {
    const now = new Date().getTime(); // Get the current date and time
    const timeLeft = eventDate - now; // Calculate the time difference

    if (timeLeft < 0) {
        // Event has passed
        document.getElementById("timer").innerHTML = "Event Started!";
        clearInterval(interval); // Stop the countdown
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML =
        `<div class="timer-inner">
            <span class="time-unit">${days}<span class="time-label">D</span></span>
            <span class="time-unit">${hours}<span class="time-label">H</span></span>
            <span class="time-unit">${minutes}<span class="time-label">M</span></span>
            <span class="time-unit">${seconds}<span class="time-label">S</span></span>
        </div>`;
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();


 


  window.onload = function() {
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
        // Randomize starting position (both horizontal and vertical)
        let randomTop = Math.random() * 100; // Random top position (percentage)
        let randomLeft = Math.random() * 120 - 20; // Start from -20% to 100% to ensure full entry

        // Randomize cloud size (between 100px and 300px)
        let randomWidth = Math.random() * 200 + 100; 

        // Vary animation parameters more dynamically
        let randomDelay = Math.random() * 3; // Reduced delay range
        let randomDuration = Math.random() * 5 + 15; // Longer duration (15 to 20 seconds)
        let randomSpeed = Math.random() * 0.5 + 0.5; // Vary speed between 0.5 and 1

        // Apply styles immediately
        cloud.style.cssText = `
            position: absolute;
            top: ${randomTop}%;
            left: ${randomLeft}%`;

        // Create a custom keyframe animation for each cloud
        let animationName = `cloudMove${index}`;
        let styleSheet = document.styleSheets[0];
        let keyframes = `
            @keyframes ${animationName} {
                from { transform: translateX(-100%); opacity: 0; }
                25% { opacity: 0.7; }
                to { transform: translateX(100vw); opacity: 1; }
            }
        `;
        
        // Add the keyframes rule
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        // Apply the animation
        cloud.style.animation = `${animationName} ${randomDuration}s linear ${randomDelay}s infinite`;
    });
};
  
function toggleDetails(element) {
  // Find the .event-details inside the clicked .event-title
  var details = element.querySelector('.event-details');
  
  // Toggle visibility by changing display property
  if (details.style.display === "none" || details.style.display === "") {
      // Show the details
      details.style.display = "block";
  } else {
      // Hide the details
      details.style.display = "none";
  }
}
