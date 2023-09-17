const mongoose = require('mongoose');
const mongodbUrl ='mongodb+srv://daliamahmoudibrahim1:geC702lemBZvqoya@comfortzone.ztop3xi.mongodb.net/ComfortZoneDB'

mongoose.connect(mongodbUrl ,{
    useNewUrlParser:true,
})

const dbConnection = mongoose.connection

dbConnection.on('connected',()=>{
    console.log('successful');
})
dbConnection.on('error', () => {
  console.log('failed')
})