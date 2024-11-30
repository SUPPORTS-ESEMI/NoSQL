# Révision

### Questions de révision
1. **Rechercher tous les restaurants servant une cuisine italienne.**  
   _Indication : Utilisez le champ `cuisine`._

2. **Rechercher tous les restaurants situés dans le borough (arrondissement) de Manhattan.**  
   _Indication : Utilisez le champ `borough`._

3. **Rechercher les restaurants dont le nom contient exactement "Domino's Pizza".**  
   _Indication : Utilisez le champ `name`._

4. **Rechercher les restaurants ayant obtenu un score supérieur ou égal à 90 dans leurs inspections.**  
   _Indication : Utilisez le champ `grades.score`._

5. **Rechercher tous les restaurants qui ont une adresse située sur la rue "Broadway".**  
   _Indication : Utilisez le champ `address.street`._

6. **Rechercher tous les restaurants avec une cuisine autre que "American".**  
   _Indication : Utilisez l'opérateur `$ne` pour exclure la cuisine américaine._

7. **Rechercher tous les restaurants ayant été inspectés avant le 1er janvier 2020.**  
   _Indication : Utilisez le champ `grades.date` et un opérateur de comparaison comme `$lt`._

8. **Rechercher tous les restaurants situés dans le borough de Queens ou de Brooklyn.**  
   _Indication : Utilisez l'opérateur `$in` avec le champ `borough`._

9. **Rechercher tous les restaurants dont le nom commence par la lettre "S".**  
   _Indication : Utilisez une expression régulière avec le champ `name`._

10. **Rechercher tous les restaurants ayant au moins une note inférieure à 50.**  
    _Indication : Utilisez un opérateur comme `$elemMatch` pour examiner les éléments de `grades`._
