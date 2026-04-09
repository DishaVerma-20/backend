import { MongoClient } from "mongodb";
const MONGO_URI = "mongodb+srv://user:<db_password>@crud.mqom6oh.mongodb.net/?appName=crud";
const DB_NAME = "user";

const client = new MongoClient(MONGO_URI);
const dbConnect = async () => {
    try {
        await client.connect();
        console.log("MongoDB is connected successfully.");
        return  client.db(DB_NAME);
    } catch (error) {
        console.log("DB connection Error", error.message);
    }
}
dbConnect();
export default dbConnect;