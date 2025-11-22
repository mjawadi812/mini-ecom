const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: "Phone", price: 699, description: "A cool smartphone" },
    { id: 2, name: "Headphones", price: 59, description: "Noise-cancelling" },
    { id: 3, name: "Laptop", price: 1299, description: "Lightweight and fast" }
  ];

app.get('/api/products', (req, res) => {
    return res.json(products);
});

// optional mock login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // super simple demo logic
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }
    return res.json({ token: 'fake-jwt-token' });
  });

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    if(!product)
        return res.status(404).json({message: 'Product not found'});

    return res.json(products);
});

app.listen('8080', () => {
    console.log('app is listening on port 8080');
})