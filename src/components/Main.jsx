import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    createNewDice,
    formatTime,
    randomNumbersGen,
} from '../methods/Methods';
import Die from './Die';
import Board from './Board';
import { nanoid } from 'nanoid';
import { InfoContext } from '../contexts/InfoContext';

const Main = () => {
    // console.log(nanoid());
    const { history, setHistory } = useContext(InfoContext);
    // console.log(history);
    const [dice, setDice] = useState(createNewDice);
    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            id={die.id}
            value={die.value}
            locked={die.locked}
            lockDie={() => lockDie(die.id)}
        />
    ));
    const [tenzies, setTenzies] = useState(false);
    const [start, setStart] = useState(false);
    const [time, setTime] = useState({ minute: 0, second: 0 });
    const timeText = formatTime(time);
    // const [endTime, setEndTime] = useState({ set: false, time: null });
    const [endTime, setEndTime] = useState(null);
    const [showBoard, setShowBoard] = useState(false);
    const timer = useRef();

    // console.log(timer);

    const lockDie = (dieId) => {
        setDice((prevDice) =>
            prevDice.map((die) =>
                die.id === dieId ? { ...die, locked: !die.locked } : die
            )
        );
    };

    const rollDice = (event) => {
        setDice((prevDice) =>
            prevDice.map((die) =>
                die.locked ? die : { ...die, value: randomNumbersGen() }
            )
        );
    };

    const startGame = (event) => {
        setStart(true);
        // console.log('starting game...');
        // console.log(time);

        setTime({ minute: 0, second: 0 });
        setTenzies(false);
        setDice(createNewDice);
    };

    const resetGame = (event) => {
        setTenzies(false);
        setDice(createNewDice);
    };

    useEffect(() => {
        const checkLock = dice.every((die) => die.locked);
        const checkValues = dice.every((die) => die.value === dice[0].value);

        if (checkLock && checkValues) {
            // console.log('You won');
            setTenzies(true);
            setStart(false);

            // console.log(time);
            setEndTime(time);
            // setEndTime({ set: true, time: time });
            // setting history

            let newHistory = JSON.parse(history);
            newHistory.unshift({ ...time, id: nanoid(), dateTime: new Date() });
            newHistory = JSON.stringify(newHistory);
            setHistory(newHistory);
            // console.log(history);

            // end history
            // setHistory(JSON.parse(history))
            clearInterval(timer.current);
            setShowBoard(true);
        }
    }, [dice]);

    // useEffect(() => {
    //     // console.log(timeText);
    // }, [time]);

    // useEffect(() => {
    //     if (endTime) {
    //         console.log('add to local storage', endTime);
    //     }
    // }, [endTime]);

    useEffect(() => {
        if (!start) return;

        timer.current = setInterval(() => {
            // console.log('started');
            // console.log(time);
            setTime((prevTime) => {
                return prevTime.second < 59
                    ? { ...prevTime, second: prevTime.second + 1 }
                    : { ...prevTime, minute: prevTime.minute + 1, second: 0 };
            });
        }, 1000);
    }, [start]);

    return (
        <main className="main">
            {showBoard && (
                <Board data={{ showBoard, setShowBoard, startGame, endTime }} />
            )}
            <div className="container main--container">
                <div className={start ? 'main--timer active' : 'main--timer'}>
                    {start && <i className="fas fa-clock timer--icon"></i>}
                    <p className={start ? 'active' : ''} onClick={startGame}>
                        {start ? timeText : 'Start'}
                    </p>
                </div>
                <div className="main--board">
                    <div className="artboard">
                        <div className="dice">{diceElements}</div>
                    </div>
                </div>

                <div
                    className={
                        start ? 'roll-button active' : 'roll-button not-active'
                    }
                    onClick={!tenzies ? rollDice : resetGame}
                >
                    <button>{!tenzies ? 'Roll' : 'Reset Game'}</button>
                </div>

                {/* {endTime && (
                    <div className="end-time text-center">
                        <h2>{formatTime(endTime)}</h2>
                    </div>
                )} */}
            </div>
        </main>
    );
};

export default Main;
