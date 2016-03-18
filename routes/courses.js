var express = require('express');
var redis = require('redis');
var fs = require('fs');
var redisClient = redis.createClient();
var router = express.Router();

router.get('/', function(req, res, next) {
  fs.readFile(__dirname + '/../courses.json', 'utf8', function(err, data){
    var courseData = JSON.parse(data);
    res.locals = {courseData: courseData};
    res.render('courses');
  });
});

module.exports = router;