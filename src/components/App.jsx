import React from 'react';
import '../App.css'
import BasicNav from './BasicNav'
import ShowCase from './ShowCase'
import { UserProvider, UserCnsumer } from './userContext'

function App () {
    return (
      <UserProvider >
        <div className="container">
          <div className="row">
            <UserCnsumer>
              {({ isAuthenticated }) => {
                return (
                  <div className="col-sm-6 offset-sm-3">
                    <h1 className="my-2">Learn Contex Api</h1>
                    <hr />
                    <BasicNav/>
                    <hr />
                  {isAuthenticated && <ShowCase/>}
                </div>
                )
              }}
            </UserCnsumer>
          </div>
        </div>
      </UserProvider>
    );
  }


export default App;
