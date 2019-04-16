Live demo: https://react-chat-express.herokuapp.com


## Running the back-end
```
npm install # 1. install the dependencies
npm run dev # 2. run the project
```
To connect with your Mongo's database in development mode, you need to create a file called ```development.js``` inside ```config``` folder and put your Mongo's connection. E.g.:
```
module.exports = {
 mongoUri: `mongodb://<dbuser>:<password>@ds243501.mlab.com:43501/react-chat-express`
}
```

## Running the front-end
```
cd client # 1. navigate into client's folder
npm install # 2. install the dependencies
npm start # 3. run the project
```

## TODO
- A mongodb schema with messages
- Add “{user} is typing” functionality
- Admin page
- Add public channel for everyone

