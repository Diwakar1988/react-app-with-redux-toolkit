import React from 'react';
import { useGetCoinsQuery } from '../../services/cryptoApi';
import { Spinner, Grid, GridItem } from "@chakra-ui/react";
import CryptoCard from '../../components/CryptoCard';
const Home = () => {
    const {isLoading, data} = useGetCoinsQuery()
    return (
        <>
            {isLoading ? <Spinner /> : <>
                <Grid gridTemplateColumns={'repeat(auto-fit, minmax(200px, 1fr))'}>
                    {data.data.coins.map(coin => (
                        <GridItem key={coin.uuid}>
                            <CryptoCard coin={coin}/>
                        </GridItem>
                    ))}
                </Grid>
            </>}
        </>
    )
}
export default Home