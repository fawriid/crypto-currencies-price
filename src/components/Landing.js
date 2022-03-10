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
    const [search, setSearch] = useState("");

    // JUST TO SHOW LOADING****************** you can delete next line
    const [load, setLoad] = useState(false);
    // JUST TO SHOW LOADING******************you can delete delay function
    const delay = () => {
        setTimeout(() => {
            setLoad(true);
        }, 300);
    };

    useEffect(() => {
        const getApi = async () => {
            const data = await getData();
            console.log(data);
            setCoins(data);
        };

        getApi();

        // JUST TO SHOW LOADING****************** you can delete delay function
        delay();
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        // NORMAL CODE****************************************************

        // <div style={{ textAlign: "center" }}>
        //     <input className={styles.searchInput} type='text' value={search} onChange={searchHandler} />
        //     {coins ?
        //         <div className={styles.coinContainer}>
        //             {filteredCoins.map((coin) => <Coin  key={coin.id} data={coin} />)}

        //         </div>
        //         :
        //         <Loading />
        //     }
        // </div>


        //  JUST TO SHOW LOADING *************************************************** you cna delete next part and uncomment pervious section

        <div style={{ textAlign: "center" }}>
            <input
                className={styles.searchInput}
                type="text"
                value={search}
                onChange={searchHandler}
                placeholder="Search..."
            />
            {load ? (
                <div className={styles.coinContainer}>
                    {filteredCoins.map((coin) => (
                        <Coin key={coin.id} data={coin} />
                    ))}
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Landing;
