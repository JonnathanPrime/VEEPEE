//JSOn parse 
var obj = JSON.parse(JSON.stringify(text));
console.log(text);


document.getElementById("pays").innerHTML =
obj.destinations[0].country;

document.getElementById("ville").innerHTML =
obj.destinations[0].place;

document.getElementById("prix").innerHTML =
obj.destinations[0].upto;

document.getElementById("label").innerHTML =
obj.destinations[0].label;

document.getElementById("tag1").innerHTML =
obj.destinations[0].tags[0].label;

document.getElementById("tag2").innerHTML =
obj.destinations[0].tags[1].label;


