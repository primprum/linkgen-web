const express = require('express');
// const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// app.use(cors()); // allow cross-origin request

const router = express.Router();

router.get('/',function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('.'));

app.use('/', router);
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
