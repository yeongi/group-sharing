const CREATE_API = "http://localhost:4000/posts";

const PostAPI = {
  getAllPost: () => {
    return fetch(`${CREATE_API}/`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getPublicPost: () => {
    return fetch(`${CREATE_API}/public`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getGrpPublicList: (grp_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/public/grpNum/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getOnePost: (post_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/post_num/${post_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getGrpNumPost: (grp_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/grp_num/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getProtectedPost: (grp_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/grp_num/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getUserNumPost: (user_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/user_num/${user_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getMyPost: (user_num, group_num) => {
    //name, id, password
    return fetch(`${CREATE_API}/user_num/${user_num}/group_num/${group_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  postInterest: (body) => {
    //main_interest,sub_interest
    return fetch(`${CREATE_API}/addPost`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  },
};

export default PostAPI;
