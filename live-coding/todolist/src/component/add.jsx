import React from "react";
class Add extends React.Component{
    render(){

        return (
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h1> Tâches à faire</h1>
                  <form action="" onSubmit={this.addTask}>
                          task : <input name='name' value={this.state.name} type="text" 
                          onInput={(e) => this.setState({taskName: e.target.value})}  />
                          <button type='submit'>add</button>
                          {/* <button type='submit' onClick={this.updateTask}>update</button> */}
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
export default Add;