function escada(x){
    let lista = [];
    let espaco = x - i;
    for(let i = 1; i <= x; i++){
        lista.push(" ".repeat(espaco) + "#".repeat(i));
    }
  
    lista.forEach(function(item) {
      console.log(item)
    })
  }

  escada(10)