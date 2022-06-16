import mongoose from "mongoose";


const Back=mongoose.Schema({

name: String,
residence: String,
password: String,



});

const UserBack1=mongoose.model('patientcare',Back);

export default UserBack1;