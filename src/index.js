import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComponentApp/>, document.getElementById('root'));
registerServiceWorker();
