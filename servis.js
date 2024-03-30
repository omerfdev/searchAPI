const express = require('express');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Arama rotalarını kullan
app.use('/search', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
