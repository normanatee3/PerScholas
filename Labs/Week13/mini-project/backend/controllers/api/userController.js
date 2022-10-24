// import jwt
const jwt = require('jsonwebtoken')
// import user
const User = require('../../models/userModel')

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

