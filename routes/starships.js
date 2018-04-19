const express = require("express");
const router = express.Router();

const starships = require("../models/starships");

//List
router.get("/", (request, response, next) => {
  starships.list().then(starships => {
    response.status(200).json({starships});
  }).catch(next);
});

//Read
router.get("/:id", (request, response, next) => {
  starships.read(request.params.id).then(starships => {
    response.status(200).json({starships});
  }).catch(next);
});

//Create
router.post("/", (request, response, next) => {
  starships.create(request.body.starship).then(starships => {
    response.status(201).json({starships});
  }).catch(next);
});

//update
router.put("/:id", (request, response, next) => {
  starships.update(request.params.id, request.body.starship).then(starship => {
    response.status(201).json({starship});
  }).catch(next);
});

//delete
router.delete("/:id", (request, response, next) => {
  starships.remove(request.params.id).then(() => {
    response.status(204).json({});
  }).catch(next);
});

module.exports = router;
