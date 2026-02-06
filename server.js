const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(express.static('./public'))
app.use(cookieParser());


app.listen(3000, () => {
    console.log('Listening on port 3000')
})
