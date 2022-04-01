import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowCoins from "./ShowCoins";

const FetchCoin = () => {
  const url = "https://api.coinstats.app/public/v1/coins?skip=0";

  const [coinList, setCoinList] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get(url);
    const data = res.data.coins;

    setCoinList(data);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(() => false);
    console.log(isLoading);
  }, []);

  const filteredCoins = coinList.filter((elem) => {
    return elem.name.toLowerCase().includes(searchData.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-center pt-3">Crypto App</h1>
      <div className="input-value text-center py-4">
        <input
          type="text"
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Search the Coin Here"
          className="text-center input"
          size={40}
        />
      </div>
      {isLoading ? (
        <p className="text-white">The Data is Loading</p>
      ) : (
        <div>
          {console.log(isLoading)}
          <div className="row row-cols-1 row-cols-md-4 px-4 py-3">
            {filteredCoins.map((coins) => (
              <ShowCoins coins={coins} key={coins.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchCoin;
