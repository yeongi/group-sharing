const CREATE_API = "http://localhost:4000/interests";

const InterestAPI = {
  getInterestList: () => {
    //name, id, password
    return fetch(`${CREATE_API}/`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  getUserInterest: (user_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/user/${user_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  postInterest: (body) => {
    //main_interest,sub_interest
    return fetch(`${CREATE_API}/user`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  },
};

export default InterestAPI;
