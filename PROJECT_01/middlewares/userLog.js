

const fs = require("fs");

function logReqRes(filepath){

    return (req, res, next)=>{

        const timeLog = Date.now() +" "+ req.ip +" "+req.method+" "+req.path + "\n"
        fs.appendFile(filepath, timeLog, (err, data)=>{

            if(err) throw err;
            console.log("UserLog Newly Inserted Succefully..")
            next();

        })

    }


}

module.exports = logReqRes;