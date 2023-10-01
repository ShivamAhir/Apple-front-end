import React, { useState, useEffect } from 'react';
import LogOut from '../LogSign/LogOut';
import './User.css';

function User() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch the username from the /api/user/ endpoint
        const fetchUsername = async () => {
            try {
                const response = await fetch('/api/user/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsername(data.username);
            } catch (error) {
                console.error('Error fetching username:', error);
            }
        };

        // Fetch the username initially when the component mounts
        fetchUsername();

        // Set up an interval to fetch the username every 3 seconds
        const intervalId = setInterval(fetchUsername, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    var name="";
    for(let i=0;i<username.length;i++)
    {
        if(username[i]===' ')
        break;
        name+=username[i];

    }
    return (
        <div className="dropdown">
            <button className="dropbtn">{name}</button>
            <div className="dropdown-content">
                <a>
                    <LogOut></LogOut>
                </a>
            </div>
        </div>
    );
}

export default User;
