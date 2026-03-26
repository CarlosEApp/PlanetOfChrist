

// lista inicial firebase
function listaInicil(){
var listaInt= 'logos'//sessionStorage.getItem('ListInicio');
var itensListInit= document.getElementById('itensListInit');
var list= document.getElementById('listaInicial');
list.innerHTML = '';
sessionStorage.setItem('itens_',``)
var firebaseConfig = {
apiKey: "AIzaSyD7q-qzsIhACByHciJkDBI3yPuKK_bgHUM",
authDomain: "logos-asd.firebaseapp.com",
projectId: "logos-asd",
storageBucket: "logos-asd.firebasestorage.app",
messagingSenderId: "801633317687",
appId: "1:801633317687:web:3a38f39b2e9861902e20b2",
measurementId: "G-GJEW931Y73"
};
firebase.initializeApp(firebaseConfig);  
//respList_('click')
//alert(listaInt)
var db = firebase.firestore();

var produtosRef = db.collection(`Codigos`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens= querySnapshot.size;
var div1=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');        
var img=document.createElement('img');
var imgbotão=document.createElement('img');
var botão1= document.createElement('button');
var botão2= document.createElement('button'); 
var botão3= document.createElement('button'); 
var botão4= document.createElement('button'); 
var label1= document.createElement('label');
var label2= document.createElement('label'); 
var label3= document.createElement('label');
var br1=  document.createElement('br');
var br2=  document.createElement('br');  
div1.id='div1List_';
div3.id='div3List_';
div2.id='div2List';
img.id='imgList';
label1.id='label1List';
label2.id='label2List'; 
label3.id='label3List';
botão1.id='botão1List';
botão2.id='botão2List'; 
botão3.id='botão3List'; 
botão4.id='botão3List'; 
imgbotão.id='imgList2';
if(doc.Lista=='video'){
 img.src=`src/emojiplayervideo.png`;
 var IMG=`src/emojiplayervideo.png`;
}else{
img.src=`${doc.URL}`;
var IMG= `${doc.URL}`;
}
label1.textContent=`${doc.Titulo}`;
label2.textContent=`${doc.Nome}`;
label3.textContent=`Código: ${doc.Código}`;
if(!doc.Canvas||doc.Canvas==''){
imgbotão.src='src/Logo_ASD.png'
} else{
imgbotão.src='src/logoCanva.png'
}
botão1.title='Canva';
botão2.title='Ver mais';
botão3.title='Compartilhar';
botão4.title='Download';
botão2.textContent='';
botão2.className=`fa-solid fa-eye`;
botão3.textContent='';
botão3.className=`fa-solid fa-square-share-nodes`;
botão4.className=`fa-solid fa-download`;
botão1.appendChild(imgbotão);
div1.appendChild(label1);
div1.appendChild(br1); 
div1.appendChild(img);
div2.appendChild(label2); 
div2.appendChild(br2); 
div2.appendChild(label3); 
div3.appendChild(botão1);
div3.appendChild(botão2); 
div3.appendChild(botão4); 
div3.appendChild(botão3); 
div1.appendChild(div2);
div1.appendChild(div3);
list.appendChild(div1) ;
//sessionStorage.setItem('pesQuiSar', '');
//sessionStorage.setItem('itens_',`${itens}`)
//itensListInit.innerHTML=`(${itens}) Itens `;
//document.getElementById('itensListInit').style.display='block'
//document.getElementById('a_select_procuraTdlist').click()
botão4.addEventListener('click', () => {
  Swal.fire('Download','carregando arquivo...','')
    if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var id =localStorage.getItem('USERID');
var data= sessionStorage.getItem('data')
var hora= sessionStorage.getItem('hora')
var nome= doc.Nome_Arquivo;
var name= nome.split('/')
var n1= name[0]
var n2= name[1]
fetch(doc.URL)
.then(res => res.blob())
.then(blob => {
const blobURL = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = blobURL;
a.download = n2 || 'arquivo.png';
document.body.appendChild(a);
a.click();
a.remove();
URL.revokeObjectURL(blobURL);
})
.catch(err => {
console.error("Erro ao baixar:", err);
Swal.fire("Oops!", "Não foi possível fazer o download.", "error");
});
var id =localStorage.getItem('USERID');
var ff=localStorage.getItem('FotoUser');
var nn= localStorage.getItem('NomeUser');
var emm= localStorage.getItem('EmalUser');
var down= firebase.firestore();
down.collection('Dowloads').doc(`${doc.Código}-${hora}`).set({
Download: `${data}-${hora}`,
Codigo:doc.Código,
Nome_Arquivo: doc.Nome,
ID:id,
Titulo:doc.Titulo,
NomeUser:nn,
FotoUser:ff,
EmailUser:emm,
URL:doc.URL,
})
});
botão2.addEventListener('click', function(){
    if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
if(!doc.Criador|| doc.Criador==''){
var criador='Desconhecido'
} else{
var criador= doc.Criador
}
swal(`${doc.Titulo}`,`Formato do arquivo: ${doc.Formato}\n\n Nome: ${doc.Nome}\n\n_________Descrição__________\n\n${doc.Descrição}\n\nCriado por: ${criador} \nData de Criação: ${doc.Data_criação}`,`${IMG}`)
});
img.addEventListener('click', function(){
    if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
window.open(doc.URL,'_blank')
});
botão3.addEventListener('click',function(){
    if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<br> 
<button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
<br><br>   
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button><br><br>
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
    if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = encodeURIComponent("https://asdlogos.netlify.app");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
    if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = "https://asdlogos.netlify.app";
var img = `${doc.Titulo}: ${doc.URL}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img}\n\n Canva edite: ${doc.Canvas} \n\n Código: ${cod}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
});
botão1.addEventListener('click',function(){
if(doc.Canvas==''){
swal('desculpe-me!','Esse design não possui link para edição no Canva..','src/Sorry.png')
} else{
window.open(`${doc.Canvas}`,'_self')
}
});
})
})
}

listaInicil()