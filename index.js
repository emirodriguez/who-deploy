import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    const weekNumber = 0 | new Date().getDate() / 7;

    let deployers = ':bug:';
    switch (weekNumber) {
        case 0:
            deployers = 'flor / lauti / edu / emi';
        case 2:
            deployers = 'lauti / leo / emi / juli';
        default:
            deployers = 'flor / leo / edu / juli';
    }

    res.send(deployers);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});
