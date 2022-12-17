const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, _response, body) => {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, null);
        return;
      }

      if (error) {
        callback(error, null);
        return;
      }

      callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
