// Declare an array for shopping list.
var shoppingList=[
	"milk",
	"orange",
	"banana",
	"apple",
	"pizza",
	"meat"
]

// Get the Body Tag here.
var body=document.getElementById("content");

// Create heading element .
var heading=document.createElement("h1");

heading.innerText="shoppingList";

//Append heading element to body
body.appendChild(heading);

// Create Order List Element.
var orderListElement=document.createElement("ol");

for(var i=0; i<shoppingList.length; i++){
	var listElement=document.createElement("li");
	listElement.innerText=shoppingList[i];
	orderListElement.appendChild(listElement);
}

var listElement=document.createElement("li");
listElement.innerText=shoppingList[0];
orderListElement.appendChild(listElement);

var listElement=document.createElement("li");
listElement.innerText=shoppingList[1];
orderListElement.appendChild(listElement);

var listElement=document.createElement("li");
listElement.innerText=shoppingList[2];
orderListElement.appendChild(listElement);

var listElement=document.createElement("li");
listElement.innerText=shoppingList[3];
orderListElement.appendChild(listElement);

var listElement=document.createElement("li");
listElement.innerText=shoppingList[4];
orderListElement.appendChild(listElement);

var listElement=document.createElement("li");
listElement.innerText=shoppingList[5];
orderListElement.appendChild(listElement);

var listElement=document.createElement("li");
listElement.innerText=shoppingList[6];
orderListElement.appendChild(listElement);
// Loop through your shopping list
// and create li element here.

// Append ordered list to the body
body.appendChild(orderListElement);
