const express = require('express')
const app = express()
const port = 3666

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send(`${Date.now()}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})