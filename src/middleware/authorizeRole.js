// /middleware/authorizeAdmin.js

const authorizeAdmin = (req, res, next) => {
  const { role } = req.user; // Pastikan role ada di token JWT
  
  // Cek apakah role adalah admin
  if (role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource' });
  }
  
  next();
};

module.exports = authorizeAdmin;
