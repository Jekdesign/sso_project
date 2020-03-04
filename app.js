const express = require("express");
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');  
const passport = require('passport');
const dotenv = require('dotenv').config();

// Router
const routes = require('./routes/routes');
app.use('/', routes);

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const config = require('./oauth.js');

passport.use('google', new GoogleStrategy({
		clientID        : config.google.clientID,
		clientSecret    : config.google.clientSecret,
		callbackURL     : config.google.callbackURL,
		profileFields: ['id', 'emails', 'name']
	},

	function(access_token, refresh_token, profile, done) {
		process.nextTick(function() {
		return done(JSON.stringify(profile));
		});
	}
));

passport.use('facebook', new FacebookStrategy({
	clientID        : config.facebook.clientID,
	clientSecret    : config.facebook.clientSecret,
	callbackURL     : config.facebook.callbackURL,
	},

	function(access_token, refresh_token, profile, done) {
		process.nextTick(function() {
		return done(JSON.stringify(profile));
		});
	}
));
			


server.listen(3000, () => {
    console.log(`Listening to requests on http://localhost:3000`);
});