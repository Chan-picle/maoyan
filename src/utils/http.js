import qs from "qs";
const prefix = "http://pudge.wang:3080/api";

const http = {
  /***
   * url:String
   * param:Object
   */
  get(url, param) {
    if (param) {
      url += "?";
      let arr = Object.keys(param).map(elm => elm + "=" + param[elm]);
      url += arr.join("&");
    }
    return fetch(prefix + url).then(response => response.json());
  },
  post(url, param) {
    return fetch(prefix + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify(param)
    }).then(response => response.json());
  }
};
export default http;
