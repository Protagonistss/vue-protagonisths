import api from '../base'
import urls from './urls'

const headers = {}

export default {
  user_put(query, params) {
    return api.put(urls.project(query), params, headers)
  }
}
