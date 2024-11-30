### **10 Exercices sur le jeu de données des restaurants de New York**

#### **Exercice 1 : Restaurants dans un borough spécifique**
Écrivez une requête pour trouver tous les restaurants situés dans le borough de **Brooklyn**. Affichez uniquement le nom des restaurants et leur type de cuisine.

```js
// requete sans regroupement avec aggregate
db.restaurants.aggregate([
    { $match: { borough : "Brooklyn"} },
    { $project : { name : 1 , cuisine : 1, _id : 0 }}

    // group possible ?
])
```

- Requete avec regroupement compte le nombre de restaurant par type de cuisine dans Brooklin
- 
```js
db.restaurants.aggregate([
    { $match: { borough : "Brooklyn"} },
    { $group: { _id : "$cuisine" ,  count : { $sum : 1}} },
])
```

- On peut enchainer les requêtes, ici on compte le nombre de restaurant par type de cuisine dans Brooklyn.

```js
db.restaurants.aggregate([
    // pipe 1
    { $match: { borough : "Brooklyn"} },
    { $project : { name : 1 , cuisine : 1, _id : 0 }},

    // pipe 2
    { $group: { _id : "$cuisine" ,  count : { $sum : 1}} },
])
```

---

#### **Exercice 2 : Restaurants par type de cuisine**
Calculez le nombre total de restaurants pour chaque type de cuisine. Classez les résultats par ordre décroissant en fonction du nombre de restaurants.

```js
db.restaurants.aggregate([
    { $group :  { _id: "$cuisine", total : { $sum : 1 } }}
])


// le nombre de restaurant par quartier

db.restaurants.aggregate([
    { $group :  { _id: "$borough", total : { $sum : 1 } }}
])

```

---


### **Exercice 2.2 : calculer la somme des scores dans chaque quartier


```js


db.restaurants.aggregate([
    { $unwind: "$grades"},
    { $group :  { _id: "$borough", totalScore :{ $sum : "$grades.score" }}}
])
```

#### **Exercice 3 : Moyenne des scores**
Pour les restaurants servant de la cuisine **Italienne**, calculez la moyenne des scores (`grades.score`).  Affichez le nom du restaurant et sa moyenne.

```js

db.restaurants.aggregate([
    // pipe 1
    // dépiler pour calculer par document sinon ça marche pas (données JSONB dans mongo)
    { $unwind: "$grades"},
    { $match : { cuisine : "Italian" }},
    { $group: { _id : "$name", avgScore : { $avg : "$grades.score" } ,  total : { $sum : 1} } }, 

    // pipe 2 un traitement dans la projection une nouvelle requete 
    { $project : { _id : 1, avgScore : { $round : ["$avgScore", 2 ]} , total : 1} }
])
```

---
