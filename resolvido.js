function criarQuadradoMagico() {
  const n = 4;
  let quadradoMagico = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => n * i + j + 1)
  );

  // Troca de elementos nas diagonais
  for (let i = 0; i < n; i++) {
      [quadradoMagico[i][i], quadradoMagico[n - i - 1][i]] = [quadradoMagico[n - i - 1][i], quadradoMagico[i][i]];
  }

  return quadradoMagico;
}

// Função para imprimir o quadrado mágico de forma bonita
function imprimirQuadrado(quadrado) {
  quadrado.forEach(linha => {
      console.log(linha.join(' '));
  });
}

let quadradoMagico = criarQuadradoMagico();function criarQuadradoMagico() {
  const n = 4;
  let quadradoMagico = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => n * i + j + 1)
  );

  // Troca de elementos nas diagonais
  for (let i = 0; i < n; i++) {
      [quadradoMagico[i][i], quadradoMagico[n - i - 1][i]] = [quadradoMagico[n - i - 1][i], quadradoMagico[i][i]];
  }

  return quadradoMagico;
}
console.log(imprimirQuadrado)