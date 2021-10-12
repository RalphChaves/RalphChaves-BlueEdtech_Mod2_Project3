const express = require("express"); // importando o express
const path = require("path"); // importando o path
const app = express();
require('dotenv').config();
const db = require('./model/database');
const Personagens = require('./model/personagens')

const port = process.env.PORT || 3000;


app.set("view engine", "ejs"); //set engine para trabalhar com o EJS
app.use(express.static(path.join(__dirname,"views/public")));
app.use(express.urlencoded({ extended: true }));

// let message = "";

// const pokedex = [{ 
//     numero: "Nº009",
//     nome: "Blastoise" ,
//     tipo: "Water",
//     imagem: "/img/blastoise009.png",
//     descrição: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
//     altura: "1.6 m",
//     peso: "85.5 kg",
//     categoria: "Shellfish",
//     habilidade: "Torrent",

// }];

app.get("/", function (req, res) {
   
    // setTimeout(() => {
    //     message = "";
    // }, 1000);
    // res.render("index",{message});
    res.render("index");
    
});

app.get('/personagens', async (req,res) => {
    const personagens = await Personagens.findAll();
    res.json(personagens);
    
});
app.get("/criar", function (req, res) {
    res.render("criar");

});

app.get("/animes", function (req, res) {
    res.render("animes");

});

app.post("/new_criar", function (req, res) {
    const {numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
    pokedex.push({
    numero:numero,
    nome:nome,
    tipo: tipo,
    imagem:imagem,
    descricao:descricao,
    altura: altura,
    peso: peso,
    categoria: categoria,
    habilidade: habilidade});
    
    message = "Pokemon cadastrado com sucesso.";
    res.redirect("/");
}); 


app.get("/detalhes/:id", function (req, res) {
    const id = req.params.id;
    const pokedexx = pokedex[id];
    res.render("detalhes", {pokedexx,});
});











db.conectado();
app.listen(port, ()=> console.log(`Servidor rodando em http://localhost:${port}`)); //faz o servidor escutar, passando a porta onde o serviço vai ficar ativo