const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/userlogin', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
    .once('open', () => {
        console.log('Connected to userlogin database');
    })
    .on('error', (error) => {
        console.log('Error connecting ...', error);
    });

app.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        console.log(`Entered username = ${username} and entered password = ${password}`);

        if (!username || !password) {
            return res.send('Username or password cannot be empty');
        }

        const user = await mongoose.connection.db.collection('users').findOne({ username: username });

        if (!user) {
            console.log('Information does not match');
            return res.send('Information does not match');
        }

        if (user.password === password) {
            console.log('Successfully logged in');
            return res.send(`Successfully logged in! Welcome, ${username}`);
        } else {
            console.log('Password does not match');
            return res.send('Password does not match');
        }
    } catch (error) {
        console.error('Invalid information!', error);
        return res.status(500).send('Internal server error');
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
