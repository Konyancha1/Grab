import Item from "../models/itemsModel.js";



const getitem =async  (req, res) => {
    
    await Item.findById({
        id : req.params.id
    })
    .then(data => {
        if(!data)
        res.status(404).send({message: "Scan again"})
        else res.json(data);
    }) 
    .catch(err => {
        res
        .status(500)
        .send({message: "Error in scanning the item"});
    }) 
};

const additems = async (req, res) => {
    const item = new Item({
        uniqueid : req.body.uniqueid,
        name : req.body.name,
        size : req.body.size,
        price : req.body.price,
        batch_no :req.body.batch_no
    })
    
    await item.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(404).send({
            message:
            err.message || "Error while creating stock"
        })
    })
}

const findall = async (req, res) => {
    try{
        const data = await Item.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteitem = async (req, res) => {
    const id = await req.params.id
    Item.findByIdAndRemove(id)
    .then(data => {
        if(!data){
            res.status(404).send("Try again")
        }else{
            res.send("Payment done successfully")
        }
    })
}

export {getitem, findall, additems, deleteitem}