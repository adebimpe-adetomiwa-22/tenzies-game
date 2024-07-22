import React, { useContext } from 'react';
import { formatTime } from '../methods/Methods';
import { InfoContext } from '../contexts/InfoContext';
import useLocalStorage from '../hooks/useLocalStorage';
const Board = ({ data }) => {
    const { setShowBoard, startGame, endTime } = data;
    const { user, history, setHistory } = useContext(InfoContext);
    // console.log(user);
    // const [history, setHistory] = useLocalStorage('history', [], true);
    const newHistory = JSON.parse(history);
    // console.log(newHistory);

    const formatDateTime = (element) => {
        let dateTime = element.dateTime;
        let [extractedDate, extractedTime] = dateTime.split('T');
        extractedTime = extractedTime.split('.')[0];
        // console.log(extractedDate, extractedTime);
        // return [extractedDate, extractedTime];
        return `${extractedTime} ${extractedDate}`;
    };

    // formatDateTime(newHistory[0]);

    const timeElements = newHistory.map((element, index) => (
        <div className={index === 0 ? 'time current' : 'time'} key={element.id}>
            <p>{formatTime(element)}</p>
            <p>{formatDateTime(element)}</p>
        </div>
    ));

    const clearRecords = (event) => {
        setHistory(JSON.stringify([]));
    };

    return (
        <section className="board">
            <div className="board-wrapper">
                <div className="board--header">
                    <div className="container">
                        <div className="user-icon">
                            <i className="fas fa-user-large"></i>
                        </div>
                        <div className="user-name">
                            <p>{user}</p>
                        </div>
                        <div
                            className="cancel-board"
                            onClick={(event) => setShowBoard(false)}
                        >
                            <i className="fas fa-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className="board--body">
                    <div className="container">
                        <div className="game-info">
                            <div className="time-finished">
                                <h2>Finshed Time:</h2>
                                <h3>
                                    {endTime ? formatTime(endTime) : '00:00'}
                                </h3>
                            </div>
                            <div className="clear-records">
                                <button
                                    onClick={clearRecords}
                                    className="clear-records-button"
                                >
                                    Clear records
                                </button>
                            </div>
                        </div>
                        <div className="former-speed">
                            <fieldset className="former-speed-items">
                                <legend>
                                    <div className="ex-speed-title">
                                        <h2>EX-SPEED</h2>
                                        <i className="fas fa-clock-rotate-left"></i>
                                    </div>
                                </legend>
                                <div className="speeds">
                                    {timeElements}
                                    {/* <div className="time">
                                    <h2>00:00</h2>
                                </div>
                                <div className="time">
                                    <h2>00:00</h2>
                                </div>
                                <div className="time">
                                    <h2>00:00</h2>
                                </div> */}
                                </div>
                            </fieldset>
                        </div>
                        {/* <div className="fastest-players">
                        <div className="player">
                            <p className="player-name">Lorem</p>
                            <p className="player-time">00:15</p>
                        </div>
                        <div className="player">
                            <p className="player-name">Lorem</p>
                            <p className="player-time">00:15</p>
                        </div>
                        <div className="player">
                            <p className="player-name">Lorem</p>
                            <p className="player-time">00:15</p>
                        </div>
                    </div> */}
                        <div className="start-button">
                            <button
                                onClick={(event) => {
                                    setShowBoard(false);
                                    startGame();
                                }}
                            >
                                {/* Start */}
                                New Game
                            </button>
                        </div>
                        {/* <div className="clear-records">
                            <button className="clear-records-button">
                                Clear records
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Board;
