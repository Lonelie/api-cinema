
var express = require('express');
	users = require('./routes/users');
	movies = require('./routes/movies');
	likes = require('./routes/likes');
	dislikes = require('./routes/dislikes');
 
var app = express();

app.configure(function () {
app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(express.bodyParser());
});
 
 

app.get('/users', users.findAll);
app.get('/users/:id', users.findById);
app.post('/users', users.addUser);
app.put('/users/:id', users.updateUser);
app.delete('/users/:id', users.deleteUser);


app.get('/users/:id/likes', likes.findById);
app.get('/users/:id/dislikes', dislikes.findById);
//app.put('/users/:id', users.updateUsers);
//app.delete('/users/:id', users.deleteUsers);*/

/**** movies ***/

/*** aimer un film ***/

app.post('/users/:user_id/likes/:movie_id');

app.get('/users/:id/movies/:id', movies.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');

