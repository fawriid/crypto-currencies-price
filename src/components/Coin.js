import React from 'react';

// styles
import styles from './Coin.module.css'

const Coin = (props) => {

    const {name, symbol, current_price,price_change_percentage_24h,market_cap , image} = props.data


    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
                <span className={styles.name}>{name}</span>
                <span className={styles.symbol}>{symbol.toUpperCase()}</span>
                <span className={styles.currentPrice}>
                    $ {current_price.toLocaleString()}
                </span>
                <span className={price_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}>
                    {price_change_percentage_24h} %
                </span>
                <span className={styles.coinMarketCap}>$ {market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;