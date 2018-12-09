import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM" 
                    content="Nice"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00PM" 
                    content="Good"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM" 
                    content="Bad"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))

// /*****************/

// Biblioteca para css: 
// https://semantic-ui.com/
// Para pegar apenas o cdn e incluir no html ---> semantic ui cdn

// /*****************/

// Biblioteca para informações falsas... dentre elas imgs:
// https://github.com/Marak/faker.js

// /*****************/
