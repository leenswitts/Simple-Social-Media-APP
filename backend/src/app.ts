import express from "express"
import { authrouter } from "./routes/authentication.routes";

const app = express();
const port = process.env.PORT || 8000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/user", authrouter);
app.listen(app.get("port"), ()=> {
    console.log('UP and RUNNING on ${app.get("port")}');
})
