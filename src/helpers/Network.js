import { getAccessToken, clearAccessToken } from './Auth'
import qs from "qs";

const axios = require('axios');
const baseURL = 'https://timino-application.iran.liara.run/';

function errorHandling ( err ) {
    console.log(err);
}

export async function request(method, route, { body, query , headers }){
    return new Promise(async (resolve, reject) => {
      try {
        const token = getAccessToken();
        if (!headers){
          headers = {};
        }
        headers['Authorization'] = `Bearer ${token}`;
        headers['Content-Type'] = 'application/x-www-form-urlencoded';

        const data = await axios
          .request({
            method,
            baseURL,
            url: route.toString(),
            params : query,
            data: qs.stringify(body),
            headers,
          });
        resolve(data.data);
      } catch (err){
        errorHandling(err);
        reject(err);
      }
    })
}


