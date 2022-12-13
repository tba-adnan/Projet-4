import React from 'react';
import axios from 'axios';


class Task extends React.Component{
    state={Task:[],id:'',name:''}

    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/task')
        this.setState({Task:res.data})
    }

    deleteTask = (id)=>{
        const res = axios.delete(`http://127.0.0.1:8000/api/task/delete/${id}`)
    }


    addTask =(e)=> {
    e.preventDefault();
        console.log('ok')
       const res = axios.post('http://127.0.0.1:8000/api/task/store',this.state).then(res=>{
      
       axios.get('http://127.0.0.1:8000/api/task').then(res=>{
        this.setState({Task:res.data})
    // this.render()
    })

       })
    
    }
   
       
    handeleInput=(e)=>{
        console.log(this)
        this.setState({
            name:e.target.value
            
        })

    }

    editTask=(id)=>{

        const res = axios.get(`http://127.0.0.1:8000/api/task/${id}`)
        .then(res=>{
            this.setState({
                name:res.data.name,
                id:res.data.id
            })
        })
    }



    updateTask=()=>{
        // let id_task = this.state.id
        const res = axios.put(`http://127.0.0.1:8000/api/task/update/${id_task}`,this.state.id)
    }

   
    render (){
        return(
            <div>
                <form action="" onSubmit={this.addTask}>
                    task : <input name='name' value={this.state.name} type="text" onChange={this.handeleInput}  />
                    <button type='submit'>add</button>
                    <button type='submit' onClick={this.updateTask}>update</button>
                </form>
               
                <table>
                    <thead>
                        <tr>
                            <td>Task</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Task.map((value)=>
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td>
                                    <button type='submit' onClick={this.editTask.bind(this,value.id)}>edit</button>
                                    <button onClick={this.deleteTask.bind(this,value.id)} type='submit'>delete</button>
                                </td>
                            </tr>
                        )}
                        
                         
                       
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Task;