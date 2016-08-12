var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* input dos dados de performace */  
app.get('/inputatleta', function (req, res) {
	res.render('inputatleta');
});

app.post('/botao', function(req,res) {
	vetor[0] = req.body.corr0;
	vetor[1]= req.body.corr1;
	vetor[2] = req.body.corr2;
	vetor[3]= req.body.corr3;
	vetor[4] = req.body.corr4;
	vetor[5] = req.body.corr5;
	console.log(vetor);
	res.render('resultado4', {carga: vetor});
});

/* fim da pagina dinamica dos graficos e resultados */

app.get('/cadastroatleta', function (req, res) {
	res.render('cadastroatleta');
});




app.post('/dadoscadastrais', function(req,res) {
	atleta.nome = req.body.nome;
	atleta.nomedopai= req.body.nomedopai;
	atleta.nomedamae = req.body.nomedamae;
	atleta.endereco= req.body.endereco;
	atleta.complemento= req.body.complemento;
	atleta.bairro= req.body.bairro;
	atleta.estado= req.body.estado;
	atleta.cep= req.body.cep;
	atleta.telres= req.body.telres;
	atleta.telcom= req.body.telcom;
	atleta.telcel= req.body.telcel;
	atleta.telrec= req.body.telrec;
	atleta.email= req.body.email;
	atleta.txtNascimento= req.body.txtNascimento;
	atleta.txtNatural= req.body.txtNatural;
	atleta.txtSexo= req.body.txtSexo;
	atleta.txtNacionalidade= req.body.txtNacionalidade;
	atleta.txtEstadoCivil= req.body.txtEstadoCivil;
	atleta.txtRg= req.body.txtRg;
	atleta.txtRgEmissao= req.body.txtRgEmissao;
	atleta.txtRgExp= req.body.txtRgExp;
	atleta.txtCpf= req.body.txtCpf;
	atleta.txtPeso= req.body.txtPeso;
	atleta.dpeso= req.body.dpeso;
	atleta.txtAltura= req.body.txtAltura;
	atleta.txtAlturaData= req.body.txtAlturaData;
	console.log(atleta);
	res.render('inputatleta');
});

app.get('/loginatleta', function (req, res) {
	res.render('loginatleta');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var vetor = [];


var valor;

var atleta ={};




//var jogador = {};
//        jogador.nome = prompt("Nome do jogador "+i+":");
//        jogador.token = i;
//        jogador.posicao = 0;
//        jogador.dinheiro = 1000;
//        
 //       jogadores.push(jogador);