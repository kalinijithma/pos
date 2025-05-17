const express=require('express');
const  mongoose=require('mongoose');
const  bodyParser=require('body-parser');
require('dotenv').config();
const pos=express();
const  SERVER_PORT=process.env.SERVER_PORT || 3000;

pos.use(bodyParser.urlencoded())
pos.use(bodyParser.json())

try{
    mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    pos.listen(SERVER_PORT,()=>{
        console.log(`server running on port ${SERVER_PORT}`);
    });

}catch (e) {
    console.log(e);
}

pos.get('/test-api',(req,resp)=>{
    return resp.json({'message':'Hi server is running...'});
});

pos.post('/create',(req,resp)=>{
    console.log( req.body);
    return  resp.json({'data':req.body});
});