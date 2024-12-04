### **insertion avec MongoDB**

MongoDB est une base de données NoSQL orientée documents qui utilise JSON (ou BSON) comme format de stockage des données. L'opération d'insertion est l'une des plus courantes pour ajouter des documents dans une collection.

---

### **1. Commandes principales pour l'insertion**

#### **1.1. Insérer un document unique : `insertOne`**
La méthode `insertOne` permet d'ajouter un seul document dans une collection.

#### Exemple :
```js

# création de la base de données
use school

# création d'une collection users 
db.createCollection('users')

# insertion de document dans la collection
db.users.insertOne({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
});
```

- **Résultat attendu** : Un nouvel objet est inséré dans la collection `users`.

Remarque sur l'insertion. 

---

#### **1.2. Insérer plusieurs documents : `insertMany`**
La méthode `insertMany` permet d'insérer plusieurs documents en une seule opération.

#### Exemple :
```js
db.users.insertMany([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 32 }
]);
```

- **Résultat attendu** : Une liste de documents est insérée dans la collection.

#### Remarque :
- Les documents dans MongoDB n'ont pas de schéma strict, donc chaque document peut avoir une structure différente.
- Si un document inséré ne contient pas de champ `_id`, MongoDB en génère automatiquement un.

---

### **2. Gestion des erreurs**

#### **2.1. Doublons sur le champ `_id`**
Si deux documents avec le même champ `_id` sont insérés, MongoDB lève une erreur de duplication.

#### Exemple :
```js
db.users.insertOne({ _id: 1, name: "Alice" });
db.users.insertOne({ _id: 1, name: "Bob" }); // Erreur : duplicate key
```

---

#### **2.2. Option `ordered` avec `insertMany`**
- Par défaut, `insertMany` arrête l'insertion si un document provoque une erreur.
- Avec l'option `ordered: false`, MongoDB continue l'insertion des documents restants.

#### Exemple :
```js
db.users.insertMany(
    [
        { _id: 1, name: "Alice" },
        { _id: 1, name: "Duplicate ID" }, // Provoque une erreur
        { name: "Bob" }
    ],
    { ordered: false }
);
```

- **Résultat** : Les documents avec `_id: 1` et `name: "Bob"` sont insérés, malgré l'erreur.

---

### **3. Vérification des insertions**

#### **3.1. Récupérer les documents insérés**
Après une insertion, vous pouvez utiliser la commande `find` pour vérifier les documents dans une collection.

#### Exemple :
```js
db.users.find();
```

#### **3.2. Limiter les champs affichés**
```js
db.users.find({}, { name: 1, _id: 0 });
```
- Affiche uniquement les champs `name`.

---

### **4. Insertion avec MongoDB et les drivers**

#### **4.1. Insertion avec Node.js**
MongoDB fournit des bibliothèques pour plusieurs langages de programmation, dont Node.js.

#### Exemple avec `insertOne` :
```js
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const database = client.db("testdb");
        const collection = database.collection("users");

        const result = await collection.insertOne({ name: "John Doe", email: "john@example.com" });
        console.log(`Document inserted with _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run();
```

#### Exemple avec `insertMany` :
```js
const documents = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 }
];

const result = await collection.insertMany(documents);
console.log(`${result.insertedCount} documents inserted.`);
```

---

### **5. Cas pratique : Ajout de restaurants**
#### Exercice : Ajouter des documents dans la collection `restaurants`.

1. Ajoutez un restaurant avec les informations suivantes :
   - Nom : "Le Gourmet"
   - Cuisine : "French"
   - Borough : "Manhattan"

2. Ajoutez trois restaurants avec différents types de cuisine et dans différents quartiers.

3. Vérifiez que les restaurants ont été ajoutés avec `find`.

#### Solution :
```js
db.restaurants.insertOne({
    name: "Le Gourmet",
    cuisine: "French",
    borough: "Manhattan"
});

db.restaurants.insertMany([
    { name: "Pizza Palace", cuisine: "Italian", borough: "Brooklyn" },
    { name: "Sushi World", cuisine: "Japanese", borough: "Queens" },
    { name: "BBQ Joint", cuisine: "American", borough: "Bronx" }
]);

db.restaurants.find();
```
