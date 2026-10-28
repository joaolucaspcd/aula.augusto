const jsondados = JSON.stringify([
    {'id' : 1, 'nome': 'joao silva', 'email': 'joaosilva@gmail.com'},
    {'id' : 1, 'nome': 'Ana silva', 'email': 'anasilva@gmail.com'},
    {'id' : 1, 'nome': 'clara castro ', 'email': 'claracastro@gmail.com'},
    {'id' : 1, 'nome': 'silverio', 'email': 'silverio@gmail.com'},

]);

const dadosconvertidos = JSON.parce(jsondados);
const corpotabela = document.getElementById('tbodycorpotabela');
dadosconvertidos.forEach(usuario => {
    const linha = document.createElement('tr');

    linha.innerHTML = `<td>${usuario.id}</td><td>${usuario.nome}
    </td><td>${usuario.E-mail}</td>` ;

    corpotabela.appendChild(linha);

    
});