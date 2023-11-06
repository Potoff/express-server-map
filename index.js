const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log('Le serveur Express est en cours d\'exécution sur le port ' +  PORT);
});
