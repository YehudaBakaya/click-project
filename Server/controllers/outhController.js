
const bcrypt = require('bcrypt'); 


const SignUpUser = async (req, res) => {
    try {
        const { token, name, password } = req.body;  


        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            token,
            name,
            password:hashedPassword
        });
        await newUser.save();

     
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};



module.exports = {
    SignUpUser ,
};