


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
sessionStorage.setItem('Link_Result_PSQ', '')
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
 if(doc.Data_Apresent==data){
   var urlDev=doc.Links;
  var result= urlDev.trim();
document.getElementById('UrlDevo').src="https://www.youtube.com/embed/"+ result;
document.getElementById('lblDataDevo').innerHTML=`${doc.OBS}`
document.getElementById('lblHoraDevo').innerHTML=`AT: ${doc.Data_Atualizada}`
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
 
 if(doc.Data_Apresent==data){
   var urlVida=doc.Links;
  var result2= urlVida.trim();
  document.getElementById('UrlVidaSaude').src="https://www.youtube.com/embed/"+ result2;
  document.getElementById('lblDataVida').innerHTML=`${doc.OBS}`
  document.getElementById('lblHoraVida').innerHTML=`AT: ${doc.Data_Atualizada}`;
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
  //labelLog()
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
 localStorage.setItem('GoogleFoto',user.photoURL)
 localStorage.setItem('GoogleEmail',user.email);
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
receberAvaliacão()
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
document.getElementById('MeuPerFoto').src=`src/Profile-PNG-Images.png`
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

lblG.innerHTML='Logado!'
lblG.id='labellogarLater_'
var bbdd=document.getElementById('bbg');
var btnperfil=document.getElementById('PerfilBarra');
btnperfil.id='PerfilBarra_'
btnperfil.title='Conectado "ATIVO"'
bbdd.id='bbg_'

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
function  LocalUserClouse(){
localStorage.setItem('GoogleNome','')
localStorage.setItem('GoogleEmail',``)
localStorage.setItem('GoogleFoto',``)
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
<b id="bblog"> Você está logado(a)!</b><br>Clique em <b id="bbdesc"> Desconectar conta </b> para sair.
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
  sessionStorage.setItem('Coleção','Filmes')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}

//Serie
function serie(){
  sessionStorage.setItem('Coleção','Séries')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}
//Shorts
function shorts(){
   sessionStorage.setItem('Coleção','Shorts')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
} 

function ver_shorts(){
  shorts()
}
//seleção de coleção
document.getElementById('selectListaUm').addEventListener('change', function(){
  var resp= document.getElementById('selectListaUm').value;

    var resp= document.getElementById('selectListaUm').value;
  if(resp==='devocional')   {
  devocional()
  } else if(resp==='vida&saúde'){
 vidaEsaude()
  }else if(resp==='Sermões'){
  sermãoHead()
  }else if(resp==='Filmes'){
   filmesGospel()
  }else if(resp==='Séries'){
   serie()
   }else if(resp==='Desenhos'){
    desenhos()
    }else if(resp==='Shorts'){
      shorts()
   }else if(resp==='Documentários'){
   documentarios()
  }else if(resp==='sair'){
   var resp_= document.getElementById('selectListaUm');
  resp_.value=''
  }
});

document.getElementById('SermõesLater').addEventListener('click',function(){
sermãoHead()
});

function filmesHead(){
  filmesGospel()
}
document.getElementById('FilmesLaterLater').addEventListener('click', function(){
    filmesGospel()
})

function sermãoHead(){
   sessionStorage.setItem('Coleção','Sermões')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}

function desenhos(){
 sessionStorage.setItem('Coleção','Desenhos')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}

function documentarios(){
 sessionStorage.setItem('Coleção','Documentários')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}
function vidaEsaude(){
 sessionStorage.setItem('Coleção','vida&saúde')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}

function devocional(){
   sessionStorage.setItem('Coleção','devocional')
  setTimeout(function(){
window.open('html/filmes.html','_self')
  },700)
}
function vid(){
   vidaEsaude()
}
document.getElementById('btnDV').addEventListener('click',function(){
  devocional()

})

/////////////////Botões links estudos bíblicos//////////////////////////////////////////
document.getElementById('estudo01').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%201.pdf?alt=media&token=5c131edd-7b9d-4099-96ff-d74787caba0e', '_blank')
});
document.getElementById('estudo02').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%202.pdf?alt=media&token=88f81eee-3c09-4f4f-8e72-f54a0b513a5f', '_blank')
});
document.getElementById('estudo03').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%203.pdf?alt=media&token=3b59c048-c9a8-4aff-8c66-e51b03ba99c4', '_blank')
});
document.getElementById('estudo04').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%204.pdf?alt=media&token=26393768-86db-4a3b-aab7-b082e6eed154', '_blank')
});
document.getElementById('estudo05').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%205.pdf?alt=media&token=1cf50e42-2ae1-4b2d-a7b9-8610e8a2c29f', '_blank')
});
document.getElementById('estudo06').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%206.pdf?alt=media&token=4cfed5c2-0bf8-4fdc-8091-bc8d214973a0', '_blank')
});
document.getElementById('estudo07').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%207.pdf?alt=media&token=2f36ff47-2846-47a4-ac90-c515fd2baab1', '_blank')
});
document.getElementById('estudo08').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%208.pdf?alt=media&token=5e9d4a87-1180-4f37-bc61-3cdc042b0233', '_blank')
});
document.getElementById('estudo09').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%209.pdf?alt=media&token=515ef341-f67a-4fd2-af50-19c231c8a3a7', '_blank')
});
document.getElementById('estudo10').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2010.pdf?alt=media&token=82be6c2f-b639-4d6b-b92d-b7eff108cdab', '_blank')
});
document.getElementById('estudo11').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2011.pdf?alt=media&token=9389dee6-e858-43dc-a124-2f2ab5ae3780', '_blank')
});
document.getElementById('estudo12').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2012.pdf?alt=media&token=a0930a88-f661-4157-99dd-e1a7dadf6b05', '_blank')
});
document.getElementById('estudo13').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2013.pdf?alt=media&token=3d8578f8-56c9-409a-91bf-53b82ec36f38', '_blank')
});
document.getElementById('estudo14').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2014.pdf?alt=media&token=7d6f0cf4-e64e-4674-972a-80b859f84b5e', '_blank')
});
document.getElementById('estudo15').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2015.pdf?alt=media&token=1ef4c2ec-9c7f-4e50-a98a-7c9a0327ed4a', '_blank')
});
document.getElementById('estudo16').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2016.pdf?alt=media&token=e7ac7d69-90bc-4b0f-9bad-8ac00e23455a', '_blank')
});
document.getElementById('estudo17').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2017.pdf?alt=media&token=120368a2-bd52-44c7-87f6-2c43d18b2ec9', '_blank')
});
document.getElementById('estudo18').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2018.pdf?alt=media&token=e9e1da18-3512-4116-8c4b-057938495d64', '_blank')
});
document.getElementById('estudo19').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2019.pdf?alt=media&token=ac94c277-4781-4f2c-a02d-c50f49f5fb4c', '_blank')
});
document.getElementById('estudo20').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2020.pdf?alt=media&token=a2e1a943-2c5b-4abf-8f6c-444adbe365c1', '_blank')
});
document.getElementById('estudo21').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2021.pdf?alt=media&token=af93475d-ba1c-400e-9271-bb02fc4dd68e', '_blank')
});
document.getElementById('estudo22').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2022.pdf?alt=media&token=f3b61667-7010-42db-9267-de57c9e55416', '_blank')
});
document.getElementById('estudo23').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2023.pdf?alt=media&token=4d15445b-c699-47c3-be6f-0b4e2a57565d', '_blank')
});
document.getElementById('estudo24').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2024.pdf?alt=media&token=3efa17ef-c834-41c2-a716-93991a0a3f1e', '_blank')
});
document.getElementById('estudo25').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2025.pdf?alt=media&token=8b8b8f97-5505-40dc-9658-a514bd82da64', '_blank')
});
document.getElementById('estudo26').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2026.pdf?alt=media&token=7b48e3f5-c1c5-49c2-b4fc-d32f82d718ba', '_blank')
});
document.getElementById('estudo27').addEventListener('click',function(){
  window.open('https://firebasestorage.googleapis.com/v0/b/planet-of-christ.firebasestorage.app/o/PDFs%2FEstudos_Biblicos%2Fvoz%2027.pdf?alt=media&token=191c62dc-09f9-4bf8-b1f0-8918696c8907', '_blank')
});

