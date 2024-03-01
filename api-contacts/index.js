//---------------- Clase 23/02---------------------

const API_BASE = "/api/v1";

var initialContacts =  [
    {
        name: "pepe",
        phone: 1234
    },
    {
        name: "luis",
        phone: 5678
    }
];

//---------------- Clase 01/03---------------------

module.exports = (app, db) => {

    app.get(API_BASE + "/loadInitialContacts", (req,res) => {
        db.insert(initialContacts);
        res.sendStatus(200, "Ok");
    });
    
    //{} todos los objetos, {a:2} solo los objetos con la propiedad a con 2 //Operacion asincrona -> poner un coolback (codigo q sale por pantalla)
    app.get(API_BASE + "/contacts", (req,res) => {
        db.find({}, (err,contacts)=>{
            if(err){
                res.sendStatus(500, "Internal Eroor");
            }else{
                res.send(JSON.stringify(contacts.map((c)=>{
                    delete c._id;
                    return c;
                })));
            }
        }); 
    }); 

    app.post(API_BASE + "/contacts", (req,res) => {
        let contact = req.body;
        db.insert(contact);
        res.sendStatus(201, "Created");
    }); 

    
    app.delete(API_BASE + "/contacts/:name", (req,res) => {
        let name = req.params.name;
        db.remove({"name":name}, {}, (err, numRemoved)=>{
            if(err){
                res.sendStatus(500, "Internal Eroor");
            }else{
                if(numRemoved >= 1){
                    res.sendStatus(200, "ok");
                }else{
                    res.sendStatus(404, "Not found");
                }
            }
        });
    }); 


    /*
    //---------------- Clase 23/02---------------------
    app.get(API_BASE + "/contacts", (req,res) => {
        //res.send(contacts); //Se puede hacer pero no hacerlo, ya que es un objeto en memoria, mejor serializacion
        res.send(JSON.stringify(contacts));
    });
    
    
    app.post(API_BASE + "/contacts", (req,res) => {
        let contact = req.body;
        contacts.push(contact); 
        res.sendStatus(201, "Created");
    }); 
    */
} 