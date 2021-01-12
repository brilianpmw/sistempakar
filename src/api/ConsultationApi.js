import Api from '@/api/api'

export default {

  Process(data) {
    return Api().post('api/consultation', data)
  }
}