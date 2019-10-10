import api from "../base";
import urls from "./urls";

const header = {};

export default {
  project_get(params) {
    return api.get(urls.project, params, header);
  },
  project_post(params, data) {
    return api.post(urls.project, params, header, data);
  }
};
