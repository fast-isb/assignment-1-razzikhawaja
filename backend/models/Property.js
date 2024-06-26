import {mongoose} from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/scd');
const Schema = mongoose.Schema;
const House = new Schema({
    hNo : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    blockN : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    desc : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    type : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    Status : { type : String, required : true, max : [12, "Max Length is 12 characters"] },
    ownerId : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    residentId : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
},
{
    timestamps: true
});




export default mongoose.model('House', House);