
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
}, 1000)
//Imagens 1...5
sessionStorage.setItem('ImagemMy', '')
function imagens(){
var ListaCad = document.getElementById('selectCadastros').value;
var valor01 = document.getElementById('ListaCategoriaVendas').value;
if(!ListaCad||ListaCad===''||!valor01||valor01===''){
 swal('','Selecione a categoria e o tipo do cadastro para adicionar as imagens','error')
}else{
Swal.fire({
title:`Imagens`,
html: `
<div id="divmyImagens"> 
O1 <img id='mymg1' src="../src/Logo2.png"  width="70px">
02 <img id='mymg2' src="../src/Logo2.png" width="70px">
03<img id='mymg3' src="../src/Logo2.png" width="70px"> 
04 <img id='mymg4' src="../src/Logo2.png" width="70px">
05 <img id='mymg5' src="../src/Logo2.png" width="70px">
06 <img id='mymg6' src="../src/Logo2.png" width="70px">
</div>
<div id="myProgresos" title="Progresos">
<div id="myBarr">10%</div> 
`,
imageUrl: ``,
background: '#f3faff',
color: '#3f3f3f', // cor do texto });
showCloseButton: true,   // habilita o "X"
allowOutsideClick: true,
showConfirmButton: false,
customClass: {
popup: 'my-IMG' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
var img_1= document.getElementById('imgcad').src;
document.getElementById('mymg1').src=img_1;
var img_2= document.getElementById('imgcad2').src;
document.getElementById('mymg2').src=img_2;
var img_3= document.getElementById('imgcad3').src;
document.getElementById('mymg3').src=img_3;
var img_4= document.getElementById('imgcad4').src;
document.getElementById('mymg4').src=img_4;
var img_5= document.getElementById('imgcad5').src;
document.getElementById('mymg5').src=img_5;
var img_6= document.getElementById('imgcad6').src;
document.getElementById('mymg6').src=img_6;

document.getElementById('mymg1').addEventListener('click',function(){
sessionStorage.setItem('ImagemMy', 'imagem1');
sessionStorage.setItem('myMGid','imgcad');
sessionStorage.setItem('myMGid_','mymg1');
document.getElementById('files').click();
});
document.getElementById('mymg2').addEventListener('click',function(){
sessionStorage.setItem('ImagemMy', 'imagem2');
sessionStorage.setItem('myMGid','imgcad2');
sessionStorage.setItem('myMGid_','mymg2');
document.getElementById('files').click();
});
document.getElementById('mymg3').addEventListener('click',function(){
sessionStorage.setItem('ImagemMy', 'imagem3');
sessionStorage.setItem('myMGid','imgcad3');
sessionStorage.setItem('myMGid_','mymg3');
document.getElementById('files').click();
});
document.getElementById('mymg4').addEventListener('click',function(){
sessionStorage.setItem('ImagemMy', 'imagem4');
sessionStorage.setItem('myMGid','imgcad4');
sessionStorage.setItem('myMGid_','mymg4');
document.getElementById('files').click();
});
document.getElementById('mymg5').addEventListener('click',function(){
sessionStorage.setItem('ImagemMy', 'imagem5');
sessionStorage.setItem('myMGid','imgcad5');
sessionStorage.setItem('myMGid_','mymg5');
document.getElementById('files').click();
});
document.getElementById('mymg6').addEventListener('click',function(){
sessionStorage.setItem('ImagemMy', 'imagem6');
sessionStorage.setItem('myMGid','imgcad6');
sessionStorage.setItem('myMGid_','mymg6');
document.getElementById('files').click();
});
}}
// apenas UM listener de change
document.getElementById('files').addEventListener('change', function(e) {
document.getElementById('myProgresos').style.display = 'block'
var i = 0;
if (i == 0){
i = 1;
var elem = document.getElementById("myBarr");
var width = 1;
var id = setInterval(frame, 100);
function frame() {
if (width >= 100) {
i = 0;
document.getElementById('myProgresos').style.display = 'none'
clearInterval(id)
//document.getElementById('imgcad').value = `${url_imagem}`
} else {
width++;
elem.style.width = width + "%";
elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
}
}
}
var idfoto =''
var idImg = sessionStorage.getItem('ImagemMy');   // imagem1, imagem2...
var myMGid = sessionStorage.getItem('myMGid');    // imgcad, imgcad2...
var myMGid_=  sessionStorage.getItem('myMGid_');

var ListaCad = document.getElementById('selectCadastros').value;
var valor01 = document.getElementById('ListaCategoriaVendas').value;
var valor02 = document.getElementById('Input_ID').value;

var idfoto = `${ListaCad}/${valor01}/${valor02}/${idImg}`;
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${idfoto}.jpg`);
var task = storageRef.put(file);

task.on('state_changed', function progress(snapshot) {
}, function error(err) {
console.error(err);
}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem) {
// Atualiza apenas o <img> correto
document.getElementById(myMGid).src = url_imagem;
document.getElementById(myMGid_).src = url_imagem;
document.getElementById('myProgresos').style.displ
document.getElementById('myProgresos').style.display = 'none'          
});
storageRef.null
});
});
function swalclose(){
Swal.close()
}
// ver imagem
function verImagem(){
var imagem= document.getElementById('imgcad').src;
swal('','',`${imagem}`)
}
//fechar cad produtos
function fecharcolab(){
var resp= document.getElementById('selectCadastros');
resp.value=''
cadastroSelect()
//document.getElementById('divCadProd').style.display = 'none'
}
// select cadastros
function cadastroSelect(){
document.getElementById('input_DataApresentação').value= sessionStorage.getItem('data')

var resp= document.getElementById('selectCadastros').value;
if(resp==='Produtos'){ //Inicio
limparCProdutos()
var resp1= document.getElementById('selectCadastrados');
resp1.value=''
cadastradosSelect()
// Função para gerar código aleatório
function gerarCodigo() {
var caracteres_ = 'ABC1DEF2GHI3JKL4MNO5PQR6STU7WXY8Z9';
var codigo = '';
for (let i = 0; i < 8; i++) {
codigo += caracteres_.charAt(Math.floor(Math.random() * caracteres_.length));
}
return codigo;
}
// Função para salvar no Firestore garantindo unicidade
var db = firebase.firestore();
let codigo;
let existe = true;
while (existe) {
codigo = gerarCodigo();
const snapshot =  db.collection("Lista Geral").doc(codigo).get();
existe = snapshot.exists; // true se já existe
}
// o código é único
db.collection("Lista Geral").doc(codigo).set({
criadoEm: firebase.firestore.FieldValue.serverTimestamp()
});
document.getElementById('Input_ID').value = codigo;
console.log("Código salvo com sucesso:", codigo);
gerarCodigo();
document.getElementById('divCadProd').style.display = 'block'
//Fim
} else if(resp==='Vendas'){//Inicio
//
var resp1= document.getElementById('selectCadastrados');
resp1.value=''
cadastradosSelect()
//
document.getElementById('divCadProd').style.display = 'none'
//Fim
}else if(resp==='Clientes'){//Inicio
//
var resp1= document.getElementById('selectCadastrados');
resp1.value=''
cadastradosSelect()
//
document.getElementById('divCadProd').style.display = 'none'
//Fim
}else if(resp==='Colaboradores'){//Inicio
//
var resp1= document.getElementById('selectCadastrados');
resp1.value=''
cadastradosSelect()
//
document.getElementById('divCadProd').style.display = 'none'
//Fim
} else if(resp===''){//Inicio
document.getElementById('divCadProd').style.display = 'none'
//Fim
}else{
}
}
// Lista de cadastrados
function cadastradosSelect(){
var resp1= document.getElementById('selectCadastrados').value;
if(resp1==='Produtos'){//Inicio
//
Swal.fire({ 
title: `Selecione uma lista`,
text: ``, 
html:`
<div id="divSelectCadastradosMy">
<select id="selectCadastradosMy">
<option value="">Selecione uma lista</option>
 <option value='Destaques'>Em destaque</option>
  <option value='Lançamentos'>Lançamentos</option>
   <option value="Sermões">VD. Sermões</option>
    <option value="devocional">VD. Devocionais</option>
     <option value="vida&saúde">VD. Vida & saúde</option>
      <option value="Estudos">Estudos Bíblicos</option>
       <option value="Filmes">Filmes</option>
         <option value="Séries">Series</option>
         <option value="Desenhos">Desenhos</option>
          <option value="Documentários">Documentários</option>
           <option value="Lista Geral">Lista Geral</option>
</div>

`,
imageUrl: ``,
background: '#00325300',
color: '#fff', // cor do texto });
showCloseButton: true,   // habilita o "X"
allowOutsideClick: true,
showConfirmButton: false,
customClass: {
popup: 'my-listselect' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
document.getElementById('selectCadastradosMy').addEventListener('change', function(){
 lista_cadastrados()
})


var resp= document.getElementById('selectCadastros');
resp.value=''
document.getElementById('Lista_produtos').style.display = 'block'
cadastroSelect()

//
// document.getElementById('divCadProd').style.display = 'none'
} else if(resp1==='Vendas'){//Inicio
//
var resp= document.getElementById('selectCadastros');
resp.value=''
document.getElementById('Lista_produtos').style.display = 'none'
cadastroSelect()
//
// document.getElementById('divCadProd').style.display = 'none'
}else if(resp1==='Clientes'){//Inicio
//
var resp= document.getElementById('selectCadastros');
resp.value=''
document.getElementById('Lista_produtos').style.display = 'none'
cadastroSelect()
//
// document.getElementById('divCadProd').style.display = 'none'
}else if(resp1==='Colaboradores'){//Inicio
//
var resp= document.getElementById('selectCadastros');
resp.value=''
document.getElementById('Lista_produtos').style.display = 'none'
cadastroSelect()
//
// document.getElementById('divCadProd').style.display = 'none'
} else if(resp1===''){//Inicio
    document.getElementById('Lista_produtos').style.display = 'none'
//    document.getElementById('divCadProd').style.display = 'none'
}else{
}
}
document.getElementById("Input_ID").readOnly = true;//ID não substituivel
// salvar produto no cadastro
function SalvarCadProdutos(){
var valor01= document.getElementById('ListaCategoriaVendas').value;// select 01
var valor02= document.getElementById('Input_ID').value; //ID
var valor03= document.getElementById('Input_titulo').value;
var valor04= document.getElementById('Input_Subtitulo').value;
var valor05= document.getElementById('Input_Valor').value;
var valor06= document.getElementById('Input_ValorDesconto').value;
var valor07= document.getElementById('Input_OBS').value;
var valor08= document.getElementById('Input_Referencia').value;// select 02
var valor09= document.getElementById('Input_link').value;

// Tamanho e cor virão das label
//var valor10= document.getElementById('Input_Tamanhos').value;// select 03 tamanho
var valor10= document.getElementById('input_DataApresentação').value; // label tamanhos
//var valor12= document.getElementById('Input_cores').value;//select 04 cores
var valor11= document.getElementById('idCores').innerHTML;//label cores
//
var valor12= document.getElementById('Input_Origem').value;
var valor13= document.getElementById('Input_Texto').value;
var valor14= document.getElementById('imgcad').src;
var valor15= document.getElementById('imgcad2').src;
var valor16= document.getElementById('imgcad3').src;
var valor17= document.getElementById('imgcad4').src;
var valor18= document.getElementById('imgcad5').src;
var valor19= document.getElementById('imgcad6').src;

var horaok= sessionStorage.getItem("horaok");
var dataok=sessionStorage.getItem("dataok");
if(!horaok||horaok===''){
var hora=sessionStorage.getItem('hora')
} else{
var hora= `${horaok}`;
};
if(!dataok||dataok===''){
var data=sessionStorage.getItem('data')
} else{
var data= `${dataok}`;
}
var horaAtualizada=sessionStorage.getItem('hora')
var dataAtualizada=sessionStorage.getItem('data')

if(!valor01||valor01===''||!valor02||valor02===''||!valor03||valor03===""|!valor12||valor12===""|!valor10||valor10===""){
Swal.fire('','Preencha os campos obrigatórios','error')
if(valor01){
var input1 = document.getElementById('ListaCategoriaVendas')
input1.style.outline = "none";
}else{
var input1 = document.getElementById('ListaCategoriaVendas')
input1.style.outline = "2px solid red";
}
if(valor03){
var input3 = document.getElementById('Input_titulo')
input3.style.outline = "none";
}else{
var input3 = document.getElementById('Input_titulo')
input3.style.outline = "2px solid red";
}
if(valor05){
var input5 = document.getElementById('Input_Valor')
input5.style.outline = "none";
}else{
var input5 = document.getElementById('Input_Valor')
input5.style.outline = "2px solid red";
}
if(valor08){
var input8 = document.getElementById('Input_Referencia')
input8.style.outline = "none";
}else{
var input8 = document.getElementById('Input_Referencia')
input8.style.outline = "2px solid red";
}
}else{
var input1 = document.getElementById('ListaCategoriaVendas')
input1.style.outline = "none";
var input3 = document.getElementById('Input_titulo')
input3.style.outline = "none";
var input5 = document.getElementById('Input_Valor')
input5.style.outline = "none";
var input8 = document.getElementById('Input_Referencia')
input8.style.outline = "none";
var cad= firebase.firestore()
cad.collection(`${valor01}`).doc(`${valor02}`).set({
Lista_Cad: valor01,
ID:valor02,
Titulo:valor03,
SubTitulo:valor04,
Valor:valor05,
VcDesconto:valor06,
OBS:valor07,
Lista_ReF:valor08,
Links:valor09,
Data_Apresent:valor10,
Cores:valor11,
Origem:valor12,
Texto:valor13,
Imagem:valor14,
Imagem2:valor15,
Imagem3:valor16,
Imagem4:valor17,
Imagem5:valor18,
Imagem6:valor19,
Data:data,
Hora:hora,
Hora_Atualizada:horaAtualizada,
Data_Atualizada:dataAtualizada,
});
var cadCod= firebase.firestore()
cadCod.collection(`Lista Geral`).doc(`${valor02}`).set({
Lista_Cad: valor01,
ID:valor02,
Titulo:valor03,
SubTitulo:valor04,
Valor:valor05,
VcDesconto:valor06,
OBS:valor07,
Lista_ReF:valor08,
Links:valor09,
Data_Apresent:valor10,
Cores:valor11,
Origem:valor12,
Texto:valor13,
Imagem:valor14,
Imagem2:valor15,
Imagem3:valor16,
Imagem4:valor17,
Imagem5:valor18,
Imagem6:valor19,
Data:data,
Hora:hora,
Hora_Atualizada:horaAtualizada,
Data_Atualizada:dataAtualizada,
});
Swal.fire({ 
title: ``,
text: ``, 
html:`
<div id="divInit"> 
<img id='prodImgSalvo' src="" alt="Logo Orla Sul Marketplace" class="logo-swal" width="70%">
<button id='btnTime'>☀️</button><p>Salvando...</p>
<div id="myProgresos_" title="Progresos_">
<div id="myBarr_">10%</div>
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
document.getElementById('prodImgSalvo').src=valor14
document.getElementById('myProgresos_').style.display = 'block'
var i = 0;
if (i == 0){
i = 1;
var elem = document.getElementById("myBarr_");
var width = 1;
var id = setInterval(frame, 75);
function frame() {
if (width >= 100) {
i = 0;
document.getElementById('myProgresos_').style.display = 'none'
Swal.fire('','Produto cadastrado!','success')
setTimeout(function(){
window.location.reload()
},2000)
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
}
//Limpar campos cad produtos
function limparCProdutos(){
var valor01= document.getElementById('ListaCategoriaVendas').value=''// select 01
//var valor02= document.getElementById('Input_ID').value='' //ID
document.getElementById('Input_titulo').value=''
document.getElementById('Input_Subtitulo').value=''
document.getElementById('Input_Valor').value=''
document.getElementById('Input_ValorDesconto').value=''
document.getElementById('Input_OBS').value=''
document.getElementById('Input_Referencia').value=''// select 02
document.getElementById('Input_link').value=''
document.getElementById('idTamanhos').innerHTML='';
document.getElementById('idCores').innerHTML='';
// Tamanho e cor virão das label
document.getElementById('input_DataApresentação').value=''// select 03 tamanho
document.getElementById('idTamanhos').value=''// label tamanhos
//
document.getElementById('Input_cores').value=''//select 04 cores
document.getElementById('idCores').value=''//label cores
//
document.getElementById('Input_Origem').value=''
document.getElementById('Input_Texto').value=''
document.getElementById('imgcad').src=`../src/Logo2.png`
}
// Setar tamanho
document.getElementById('input_DataApresentação').addEventListener('change', function() {
var Data_ap=document.getElementById('input_DataApresentação').value;
if(Data_ap==''){
var resp1=document.getElementById('idTamanhos');
resp1.innerHTML='';
} else{ 
var resp1=document.getElementById('idTamanhos');
resp1.innerHTML= resp1.innerHTML= Data_ap;
//var TM=document.getElementById('idTamanhos').innerHTML;
//swal('Selecione varios tamanhos',`${TM}`)
}
});
// Setar cores
document.getElementById('Input_cores').addEventListener('change', function() {
var cor=document.getElementById('Input_cores').value;
if(cor=='Limpar'){
var resp2=document.getElementById('idCores');
resp2.innerHTML='';
} else{ 
var resp2=document.getElementById('idCores');
resp2.innerHTML= resp2.innerHTML+cor+ ', ';
var cor=document.getElementById('idCores').innerHTML;
//swal('Selecione varias cores',`${cor}`)
}
})
//Valor em real
const campoValorEl = document.getElementById("Input_Valor");
campoValorEl.addEventListener("input", () => {
var valor = campoValorEl.value.replace(/\D/g, "");
if (valor) {
var numero = (parseInt(valor, 10) / 100).toFixed(2);
campoValorEl.value = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BRL"
}).format(numero);
}
});
const campoValorEl_ = document.getElementById("Input_ValorDesconto");
campoValorEl_.addEventListener("input", () => {
var valor2 = campoValorEl_.value.replace(/\D/g, "");
if (valor2) {
var numero2 = (parseInt(valor2, 10) / 100).toFixed(2);
campoValorEl_.value = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BRL"
}).format(numero2);
}
});
// lista produtos listProd

function lista_cadastrados(){
 document.getElementById('lblListaItens').innerHTML=`LIsta Vázia`
var resp=document.getElementById('selectCadastradosMy').value;


var dbx = firebase.firestore();
var produtosRef = dbx.collection("Lista Geral");

produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach((doc) => {
var dados = doc.data();   // dados do documento
var id = doc.id;          // ID do documento
var itens = querySnapshot.size;

//alert(`ID: ${id}\nTítulo: ${dados.Titulo}\nValor: ${dados.Valor}`);

if (!dados.Titulo || dados.Titulo === '' || 
!dados.Links || dados.Links === '' || 
!id || id === '') {

dbx.collection("Lista Geral").doc(id).delete().then(() => {
//alert(`Código ${id} excluído por falta de informações obrigatórias.`);
});

} else {
// aqui você pode tratar os documentos válidos
}
});
});

setTimeout(function(){
    Swal.close()
var listTab = document.getElementById('listProd');
listTab.innerHTML = ''
var db = firebase.firestore()
var produtosRef = db.collection(`${resp}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens = querySnapshot.size;
var flexgrup=document.createElement('div');
var div=document.createElement('div');
var div2=document.createElement('div');
var div3=document.createElement('div');
var imagem=document.createElement('img');
var label=document.createElement('label');
var label2=document.createElement('label');
var label3=document.createElement('label');
var label4=document.createElement('label');
var botao=document.createElement('butonn');
var botao2=document.createElement('butonn');
var botao3=document.createElement('butonn');
//IDs
flexgrup.id='divlist';
div.id='div1list';
div2.id='div2list';
div3.id='div3list';
imagem.id="imglist";
label.id='labellist';
label2.id='labellist2';
label3.id='labellist3';
label4.id='labellist4';
botao.id='btnlist';
botao2.id='btnlist2';
botao3.id='btnlist3';
//Conteúdos
imagem.src=doc.Imagem;
label.innerHTML=doc.Titulo;
label2.innerHTML=doc.SubTitulo;
label3.innerHTML= doc.Data_Apresent;
label4.innerHTML=doc.ID;
botao.innerHTML='';
botao.className=`fa-solid fa-pen-to-square`
botao2.innerHTML='';
botao2.className=`fa-solid fa-trash`
botao3.innerHTML='';
botao3.className=`fa-solid fa-eye`
//Montagem
div.appendChild(imagem);
div2.appendChild(label);
div2.appendChild(document.createElement('br'));
div2.appendChild(label2);
div2.appendChild(document.createElement('br'));
div2.appendChild(label3);
div2.appendChild(document.createElement('br'));
div2.appendChild(label4);
div2.appendChild(document.createElement('br'));
div3.appendChild(botao);
div3.appendChild(document.createElement('br'));
div3.appendChild(botao2);
div3.appendChild(document.createElement('br'));
div3.appendChild(botao3);
flexgrup.appendChild(div);
flexgrup.appendChild(div2);
flexgrup.appendChild(div3);
listTab.appendChild(flexgrup);
setTimeout(function(){
document.getElementById('lblListaItens').innerHTML=`✅ <b id='b_list_1'>${resp}</b> - <b id='b_list_2'>(${itens})</b> itens`
},1000)
botao.addEventListener('click',function(){
var list1=document.getElementById('ListaCategoriaVendas');
list1.value= doc.Lista_Cad;
document.getElementById('Input_ID').value= doc.ID
document.getElementById('Input_titulo').value=doc.Titulo;
document.getElementById('Input_Subtitulo').value=doc.SubTitulo;
document.getElementById('Input_Valor').value=doc.Valor;
document.getElementById('Input_ValorDesconto').value=doc.VcDesconto;
document.getElementById('Input_OBS').value=doc.OBS;
 var ref=document.getElementById('Input_Referencia');
 ref.value=doc.Lista_ReF;
document.getElementById('Input_link').value=doc.Links;

//var valor10= document.getElementById('Input_Tamanhos').value;// select 03 tamanho
document.getElementById('idTamanhos').innerHTML=doc.Data_Apresent;
//var valor12= document.getElementById('Input_cores').value;//select 04 cores
document.getElementById('idCores').innerHTML= doc.Cores;

 var selectsexo= document.getElementById('Input_Origem');
selectsexo.value=doc.Origem;

document.getElementById('Input_Texto').value= doc.Texto;
document.getElementById('imgcad').src= doc.Imagem;
document.getElementById('imgcad2').src= doc.Imagem2;
document.getElementById('imgcad3').src= doc.Imagem3;
document.getElementById('imgcad4').src= doc.Imagem4;
document.getElementById('imgcad5').src= doc.Imagem5;
document.getElementById('imgcad6').src= doc.Imagem6;
 document.getElementById('input_DataApresentação').value= doc.Data_Apresent
 sessionStorage.setItem("horaok", doc.Hora);
sessionStorage.setItem("dataok", doc.Data);
var resplist=document.getElementById('selectCadastros')
resplist.value='Produtos'
document.getElementById('divCadProd').style.display = 'block'
 document.getElementById('init').click()
})

})
})

var resplist=document.getElementById('selectCadastrados')
resplist.value=''
var resplist2=document.getElementById('selectCadastradosMy')
resplist2.value=''
},700)
}

function FecharCadastradoslist(){
  var resplist=document.getElementById('selectCadastrados')
resplist.value=''

cadastradosSelect()
}
document.getElementById('lblListaItens').addEventListener('click', function(){
Swal.fire({ 
title: `Selecioneuma lista`,
text: ``, 
html:`
<div id="divSelectCadastradosMy">
<select id="selectCadastradosMy">
<option value="">Selecione uma lista</option>
<option value='Destaques'>Em destaque</option>
 <option value='Lançamentos'>Lançamentos</option>
  <option value="Sermões">VD. Sermões</option>
   <option value="devocional">VD. Devocionais</option>
    <option value="vida&saúde">VD. Vida & saúde</option>
     <option value="Estudos">Estudos Bíblicos</option>
      <option value="Filmes">Filmes</option>
        <option value="Séries">Series</option>
        <option value="Desenhos">Desenhos</option>
         <option value="Documentários">Documentários</option>
          <option value="Lista Geral">Lista Geral</option>
</div>
`,
imageUrl: ``,
background: '#00325300',
color: '#fff', // cor do texto });
showCloseButton: true,   // habilita o "X"
allowOutsideClick: true,
showConfirmButton: false,
customClass: {
popup: 'my-listselect' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';   
}
})
document.getElementById('selectCadastradosMy').addEventListener('change', function(){
 lista_cadastrados()
 document.getElementById('input_DataApresentação').value= sessionStorage.getItem('data')

})
})
