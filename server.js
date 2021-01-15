const express = require('express');
const app = express(),
bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');


// Allow cross-origin
app.use(cors());


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const PORT = process.env.PORT || 5000;
app.set('port', process.env.PORT);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
