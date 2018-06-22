var tableau = ['manger', 'voiture', 'chaise', 'ecran', 'bouteille', 'porte', 'coder', 'table', 'clavier', 'souris', 'mot', 'pupitre', 'pause', 'feignasse', 'cookie', 'action', 'favoris'];
var numRandom = Math.floor(Math.random() * tableau.length);
var motRandom = tableau[numRandom];
console.log(motRandom);

var originalString = tableau[numRandom];
var splitString = originalString.split("");
console.log(splitString);
var zouzou = 0;
var error = 0;
var lettrechoisi =[];
var motmystere = [];


for(var i = 0; i<splitString.length; i++){
	motmystere.push('*');
	console.log(motmystere);
}

$("#dispetoile").html("Deviner le mot qui est cacher: " + motmystere);


$("#A").click(function (){
	$("#A").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("a");
	console.log(lettrechoisi);
});
$("#B").click(function(){
	$("#B").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("b");
	console.log(lettrechoisi);
});
$("#C").click(function(){
	$("#C").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("c");
	console.log(lettrechoisi);
});
$("#D").click(function (){
	$("#D").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("d");
	console.log(lettrechoisi);
});
$("#E").click(function (){
	$("#E").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("e");
	console.log(lettrechoisi);
});
$("#F").click(function (){
	$("#F").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("f");
	console.log(lettrechoisi);
});
$("#G").click(function (){
	$("#G").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("g");
	console.log(lettrechoisi);
});
$("#H").click(function (){
	$("#H").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("h");
	console.log(lettrechoisi);
});
$("#I").click(function (){
	$("#I").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("i");
	console.log(lettrechoisi);
});
$("#J").click(function (){
	$("#J").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("j");
	console.log(lettrechoisi);
});
$("#K").click(function (){
	$("#K").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("k");
	console.log(lettrechoisi);
});
$("#L").click(function (){
	$("#L").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("l");
	console.log(lettrechoisi);
});
$("#M").click(function (){
	$("#M").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("m");
	console.log(lettrechoisi);
});
$("#N").click(function (){
	$("#N").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("n");
	console.log(lettrechoisi);
});
$("#O").click(function (){
	$("#O").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("o");
	console.log(lettrechoisi);
});
$("#P").click(function (){
	$("#P").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("p");
	console.log(lettrechoisi);
});
$("#Q").click(function (){
	$("#Q").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("q");
	console.log(lettrechoisi);
});
$("#R").click(function (){
	$("#R").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("r");
	console.log(lettrechoisi);
});
$("#S").click(function (){
	$("#S").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("s");
	console.log(lettrechoisi);
});
$("#T").click(function (){
	$("#T").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("t");
	console.log(lettrechoisi);
});
$("#U").click(function (){
	$("#U").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("u");
	console.log(lettrechoisi);
});
$("#V").click(function (){
	$("#V").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("v");
	console.log(lettrechoisi);
});
$("#W").click(function (){
	$("#W").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("w");
	console.log(lettrechoisi);
});
$("#X").click(function (){
	$("#X").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("x");
	console.log(lettrechoisi);
});
$("#Y").click(function (){
	$("#Y").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("y");
	console.log(lettrechoisi);
});
$("#Z").click(function (){
	$("#Z").attr("disabled", "disabled");
	lettrechoisi =[];
	lettrechoisi.push("z");
	console.log(lettrechoisi);
});

$("#boutons").click(function(){
	for(var i = 0; i < splitString.length; i++){
		if(lettrechoisi == splitString[i]){
			motmystere[i] = splitString[i] 
			motmystere.splice(motmystere[i], lettrechoisi);
			$("#dispetoile").html("Deviner le mot qui est cacher: " + motmystere);
			zouzou = zouzou +100;
		}else{
			zouzou --;
		}
	}
	if(zouzou<0){
		alert("cette lettre n'est pas présente dans ce mot...");
		error ++;
		$("#texte").html("Nombre d'erreur: " + error);
		document.images['pendu'].src="images/pendu_"+error+".jpg";
		console.log(error);
	}if(error>= 11){
		document.images['pendu'].src="images/pendu_11.jpg";
		alert("perdu!!");
		$("#A").attr("disabled", "disabled");
		$("#B").attr("disabled", "disabled");
		$("#C").attr("disabled", "disabled");
		$("#D").attr("disabled", "disabled");
		$("#E").attr("disabled", "disabled");
		$("#F").attr("disabled", "disabled");
		$("#G").attr("disabled", "disabled");
		$("#H").attr("disabled", "disabled");
		$("#I").attr("disabled", "disabled");
		$("#J").attr("disabled", "disabled");
		$("#K").attr("disabled", "disabled");
		$("#L").attr("disabled", "disabled");
		$("#M").attr("disabled", "disabled");
		$("#N").attr("disabled", "disabled");
		$("#O").attr("disabled", "disabled");
		$("#P").attr("disabled", "disabled");
		$("#Q").attr("disabled", "disabled");
		$("#R").attr("disabled", "disabled");
		$("#S").attr("disabled", "disabled");
		$("#T").attr("disabled", "disabled");
		$("#U").attr("disabled", "disabled");
		$("#V").attr("disabled", "disabled");
		$("#W").attr("disabled", "disabled");
		$("#X").attr("disabled", "disabled");
		$("#Y").attr("disabled", "disabled");
		$("#Z").attr("disabled", "disabled");
	}
	zouzou = 0;
});





/*
for(var i = 0 ; i < splitString.length; i++){
if(lettrechoisi == splitString[i]){
	console.log(splitString[i] + "=" + lettrechoisi);
}else{
	alert("marche pas");
}
};
*/


/*
$("#A").click(){
function A(){
$("#mot").html("A");
}};

function B(){
$("#mot").html("B");
}

$("#A").click(function(){
console.log("hello");
});
*/