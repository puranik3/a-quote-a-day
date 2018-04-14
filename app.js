const express = require( 'express' );
const path = require( 'path' );
const app = express();
const PORT = process.env.PORT || 3000;

app.get( '/', function( req, res ) {
    res.sendFile( path.join( __dirname, '/index.html' ) );
});

app.listen( PORT, function() {
    console.log();
    console.log( 'Server is listening on port ' + PORT );
});