const linha1 = [1, '|', 2, '|', 3];
const linha2 = ['___', '___', '___'];
const linha3 = [4, '|', 5, '|', 6];
const linha4 = ['___', '___', '___'];
const linha5 = [7, '|', 8, '|', 9];
let resultado = true;
let count = 0;

console.log('Jogo da Velha');
printAll();

let escolha = prompt('Escolha 1 para X ou 2 para O');
console.log();


while (resultado === true && count < 8) {
	if (escolha == 1) {
	blocoX();
	ganhou();
	console.log(count);
	blocoO();
	ganhou();
	console.log(count);
}
	else if (escolha == 2) {
	blocoO();
	ganhou();
	blocoX();
	ganhou();
}
}

console.log("Velha");

function ganhou() {

	if ((linha1[0] == 'X' && linha1[2] == 'X' && linha1[4] == 'X') || (linha2[0] == 'X' && linha2[2] == 'X' && linha2[4] == 'X') || (linha3[0] == 'X' && linha3[2] == 'X' && linha3[4] == 'X') ||
		(linha1[0] == 'X' && linha2[0] == 'X' && linha3[0] == 'X') || (linha1[2] == 'X' && linha2[2] == 'X' && linha3[2] == 'X') || (linha1[4] == 'X' && linha2[4] == 'X' && linha3[4] == 'X') ||
		(linha1[0] == 'X' && linha2[2] == 'X' && linha3[4] == 'X') || (linha1[4] == 'X' && linha2[2] == 'X' && linha3[0] == 'X')) {
		console.log("X ganha!!!");
		console.log();
		resultado = false;
		
	}
	else if ((linha1[0] == 'O' && linha1[2] == 'O' && linha1[4] == 'O') || (linha2[0] == 'O' && linha2[2] == 'O' && linha2[4] == 'O') || (linha3[0] == 'O' && linha3[2] == 'O' && linha3[4] == 'O') ||
		(linha1[0] == 'O' && linha2[0] == 'O' && linha3[0] == 'O') || (linha1[2] == 'O' && linha2[2] == 'O' && linha3[2] == 'O') || (linha1[4] == 'O' && linha2[4] == 'O' && linha3[4] == 'O') ||
		(linha1[0] == 'O' && linha2[2] == 'O' && linha3[4] == 'O') || (linha1[4] == 'O' && linha2[2] == 'O' && linha3[0] == 'O')) {
		console.log("O ganha!!!");
		console.log();
		resultado = false;

}
}

function blocoX() {
let x = prompt('Escolha um local para colocar um X');
console.log(x);

switch (x) {
	case '1':
		linha1.splice(0, 1, "X");
		break;
	case '2':
		linha1.splice(2, 1, "X");
		break;
  case '3':
		linha1.splice(4, 1, "X");
		break;
  case '4':
		linha3.splice(0, 1, "X");
		break;
  case '5':
		linha3.splice(2, 1, "X");
		break;
  case '6':
		linha3.splice(4, 1, "X");
		break;
  case '7':
		linha5.splice(0, 1, "X");
		break;
  case '8':
		linha5.splice(2, 1, "X");
		break;
  case '9':
		linha5.splice(4, 1, "X");
		break;
}
count++;
printAll();
}

function blocoO() {
let o = prompt('Escolha um local para colocar um O');
console.log(o);

switch (o) {
	case '1':
		linha1.splice(0, 1, "O");
		break;
	case '2':
		linha1.splice(2, 1, "O");
		break;
  case '3':
		linha1.splice(4, 1, "O");
		break;
  case '4':
		linha3.splice(0, 1, "O");
		break;
  case '5':
		linha3.splice(2, 1, "O");
		break;
  case '6':
		linha3.splice(4, 1, "O");
		break;
  case '7':
		linha5.splice(0, 1, "O");
		break;
  case '8':
		linha5.splice(2, 1, "O");
		break;
  case '9':
		linha5.splice(4, 1, "O");
		break;
}
count++;
printAll();
}

function printAll() {
  console.log(linha1);
  console.log(linha2);
  console.log(linha3);
  console.log(linha4);
  console.log(linha5);
  console.log();
}