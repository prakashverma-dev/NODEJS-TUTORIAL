

/* 

#REPL :- The Node.js runtime has a built-in interactive shell, in which you can execute instructions one at a time. The Node.js interactive shell works on the principle of REPL, which is an acronym for READ, EVALUATE, PRINT and LOOP.

How to start REPL or To Enter into REPL -
Hit : simply enter node in the command terminal (without the javascript file name)

>node

TO Stop the REPL :  Press ctrl+c twice, or ctrl+D once, or enter .exit in front of > symbol.


 - The REPL feature of Node is very useful in experimenting with Node.js codes and to debug JavaScript codes.

You can test any Node.js/JavaScript expression by entering in front of the > prompt. For example −

> 10+20
30
> "Hello"+"World"
'HelloWorld'
> a=10
10
> b=20
20
> a+b
30
> Math.random()
0.5423940959293392
>






--------------------------------------------------------------------------
NPM : an acronym for Node Package Manager is NPM, refers to the Command line utility to install npm packages and modules which is present there on https://www.npmjs.com/.

NPM perform version management and dependency management of Node.js packages.

Using npm command line we can install dependencies to our project from NPM server.

Packages of NodeJS are available at NPM i.e at NOde package Manageer, from here we can download any node package and use in our project,To download we mostly refers the command start with npm install ...

#1. After installing nodejS in system npm also get install, to check both npm version and node version where installed or not -

> npm -v
> node -version

Note :- In case you have an older version of NPM or Node, you need to update it to the latest version using the following command -

> npm install npm -g  (-g indicates install globally means install in our system respostery like we can able to access node/npm anywhere in our s/s)



#2. To install any external module from npm packages, we can install for our project locally i.e to current project file repostery OR, we can install into globally i.e to our computer sytsem file i.e in c-drive which can be runnable from anywhere in our s/s -

To Install Locally External Module from npm -

npm install <Module Name> or npm i <Module Name>

e.g: following is the command to install a famous Node.js web framework module called express − 

 > install i express 

 Noticed two thing : After installing any external module to our local file or system we observe that i) It downloade all the express files to under folder name 'node_modules', here in express it needs more files to downloaded which also downloaded to the same folder and ii) also added express downladed current version to the 'depencencies' object of packages.json file.

The package.json file is a JSON file that is used to manage dependencies in Node.js projects. It contains information about the project, such as its name, version, and dependencies.

The package.json file is typically located in the root directory of a Node.js project. It can be created by running the npm init command.


Use --save at the end of the install command to add dependency entry into package.json of your application. 

> npm install express –-save


#3. To start any project in nodejs we first configure the package.js file first which manage our project dependencies and holds other inforamtion about our project like project name, publish etc.

We can create package.json manully as well as with npm command - 

>npm init  (before beginning any project in nodejs which ask some question while executing)

>npm init -y (-y flag use for adding up installed the package.json with all default names present with no user input taking.)

Note : To create package.json file from scrach by NPM to manage our node files -

use cmd : npm init (After going inside the folder where we want to install/insert package.json file by navigating to current folder by cd then >npm init )

package.json have following information about our project -

 "type": "commonjs",  //tells which module type using ECMA(module) or CommonJS
  "name": "nodejs_tutorial", //tells our project name
  "version": "1.0.0", //tells our project current version which we defined
  "description": "we learning nodejs tutorial for first time", //about our project in details
  "main": "index.js",  //tells which file of js is entry point in our code usually we specfiy index.js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", //for testing purpose
     "check" : "node 3.FileSystem.js", //creating our manual script to run by npm command - >npm run check

     "start" : "node 3.FileSystem.js" //to start the whole project with cmd : >npm run start (basicaly here start is special character defined in npm which runs without run cmd as)

     >npm start
  },
  "keywords": [ // define some keyword for our project
    "rowdy"
  ],
  "author": "Prakash",  //tells the author of our project
  "license": "ISC" //tells the who has license about our project



// NOte : Using package.json file's scripts object we can run our project code with npm command (apart from node <file_name> ), as follows -

step1 : First add a script property name with its run script to value.

Step2 : now in terminal run : npm <property_name_of_script_obj> 




#4. devDependencies : All the dependencies we add in devdependencies which are needed for development envirmonent not for core code doing for project. 

dependencies  --> related with our code i.e with server code

devDepndencies --> related not with our core coding like installing nodemon which responsible for live server update in our code to output which we have for web server system.

> npm install nodemon --save-dev  (TO save nodemon module as under devDependencies object of package.json)

OR,

>npm i nodemon -D

> npm install express --save (To express module under dependencies object of package.json, where dependencies object is the default object to save all pulled modules from npm)

Note : -

--save flag after <module_name> is default flag to add module version in dependencies object only i.e the default place to get added any modules there. 

e.g : >npm install express --save 

OR, 

>npm i nodemon -S

i.e same as >npm install express

--save-dev after <module_name> adds the entry of installed module version to devDependencies object only. like > npm install nodemon --save-dev

--no-save installs but does not add the entry to the package.json file dependencies

--save-optional installs and adds the entry to the package.json file optionalDependencies

--no-optional will prevent optional dependencies from being installed

Shorthands of the flags can also be used −

-S: --save

-D: --save-dev

-O: --save-optional

The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.


Note : nodemon package of npm :- This package help us to restart our nodejs server again whenever any change happend in our code, doesnot we need to restart the run-time server of node by using command > node <file_name.js> , IF we intall nodemon globally then we use >nodemon <fiel_name.js> just once for current file and it track the any changed in our code and give us the result to terminal.

NOte : if user install nodemon locally i.e in project folder file, then he has to run node code using scripts object way of package.json by defining scripts like >nodemon <file_name>   

;then run code like  >npm run <property_name>  //here proprty name is name which we define while writting the scripts in the package.json

So It always recommended to install nodemon or other web depencencies globally by - 

>npm install nodemon -g   i.e   >npm install nodemon --global

> npm install -g nodemon

Now, After module installtion globally went to our system directory file so we can use it from anywhere.




#5. Global vs Local Installation of any module from npm :-

Local Installtion : 

By default, npm installs dependency in local mode. Here local mode specifies the folder where Node application is present. For example if you installed express module, it created node_modules directory in the current directory where it installed express module.

Use:   >npm ls  i.e >npm list   (To list down all the locally installed modules if present).

Global Installtion :

Globally installed packages/dependencies are stored in system directory. Let's install express module using global installation. Although it will also produce the same result but modules will be installed globally i.e will be in our sytem c drive directory like  C:\Users\your-username\AppData\Roaming\npm\node_modules.

Use:   >npm list -g    (To list down all the globally installed modules if present).


###Check(Doubt) :-  Note : Suppose you install any module globally which needed for our code, so now you use that global install module using require() as that module install globally in our sytem so we can directly access anywhere in our code.

Note : Global Installation : Use for command-line tools work
Local Installation : Use for project-specific dependencies.


#6. Unintallation of Local npm modules -

> npm uninstall express 

> npm un express 


To verify uninstall use cmd : >npm ls   (which list down all local module installed) 


 Uninstallation of GLobal npm modules -

>npm uninstall express -g

To verify uninstall use cmd : >npm ls -g  (which list down all local module installed) 



#7. Encoding of Version of MOdule Installed : -

"express" : "^4.19.2" 

Here,   ^  : indicates the if there will any upper minor version of 4.19.2 i.e here minor version is 19, so if in future 20 available so if we use ^ measn if we hit npm update, then it allowed to update.

4.19.2  : the first place 4 indicates major version, 2nd place i.e 19 indicates minor version, 3rd place indicates patch version i.e for fixing bugs we use it or update it.
 
* sign i.e "*4.19.2"  : means if there will be any major version also available then alloed to update like 5 or 6 version as well that's major version, Which doesnot recommended as once projeect is developed with some major version then in future with some other major version there will be isssue in the code will create, we generally dont put *


~ sign i.e "~4.19.2"  : safe sign(tilt) means it only allowed to update the patch version only, if available.

no sign i.e "4.19.2" : means we want exact same version to be installed whenever someone updating or downloading.

#8. Update Package of installed locally Module if available : -

To update the package installed locally in your Node.js project, The following command will update the existing ExpressJS module to the latest version, if available at the npm - 

Run : >npm update <package name>

>npm update express

>npm update (will update all modules which are oudated)

To check if any module is outdated in our project, oudated means user working with older version of express and in market latest version is available/ To check how many downloaded modlues are oudated and if user wants to update can do it -

hit :

>npm outdated   //# Check for outdated packages

If user find any modules is oudated and wants that to update to latest one -

>npm update express (specific module name mentioned that only updated)

>npm update (no module name mentioned that means all the modules will get updated)


NOte : Before running >npm update ; please check user added '^' before version of dependencies all it allow to update minor version, if added '*' means to update the major version as well ; and if added '~' means to update only patch version only if available.

*    - To update the major verison (Not safest)
^    - To update the minor verison (default recommended)
~    - To update the patch verison (Most Safest)
"4.19.0"  - To update as mentioned exact verison (strict update only)

NOte : outdated opposite command is updated, First user check npm outdated, if available will show else will show blank ; if updated then run cmd >npm updated


#9. To push all the node_modlues from npm, if deleted by mistakes anyone it -

If you have already placed all the project dependencies in your package.json file and deleted the node_modules folder, all of them will be installed at once by simply running >npm install (without any package name in front of it)

If someone deleted the locally installed modules from NPM from node_modules or completely node_modules, then for running code we get error like "cannot find module express", also someone downloaded code from github so we usually dont push our code to cloud with node_modules as it has some huge size, then once he/she will run then he has to installed all the dependencies available for the project, that would be both devDependencies and depencencies, check in package.json.

NOte : User must keep the package.json file with added all the depencencies version there, as user push node_modulues from npm, then npm look into package.json file with respectived dependencies and download all the modules as per version specified by user.

To Intall all dependencies at once : >npm install (without any package name after it)

To install a specific dependencies/module : >npm install express (with package name)

e.g: suppose someone kept forcefully older version in package.json and wants the express should be updated with older version only as he mentioned -

"express" : "4.19.0" //means user wants exact 4.19.0 version, 

To achive above run either -

> npm install (which push all modules with mentioned version in package.json) OR,

>npm install express (as user mentioned the specific version of express in package.json so it only pushees the express node_modules with not disturbing the other node_modules.)




#10.  If we dont want to push files to git whenere we upload -

make a file name under project resp, starting with dot like -

.gitignore

and mention the folder name which we dont want to push to git e.g

node_modules



#11. ** Enviroment Variable In Nodejs** : To use environment variable we can use a npm package called dotenv which will create new process.env variables.

dotenv Module : Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

Install dotenv : >npm install dotenv
Create a .env file in the root of your project and store our secret data in that .env file(mention .dev file in .gitignore file also) as follows -

DB_PASSWORD = "Rowdy@123"
DB_PUBLIC_DIR = 'public'
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"


To use stored data from .env to our project file, call require('dotenv').config()  at top of the file -

Note : -
require('dotenv').config()
console.log(process.env.<Variable_Name>) //to access the variable value. 




Process Object In Nodejs : The process object in Node.js is a global object. The process object provides information on current Node.js process. With the help of a number of methods and properties associated with this object, it is possible to control the current Node.js process.

process.env  - show the all the envirnment variable avaialable for sytem

Note : What is Environment Variable : -

An environment variable is a user-definable value that can affect the way running processes will behave on a computer. Environment variables are part of the environment in which a process runs.

Environment variables are useful to store system-wide values, For examples, PATH : the most frequently-used environment variable, which stores a list of directories to search for executable programs.

Environment variables are useful to store system-wide values, which can be accessible accross user's system only and these stored variable can access only on the user's system only. Sometimes, we need to store some private variable data i.e password etc for user's own purpose which we dont want to display to other user. So we can store those private stuff into our system variable.

An environment variable is a variable whose value is set outside the program.An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.

Environment variables allow us to keep values on our local and production environments distinct and safe as we develop our app.

Environment variables makes our all secret variable safe inside our operating system layer only for system user only, for use by not sharing to other while application prodution and code sharing.

*/

require("dotenv").config()



console.log("Ram Sita g");

console.log("Wow");

console.log(process.env);
console.log(process.env.DB_PASSWORD); //result the password

console.log(process.env.PUBLIC_DIR); //pubic (which is now not static)

console.log(process.env.PORT); //8080 (which is now not static)