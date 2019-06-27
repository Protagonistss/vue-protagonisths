let baseUrl = "";
if (process.env.NODE_ENV == "development") {
  baseUrl = "http://127.0.0.1:8005";
} else if (process.env.NODE_ENV == "production") {
  // 比如说是线上
  baseUrl = "http://host:port";
} else {
  // 可以是其他环境的
  baseUrl = "";
}

export { baseUrl };
