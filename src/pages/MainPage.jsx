import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar.jsx';

const MainPage = () => {
  const { tickers } = useSelector((state) => state.tickers);
  return (
    <>
      <NavBar />
      <main>
        <div>
          <Container />
          <Container>
            <Grid container spacing={4}>
              {tickers.map((ticker) => (
                <Grid item key={ticker.symbol} xs={12} sm={6} md={4}>
                  <Card variant="outlined">
                    <CardHeader
                      title={ticker.symbol}
                      subheader={`${ticker.price}$`}
                    />
                    <CardContent />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
};

export default MainPage;
