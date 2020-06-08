function populateProdListWithProducts(veg, glut, lact, org, cat = "fruitsEtLegumes")
{
	var division = document.getElementById("prodsList");
	
	division.innerHTML = "";
	
	var anyObject = false;
	
	//Change la couleur des boutons
	
	document.getElementById("btnFruitsEtLegumes").style.backgroundColor = (cat == "fruitsEtLegumes" ? "#45D157" : "#777777");
	document.getElementById("btnLait").style.backgroundColor = (cat == "lait" ? "#45D157" : "#777777");
	document.getElementById("btnViandes").style.backgroundColor = (cat == "viandes" ? "#45D157" : "#777777");
	document.getElementById("btnCereales").style.backgroundColor = (cat == "cereales" ? "#45D157" : "#777777");
	
	//Cette partie de code est inspirée du devoir précédent.
	
	for (var i = 0; i < prodList.length; i++)
	{
		if ((veg && !prodList[i].vegetarian) || (glut && !prodList[i].glutenFree) || (lact && !prodList[i].lactoseFree) || (org && !prodList[i].organic))
		{
			continue;
		}
		if (prodList[i].category != cat)
		{
			continue;
		}
		
		anyObject = true;
		
		var elem = document.createElement("input");
		elem.type = "number";
		elem.min = "0";
		elem.max = "999";
		elem.id = "nmbx" + prodList[i].name;
		
		//Cette ligne de code est inspirée de https://htmldog.com/guides/javascript/advanced/creatingelements/
		
		elem.setAttribute("class", "numBox");
		
		if (prodNumber[i] == null)
		{
			elem.setAttribute("value", "0");
		}
		else
		{
			elem.setAttribute("value", prodNumber[i])
		}
		
		division.appendChild(elem);
		
		//Cette partie de code est inspirée de https://stackoverflow.com/questions/5677799/how-to-append-data-to-div-using-javascript
		division.innerHTML += prodList[i].name + " - " + prodList[i].price.toFixed(2) + "$";
		
		division.appendChild(document.createElement("br"));
		
		var img = document.createElement("img");
		img.setAttribute("src", "Ressources/images/" + prodList[i].name + ".png");
		division.appendChild(img);
		division.appendChild(document.createElement("br"));
		division.appendChild(document.createElement("br"));
	}
	
	if (!anyObject)
	{
		division.innerHTML += "Nous croyons qu'aucun élément de cette catégorie ne saura vous satisfaire. Nous en sommes sincèrement désolés.";
	}
}

function changeDivision(category)
{
	setBuyingValues();
	populateProdListWithProducts(veg, glut, lact, org, category);
}