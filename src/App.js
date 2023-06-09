import React,{Component} from 'react';

import './styles/App.scss';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


class App extends Component{

  state={
    tasks:tasks
  }

  addTask = (title,description)=>{
     const newTask={
       title:title,
       description:description,
       id:this.state.tasks.length
     }
     this.setState({
       tasks:[...this.state.tasks, newTask]
     })
  }

  deleteTask = id=>{
    const deletask= this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks:deletask
    })
  }

  checkDone = id =>{
    const newTasks = this.state.tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({
      tasks:newTasks
    })
  }

  render(){
    return(
      <div>
        <TaskForm addTask={this.addTask}/>
        <Tasks 
          task={this.state.tasks} 
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    );
  }
}

export default App;
