const express = require('express')
const router = new express.Router()
const Room = require('../Controller/RoomController')


// router.post("/add",Room.upload, Room.addRoom);
router.post("/add", Room.upload, Room.addRoom);
router.get("/getRooms", Room.getAllRoom)
router.delete("/add/:id", Room.deleteRoom)
router.get("/api/data/roomID/:id", Room.getRoombyid)
router.put("/add/update/:id", Room.upload, Room.updateRoom)
router.get('/rooms/details/:id', Room.getRoombyid)
router.get('/rooms/search/:name', Room.getRoomByType)

module.exports = router;


