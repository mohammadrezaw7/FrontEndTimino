import { createContext } from "react";
import axios from 'axios';


const data = axios.get('https://timino-app-2.iran.liara.run//api/user/my-profile', {

  headers: {
    'Authorization' : 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsInR5cGUiOiJBY2Nlc3NUb2tlbiIsImlhdCI6MTY1MDI2OTgwMiwibmJmIjoxNjgxMzczODAyfQ.RdUSlLG33NbaK-7eyB4Gb9t1_dSdDqa_4zxtjfZMdn4',
    'Content-Type' : 'application/x-www-form-urlencoded'
  }

}).then(function (response) {
  console.log(response.data.data)
  userData.username = response.data.data.username
  userData.email = response.data.data.email
  userData.firstName = response.data.data.first_name
  userData.lastName = response.data.data.last_name
  userData.midName = response.data.data.username
  userData.phone = response.data.data.phone
  userData.pass = response.data.data.password
  userData.gender = response.data.data.gender

}).catch(function (error) {
  console.log("error:" + error);

});

// INITIAL VALUES
export const userData = {
  username: "",
  firstName: "",
  lastName: "",
  midName: "",
  gender: "",
  phone: "",
  email: "",
  pass: "",
};

console.log({userData})

export const UserMain = createContext(userData);
