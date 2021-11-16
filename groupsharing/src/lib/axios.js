const axios = require("axios").default;

export const loginPost = (myId) => {
  axios
    .post("http://localhost:5000/login", { id: myId })
    .then((res) => console.log(res));
};

export const logOutPost = (myId) => {
  axios.get("http://localhost:5000/logout").then((res) => console.log(res));
};
