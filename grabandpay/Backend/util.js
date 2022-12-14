import "dotenv/config"
import jsonwebtoken from "jsonwebtoken"
// import config from "./config/config"

export const generateToken = (user) =>{
    return jsonwebtoken.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
    },
    process.env.JWT_SECRET
    )

}