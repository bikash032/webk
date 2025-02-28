const express =require("express");
const app=express();
app.set("view engine","ejs")
const router = require("./routes/router");


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router)

app.get('/', (req, res) => {
    res.render('register');  
  });
  

app.use((req, res, next)=>{
    res.status(500).send("Internal server error")
})


let PORT=3020;
let HOST="localhost"
app.listen(PORT,HOST,(err)=>{
    if(err){
        console.log(`There is error while listinig to ${PORT} server`+err);
    }else{
        console.log(`http://${HOST}:${PORT} is successfully Listen`);
        console.log('Please press CTRL+C to discontinue');
    }
})