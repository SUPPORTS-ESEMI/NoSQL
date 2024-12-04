
# **Créer une collection `books` avec des documents fictifs** :

Voici un exemple de documents que vous pourriez insérer dans la collection `books` pour tester les exercices :

```js
use library

db.books.insertMany([
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    rating: 4.8,
    price: 15.99
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    rating: 4.6,
    price: 9.99
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
    rating: 4.9,
    price: 12.99
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    rating: 4.3,
    price: 10.50
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    rating: 4.2,
    price: 13.99
  }
]);
```


### **Exercice 1 : Insertion d'un livre simple**
Écrivez une commande pour insérer un document représentant un livre dans la collection `books`. Le document doit contenir les informations suivantes : `title`, `author`, `genre`, `year`, `rating`, et `price`.


### **Exercice 2 : Insertion de plusieurs livres**
Insérez plusieurs livres dans la collection `books` en utilisant la méthode `insertMany()`. Utilisez les données suivantes :

- **Book 1:** `title: "To Kill a Mockingbird"`, `author: "Harper Lee"`, `genre: "Fiction"`, `year: 1960`, `rating: 4.8`, `price: 7.99`
- **Book 2:** `title: "The Great Gatsby"`, `author: "F. Scott Fitzgerald"`, `genre: "Fiction"`, `year: 1925`, `rating: 4.3`, `price: 12.99`

### **Exercice 3 : Insertion d'un livre avec une clé unique**
Insérez un livre avec une clé unique (`_id`). Ce livre doit avoir les informations suivantes : `title: "1984"`, `author: "George Orwell"`, `genre: "Dystopian"`, `year: 1949`, `rating: 4.9`, `price: 8.99`. Utilisez l'option `_id` pour spécifier une valeur personnalisée.

### **Exercice 4 : Insertion de livres avec des sous-documents**
Ajoutez un livre avec un sous-document pour les informations de notation (par exemple, des `ratings` qui incluent un `score` et un `reviewer`). Voici le livre à insérer :


### **Exercice 5 : Mise à jour des informations d'un livre existant**
Insérez un livre, puis mettez à jour la note et le prix de ce livre. Utilisez l'ID du livre inséré pour effectuer la mise à jour.

### **Exercice 6 : Insertion avec une valeur par défaut**
Ajoutez un livre avec des valeurs par défaut pour les champs `rating` et `price`. Si les valeurs ne sont pas fournies, elles doivent être respectivement `3.0` et `10.00`.


### **Exercice 7 : Insertion avec des dates**
Ajoutez un livre dans la collection avec un champ de `publication_date` utilisant un format de date ISO.


### **Exercice 8 : Insertion avec validation des données**
Ajoutez un livre avec un champ `price` qui doit être un nombre supérieur à 0. Si l'insertion échoue à cause de données invalides, gérez l'erreur.

### **Exercice : Insertion conditionnelle avec mise à jour**

#### **Contexte**
Vous travaillez sur une collection `books` où chaque document contient des informations sur un livre, y compris son titre, son auteur, son année de publication, ses genres et son prix.

Vous devez insérer un nouveau livre dans la collection si ce livre n'existe pas encore, basé sur son titre. Si le livre existe déjà (basé sur le titre), vous devez mettre à jour son prix pour qu'il corresponde à un nouveau prix, uniquement si le nouveau prix est inférieur au prix actuel.

#### **Étapes à suivre :**

1. Vérifiez si le livre existe déjà dans la collection en fonction de son titre.
2. Si le livre n'existe pas, insérez-le dans la collection.
3. Si le livre existe, mettez à jour son prix, mais uniquement si le nouveau prix est inférieur au prix actuel.