import handleRequest from "@/lib/handle-request";
import mapId from "@/lib/map-id";
import User from "@/schemas/user.schema";
import { hash, hashSync } from "bcryptjs";
import jwt from 'jsonwebtoken'


export default handleRequest({

  async GET(req,res){
    const users = await User.find()
    res.json(users.map(user=>(mapId(user._doc,"userId"))))
  },

  async POST(req,res){
    try{
    const {name,email,password} = req.body
    const passwordhash = await hash(password,8)
    const user = new User({name,email,passwordHash:passwordhash}) 
    await user.save()
    const {passwordHash,...userInfo} = user._doc
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.json({...mapId(userInfo,"userId"),token})
    }
    catch(e){
    console.log(e)
    res.status(500).send("internal server error in user/post") 
    }
  },






















})


