const express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

// JSON -> Javascript Object Notation

function thingsInit(db){
// json.org

var  thingsColl = db.collection('things');

var thingsCollection = [];

var thingsStruct = {
  "descripcion":'',
  "fecha": 0,
  "by":{},
  "dd":'NA',
  "type":""
};

router.get('/', (req, res, next)=>{
  thingsColl.find().toArray((err, things)=>{
    if(err) return res.status(200).json([]);
    return res.status(200).json(things);
  });//find toArray
});

  router.get('/page', (req, res, next) => {
    var by = {"by._id": new ObjectID(req.user._id)};
    getThings(1, 50, res, by);
  });

  router.get('/page/:p/:n', (req, res, next) => {
    var by = { "by._id": new ObjectID(req.user._id) };
    var page = parseInt(req.params.p);
    var items = parseInt(req.params.n);
    getThings(page, items, res , by);
  });

  router.get('/page/:p/:n/:dd', (req, res, next) => {
    var by = { "by._id": new ObjectID(req.user._id) };
    var page = parseInt(req.params.p);
    var items = parseInt(req.params.n);
    var dd = req.params.dd;
    getThings(page, items, res, by, dd);
  });

  async function getThings(page, items, res, by, dd) {
    var query = by;
    if(!!dd){
      by.dd = dd;
    }
    var options = {
      "limit": items,
      "skip":((page-1) * items),
      "projection":{
        "descripcion":1,"type":1,"visited":1
      },
      "sort": [["fecha",-1]]
    };
    let a = thingsColl.find(query,options)
    let totalThings = await a.count();
    a.toArray((err, things) => {
      if (err) return res.status(200).json([]);
      return res.status(200).json({ things, totalThings});
    });//find toArray
  }

router.get('/:id', (req, res, next)=>{
  var query = {"_id": new ObjectID(req.params.id)}
  thingsColl.findOne(query, (err, doc)=>{
    if(err) {
      console.log(err);
      return res.status(401).json({"error":"Error al extraer documento"});
    }
    return res.status(200).json(doc);
  }); //find
});// get ById

router.post('/', (req, res, next)=>{
  var {_id, email} = req.user;
  var newElement = Object.assign({},
    thingsStruct,
    req.body,
    {
      "fecha": new Date().getTime(),
      "by": {
        "_id": new ObjectID(_id),
        "email": email
      }
    }
  );

  thingsColl.insertOne(newElement, {} , (err, result)=>{
    if(err){
      console.log(err);
      return res.status(404).json({"error":"No se pudo Insertar"});
    }
    return res.status(200).json({"n": result.insertedCount,"obj": result.ops[0]});
  });//insert
}); // post /


router.put('/:idElemento', (req, res, next) => {
  var query = {"_id": new ObjectID(req.params.idElemento)};
  var update = { "$set": req.body, "$inc":{"visited": 1}};

  thingsColl.updateOne(query, update, (err, rst) => {
    if(err){
      console.log(err);
      return res.status(400).json({"error": "Error al actualizar documento"});
    }
    return res.status(200).json(rst);
  }); //update

});// put /


router.delete('/:id', (req, res, next) => {
  //var id = parseInt(req.params.id);
  var query = {"_id": new ObjectID(req.params.id)}
  thingsColl.removeOne(query, (err, result) => {
    if(err) {
      console.log(err);
      return res.status(400).json({"error":"Error al eliminar documento"});
    }
    return res.status(200).json(result);
  });

});// put /

 return router;
}
module.exports = thingsInit;
