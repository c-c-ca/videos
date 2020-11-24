import React from 'react';
import './VideoItem.css';

const videoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title } = video.snippet;
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div>
          <a className="header">{title}</a>
        </div>
      </div>
    </div>
  );
};

export default videoItem;
