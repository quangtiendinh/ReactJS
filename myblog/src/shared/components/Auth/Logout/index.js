import React from 'react';
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../../Routes';

export default class Logout extends React.Component {
    render() {
        return (
            <div>
                <Redirect to={ROUTES.AUTH_LOGIN}/>
            </div>
        );
    }
}
