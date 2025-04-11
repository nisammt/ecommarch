const mongoose = require('mongoose')
 

const dbconnction = async ()=>{
    try {
        await mongoose.connect(process.env.dburl)
        console.log('Dbconnected')

    } catch (error) {
        console.log(error)
        
    }
}
module.exports = dbconnction
