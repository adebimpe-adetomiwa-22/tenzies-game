import React, { useContext, useState } from 'react';
import { InfoContext } from '../contexts/InfoContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(InfoContext);
    const [formError, setFormError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick = (event) => {
        if (!user) {
            setFormError(true);
            return;
        }

        setFormError(false);
        console.log('ready to submit');
        navigate('/tenzies-game');
    };

    return (
        <>
            <Navbar />
            <div className="login">
                <div className="container">
                    <form className="form" onSubmit={handleSubmit}>
                        {formError && (
                            <div className="form-error">
                                <p>Enter a name!</p>
                            </div>
                        )}
                        <div className="form-input">
                            {/* <label htmlFor="user">User</label> */}
                            <input
                                type="text"
                                placeholder="User"
                                value={user}
                                onChange={(event) =>
                                    setUser(event.target.value)
                                }
                            />
                        </div>
                        <div className="play-button" onClick={handleClick}>
                            <input type="button" value="Play Game" />
                            <i className="fas fa-play"></i>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
