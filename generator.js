function generator() {
	// word lists
	var firstPart = ["Iron", "Battery", "Trolley", "Motor", "Car Creepers", "Hydraulic", "Wheel", "Cars", "Oil", "Power", "Wrenches", "Mechanical", "Paint Cans", "Hammer", "Spiders", "Bikes", "Old", "Newspaper and Magazines", "Ladder", "Lights", "Motor oil", "Garbage Can", "Ladder", "Radio", "Jigsaw", "Nail", "Wire"];
var secondPart = ["of Evil", "Rocks", "of Androids", "of Robots", "Blades"];

	// generate name
	var name = firstPart[Math.floor(Math.random() * firstPart.length)] + " " + secondPart[Math.floor(Math.random() * secondPart.length)];




	if (document.getElementById("name")) {
		document.getElementById("placeholder").removeChild(document.getElementById("name"));
	}


	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(name));
	document.getElementById("placeholder").appendChild(element);
}