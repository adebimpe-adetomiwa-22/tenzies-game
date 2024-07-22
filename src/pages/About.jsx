import React from 'react';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h3 className="about--title md:text-xl font-bold mb-2">
                    About
                </h3>
                <div className="about--description">
                    <ul className="ul-lists">
                        <p>
                            Tenzies was created by two friends, Kevin Carroll
                            and Dan Abrams. The game originated from a simple
                            idea to create a fast-paced dice game that could be
                            enjoyed by players of all ages. Here's a brief
                            overview of its development and evolution:
                        </p>
                        {/* <li></li> */}
                        <li className="sub-title">Development and Origin</li>
                        <li>
                            <span className="sub-sub-title">Creators:</span>{' '}
                            Kevin Carroll and Dan Abrams, who are also known for
                            their work in the toy and game industry.
                        </li>
                        <li>
                            <span className="sub-sub-title">Inspiration:</span>{' '}
                            The idea for Tenzies came about when Carroll and
                            Abrams were brainstorming simple and engaging game
                            concepts. They wanted to create a game that was easy
                            to learn, quick to play, and provided lots of fun
                            and excitement.
                        </li>
                        <li>
                            <span className="sub-sub-title">Concept:</span> The
                            basic concept of Tenzies revolves around rolling ten
                            dice as quickly as possible to get them all to show
                            the same number. This simple yet engaging premise
                            made the game appealing to a wide audience.
                        </li>
                        <li className="sub-title">Evolution</li>
                        <li>
                            <span className="sub-sub-title">
                                Initial Release:
                            </span>{' '}
                            Tenzies was first introduced to the market in the
                            early 2010s.
                        </li>
                        <li>
                            <span className="sub-sub-title">Popularity:</span>{' '}
                            The game's simplicity and fast-paced nature quickly
                            gained popularity. It became a hit among families,
                            educators, and game enthusiasts.
                        </li>
                        <li>
                            <span className="sub-sub-title">
                                Educational Use:
                            </span>{' '}
                            Tenzies has also been used as an educational tool to
                            help children develop counting skills, hand-eye
                            coordination, and quick thinking.
                        </li>
                        <li className="sub-title">Game Mechanics</li>
                        <li>
                            <span className="sub-sub-title">Simplicity:</span>{' '}
                            One of the key factors behind Tenzies' success is
                            its simplicity. The rules are easy to understand,
                            making it accessible to players of all ages.
                        </li>
                        <li>
                            <span className="sub-sub-title">Speed:</span> The
                            fast-paced nature of the game adds an element of
                            excitement and challenge, encouraging players to
                            improve their speed and efficiency.
                        </li>
                        <li className="sub-title">Variations</li>
                        <li>
                            Over time, various versions and variations of
                            Tenzies have been developed to keep the game fresh
                            and interesting. These include different ways to
                            play, additional challenges, and special editions.
                        </li>
                        <li className="sub-title">Legacy</li>
                        <li>
                            <span className="sub-sub-title">
                                Cultural Impact:
                            </span>{' '}
                            Tenzies has become a popular party game and a staple
                            in many households. Its success has inspired other
                            game designers to create similar fast-paced dice
                            games.
                        </li>
                        <li>
                            <span className="sub-sub-title">
                                Continued Popularity:
                            </span>{' '}
                            Even years after its initial release, Tenzies
                            continues to be enjoyed by people around the world.
                            Its enduring appeal lies in its ability to bring
                            people together for a fun and engaging experience.
                        </li>
                        <li>
                            Tenzies is a testament to the idea that sometimes
                            the simplest games can provide the most enjoyment.
                            Its development and lasting popularity highlight the
                            creativity and innovation of its creators, Kevin
                            Carroll and Dan Abrams.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
