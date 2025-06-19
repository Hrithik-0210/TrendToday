import { useState } from "react";
import fallback_img from "../../assets/images/fallback-image.jpg";

const NewsCard = ({ article }) => {
  // console.log(article);

  const {
    image_url,
    title,
    description,
    link,
    pubDate,
    source_name,
    source_icon,
  } = article;

  const [imgSrc, setImgSrc] = useState(
    image_url || source_icon || fallback_img
  );

  const [triedSourceIcon, setTriedSourceIcon] = useState(false);

  function handleImageError() {
    {
      if (!triedSourceIcon && source_icon) {
        setImgSrc(source_icon);
        setTriedSourceIcon(true);
      } else {
        setImgSrc(fallback_img);
      }
    }
  }

  function getTimeAgo(pubDate) {
    const published = new Date(pubDate);
    const now = new Date();
    const diffMiliSeconds = now - published;

    const diffSec = Math.floor(diffMiliSeconds / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);
    if (diffSec < 60) return `${diffSec} sec ago`;
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHr < 24) return `${diffHr} hour${diffHr > 1 ? "s" : ""} ago`;
    return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
  }

  return (
    <div className="news-card-container p-3 rounded-lg h-[21rem] shadow-[1px_0px_22px_-14px_rgba(0,0,0,0.68)] w-full dark:bg-gray-800">
      <div className="image-container rounded-lg overflow-hidden">
        <img
          src={imgSrc}
          alt="news-image"
          className="h-40 w-full object-cover"
          onError={handleImageError}
        />
      </div>
      <div className="source-and-publishtime-container flex items-center justify-between">
        <div className="source-container flex gap-2 items-center p-1 my-1 ">
          <img src={source_icon} alt="source-icon" className="w-4 h-4" />
          <span className="text-xs">{source_name}</span>
        </div>
        <div>
          <span className="text-xs">{getTimeAgo(pubDate)}</span>
        </div>
      </div>

      <div className="title-desc-container font-poppins my-2">
        <h3 className="text-base font-medium line-clamp-2 my-1">{title}</h3>
        <p className="text-xs line-clamp-2">{description}</p>
      </div>
      <div className="read-more-container flex justify-end px-4 font-medium">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-xs "
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
