import express from 'express';
const router = express.Router();


// Main message send route.
router.post('/', function (req: express.Request, res: express.Response) {
    const body = req.body;

    const id = body.id;

    if (!id) {
        console.log('id not found');
        res.status(400).send('ID not found');
        return;
    }
    const message = body.message;

    if (!message) {
        console.log('message not found');
        res.status(400).send('Message not found');
        return;
    }

    console.log(`message sent was ${message}`);

    res.send('Valid Request');
});

module.exports = router;
