const tarefas = [
        'estudar html e css',
        'estudar java script',
        'compreender o conceito de "for" no javascript',
        'Entender a funçao "addeventlisterner do javascript',
        'Entender a funçao "createElement" do javascript'
]; 

const container = document.getElementById('divcontainer');
const botaocarregar = document.getElementById('btncarregar');

const listaUl = document.createElement('ul');
 
    botaocarregar.addEventListener('click', () => {
        for (let i = 0; i < tarefas.length; i++) {

            const itemli = document.createElement('li');

            itemli.innerHTML = '<strong> item ' + (i + 1) + '</strong>' + tarefas [i]; 
          
             listaUl.appendChild(itemli);

        }

        container.appendChild(listaUl);
});


