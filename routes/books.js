const express = require("express")
const router = express.Router()
const {Book} = require("../models")

router.get("/",async(req,res)=>{
    const book = await  Book.findAll()
    res.json(book)
})

router.post("/",async(req,res)=>{
    try{
        const book  = await Book.create(req.body)
        res.json(book)
    }catch(err){
        res.sendStatus(400)
        res.json(err)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const book = await Book.findOne({
            where:{
                id:req.params.id
            }
        })
        await book.destroy()
        res.status(200).json("Post deleted successfully")
    }
    catch(err){
        
        console.log(err)
        res.status(400).json(err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const book = await Book.findOne({
            where:{
                id:req.params.id
            }
        })
        res.send(book)
    }
    catch(err){
        res.status(400).json(err)
        
    }


})
router.patch("/:id",async(req,res)=>{
    try{
        const book = await Book.findOne({
            where:{
                id:req.params.id
            }
        })
        book.update(req.body)
        res.send(book)
    }
    catch(err){
        res.status(400).json(err)
        
    }
})

module.exports = router