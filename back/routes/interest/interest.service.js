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
  }
};

