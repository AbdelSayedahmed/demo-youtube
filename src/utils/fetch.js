const apiTokens = [
  import.meta.env.ABDEL_API_KEY,
  import.meta.env.ARI_API_KEY,
  import.meta.env.SHANEL_API_KEY,
];
let currentTokenIndex = 0;

function getNextToken() {
  currentTokenIndex = (currentTokenIndex + 1) % apiTokens.length;
  return apiTokens[currentTokenIndex];
}

export function getRandomVideos() {
  const apiKey = getNextToken();
  const response = fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&chart=mostPopular&maxResults=10`
  );
  const data = response.json();
  const videos = data.items.map((item) => {
    return {
      title: item.snippet.title,
      videoId: item.id,
      thumbnail: item.snippet.thumbnails.default.url,
    };
  });
  return videos;
}

export function searchVideos(query) {
  const apiKey = getNextToken();
  const response = fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&maxResults=10`
  );
  const data = response.json();
  const videos = data.items.map((item) => {
    return {
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.standard.url,
    };
  });
  return videos;
}

// Function to show a specific video
export function showVideo(videoId) {
  // You can embed the video using an iframe or redirect the user to the YouTube page
  // Here's an example of embedding the video using an iframe
  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.allowFullscreen = true;
  document.body.appendChild(iframe);
}
