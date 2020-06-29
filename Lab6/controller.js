//Format de ce fichier grandement tiré du Net Ninja à https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require("fs");

module.exports = function(app)
{	
	app.get("/niceSurvey", function(req, res)
	{
		res.render("index");
	});
	
	app.get("/analysis", function(req, res)
	{
		res.send("Familiaritée:[" + fs.readFileSync("data/familiarite.txt", "utf8") + "]\n" + 
			"Fonctionnalitée:[" + fs.readFileSync("data/fonctionnalitee.txt", "utf8") + "]\n" + 
			"Perception:[" + fs.readFileSync("data/perception.txt", "utf8") + "]\n" +
			"Echelle { \n"+
				"Aide:[" + fs.readFileSync("data/echelle/aide.txt", "utf8") + "]\n" +
				"Couleur:[" + fs.readFileSync("data/echelle/couleur.txt", "utf8") + "]\n" +
				"Ressources:[" + fs.readFileSync("data/echelle/ressources.txt", "utf8") + "]\n" +
				"Satisfaction:[" +  fs.readFileSync("data/echelle/satisfaction.txt", "utf8") + "]\n" +
			"}\n" +
			"Comparaison:[" + fs.readFileSync("data/comparaison.txt", "utf8") + "]\n" +
			"Commentaires:[" + fs.readFileSync("data/commentaires.txt", "utf8") + "]\n"
		);
	});
	
	app.post("/niceSurvey", urlencodedParser, function(req, res)
	{
		fs.writeFileSync("data/familiarite.txt", updateNumber(fs.readFileSync("data/familiarite.txt", "utf8"), req.body.familiarite));
		fs.writeFileSync("data/fonctionnalitee.txt", updateNumber(fs.readFileSync("data/fonctionnalitee.txt", "utf8"), req.body.fonctionnalitee));
		fs.writeFileSync("data/perception.txt", updateBoolTable(fs.readFileSync("data/perception.txt", "utf8"), [req.body.percFonctionnalite, req.body.percCoherence, req.body.percEfficace, req.body.percUtilisabilite, req.body.percFiabilite]));
		fs.writeFileSync("data/echelle/aide.txt", updateNumber(fs.readFileSync("data/echelle/aide.txt", "utf8"), req.body.echelleAide));
		fs.writeFileSync("data/echelle/couleur.txt", updateNumber(fs.readFileSync("data/echelle/couleur.txt", "utf8"), req.body.echelleCouleur));
		fs.writeFileSync("data/echelle/ressources.txt", updateNumber(fs.readFileSync("data/echelle/ressources.txt", "utf8"), req.body.echelleRessources));
		fs.writeFileSync("data/echelle/satisfaction.txt", updateNumber(fs.readFileSync("data/echelle/satisfaction.txt", "utf8"), req.body.echelleSatisfaction));
		fs.writeFileSync("data/comparaison.txt", fs.readFileSync("data/comparaison.txt", "utf8") + "\"" + req.body.comparaison + "\"\n");
		fs.writeFileSync("data/commentaires.txt", fs.readFileSync("data/commentaires.txt", "utf8") + "\"" + req.body.commentaires + "\"\n");
	
	});
}

//Ces fonctions aident à modifier les fichiers

//Fonction pour trouver les limites tiré de https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr
function getBoundsOfDigit(doc, value)
{
	var match = doc.match(new RegExp(value + "=\\d+"));
	if (match == null)
	{
		return [-1, -1];
	}
	var firstIndex = doc.indexOf(match[0]);
	var lastIndex = firstIndex + match[0].length;
	
	var attr = doc.substring(firstIndex, lastIndex);
	
	var digitMatch = attr.match(new RegExp("\\d+"));
	if (digitMatch == null)
	{
		return [-1, -1];
	}
	
	var digFirstIndex = firstIndex + attr.indexOf(String(digitMatch[0]));
	var digLastIndex = digFirstIndex + String(digitMatch[0]).length;
	
	return [digFirstIndex, digLastIndex];
}

function updateNumber(doc, value)
{
	if (value == null || value == undefined || value == "")
	{
		return doc;
	}
	var bounds = getBoundsOfDigit(doc, value);
	if (bounds[0] == bounds[1])
	{
		return doc;
	}
	var before = doc.substring(0, bounds[0]);
	var number = doc.substring(bounds[0], bounds[1]);
	if (bounds[1] < doc.length)
	{
		var after = doc.substring(bounds[1], doc.length);
	}
	else
	{
		var after = "";
	}
	var newNum = Number(number) + 1;
	return before + String(newNum) + after;
}

function updateBoolTable(doc, arr)
{
	var valueTable = ["fonctionnalite", "coherence", "efficace", "utilisabilite", "fiabilite"];
	for (var i = 0; i < valueTable.length; i++)
	{
		if (!(arr[i] == "true"))
		{
			continue;
		}
		var bounds = getBoundsOfDigit(doc, valueTable[i]);
		if (bounds[0] == bounds[1])
		{
			return doc;
		}
		var before = doc.substring(0, bounds[0]);
		var number = doc.substring(bounds[0], bounds[1]);
		if (bounds[1] < doc.length)
		{
			var after = doc.substring(bounds[1], doc.length);
		}
		else
		{
			var after = "";
		}
		var newNum = Number(number) + 1;
		doc = before + String(newNum) + after;
	}
	return doc;
}