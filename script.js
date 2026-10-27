// 1. Defina o ano de início (mude para o ano que você quiser)
const anoInicio = 2011;

// 2. Pega o ano atual automaticamente do sistema
const anoAtual = new Date().getFullYear();

// 3. Faz a conta de subtração
const anosDecorridos = anoAtual - anoInicio;

// 4. Procura o elemento na página pelo ID e adiciona o número calculado
document.getElementById('contador-anos').innerText = anosDecorridos;