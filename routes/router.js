
const router=require("express").Router()
// const bcrypt=require("bcryptjs")
const pgDB = require("../config/pg.config")
router.use((req, res, next)=>{
    req.pgDB=pgDB
    next()
})
router.post("/register",async(req, res, next)=>{
    console.log("hello there");
    
    const { username, email, password } = req.body; 
//    let passwords=await bcrypt.hashSync(req.body.password,10)

  
    const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
    
    pgDB.query(query, [username, email, password])
      .then(() => {
        res.render("login");  
        console.log("data is saved succesfully");

        
      })
      .catch((err) => {
        console.error('Error saving data to database:', err.stack);
        res.status(500).send('Error registering user');
      }); 
})




router.post("/login",(req, res, next)=>{
    
    res.render("login")
})


module.exports=router