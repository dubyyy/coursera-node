const express=require('express');
const router=express.Router();

router.get('/', (req,res,next)=>{
    res.json({  
                "author":   "Dante Alighieri",
                "title":    "The Divine Comedy",
                "reviews" :   {}
        });
});

module.exports=router;