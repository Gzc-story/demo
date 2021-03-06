const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.get('/getAllhome',(req,res,next)=>{
	api.getAllhome(req, res, next);
})

router.get('/getAllart',(req,res,next)=>{
	api.getAllart(req, res, next);
})

module.exports = router;