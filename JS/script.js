//codice attivazione vuejs

const{createApp}=Vue;

createApp({
    data(){
        return{
            messagge:"hello Vue",
            percorso:"./img/01.webp",
        }
    }
}).mount("#app");