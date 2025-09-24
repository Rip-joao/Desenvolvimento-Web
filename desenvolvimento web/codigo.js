/* EXERCÍCIO 1
console.log("oi");
var num = 10;
if (num %2 == 0 ){
    console.log("O numero é par");
}
else{
    console.log("seu numero é impar");
}
var y;
contador = 0;
for(y=1;y <= num; y++ ){
    if(num %y == 0){
        contador ++;
    }
}
if (contador ==2){
    console.log("é primo")
}
else{
    console.log("não é primo")
}      */             


/* EXERCÍCIO 2
var x = 0;
var y = 1;
var resultado;
var quantidade = 8;
resultado = x + y;
var i = 3;
while (i < quantidade ){
    x = y;
    y = resultado;
    resultado = x+y;
    i ++;
}
alert(resultado);
*/

/* EXERCÍCIO 3 
var x = prompt("Digite os números: ");  
alert();
*/

/* EXERCÍCIO 4
var opcao = 0;
var num1 = 0;
var num2 = 0;
var resultado =0
if (opcao == 0){
    console.log("")
    (resultado + opcao )
}

if (opcao == 1){

}
if (opcao == 2){

}
if (opcao == 3){

}
if (opcao == 4){

}
else{
    /*console.log("opção é invalida") 
} */

/* EXERCÍCIO 5 
var nome = prompt.str("Insira o nome: ");
var idade = prompt.int("Insira a idade: ");
var salario = prompt.int("Insira o valor do salário: ");
var sexo = prompt.str("Escolha um entre f e m: ");
var estadocivil = prompt.str("Insira o sexo: ")

if (nome.len < 3){
    
};*/

/*1) Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número
inteiro entre 1 a 10. O usuário deve informar de qual número ele deseja ver a
tabuada. A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
for(var i = 0; i < 3; i++){

código:
var num = parseInt(prompt("Qual número você deseja visualizar a tabuada: "));
function tabuada(){
    console.log("A tabuada de " + num + ": ");
    for(var i = 1; i < 11; i++){
        var resultado = num * i;
        console.log(num + " X " + i + " = " + resultado);
    }
}
tabuada();*/

/*2) Desenvolva uma função chamada média e calcule o valor da média aritmética de
uma lista de números. A saída de ver ser conforme o exemplo abaixo:
A média dos números é: X 

código:
function media(lista){
    var soma = 0;
    for (var num of lista) soma += num;

}
media();
NÃO CONSEGUIMOS FAZER ESSA MARAVILHA DE QUESTÃO*/

/*3) Faça um programa que calcule o fatorial de um número inteiro fornecido pelo
usuário. Ex.: 5!=5.4.3.2.1=120. A saída de ver ser conforme o exemplo abaixo:
O fatorial de 5 é: 120

código:*/
var num = parseInt(prompt("Insira um número: "));
function fatorial(){
    for(var i = num; i < num; i--);
        var resultado = num * i;
        console.log("")
}


