import { prismaClient } from "db/client";
import express from "express";
// import { prismaClient } from "db";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  return res.json({
    user: "hello world"
  })
})

app.get("/users", async(req, res) => {
    const response=await prismaClient.user.findMany()
    console.log(response.data)

    return res.status(200).json({
        users:response.data
    })

})

app.post("/user", async(req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return
  }

  const reponse=prismaClient.user.create({
    data: {
      username,
      password
    }
  })

  return res.status(200).json({
    message: "user is created successfully"
  })


})

app.listen(8080);