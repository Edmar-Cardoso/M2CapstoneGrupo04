import LoginRequisicao from "./loginRequisicao.controller.js";

export default class funcaoLogin{
    static entrar(){
        const loginEntrar = document.querySelector('.loginEntrar');

        loginEntrar.addEventListener('click', async e => {
            e.preventDefault();
            const dados = {}
            const valoresForm = [...e.target.form]
            valoresForm.forEach(input =>{
                if(input.value !== ""){
                    dados[input.name] = input.value;
                }
            })
            const fetch = await LoginRequisicao.login(dados)
            console.log(fetch)
            if(fetch.response) {
                const usuario = document.querySelector(".inputUsuario")
                const senha   = document.querySelector(".inputSenha")

                usuario.style.border = "none"
                senha.style.border = "none"

                window.location.href = "./src/views/homePage.views.html"
            }
            else {
                const usuario = document.querySelector(".inputUsuario")
                const senha   = document.querySelector(".inputSenha")

                if(fetch.message === "email obrigatório") {
                    usuario.style.border = "red 1px solid"
                    senha.style.border = "none"
                }
                else {
                    senha.style.border = "red 1px solid"
                    usuario.style.border = "none"
                }
            }
            
        })
    }
}