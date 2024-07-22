// import React, { useEffect, useState } from 'react';

// const useLocalStorage = (key, initialValue) => {
//     const getItem = localStorage.getItem(key);
//     const [speeds, setSpeeds] = useState(getItem ? getItem : initialValue);

//     useEffect(() => {
//         localStorage.setItem(key, speeds);
//     }, [key, speeds]);
//     // return <div>useLocalStorage</div>;
//     return [speeds, setSpeeds];
// };

// export default useLocalStorage;

import React, { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // const checkItem = () => localStorage.getItem(key);
    const [name, setName] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : initialValue
    );

    useEffect(() => {
        localStorage.setItem(key, name);
        // isJSON
        //     ? localStorage.setItem(key, JSON.stringify(name))
        //     : localStorage.setItem(key, name);
    }, [name, key]);

    return [name, setName];
};

export default useLocalStorage;
