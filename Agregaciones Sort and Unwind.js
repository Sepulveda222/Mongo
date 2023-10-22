use('TiendaRopa');

//Agregaciones

//                  Busos
//$Sort and Unwind
// db.Busos.aggregate([
//     { $match: { Marca: 'Adidas' } },
//     { $unwind: '$Existencia' },
//     { $project: { _id: 0, 'Existencia': 1, 'Existencia': 1 } },
//     { $sort: { 'Existencia': -1 } }
// ]).pretty()

//                  Camisas
//$Sort and Unwind
// db.Camisas.aggregate([
//     { $match: { Marca: 'H&M' } },
//     { $unwind: '$Existencia' },
//     { $project: { _id: 0, 'Existencia': 1, 'Existencia': 1 } },
//     { $sort: { 'Existencia': -1 } }
// ]).pretty()

//                  Pantalones
//$Sort and Unwind
// db.Pantalones.aggregate([
//     { $match: { Marca: 'Diesel' } },
//     { $unwind: '$Existencia' },
//     { $project: { _id: 0, 'Existencia': 1, 'Existencia': 1 } },
//     { $sort: { 'Existencia': -1 } }
// ]).pretty()




