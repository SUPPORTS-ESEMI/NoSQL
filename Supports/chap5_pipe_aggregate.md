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
db.restaurants.aggregate([
     // Pipe 1: Filtrer par cuisine et par score minimal
     { $unwind: "$grades" },
    {
        $match: {
            cuisine: { $in: ["Italian", "French", "Japanese"] },
            "grades.score": { $gte: 20 }
        }
    },
    {
        $group: {
            _id: "$cuisine",
            averageScore: { $avg: "$grades.score" },
            restaurantCount: { $sum: 1 }
        }
    },
    { $sort: { averageScore: -1 } },
    { $limit: 5 },
   
     // Pipe 2: projection

    {
        $project: {
            _id: 0,
            cuisine: "$_id",
            averageScore: { $round: ["$averageScore", 2] },
            restaurantCount: 1
        }
    }
]);
```

---

