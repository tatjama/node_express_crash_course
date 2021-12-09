const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express(); 

//get all members rest API
app.get('/api/members', (req, res) =>  res.json(members))

//Set Static folder   
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`)});

