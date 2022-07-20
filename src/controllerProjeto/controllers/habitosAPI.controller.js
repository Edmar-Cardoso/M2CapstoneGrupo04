class Requisicao{

    static base_url = "https://habits-kenzie.herokuapp.com/api/habits";

    static async puxarDados(){
        const dados = await fetch(this.base_url, {
            method: "GET", 
            headers: this.headers
        }).then((response) =>{
            return response.json();
        }).then((response) => response).catch((err) => {
            console.log(err)
        })

        return dados;
    }
    
    static async checarStatus (habitoId) {
        return await fetch(`${this.base_url}/complete/${habitoId}`, {
            method: "PATCH",
            headers: this.headers
        }).then((res) => {
            return res.json()
        }).catch((err) => {
            console.log(err)
        })
    }

    static token = JSON.parse(localStorage.getItem("@kenzie-habit:token"))
            
    static headers = { "Content-Type": "application/json", 
        Authorization: `Bearer ${this.token}`
    }
}



export default Requisicao