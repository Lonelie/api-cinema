
 
exports.findById = function(req, res) {
res.send({id:req.params.id, title: "Un film", cover:"exemple.png", genre:"drama" });
};