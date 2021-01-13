import axios from 'axios'
import Api from '@/api/BaseUrl'
export default () => {
  return axios.create({
    //DEVOPS
    // baseURL: `https://queueserver.azurewebsites.net` 

    //PRODUCTION
    // baseURL: `https://vast-forest-19088.herokuapp.com/`

    //LOCAL
    baseURL: Api.BaseUrl
  })
}
