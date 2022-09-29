import React, { useMemo } from "react";
// import Data from "../components/data";

function ArticleCard({ blurb, date, id, imageAlt, imageSrc, title }) {
  const articleDate = useMemo(() => {
    if (!date) return "";
    const parsedDate = new Date(date);

    return parsedDate.toDateString();
  }, [date]);

  return (
    <div className="articleCard">
      <div className="articleCard--image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="articleCard--text">
        <h2>{title}</h2>
        <p className="Date">{articleDate}</p>
        <p className="Blurb">{blurb}</p>
        <p className="Link">
          <a href={`/article/${id}`}>Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
