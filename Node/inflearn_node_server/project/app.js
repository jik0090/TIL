const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log("start, express server on port 3000");
})

console.log('end of server code...')