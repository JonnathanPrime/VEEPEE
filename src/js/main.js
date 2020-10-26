//JSOn parse 
var obj = JSON.parse(JSON.stringify(text));
console.log(text);
country(obj);
place(obj);
var villes;
function country(JsonObj) {
  villes =JsonObj['country'];

  for(var i = 0; i < villes.length; i++) {
    country.textContent = villes[i].country;
  }
};

