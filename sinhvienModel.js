const mongoose = require('mongoose'); // impport thư viện
const sinhvienSchema = new mongoose.Schema({
    id:{
        type:String,
        require: true
    },
    name:{
        type:String,
        require: true
    }
});

const sinhvien = mongoose.model('student', sinhvienSchema);
module.exports = sinhvien;