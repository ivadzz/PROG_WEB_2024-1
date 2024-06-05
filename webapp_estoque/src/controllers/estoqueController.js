const usuario = require('../models/usuario');

function indexView(req, res){
    res.render('index.html');
}

function CriarContaView(req, res){
    res.render('usuario_cadastro.html');
}

function cadastrarUsuario(req,res){
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        perfil: req.body.perfil,
    }

    usuario.create(usuario).then(()=>{
        res.redirect('/?cadastrar_usuario=true')
    }).catch((err)=>{
        console.log(err);
        res.redirect('/?cadastrar_usuario=false')

    });

    res.redirect('/');
}

module.exports = {
    indexView,
    CriarContaView,
    cadastrarUsuario
}