const express = require('express');
const cors = require('cors');
const internRoutes = require('./routes/intern');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json()); 

app.use('/api', internRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Intern Dashboard Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});