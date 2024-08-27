const express = require('express');
const path = require('path');
const app = express();
const port = 3006;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.json({ ip });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const config = {
  maxBitrate: 5000, // Adjust based on the average available bandwidth
  maxFramerate: 30 // Adjust based on the performance of the device
};

  // Check if video is loaded and ready for synchronization
  video2.addEventListener('loadeddata', () => {
    // Ensure audio is in sync by setting the same currentTime for audio and video
    if (video2.audioTracks && video2.audioTracks.length > 0) {
      video2.audioTracks[0].currentTime = video2.currentTime;
    }
  });
};

document.getElementById('play2').onclick = function() {
  setTimeout(() => {
    player2 = initializePlayer(
      player2,
      document.getElementById('video2'),
      "https://pull.tripledg.live/A2A/Stream1-Pri.sdp?wsSecret=776e446a99937810f89e688a7964ec4b&wsTime=1724737792",
      'play2'
    );
  }, 100); // Delay in milliseconds
};

  // Sync audio and video by adjusting playbackRate
  document.getElementById('video2').playbackRate = 1.02; // Slight speed adjustment
};

videoElement.addEventListener('play', () => {
  if (videoElement.audioTracks && videoElement.audioTracks.length > 0) {
    videoElement.audioTracks[0].currentTime = videoElement.currentTime;
  }
});
