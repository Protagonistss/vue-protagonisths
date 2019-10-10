import { BASR_URL } from '../../../config/env'
let getUrl = query => {
  if (query) {
    return `${BASR_URL}/user/amend/${query}`
  } else {
    return BASR_URL + '/user/amend'
  }
}
export default {
  project: getUrl
}
