var rawjs = require('raw.js');
var reddit = new rawjs("raw.js example script");

var fs = require('fs');
fs.readFile('secret.txt','utf8',function (err, data) {
	if (err) throw err;
	var info = data.split(" ");
	reddit.setupOAuth2(info[0], info[1], "http://www.example.com/redditoauth");
	console.log("'"+info[0]+"'\n'"+info[1]+"'\n'"+info[2]+"'\n'"+info[3]+"'\n");
	

	var CommentStream = rawjs.CommentStream;
	var stream = new CommentStream();
    var x = 0;
	stream.on('comment', function(comment) {
	    //console.log("New comment in subreddit " + comment.subreddit + ", content " + comment.body);
	    if(comment.author.toLowerCase().indexOf("sand500")!=-1){
	    	console.log(comment.body+"\n");
	    }
	     if(comment.body.toLowerCase().indexOf("buzzfeed")!=-1){
	    	console.log(comment.body+"\n");
	    }
	    x++;
	    if(x%1000 == 0){
	    	console.log(x);
		}
		
		
	});

	stream.on('error', function(e) {
	    console.log("Error: " + e);
	});

  
});


/*
var request = require("request");

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