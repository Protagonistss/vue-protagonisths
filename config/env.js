let BASR_URL = null;
switch (process.env.NODE_ENV) {
  case "development":
    BASR_URL = process.env.VUE_APP_BASR_URL;
    break;
  case "production":
    BASR_URL = process.env.VUE_APP_BASR_URL;
    break;
  default:
    BASR_URL = null;
    break;
}

export { BASR_URL };
