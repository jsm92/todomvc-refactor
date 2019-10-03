import axios from 'axios'

export const deleteTodo = (id) => {
    return axios.delete(`http://localhost:3000/todos/${id}`); 
}