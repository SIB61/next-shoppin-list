import handleRequest from "@/lib/handle-request";
import User from "@/schemas/user.schema";
import jwt from 'jsonwebtoken'
import { compare } from "bcryptjs";
import mapId from "@/lib/map-id";

export default handleRequest({
  async POST(req,res){
    const {email,password} = req.body 
    const user = await User.findOne({email}) 
    if(!user) {
    return res.status(400).send("unknown email")
    }
    const isValidated = await compare(password,user.passwordHash)
    if(!isValidated){
      return res.status(400).send("username or password invalid")
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.setHeader("set-cookie", `access_token=${token};samesite=lax;`)
    res.json({...mapId(user._doc,"userId"),token})
  }
})
