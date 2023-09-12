exports.create = async (req, res) => {
    res.status(200).json({status: "Success", data:"Create Blog API"})
};

exports.read = async (req, res) => {
    res.status(200).json({status: "Success", data:"Read Blog API"})
};


exports.delete = async (req, res) => {
    res.status(200).json({status: "Success", data:"Delete Blog API"})
};


exports.update = async (req, res) => {
    res.status(200).json({status: "Success", data:"Update Blog API"})
};


