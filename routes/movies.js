var mongo = require('mongodb');
 
var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('userdb', server);
 
db.open(function(err, db) {
if(!err) {
console.log("Connected to 'moviesdb' database");
db.collection('users', {strict:true}, function(err, collection) {
if (err) {
console.log("The 'users' collection doesn't exist. Creating it with sample data...");
populateDB();
}
});
}
});
 
 
exports.findById = function(req, res) {
var id = req.params.id;
console.log('Retrieving movie: ' + id);
db.collection('movies', function(err, collection) {
collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
res.send(item);
});
});
};
 
exports.findAll = function(req, res) {
db.collection('movies', function(err, collection) {
collection.find().toArray(function(err, items) {
res.send(items);
});
});
};