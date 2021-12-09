const express = require('express');
const path = require('path');

const app = express();

/*Static server - Create server for static pages
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    })*/
    
//Set Static folder   
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`)});

