const express=require('express');

const pos=express();
pos.listen(3000,()=>{
    console.log('server running');
});

pos.get('/test-api',(req,resp)=>{
    resp.json({'message':'Hi server is running'});
})