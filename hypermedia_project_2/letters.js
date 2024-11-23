let num_cards = ['A', '2', '3', '4', '5', '6', '7', 'J', 'Q', 'K'];
let cards = ["images/n_ndiamante.png", "images/n_npicas.png", "images/n_ncorazon.png", "images/n_ntrebol.png"];
var baraja = [];
let current_points = 0;
let dealer_points = 0;
let bet = 0.0;
let roundActive = false;
//------------------------------------------------ Crear Bajara -----------------------------//
for(let i = 0; i<cards.length;i++){
	for(let j= 0; j< 7;j++){
		baraja.push({palo: cards[i],numero: num_cards[j], valor: j+1}); // la j representa el numero de la carta
	}
	for(let j= 7; j< 10;j++){
		baraja.push({palo: cards[i],numero: num_cards[j], valor: 0.5});
	}
}
mezclarBaraja(baraja);

function mezclarBaraja(baraja) {
	for (let i = baraja.length - 1; i > 0; i--) {
		 const j = Math.floor(Math.random() * (i + 1));
		[baraja[i], baraja[j]] = [baraja[j], baraja[i]]; 
	}
}
//------------------------------------------------------------------------------------------// 


let p_cards= document.getElementById("player_cards"); // crea palo de cartas jugador 
let d_cards= document.getElementById("dealer_cards");


let textMoney =  document.querySelector(".p_money");

function load() {// Carga el juego

    document.querySelector(".game").classList.add("hidden");
	
}

function startGame() { // pantalla inicial donde se piden los datos
	
    const playerName = document.getElementById("name").value.trim(); const playerMoney = document.getElementById("money").value.trim();
	 if (playerName !== "" && playerMoney !== "") {
	//console.log(playerMoney);
	document.querySelector(".p_name").textContent = playerName; // introduce los datos
	textMoney.textContent = playerMoney;

	document.querySelector(".game").classList.remove("hidden"); //muestra la interfaz game
	document.querySelector(".game_start").classList.add("hidden"); // esconde la pantalla inicial
	
	}
	else{
		alert("You need a name and money for play!");
	}
	

}


function new_round(){
	let userInput = prompt("Por favor ingresa tu apuesta:");
	bet = parseFloat(userInput);
	let current_money = parseFloat(textMoney.textContent)
	while (isNaN(bet) || bet < 0 || bet > current_money){//revisarlo
		alert("Apuesta no válida");
		let userInput = prompt("Por favor ingresa tu apuesta:");
		bet = parseFloat(userInput);
	}
	p_cards.innerHTML = "";
	current_points = 0;
	d_cards.innerHTML = "";
	dealer_points=0;
	roundActive = true;

}


function assign_card(player) {
	if (!roundActive) {
        alert("Debes iniciar una nueva ronda primero.");
        return; // Salir de la función si la ronda no está activa
    }

    const newCard = baraja.pop(); // crea una nueva carta
    let div_card= document.createElement("div"); //crea un div
	console.log(newCard);
    div_card.textContent= newCard.numero;
	div_card.classList.add("card");	
	div_card.style.backgroundImage = `url(${newCard.palo})`;  // asigna la imagen a la carta
	div_card.style.backgroundSize = 'cover';

	let colorsito= cards.findIndex(f => f === newCard.palo);

	switch(colorsito){
		case 0: div_card.style.color = "#00FFFF"; break;		
		case 1: div_card.style.color = "#C4D315"; break;		
		case 2: div_card.style.color = "#FF0000"; break;		
		case 3: div_card.style.color = "#00FF00"; break;
	}

	
	if (player === "player") { // se crea uno para el player si presiona el boton
		p_cards.appendChild(div_card);
		current_points += newCard.valor;
		if(current_points > 7.5){
			
			textMoney.textContent -= bet;

			alert("Has perido");
			alert("Te quedan "+textMoney.textContent+" €");
			roundActive = false; 
		}
		console.log(current_points);
    } else if (player === "dealer") { // si se planta se crea uno para el dealer
			d_cards.appendChild(div_card);
			dealer_points += newCard.valor;
    }
}

function stand(){
	if (!roundActive) {
        alert("Debes iniciar una nueva ronda primero.");
        return; // Salir de la función si la ronda no está activa
    }
	while (dealer_points < current_points && roundActive){
		assign_card('dealer');
	}
	if (dealer_points == current_points && dealer_points <= 3){
		assign_card('dealer');
	}
	if(dealer_points > 7.5){
		alert("You win!");
		textMoney.textContent = parseFloat(textMoney.textContent) + parseFloat(bet);
	}
	else if(dealer_points == current_points){
		alert("It's a draw");
	}
	else if (dealer_points <= 7.5){
		alert("You loose");
		textMoney.textContent -= bet;
	}
	alert("Te quedan "+textMoney.textContent+" €");
	roundActive = false; 
}

function end_game(){
	alert("♥ Bye, come back later ♥");
	roundActive = false; // Finalizar la ronda
	p_cards.innerHTML = "";
	current_points = 0;
	d_cards.innerHTML = "";
	dealer_points=0;

	document.querySelector(".game_start").classList.remove("hidden"); //muestra la interfaz game
	document.querySelector(".game").classList.add("hidden"); // esconde la pantalla inicial
}