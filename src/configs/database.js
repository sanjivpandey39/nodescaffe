const mongoose =  require('mongoose');
const dburl =  process.env.DATABASE_URL;
mongoose.set("strictQuery", false);


exports.mongooseDbConnect =  () =>{
    mongoose
    .connect(dburl)
    .then(r => console.log(`Connected to MongoDB : ${r.connection.host}`))
    .catch((e) => console.log(e));
 }   
 

