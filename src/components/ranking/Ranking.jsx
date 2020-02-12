import React, { useEffect, useState } from 'react';
import '../../assets/styles/Ranking.css';
import axios from 'axios';

export const Ranking = () => {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_AXIOS_URL}/api/ranking`)
      .then(res => setRanking(res.data));
  }, [ranking]);

  return (
    <div className="bckg-ranking">
      <div className="take-in-ranking">
        <div className="list-ranking">
          <div className="list-try-ranking title">Pseudo</div>
          {/* <div className="list-try-ranking title">Nom</div> */}
          <div className="list-try-ranking title">Score</div>
        </div>

        {ranking &&
          ranking.map((res, index) => (
            <div key={index} className="list-ranking">
              <div className="list-try-ranking">{res.pseudo}</div>
              {/* <div className="list-try-ranking">{res.lastname}</div> */}
              <div className="list-try-ranking">{res.score}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ranking;
