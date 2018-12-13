import axios from 'axios';
import qs from 'qs';
const config = require(`../config.${process.env.NODE_ENV}.json`);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create({
  baseURL: config.baseURL, 
  timeout: 30000,
});



async function post(url, opts = {}, headers={}) {
  var result = {};
  try {
    if(headers["Content-Type"] == "application/json"){
      opts = JSON.stringify(opts)
    }else {
      opts = qs.stringify(opts)
    }
    // console.log(opts , "----opts",headers)

    result = await instance.post(url,opts , {headers});
  } catch (e) {
    result = e.response || {
      data: null
    };
  }
  return result.data;
}

async function get(url, type, opts = {}) {
  var result = {};

  try {
    result = await instance.get(url, opts);
  } catch (e) {
    console.log(e)
    result = e.response || {
      data: null
    };
  }
  return result.data;
}
function sleep (ss){
  let timer = null;
  return new Promise((resolve,reject) => {
     timer = setTimeout(() => {
        clearTimeout(timer);
        resolve();
     },ss * 1000)
  })
}


export default {
    post,
    get,
    sleep
}
