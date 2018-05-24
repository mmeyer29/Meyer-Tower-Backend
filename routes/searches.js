const express = require("express");
const router = express.Router();

const searches = require("../models/searches");

//List
router.get("/", (request, response, next) => {
  searches.list().then(searches => {
    response.status(200).json({searches});
  }).catch(next);
});

//Read
router.get("/:id", (request, response, next) => {
  searches.read(request.params.id).then(searches => {
    response.status(200).json({searches});
  }).catch(next);
});

//Create
router.post("/", (request, response, next) => {
  searches.create(request.body.search).then(searches => {
    response.status(201).json({searches});
  }).catch(next);
});

//update
router.put("/:id", (request, response, next) => {
  searches.update(request.params.id, {searchTerm:request.body.searchTerm}).then(searchTerm => {
    response.status(201).json({searchTerm});
  }).catch(next);
});

//delete
router.delete("/:id", (request, response, next) => {
  searches.remove(request.params.id).then(() => {
    response.status(204).json({});
  }).catch(next);
});

module.exports = router;
