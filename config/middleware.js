const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access',
    });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.doctor = await Doctor.findById(decoded.id);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized access',
    });
  }
};
