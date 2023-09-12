exports.create = async (req, res) => {
    res.status(200).json({status: "Success", data:"Create Message API"})
};

exports.read = async (req, res) => {
    res.status(200).json({status: "Success", data:"Read Message API"})
};


exports.delete = async (req, res) => {
    res.status(200).json({status: "Success", data:"Delete Message API"})
};


exports.update = async (req, res) => {
    res.status(200).json({status: "Success", data:"Update Message API"})
};




