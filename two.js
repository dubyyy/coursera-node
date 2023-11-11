const express=require('express');
const router=express.Router();

router.get('/', (req,res,next)=>{
    res.json({  
                "author":   "Hans Christian Andersen",
                "title":    "Faily tolas",
                "reviews" :   {}
        });
});

module.exports=router;