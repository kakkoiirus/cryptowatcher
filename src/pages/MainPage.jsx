import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardHeader } from '@material-ui/core';
import NavBar from '../components/NavBar';

const tickers = [
  {
    name: 'BTC',
    price: '50200'
  },
  {
    name: 'ETH',
    price: '4200'
  },
  {
    name: 'XMR',
    price: '1200'
  },
  {
    name: 'DOGE',
    price: '1.4'
  },
  {
    name: 'USDT',
    price: '1'
  }
];

const MainPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <div>
          <Container>
          </Container>
          <Container>
            <Grid container spacing={4}>
              {tickers.map((ticker, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card variant="outlined">
                    <CardHeader
                      title={ticker.name}
                      subheader={`${ticker.price}$`}
                    />
                    <CardContent>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </>
  )
}

export default MainPage;
