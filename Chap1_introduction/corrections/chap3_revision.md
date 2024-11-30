# Corrections

### 1. **Rechercher tous les restaurants servant une cuisine italienne.**
```javascript
db.restaurants.find({ cuisine: "Italian" })
```

---

### 2. **Rechercher tous les restaurants situés dans le borough (arrondissement) de Manhattan.**
```javascript
db.restaurants.find({ borough: "Manhattan" })
```

---

### 3. **Rechercher les restaurants dont le nom contient exactement "Domino's Pizza".**
```javascript
db.restaurants.find({ name: "Domino's Pizza" })
```

---

### 4. **Rechercher les restaurants ayant obtenu un score supérieur ou égal à 90 dans leurs inspections.**
```javascript
db.restaurants.find({ "grades.score": { $gte: 90 } })
```

---

### 5. **Rechercher tous les restaurants qui ont une adresse située sur la rue "Broadway".**
```javascript
db.restaurants.find({ "address.street": "Broadway" })
```

---

### 6. **Rechercher tous les restaurants avec une cuisine autre que "American".**
```javascript
db.restaurants.find({ cuisine: { $ne: "American" } })
```

---

### 7. **Rechercher tous les restaurants ayant été inspectés avant le 1er janvier 2020.**
```javascript
db.restaurants.find({ "grades.date": { $lt: ISODate("2020-01-01") } })
```

---

### 8. **Rechercher tous les restaurants situés dans le borough de Queens ou de Brooklyn.**
```javascript
db.restaurants.find({ borough: { $in: ["Queens", "Brooklyn"] } })
```

---

### 9. **Rechercher tous les restaurants dont le nom commence par la lettre "S".**
```javascript
db.restaurants.find({ name: { $regex: /^S/, $options: "i" } })
```

---

### 10. **Rechercher tous les restaurants ayant au moins une note inférieure à 50.**
```javascript
db.restaurants.find({ grades: { $elemMatch: { score: { $lt: 50 } } } })
```

---

### Explications supplémentaires
- **Opérateur `$gte`, `$ne`, `$lt`, `$in` :** Permettent des comparaisons logiques.
- **Expression régulière `$regex` :** Utilisée pour rechercher des chaînes avec un modèle particulier (ici, débutant par "S").
- **Sous-documents :** Les champs comme `grades.score` ou `address.street` montrent la structure imbriquée des documents JSON en MongoDB.
- **Dates :** Les dates doivent être formatées en `ISODate` pour être comparées correctement.
