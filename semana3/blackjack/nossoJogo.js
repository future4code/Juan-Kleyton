/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Bem vindo ao jogo de Blackjack!")

if (confirm ("Computador: Posso iniciar o jogo?")){

   let usuarioCartas = [comprarCarta(), comprarCarta()]
   let pcCartas = [comprarCarta(), comprarCarta()]
   let usuarioPontos = usuarioCartas[0].valor + usuarioCartas[1].valor
   let pcPontos =  pcCartas[0].valor +  pcCartas[1].valor

   console.log ("Suas cartas são: " + usuarioCartas[0].texto + " " + usuarioCartas[1].texto)
   console.log ("O computador tem as seguintes cartas: " + pcCartas[0].texto + " " + pcCartas[1].texto)
   
    if ((usuarioPontos >  pcPontos && usuarioPontos <= 21) || 
       (usuarioPontos > 21 && usuarioPontos < pcPontos)) {
      console.log ("Você venceu!")
      console.log ("Computador: Você teve sorte!")

   }     else if ((pcPontos > usuarioPontos && pcPontos <= 21) || 
                 (pcPontos > 21 && pcPontos < usuarioPontos)) {
               console.log ("O computador Vendeu")
                console.log ("Computador: LUSEEEER! Você é muito fraco! Tente novamente mais tarde!")
      }  else{
         console.log ("Computador: 404 error, essa mensagem é um erro, nunca deveria ser exibida")
   }
      }  else {
         console.log ("Computador: Você é muito fácil para continuar! LUSEEEER")
      }
   