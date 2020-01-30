import React, { useEffect, useState } from 'react';
import '../../assets/styles/Ranking.css';
import axios from 'axios';

export const Ranking = () => {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/').then(res => setRanking(res.data));
  }, []);

  return (
    <div className="bckg-ranking">
      <div className="take-in-ranking">
        <div className="list-ranking">
          <div className="list-try-ranking title">Prénom</div>
          <div className="list-try-ranking title">Nom</div>
          <div className="list-try-ranking title">Score</div>
        </div>

        {ranking &&
          ranking.map((res, index) => (
            <div key={index} className="list-ranking">
              <div className="list-try-ranking">{res.firstname}</div>
              <div className="list-try-ranking">{res.lastname}</div>
              <div className="list-try-ranking">{res.score}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ranking;
