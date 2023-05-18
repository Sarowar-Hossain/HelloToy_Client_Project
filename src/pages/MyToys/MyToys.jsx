import React, { useContext } from 'react';
import { UserContext } from '../../Context/Context';

const MyToys = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div>
            this is my toys page
        </div>
    );
};

export default MyToys;