import { createContext, useState, useEffect } from 'react';

const MildDataState = {
    MildNum: '0'
}
const MildContext = createContext(MildDataState);

export function MildContextProvider(props) {
    const [dataObj, setDataObj] = useState(MildDataState)

    useEffect(() => {
        fetch('api/getFine')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.MildNum = data.MildNum
                return prevDataObj
            });
        })
      }, []);

    function getMildNum() {
        return dataObj.MildNum
    }

    async function setMildNum(theNewNumber)  {
        const response = await fetch('api/setFine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({MildNum: theNewNumber}) 
        });

        setDataObj((oldDataObj) => {
            let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
            prevDataObj.MildNum = theNewNumber
            return prevDataObj
        });
    }

    const context = {
        getMildNum: getMildNum,
        setMildNum: setMildNum
    };

    return (
        <MildContext.Provider value={context}>
            {props.children}
        </MildContext.Provider>
    );
}

export default MildContext;