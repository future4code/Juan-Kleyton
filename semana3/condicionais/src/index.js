//Exercícios de interpretação de código

//01-  
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
    //Qual o teste que ele realiza?
        //R. O teste pega o número digitado pelo usuário, se o resto da divisão foi iqual a 0,
        imprime na tela "Passou no teste", senão. "Imprime, não passou no teste"
        
       Para que tipos de números ele imprime no console "Passou no teste"?
       R- Numeros pares
       Para que tipos de números a mensagem é "Não passou no teste"? 
       R- Numeros Impares
       */
        /*
       2-
       let fruta = prompt("Escolha uma fruta")
       let preco
        switch (fruta) {
        case "Laranja":
        preco = 3.5
        break;
        case "Maçã":
        preco = 2.25
        break;
        case "Uva":
        preco = 0.30
        break;
        case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
        default:
        preco = 5
        break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

        a. Para que serve o código acima?
        R- Para o usuário escolher uma fruta e o sistema enviar o valor da mesma
        b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
        R- console.log("O preço da fruta ", Maçã, " é ", "R$ ", 2.25)
        c. Considere que um usuário queira comprar uma Pêra, 
        qual seria a mensagem impressa no console se retirássemos
         o break que está logo acima do default 
         (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

         R- Retornaria o preço da Pêra, 5.5, e o preço do Default, 5.
            console.log("O preço da fruta ", Pêra, " é ", "R$ ", 5.5 5 (default))

       */
        /*
        3-
            const numero = Number(prompt("Digite o primeiro número."))

            if(numero > 0) {
              console.log("Esse número passou no teste")
                let mensagem = "Essa mensagem é secreta!!!"
            }
            
            console.log(mensagem)

            a. O que a primeira linha está fazendo?
            R- Pedindo ao usuário para digitar um numero
            b. Considere um usuário digitou o número 10. 
            Qual será a mensagem do terminal? 
            R- Imprimiria console.log("Esse número passou no teste")
            E se fosse o número -10?
            R- retorna o erro, informando que a variável mensagem não foi declarada
            
            c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
            R- Haverá um erro, pois o let mensagem = "Essa mensagem é secreta!!!" está dentro
            do escopo do if, impossibilitando assim a sua execução.
            */   

           //Exercícios de escrita de código
            /*
           4-
            Vamos criar programas que lidem com entradas do usuário! 
            Faça um programa que pergunta ao usuário 
            qual a idade dele e imprima no console se ele/ela pode dirigir 
            (apenas maiores de idade).

            1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
            2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para
             number para isso.
            3. Agora veja se essa idade do usuário corresponde à idade mínima 
            que permite dirigir. Se sim, imprima no console 
            `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."
           */

                // const idadeUsuario = Number(prompt("Qual a sua idade?"))
                // const respostaUsuario = Number(idadeUsuario)
                // if(idadeUsuario >= 18){
                //     console.log ("Você pode dirigir")
                // } else {
                //     console.log ("Você não pode dirigir")
                // }

                /*  5-
                    Agora faça um programa que verifica que turno do dia um aluno estuda. 
                    Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
                    Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
                    Utilize o bloco if/else
                */

                    // const turno = prompt ("Digite em qual turno você estudar,utilize 'M' para Matutino, 'V' para Vespertino, 'N' para Noturno")
                    // const respostaDoAluno = (turno)

                    //         if(turno === "M"){
                    //             console.log("Bom-dia")
                    //         }
                    //         else if(turno === "V"){
                    //             console.log("Boa-tarde")
                    //         }
                    //         else if(turno === "N"){
                    //             console.log("Bom-dia")
                    //         } else{
                    //             console.log ("TáTáTá, mais uma de suas brincadeiras Chaves?")
                    //         }


                    /*
                        6- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
                    */

                            // const turno = prompt ("Digite em qual turno você estudar,utilize 'M' para Matutino, 'V' para Vespertino, 'N' para Noturno")
                            // const respostaDoAluno = (turno)
                            // switch (turno) {
                            //     case "M":
                            //     console.log ("Bom-dia")
                            //     break;
                            //     case "V":
                            //     console.log ("Boa-tarde")
                            //     break;
                            //     case "N":
                            //     console.log ("Boa-noite")
                            //     break;

                            //     default:
                            //         console.log ("TáTáTá, mais uma de suas brincadeiras Chaves?")
                            //     break;
                            // }

                            /*
                                7- Considere a situação: 
                                você vai no cinema com um amigo ou amiga, 
                                porém ele/ela só assiste filme do gênero fantasia 
                                e se o ingresso está abaixo de 15 reais. Faça um código que pergunta 
                                ao usuário qual o gênero de filme que vão assistir 
                                e outra pergunta sobre o preço do ingresso, 
                                então verifique se seu amigo ou amiga vai topar assistir o filme. 
                                Caso positivo, imprima no console a mensagem: 
                                "Bom filme!", caso contrário, imprima "Escolha outro filme :("

                            */

                                    // const perguntaFilme = prompt("Qual o gênero do filme que vão assistir?")
                                    // const perguntaPreco = Number(prompt("Qual o preço do ingresso que desejam?"))
                                    // const respostaFilme = (perguntaFilme)
                                    // const respostaPreco = (perguntaPreco)

                                    //         if (perguntaFilme === "Fantasia" && perguntaPreco <= 15){
                                    //             console.log ("Bom filme!")
                                    //         } else{
                                    //             console.log ("Escolha outro filme :(")
                                    //         }


                                    // desafios


                                    /* desafio 01
                                        Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", 
                                        pergunte ao usuário, pelo prompt que snack ele vai comprar 
                                        (pipoca, chocolate, doces, etc) e imprima no console as mensagens
                                         "Bom filme!" e "... com [SNACK]", trocando [SNACK] pelo que o usuário colocou no input.

                                    */

                                    // const perguntaFilme = prompt("Qual o gênero do filme que vão assistir?")
                                    // const perguntaPreco = Number(prompt("Qual o preço do ingresso que desejam?"))
                                    // const respostaFilme = (perguntaFilme)
                                    // const respostaPreco = (perguntaPreco)
                                    
                                    //         if (perguntaFilme === "Fantasia" && perguntaPreco <= 15){
                                    //             const snack = prompt("Qual snack vão comprar?")
                                    //             const respostaSnack = (snack)
                                    //             console.log ("Bom filme!", "com", respostaSnack)
                                    //         } else{
                                    //             console.log ("Escolha outro filme :(")
                                    //         }
                            
    
                                        
                                            


                                    