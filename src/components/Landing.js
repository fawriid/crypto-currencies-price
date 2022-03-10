import React, { useEffect, useState } from "react";

// components
import Coin from "./Coin";
import Loading from "./Loading";

// api
import { getData } from "../services/api";

const Landing = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const data = await getData();
            console.log(data);
            setCoins(data);
        };

        getApi();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            {coins ?
                coins.map((coin) => <Coin  key={coin.id} data={coin} />)
                :
                <Loading />
            }
        </div>
    );
};

export default Landing;
