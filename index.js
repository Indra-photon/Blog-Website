import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views')); //You have to add the folder name only not the file name
// app.use(express.static(__dirname));

app.get("/", (req,res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + "/views/index.html");
    // res.sendFile(__dirname + "/views/blog-writing.html");
})

app.post("/submit", (req, res) =>{
    var blogtitle = req.body["blogTitle"];
    var authorname = req.body["authorName"];
    var maintext = req.body["mainText"];
    
    res.render("index.ejs", {blogtitle, authorname,maintext});
})


app.listen(port, '0.0.0.0', ()=>{
    console.log(`Connection extablished  at ${port}`);
})