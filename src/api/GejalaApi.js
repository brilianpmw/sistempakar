import Api from '@/api/api'

export default {
  Get() {
    return Api().get('api/symptom')
  },
  Add(data) {
    return Api().post('api/symptom', data)
  },
  Delete(id) {
    return Api().delete('api/symptom/' + id)
  },
  Detail(id) {
    return Api().get('api/symptom/' + id)
  },
  Update(id, data) {
    return Api().put('api/symptom/' + id, data)
  }
}