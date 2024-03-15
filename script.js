function exibirMensagem(mensagem) {
  var mensagemElemento = document.getElementById('mensagem');
  mensagemElemento.innerText = mensagem;
  mensagemElemento.style.display = 'block'; // Exibe o elemento
  setTimeout(function() {
    mensagemElemento.style.display = 'none'; // Esconde o elemento após alguns segundos
  }, 3000); // Tempo em milissegundos (3 segundos)
}

function adicionarMaterial() {
  var nomeMaterial = document.getElementById('novo-material').value.trim();

  if (nomeMaterial === "") {
    exibirMensagem("Por favor, insira o nome do material.");
    return;
  }

  var tabela = document.querySelector('tbody');
  var novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${nomeMaterial}</td>
    <td><input type="number" class="quantidade input-large" placeholder="Quantidade" value="0"></td>
    <td><input type="number" class="valor-unitario input-large" placeholder="Valor Unitário" value="0"></td>
    <td class="total-column">0</td>
  `;
  tabela.appendChild(novaLinha);

  // Limpa os campos após adicionar
  document.getElementById('novo-material').value = "";
}


    function calcularTotais() {
      var linhas = document.querySelectorAll('tbody tr');

      linhas.forEach(function (linha) {
        var quantidade = parseInt(linha.querySelector('.quantidade').value) || 0;
        var valorUnitario = parseInt(linha.querySelector('.valor-unitario').value) || 0;

        var total = quantidade - valorUnitario; // Corrigido o cálculo do total
        linha.querySelector('.total-column').innerText = total;
      });
    }

function subtrairUm() {
  var linhas = document.querySelectorAll('tbody tr');
  
  // Loop pelas quatro primeiras linhas
  for (var i = 0; i < 4 && i < linhas.length; i++) {
    var valorUnitarioInput = linhas[i].querySelector('.valor-unitario');
    var valorUnitario = parseInt(valorUnitarioInput.value) || 0;
    
    // Subtrai 1 do valor unitário
    valorUnitarioInput.value = Math.max(valorUnitario + 1, 0); // Garante que o valor não seja negativo
  }
}
