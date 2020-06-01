	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [ //Certains prix sont inspirés de Walmart https://www.walmart.ca/en/grocery/N-117 .
	{
		name: "boeuf",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		price: 21.50
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: false,
		price: 2.00
	},
	{
		name: "carottes",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "céréales",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		organic: true,
		price: 5.60
	},
	{
		name: "croustilles",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		organic: true,
		price: 3.95
	},
	{
		name: "fromage",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		organic: true,
		price: 5.80
	},
	{
		name: "lait",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		organic: true,
		price: 3.50
	},
	{
		name: "pain",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		organic: true,
		price: 2.35
	},
	{
		name: "saumon",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "yaourt",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		organic: true,
		price: 4.00
	}
];
	
/*Cette fonction est inspirée de https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/ */
function compareByPrice(a, b)
{
	if (a.price > b.price) return 1;
	if (a.price < b.price) return -1;
	return 0;
}


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, veg, gluten, lactose, organic) {
	let available_products = [];
	let product_names = [];
	
	//Cette boucle à 4 "continue" n'est pas la façon la plus efficace de faire les choses, mais ça fonctionne bien et c'est clair à lire.
	for (let i=0; i<prods.length; i+=1) {
		if ((veg === true) && (prods[i].vegetarian == false)){
			continue;
		}
		else if ((gluten === true) && (prods[i].glutenFree == false)){
			continue;
		}
		else if ((lactose === true) && (prods[i].lactoseFree == false)){
			continue;
		}
		else if ((organic === true) && (prods[i].organic == false)) {
			continue;
		}
		available_products.push({name: prods[i].name, price: prods[i].price});
	}
	available_products.sort(compareByPrice);
	
	for (let j=0; j<available_products.length; j+=1)
	{
		product_names.push(available_products[j].name + "  -  " + available_products[j].price.toFixed(2) + "$");
	}
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	/*for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}*/
	
	for (let i=0; i < chosenProducts.length; i+=1)
	{
		var prodName = chosenProducts[i].match(".*  -");
		prodName = prodName[0].substring(0, prodName[0].length - 3);
		
		/*Cette idée de map a été tirée de https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array */
		var productIndex = products.map(function(e) {return e.name;}).indexOf(prodName);
		if (productIndex > -1) {
			totalPrice += products[productIndex].price;
		}
	}
	return totalPrice.toFixed(2);
}
