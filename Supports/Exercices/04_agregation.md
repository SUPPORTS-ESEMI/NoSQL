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


### **Exercice 4 : Restaurants avec une note minimale**
Écrivez une requête pour trouver tous les restaurants ayant au moins une note supérieure ou égale à **20**. Affichez uniquement le nom des restaurants, leur type de cuisine, et la note la plus élevée obtenue.

```js
db.restaurants.aggregate([
    { $unwind: "$grades" },
    { $match: { "grades.score": { $gte: 20 } } },
    { $group: { _id: "$name", cuisine: { $first: "$cuisine" }, maxScore: { $max: "$grades.score" } } },
    { $project: { _id: 1, cuisine: 1, maxScore: 1 } }
])
```

---

### **Exercice 5 : Top cuisines dans un quartier**
Trouvez les 3 types de cuisines les plus populaires dans le borough de **Manhattan**, classés par le nombre de restaurants.

```js
db.restaurants.aggregate([
    { $match: { borough: "Manhattan" } },
    { $group: { _id: "$cuisine", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 3 }
])
```

---

### **Exercice 6 : Note moyenne par type de cuisine**
Pour chaque type de cuisine, calculez la note moyenne (`grades.score`) et le nombre total de restaurants. Classez les résultats par la moyenne décroissante.

```js
db.restaurants.aggregate([
    { $unwind: "$grades" },
    { $group: { _id: "$cuisine", avgScore: { $avg: "$grades.score" }, count: { $sum: 1 } } },
    { $sort: { avgScore: -1 } }
])
```

---

### **Exercice 7 : Restaurants par jour d’ouverture**
Écrivez une requête pour compter le nombre de restaurants ouverts chaque jour de la semaine (champ `days_open`). Affichez les résultats sous la forme "jour : nombre de restaurants".

```js
db.restaurants.aggregate([
    { $unwind: "$days_open" },
    { $group: { _id: "$days_open", totalRestaurants: { $sum: 1 } } },
    { $sort: { totalRestaurants: -1 } }
])
```


---

### Exercice 8 : Nombre de restaurants par quartier avec cuisine "Chinese"  

#### **Enoncé**  
Dans le jeu de données `restaurants` :  
1. Filtrez les restaurants proposant de la cuisine "Chinese".  
2. Regroupez les restaurants par quartier (`borough`).  
3. Calculez le nombre total de restaurants chinois pour chaque quartier.  
4. Reformatez le résultat pour afficher uniquement le nom du quartier et le nombre de restaurants.  

---

#### **Résultat attendu**
```json
[
    { "borough": "Manhattan", "totalRestaurants": 150 },
    { "borough": "Queens", "totalRestaurants": 120 },
    { "borough": "Brooklyn", "totalRestaurants": 80 }
]
```

---

### Exercice 9 : Moyenne des scores pour les restaurants "Pizza"  

#### **Enoncé**  
Dans le jeu de données `restaurants` :  
1. Filtrez les restaurants dont le type de cuisine est "Pizza".  
2. Décompressez les scores (`grades`).  
3. Calculez la moyenne des scores pour chaque restaurant.  
4. Reformatez les résultats pour afficher uniquement le nom du restaurant et sa moyenne des scores arrondie à deux décimales.  

---
