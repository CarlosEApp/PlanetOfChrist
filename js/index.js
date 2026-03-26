


// INICIAR FIREBASE

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

/////////////////////////////////////////////////////////////////////////////

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
fecharperf()
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

//Banners iniciação
function iniciar_banners(){
var bnn=firebase.firestore()
bnn.collection('Banners').doc('BannerImagens').get().then((doc)=>{
var doc= doc.data()
document.getElementById('banner01').src=doc.Imagem01;
document.getElementById('banner02').src=doc.Imagem02;
document.getElementById('banner03').src=doc.Imagem03;
document.getElementById('banner04').src=doc.Imagem04;
document.getElementById('banner05').src=doc.Imagem05;
//document.getElementById('banner09').src=doc.Imagem06;
//document.getElementById('banner06').src=doc.Imagem07;
//document.getElementById('banner07').src=doc.Imagem08;
//document.getElementById('banner08').src=doc.Imagem09;
//document.getElementById('banner0').src=doc.Imagem0;
})
}
iniciar_banners()

//Menu
function fecharperf(){
document.getElementById("divConfgPerfil").classList.remove("divConfgPerfil-ativo");
}
function menu(){
    document.getElementById("divConfgPerfil").classList.add("divConfgPerfil-ativo");
}
document.getElementById('fecharclickperfil').addEventListener('click',function(){
 fecharperf()
})

//carrocel
let currentIndex = 0;
function moveSlide(direction) {
const items = document.querySelectorAll('.carousel-item');
const total = items.length;
if(currentIndex==5){
currentIndex =0
}
currentIndex = (currentIndex + direction + total) % total;
document.querySelector('.carousel-inner').style.transform =
`translateX(-${currentIndex * 100}%)`;
}
//Loop carrocel
let lastTime = 0;
var delay = 12000; // 7 segundos

function loop(timestamp) {
  if (!lastTime) lastTime = timestamp;
  var elapsed = timestamp - lastTime;
  if (elapsed >= delay) {
    moveSlide(1);
    lastTime = timestamp; // reinicia o contador
  }
  requestAnimationFrame(loop); // continua o ciclo
}
// inicia o loop
requestAnimationFrame(loop);
/////////////////////

//Adiministrador Geral
var adbb = firebase.firestore();
var produtosRef = adbb.collection(`Admin`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var coment = querySnapshot.size
sessionStorage.setItem('PassW01', doc.password01)
sessionStorage.setItem('PassW02', doc.password02)
sessionStorage.setItem('teladmin',doc.Telefone)
//alert(doc.Passw02)
setTimeout(function(){
},2000)
})
})

