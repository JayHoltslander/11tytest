const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching titles…" );

  // Sheety API:
  return fetch("https://v2-api.sheety.co/fc583ad9266228c03ecc1ee9ace31835/starWarsChronologicalOrder/sheet1")
};