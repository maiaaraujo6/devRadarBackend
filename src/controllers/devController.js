const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsarray = require('../utils/parseStringAsArray');

module.exports = {
   async index(request, response){
       const devs = await Dev.find();

       return response.json(devs)
   },

    async store(request, response) {
        const {github_username, techs, longitude, latitude} = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev) {
            const github_response = await axios.get(`https://api.github.com/users/${github_username}`);

            const {name = login, avatar_url, bio} = github_response.data;

            const techsArray =  parseStringAsarray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }
        return response.json(dev);
    }
};