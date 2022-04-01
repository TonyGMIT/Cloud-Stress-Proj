import { createContext, useState, useEffect } from 'react';

const FineDataState = {
    FineNum: '0'
}
const FineContext = createContext(FineDataState);

export function FineContextProvider(props) {
    const [dataObj, setDataObj] = useState(FineDataState)

    useEffect(() => {
        fetch('api/getFine')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.FineNum = data.FineNum
                return prevDataObj
            });
        })
      }, []);

    function getFineNum() {
        return dataObj.FineNum
    }

    async function setFineNum(theNewNumber)  {
        const response = await fetch('api/setFine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({FineNum: theNewNumber}) 
        });

        setDataObj((oldDataObj) => {
            let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
            prevDataObj.FineNum = theNewNumber
            return prevDataObj
        });
    }

    const context = {
        getFineNum: getFineNum,
        setFineNum: setFineNum
    };

    return (
        <FineContext.Provider value={context}>
            {props.children}
        </FineContext.Provider>
    );
}

export default FineContext;