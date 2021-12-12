const CREATE_API = "http://localhost:4000/groups";

const GrpApi = {
  getGrpAllList: () => {
    return fetch(`${CREATE_API}/all`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getGrpNumList: (grp_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/withInterest/group_num/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  postGrp: (group) => {
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
    return fetch(`${CREATE_API}/joinGroup`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(group),
    });
  },
  postUpdateState: (group) => {
    //user_num,grp_num,register_date,grade,register_state,nickname,email,main_activity
    return fetch(
      `${CREATE_API}/change/user_num/${user_num}/grp_num/:${grp_num}/register_state/${register_state}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(group),
      }
    );
  },
  getSharingInfo: (grp_num) => {
    return fetch(`${CREATE_API}/groupSharing/grp_num/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  postStartSharing: (group) => {
    return fetch(`${CREATE_API}startGroupSharing`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(group),
    });
  },
};

export default GrpApi;
