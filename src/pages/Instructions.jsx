import React from 'react';

const Instructions = () => {
    return (
        <section className="instructions">
            <div className="container">
                <h4 className="instruction--title md:text-xl font-bold mb-2">
                    How to play.
                </h4>
                <div>
                    <ul className="ul-lists">
                        <p>
                            When playing Tenzies solo, the goal remains the
                            same: to get all ten dice to show the same number.
                            However, the focus can be more on improving personal
                            speed and efficiency rather than competing against
                            others. Here are some guidelines and variations for
                            solo play:
                        </p>
                        {/* <li></li> */}
                        <li className="sub-title">Objective</li>
                        <li>
                            Get all ten dice to show the same number as quickly
                            as possible.
                        </li>
                        {/* <li></li> */}
                        <li className="sub-title">Setup</li>
                        <li>Gather 10 dice.</li>
                        <li>Find a flat surface for rolling the dice.</li>
                        <li className="sub-title">Gameplay</li>
                        <li>Roll all ten dice.</li>
                        <li>
                            Set aside any dice that show the number you want to
                            collect (e.g., 6s).
                        </li>
                        <li>Re-roll the remaining dice.</li>
                        <li>
                            Continue rolling and setting aside dice until all
                            ten dice show the chosen number.
                        </li>
                        <li className="sub-title">Timing</li>
                        <li>
                            Use a timer to track how long it takes you to get
                            all ten dice to match.
                        </li>
                        <li>
                            Try to beat your previous time with each new game.
                        </li>
                        <li className="sub-title">Variations</li>
                        <li>
                            <span className="sub-sub-title">
                                Speed Challenge:
                            </span>{' '}
                            See how quickly you can achieve Tenzies and try to
                            beat your personal best time.
                        </li>
                        <li>
                            <span className="sub-sub-title">
                                Number Sequence:
                            </span>{' '}
                            Roll the dice to get all ten dice to show 1s, then
                            2s, and so on, up to 6s. Time yourself to complete
                            the entire sequence.
                        </li>
                        <li>
                            <span className="sub-sub-title">
                                Pattern Challenge:
                            </span>{' '}
                            After getting all ten dice to show the same number,
                            arrange them in a specific pattern (e.g., a straight
                            line, a square, etc.).
                        </li>
                        <li>
                            <span className="sub-sub-title">
                                Blindfolded Tenzies:
                            </span>{' '}
                            Try rolling the dice while blindfolded and feeling
                            for the numbers. This variation adds an extra layer
                            of challenge.
                        </li>
                        <li className="sub-title">Strategy Tips</li>
                        <li>
                            Focus on the dice showing your chosen number and
                            quickly re-roll the others.
                        </li>
                        <li>
                            Develop a smooth and efficient rolling and sorting
                            technique to save time.
                        </li>
                        <li>
                            Practice regularly to improve your speed and
                            accuracy.
                        </li>
                        <li>
                            Playing Tenzies solo can be a relaxing and enjoyable
                            way to pass the time, while also helping to improve
                            quick thinking and dexterity.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Instructions;
