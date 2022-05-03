# Kuinka saada yhdistettyä microfrontit roadmapperin tietokantaan:

1) Vaihda serverin CORS ORIGIN vastaamaan composerin domainia

    /Server/.env ```CORS_ORIGIN=https://iteavisdom.org```

2) Database (vaatii dockerin) käyntiin kansiosta /server

    ```yarn start-db```
    
3) Server käytiin kansiosta /server
    
    ```yarn start```

4) Kirjaudu sisään roadmapperiin tokenin hakua varten

    POST ```http://localhost:5000/users/login```

    POST requestin bodyyn: ```{"email": "admin.person1@test.com","password": "test"}```

5) Hae kirjautuneen käyttäjän token

    POST ```http://localhost:5000/users/mytoken```

    Palauttaa autentikointia varten tokenin esim.: ```71dd72c1-73b4-4b73-ae50-1edd3532820d```

6) Lisää saatu token microfrontin apiin ```/src/api/api.tsx```

    esim: ```const token = "71dd72c1-73b4-4b73-ae50-1edd3532820d";```
