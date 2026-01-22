const express=require('express');
const dotenv = require('dotenv');
dotenv.config();

const app =express();
const PORT =process.env.PORT


app.get('/', (req, res) => {
  res.send('HelloOOOOO!')
})
app.listen(3000,()=>(console.log('your app is runing in port 3000')))