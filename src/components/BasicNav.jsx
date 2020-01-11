import React from 'react';

import { UserCnsumer } from './userContext'
const LoggedInNav = () => {
    return (
        <UserCnsumer>
            {({ user, logout }) => (
                <div>
                    <p>Hello, {user.name} Your Login in email with  {user.email}</p>
                    <ul>
                        <li>Dashboard</li>
                        <li onClick={logout}>Logut</li>
                    </ul>
                </div>
            )
            }
        </UserCnsumer>
    )
}

const LoggedOutNav = () => {
    return (
        <UserCnsumer>
            {({ login }) => (
                <div>
                    <p>Please click to login button below</p>
                    <ul>
                        <li onClick={login}>Login</li>
                        <li >Register</li>
                    </ul>
                </div>
            )}
        </UserCnsumer>

    )
}

const BasicNav = () => {
    return (
        <UserCnsumer>
            {({ isAuthenticated }) => (
                <>
                    {isAuthenticated ? <LoggedInNav /> : <LoggedOutNav />}
                </>
            )}
        </UserCnsumer>
    )
};

export default BasicNav;