import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const con =  await mongoose.connect(`${process.env.MONGOD_URI}`) 
        console.log(`Mongodb connected !! DB HOST ${con.connection.host}`)
    } catch (error) {
        console.log("Failed to connect mongodb",error)
        process.exit(1);
    }
}
 
export default connectDB