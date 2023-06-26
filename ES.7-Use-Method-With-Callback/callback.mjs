import { writeFile } from "node:fs"
import { readFileSync } from "node:fs";


writeFile("file.txt", "Si!", err => {
    if(err){
        console.log("Qualcosa è andato storto")
        console.dir(err)
        return
    }else {
        console.log(readFileSync("file.txt", "utf-8"))
    };

})