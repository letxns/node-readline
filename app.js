import readlineSync from 'readline-sync';
import chalk from 'chalk';

function input(){
  let answers = []

  while(true){
    console.log("Digite uma propriedade CSS: ")
    let list = readlineSync.prompt()
    
    if(list == "sair" || list == "SAIR"){      
      break
    }
    answers.push(list)
  }
  console.log(chalk.green.bold(answers.sort()));  
}

input();