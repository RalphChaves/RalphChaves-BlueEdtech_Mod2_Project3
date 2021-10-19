const express = require("express"); // importando o express
const path = require("path"); // importando o path
const app = express();
require('dotenv').config();
const db = require('./model/database');
const Personagens = require('./model/personagens');
const Episodes = require('./model/episodes');

// const mensagemSucesso = "";
const port = process.env.PORT || 3000;


app.set("view engine", "ejs"); //set engine para trabalhar com o EJS
app.use(express.static(path.join(__dirname,"views/public")));
app.use(express.urlencoded({ extended: true }));

// let message = "";

app.get("/", function (req, res) {
   
    // setTimeout(() => {
    //     message = "";
    // }, 1000);
    // res.render("index",{message});
    res.render("index");
    
});

app.get('/personagens', async (req,res) => {
  const personagens = await Personagens.findAll();
  res.render("personagens", {personagens: personagens});
});

app.get("/personagens/:id", async (req, res) => {
const personagens = await Personagens.findAll(req.params.id);
res.render("personagens", {    personagens  });
});

app.get("/criar", function (req, res) {
    res.render("criar");

});

app.post("/criar", async (req, res) => {
  const { pers_name, raca, habilidade, ima_url, equipamento, descricao } = req.body;
  
  const personagem = await Personagens.create({
      pers_name,
      raca,
      habilidade,
      ima_url,
      equipamento,
      descricao,
  }).then(function(){
    res.send(`Personagem criado com sucesso!
    Voce pode apertar o Botão "voltar" do seu navegador!`);
  }).catch(function(erro){
    res.send("Erro: Personagem nao pode ser cadastrado!" + erro);
  });

  res.render("criar", {
    personagem,
  });
});

app.get("/editar/:id", async (req, res) => {
  const personagens = await Personagens.findByPk(req.params.id);
  res.render("editar", {personagens: personagens});
});

app.post("/editar/:id", async (req, res) => {
  const personagens = await Personagens.findByPk(req.params.id);

  const { pers_name, raca, habilidade, ima_url, equipamento, descricao } = req.body;

  personagens.pers_name = pers_name;
  personagens.raca = raca;
  personagens.habilidade = habilidade;
  personagens.ima_url = ima_url;
  personagens.equipamento = equipamento;
  personagens.descricao = descricao;

  await personagens.save();

  res.redirect("/personagens");
});

app.get('/persdel/:id', async (req,res) => {
  const personagens = await Personagens.findByPk(req.params.id);
  
  await personagens.destroy();

  res.redirect("/personagens");
});



app.get("/animes", function (req, res) {
    res.render("animes");

});

app.get('/episodios', async (req,res) => {
   const episodios = await Episodes.findAll();
   res.render("episodios", {episodios: episodios});
 });

app.get("/episodios/:id", async (req, res) => {
 const episodios = await Episodes.findAll(req.params.id);
 res.render("episodios", {    episodios  });
});

app.get("/episodios", function (req, res) {
    res.render("episodios");
});

app.post("/episodios", async (req, res) => {
  const { ep_name, ep_numero, ep_descricao, ep_ima_url } = req.body;
  
  const episodios = await Episodes.create({
       ep_name,
         ep_numero,
      ep_ima_url,
      ep_descricao,
})

res.render("episodios", {
    episodios,
});
});

// app.get("/episodios", function (req, res) {
//   res.render("episodios");

// });

// app.get('/episodios', async (req,res) => {
//   const episodes = await Episodes.findAll();
//   res.render("episodios", {episodes: episodes});
// });

// app.get("/episodios/:id", async (req, res) => {
// const episodes = await Episodes.findAll(req.params.id);
// res.render("episodios", {    episodes  });
// });


// app.post("/new_episodios", async (req, res) => {
// const { ep_name, ep_numero, ep_ima_url, ep_descricao } = req.body;

// const episodes = await Episodes.create({
//     ep_name,
//     ep_numero,
//     ep_ima_url,
//     ep_descricao,
// })

// res.render("episodios", {episodes});
// });



db.conectado();
app.listen(port, ()=> console.log(`Servidor rodando em http://localhost:${port}`)); //faz o servidor escutar, passando a porta onde o serviço vai ficar ativo