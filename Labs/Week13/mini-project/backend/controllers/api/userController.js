// import jwt
const jwt = require('jsonwebtoken')
// import user
const User = require('../../models/userModel')
const bcrypt = require('bcryptjs')

// handle create-user route
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        // remove password from output
        newUser.password = undefined

        // Create token
        const token = await jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRATION_DATE }
        )

        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: {
                newUser,
                token,
            },
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}

// Define a route handler for retrieving the a single user
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        // Assuming no user if found with that id
        if (!user) {
            throw new Error("No user found with that id")
        }
        // Send response
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
        });
    }
}

// Route for logging in user
exports.login = async (req, res) => {
    try {
        // Find user by email address
        const user = await User.findOne({email: req.body.email}).select('+password');

        // Throw error if user not found
        if(!user) throw new Error();
        // console.log(req.body.password, user.password, user)
        // Check passwords if they match
        const match = await bcrypt.compare(req.body.password, user.password);

        // Throw error if match not found
        if(!match) throw new Error();
        const newUser = ({
            name: user.name,
            email: user.email
        })

        const token = await jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRATION_DATE }
        )

        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: {
                newUser,
                token,
            },
        })
        // res.status(200).json(getUser(user));
    } catch(e) {
        console.log(e)
        res.status(400).json({msg: e.message, reason: 'Bad credentials!'})
    }
}

// Helper functions
// createJWT = (user) => {
//     return jwt.sign(
//         // Data payload
//         {user},
//         process.env.JWT_SECRET_KEY,
//         {expiresIn: process.env.JWT_EXPIRATION_DATE}
//     )
// }