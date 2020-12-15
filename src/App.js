import React, { useState } from "react";
import "./styles.css";

var stocksDictionary = {
  "Blue Chip": ["TCS", "HDFC Bank", "Infosys", "ITC", "L&T"],
  Dividend: ["Power Grid", "NTPC", "Coal India", "ONGC", "IOCL"],
  Growth: ["Relience", "Bajaj Finance", "Banaj Finserv", "Naukari"],
  "My Other recommondations": ["Relaxo", "Bata", "Crompton", "VIP Bags"]
};

var categories = Object.keys(stocksDictionary);

export default function App() {
  var [stocks, setStocks] = useState("");

  function onClickCategory(category) {
    var stocks = stocksDictionary[category];
    console.log(stocks);
    setStocks(stocks);
  }
  return (
    <div className="App">
      <h1>Where will you invest after getting job by attending level 1?</h1>
      <h2>Here I present my favourite stocks!!</h2>

      {categories.map((category) => {
        return (
          <button
            onClick={() => onClickCategory(category)}
            style={{ margin: "2rem" }}
          >
            {category}
          </button>
        );
      })}
      <hr />
      <ul>
        {stocks &&
          stocks.map((stock) => {
            return <li> {stock} </li>;
          })}
      </ul>
    </div>
  );
}
