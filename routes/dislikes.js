exports.findById = function(req, res) {
res.send({id:req.params.id, title: "X-men" });
};
