exports.create = async (req, res) => {
    res.status(200).json({status: "Success", data:"Create Comment API"})
};

exports.read = async (req, res) => {
    res.status(200).json({status: "Success", data:"Read Comment API"})
};


exports.delete = async (req, res) => {
    res.status(200).json({status: "Success", data:"Delete Comment API"})
};


exports.update = async (req, res) => {
    res.status(200).json({status: "Success", data:"Update Comment API"})
};




