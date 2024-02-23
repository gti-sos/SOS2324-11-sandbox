//---------------- Clase 23/02---------------------

const API_BASE = "/api/v1";

var contacts =  [
    {
        name: "pepe",
        phone: 1234
    },
    {
        name: "luis",
        phone: 5678
    }
];


module.exports = (app) => {

    app.get(API_BASE + "/contacts", (req,res) => {
        //res.send(contacts); //Se puede hacer pero no hacerlo, ya que es un objeto en memoria, mejor serializacion
        res.send(JSON.stringify(contacts));
    });
    
    app.post(API_BASE + "/contacts", (req,res) => {
        let contact = req.body;
        contacts.push(contact); 
        res.sendStatus(201, "Created");
    });
} 