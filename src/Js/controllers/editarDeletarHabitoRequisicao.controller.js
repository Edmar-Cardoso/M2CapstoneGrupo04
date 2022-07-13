export default class editarDeletarHabitoRequisicao{
    static url = "https://habits-kenzie.herokuapp.com/api/habits"
    static token = JSON.parse(localStorage.getItem("@kenzie-habit:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
        }

    static async editar(habito_id, editarHabitoDados){
        return await fetch(`${this.url}/${habito_id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(editarHabitoDados)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    static async deletar(habito_id){
        return await fetch(`${this.url}/${habito_id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
}