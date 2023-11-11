const express=require('express');
const router=express.Router();
router.get('/', (req,res,next)=>{
    res.json({
           
        'books' :{
            "1":{
                 'author':   'Chinua Achebe',
                 'title':    "Things fail Apart",
                 "reviews" :   {}

          },
          "2":{
                 "author":   "Hans Christian Andersen",
                 "title":    "Faily tolas",
                 "reviews" :   {}

          },
           "3":{
                 "author":   "Dante Alighieri",
                 "title":    "The Divine Comedy",
                 "reviews" :   {}

          },
          "4":{
                 "author":   "Unknown",
                 "title":    "The Epic of Gilgamesh",
                 "reviews" :   {}

          },

         "5":{
                 "author":   "Unknown",
                 "title":    "The Book of job",
                 "reviews" :   {}

          },
        }
        
        });
});




module.exports=router;