### Analyse combinée des restaurants avec plusieurs pipes

#### **Enoncé**

Dans le jeu de données `restaurants` :
1. Trouvez tous les restaurants servant des cuisines "Italian", "French", ou "Japanese", ayant au moins un score supérieur ou égal à 20.
2. Regroupez ces restaurants par cuisine pour :
   - Calculer le score moyen par type de cuisine.
   - Compter le nombre de restaurants pour chaque cuisine.
3. Classez les cuisines par leur score moyen décroissant.
4. Limitez les résultats aux 5 meilleures cuisines.
5. Reformatez les résultats pour afficher uniquement :
   - Le type de cuisine (`cuisine`).
   - La moyenne des scores (`averageScore`).
   - Le nombre de restaurants (`restaurantCount`).

---

#### **Solution possible**
```js
db.restaurants.aggregate(
    [
        // pipe 1 filtrer par cuisine et par score min 
        { $unwind: "$grades" },
        {
            $match: {
                cuisine: { $in: ["Italian", "French", "Japanese"] },
                "grades.score": { $gte: 20 }
            }
        },
        {
            $group : {
                _id : "$cuisine",
                averageScore : { $avg : "$grades.score"}
            }
        },
        { $sort : { averageScore : -1 }},
        { $limit : 2 },  // les deux meilleurs 

        // pipe 2 améliorer la présentation
        {
            $project : {
                _id : 0,
                cuisine : "$_id", // récupérer dynamiquement le nom des restaurants
                averageScore : { $round: ["$averageScore", 2]} , // arrondir les résultats à 2 chiffres après la virgule
                restaurantCount : 1
            }
        }
    ]
)
```

---

