const apiKey = import.meta.env.VITE_API_KEY;

// Function to show 12 random videos on load
export function getRandomVideos() {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&chart=mostPopular&maxResults=15`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.items
        .map((item) => ({
          title: item.snippet.title,
          videoId: item.id,
          thumbnail: item.snippet.thumbnails.standard.url,
          description: item.snippet.description,
          kind: item.id.kind,
        }))
        .filter(
          (item) => item.kind !== "youtube#channel" && item.description !== ""
        );
    })
    .catch((error) => {
      console.error("Error fetching random videos:", error);
      return [];
    });
}

// Function to show 12 videos on search
export function searchVideos(query) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&maxResults=32`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.items
        .map((item) => ({
          title: item.snippet.title,
          videoId: item.id.videoId,
          thumbnail: item.snippet.thumbnails.high.url,
          description: item.snippet.description,
          kind: item.id.kind,
        }))
        .filter(
          (item) => item.kind !== "youtube#channel" && item.description !== ""
        );
    })
    .catch((error) => {
      console.error("Error searching videos:", error);
      return [];
    });
}

// Function to show a specific video
export function getVideoDetails(videoId) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,contentDetails,statistics&id=${videoId}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.items.length === 0) {
        throw new Error("Video not found");
      }
      const video = data.items[0];
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail:
          video.snippet.thumbnails?.high?.url ||
          video.snippet.thumbnails?.default?.url,
        videoId: video.id,
        statistics: video.statistics,
        publishedAt: video.snippet.publishedAt,
      };
    })
    .catch((error) => {
      console.error("Error fetching video details:", error);
      return null;
    });
}

// Function to get categorized videos without searching
export function getCategoryVideos(category, count) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&chart=mostPopular&videoCategoryId=${category}&maxResults=${count}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.items
        .map((item) => ({
          title: item.snippet.title,
          videoId: item.id,
          thumbnail: item.snippet.thumbnails.standard.url,
        }))
    })
    .catch((error) => {
      console.error("Error fetching categorized videos:", error);
      return [];
    });
}

// Function to decode HTML entities
export function decoder(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}
