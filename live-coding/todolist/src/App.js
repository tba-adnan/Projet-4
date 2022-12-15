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
    }
  }


  async componentDidMount(){
    const res = await axios.get('http://127.0.0.1:8000/api/task')
    this.setState({tasksArray:res.data})
    // console.log(res.data)
    // console.log(this.state.tasksArray)
}


  addTask(e) {
     if ( document.getElementById("addInput").value.length != 0) {
      // this.state.tasksArray.push({
        // value: document.getElementById("addInput").value,
      //   done: false
      // })
      console.log('yo')

      // const res = axios.post('http://127.0.0.1:8000/api/task/store',this.state.tasksArray)
      // console.log(res)
      this.setState(state => ({
        tasksArray: state.tasksArray
      }));

    }
    e.preventDefault()
  }

  removeTask(i) {

        const res = axios.delete(`http://127.0.0.1:8000/api/task/delete/${i}`)
    
  }

  markDone(i) {
    let tasksArray = this.state.tasksArray
    let task = this.state.tasksArray[i]
    tasksArray.splice(i, 1)
    // task.done = !task.done 
    // task.done ? tasksArray.push(task) : tasksArray.unshift(task)


    this.setState({
      tasksArray: this.state.tasksArray
    })

    
  }

  onChangeInput(e) {
    // this.setState({value: e.target.value})
  }

  render() {
    let tasksArray = this.state.tasksArray.map((task,i) => {
      return (
        <Task 
          key={i}
          value={task.value}
          // done={task.done}
          onClickClose={this.removeTask.bind(this, i)}
          onClickTask={this.markDone.bind(this, i)}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1> Tâches à faire</h1>
            <form
              id="form-add"
              className="form-horizontal"
              onSubmit={this.addTask.bind(this)}>
              <div className="input-group">
                <input type="text" id="addInput" className="form-control" onChange={this.onChangeInput.bind(this)} placeholder="Description de la tâche..." />
                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus-sign"></span>
                  </button>
                </div>
              </div>
            </form>

<h3>Tasks : </h3>
<table>
                    <thead>
                        <tr>
                            <td>Task</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasksArray.map((value)=>
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td>
                                    {/* <button type='submit' onClick={this.editTask.bind(this,value.id)}>edit</button> */}
                                    {/* <button onClick={this.deleteTask.bind(this,value.id)} type='submit'>delete</button> */}
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


