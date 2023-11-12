var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Chat' });
});

var datas = {};
router.get('/routes', function(req, res, next) {
  const room = req.query.room;
  const uname = req.query.uname;
  if(req.query.chat){
    if(room in datas){
      datas[room].chat.push(req.query);
    }else{
      datas[room] = {chat: [], red:[]};
    }
  }else{
    console.log(datas);
    if(!(room in datas)){
      datas[room] = {chat:[], red:[]};
    }
    //datas[room].red[uname] = datas[room].chat.length;
    res.send(JSON.stringify(datas[room].chat));
  }
});

router.post('/routes', function(req, res, next) {
  res.render('room', { title: 'Simple Chat' , room: req.body.room});
});

module.exports = router;
