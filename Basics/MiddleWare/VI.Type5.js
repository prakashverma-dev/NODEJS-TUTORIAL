
const express = require("express");
const server = express();


/*#Last : Third-party middleware : Developed by external packages e.g., body-parser, morgan, cookie-parser middle ware etc. 

// Use third-party middleware to add functionality to Express apps.

  To use third party middle wares, we need to these middelwares from npm packages. 
  
  Ex: a) Loading the cookie-parsing middleware function cookie-parser -

 >install cookie-parser

 const cookieParser = require('cookie-parser');
 const express = require('express')
 const server = express()

// To load the cookie-parsing middleware
   server.use(cookieParser())




*/
//Ex: b) For generating logger details from http client machine, we can use a third party middle ware name 'morgan' middleware.

//To install 'morgan' Logger middelware - 

//    >npm i <middleware_name>

// Note : 'morgan' middleware module, It is a HTTP request logger middleware for node.js 


const morgan = require("morgan");
//morgan Syntax : morgan(format, options)

//Here, There are various pre-defined formats provided: tiny, combined, common, dev, short, default.


server.use(morgan('tiny')); // we get the HTTP Request tiny details.
server.use(morgan('dev')); 
server.use(morgan('default')); 

server.listen(8007);

/*

Express ThirdParty middleware : The Express thirdParty middleware modules listed here are maintained by the Expressjs team -


body-parser  ->	Parse HTTP request body. See also: body, co-body, and raw-body.	express.bodyParser
compression  ->	Compress HTTP responses.	express.compress
connect-rid ->	Generate unique request ID.	NA
cookie-parser ->	Parse cookie header and populate req.cookies. See also cookies and keygrip.	express.cookieParser
cookie-session ->	Establish cookie-based sessions.	express.cookieSession
cors	Enable cross-origin resource sharing (CORS) with various options.	NA
errorhandler	Development error-handling/debugging.	express.errorHandler
method-override	Override HTTP methods using header.	express.methodOverride
morgan	HTTP request logger.	express.logger


multer   -->	Handle multi-part form data.	express.bodyParser


response-time	Record HTTP response time.	express.responseTime
serve-favicon	Serve a favicon.	express.favicon
serve-index	Serve directory listing for a given path.	express.directory
serve-static	Serve static files.	express.static
session	Establish server-based sessions (development only).	express.session
timeout	Set a timeout period for HTTP request processing.	express.timeout
vhost	Create virtual domains.	express.vhost



Additional middleware modules
These are some additional popular middleware modules.

Warning

This information refers to third-party sites, products, or modules that are not maintained by the Expressjs team. Listing here does not constitute an endorsement or recommendation from the Expressjs project team.

Middleware module	Description
cls-rtracer	Middleware for CLS-based request id generation. An out-of-the-box solution for adding request ids into your logs.
connect-image-optimus	Optimize image serving. Switches images to .webp or .jxr, if possible.
error-handler-json	An error handler for JSON APIs (fork of api-error-handler.)
express-debug	Development tool that adds information about template variables (locals), current session, and so on.
express-partial-response	Filters out parts of JSON responses based on the fields query-string; by using Google API’s Partial Response.
express-simple-cdn	Use a CDN for static assets, with multiple host support.
express-slash	Handles routes with and without trailing slashes.
express-uncapitalize	Redirects HTTP requests containing uppercase to a canonical lowercase form.
helmet	Helps secure your apps by setting various HTTP headers.
join-io	Joins files on the fly to reduce the requests count.
passport	Authentication using “strategies” such as OAuth, OpenID and many others. See http://passportjs.org/ for more information.
static-expiry	Fingerprint URLs or caching headers for static assets.
view-helpers	Common helper methods for views.
sriracha-admin	Dynamically generate an admin site for Mongoose.
For more middleware modules, see http-framework.




*/





