const express= require('express');
const app=express();
const port=3100;
const userloginSign=require('./routes/user.js')
const liveVideo=require('./live')

app.use("/user", userloginSign);  
app.use("/LiveVideo",liveVideo)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });