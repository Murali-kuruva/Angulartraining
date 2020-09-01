

let dateHandler=(request,response)=>{
    response.write(`Today is ${new Date().toLocaleDateString()}`);
}

let timeHandler=(request,response)=>{
    response.write(`Time is ${new Date().toLocaleTimeString()}`);
}



let routes={
    '/date':dateHandler,
    '/time':timeHandler,

};

module.exports=routes;