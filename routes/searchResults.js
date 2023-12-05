const express = require('express');
const axios = require('axios');
const url = require('url');
const router = express.Router(); 

router.get('/:query', async (req, res) => { 
    try{
        // add api key and query strings
        const params = new URLSearchParams({ 
          access_token: process.env.API_KEY,
          ...url.parse(req.url, true).query,
        })
        const query = req.params.query;
        const results = await axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`);
        res.status(200).json(results.data);
      }
      catch(err) {
        res.status(500).json({ message: err.message });
      }
    });

module.exports = router;