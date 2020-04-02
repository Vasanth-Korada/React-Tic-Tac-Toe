import React from 'react';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

const Icon = ({name}) => {
	switch(name){
        case 'circle':
            return <FaRegCircle color="lightgreen" className="icons"/>;
        case 'cross':
            return <FaTimes color="tomato" className="icons" />
        default:
            return <FaPen color="white" className="icons" />


    }
};

export default Icon;
