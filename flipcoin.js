function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeadsSync() {
    return new Promise((resolve,reject)=>{
        let headsCount = 0;
        let attempts = 0;
        while(headsCount<5){
            attempts=attempts+1;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {

                headsCount = 0;
            }
            if(attempts>100){
                reject("Supero los 100 intentos permitidos")
            }
            
        }
        resolve(`Felicidades logró 5 caras seguidas en ${attempts} lanzamientos`)
    });

}
fiveHeadsSync().then((result)=>console.log(result)).catch((err)=>console.log(err));