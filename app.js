// import thư viện
const express = require('express');
const mongoose = require('mongoose');
const sinhvien = require('./sinhvienModel');

// Tạo đối tượng express
const app = express();
app.set('view engine', 'ejs');
// Kết nối với csdl
mongoose.connect('mongodb://localhost:27017/AND103',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Kết nối thành công với MongoDB');
}).catch((err)=>{
    console.error(err); // In ra lỗi
});

// Khi người dùng gọi localhost:3000/sinhvien => đọc dữ liệu từ CSDL
app.get('/sinhvien', async (req, res)=>{
    try {
        const sinhviens = await sinhvien.find(); // Đọc dữ liệu từ CSDL
        // res.json(sinhviens); // Chuyển dữ liệu sang json
        res.render('students', {sinhviens: sinhviens});
        console.log(sinhviens); // In kết quả ra log
    } catch (err) {
        console.error(err); // In ra lỗi
        res.status(500).json({error:'Internel Sever Error'}); // Trả về lỗi cho người dùng
    }
});

// Tạo cổng dịch vụ
const PORT = process.env.PORT||3000;

// Sever lắng nghe
app.listen(PORT, ()=>{
    console.log('Server đang chạy ở cổng 3000');
});