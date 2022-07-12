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
            await LoginRequisicao.login(dados)
            window.location.href = "./src/views/homePage.views.html"
        })
    }
}