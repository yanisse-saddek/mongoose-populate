const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const studentModel = require('./models/Student')
const AdressModel = require('./models/Adress')

app.use(express.urlencoded({ extended: false }));


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/populate');        
        console.log('MongoDB connected!!');
} catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB()

app.post('/new-student', (req, res)=>{
    const data = Object.assign({},req.body)
    console.log(data)
    const newAdress = new AdressModel({
        streetName:data.streetName,
        streetNumber:data.streetNumber,
        postCode:data.postCode,
        city:data.city,
    })
    const newStudent = new studentModel({
        firstName:data.firstName,
        surName:data.surName,
        Adress:newAdress._id,
    })
    saveData(newStudent, newAdress)
    res.json("ok")
})

function saveData(student, adress){
    student.save()
    adress.save()    
}

// saveData(newStudent, newAdress)

// studentModel.find()
//             .populate('Adress')
//             .then(res=>console.log(res))


app.listen(3000)