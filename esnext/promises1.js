// promise é algo que sera executado no futuro ou devolvido no futuro.
let a = 1 
let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(4)
})

p.then(function(valor) {
  console.log(valor + 2)

})

//quando a promessa for cumprida chamar executar a promise