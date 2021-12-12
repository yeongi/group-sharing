const pool = require("../../config/dbConfig");

module.exports = {
  getAllGroups: async () => {
    try {
      const conn = await pool.getConnection();
      const query = `SELECT * FROM group;`;
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
      const query =
        "INSERT INTO `group` (interest_num,grp_name,grp_leader,grp_create_date) VALUES (?,?,?,?);";
      const [result] = await conn.query(query, [
        interest_num,
        grp_name,
        grp_leader,
        grp_create_date,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  joinGroup: async (userInfo) => {
    try {
      const {
        user_num,
        grp_num,
        register_date,
        grade,
        register_state,
        nickname,
        email,
        main_activity,
      } = userInfo;
      const conn = await pool.getConnection();
      const query = "INSERT INTO group_user VALUES (?,?,?,?,?,?,?,?);";
      const [result] = await conn.query(query, [
        user_num,
        grp_num,
        register_date,
        grade,
        register_state,
        nickname,
        email,
        main_activity,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  changeState: async (userInfo) => {
    try {
      const { user_num, grp_num, register_state } = userInfo;
      const conn = await pool.getConnection();
      const query =
        "UPDATE group_user SET register_state = ? WHERE user_num = ? AND grp_num = ? ;";
      const [result] = await conn.query(query, [
        register_state,
        user_num,
        grp_num,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getGroupSharingByGrpNum: async (userInfo) => {
    try {
      const { grp_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM group_sharing WHERE grp_num = ?;";
      const [result] = await conn.query(query, [grp_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getGroupSharingByGrpNum: async (userInfo) => {
    try {
      const { grp_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM group_sharing WHERE grp_num = ?;";
      const [result] = await conn.query(query, [grp_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  startGroupSharing: async (userInfo1, userInfo2) => {
    try {
      const { grp_num1, grp_num2 } = userInfo1;
      const { sharing_start_date, sharing_finish_date } = userInfo2;
      const conn = await pool.getConnection();
      const query = "INSERT INTO group_sharing VALUES (?,?,?,?,?) ;";
      const [result] = await conn.query(query, [
        grp_num1,
        grp_num2,
        sharing_start_date,
        sharing_finish_date,
        0,
      ]);
      await conn.query(query, [
        grp_num2,
        grp_num1,
        sharing_start_date,
        sharing_finish_date,
        0,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
