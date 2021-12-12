const pool = require("../../config/dbConfig");

module.exports = {
  addVote: async (voteInfo) => {
    try {
      const { grp_num, vote_title, sharing_term, vote_type } = voteInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO vote (grp_num, vote_title, sharing_term, vote_state, vote_type) VALUES (?,?,?,'투표중',?);`;
      const [result] = await conn.query(query, [
        grp_num,
        vote_title,
        sharing_term,
        vote_type,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getDuringVote: async (grp_num) => {
    try {
      const conn = await pool.getConnection();
      const query = `SELECT * FROM vote WHERE grp_num = ? AND vote_state = '투표중';`;
      const [result] = await conn.query(query, [grp_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  updateState: async (info) => {
    try {
      const { vote_num } = info;
      const conn = await pool.getConnection();
      const query = `UPDATE vote set vote_state = "투표완료" WHERE vote_num = ?;`;
      const [result] = await conn.query(query, [vote_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
