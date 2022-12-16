import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import logo from './logo.svg';
import './Styles.css';

class Task extends React.Component {
  constructor(props) { 
    super(props)
  }


  render() {
    let class_name = 'task'
    class_name += this.props.done ? ' task-success' : ' task-info';
  
    return (
      <div className={class_name} onClick={this.props.onClickTask}>
        <span>{this.props.value}</span>
        <i className="close" onClick={this.props.onClickClose}>&times;</i>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasksArray: [],
      taskName: ''
    }
  }


  async componentDidMount(){
    const res = await axios.get('http://127.0.0.1:8000/api/task')
    this.setState({tasksArray:res.data})
}


  addTask =(e)=> {
    e.preventDefault();
        console.log('ok')
        let task = {
          name: this.state.taskName
        }
       const res = axios.post('http://127.0.0.1:8000/api/task/store', task).then(res=>{
       axios.get('http://127.0.0.1:8000/api/task').then(res=>{
        this.setState({tasksArray:res.data})
    })
       })
    
    }

  // removeTask(i) {
  //       const res = axios.delete(`http://127.0.0.1:8000/api/task/delete/${i}`)
  // }


  deleteTask = (id)=>{
    const res = axios.delete(`http://127.0.0.1:8000/api/task/delete/${id}`).then(() => {
      axios.get('http://127.0.0.1:8000/api/task').then(res=>{
        this.setState({tasksArray:res.data})

      })
    })
}


  markDone(i) {
    let tasksArray = this.state.tasksArray
    let task = this.state.tasksArray[i]
    tasksArray.splice(i, 1)
    task.done = !task.done 
    task.done ? tasksArray.push(task) : tasksArray.unshift(task)


    this.setState({
      tasksArray: this.state.tasksArray
    })

    
  }

  onChangeInput(e) {
  }

  render() {
    let tasksArray = this.state.tasksArray.map((task,i) => {
      return (
        <Task 
          key={i}
          value={task.value}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Tâches à faire : </h1>
            <form action="" onSubmit={this.addTask}>
                    task : <input name='name' value={this.state.name} type="text" 
                    onInput={(e) => this.setState({taskName: e.target.value})}  />
                    <button type='submit'>add</button>
                </form>

<h3>Tasks : </h3>
<table>
<tbody>
{this.state.tasksArray.map((value)=>
<tr key={value.id}>
<td>{value.name}</td>
<td>
<button onClick={this.deleteTask.bind(this,value.id)} type='submit'>Done ✔️</button>
</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
</div>

    )
  }
}



export default App;