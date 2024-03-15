# CalculaMat

<div class="container">
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Materiais</title>
    <link rel="stylesheet" href="estilos.css"> <!-- Adicione o link para o seu arquivo CSS externo -->
  </head>
  <body>
   
    <h2>Calculadora de Materiais</h2>
    
    <h4>adicione um nome, em
      quantidade um determinado valor, e em</h4>
      <h4>Valor Unitário o valor a subtrair</h4>
    
     <div id="mensagem" class="exemplo"></div>
    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <!-- Linhas de materiais existentes -->
        </tbody>
      </table>
    </div>
    
    <label for="novo-material">
      <h2>Novo Material:</h2>
    </label>
    <input type="text" id="novo-material" class="input-medium" placeholder="Digite o nome do material...">
    <button onclick="adicionarMaterial()">Adicionar Material</button>

    <button onclick="calcularTotais()">Calcular Totais</button>
    <button onclick="subtrairUm()">Kit pulsão</button>


body {
  font-family: 'Arial', sans-serif; 
  color: black;
  background: #1e1f26;
  background-image: linear-gradient(
    180deg,
    rgba(84, 84, 212, 0.27) 60%,
    rgba(84, 84, 212, 0.11) 100%
  );
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

container{
   text-align: center;
  padding: 20px;
}
 /* Contêiner para tabela com barra de rolagem */
    .table-container {
      max-height: 400px; /* Altura máxima do contêiner */
      overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
    }

h2 {
  text-align: center;
  color: #fff;
 
}

h3 {
  text-align: center;
  color: #fff;
  
}

h4 {
  text-align: center;
  color: #fff;
  
}

table {
  border-radius: 20px;
  border-collapse: collapse;
   width: 90%; /* Alterado para ocupar 90% da largura da tela */
  max-width: 600px; /* Largura máxima de 600px */
  background: #cccccc;
  background-image: linear-gradient(
    180deg,
    rgba(84, 84, 212, 0.27) 60%,
    rgba(84, 84, 212, 0.11) 100%
  );
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

th, td {
  
  padding: 14px;
  text-align: center;
}

th {
  background-color: #1e1f20;
  color: #fff;
}


    .input-medium {
      border-radius: 10px;
      font-size: 16px;
      margin: 10px auto; /* Centralizar horizontalmente */
      display: block; /* Garantir que o botão ocupe toda a largura disponível */
      width: 210px;
    }

    .input-large {
      border-radius: 10px;
      width: 50px;
    }

    input {
      text-align: center;
      padding: 5px;
      box-sizing: border-box;
    }

 button {
      padding: 10px 15px;
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      font-size: 16px;
      margin: 10px auto; /* Centralizar horizontalmente */
      display: block; /* Garantir que o botão ocupe toda a largura disponível */
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #45a049;
    }

    .total-column {
      font-weight: bold;
    }
.exemplo {
  color: #ab1a1c;
  font-size: 27px;
}

    /* Media query para dispositivos móveis */
    @media only screen and (max-width: 600px) {
      /* Centralizar o título */
      h2 {
        margin-top: 50px;
      }
    }
    
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
