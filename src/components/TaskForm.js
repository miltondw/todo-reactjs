import React, {Component} from 'react';

class TaskForm extends Component {

    state = {
        title:'',
        description:''
    }
    onSubmit = e =>{
       this.props.addTask(this.state.title,this.state.description)
        e.preventDefault();
    }
    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
      
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    onChange={this.onChange}
                    type='text' 
                    placeholder='Write a Task'
                    name='title' 
                />
                <textarea 
                    onChange={this.onChange}
                    placeholder="write a description"
                    name='description'
                ></textarea>
                <input type='submit' value="submit" />
            </form>
        )
    }
}
export default TaskForm;