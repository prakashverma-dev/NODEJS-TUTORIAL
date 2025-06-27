PROJECT_09 : we will create a blog application with CRUD Operation like blog creation, deletion etc.

Dependencies Needed : -

>npm init -y
>npm i express ejs (we will use Server side Rendering) 
>npm i dotenv

Note: Whenever we are in development Phase/Environment vs Production Phase/Environment of Our application -

For development phase of our application we need the 'nodemon' only so we install it with flag -D and rest all Dependencies we need for Production Environment so we intall via without any flag or --save or -S which is the default flag. 

   "start" : "node index.js"  -> For Production Phase or Environment(>npm start)"dev": "nodemon index.js"   -> For development Phase or Environment(>npm run dev)