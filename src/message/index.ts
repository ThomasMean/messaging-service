import express from 'express';
import axios from 'axios';
import getData from './service';
const router = express.Router();

// Main message send route.
router.post('/', async (req: express.Request, res: express.Response) => {
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

    const data = getData(message);
    if (!data.user || !data.token) {
        res.status(400).send('Failed to send');
        console.error('Failed to get token or user');
    }

    await axios.post('https://api.pushover.net/1/messages.json', data).then(() => {
        res.send('Notification Sent');
        return;
    }).catch(err => {
        const errors = err.response.data.errors.join(', ');
        res.status(400).send(errors);
        console.error(errors);
        return;
    });
});

module.exports = router;
