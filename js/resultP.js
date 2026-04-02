


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
 document.getElementById('h3_header').innerHTML=`${dados.Lista_Cad}`;
 document.getElementById('h2_header').innerHTML=`${dados.SubTitulo}`;
 document.getElementById('h2_header_Titulo').innerHTML=`${dados.Titulo}`;
  document.getElementById('img_').src=dados.Imagem;
 document.getElementById('lblHora').innerHTML=`Ultima Atualizaçõa: ${dados.Data_Atualizada}`;
 document.getElementById('tituloPagina').innerHTML=`${dados.Lista_Cad}`;
 sessionStorage.setItem('collection',dados.Lista_Cad)
 setTimeout(function(){
  sessionStorage.setItem('collection',dados.Lista_Cad)
  document.getElementById('h3_header').innerHTML=`${dados.Lista_Cad}`;
 document.getElementById('h2_header').innerHTML=`${dados.SubTitulo}`;
 document.getElementById('h2_header_Titulo').innerHTML=`${dados.Titulo}`;
  document.getElementById('img_').src=dados.Imagem;
 document.getElementById('lblHora').innerHTML=`Ultima Atualizaçõa: ${dados.Data_Atualizada}`;
 document.getElementById('tituloPagina').innerHTML=`${dados.Lista_Cad}`;
  filmesSites()
 },3000)
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


function fech(){
  window.open(`../index.html`,'_self')
}



 function filmesSites(){
  var coleção=sessionStorage.getItem('collection')
var listTab = document.getElementById('listFilmes');
listTab.innerHTML = '';
var db = firebase.firestore();

var produtosRef = db.collection(`${coleção}`);

produtosRef.get().then((querySnapshot) => {
  querySnapshot.forEach(docSnap => {
    var doc = docSnap.data();
   
    // Criar elementos
    var flexgrup = document.createElement('div');
    var div1= document.createElement('div');
    var div2= document.createElement('div');
    var div3= document.createElement('div');
    var img = document.createElement('img');
    var titulo = document.createElement('h5');
    var subtitulo = document.createElement('p');
     var label = document.createElement('label');
   // var botaoEditar = document.createElement('button');
   // var botaoExcluir = document.createElement('button');
   // var botaoVer = document.createElement('button');
    flexgrup.id='divL'
    div1.id='div'
    div2.id='div2'
    div3.id='div3'
    titulo.id='titulo'
    subtitulo.id='subtitulo'
    label.id='label'
    img.id='img'
        
    //botaoEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
   // botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
   // botaoVer.innerHTML = '<i class="fa-solid fa-eye"></i>';
    img.src=doc.Imagem
    titulo.textContent=`${doc.Titulo}`
    subtitulo.textContent=`${doc.OBS}`
    label.textContent=`${doc.Texto}`

    // Montagem
    div1.appendChild(img)
    div2.appendChild(titulo);
    div2.appendChild(subtitulo);
    div2.appendChild(label)
    //div3.appendChild(botaoEditar);
    //div3.appendChild(botaoExcluir);
   // div3.appendChild(botaoVer);
    flexgrup.appendChild(div1);
    flexgrup.appendChild(div2);
    flexgrup.appendChild(div3);
    listTab.appendChild(flexgrup);

    document.getElementById('a_inicio').click()
    setTimeout(function(){
        document.getElementById('h2Titulo').innerHTML=`${doc.Lista_Cad}`
    },500)
    flexgrup.addEventListener('click', function(){
       var urlDev=doc.Links;
  var result= urlDev.trim();
      if(doc.Origem=='site'){
     window.open(`${result}`,'_self')
     
      } else if(doc.Origem=='YouTube'){
          sessionStorage.setItem('Código_Result_PSQ', doc.ID)
          setTimeout(function(){
          window.open(`../html/resutP.html`,'_self')
        },400)
      }
    })
  });
});
 }
