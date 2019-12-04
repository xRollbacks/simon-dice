const $azul = document.querySelector("#azul");
const $verde = document.querySelector("#verde");
const $rojo = document.querySelector("#rojo");
const $amarillo = document.querySelector("#amarillo");
let arrayColores = [];
const $submit = document.querySelector("#submitColores");
let $cuadro = document.querySelectorAll(".cuadro");
const $texto = document.querySelector("#textoPrimario");

let arrayInputs = [];
let $ronda = document.querySelector("#ronda");
let ronda = 0;

function devolverColorAlAzar() {
	const numeroRandom = Math.random();
	if (numeroRandom >= 0 && numeroRandom < 0.25) {
		return $azul;
	} else if (numeroRandom >= 0.25 && numeroRandom < 0.5) {
		return $rojo;
	} else if (numeroRandom >= 0.5 && numeroRandom < 0.75) {
		return $verde;
	} else if (numeroRandom >= 0.75 && numeroRandom <= 1) {
		return $amarillo;
	}
}
$azul.style.cursor = "pointer";
$rojo.style.cursor = "pointer";
$verde.style.cursor = "pointer";
$amarillo.style.cursor = "pointer";

($submit.onclick = manejarRonda), reiniciarEstado;

$azul.onclick = function() {
	arrayInputs.push($azul);
	iluminarColores($azul);
	console.log($azul);
};

$rojo.onclick = function() {
	arrayInputs.push($rojo);
	iluminarColores($rojo);
	console.log($rojo);
};

$verde.onclick = function() {
	arrayInputs.push($verde);
	iluminarColores($verde);
	console.log($verde);
};

$amarillo.onclick = function() {
	arrayInputs.push($amarillo);
	iluminarColores($amarillo);
	console.log($amarillo);
};

function chequearColores() {
	for (let i = 0; arrayColores.length > i; i++) {
		if (arrayInputs[i] === arrayColores[i]) {
			$texto.textContent = "Vas bien, segui asi!";
		} else if (arrayInputs[i] !== arrayColores[i]) {
			$texto.textContent =
				"Perdiste! Clickea en empezar juego para jugar otra vez";
			arrayColores = [];
		}
	}
}
function iluminarColores($cuadro) {
	$cuadro.style.opacity = 1;
	setTimeout(function() {
		$cuadro.style.opacity = 0.5;
	}, 500);
}

function reiniciarEstado() {
	arrayColores = [];
	arrayInputs = [];
	ronda = 0;
}
function manejarRonda() {
	arrayColores.push(devolverColorAlAzar());
	bloquearInputUsuario();

	arrayColores.forEach(function($cuadro, i) {
		setTimeout(function() {
			iluminarColores($cuadro);
		}, (i + 1) * 1000);
	});

	for (i = 0; arrayColores.length > i; i++)
		setTimeout(() => {
			desbloquearInputUsuario();
		}, (i + 1) * 2000);

	arrayInputs = [];

	arrayColores.forEach(function() {
		setTimeout(() => {
			chequearColores();
		}, (arrayColores.length + 1) * 2000);
	});

	$ronda.textContent = "Ronda: #" + ronda++;

	setTimeout(() => {
		if (arrayInputs.length === arrayColores.length) {
			manejarRonda();
		}
	}, (arrayColores.length + 1) * 2000);
}

function bloquearInputUsuario() {
	$cuadro.forEach(function($cuadro) {
		$cuadro.onclick = function() {};
	});
}
function desbloquearInputUsuario() {
	$cuadro.forEach(function($cuadro) {
		$cuadro.onclick = function() {
			arrayInputs.push($cuadro);
			iluminarColores($cuadro);
			console.log($cuadro);
		};
	});
}
