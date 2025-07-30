
const express=require('express');
const connectDB=require('./db.js');
const User=require('./models/User.js');
const app=express();
const PORT=3000;
// Connecting Database
connectDB();
// Convert incoming json(string) data into javaScript object
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello How can I help you");
});
// Creating new Users
app.post('/users',async(req,res)=>{
   try {
    const user=new User(req.body);
    const saveUser=await user.save();

    res.status(201).json(saveUser);
   } catch (error) {
    res.status(400).json({error:error.message});
   }
})

app.listen(PORT,()=>{
    console.log(`Server running at PORT no ${PORT}`);
});