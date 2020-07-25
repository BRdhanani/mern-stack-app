const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPosts');

router.get('/blog', (req, res) => {
	const data = {
		id: 1,
		title: 'hello world'
	};

	BlogPost.find({ })
	.then((data) => {
		console.log('Data: ', data)
		res.json(data);
	})
	.catch((error) => {
		console.log('error: ', error)
	});
});

router.post('/blog/add', (req, res) => {
	console.log(req.body);
	res.json({
		msg: "Your data has been added"
	});
});

module.exports = router;