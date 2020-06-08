var prodNumber = [];

for (var i = 0; i < prodList.length; i++)
{
	prodNumber[i] = 0;
}

function setBuyingValues()
{
	for (var i = 0; i < prodList.length; i++)
	{
		elem = document.getElementById("nmbx" + prodList[i].name)
		if (elem != null)
		{
			if (elem.value > 999)
			{
				prodNumber[i] = 999;
			}
			else if (elem.value < 0)
			{
				prodNumber[i] = 0;
			}
			else
			{
				prodNumber[i] = Math.round(elem.value);
			}
		}
	}
}

function showCart()
{
	division = document.getElementById("cartList");
	division.innerHTML = "";
	cartTotal = document.getElementById("cartTotal");
	cartTotal.innerHTML = "";
	
	var noElem = true;
	var totalPrice = 0;
	
	for (var i = 0; i < prodList.length; i++)
	{
		if (prodNumber[i] < 1)
		{
			continue;
		}
		
		noElem = false;
		
		var objectPrice = prodNumber[i] * prodList[i].price;
		division.innerHTML += prodNumber[i] + " x " + prodList[i].name + " - " + prodList[i].price.toFixed(2) + "$ = " + objectPrice.toFixed(2) + "$";
		division.appendChild(document.createElement("br"));
		
		totalPrice += objectPrice;
	}
	
	if (noElem)
	{
		cartTotal.innerHTML += "Vous n'avez rien sélectionné. Votre panier est vide."
	}
	else
	{
		division.appendChild(document.createElement("br"));
		cartTotal.innerHTML += "Votre total est: " + totalPrice.toFixed(2) + "$";
	}
}