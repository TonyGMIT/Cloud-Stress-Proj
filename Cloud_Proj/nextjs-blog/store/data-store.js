import { createContext, useState, useEffect } from 'react';

const initialDataState = {
    moodNum: '0',
}
const DataContext = createContext(initialDataState);

export function DataContextProvider(props) {
    const [dataObj, setDataObj] = useState(initialDataState)

    useEffect(() => {
        fetch('api/getData')
        .then((res) => res.json())
        .then((data) => {
            setDataObj((oldDataObj) => {
                let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
                prevDataObj.moodNum = data.moodNum
                return prevDataObj
            });
        })
      }, []);

    function getMoodNum() {
        return dataObj.moodNum
    }

    async function setMoodNum(theNewNumber)  {
        const response = await fetch('api/setData', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({moodNum: theNewNumber}) 
        });

        setDataObj((oldDataObj) => {
            let prevDataObj = JSON.parse(JSON.stringify(oldDataObj))
            prevDataObj.moodNum = theNewNumber
            return prevDataObj
        });
    }

    const context = {
        getMoodNum: getMoodNum,
        setMoodNum: setMoodNum
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;