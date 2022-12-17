const request = require("request");
let input = process.argv.slice(2);
// request(
//   "https://api.thecatapi.com/v1/breeds/search?q=Siberian",
//   (error, response, body) => {
//     console.log("error:", error);
//     console.log("statusCode:", response && response.statusCode);
//     const data = JSON.parse(body);
//     console.log(data);
//     console.log(typeof data);
//     console.log(data[0]["description"]);
//   }
// );
request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + input,
  (error, response, body) => {
    if (error) {
      console.log("Broken URL");
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Oops breed not found");
      } else {
        console.log(data[0].description);
      }
    }
  }
);
