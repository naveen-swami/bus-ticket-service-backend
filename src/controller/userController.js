const userService = require('../service/userService');

// User registration
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, password } = req.body;

    const result = await userService.registerUser({
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userService.loginUser(email, password);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
