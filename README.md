# landing-pages
Landing pages app built in Node.js and React

======

Clone the app, cd into the app folder and run
```
$ npm install
```
to install all the modules.

To create a local database kwd_landingpages run
```
$ utils/create-database.sh
```

Make sure you have the right permissions setup
```
$ chmod 755 utils/create-database.sh
```

To create tables, run migrations
```
$ sequelize db:migrate
```

Start the app server
```
$ npm start
```

Finally, open your browser and go to [localhost:3000/landing](http://localhost:3000/landing) to bring up the app.
