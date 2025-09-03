const nome = 'Felipe';
const sobrenome = 'Hendeson';
const idade = '21';
const peso = '90';
const altura = '1.63';

let imc;
imc = Math.round(peso / (altura * altura), 2);

let anoNascimento;
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} de altura. Seu IMC é ${imc} e nasceu no ano ${anoNascimento}.`);
//Essa é a melhor forma mais tem outras formas de montar a frase
//console.log(nome,sobrenome, ' tem ', idade, ' anos, pesa ', peso, ' kg e tem ', altura, ' de altura. Seu IMC é ', imc, ' e nasceu no ano ', anoNascimento, '.');
//console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg e tem ' + altura + ' de altura. Seu IMC é ' + imc + ' e nasceu no ano ' + anoNascimento + '.');