//inicio progresso
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
var id = setInterval(frame, 46);
function frame() {
if (width >= 100) {
i = 0;

document.getElementById('myProgresos').style.display = 'none'
document.getElementById('pesquise').value=""// impt de pesquisa
sessionStorage.setItem('Link_Result_PSQ', '')
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

//Pesquisa
function pesquisarProduto() {
   document.getElementById('respPesquisasadiv').style.display='none'
  var list = document.getElementById('listpesqRes');
  list.innerHTML = ''
  var termo = document.getElementById("pesquise").value.toLowerCase();
  if(termo){
   setTimeout(function(){
 Swal.fire({ 
title: ``,
text: ``, 
html:`
<div>
<b id="bbdesc"> Não encontramos nada relacionado as informações digitadas</b><br> digite as primeiras letras  do que deseja encontrar e procure em uma lista a opção desejada<b id="b"></b> .
   </div> 
`,
imageUrl: ``,
background: '#000000',
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
 setTimeout(function(){
   
Swal.close()
    },25000)
 },1000)
  var db= firebase.firestore()
  db.collection("Lista Geral").get().then(snapshot => {
    snapshot.forEach(docSnap => {
      var data = docSnap.data();
      if (data.Titulo && data.Titulo.toLowerCase().includes(termo) || data.SubTitulo && data.SubTitulo.toLowerCase().includes(termo)  ||data.OBS && data.OBS.toLowerCase().includes(termo) )  {
        var titulo = data.Titulo ? data.Titulo.toLowerCase() : ""; var sub = data.SubTitulo ? data.SubTitulo.toLowerCase() : ""; var obs = data.OBS ? data.OBS.toLowerCase() : "";
          
       if (titulo.includes(termo) || termo.includes(titulo)||obs.includes(termo) || termo.includes(obs)||sub.includes(termo) || termo.includes(sub)) {
       //alert(data.Titulo)
        var divbase=document.createElement('div');
        var div=document.createElement('div');
        var h3=document.createElement('h4');
        var div2=document.createElement('div');
        var imagem=document.createElement('img');
        var label=document.createElement('label');
        var label2=document.createElement('label');
        var label3=document.createElement('label');
        
        divbase.id='divbase';
        div.id='divum';
        div2.id='divdois';
        imagem.id='imagemps';
        label.id='lbl1';
        label2.id='lbl2';
        label3.id='lbl3';
        h3.id='h33'

         imagem.src=data.Imagem;
         label.textContent= data.SubTitulo;
         label2.textContent= data.Lista_Cad
         h3.textContent=data.Titulo

         div.appendChild(imagem);
         div2.appendChild(h3);
         div2.appendChild(label);
         div2.appendChild(label2);
         divbase.appendChild(div);
         divbase.appendChild(div2);
         list.appendChild(divbase)
          document.getElementById('respPesquisasadiv').style.display='block'
         setTimeout(function(){
         Swal.close()
        },1200)
           
        divbase.addEventListener('click',function(){
          //alert(data.Titulo)
          if(data.Origem==='site'){
          window.open(`${data.Links}`,'_self')
          
          } else if(data.Origem==='YouTube'){
           // alert(data.ID)
           
            sessionStorage.setItem('Código_Result_PSQ', data.ID)
            setTimeout(function(){
            window.open(`html/result.html`,'_self')
            },400)
        
          }else{
           
          }
        });
       }
      
      } else{
      }
    });
  });
}else{
  Swal.fire('','Preencha o campo de pesquisa!','')
}
}
document.getElementById('lblfchardivPesq').addEventListener('click',function(){
fech()
})
function fech(){
   document.getElementById('respPesquisasadiv').style.display='none'
}


//Compartilhar
function Comparltlhar(){

Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<p>Compartilhe por WhatsApp!</p><br>
<button id="whats_a" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br>
`,
background: 'hsla(0, 0%, 100%, 0.97)', // Cor de fundo
color: '#2f2f30', // Cor do texto// Cor do texto
showCloseButton: true,  
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
//document.getElementById('face').addEventListener('click',function(){
//var url = encodeURIComponent("https://planetofchrist.netlify.app/");
// window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
//});

document.getElementById('whats_a').addEventListener('click',function(){
var pagina =`https://planetofchrist.netlify.app/`
var Youtube=`https://www.youtube.com/@PlanetofChrist`
var whatsappMessage =`✅Visite nossa Página na Web e YouTube\n\nWeb 👉 ${pagina}\n\nYouTube 👉 ${Youtube}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
}
// Avaliação
function avaliaçao(){
var lognome= localStorage.getItem('GoogleNome')
var logEmail= localStorage.getItem('GoogleEmail')
if(!logEmail||logEmail===''||!lognome|| lognome===''){
Swal.fire({
title: `Você não está logado!`,
html: `
 <p id='pp'>Entre com sua conta google para interagir com a página!</p>
<br>
<button id="logAgora" title="">Sim entrar agora</button>            
<br>
`,
background: 'rgb(247, 247, 247)', // Cor de fundo
color: '#292929', // Cor do texto// Cor do texto
showCloseButton: true,  
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_logar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('logAgora').addEventListener('click',function(){
  loginComGoogle()
   setTimeout(function(){
   Swal.close()
   },1000)
})
} else{
  Swal.fire({
title: `Avaliação`,
html: `
<div id='custonAvaliar'>
 <label id='lblAv1'>🌟</label> <label id='lblAv2'>🌟</label> <label id='lblAv3'>🌟</label> <label id='lblAv4'>🌟</label> <label id='lblAv5'>🌟</label>
 <br><br> <label id='lblgrato'>Click em uma das estrelas de 1 a 5</label>
</div>
`,
background: 'hsla(0, 0%, 100%, 0.97)', // Cor de fundo
color: '#272727', // Cor do texto// Cor do texto
showCloseButton: true,  
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_Avaliar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
//document.getElementById('lblgrato').style.display='none';
 var resp1= document.getElementById('lblAv1');
  var resp2= document.getElementById('lblAv2');
   var resp3= document.getElementById('lblAv3');
    var resp4= document.getElementById('lblAv4');
     var resp5= document.getElementById('lblAv5');
document.getElementById('lblAv1').addEventListener('click',function(){
  var resp1= document.getElementById('lblAv1');
   resp1.id='star1';
   //alert('01');

   sessionStorage.setItem('NotaAvalie','2')
      document.getElementById('labeStars').innerHTML=`🌟`
   setTimeout(function(){
    salveAvaliação()
   Swal.close()
   },1000)
});
document.getElementById('lblAv2').addEventListener('click',function(){
  var resp1= document.getElementById('lblAv1');
  var resp2= document.getElementById('lblAv2');
   resp1.id='star1';
   resp2.id='star1';
   //alert('01, 02')
 
   sessionStorage.setItem('NotaAvalie','4')
      document.getElementById('labeStars').innerHTML=`🌟🌟`
   setTimeout(function(){
    salveAvaliação()
   Swal.close()
   },1000)
});
document.getElementById('lblAv3').addEventListener('click',function(){
  var resp1= document.getElementById('lblAv1');
  var resp2= document.getElementById('lblAv2');
  var resp3= document.getElementById('lblAv3');
   resp1.id='star1';
   resp2.id='star1';
   resp3.id='star1';
   //alert('01, 02, 03');
   sessionStorage.setItem('NotaAvalie','6')
      document.getElementById('labeStars').innerHTML=`🌟🌟🌟`
   setTimeout(function(){
    salveAvaliação()
   Swal.close()
   },1000)
});
document.getElementById('lblAv4').addEventListener('click',function(){
  var resp1= document.getElementById('lblAv1');
  var resp2= document.getElementById('lblAv2');
  var resp3= document.getElementById('lblAv3');
  var resp4= document.getElementById('lblAv4');
   resp1.id='star1';
   resp2.id='star1';
   resp3.id='star1';
   resp4.id='star1';
   //alert('01, 02, 03, 04');
   sessionStorage.setItem('NotaAvalie','8')
      document.getElementById('labeStars').innerHTML=`🌟🌟🌟🌟`
  setTimeout(function(){
    salveAvaliação()
   Swal.close()
   },1000)
});
document.getElementById('lblAv5').addEventListener('click',function(){
  var resp1= document.getElementById('lblAv1');
  var resp2= document.getElementById('lblAv2');
  var resp3= document.getElementById('lblAv3');
  var resp4= document.getElementById('lblAv4');
  var resp5= document.getElementById('lblAv5');
   resp1.id='star1';
   resp2.id='star1';
   resp3.id='star1';
   resp4.id='star1';
   resp5.id='star1';
   //alert('01, 02, 03, 04, 05');
   sessionStorage.setItem('NotaAvalie','10')
      document.getElementById('labeStars').innerHTML=`🌟🌟🌟🌟🌟`
  setTimeout(function(){
    salveAvaliação()
   Swal.close()
   },1000)
});
}}
//salve avaliação firebase
function salveAvaliação(){
 var hora= sessionStorage.getItem('hora')
 var data = sessionStorage.getItem('data')
var lognome= localStorage.getItem('GoogleNome')
var logEmail= localStorage.getItem('GoogleEmail')
var nota=sessionStorage.getItem('NotaAvalie')
var dba = firebase.firestore();
dba.collection('Avaliações').doc(`${logEmail}`).set({
 Nome:lognome,
 Email:logEmail,
 Data:data,
 Hora:hora,
 Nota:nota,
})
}
//recebe avaliação firebase
function receberAvaliacão(){
  var hora= sessionStorage.getItem('hora')
 var data = sessionStorage.getItem('data')
var lognome= localStorage.getItem('GoogleNome')
var logEmail= localStorage.getItem('GoogleEmail')
var nota=sessionStorage.getItem('NotaAvalie')
 var dbrv= firebase.firestore();
 dbrv.collection('Avaliações').doc(`${logEmail}`).get().then((doc)=>{
  if(doc){
    var doc= doc.data()
    var nota=  doc.Nota
    sessionStorage.setItem('NotaAvalie', `${nota}`)
    if(nota==='2'){
 document.getElementById('labeStars').innerHTML=`🌟`
    }else if(nota==='4'){
 document.getElementById('labeStars').innerHTML=`🌟🌟`
   }else if(nota==='6'){
 document.getElementById('labeStars').innerHTML=`🌟🌟🌟`
   }else if(nota==='8'){
 document.getElementById('labeStars').innerHTML=`🌟🌟🌟🌟`
  }else if(nota==='10'){
   document.getElementById('labeStars').innerHTML=`🌟🌟🌟🌟🌟`
  }
}
 })
}
receberAvaliacão()

document.getElementById('MeuPerFoto').addEventListener('click', function(){
          var conf= localStorage.getItem('GoogleFoto')
          var logEmail = localStorage.getItem('GoogleEmail');
          if(!conf|| conf==''||!logEmail|| logEmail==''||conf==null||logEmail==null){
            Swal.fire('','Você Precisa se conectar com sua conta do Google!','')
          }else{
  
  var resp = document.getElementById('MeuPerFoto').src;
  Swal.fire({
    title: ``,
    html: `
      <img id='imimg' src="${resp}" alt="" width="280"> 
      <br><label id='trocarFoto' style="cursor:pointer">Trocar foto do Perfil</label>
    `,
    background: 'hsla(0, 0%, 100%, 0.00)',
    color: '#0e0e0e',
    showCloseButton: true,
    showConfirmButton: false,
    customClass: { popup: 'my-custom_img' },
    didOpen: () => { document.body.style.paddingRight = '0px'; }
  });
  // Quando clicar em "Trocar de foto"
  document.getElementById('trocarFoto').addEventListener('click', function(){
    document.getElementById('fileInput').click();
   });
  }
});
// Captura o arquivo escolhido
document.getElementById('fileInput').addEventListener('change', function(e){
  var file = e.target.files[0];
  var logEmail = localStorage.getItem('GoogleEmail');

  if(file && logEmail){
    var storageRef = firebase.storage().ref();
    var fotoRef = storageRef.child(`usuarios/${logEmail}/foto.jpg`);

    fotoRef.put(file).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
      // Atualiza Firestore
      var ddg = firebase.firestore();
      ddg.collection('UsuáriosGoogle').doc(logEmail).update({
        Foto: downloadURL
      });

      // Atualiza localStorage
      localStorage.setItem('fotoUsuario', downloadURL);
      // Atualiza preview no modal
      document.getElementById('MeuPerFoto').src = downloadURL;
      localStorage.setItem('GoogleFoto',`${downloadURL}` )
      Swal.fire("Foto atualizada com sucesso!");
       Swal.fire({
       title: `Foto Atualizada`,
       html: `
       <div id='custonAvaliar'>
         <p>Sucesso!</p>
       </div>
       `,
       background: 'hsla(0, 0%, 100%, 0.97)', // Cor de fundo
       color: '#141414', // Cor do texto// Cor do texto
       showCloseButton: true,  
       showCancelButton: false,
       showConfirmButton: false,
       customClass: {
       popup: 'my-custom_Avaliar' // Aplica a classe CSS personalizada
       },
       didOpen: () => {
       document.body.style.paddingRight = '0px';
       }
       });
    }).catch(error => {
      console.error("Erro ao enviar a foto:", error);
    });
  }
});
//clic pesquisa teclado
  var botao = document.getElementById('pesq-1');
  // Captura o evento de tecla pressionada
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // evita o comportamento padrão (como enviar formulário)
      botao.click(); // aciona o clique do botão
    }
  });
    
//You tube
function yuoTube(){
  window.open('https://www.youtube.com/@PlanetofChrist','_blank')
}

 function listaLateral(){
  var itens = 0
    var listTab = document.getElementById('laterList__');
listTab.innerHTML = '';
var db = firebase.firestore();
var produtosRef = db.collection(`Shorts`);

produtosRef.get().then((querySnapshot) => {
  querySnapshot.forEach(docSnap => {
    var doc = docSnap.data();
 //alert (itens)
  if(itens >= 5){

  } else{
    itens++
    // Criar elementos
    var flexgrup = document.createElement('div');
    var divInfo = document.createElement('div');
    var divVideo = document.createElement('div');
    var divActions = document.createElement('div');
    var iframe = document.createElement('iframe');
    var titulo = document.createElement('h4');
    var subtitulo = document.createElement('p');
    var botaoEditar = document.createElement('button');
   
    // IDs e classes
    flexgrup.className = 'video-item';
    iframe.className = 'youtube-player';
    iframe.width = "160";
    iframe.height = "280";
    iframe.allowFullscreen = false;
    divVideo.id='divggr'

    // Conteúdos
    // Supondo que você tenha salvo no Firestore o ID do vídeo do YouTube
    iframe.src = `https://www.youtube.com/embed/${doc.Links}`;
    titulo.innerHTML = doc.Titulo;
    subtitulo.innerHTML = doc.SubTitulo;

    botaoEditar.innerHTML = '<i class="fa-solid fa-eye"></i>';
     

    // Montagem
     
    divVideo.appendChild(iframe);
    divActions.appendChild(botaoEditar);
   
    divInfo.appendChild(titulo);
    divInfo.appendChild(subtitulo);
    flexgrup.appendChild(divVideo);
    flexgrup.appendChild(divInfo);
     flexgrup.appendChild(divActions);
    listTab.appendChild(flexgrup);

    botaoEditar.addEventListener('click', () => {
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { // Firefox
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari e Opera
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { // IE/Edge
    iframe.msRequestFullscreen();
  }
});
  }
  });

})
 }

listaLateral()