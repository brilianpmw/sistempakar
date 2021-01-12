import Api from '@/api/api'

export default {
  Get(role) {
    return Api().get('api/admin?role=' + role)
  },
  Add(data) {
    return Api().post('api/admin', data)
  },
  Delete(id) {
    return Api().delete('api/admin/' + id)
  },
  Detail(id) {
    return Api().get('api/admin/' + id)
  },
  Update(id, data) {
    return Api().put('api/admin/' + id, data)
  }
}