use('Agregaciones');

//Agregaciones

//                  Busos
//$lookup
// db.Busos.aggregate([
//     { $match: { Marca: 'Nike' } },
//     { $project: { _id: 0, Marca: 1 } },
//     {
//         $lookup: {
//             from: 'Busos',
//             localField: 'Marca',
//             foreignField: 'Tipo',
//             as: 'Busos'
//         }
//     }
// ]).pretty()

//                  Camisas
//$lookup
// db.Camisas.aggregate([
//     { $match: { Marca: 'H&M' } },
//     { $project: { _id: 0, Marca: 1 } },
//     {
//         $lookup: {
//             from: 'Camisas',
//             localField: 'Marca',
//             foreignField: 'Tipo',
//             as: 'Camisas'
//         }
//     }
// ]).pretty()

//                  Busos
//$lookup
// db.Pantalones.aggregate([
//     { $match: { Marca: 'Diesel' } },
//     { $project: { _id: 0, Marca: 1 } },
//     {
//         $lookup: {
//             from: 'Pantalones',
//             localField: 'Marca',
//             foreignField: 'Tipo',
//             as: 'Pantalones'
//         }
//     }
// ]).pretty()

