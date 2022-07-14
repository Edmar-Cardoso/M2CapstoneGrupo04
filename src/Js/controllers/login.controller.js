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

            document.body.classList.add("fadeout");
            window.setTimeout(() => {
                window.location.assign("./src/views/homePage.views.html")
            }, 2000)
        })
    }
}