// Administrador
function Admin(){
//  window.open('html/cadastros.html','_blank')
  //window.open('html/cadastros.html','_self')
Swal.fire({ 
title: ``,
text: ``, 
html:`
<div id="administrar">
 <h2>Administradores</h2>
  <label id="lblAd">digíte sua senha de administrador <br>
   <input id="inputAD" type="password" placeholder="Password">  <i id='iPasWord' class="fa-solid fa-eye"></i>
    </label> <br>
     <button id="entrebtn" o">Click enter</button>
      </div> 
`,
imageUrl: ``,
background: '#ffffff',
color: '#a7a7a7', // cor do texto });
showCloseButton: true,   // habilita o "X"
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-admin' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
document.getElementById('iPasWord').addEventListener('click',function(){
var ii= document.getElementById('iPasWord');
var iPW= document.getElementById('inputAD');
if(iPW.type=='password'){
iPW.type='text'
ii.className='fa-solid fa-eye-low-vision';
} else{
iPW.type='password';
ii.className='fa-solid fa-eye';
}
});
document.getElementById("entrebtn").addEventListener('click',function(){
var resp1= sessionStorage.getItem('PassW01')
var resp2= sessionStorage.getItem('PassW02')
var pass = document.getElementById('inputAD').value;

if(pass== resp1|| pass== resp2){
swal('Sucesso','Você seráredirecionado(a)!\n (Tela de cadastros!)','success');
setTimeout(function(){
window.open('html/cadastros.html','_self')
},2000)
}else{
swal('Senha incorreta!','','error');
}
})
};

// Videos devocionais e vida $ saúde...

function videosDevos(){
 var hora=sessionStorage.getItem('hora')
 var data= sessionStorage.getItem('data')
 //Devocional
 var vdD= firebase.firestore()
 var produtosRef = vdD.collection("devocional");
 produtosRef.get().then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
 var doc = doc.data();   // dados do documento       // ID do documento
 var itens = querySnapshot.size;
 if(doc.Data_Atualizada==data){
   var urlDev=doc.Links;
  var result= urlDev.trim();
document.getElementById('UrlDevo').src="https://www.youtube.com/embed/"+ result;
document.getElementById('lblDataDevo').innerHTML=`${doc.OBS}`
document.getElementById('lblHoraDevo').innerHTML=`${doc.Hora_Atualizada}`
 }else{

 }
})
})
//Vida & saúde
setTimeout(function(){

var vdV= firebase.firestore()
 var produtosRef = vdV.collection("vida&saúde");
 produtosRef.get().then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
 var doc = doc.data();   // dados do documento       // ID do documento
 var itens = querySnapshot.size;
 
 if(doc.Data_Atualizada==data){
   var urlVida=doc.Links;
  var result2= urlVida.trim();
  document.getElementById('UrlVidaSaude').src="https://www.youtube.com/embed/"+ result2;
  document.getElementById('lblDataVida').innerHTML=`${doc.OBS}`
  document.getElementById('lblHoraVida').innerHTML=`${doc.Hora_Atualizada}`
 }else{
 }
})
})
},100)
}
videosDevos()

//Ir para o topo da pagina
function Home(){
  document.getElementById('a_inicio').click()

  fecharperf()
}
document.getElementById('rolar').addEventListener('click', function(){
Home()
})
//Ir para o topo da pagina
document.getElementById('homeLater').addEventListener('click', function(){
Home()
})


///////////////////////////////////////////////////////////////////////////// 


var listTab2 = document.getElementById('divflexEstudos');
var btnLeft2 = document.getElementById('btnLeft2');
var btnRight2 = document.getElementById('btnRight2');
btnLeft2.addEventListener('click', () => {
listTab2.scrollBy({ left: -300, behavior: 'smooth' }); // rola 300px para a esquerda
});
btnRight2.addEventListener('click', () => {
  listTab2.scrollBy({ left: 300, behavior: 'smooth' }); // rola 300px para a direita
});
 
function Perfilclick(){
loginComGoogle()
}
//document.getElementById('Perfil').addEventListener('click',function(){
   // loginComGoogle()
