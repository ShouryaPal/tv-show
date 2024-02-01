import { useState, useEffect } from "react";
import { getShows } from "../utils/handleApi";
import './ShowName.css'

const ShowName = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const data = await getShows();
      setShows(data);
    };
    fetchShows();
  }, []);

  return (
    <div className="show-list">
      <h2 className="show-list-title">Show List</h2>
      {shows.map((show) => (
        <div key={show.show.id} className="show-item">
          <h3 className="show-name">{show.show.name}</h3>
          <p className="show-type">{show.show.type}</p>
          <a href={`/show/${show.show.id}`}>Show Summary</a>
        </div>
      ))}
    </div>
  );
};

export default ShowName;
