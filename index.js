let cool = require("cool-ascii-faces");
let express = require("express");
let bodyParser = require("body-parser"); //---------------- Clase 23/02---------------------
let contactAPI = require("./api-contacts") //---------------- Clase 23/02---------------------

let app = express();

//Si es constante y además para no etenr que cambiarlo en cada lado
const PORT = process.env.PORT || 10000; //Así es si la creas en terminal (L04), sino esta definido le da el otro valor

//Deveulve esto si pone en navegador localhost:10000/...
//app.get("/hola", (req,res) => {
 //   res.send(`<html> <body> <h1> HOLA </h1> </body> </html>`)
//});

app.use("/", express.static("./public"));

app.use(bodyParser.json()); //---------------- Clase 23/02---------------------

contactAPI(app); //---------------- Clase 23/02---------------------

app.get("/cool", (req,res) => {
    res.send(`<html> <body> <h1> HOLA  ${cool()}</h1> </body> </html>`)
});

//Así mejor
app.listen(PORT, () =>
{
    console.log(`Server listening on port PORT ${PORT} `  ); //Asincrono
});


console.log(`Server initializing...`) //Sincrono 
                                      //Esto se ejecuta antes que lo anterior porque el del PORT tiene que escuchar entonces va a tardar un poquito más,
                                      // pero el código sigue ejecutandi por eso esto sale primero

