import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import infos from '../../Data/infos';
import './Infos.css'
const Infos = () => {
    return (
        <div className="infos">
            <div className="container">
                <div className="row mt-5">
                    
                    {
                       infos.map(info => <InfoCard info={info}/> ) 
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default Infos;