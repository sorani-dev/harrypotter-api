const { default: axios } = require("axios");
const { addOrUpdateCharacter } = require("./dynamo");


const seedData = async () => {
    try {
        const url = 'http://hp-api.herokuapp.com/api/characters'
        const { data: characters } = await axios(url);

        const characterPromises = characters.map((character, i) => addOrUpdateCharacter({ ...character, id: i + '' }))

        await Promise.all(characterPromises);
    } catch (err) {
        console.error(err);
        console.log('AHHHHHRRR!!!')
    }
}

seedData();