const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'your mongodb clister uri';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('db connected');
});

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
	title: String,
	body: String,
	date: {
		type: String,
		default: Date.now()
	}
});

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Save data to mongo db
const data = {
	title: 'Hello World',
	body: 'This is simple mern stack project'
}

// Instance of the model
const newBlogPost = new BlogPost(data);


// newBlogPost.save((error) => {
// 	if(error) {
// 		console.log('There is some error saving on data');
// 	} else {
// 		console.log('Data has been saved');
// 	}
// })

app.use(morgan('tiny'));

app.get('/blog', (req, res) => {
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

app.listen(PORT, console.log(`listening on port ${PORT}`))