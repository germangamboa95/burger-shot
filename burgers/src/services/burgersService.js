import Api from '@/services/Api'

export default {
  fetchBurgers () {
    return Api().get('burger/all');
  },
  addBurger(name) {
    return Api().post('burger/add', {
      name:name
    })
  }
}