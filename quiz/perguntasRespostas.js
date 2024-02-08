//uma var que contem um array com  minhas perguntas, resposta e qual a correta dentro de um objeto
export const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        resposta: ['Uma linguagem de programação', 'Um tipo de café', 'Um novo sistema operacional'],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
        resposta: ['Mostrar uma caixa de diálogo', 'Imprimir mensagens no console do navegador', 'Reproduzir áudio'],
        correta: 1,
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        resposta: ['var x = 5;', 'variable x = 5;', 'let x = 5;'],
        correta: 2,
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        resposta: ['Um tipo de loop', 'Um tipo de variável', 'Um bloco de código reutilizável'],
        correta: 2,
    },
    {
        pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
        resposta: ['/* Este é um comentário */', '// Este é um comentário', '<!-- Este é um comentário -->'],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        resposta: ['Comparação estrita (igual em valor e tipo)', 'Atribuição', 'Concatenação de strings'],
        correta: 0,
    },
    {
        pergunta: "O que é DOM em JavaScript?",
        resposta: ['Um tipo de dado', 'Um modelo de objeto para representar documentos HTML e XML', 'Um tipo de operador'],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
        resposta: ['Criar um novo elemento HTML', 'Adicionar um evento a um elemento HTML', 'Alterar a cor de fundo de um elemento HTML'],
        correta: 1,
    },
    {
        pergunta: "O que é um loop 'for' em JavaScript?",
        resposta: ['Uma estrutura condicional', 'Um tipo de função', 'Um método para iterar sobre um conjunto de valores'],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
        resposta: ['Selecionar um elemento HTML pelo ID', 'Selecionar um elemento HTML pela classe', 'Selecionar um elemento HTML pelo nome da tag'],
        correta: 0,
    },
];

// tranformei meu elemento do meu doc em uma variavel const 
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length

const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas


//estrutura de repetição 
for(const item of perguntas){
    // clonando template  
    const quizItem = template.content.cloneNode(true)
    //modifica h3
    quizItem.querySelector('h3').textContent = item.pergunta
   
    
    // estrutura de repetição 
    for(let resposta of item.resposta){
     // clonando dt
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //modifica o span para resposta 
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute("name","pergunta-"+perguntas.indexOf(item))
     dt.querySelector('input').value = item.resposta.indexOf(resposta)
     dt.querySelector('input').onchange = (event)=>{
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
     }

     quizItem.querySelector('dl').appendChild(dt)
    }
     //removou a questão A usei ela só pra multiplicar as respostas
    quizItem.querySelector('dl dt').remove()




       //coloca a pergunta na tela 
       quiz.appendChild(quizItem)
    

}


