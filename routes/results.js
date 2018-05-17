const express = require("express");
const router = express.Router();

const results = require("../models/results");

//List
router.get("/", (request, response, next) => {
  results.list().then(results => {
    response.status(200).json({results});
  }).catch(next);
});

//Read
router.get("/:id", (request, response, next) => {
  results.read(request.params.id).then(results => {
    response.status(200).json({results});
  }).catch(next);
});

//Create
router.post("/", (request, response, next) => {
  results.create(request.body.result).then(results => {
    response.status(201).json({results});
  }).catch(next);
});

//update
router.put("/:id", (request, response, next) => {
  results.update(request.params.id, request.body.result).then(result => {
    response.status(201).json({result});
  }).catch(next);
});

//delete
router.delete("/:id", (request, response, next) => {
  results.remove(request.params.id).then(() => {
    response.status(204).json({});
  }).catch(next);
});

module.exports = router;
