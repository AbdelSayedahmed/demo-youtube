const apiKey = import.meta.env.VITE_API_KEY;

// Function to show 12 random videos on load
export function getRandomVideos() {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&chart=mostPopular&maxResults=15`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch random videos");
      }
      return response.json();
    })
    .then((data) => {
      return data.items
        .map((item) => ({
          title: item.snippet.title,
          videoId: item.id,
          thumbnail: item.snippet.thumbnails.standard.url,
          description: item.snippet.description,
          kind: item.id.kind,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
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

// Function to show videos on search
export function searchVideos(query) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&maxResults=32`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch random videos");
      }
      return response.json();
    })
    .then((data) => {
      return data.items
        .map((item) => ({
          title: item.snippet.title,
          videoId: item.id.videoId,
          thumbnail: item.snippet.thumbnails.high.url,
          description: item.snippet.description,
          kind: item.id.kind,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch random videos");
      }
      return response.json();
    })
    .then((data) => {
      if (data.items.length === 0) {
        throw new Error("Video not found");
      }
      const video = data.items[0];
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        videoId: video.id,
        statistics: video.statistics,
        publishedAt: video.snippet.publishedAt,
        channelTitle: video.snippet.channelTitle,
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch random videos");
      }
      return response.json();
    })
    .then((data) => {
      return data.items.map((item) => ({
        title: item.snippet.title,
        videoId: item.id,
        thumbnail: item.snippet.thumbnails.standard.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
      }));
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

// Function to calculate how much time has elapsed since video creation
export function dateFormatter(timestamp) {
  const inputDate = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now - inputDate) / 1000);

  const seconds = diffInSeconds;
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / (3600 * 24));
  const weeks = Math.floor(diffInSeconds / (3600 * 24 * 7));
  const months = Math.floor(diffInSeconds / (3600 * 24 * 30.44));
  const years = Math.floor(diffInSeconds / (3600 * 24 * 365.25));

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}
