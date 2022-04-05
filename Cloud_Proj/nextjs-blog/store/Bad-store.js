import { createContext, useState, useEffect } from 'react';

const BadDataState = {
    BadNum: '0'
}
const BadContext = createContext(BadDataState);

export function BadContextProvider(props) {
    const [dataObj, setDataObj] = useState(BadDataState)

    useEffect(() => {
        fetch('api/getFine')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.BadNum = data.BadNum
                return prevDataObj
            });
        })
      }, []);

    function getBadNum() {
        return dataObj.BadNum
    }

    async function setBadNum(theNewNumber)  {
        const response = await fetch('api/setFine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({BadNum: theNewNumber}) 
        });

        setDataObj((oldDataObj) => {
            let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
            prevDataObj.BadNum = theNewNumber
            return prevDataObj
        });
    }

    const context = {
        getBadNum: getBadNum,
        setBadNum: setBadNum
    };

    return (
        <BadContext.Provider value={context}>
            {props.children}
        </BadContext.Provider>
    );
}

export default BadContext;