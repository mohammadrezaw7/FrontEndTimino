import { createContext } from "react";

// INITIAL VALUES
export const userData = {
  username: "janeD",
  dt1: 32,
  dt2: 40,
  dt3: 50,
  firstName: "Jane",
  lastName: "Doe",
  midName: "Baker",
  gender: "female",
  phone: "932-555-4247",
  email: "janedoe@gmail.com",
  pass: "password123"
};
export const UserMain = createContext(userData);

/*
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
const data = qs.stringify({});
const config = {
  method: "get",
  url: "https://timino-application.iran.liara.run//api/user/show/3",
  headers: {},
  data,
};
export default function GetData() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    axios(config)
      .then((response) => {
        const jsonData = JSON.stringify(response);
        setUserData(JSON.parse(jsonData).data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return {userData}
}
*/
/* TYPES
export interface userType {
  title: string;
  dt1: number;
  dt2: number;
  dt3: number;
  firstName: string;
  lastName: string;
  midName: string;
  gender: string;
  phone: string;
  email: string;
  pass: string;
}
*/
