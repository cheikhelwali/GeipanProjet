const express = require('express');
const mongoDBModule = require('../app-modules/crudMongo');
const router = express.Router();


router.get('/',(req, res) => {

    mongoDBModule.connexionMongo(function(err, db) {
        let reponse;

        if(err) {
            console.log("erreur connexion");
            reponse = {
                msg: "erreur de connexion err=" + err
            }
        } else {
            reponse = {
                msg: "connexion établie"
            }
        }
        res.send(JSON.stringify(reponse));

    });

});

router.get('/cases',(req, res) => {

    let page = parseInt(req.query.page || 1);
    let pagesize = parseInt(req.query.pagesize || 10);

    mongoDBModule.findCases(page, pagesize, function(data) {
        var objdData = {
            msg:"cases found avec succès",
            data: data
        }
        console.log("data :"+objdData.data);
        res.send(objdData);
    });

});

router.get('/temoignages',(req, res) => {

    let page = parseInt(req.query.page || 1);
    let pagesize = parseInt(req.query.pagesize || 10);

    mongoDBModule.findTemoignages(page, pagesize, function(data) {
        var objdData = {
            msg:"temoignages found avec succès",
            data: data
        }
        res.send(objdData.data);
    });

});

router.get('/cases/:id',(req, res) => {
    var id = req.params.id;
    mongoDBModule.findCaseById(id, function(data){
       res.send(data);
    });
});

router.get('/temoignages/:id',(req, res) => {
    var id = req.params.id;
    mongoDBModule.findTemoignageByCaseId(id, function(data){
        res.send(data.temoignage);
    });
});
module.exports= router;
