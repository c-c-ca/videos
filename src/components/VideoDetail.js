import React from 'react';

const videoDetail = ({ video }) => {
  const { title, description } = video.snippet;
  return (
    <div>
      <div className="ui embed">
        {
          <iframe
            title="video player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        }
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default videoDetail;
