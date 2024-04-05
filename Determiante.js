
var buton = document.querySelector("#add");
      

buton.addEventListener("click", function(event){
  event.preventDefault();

  var colunaA = document.querySelector("#colunaA");
  var linhaA = document.querySelector("#linhaA");
  
  var coluna = document.createElement("tr");
  var linha = document.createElement("td");
  if(linhaA.value == colunaA.value){

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
  
    var botao = document.createElement("button");
    botao.textContent = "Calcular Determinante";
    tabela.appendChild(botao);
    if(linhaA.value >=2 && linha.value <5 && colunaA.value>=2 && colunaA.value<5){
    if(linhaA.value == 2 && colunaA.value == 2){
    
    var determinante = 0;
    botao.addEventListener("click", function(event){
        event.preventDefault();
        determinante = ((a11.value*a22.value) - (a12.value*a21.value));
        document.querySelector("#resultado").textContent = determinante;

    })
  }

    if(linhaA.value == 3 && colunaA.value == 3){

    var determinante = 0;
    botao.addEventListener("click", function(event){
        event.preventDefault();
        determinante = ((a11.value*a22.value*a33.value) + (a12.value*a23.value*a31.value)+ (a13.value*a21.value*a32.value)-(a13.value*a22.value*a31.value)- (a12.value*a21.value*a33.value)-(a11.value*a23.value*a32.value));
        document.querySelector("#resultado").textContent = determinante;
        

    })
    }
    if(linhaA.value == 4 && colunaA.value == 4){
        var determinante = 0;
        botao.addEventListener("click", function(event){
            event.preventDefault();
            if (linhaA.value == 4 && colunaA.value == 4) {
                var determinante = 0;
                botao.addEventListener("click", function(event){
                    event.preventDefault();
                    var determinantea11 = (a22.value * a33.value * a44.value) + (a23.value * a34.value * a42.value) + (a24.value * a32.value * a43.value) - (a24.value * a33.value * a42.value) - (a23.value * a32.value * a44.value) - (a22.value * a34.value * a43.value);
                    var determinantea21 = (a12.value * a33.value * a44.value) + (a13.value * a34.value * a42.value) + (a14.value * a32.value * a43.value) - (a14.value * a33.value * a42.value) - (a13.value * a32.value * a44.value) - (a12.value * a34.value * a43.value);
                    var determinantea31 = (a12.value * a23.value * a44.value) + (a13.value * a24.value * a42.value) + (a14.value * a22.value * a43.value) - (a14.value * a23.value * a42.value) - (a13.value * a22.value * a44.value) - (a12.value * a24.value * a43.value);
                    var determinantea41 = (a12.value * a23.value * a34.value) + (a13.value * a24.value * a32.value) + (a14.value * a22.value * a33.value) - (a14.value * a23.value * a32.value) - (a13.value * a22.value * a34.value) - (a12.value * a24.value * a33.value);
                    determinante = (a11.value * determinantea11) - (a21.value * determinantea21) + (a31.value * determinantea31) - (a41.value * determinantea41);
                    document.querySelector("#resultado").textContent = determinante;
                    console.log(determinantea11)
                    console.log(determinantea21)
                    console.log(determinantea31)
                    console.log(determinantea41)
                    console.log(determinante)
                });
            }            
        })
        
    }
    if (linhaA.value == 5 && colunaA.value == 5) {
        var determinante = 0;
        botao.addEventListener("click", function(event){
            event.preventDefault();
            var a = [
                [a11.value, a12.value, a13.value, a14.value, a15.value],
                [a21.value, a22.value, a23.value, a24.value, a25.value],
                [a31.value, a32.value, a33.value, a34.value, a35.value],
                [a41.value, a42.value, a43.value, a44.value, a45.value],
                [a51.value, a52.value, a53.value, a54.value, a55.value]
            ];
    
            determinante = cofatorExpansion(a);
            document.querySelector("#resultado").textContent = determinante;
        });
    }
    else{ alert("O numero de Linhas da matriz A deve ser igual ao numero de Colunas da matriz B de 2x2 a 5x5")}
    
    function cofatorExpansion(matrix) {
        if (matrix.length === 1) {
            return matrix[0][0];
        }
    
        let sum = 0;
    
        for (let i = 0; i < matrix.length; i++) {
            const minor = getMinor(matrix, 0, i);
            const cofactor = matrix[0][i] * cofatorExpansion(minor);
            sum += i % 2 === 0 ? cofactor : -cofactor;
        }
    
        return sum;
    }
    
    function getMinor(matrix, row, col) {
        return matrix.filter((_, r) => r !== row).map(row => row.filter((_, c) => c !== col));
    }
} else{alert("O numero de Linhas da matriz A deve ser igual ao numero de Colunas da matriz B de 2x2 a 5x5")}

}
else{alert("O numero de Linhas da matriz A deve ser igual ao numero de Colunas da matriz B de 2x2 a 5x5")}
})
