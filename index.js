const express = require('express')
const path = require('path')
const { getCharacters, getCharacterById, addOrUpdateCharacter, deleteCharacter } = require('./dynamo.js');

const app = express()

// Body parser
app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// GET all characters
app.get('/characters', async (req, res) => {
    try {
        const characters = await getCharacters();
        return res.json(characters);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Something went wrong' })
    }
})

// GET a single character by its id
app.get('/characters/:id', async (req, res) => {
    try {
        const character = await getCharacterById(req.params.id);
        return res.json(character);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Something went wrong' })
    }
})

// POST a single character (Add)
app.post('/characters/', async (req, res) => {
    const character = req.body;

    try {
        const newCharacter = await addOrUpdateCharacter(character);
        return res.status(201).json(newCharacter);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Something went wrong' })
    }
})


// PUT a single character (Add)
app.put('/characters/:id', async (req, res) => {
    const character = req.body;
    const { id } = req.params;
    character.id = id;

    try {
        const updatedCharacter = await addOrUpdateCharacter(character);
        return res.status(200).json(updatedCharacter);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Something went wrong' })
    }
})

app.delete('/characters/:id', async (req, res) => {
    const { id } = req.params;
    try {
        res.json(await deleteCharacter(id));
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Something went wrong' })
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))