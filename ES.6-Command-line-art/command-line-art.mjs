import figlet from "figlet"

figlet("Ciao a tutti", function(err, data){
    if (err){
        console.log("Qualcosa è andato storto")
        console.dir(err)
        return
    }
    console.log(data)
})