
      var buton = document.querySelector("#add");
      

      buton.addEventListener("click", function(event){
        event.preventDefault();
        
        
        var colunaA = document.querySelector("#colunaA");
        var colunaB = document.querySelector("#colunaB");
        var linhaA = document.querySelector("#linhaA");
        var linhaB = document.querySelector("#linhaB");
        var coluna = document.createElement("tr");
        var linha = document.createElement("td");
        if(linhaA.value == colunaB.value){
        var textoo = document.createElement("p");
        var tabela = document.querySelector("#tabela")
        tabela.innerHTML = "";
        textoo.textContent = "Matriz A";
        tabela.appendChild(textoo);
        for (let i = 0; i < colunaA.value ; i++) {
            for (let j = 0; j < linhaA.value; j++) {
  
              linha = document.createElement("input")
             
              var espaco = document.createElement("br")
              tabela.appendChild(linha)
              var cont =+ j+1;
              var cont2 =+ i+1
              linha.id = "a"+cont2+cont;
              
            }
  
            tabela.appendChild(espaco) 
        }

        var texto = document.createElement("p");
        texto.textContent = "Matriz B";
        tabela.appendChild(texto);

        for (let i = 0; i < colunaB.value ; i++) {
          for (let j = 0; j < linhaB.value; j++) {
            linha = document.createElement("input")
           
            var espaco = document.createElement("br")
            tabela.appendChild(linha)
            var cont =+ j+1;
            var cont2 =+ i+1
            linha.id = "b"+cont2+cont;
            
          }
          tabela.appendChild(espaco)  

      }
      
    var botao = document.createElement("button");
    botao.textContent = "Multiplicar";
    tabela.appendChild(botao);
    botao.addEventListener("click", function(event){
      event.preventDefault();
      var matrizA = [];
      var matrizB = [];
      var matrizC = [];
      for (let i = 0; i < colunaA.value; i++) {
        matrizA[i] = [];
        for (let j = 0; j < linhaA.value; j++) {
          matrizA[i][j] = document.querySelector("#a"+(i+1)+(j+1)).value;
        }
      }
      for (let i = 0; i < colunaB.value; i++) {
        matrizB[i] = [];
        for (let j = 0; j < linhaB.value; j++) {
          matrizB[i][j] = document.querySelector("#b"+(i+1)+(j+1)).value;
        }
      }
      for (let i = 0; i < colunaA.value; i++) {
        matrizC[i] = [];
        for (let j = 0; j < linhaB.value; j++) {
          matrizC[i][j] = 0;
          for (let k = 0; k < linhaA.value; k++) {
            matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
          }
        }
      }
      var text = document.createElement("p");
      text.textContent = "Matriz Resultante";
      tabela.appendChild(text);
      for (let i = 0; i < colunaA.value; i++) {
        for (let j = 0; j < linhaB.value; j++) {
          var result = document.createElement("input");
          result.value = matrizC[i][j];
          tabela.appendChild(result);
        }
        var espaco = document.createElement("br");
        tabela.appendChild(espaco);
      }
    })
    } 
    else{
      alert("O numero de Linhas da matriz A deve ser igual ao numero de Colunas da matriz B")}
    })







