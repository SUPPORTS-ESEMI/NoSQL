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

```js
db.collection.find({
  $or: [
    {
      "notes": {
        $eq: 15
      }
    },
    {
      "notes": {
        $gte: 18
      }
    }
  ]
})
```

## 7. Trouver les étudiants qui sont en "master 5" et habitent à "London" ( comment descendre dans la structure pour matcher avec la bonne valeur "a.b" )

```js
db.collection.find({
  $and: [
    {
      grade: "master 5"
    },
    {
      "address.city": "London"
    },
    {
      notes: {
        $size: 4
      }
    }
  ]
})
```

## 8. Trouvez les noms ayant un s 

```js
db.collection.find({
  name: {
    "$regex": "s"
  }
})
```