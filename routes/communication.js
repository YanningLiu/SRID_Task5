var express = require('express');
var router = express.Router();

router.get('/getChannels', function(req, res, next) {
  res.status(200);
  res.send([{channel_id : 1, channel_name : 'Yanning'},{channel_id : 2, channel_name : 'Gaurav'},{channel_id : 3, channel_name : 'Chi-i'},{channel_id : 4, channel_name : 'Harpreet'}]);
});

router.get('/getMessages', function(req, res, next) {
  res.status(200);
  res.send([{message_id : 1, sender : 'Yanning', receiver : 'Gaurav', 'text' : 'Hello', image : 'undefined', video : 'undefined', timestamp : '2016-12-07T04:26:03+00:00 '}]);
});

router.post('/postMessages', function(req, res, next) {
  res.status(201);
  res.send();
});

router.get('/getNotifications', function(req, res, next) {
  res.status(200);
  res.send([{notification_id : 1, sender : 'Yanning', receiver : 'Gaurav', 'notification_type' : 'Call', timestamp : '2016-12-07T04:26:03+00:00 '}]);
});

router.post('/postNotifications', function(req, res, next) {
  res.status(201);
  res.send();
});

module.exports = router;
