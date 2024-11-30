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
Pour les restaurants servant de la cuisine **Italienne**, calculez la moyenne des scores (`grades.score`). Affichez le nom du restaurant et sa moyenne.

---

#### **Exercice 4 : Top 5 des restaurants bien notés**
Affichez les 5 restaurants avec le score moyen le plus élevé (tous types de cuisines confondus). Incluez le nom, la cuisine et le score moyen dans les résultats.

---

#### **Exercice 5 : Restaurants avec plusieurs évaluations**
Trouvez tous les restaurants qui ont **au moins 3 évaluations** dans leur champ `grades`. Affichez leur nom, leur borough et leur nombre d’évaluations.

---

#### **Exercice 6 : Distribution des cuisines par borough**
Calculez le nombre de restaurants pour chaque type de cuisine dans le borough de **Manhattan**. Triez les résultats par ordre décroissant.

---

#### **Exercice 7 : Évaluations spécifiques**
Trouvez tous les restaurants qui ont reçu une note "A" dans au moins une de leurs évaluations (`grades.grade`). Affichez le nom, la cuisine et le borough.

---

#### **Exercice 8 : Meilleures cuisines à Queens**
Pour les restaurants situés dans le borough de **Queens**, identifiez le type de cuisine avec le score moyen le plus élevé. Affichez la cuisine et le score moyen.

---

#### **Exercice 9 : Répartition des scores**
Décomposez les évaluations des restaurants situés sur "5th Ave" (champ `address.street`). Comptez combien de restaurants ont reçu chaque note (A, B, C).

---

#### **Exercice 10 : Limitation géographique**
Trouvez tous les restaurants dont les coordonnées (`address.coord`) sont comprises entre :
- Longitude : -74.0 et -73.9.
- Latitude : 40.7 et 40.8.
Affichez leur nom, leur cuisine et leurs coordonnées.

---

### **Ressources pour la résolution**
- Utilisez des étapes comme `$match`, `$group`, `$project`, `$sort`, `$unwind`, `$limit`.
- Si vous avez besoin d'un rappel des commandes ou d'une solution, n'hésitez pas à demander !