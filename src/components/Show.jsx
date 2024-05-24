import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { decoder, getVideoDetails, searchVideos } from "../utils/fetch";
import ShowListing from "./ShowListing.jsx";
import Comments from "./Comments.jsx";
import "./Show.css";

export default function Show({ setShowCategory }) {
  const { id: videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    async function fetchVideo() {
      setLoading(true);
      setError(null);
      setShowCategory(false);
      try {
        const videoDetails = await getVideoDetails(videoId);
        setVideo(videoDetails);
        if (videoDetails && videoDetails.channelTitle) {
          searchVideos(videoDetails.channelTitle).then((data) => {
            setRelated(data);
          });
        }
      } catch (err) {
        setError("Failed to fetch video details.");
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [videoId, setShowCategory]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!video) return <div>No video found.</div>;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="main-container">
      <div className="video-container">
        <h1>{decoder(video.title)}</h1>
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={decoder(video.title)}
          ></iframe>
        </div>
        <div className="video-stats">
          <span>
            <strong>Views:</strong> {video.statistics.viewCount}
          </span>
          <span>
            <strong>Likes:</strong> {video.statistics.likeCount}
          </span>
          <br />
          <span>
            <strong>Published on:</strong>{" "}
            {new Date(video.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <p>
          <strong>Description</strong>
          <br />
          {showFullDescription
            ? video.description
            : `${video.description.slice(0, 100)}...`}
          <button
            onClick={toggleDescription}
            className="toggle-description-btn"
          >
            {showFullDescription ? "Show Less" : "Show More..."}
          </button>
        </p>
        <Comments />
      </div>
      <div className="related-content-container">
        {related.map((item, i) => (
          <Link key={i} to={`/${item.videoId}`}>
            <ShowListing
              title={item.title}
              thumbnail={item.thumbnail}
              channelTitle={item.channelTitle}
              publishedAt={item.publishedAt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
