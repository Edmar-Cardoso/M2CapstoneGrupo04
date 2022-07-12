export default class LoginRequisicao{
    static url = "https://habits-kenzie.herokuapp.com/api/userLogin"

    static async login(loginDados){
        return await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDados)
            
            })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem("@kenzie-habit:usuario", JSON.stringify(res.response))
                localStorage.setItem("@kenzie-habit:token", JSON.stringify(res.token))
                
                return res
            
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}