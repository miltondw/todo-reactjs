import React,{Component} from 'react';
import propTypes from 'prop-types';

class Task extends Component{
    styleCompletd(){
        return{
            fontSize:'20px',
            color: this.props.task.done ? 'blue' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    
    render(){
        const {task} = this.props
        return <div style={this.styleCompletd()} >
                <p> 
                {task.title} - 
                {task.description} - 
                {task.done} - 
                {task.id} 
                <input type='checkbox' onClick={this.props.checkDone.bind(this,task.id)}/>
                <button onClick={this.props.deleteTask.bind(this, task.id)}>
                    X
                </button>
             </p>
        </div>
    }
}

Task.propTypes = {
    task:propTypes.object.isRequired
}

export default Task;