import React, { useEffect, useState } from "react";

// components
import Coin from "./Coin";
import Loading from "./Loading";

// api
import { getData } from "../services/api";

// styles
import styles from  './Landing.module.css'

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getApi = async () => {
            const data = await getData();
            console.log(data);
            setCoins(data);
        };

        getApi();
    }, []);


    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.includes(search))

    return (
        <div style={{ textAlign: "center" }}>
            <input type='text' value={search} onChange={searchHandler} />
            {coins ?
                <div className={styles.coinContainer}>
                    {filteredCoins.map((coin) => <Coin  key={coin.id} data={coin} />)}
                
                </div>
                :
                <Loading />
            }
        </div>
    );
};

export default Landing;