//})
function PerfilB(){
loginComGoogle()
}
function loginComGoogle() {
  var lblG=document.getElementById('labellogarLater');
var lognome= localStorage.getItem('GoogleNome')
var logEmail= localStorage.getItem('GoogleEmail')
var hora=sessionStorage.getItem('hora')
var data=sessionStorage.getItem('data')
if(!lognome||lognome==''||!logEmail||logEmail==''){

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider)
.then((result) => {
const user = result.user;
console.log("Nome:", user.displayName);
console.log("Email:", user.email);
console.log("Foto:", user.photoURL);
var nome_= user.displayName
var resp=nome_.split(' ');
var nome1=resp[0]
var nome2= resp[1]
var Usuário=`Olá, ${nome1} ${nome2}`;
var Email= user.email;
var Foto= user.photoURL

//document.getElementById('lblperfilnome').innerHTML=`Olá, ${nome1} ${nome2}`;
document.getElementById('MeuPerNome').innerHTML=`Olá, ${nome1} ${nome2}`;
document.getElementById('MeuPerEmail').innerHTML=`${Email}`
localStorage.setItem('GoogleNome', `${nome_}`)
localStorage.setItem('GoogleEmail',`${Email}` )
localStorage.setItem('GoogleFoto',`${Foto}` )
//document.getElementById('fotoPertfil').src=`${user.photoURL}`;
document.getElementById('MeuPerFoto').src=`${user.photoURL}`;

lblG.innerHTML='Logado'
lblG.id='labellogarLater_'
var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');
btnperfil.id='PerfilBarra_'
btnperfil.title='Conectado "ATIVO"'
bbdd.id='bbg_'

var ddg= firebase.firestore()
ddg.collection('UsuáriosGoogle').doc(`${user.email}`).set({
Nome:user.displayName,
Email:user.email,
Foto:user.photoURL,
Data:data,
Hora:hora,
})
loginComGoogle() 
})
.catch((error) => {
console.error("Erro ao autenticar:", error);
 var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');
btnperfil.id='PerfilBarra'
btnperfil.title='Desconectado "conecte-se"'
bbdd.id='bbg'
});
}else{
document.getElementById("divConfgPerfil").classList.add("divConfgPerfil-ativo");
 var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');
btnperfil.id='PerfilBarra_'
btnperfil.title='Conectado "ATIVO"'
bbdd.id='bbg_'
}
}
var lblG=document.getElementById('labellogarLater');
var lognome= localStorage.getItem('GoogleNome')
var logEmail= localStorage.getItem('GoogleEmail')
if(!logEmail|| logEmail==''){
var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');

lblG.innerHTML='Logar com o google'
lblG.id='labellogarLater'
btnperfil.id='PerfilBarra'
btnperfil.title='Desconectado "conecte-se"'
bbdd.id='bbg'
}else{
var bnn=firebase.firestore()
bnn.collection('UsuáriosGoogle').doc(`${logEmail}`).get().then((doc)=>{
if(doc.data()){
var doc= doc.data()
var NomeUser=doc.Nome;
var Email=doc.Email;
var Foto= doc.Foto
var nome_= doc.Nome
var resp=nome_.split(' ');
var nome1=resp[0]
var nome2= resp[1]
var Usuário=`${nome1} ${nome2}`
localStorage.setItem('GoogleNome', `${NomeUser}`)
localStorage.setItem('GoogleEmail',`${Email}` )
localStorage.setItem('GoogleFoto',`${Foto}` )
//document.getElementById('fotoPertfil').src=`${Foto}`
document.getElementById('MeuPerFoto').src=`${Foto}`
document.getElementById('MeuPerNome').innerHTML=`Olá, ${Usuário}`;
//document.getElementById('MeuPerNome').innerHTML=`Olá, ${Usuário}`;
document.getElementById('MeuPerEmail').innerHTML=`${Email}`;
//document.getElementById("rua").innerHTML = doc.Rua;
//document.getElementById("numero").innerHTML = doc.Numero;
//document.getElementById("bairro").innerHTML = doc.Bairro;
//document.getElementById("cidade").innerHTML = doc.Cidade;
//document.getElementById("estado").innerHTML= doc.Estado;
//document.getElementById('Cep').innerHTML=doc.CEP;
lblG.innerHTML='Logado!'
lblG.id='labellogarLater_'
var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');
btnperfil.id='PerfilBarra_'
btnperfil.title='Conectado "ATIVO"'
bbdd.id='bbg_'
if(!doc.Rua||doc.Rua==''||!doc.Bairro||doc.Bairro==''){

}else{
 document.getElementById('endDiv').style.display='block'
}
}else{
LocalUserClouse()
var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');
btnperfil.id='PerfilBarra'
btnperfil.title='Desconectado "conecte-se"'
bbdd.id-'bbg'
}
})
}

//localStorage.setItem('Rua','')
//localStorage.setItem('Bairro','')
//localStorage.setItem('Cidade','')
//localStorage.setItem('Estado','')
//localStorage.setItem('Numero','')
//localStorage.setItem('CEP','')
function  LocalUserClouse(){
localStorage.setItem('GoogleNome', '')
localStorage.setItem('GoogleEmail',`` )
localStorage.setItem('GoogleFoto',`` )
//localStorage.setItem('Rua','')
//localStorage.setItem('Bairro','')
//localStorage.setItem('Cidade','')
//localStorage.setItem('Estado','')
//localStorage.setItem('Numero','')
//localStorage.setItem('CEP','')
 }
document.getElementById('desconectlab').addEventListener('click',function(){
LocalUserClouse()
window.location.reload()
})



