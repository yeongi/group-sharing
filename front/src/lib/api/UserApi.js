const CREATE_API = "http://localhost:4000/users";

const UserAPI = {
  signIn: (user) => {
    //name, id, password
    return fetch(`${CREATE_API}/signUp`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  logIn: (user) => {
    //id, password
    return fetch(`${CREATE_API}/login`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },
};

export default UserAPI;
