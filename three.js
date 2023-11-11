const express=require('express');
const router=express.Router();

router.get('/', (req,res,next)=>{
    res.json({  
                'author':   'Chinua Achebe',
                'title':    "Things fail Apart",
                "reviews" :   {},
        });
});

module.exports=router;