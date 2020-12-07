import http from "./http.js";

//首页最受欢迎列表
export const getRatedListApi = param => {
  return http.get("/rated/list", param);
};

//首页电影列表
export const getMovieListApi = param => {
  return http.get("/movies/list", param);
};

export const getMovieMoreApi = param => {
  return http.post("/movies/more", param);
};
