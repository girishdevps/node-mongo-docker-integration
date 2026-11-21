
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/devops_project')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

// Game Score Schema
const scoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Score = mongoose.model('Score', scoreSchema);

// Serve game frontend
app.use(express.static(path.join(__dirname, 'public')));

// Users API
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Save game score
app.post('/score', async (req, res) => {
    try {
        const score = new Score({ score: req.body.score });
        await score.save();
        res.status(201).json({ message: 'Score saved', score });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Leaderboard
app.get('/leaderboard', async (req, res) => {
    try {
        const scores = await Score.find()
            .sort({ score: -1 })
            .limit(10);

        res.json(scores);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('App Running On port 3000');
});

