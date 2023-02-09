import http from 'http'


http.createServer((req,res)=>{

    // res.writeHead(200,{'conntent-type':'application/json'});
    // res.writeHead(200,{'conntent-type':'application/csv'});
    // const persona = {
    //     id: 1,
    //     nombre: 'Daniel'
    // }
    // res.write(JSON.stringify(persona));
    
    res.write( 'Hola Mundo' );
    res.end();

})
.listen( 8080 );

console.log('Escuchando el el puerto', 8080)