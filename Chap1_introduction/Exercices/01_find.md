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

## 3. Trouver tous les documents où  le grade est soit "master 4" soit "master 5".