import React, { Component } from 'react'
export default class ComponentInput extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            content:''
        }
    }
    handleChangeInput(e) {
        this.setState({
            username : e.target.value 
        })
    }
    handleChangeText(e) {
        this.setState({
            content : e.target.value 
        })
    }
    onSubmit() {
        if(this.props.onSubmit) {
            const {username,content} = this.state;
            this.props.onSubmit({username,content});
            this.setState({
                content:''
            })
        }
    }
    render() {
           
            return (
              <div className='comment-input'>
                <div className='comment-field'>
                  <span className='comment-field-name'>用户名：</span>
                  <div className='comment-field-input'>
                    <input value={this.state.username} onChange={this.handleChangeInput.bind(this)}/>
                  </div>
                </div>
                <div className='comment-field'>
                  <span className='comment-field-name'>评论内容：</span>
                  <div className='comment-field-input'>
                    <textarea value={this.state.content} onChange={this.handleChangeText.bind(this)}/>
                  </div>
                </div>
                <div className='comment-field-button'>
                  <button onClick={this.onSubmit.bind(this)}>
                    发布
                  </button>
                </div>
              </div>
            )
          }
}
