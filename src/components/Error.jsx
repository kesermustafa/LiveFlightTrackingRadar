import React from 'react';
import { TbFaceIdError } from "react-icons/tb";

const Error = ({msg}) => {
    return (
        <div className="error-container">
            <div className='text-center d-flex flex-column align-items-center justify-content-center gap-3'>
                <TbFaceIdError size={'48px'} color={'orange'}/>
                <h4>Beklenmedik bir hata olustu !</h4>
                <p className='text-nowrap'>{msg}</p>
            </div>

        </div>
    );
};

export default Error;
