const CREATE_API = "http://localhost:4000/votes";

const VoteApi = {
  postVote: (grp_num, vote_title, sharing_term, vote_type) => {
    return fetch(`${CREATE_API}/addVote`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(grp_num, vote_title, sharing_term, vote_type),
    });
  },
  getDuringVote: () => {
    return fetch(`${CREATE_API}/duringVote/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getFinishVote: () => {
    return fetch(`${CREATE_API}/finishVote/${grp_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  postUpdateState: (vote_num) => {
    return fetch(`${CREATE_API}/updateState`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(vote_num),
    });
  },
  postResVote: (user_num, vote_num, ox_response) => {
    return fetch(`${CREATE_API}/resVote`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user_num, vote_num, ox_response),
    });
  },
  getMyVote: () => {
    return fetch(`${CREATE_API}/myVote/${user_num}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
};

export default VoteApi;
