

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
 var col=sessionStorage.getItem('Coleção')
sessionStorage.setItem('Cadastro', `${col}`)
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



//Lista Devocional
function filmesSites(){
  var coleção=sessionStorage.getItem('Cadastro')
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
 var resp= sessionStorage.getItem('Cadastro')
 if(!resp||resp==''){
  sessionStorage.setItem('Cadastro',"Filmes")
  setTimeout(function(){
    filmesSites()
  },1000)
 }else{
  setTimeout(function(){
     var resp=sessionStorage.getItem('Cadastro')
    filmesSites()
  },1000)
 }


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
background: '#000303',
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
            sessionStorage.setItem('Código_Result_PSQ', data.ID)
            setTimeout(function(){
            window.open(`../html/resutP.html`,'_self')
            },400)   
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
//inicio progresso
function initPage(){
Swal.fire({ 
title: ``,
text: ``, 
html:`
<div id='btnTime_'>
<img src="../src/Logo2.png" alt="" class="logo-swal" width="55%"></div>
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
var id = setInterval(frame, 55);
function frame() {
if (width >= 100) {
i = 0;

document.getElementById('myProgresos').style.display = 'none'
document.getElementById('pesquise').value=""// impt de pesquisa
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

//Ir para o topo da pagina
function Home(){
document.getElementById('a_inicio').click()
fecharperf()
}

//Menu
function fecharperf(){
document.getElementById("MeuPerfil").classList.remove("MeuPerfil-ativo");
}
function menu(){
    document.getElementById("MeuPerfil").classList.add("MeuPerfil-ativo");
}
document.getElementById('fecharclickperfil').addEventListener('click',function(){
 fecharperf()
})

//Serie
function serie(){
  sessionStorage.setItem('Coleção','Séries')
  setTimeout(function(){
 window.location.reload()
  },500)
}

//Filme
function Filme(){
  sessionStorage.setItem('Coleção','Filmes')
  setTimeout(function(){
 window.location.reload()
  },500)
}

function sermãoHead(){
   sessionStorage.setItem('Coleção','Sermões')
  setTimeout(function(){
window.location.reload()
  },700)
}

function desenhos(){
 sessionStorage.setItem('Coleção','Desenhos')
  setTimeout(function(){
window.location.reload()
  },700)
}

function documentarios(){
 sessionStorage.setItem('Coleção','Documentários')
  setTimeout(function(){
window.location.reload()
  },700)
}

function vidaEsaude(){
 sessionStorage.setItem('Coleção','vida&saúde')
  setTimeout(function(){
window.location.reload()
  },700)
}

function devocional(){
   sessionStorage.setItem('Coleção','devocional')
  setTimeout(function(){
window.location.reload()
  },700)
}

document.getElementById('SermõesLater').addEventListener('click',function(){
sermãoHead()

});
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
   Filme()
  }else if(resp==='Séries'){
   serie()
   }else if(resp==='Desenhos'){
    desenhos()
   }else if(resp==='Documentários'){
   documentarios()
  }else if(resp==='sair'){
   var resp_= document.getElementById('selectListaUm');
  resp_.value=''
  }
});


//voltar
 document.getElementById('lblVoltar').addEventListener('click',function(){
window.open(`../index.html`,'_self')
 })