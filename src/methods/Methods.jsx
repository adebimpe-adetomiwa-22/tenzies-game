import { nanoid } from 'nanoid';

const formatTime = (time) => {
    let newTime = '';
    let min = time.minute;
    let sec = time.second;

    if (time.minute < 10) {
        min = `0${time.minute}`;
    }
    if (time.second < 10) {
        sec = `0${time.second}`;
    }

    newTime = `${min}:${sec}`;
    return newTime;
};

const randomNumbersGen = () => {
    return Math.ceil(Math.random() * 6);
};

const createNewDice = () => {
    let dice = new Array();

    for (let i = 0; i < 10; i++) {
        let die = {
            // id: Math.round(new Date() * Math.random()),
            id: nanoid(),
            value: randomNumbersGen(),
            locked: false,
        };
        dice.push(die);
    }

    return dice;
};

export { formatTime, createNewDice, randomNumbersGen };
