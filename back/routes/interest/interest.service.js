const pool = require("../../config/dbConfig");

module.exports = {
  getInterests: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM interest;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  addInterest: async (userInfo) => {
    try {
      const { main_interest,sub_interest } = userInfo;
      const conn = await pool.getConnection();
      const query = "INSERT INTO interest (main_interest,sub_interest) VALUES (?,?);";
      const [result] = await conn.query(query,[main_interest,sub_interest]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  addInterestUser: async (userInfo) => {
    try {
      const { user_num,interest_num } = userInfo;
      const conn = await pool.getConnection();

      const query = "INSERT INTO interest_user (user_num,interest_num) VALUES (?,?);";
      const [result] = await conn.query(query,[user_num,interest_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getUserInterests: async (userInfo) => {
    try {
      const { user_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM interest WHERE user_num = ?;";
      const [result] = await conn.query(query,[user_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  }
};

