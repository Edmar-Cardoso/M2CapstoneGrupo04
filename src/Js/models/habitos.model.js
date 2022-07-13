class Habitos{
    constructor(habit_id, habit_title, habit_description, habit_category, habit_status){
        this.habit_id           = habit_id;
        this.habit_title        = habit_title;
        this.habit_description  = habit_description;
        this.habit_category     = habit_category;
        this.habit_status       = habit_status;
    }



listagemHabitos(){

    const li               = document.createElement("li");

    const Status           = document.createElement("p");
    const TituloHabito     = document.createElement("p");
    const DescricaoHabito  = document.createElement("p");
    const Categoriahabito  = document.createElement("p");
    const EditarHabito     = document.createElement("button");
    


    Status.innerText           = this.habit_status;
    TituloHabito.innerText     = this.habit_title;
    DescricaoHabito.innerText  = this.habit_description;
    Categoriahabito.innerText  = this.habit_category;
    EditarHabito.innerText     = "...";

    Status.classList.add("status2");
    TituloHabito.classList.add("titulo");
    DescricaoHabito.classList.add("descricao2");
    Categoriahabito.classList.add("categoria2");
    EditarHabito.classList.add("editar2", "editarBotao");

    
    li.append(Status, TituloHabito, DescricaoHabito, Categoriahabito, EditarHabito);

    return li;

}
}

export default Habitos