#  find 

### 1. Introduction à `find()`
La méthode `find()` en MongoDB permet de récupérer des documents d'une collection qui correspondent à certains critères. La syntaxe de base est :
```js
db.collection.find({ <query> })
```
La `query` est un objet qui spécifie les conditions de filtrage.

### 2. Principaux opérateurs de requête

MongoDB fournit plusieurs opérateurs pour affiner les recherches dans les documents. Voici les plus couramment utilisés :

#### 2.1. **Opérateurs de comparaison**

- `$eq` : Correspond à une valeur égale à une valeur spécifiée.
  
  Exemple : Trouver tous les documents où le nom est "Alan".
  ```js
  db.collection.find({ "name": { $eq: "Alan" } })

    db.collection.find({ "name":  "Alan" })
  ```

- `$ne` : Correspond à une valeur différente d'une valeur spécifiée.
  
  Exemple : Trouver tous les documents où le nom n'est pas "Alan".
  ```js
  db.collection.find({ "name": { $ne: "Alan" } })
  ```

- `$gt` : Supérieur à une valeur spécifiée.
  
  Exemple : Trouver les documents où au moins une des notes est supérieure à 15.
  ```js
  db.collection.find({ "notes": { $gt: 15 } })
  ```

- `$gte` : Supérieur ou égal à une valeur spécifiée.
  
  Exemple : Trouver tous les documents où une des notes est supérieure ou égale à 18.
  ```js
  db.collection.find({ "notes": { $gte: 18 } })
  ```

- `$lt` : Inférieur à une valeur spécifiée.
  
  Exemple : Trouver les documents où la note maximale est inférieure à 20.
  ```js
  db.collection.find({ "notes": { $lt: 20 } })
  ```

- `$lte` : Inférieur ou égal à une valeur spécifiée.
  
  Exemple : Trouver les documents où la note maximale est inférieure ou égale à 19.
  ```js
  db.collection.find({ "notes": { $lte: 19 } })
  ```

#### 2.2. **Opérateur logique**

- `$or` : Correspond à plusieurs conditions, avec une des conditions étant vraie.
  
  Exemple : Trouver tous les documents où le nom est "Alan" ou la ville est "Paris".
  ```js
  db.collection.find({
    $or: [
      { "name": "Alan" },
      { "address": "Paris" }
    ]
  })
  ```

- `$and` : Correspond à toutes les conditions étant vraies.
  
  Exemple : Trouver les documents où le nom est "Alan" et la ville est "London".
  ```js
  db.collection.find({
    $and: [
      { "name": "Alan" },
      { "address.city": "London" }
    ]
  })
  ```

- `$not` : Négation d'une condition.
  
  Exemple : Trouver les documents où la ville n'est pas "Paris".
  ```js
  db.collection.find({ "address": { $not: { $eq: "Paris" } } })
  ```

#### 2.3. **Opérateur d'éléments dans un tableau**

- `$in` : Correspond à une valeur présente dans un tableau de valeurs.
  
  Exemple : Trouver tous les documents où le grade est soit "master 4" soit "master 5".
  ```js
  db.collection.find({ "grade": { $in: ["master 4", "master 5"] } })
  ```

- `$nin` : Correspond à une valeur qui n'est pas présente dans un tableau de valeurs.
  
  Exemple : Trouver les documents où le grade n'est ni "master 4" ni "master 5".
  ```js
  db.collection.find({ "grade": { $nin: ["master 4", "master 5"] } })
  ```

- `$size` : Correspond à la taille d'un tableau.
  
  Exemple : Trouver les documents où il y a exactement 3 notes.
  ```js
  db.collection.find({ "notes": { $size: 3 } })
  ```

#### 2.4. **Opérateur de type**

- `$type` : Correspond à un certain type de données.
  
  Exemple : Trouver tous les documents où l'adresse est de type "string".
  ```js
  db.collection.find({ "address": { $type: "string" } })
  ```

#### 2.5. **Opérateur de texte**

- `$regex` : Permet de faire des recherches par motif avec les expressions régulières.
  
  Exemple : Trouver tous les documents où le nom commence par la lettre "A".
  ```js
  db.collection.find({ "name": { $regex: "^A" } })
  ```

### 3. Exemples pratiques

#### Exercice pratique 1 : Trouver des utilisateurs avec une relation existante
**Requête :**
```js
db.collection.find({ "relationship": { $ne: null } })
```

#### Exercice pratique 2 : Trouver les utilisateurs ayant une note supérieure à 18
**Requête :**
```js
db.collection.find({ "notes": { $gte: 18 } })
```

#### Exercice pratique 3 : Rechercher par adresse
**Requête :**
```js
db.collection.find({ "address.city": { $eq: "London" } })
```

### Conclusion
La méthode `find()` associée aux opérateurs MongoDB permet de faire des requêtes très puissantes et flexibles. Ces opérateurs de comparaison, logiques, et spécifiques aux tableaux ou types de données permettent de manipuler efficacement les données stockées en MongoDB.
