var vetor = [];
var elemnome = document.getElementById('nome');
var elemage = document.getElementById('age');
var elememail = document.getElementById('email');
var elemobs = document.getElementById('obsv');


function resetname() {
    elemnome.value = "";
};

function resetage() {
    elemage.value = "";
};

function resetmail() {
    elememail.value = '';
};

function resetobs() {
    elemobs.value = '';
};

function resetall() {
    elemnome.value = "";
    elemage.value = "";
    elememail.value = '';
    elemobs.value = '';
};

function confirm() {
    var objeto = {
        nome: elemnome.value,
        age: elemage.value,
        email: elememail.value,
        obs: elemobs.value
        
    };

    vetor.push(objeto);

    elemnome.value = "";
    elemage.value = "";
    elememail.value = '';
    elemobs.value = '';
    cadastros="Cadastrado com sucesso"
    window.alert(cadastros);
    
};


function exibirnome() {
    var cadastros = "";

    for (var i = 0; i < vetor.length; i++) {
        cadastros = cadastros + "Nome: " + vetor[i].nome+"\n";



    }

    window.alert(cadastros);
}

function exibircads() {
    var cadastros = "";

    for (var i = 0; i < vetor.length; i++) 
    {
        cadastros = cadastros +  "========== CADASTRO ABAIXO ==========" + "\n" + "Nome: " + vetor[i].nome +"\n" +  "Idade: " +vetor[i].age +"\n"+ "email: "  + vetor[i].email  +"\n" + "Observações: " + vetor[i].obs +"\n" ;
    }

    window.alert(cadastros);
}

