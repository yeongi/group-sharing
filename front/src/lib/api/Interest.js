const CREATE_API = "http://localhost:4000/interests";

const InterestAPI = {
  getGrpList: () => {
    //name, id, password
    return fetch(`${CREATE_API}/`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },

  postMyGrp: (group) => {
    //interest_num, grp_name, grp_leader, grp_create_date
    return fetch(`${CREATE_API}/addGroup`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(group),
    });
  },

  postGrpApply: (group) => {
    //user_num,grp_num,register_date,grade,register_state,nickname,email,main_activity
    return fetch(`${CREATE_API}/addGroup`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(group),
    });
  },
};

export default InterestAPI;
