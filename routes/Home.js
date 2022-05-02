let express = require('express')
let os = require('os')
let { PythonShell } = require('python-shell')
let router = express.Router()

// router.use(express.json())

router.post('/',async(req,res) => {
    
    console.log('req dot query: ',req.query.filename)
    let {filename} = req.query;
    let Result = -1;
    // req.body.image_data
    // let file_path = "C:\\Users\\japni\\Desktop\\Sarthak Arora\\" + filename.toLocaleString();

    let options = {
        mode: "text",
        pythonOptions: ["-u"],
        // pythonPath: "C:\Users\japni\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Python 3.8\Python 3.8 (64-bit).lnk",
        scriptPath:"./",
        args: [filename]
      };

      console.log('options args: ',options.args);

      // let pyshell = new PythonShell('Character_Recognition.py');
      
      PythonShell.run("Character_Recognition.py", options, function (err, result) {
        if (err) throw err;
        console.log("result: ", result);
        Result = parseInt(result[0].substr(1,result[0].length - 2));
        res.status(200).json({success: true, result: Result});
      });

      // pyshell.on('message', function(message) {
      //   console.log(message.substr(1,message.length - 2));
      //   Result = parseInt(message.substr(1,message.length - 2));
      //   console.log('message+result: ', Result);
      //   console.log('message: ', message);

      //   res.status(200).json({success: true, result: Result});
      // })

      // pyshell.end(function (err,code,signal) {
      //   if (err) throw err;
      //   console.log('The exit code was: ' + code);
      //   console.log('The exit signal was: ' + signal);
      //   console.log('finished');
      // });
})

module.exports = router;