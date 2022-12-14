import Admin from "../models/adminModel.js"
import { generateToken } from '../util.js';


const createadmin = async (req, res) =>{
    try{
        const user = new Admin({
            name: 'Spencer',
            email: 'Kamayo58@gmail.com',
            password: 'kamayo123'
        })
        const user1 = new Admin({
            name: 'Onyancha',
            email: 'onyancha23@gmail.com',
            password: 'onyancha123'
        })
        const createadmin0 =await user.save()
        const createdadmin1 =await user1.save()
        res.send(createadmin0 + "\n" + createdadmin1)
    }
        catch(err){
            res.status(500).send({message:err.message});
        }
    
}

const signin = async (req, res) =>{
    const signinUser = await Admin.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if(!signinUser){
        res.status(401).send({
            message: "Invalid email or password ",
        });
    }else{
        res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            token: generateToken(signinUser),
        })
    }
}

export{createadmin, signin}