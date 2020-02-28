import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div>
            <p>header</p>
            {children}
            <p>footer</p>
        </div>
    );
};

export default Wrapper;