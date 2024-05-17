const connection = require('../Database/database')
const multer = require('multer')
const path = require('path')
const Room = require('../models/RoomModel')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({
    storage: storage,
    limits: { fieldSize: '100000' },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))

        if (mimetype && extname) {
            return cb(null, true)
        }
        cb('GIve a proper file please')
    }
}).single("photo")

const addRoom = async (req, res) => {
    if (!req.body.roomName) {
        res.status(400).send({
            message: "Please insert roomName"
        })
        return
    }

    const roomInfo = {
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.Description,
        image: req.file.path,
        price: req.body.Price,
        oldprice: req.body.oldprice,
        status: 'pending'
    }

    const rooms = await Room.create(roomInfo)
    res.status(200).send(rooms)
    console.log(rooms)

}

const getRoombyid = async (req, res) => {
    let id = req.params.id
    let rooms = await Room.findOne({ where: { roomID: id } })
    res.status(200).send(rooms)
}

const getAllRoom = async (req, res) => {
    let rooms = await Room.findAll({})
    res.status(200).send(rooms)
}
const updateRoom = async (req, res) => {
    const id = req.params.id;

    const roomInfo = {
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.Description,
        image: req.file ? req.file.path : null,
        price: req.body.Price,
        oldprice: req.body.oldprice,
        status: 'pending'
    }


    console.log(roomInfo);

    const rooms = await Room.update(roomInfo, { where: { roomID: id } })
    res.status(200).send(rooms)
    console.log(rooms)
}

const getRoomByType = async (req, res) => {
    const name = req.params.name
    const user = await Room.findAll({ where: { roomType: name } })
    res.status(200).send(user);
}

const deleteRoom = async (req, res) => {
    let id = req.params.id

    let rooms = await Room.destroy({ where: { roomID: id } })

    res.status(200).send('Room is deleted !' + rooms)
}
// const getAllRooms = (req, res) => {
//     try {
//         connection.query("SELECT * FROM rooms", (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             if (result.length === 0) {
//                 console.log('Database is empty');
//             }
//             console.log('Data Fetched..');
//             res.status(201).json({ status: 201, data: result })
//         })
//     } catch (error) {
//         res.status(422).json({ status: 422, error })
//     }
// }



// const addRooms = (req, res) => {
//     // const { roomName, roomType, Description, Price } = req.body;
//     // const { Image } = req.file;
//     // if (!roomName || !roomType || !Description || !Image || !Price) {
//     //     res.status(422).json({ status: 422, message: "fill all the details" })
//     // }
//     // try {


//     //     connection.query("INSERT INTO rooms SET ?", { roomName: roomName, roomType: roomType, Description: Description, Image: Image, Price: Price}, (err, result) => {
//     //         if (err) {
//     //             console.log("error")
//     //         } else {
//     //             console.log("data added")
//     //             res.status(201).json({ status: 201, data: req.body })
//     //         }
//     //     })
//     // } catch (error) {
//     //     res.status(422).json({ status: 422, error })
//     // }
//     let filetype = req.file.mimetype.split("/")[1]
//     let newfilename = req.file.filename + "." + filetype;
//     fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newfilename}`, () => {
//         console.log(newfilename);

//     let info = {
//         roomName: req.body.roomName,
//         roomName: req.body.roomName,
//         Image: req.file.path,
//         roomType: req.body.roomType,
//         Description: req.body.Description,
//         Price: req.body.Price,
//     }

//     const roomName = req.body.roomName;
//     const Image = req.file.path;
//     const roomType = req.body.roomType;
//     const Description = req.body.Description;
//     const Price = req.body.Price;
//     try {


//         connection.query(`INSERT INTO rooms(roomName, roomType, Description, Image, Price) VALUES ('${roomName}','${roomType}','${Description}','${Image}', ${Price})`, (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log('Room added...');
//             res.status(201).json({ status: 201, data: req.body })

//         })

//     } catch (err) {
//         res.status(422).json({ status: 422, err })
//     }
// }


module.exports = {
    addRoom,
    getAllRoom,
    getRoombyid,
    deleteRoom,
    updateRoom,
    getRoomByType,
    upload
};