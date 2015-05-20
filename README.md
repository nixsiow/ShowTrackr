ShowTrackr - A TV show tracker using AngularJS, NodeJS and Mongodb.
---
[Demo](http://nixsiow.com/showtrackr)

Apps Routes:
* Home - display a list of popular shows.
* Detail - information about one particular TV show.
* Login - user login form.
* Signup - user signup form.
* Add - add a new show form.

Optimization - To Do List
DONE:
* Concatenate and minify the scripts
* Minify the stylesheet
* Cache AngularJS templates
* Removing unused CSS
* Enable gzip compression
* Enable static assets caching

To be working on:
* not necessary for us to retrieve information about every single episode of every show because we don’t see it until we view the detail page of that show.

* Currently storing images as Base64 strings that are are fairly large in size and resolution (680 x 1000), not cached, not optimized.

* Put Redis database in front of the MongoDB for caching?  Couchbase database which seems to combine the best of both worlds. Couchbase seems to replace Redis, MongoDB and Riak all togther.

API : [TheTVDB.com API](http://thetvdb.com/)

[Awesome tutorial](http://sahatyalkabov.com/create-a-tv-show-tracker-using-angularjs-nodejs-and-mongodb/)
