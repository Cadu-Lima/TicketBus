let delay = 1000;
let qnt = 1;
let bool, open, openperf, opensettings, openpag, openteladepag = false;
let nameSett = null;
let total = 5.00;
let tot = total.toString()

function changeTheme() {
    document.body.classList.toggle("dark-theme");
}

function openTeladePagamento(tabName) {
    if (openteladepag == true){
        nameSett = tabName;
        document.getElementById(nameSett).style.display = "none";
        document.getElementById(nameSett).className = document.getElementById(tabName).className.replace(" active", "");
        openteladepag = false;
    }else{
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).className += " active";

        openteladepag = true;
        nameSett = tabName;
    }
}

function openPagamento(tabName) {
    if (openpag == true){
        nameSett = tabName;
        document.getElementById(nameSett).style.display = "none";
        document.getElementById(nameSett).className = document.getElementById(tabName).className.replace(" active", "");
        openpag = false;
    }else{
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).className += " active";

        openpag = true;
        nameSett = tabName;
    }
}

function increaseQnt(){
    if (qnt >= 30){
        return;
    }else{
        qnt = qnt+1;
        total = total+2.50;
        document.getElementById('qnt').innerHTML = qnt;
        document.getElementById('total').innerHTML = "R$ "+total;
        document.getElementById('final').innerHTML = "R$ "+total;
    }

}

function decreaseQnt(){
    if (qnt <= 1){
        return;
    }else{
        qnt = qnt-1;
        total = total-2.50;
        document.getElementById('qnt').innerHTML = qnt;
        document.getElementById('total').innerHTML = "R$ "+total;
        document.getElementById('final').innerHTML = "R$ "+total;
    }
}

function ButtonClick() {
  window.location.href='home.html#Inicio';
}
function openCode() {
    if (open == true){
        open = false;
        document.getElementById('otp').open = false;

    } else{
        document.getElementById('otp').open = true;
        open = true;
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loader(event, tabname){
    if (bool == true){
        return;
    }else{
        bool = true;
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        document.getElementById(event).className += " active";
        await wait(delay);
        openTab(event, tabname);
    }
}

function openTab(event, tabName) {
    var i, tabContent, tabLinks;
    window.location.href='#'+tabName;
    // Esconder todos os conteúdos das abas
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    // Remover a classe "active" de todas as abas
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    
    // Mostrar o conteúdo da aba atual e adicionar a classe "active" à aba clicada
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).className += " active";
    document.getElementById(event).className += " active";
    document.title = tabName
    bool = false;
}

function openPerfil(classe, tabName) {
    if (openperf == true){
        if (nameSett != null){
            document.getElementById(nameSett).style.display = "none";
            document.getElementById(nameSett).className = document.getElementById(nameSett).className.replace(" active", "");
            document.getElementById(tabName).style.display = "none";
            document.getElementById(tabName).className = document.getElementById(tabName).className.replace(" active", "");
            openperf = false;
            opensettings = false;
            document.getElementById('checkbox').checked = false;
        }else{
            document.getElementById(tabName).style.display = "none";
            document.getElementById(tabName).className = document.getElementById(tabName).className.replace(" active", "");
            openperf = false;
            opensettings = false;
            document.getElementById('checkbox').checked = false;
        }
    }else{
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).className += " active";

        openperf = true;
    }
}

function openButtonPerf(tabName) {
    if (opensettings == true){
        document.getElementById(nameSett).style.display = "none";
        document.getElementById(nameSett).className = document.getElementById(tabName).className.replace(" active", "");
        nameSett = tabName;
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).className += " active";
    }else{
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).className += " active";

        opensettings = true;
        nameSett = tabName;
    }
}