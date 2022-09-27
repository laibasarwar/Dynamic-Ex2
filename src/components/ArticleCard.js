import React from "react";

function ArticleCard({ blurb, date, id, imageAlt, imageSrc, title }) {
  return (
    <div className="articleCard">
      <div className="articleCard--image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="articleCard--text">
        <h2>{title}</h2>
        <p className="Date">{date}</p>
        <p className="Blurb">{blurb}</p>
        <p className="Link">
          <a href={`/article/${id}`}>Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
