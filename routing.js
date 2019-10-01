

// Routing Inside Server

let http=require('http');

let fs=require('fs');

let server= http.createServer(function(req,res)
{
  console.log(req.url);

  if(req.url === '/' || req.url === '/home')
  {
    res.writeHead(200,{'Content-Type':'text/html'});
    let Home=fs.createReadStream(__dirname + '/home.html');
    Home.pipe(res);  
  }
else if(req.url === '/contact')
{
  res.writeHead(200,{'Content-Type':'text/html'});
  let Contact=fs.createReadStream(__dirname +'/contact.html');
   Contact.pipe(res);
}
else
{
  res.writeHead(404,{'Content-Type':'text/html'});
  res.write("<h1>Error 404 Occured/Invalid url</h1> ");  
}
  
  //res.end();
});
server.listen(8080);




// Attaching Events to Customized Object

/*let em_obj=require('events');

let util=require('util')
clear


var Person=function(name)
{
   this.name=name;
};
util.inherits(Person,em_obj.EventEmitter);

let P1=new Person("P1");
let P2=new Person("P2");

let P_arr=[P1,P2];

P_arr.forEach(function(person)
{
  person.on('speak',function(msg)
  {
      console.log(person.name+ "just speak out"+msg);
  })

})


P1.emit('speak');
P2.emit('speak');*/