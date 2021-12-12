const CREATE_API = "http://localhost:4000/posts";

const PostAPI = {
  getGrpPublicList: (num) => {
    //name, id, password
    return fetch(`${CREATE_API}/public/grpNum/${num}`, {
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

export default PostAPI;
