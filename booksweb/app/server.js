const http=require('http');  
const {createRouteHandler,createStaticRequestHandler} =require('./webutlis');
const routes=require('./app');
const port=801;
 const PUBLIC_DIRECTORY_ROOT='./public';
 let handleStaticRequest=createStaticRequestHandler(PUBLIC_DIRECTORY_ROOT);

let handleRoute=createRouteHandler(routes);

async function  requestHandler(request,response){

    if(request.url==='' || request.url==='/')
        request.url='/Authors/authorsList.html' //set the default home page

    if(await handleStaticRequest(request,response))
        return; //request handled. work is done

    if(!await handleRoute(request,response)){
        
        //request is not handled by anyone.
        response.writeHead(404); //change status to 404
        console.log('serving 404');
        request.url='/error404.html'; //change url to error404.html
        await handleStaticRequest(request,response); //serve the static page
        return ;
    }
    response.end();
} 

//now we must pass the actual handler of business logic to the server
let server= http.createServer(requestHandler); //we must tell which user code will handle the request

server.listen(port, error=>{
    if(error){
        console.log(  `Error starting the server: ${error.message}`);
    } else{
        console.log(  `server is now running on port ${port}`);
    }
});