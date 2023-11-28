
const botaoiniciar = () => {
    const iSenha = document.getElementById("inputSenha").value;
    const senha = '85ee0fe4f155a9af2657d85054ad63ca';
    
    if (hex_md5(iSenha) === senha){
        localStorage.setItem("autorizado", "true");
        console.log("Login Realizado!")

        window.location = './home.html'
        
    }else{
        alert('Senha errada!')
    }
}
document.getElementById('inputSenha').addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
       
       logarBtn();
    }
});
