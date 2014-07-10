 
exports.findById = function(req, res) {
res.send({id:req.params.id, title: "La vie aquatique" });
};
