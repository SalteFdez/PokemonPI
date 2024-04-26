const axios = require("axios");

const getTypes = async (req, res) => {

    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type");
        const types = data.results.map(type => type.name);
        return res.status(200).json(types);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = getTypes;