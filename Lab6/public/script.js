//Fichier grandement tiré du Net Ninja à https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

$(document).ready(function()
{
	$("#frmQuesitonnaire").submit(function(){
		
		var data = {
			familiarite:$("#slctFamiliarite").val(),
			fonctionnalitee:$("input[name='func']:checked").val(),
			
			percFonctionnalite:document.getElementById("chkPercFonction").checked,
			percCoherence:document.getElementById("chkPercCoherence").checked,
			percEfficace:document.getElementById("chkPercEfficace").checked,
			percUtilisabilite:document.getElementById("chkPercUtilisabilite").checked,
			percFiabilite:document.getElementById("chkPercFiabilite").checked,
			
			echelleCouleur:$("input[name='echelleColor']:checked").val(),
			echelleAide:$("input[name='echelleHelp']:checked").val(),
			echelleRessources:$("input[name='echelleRes']:checked").val(),
			echelleSatisfaction:$("input[name='echelleSG']:checked").val(),
			
			comparaison:$("#txtComparable").val(),
			commentaires:$("#txtCommentaires").val()
		};
		
		$.ajax({
			type: "POST",
			url:"/niceSurvey",
			data: data,
			success: function(data)
			{
				location.reload();
			}
		});
		
		$("#btnSubmit").css("display", "none");
		$("#txtEndMessage").css("display", "inline");
		
		return false;
	});
});