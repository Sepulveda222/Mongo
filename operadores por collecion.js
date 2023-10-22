use ('TiendaRopa');

//Operadores: uno por cada coleccion

//          Busos -> $gte
// db.getCollection('Busos').find({Existencia:{$gte:15}});

//          Camisas -> $gte
// db.getCollection('Camisas').find({Existencia:{$gte:20}});

//          Pantalones -> $gte
// db.getCollection('Camisas').find({Existencia:{$gte:25}});

////////////////////////////////////////////////////////////////////////////////////////////

//          Busos -> $in
// db.getCollection('Busos').find({ Marca: { $in : ["Nike", "Adidas"] } });  

//          Camisas -> $in
// db.getCollection('Camisas').find({ Marca: { $in : ["H&M", "Calvin Klein"] } }); 

//          Pantalones -> $in
db.getCollection('Pantalones').find({ Marca: { $in : ["Diesel", " Levis"] } }); 










