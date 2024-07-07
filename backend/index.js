const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const cafes = [
  { id: 1, name: 'Cafe A', address: '123 Main St' },
  { id: 2, name: 'Cafe B', address: '456 Broadway' },
  { id: 3, name: 'Cafe C', address: '789 Maple Ave' },
];

app.get('/api/cafes', (req, res) => {
  res.json(cafes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
