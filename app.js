let express = require('express')
const cors = require('cors')
let app = express();
let bodyParser = require("body-parser");
var morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const port = 5000;

app.use('/api',require('./routes/Home'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
