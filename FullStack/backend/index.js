const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crudApp', {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String
});

const User = mongoose.model('User', userSchema);

// Create
app.post('/users', async (req, res) => {
    const { name, email, address } = req.body;
    User.create({ name, email, address })
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Read
app.get('/users', async (req, res) => {
    const users= await User.find()
    res.status(200).json(users);
});

// Update
app.put('/users/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(201).json(updated);
});

// Delete
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

app.listen(port, () => console.log(`Server running on http://localhost::> ${port}`));
