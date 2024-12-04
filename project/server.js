const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running...'));

app.get('/fleet', (req, res) => res.json({ pages: ['Luxury', 'Sports', 'Sports Classics', 'XL'] }));


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
