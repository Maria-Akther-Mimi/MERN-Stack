exports.create = async (req, res) => {
    res.status(200).json({status: "Success", data:"Create Product API"})
};

exports.read = async (req, res) => {
    res.status(200).json({status: "Success", data:"Read Product API"})
};


exports.delete = async (req, res) => {
    res.status(200).json({status: "Success", data:"Delete Product API"})
};


exports.update = async (req, res) => {
    res.status(200).json({status: "Success", data:"Update Product API"})
};




