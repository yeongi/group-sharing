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
  addGroup: async (userInfo) => {
    try {
      const { interest_num, grp_name, grp_leader, grp_create_date } = userInfo;
      const conn = await pool.getConnection();
      const query = "INSERT INTO `group` (interest_num,grp_name,grp_leader,grp_create_date) VALUES (?,?,?,?);";
      const [result] = await conn.query(query,[interest_num, grp_name, grp_leader, grp_create_date]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  joinGroup: async (userInfo) => {
    try {
      const { user_num,grp_num,register_date,grade,register_state,nickname,email,main_activity } = userInfo;
      const conn = await pool.getConnection();
      const query = "INSERT INTO group_user VALUES (?,?,?,?,?,?,?,?);";
      const [result] = await conn.query(query,[user_num,grp_num,register_date,grade,register_state,nickname,email,main_activity]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  }
};
