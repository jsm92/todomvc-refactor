import axios from 'axios'
import {uuid} from '../api/createId'

export const createTodo = (title) => {
    var id = uuid()
        return axios.post('http://localhost:3000/todos', 
        {
            id: id,
            title: title,
            completed: false
        }).then(function (response) {
            return response.data
          })
          .catch(function (error) {
            console.log(error);
          });
}