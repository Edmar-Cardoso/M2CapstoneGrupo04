class Requisicao{

    static base_url = "https://habits-kenzie.herokuapp.com/api/habits";

    static async puxarDados(){
        const dados = await fetch(this.base_url, {
            method: "GET", 
            headers: { "Content-Type": "application/json", 
            Authorization: `Bearer ${this.token}`
            }
        }).then((response) =>{
            return response.json();
        }).then((response) => response).catch((err) => {
            console.log(err)
        })

        return dados;
    }
    

    static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc2NDcwNDIsImV4cCI6MTY1ODI1MTg0Miwic3ViIjoiNjAifQ.g47K6HZaz8x2BJnf7im7clPS2CD5Q1naAj-L9JSNiVw"
        
    }



export default Requisicao