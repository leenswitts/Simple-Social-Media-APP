import Router from "express"

const authrouter = Router()
authrouter.get("/", (req, res) => {
    res.send("Authentication Route");
})

export{authrouter}