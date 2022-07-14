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

    static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc2NDcwNDIsImV4cCI6MTY1ODI1MTg0Miwic3ViIjoiNjAifQ.g47K6HZaz8x2BJnf7im7clPS2CD5Q1naAj-L9JSNiVw"
        
    static headers = { "Content-Type": "application/json", 
        Authorization: `Bearer ${this.token}`
    }
}



export default Requisicao