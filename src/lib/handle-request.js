import withDB from "./middleware/db.middleware"
import NextCors from "nextjs-cors"
export default function handleRequest({GET,POST,DELETE,PUT,PATCH}){
  return withDB(async (req,res)=>{
    switch(req.method){
      case "GET": 
      return GET(req,res)
      case "POST":
      return POST(req,res)
      case "PUT":
      return PUT(req,res)
      case "DELETE":
      return DELETE(req,res)
      case "PATCH":
      return PATCH(req,res)
      default:
      res.status(404).send()
    }
  })
}
