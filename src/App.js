import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("dogs");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rounded max-w-sm overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-red-500 text-xl mb-2">Photo by JD</div>
        <ul>
          <li>
            <strong>Views: 6000</strong>
          </li>
          <li>
            <strong>Downloads: 300</strong>
          </li>
          <li>
            <strong>Likes: 10</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
