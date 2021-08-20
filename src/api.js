const API_KEY = '2d4f83e4dec4abd61adc8138b775853f144146a20dc4b330465d251fa4c6c517';

const api = () => {
  const socket = new WebSocket(
    `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`,
  );

  const sendMessage = (message) => {
    const stringifiedMessage = JSON.stringify(message);

    socket.send(stringifiedMessage);
  };

  socket.onopen = () => {
    sendMessage(
      {
        action: 'SubAdd',
        subs: ['5~CCCAGG~BTC~USD'],
      },
    );
  };

  socket.onmessage = () => {
  };
};

export default api;
