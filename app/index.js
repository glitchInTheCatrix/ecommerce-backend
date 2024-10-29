const express = require('express');
const authRoutes = require('./routes/authRoutes')
// const connectDb=require('')
const app = express();
app.use(express.json());
app.use('/api/auth',authRoutes)
app.get('/', (req, res) => {
  res.send('Hello from Express.js on Vercel!');
});

app.listen(3001,()=>console.log('server listening port 3001'))
module.exports = app;
