import Api from '@/api/api'

export default {
  Get() {
    return Api().get('api/rule')
  },
  Add(data) {
    return Api().post('api/rule', data)
  },
  Delete(id) {
    return Api().delete('api/rule/' + id)
  },
  Detail(id) {
    return Api().get('api/rule/' + id)
  },
  Update(id, data) {
    return Api().put('api/rule/' + id, data)
  }
}