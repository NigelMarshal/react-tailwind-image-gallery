import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="rounded max-w-sm overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-indigo-700 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag,index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
