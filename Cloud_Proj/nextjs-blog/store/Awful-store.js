import { createContext, useState, useEffect } from 'react';

const AwfulDataState = {
    AwfulNum: '0'
}
const AwfulContext = createContext(AwfulDataState);

export function AwfulContextProvider(props) {
    const [dataObj, setDataObj] = useState(AwfulDataState)

    useEffect(() => {
        fetch('api/getFine')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.AwfulNum = data.AwfulNum
                return prevDataObj
            });
        })
      }, []);

    function getAwfulNum() {
        return dataObj.AwfulNum
    }

    async function setAwfulNum(theNewNumber)  {
        const response = await fetch('api/setFine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({AwfulNum: theNewNumber}) 
        });

        setDataObj((oldDataObj) => {
            let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
            prevDataObj.AwfulNum = theNewNumber
            return prevDataObj
        });
    }

    const context = {
        getAwfulNum: getAwfulNum,
        setAwfulNum: setAwfulNum
    };

    return (
        <AwfulContext.Provider value={context}>
            {props.children}
        </AwfulContext.Provider>
    );
}

export default AwfulContext;