function labelLog(){
 var resp= localStorage.getItem('GoogleEmail' )
  if(!resp||resp==''){
 loginComGoogle() 
   }else{ 
    Swal.fire({ 
title: ``,
text: ``, 
html:`
<div>
<b id="bblog"> Você está logado!</b><br>Clique em <b id="bbdesc"> Desconectar conta </b> para sair.
      </div> 
`,
imageUrl: ``,
background: '#000000e8',
color: '#a7a7a7', // cor do texto });
showCloseButton: true,   // habilita o "X"
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-admin' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
   }
  }


function filmesGospel(){
//  Swal.fire('','Página em desenvolvimento!','')
window.open('https://sites.google.com/view/supremoaudiofilm/at%C3%A9-o-ultimo-homem-filme-completo-dublado','_blank')
}



















/////////////////Botões links estudos bíblicos//////////////////////////////////////////
document.getElementById('estudo01').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%201.pdf?alt=media&token=5c131edd-7b9d-4099-96ff-d74787caba0e', '_blank')
});
document.getElementById('estudo02').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%202.pdf?alt=media&token=88f81eee-3c09-4f4f-8e72-f54a0b513a5f', '_blank')
});
document.getElementById('estudo03').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%203.pdf', '_blank')
});
document.getElementById('estudo04').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%204.pdf', '_blank')
});
document.getElementById('estudo05').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%205.pdf', '_blank')
});
document.getElementById('estudo06').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%206.pdf', '_blank')
});
document.getElementById('estudo07').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%207.pdf', '_blank')
});
document.getElementById('estudo08').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%208.pdf', '_blank')
});
document.getElementById('estudo09').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%209.pdf', '_blank')
});
document.getElementById('estudo10').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2010.pdf', '_blank')
});
document.getElementById('estudo11').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2011.pdf', '_blank')
});
document.getElementById('estudo12').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2012.pdf', '_blank')
});
document.getElementById('estudo13').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2013.pdf', '_blank')
});
document.getElementById('estudo14').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2014.pdf', '_blank')
});
document.getElementById('estudo15').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2015.pdf', '_blank')
});
document.getElementById('estudo16').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2016.pdf', '_blank')
});
document.getElementById('estudo17').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2017.pdf', '_blank')
});
document.getElementById('estudo18').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2018.pdf', '_blank')
});
document.getElementById('estudo19').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2019.pdf', '_blank')
});
document.getElementById('estudo20').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2020.pdf', '_blank')
});
document.getElementById('estudo21').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2021.pdf', '_blank')
});
document.getElementById('estudo22').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2022.pdf', '_blank')
});
document.getElementById('estudo23').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2023.pdf', '_blank')
});
document.getElementById('estudo24').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2024.pdf', '_blank')
});
document.getElementById('estudo25').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2025.pdf', '_blank')
});
document.getElementById('estudo26').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2026.pdf', '_blank')
});
document.getElementById('estudo27').addEventListener('click',function(){
  window.open('http://deptos.adventistas.org.s3.amazonaws.com/ministerial/portal-pastor/pt/estudos-biblicos/ouvindo-a-voz-de-deus-completo/voz%2027.pdf', '_blank')
});


function initPage(){
Swal.fire({ 
title: ``,
text: ``, 
html:`
<div id='btnTime_'>
<img src="src/Logo2.png" alt="" class="logo-swal" width="55%"></div>
<div id="divInit"> 
<button id='btnTime'>⏳ </button> 
<div id="myProgresos" title="Progresos">
<div id="myBarr">10%</div>
</div>
</div>
`,
imageUrl: ``,
background: '#00325300',
color: '#fff', // cor do texto });
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-customTime' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
document.getElementById('myProgresos').style.display = 'block'
var i = 0;
if (i == 0){
i = 1;
var elem = document.getElementById("myBarr");
var width = 1;
var id = setInterval(frame, 82);
function frame() {
if (width >= 100) {
i = 0;

document.getElementById('myProgresos').style.display = 'none'
swalclose()
clearInterval(id)
//document.getElementById('imgcad').value = `${url_imagem}`
} else {
width++;
elem.style.width = width + "%";
elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
}
}
}
}
function swalclose(){
Swal.close()
}
initPage()

setTimeout(function(){
videosDevos()
},3000)