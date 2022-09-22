import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CoinList from './CoinList';

function App() {
  const url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  const getCoins = async () =>{
    await axios.get(url).then(res => {
      setCoins(res.data)
      console.log(res.data);
    }).catch(err=> console.log(err));
  }
  useEffect(() => {
    getCoins();
  }, [])
  
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin=>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  console.log("THis",filteredCoins);
  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form className='searchForm'>
          <input type="text" className="coin-input" placeholder='Search...' onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin=>{
        return (<CoinList 
                key={coin.id} 
                coinName={coin.name} 
                image={coin.image} 
                price={coin.current_price} 
                symbol={coin.symbol} 
                volume={coin.market_cap} 
                priceChange = {coin.price_change_percentage_24h}
                marketCap = {coin.total_volume}
                />
      )})}

    </div>
  );
}

export default App;
