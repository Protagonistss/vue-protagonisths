import allApi from "./allApiRegister";

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return allApi;
      }
    }
  });
};

export default {
  install
};
