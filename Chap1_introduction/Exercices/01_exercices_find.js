// Exercice 1

db.restaurants.find(
    {
        $and: [
            { borough: { $eq: "Brooklyn" } },
            {
                $or: [
                    { name: /^B/ },
                    { name: /^W/ }
                ]
            }
        ]
    },
    { name: 1, _id: 0 }
).sort({
    name: 1
})

// 03 Exercices liste
/**
 01. Combien y a t il de restaurants qui font de la cuisine italienne et qui ont eu au moins une fois un score de 10 ?

 */
db.restaurants.find({
    $and: [
        { cuisine: "Italian" },
        { "grades.score": { $eq: 10 } }
    ]
}, {
    _id: 0, name: 1, "grades.score": 1
}).count()

//  Quels sont les restaurants qui ont eu un grade A et un score supérieur ou égal à 20

db.restaurants.find({
    $and: [
        { "grades.grade": "A" },
        { "grades.score": { $gte: 20 } }
    ]
}, {
    _id: 0, name: 1, "grades.score": 1, "grades.grade" : 1
}).sort({
    name : 1
})