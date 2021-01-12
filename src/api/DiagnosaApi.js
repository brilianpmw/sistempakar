import Api from '@/api/api'

export default {
  Get() {
    return Api().get('api/diagnosa')
  },
  GetByUser(id) {
    return Api().get('api/diagnosa?user_id=' + id)
  },

  Delete(id) {
    return Api().delete('api/diagnosa/' + id)
  }

}