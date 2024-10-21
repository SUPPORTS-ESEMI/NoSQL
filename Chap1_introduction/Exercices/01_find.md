# Exercices

## 1. Trouvez les étudiants dont la relationship est non null

```js
db.collection.find({
  "relationship": {
    $ne: null
  }
})
```

## 2. Trouvez les étudiants dont la relationship est null

```js
db.collection.find({
  "relationship": {
    $eq: null
  }
})
```

## 3. Trouver tous les documents où le grade est soit "master 4" soit "master 5".

```js
db.collection.find({
  "grade": {
    $in: [
      "master 4",
      "master 5"
    ]
  }
})
```

## 4. Trouver les documents où le grade n'est ni "master 4" ni "master 5".

```js
db.collection.find({
  "grade": {
    $nin: [
      "master 4",
      "master 5"
    ]
  }
})
```

## 5. Trouvez les documents où il y a exactement 2 notes utilisez l'opérateur $size

```js
db.collection.find({
  "notes": {
    $size: 2
  }
})
```

## 6. Trouver les étudiants qui ont soit une note égale à 15 soit une note supérieure à 18 

