const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {

  app.use('/build', express.static(path.join(__dirname, '../build')));


  app.get('/', (req, res) => {
     return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });
}

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Server listening on port: 3000');
});

module.exports = app;