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

function criarTabelaHTML(quadrado) {
    let tabela = document.createElement('table');
    tabela.style.width = '100%';
    tabela.setAttribute('border', '1');

    quadrado.forEach(linha => {
        let tr = document.createElement('tr');
        linha.forEach(numero => {
            let td = document.createElement('td');
            td.textContent = numero;
            td.style.padding = '10px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        });
        tabela.appendChild(tr);
    });

    return tabela;
}

// Função para adicionar o quadrado mágico ao HTML
function adicionarQuadradoAoHTML() {
    let quadradoMagico = criarQuadradoMagico();
    let tabelaHTML = criarTabelaHTML(quadradoMagico);
    document.body.appendChild(tabelaHTML); // Adiciona a tabela ao corpo do documento
}

// Chame esta função quando quiser exibir o quadrado mágico
adicionarQuadradoAoHTML();

imprimirQuadrado(quadradoMagico);
