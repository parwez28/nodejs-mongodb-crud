
const express=require('express');
const connectDB=require('./db.js');
const User=require('./models/User.js');
const app=express();
const PORT=3000;
// Connecting Database
connectDB();
// Middleware to convert json into object
app.use(express.json());

// To Get Users
app.get('/users',async(req,res)=>{
  try {
    const users=await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json('Error',error);
  }
})
// Creating new Users
app.post('/users',async(req,res)=>{
   try {
    const user=new User(req.body);
    const saveUser=await user.save();
    res.status(201).json(saveUser);
   } catch (error) {
    res.status(500).json({error:error.message});
   }
});
// To update Users Data
app.put('/update/:id',async(req,res)=>{
  try {
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(updateUser){
      res.status(200).json(updateUser);
    } else{
      res.status(404).json({error:'User not found'});
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// To Delete User
app.delete('/delete/:id',async(req,res)=>{
  try {
    const deletedUser=await User.findByIdAndDelete(req.params.id);
    if(deletedUser){
      res.status(200).json(deletedUser);
    }
    else{
      res.status(404).json('User not Found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(PORT,()=>{
    console.log(`Server running at PORT no ${PORT}`);
});