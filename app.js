
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json());
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/devops_project')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.get('/', (req, res) => {
    res.send("Node.js App Running");
})

app.listen(3000, () => {
    console.log('App Running On port 3000');
});

