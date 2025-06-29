const express=require('express') 
const app=express();




//process.env.PORT->this is online server
//3000 this start local server
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT ||3000;





// Start the server
//const PORT = 3000;
app.listen(PORT,()=>{
    console.log('Listening on port 3000');
})