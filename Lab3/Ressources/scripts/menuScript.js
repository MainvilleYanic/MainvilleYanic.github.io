//Code inspiré de https://www.w3schools.com/howto/howto_js_form_steps.asp

var currentTab = 0;
var allTabs = ["bienvenue", "preferences", "produits", "panier"];
showTab(currentTab);

var veg = false;
var glut = false;
var lact = false;
var org = false;

function showTab(x)
{
	btnPrev = document.getElementById("btnPrev");
	btnNext = document.getElementById("btnNext");
	
	for (i = 0; i <= 3; i++)
	{
		if (i == x)
		{
			document.getElementById(allTabs[i]).style.display = "block";
		}
		else
		{
			document.getElementById(allTabs[i]).style.display = "none";
		}
	}
	
	if (x == 0)
	{
		btnPrev.style.display = "none";
		btnNext.style.display = "inline";
		btnNext.value = "Débuter";
	}
	else if (x==1)
	{
		btnPrev.style.display = "inline";
		btnNext.style.display = "inline";
		btnNext.value = "Suivant";
	}
	else if (x==2)
	{
		btnPrev.style.display = "inline";
		btnNext.style.display = "inline";
		btnNext.value = "Suivant";
		
		populateProdListWithProducts(veg, glut, lact, org);
	}
	else //x==3
	{
		btnPrev.style.display = "inline";
		btnNext.style.display = "none";
		
		showCart();
	}
	
	scroll(0, 0);
}

function nextTab()
{
	if (currentTab == 1)
	{	
		veg = (document.getElementById("vegY").checked);
		glut = (document.getElementById("glutY").checked);
		lact = (document.getElementById("lactY").checked);
		org = (document.getElementById("orgY").checked);
		
		if (prodNumber[0] != null)
		{
			for (var i = 0; i < prodNumber.length; i++)
			{
				prodNumber[i] = 0;
			}
		}
	}
	else if (currentTab == 2)
	{
		setBuyingValues();
	}
	
	if (currentTab < 3)
	{
		currentTab++;
		showTab(currentTab);
	}
}

function prevTab()
{
	if (currentTab > 0)
	{
		currentTab--;
		showTab(currentTab);
	}
}