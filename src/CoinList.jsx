import React from 'react';
import './coin.css'

export default function CoinList({image,coinName,symbol,price,volume,priceChange,marketCap}) {
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="Crypto" />
                <h1>{coinName}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                  <p className="coin-percentage red">{priceChange.toFixed(2)}%</p>
                ):
                (<p className="coin-percentage green">{priceChange.toFixed(2)}%</p>)
                }

                <p className="coin-marketcap">Mkt Cap: ${marketCap.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

