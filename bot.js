var reddit = require('raw.js');
var CommentStream = reddit.CommentStream;
var x = 0;
var stream = new CommentStream();

stream.on('comment', function(comment) {
    //console.log("New comment in subreddit " + comment.subreddit + ", content " + comment.body);
    	console.log(JSON.stringify(comment));
	if(x == 0) {  
    	x++;
    }
	this.stop();
});

stream.on('error', function(e) {
    console.log("Error: " + e);
});

/*
var request = require("request");
var fs = require('fs');
console.log("hi");
var cc= "http://www.reddit.com/r/all/.json"
    request(cc, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFile('test.json', body);
           
        }
    });


var pat =  new RegExp(/"[^"]*p_disp_course_detail.*"/g);
fs.readFile('oscar.html', 'utf8',function (err, data) {
  if (err) throw err;
  var bodyArray;
  var courselinks = data.match(pat);
  requestAndWriteToFile(courselinks,0);
  
});

function requestAndWriteToFile(data,index){
    if(index == data.length) {
        return;
    }
    var cc= "https://oscar.gatech.edu"+data[index].replace(/"/g,"").replace(/amp;/g,"");
    request(cc, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFile('oscar'+index+'.txt', body);
            console.log(index+"\n");
            index++;
            requestAndWriteToFile(data,index);
        }
    });
}*/