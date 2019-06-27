import api from "../baseMethodsFilter";
import urls from "./urls";

const header = {};

export default {
  project_get(params) {
    return api.get(urls.project, params, header);
  }
};
