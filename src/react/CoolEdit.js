import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "./index";
import {Redirect} from "react-router-dom";

const CoolEdit = () => {
    const [isClicked, setIsClicked] = useState(false);
    const {item, setContextItem} = useContext(AppContext);

    useEffect(() => {
        setContextItem({...item,...{name: 'CoolEdit', itemsCount: 1}});
    }, []);


    const clickHandler = (event) => {
        event.preventDefault();
        //setContextItem({...item,...{name: 'Clicked', item: user}});
        setIsClicked(true)
    };

    if (isClicked || item.item === undefined) {
        return <Redirect to="/cool"/>
    }

    return (
        <div style={{padding: '20px', marginTop:'80px', border: '1px solid #cccc'}}
             onClick={(e) => clickHandler(e)}>

            {item.item.trackName} <hr/> {item.item.longDescription}

        </div>
    )
};

export default CoolEdit;
