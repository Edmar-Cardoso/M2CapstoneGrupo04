export default class editarDeletarHabitoRequisicao{
    static url = "https://habits-kenzie.herokuapp.com/api/habits"
    static token = JSON.parse(localStorage.getItem("@kenzie-habit:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
        }

    static async editar(habitoId, editarHabitoDados){
        return await fetch(`${this.url}/${habitoId}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(editarHabitoDados)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    static async deletar(habitoId){
        return await fetch(`${this.url}/${habitoId}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
}