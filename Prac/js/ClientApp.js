import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'


var MyFirstComponent = React.createClass({
  render: function () {
    return (
     <div>
      <MyTitle title='props are cool' color='rebeccapurple' />
      <MyTitle title='props are best' color='mediumaquamarine' />
      <MyTitle title='props are still cool' color='peru' />
      <p>adsfasdfasdf</p>
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
