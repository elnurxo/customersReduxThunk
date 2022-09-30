import axios from 'axios'
export const getData = () => {
  return async (dispatch) => {
    axios
      .get('https://northwind.vercel.app/api/customers')
      .then((data) => {
        dispatch({ type: 'get_data', payload: data.data })
      })
  }
}
export const removeData = (data) => {
  console.log('get data before delete: ', data);
  axios.delete(`https://northwind.vercel.app/api/customers/${data.id}`)
  return async (dispatch) => {
    axios
      .get('https://northwind.vercel.app/api/customers')
      .then((data) => {
        console.log('get data after delete: ', data.data);
        dispatch({ type: 'remove_data', payload: data.data })
      })
  }
}
export const postData = (newCustomer) => {
  return async (dispatch) => {
    axios.post('https://northwind.vercel.app/api/customers', newCustomer)

    return async (dispatch) => {
      axios.get('https://northwind.vercel.app/api/customers').then((data) => {
        console.log('data: ',data);
        dispatch({ type: 'post_data', payload: data.data })
      })
    }
  }
}