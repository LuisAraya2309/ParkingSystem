const express = require("express")
const app = express()
const mongoose = require('mongoose')
const PORT = 3001
const usersRouter = require('./routes/UsersRoutes')
const departmentsRouter = require('./routes/DepartmentsRoutes')
const parkingsRouter = require('./routes/ParkingRoutes')
const slotsRouter = require('./routes/SlotsRoutes')
const bookingsRouter = require('./routes/BookingRoutes')

const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/users',usersRouter)
app.use('/departments',departmentsRouter)
app.use('/parkings',parkingsRouter)
app.use('/slots',slotsRouter)
app.use('/bookings',bookingsRouter)



mongoose.connect(
    "mongodb+srv://sa:admin@parkingsystem.cvmr5.mongodb.net/ParkingSystem"
    );




app.listen(PORT,()=>{
    console.log('Servers Runs')
});


