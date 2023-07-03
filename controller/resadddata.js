const res = require('../model/restions');

const dataadd = async () =>{
    try{
        var addfroms = await res.create(req.body)
        
        res.status(200).json({
            status:"Success",
            addfroms
        })
    }catch{
        res.status(200).json({
            status:"Success",
            addfroms
        }) 
    }
}

module.exports = {
    dataadd
}