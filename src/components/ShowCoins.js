import React from "react";

const ShowCoins = ({ coins }) => {
  return (
    <div className="col mb-4">
      <div className="card text-center ">
        <img
          src={coins.icon}
          className="card-img-top py-4 mx-auto"
          alt="..."
          style={{ width: "86px" }}
        />
        <div className="card-body ">
          <h3 className="card-title">{coins.name}</h3>
          <p className="card-text">Price: $ {coins.price}</p>
          <p className="card-text pb-3">Symbol : {coins.symbol}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCoins;
