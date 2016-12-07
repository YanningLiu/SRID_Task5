var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/* Author: Gaurav, Description: GET request for ReachOut Tab */
router.get('/reachOutRequests', function(req, res, next) {

    var reachOutRequest1 = {
        reporter: "John",
        nMembers: 2,
        timeWindow: 10,
        notes: "Heavy rock! Need an extra hand!",
        location: {
            lat: 37.4119291,
            lng: -122.0590327
        }
    };

    var reachOutRequest2 = {
        reporter: "Mark",
        nMembers: 1,
        timeWindow: 20,
        notes: "Need back up to clear patio!",
        location: {
            lat: 37.4119291,
            lng: -122.0590327
        }
    };

    res.send([reachOutRequest1, reachOutRequest2]);
});

/* Author: Gaurav, Description: POST request for ReachOut Tab */
router.post('/reachOutRequests', function(req, res) {

    if (req.body.reporter == null) {
        res.status(500).send('Field \'reporter\' missing!');
    } else if (req.body.nMembers == null) {
        res.status(500).send('Field \'nMembers\' missing!');

    } else if (req.body.timeWindow == null) {
        res.status(500).send('Field \'timeWindow\' missing!');

    } else if (req.body.notes == null) {
        res.status(500).send('Field \'notes\' missing!');

    } else if (req.body.location == null) {
        res.status(500).send('Field \'location\' missing!');

    } else {
        console.log(req.body);
    	res.send("Success");
    }

    res.end();
});

module.exports = router;