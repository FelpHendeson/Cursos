var nome = 'João';
let idade = 20;
const isAdmin = true;

console.log('Nome: ',nome, 'Idade: ',idade, 'Admin: ',isAdmin);

idade = 22; // let reatribui

console.log(`Nome: ${nome} Idade: ${idade} Admin: ${isAdmin}`);

nome = 'teste'; //var também reatribui

// isAdmin = false; 
// quebra o codigo |

console.log(`Nome: ${nome} Idade: ${idade} Admin: ${isAdmin}`);

// Lembre-se das regras de nomeacao de variaveis o mesmo vale para funções