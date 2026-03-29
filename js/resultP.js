


//Iniciando o Firebase
var firebaseConfigure = {
 apiKey: "AIzaSyD9fBnrtxMnCOB13_Q0eS8b5M6MpGnGLYU",
  authDomain: "planet-of-christ.firebaseapp.com",
  databaseURL: "https://planet-of-christ-default-rtdb.firebaseio.com",
  projectId: "planet-of-christ",
  storageBucket: "planet-of-christ.firebasestorage.app",
  messagingSenderId: "713115175508",
  appId: "1:713115175508:web:f02956625a2d7c6e6f3bc1",
  measurementId: "G-PML0R4VJD1"
};
firebase.initializeApp(firebaseConfigure);
//////////////////////////////////////////////////////////
// Tela Cheia
function toggleFullScreen() {
if ((document.fullScreenElement && document.fullScreenElement !== null) ||
(!document.mozFullScreen && !document.webkitIsFullScreen)) {
if (document.documentElement.requestFullScreen) {
document.documentElement.requestFullScreen();
} else if (document.documentElement.mozRequestFullScreen) {
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullScreen) {
document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}
} else {
if (document.cancelFullScreen) {
document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
//fecharperf()
}
//Data e Hora
setInterval(function() {
const newDate = new Date()
var dia = String(newDate.getDate()).padStart(2, '0');
var mes = String(newDate.getMonth() + 1).padStart(2, '0');
var ano = String(newDate.getFullYear()).padStart(2, '0')
var data = `${dia}/${mes}/${ano}`
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
//const lbl_data = document.getElementById('lbl-data');
//lbl_data.innerHTML = `${data}`
//localStorage.setItem('data', data)
sessionStorage.setItem('hora', timeString)
sessionStorage.setItem('data', data)
localStorage.setItem('data', data)
localStorage.setItem('hora', timeString)
}, 1000)


function videos(){

 var hora=sessionStorage.getItem('hora')
 var data= sessionStorage.getItem('data')
 
 var codigo=sessionStorage.getItem('Código_Result_PSQ')
 var list= sessionStorage.getItem('Lista_Result_PSQ')

 var db= firebase.firestore()
  db.collection(`Lista Geral`).doc(`${codigo}`).get().then((doc)=>{
    if(doc){
         
         var dados= doc.data()
         //alert(codigo)
   var url=dados.Links;
  var result= url.trim();
 document.getElementById('Url').src="https://www.youtube.com/embed/"+ result;
 document.getElementById('h3_header').innerHTML=`${dados.Lista_Cad}`
 document.getElementById('h2_header').innerHTML=`${dados.SubTitulo}`
 document.getElementById('h2_header_Titulo').innerHTML=`${dados.Titulo}`
  document.getElementById('img').src=dados.Imagem
 document.getElementById('lblHora').innerHTML=`Ultima Atualizaçõa: ${dados.Data_Atualizada}`
 document.getElementById('tituloPagina').innerHTML=`${dados.Lista_Cad}`
    }else{
alert( 'Não foi possivel localizar o Arquivo! ')
    }
  });
 
}

videos()

 document.getElementById('img').addEventListener('click',function(){
    var resp=document.getElementById('img').src
    swal('','',`${resp}`)
 })