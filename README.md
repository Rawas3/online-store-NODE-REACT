1. Importuojame "express" moduli. (index.js)
2. Kuriame objekta "express". Projekto paleidimas. (index.js)
3. Nurodome PORT ant kurio veiks projektas. (index.js)
4. Kvieciame funkcija "listen" (index.js)
5. Importuojame funkcija "config" kad serveris galetu nuskaityti faila .env (index.js)
6. Konfigurojame duomenu baze (db.js)
7. Eksportuojame objekta kuri kuriame is "Sequelize" klases. Konfiguruojame objekta. (db.js)
8. Importuojame objekta is db.js (index.js)
9. Kvieciame funkcija prisijungimui prie duomenu bazes (index.js)
10. Perkeleme funkcija "listen" i vidu (index.js)
11. await sequelize.authenticate()
12. await sequelize.sync()
13. Aprasome modeliu tipus (models.js)
14. Importuojame "sequelize" (models.js)
15. Importuojame Data Types (models.js)
16. Aprasome modeli User (models.js)
17. Aprasome modeli Basket (models.js)
18. Aprasome modeli BasketDevice (models.js)
19. Aprasome modeli Device (models.js)
20. Aprasome modeli DeviceInfo (models.js)
21. Aprasome modeli Type (models.js)
22. Aprasome modeli Brand (models.js)
23. Aprasome modeli Rating (models.js)
24. Aprasome modeliu rysius vieno su kitu (models.js)
25. Kuriame papildoma modeli TypeBrand (models.js)
26. Eksportuojame modulius (models.js)
27. Importuojame modulius is models.js (index.js)
28. Importuojame "cors" kad atnaujinti uzklausas is brouser. (index.js)
29. Perduodame funkcija "cors" i app. (index.js)
30. Perduodame funkcija "json" i app kad galima butu parse json formata. (index.js)
31. Importuojame pagrindini routeri aplikacijai (routes/index.js)
32. Kuriame "routerio" objekta (routes/index.js)
33. Kuriame metoda POST brandui, kad sukurti brand (brandRouter.js)
34. Kuriame metoda GET brandui, kad gauti visus brand (brandRouter.js)
35. Importuojame visus routerius (routes/index.js)
36. Sujungiame marsrutus su routeriais (routes/index.js)
37. Importuojame pagrindini routeri. (index.js)
38. Konfigurojame kontrolerius visiems modeliams.
39. Importuojame userController (userRouter.js)
40. I kiekviena metoda router.post antru parametru perduodame atitinkama funkcija (userRouter.js) 
41. Kuriame savo error klase "apiError"
42. Kuriame middleware for Errors
43. Importuojame middleware. (index.js)
44. Importuojame Type (typeController.js)
45. Importuojame ApiError (typeController.js)
46. Aprasome funkcija create Type (typeController.js)
47. Aprasome funkcija findAll Type (typeController.js)
48. Aprasome funkcija create Device (deviceController.js)
49. Instaliuojame npm i express-fileupload 
50. Importuojame fileUpload. (index.js)
51. Instaliuojame paketa npm i uuid (generuoja atsitiktinius id)
52. Aprasome funkcija getAll (deviceController.js)
53. Darome pagination (deviceController.js)
54. Panaudojame funkcija "findAndCountAll" puslapiu skaiciavimui  (deviceController.js)
55. Aprasome funkcija create DeviceInfo (deviceController.js)
56. Aprasome funkcija getOne (deviceController.js)
57. Instaliuojame paketa npm i jsonwebtoken bcrypt (generuoja token)
58. Importuojame bcrypt, User, Basket (userController.js)
59. Aprasome funkcija registration (userController.js)
60. Tikriname ar User jau yra sistemoje (userController.js)
61. Heshojame password ir kuriame nauja vartotoja
62. Importuojame jwt-json web token (userController.js)
63. Kuriame SECRET KEY for jwt token (.env)
64. Perrasom funkcija "jwt.sign" i "generateJwt" (userController.js)
65. Aprasome funkcija "login" (userController.js)
66. Kuriame authMiddleware.js for password
67. Importuojame authMiddleware (userRouter.js)
68. Perrasom funkcija "check" (userController.js)
69. Kuriame checkRoleMiddleware.js
70. Pradedame rasyti FRONT-END
71. Instaliuojame npx create-react-app .
72. Instaliuojame "npm i axios" uzklausu siuntimui i serveri
73. Instaliuojame "npm i react-router-dom" for pages navigation
74. Instaliuojame "npm i mobx" state manager
75. Instaliuojame "npm i mobx-react-lite" surisimui mobx su REACT komponentais
76. Instaliuojame "npm install react-bootstrap bootstrap"


