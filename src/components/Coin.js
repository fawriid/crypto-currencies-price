import React from 'react';

const Coin = (props) => {

    const {name, symbol, current_price,price_change_percentage_24h,market_cap , image} = props.data


    return (
        <div>
            <img src={image} alt={name} />
            <div>
                <span>{name}</span>
                <span>{symbol.toUpperCase()}</span>
                <span>$ {current_price.toLocaleString()}</span>
                <span>{price_change_percentage_24h} %</span>
                <span>$ {market_cap.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Coin;