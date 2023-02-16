## Simon Game built using the MERN stack (MongoDB, Express, React, and Node.js).

### [PLAY NOW](https://simon-client.herokuapp.com/)

## Project structure

```
├── client   
│   ├── public
│   │   ├── index.html
│   ├── src
│   ├── package.json
│   ├── .env 		->create your own
├── server   
│   ├── models
│   ├── routes
│   ├── index.js  
│   ├── package.json
│   ├── .env		->create your own
│   ├──Procfile	-> heroku start

```

### Local Usage

To start the client, go to the `client` directory:
create `.env` file:
```
REACT_APP_BASE_URL= http://localhost:5000/ (for example)
```
then run:
```
npm start
```

To start the server side, go to `server` directory:
create `.env` file :
```
MONGO_URL=mongodb+srv://user:password@sqlauthority.5s3yxjh.mongodb.net/simonGame?retryWrites=true&w=majority
PASS_SEC= decode
JWT_SEC=decode
CLIENT_ORIGIN= http://localhost:3000/ (for example)
```

then run:
```
npm start
```

# Badges
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MUI](https://img.shields.io/badge/Material%20UI-00599C?style=for-the-badge&logo=mui&logoColor=#00C7B7)
![Styled Components](https://img.shields.io/badge/Styled%20Components-%23000000.svg?style=for-the-badge&logo=styledComponents&logoColor=#00C7B7)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/mongoose-red?style=for-the-badge&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
