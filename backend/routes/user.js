let express = require("express");
const port=3100;
const router=express.Router();
const db=require('./db')
const bcrypt = require('bcrypt');
const dotenv=require('dotenv').config()
const cookieParser=require('cookie-parser')
const jwt=require('jsonwebtoken') //import the package
const jwtKey='vid-live' //on the basis of this our token is made and here we can keep this key in the .env file

router.use(express.urlencoded({ extended: true }));
router.use(express.json())

router.use(cookieParser())
// function auth(req,res,next){
//     const token=req.headers['authorization'] //grab the authorization token from client
//     token=token.split('')[1]//access token
//     Jwt.verify(token,"access",(err,user)=>{
//         if(!err){
//             req.user=user;
//             next();
//         }
//         else{
//             return res.status(403).json({message:"user not authenticated"})
//         }
//     })
// }


router.post('/signup', async (req, res) => {
  
    try {
        const username=req.body.name;
        const userpassword=req.body.password;
        const useremail=req.body.email

        console.log(username,userpassword,useremail)
        const result = await db.pool.query("select * from users_data where name=? or email=?",[username,useremail] );
        if(result.length>0){
            res.status(200).json({message:"user already exist"});
        }
        else{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(userpassword, saltRounds);

            console.log(1)
            const result1 = await db.pool.query("INSERT INTO users_data (name, email,password) VALUES (?, ?, ?)",[username,useremail,hashedPassword]);
            res.status(200).json({message:"Signup successfully"});
        }
    } catch (err) {
        throw err;
    }
});
 



router.get('/login', async (req, res) => {
   

    try {
        const useremail=req.body.email
        const userpassword=req.body.password;
      
        console.log(useremail,userpassword)
         
        console.log(typeof(userpassword))

        const result = await db.pool.query("select * from users_data where email=?",[useremail] );

        console.log(result)

        if(result.length>0){

            console.log(result[0].password)
            const match = await bcrypt.compare(userpassword,result[0].password);

            if(match) {
                
                console.log(process.env)
                console.log(process.env.jwtsecret)
                const accessToken=jwt.sign({userName:result[0].name,
                userEmail:result[0].email},process.env.jwtsecret,{expiresIn:"20min"})
                                                                                                                                                                                                                                                                                                                                                                                                                                  
            //    cookie section
            const options={
                expires:new Date(Date.now()+3),
                httpOnly:true
            }
                return res.status(201).cookie("token", accessToken,options).json({message:"login Successfully"
                ,Token:accessToken })
  

            }
            else{
                res.send("Invalid Password")
            }
          
        
        }
        else{
         res.send("Invalid Username")
        }
    } catch (err) {
        res.status(404).send('error',err.message);
    }

})

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.jwtsecret, (err, user) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    req.user = user;
    next();
  });
} else {
  res.status(401).json("You are not authenticated!");
}
};











  module.exports=router;