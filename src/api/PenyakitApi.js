import Api from '@/api/api'

export default {
  Get() {
    return Api().get('api/disease')
  },
  Add(data) {
    return Api().post('api/disease', data)
  },
  Delete(id) {
    return Api().delete('api/disease/' + id)
  },
  Detail(id) {
    return Api().get('api/disease/' + id)
  },
  Update(id, data) {
    return Api().put('api/disease/' + id, data)
  }
}