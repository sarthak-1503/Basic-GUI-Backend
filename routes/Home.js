let express = require('express')
let os = require('os')
let { PythonShell } = require('python-shell')
let router = express.Router()

router.post('/',async(req,res) => {
    
    console.log('req dot query: ',req.query.filename)
    let {filename} = req.query;
    let Result = -1;
    

    let options = {
        mode: "text",
        pythonOptions: ["-u"],
        scriptPath:"./",
        args: [filename]
      };

      console.log('options args: ',options.args);
      
      PythonShell.run("Character_Recognition.py", options, function (err, result) {
        if (err) throw err;
        console.log("result: ", result);
        Result = parseInt(result[0].substr(1,result[0].length - 2));
        res.status(200).json({success: true, result: Result});
      });

})

module.exports = router;
