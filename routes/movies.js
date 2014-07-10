
 
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