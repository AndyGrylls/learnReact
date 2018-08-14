import React,{Component} from 'react'
import ComponentInput from './CommentInput'
import ComponentList from './CommentList'

class ComponentApp extends Component {
    
    onSubmitFather(obj) {
        console.log(obj);
    }
    render() {
        return(
            <div className="wrapper">
                <ComponentInput 
                  onSubmit = {this.onSubmitFather}
                />
                <ComponentList/>
            </div>
        )
    }
}
export default ComponentApp