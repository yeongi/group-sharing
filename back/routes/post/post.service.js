const pool = require("../../config/dbConfig");

module.exports = {
  getAllPost: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getPostByPostNum: async (userInfo) => {
    try {
      const { post_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post WHERE post_num = ?;";
      const [result] = await conn.query(query,[post_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getPostByGrpNum: async (userInfo) => {
    try {
      const { grp_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post WHERE grp_num = ?;";
      const [result] = await conn.query(query,[grp_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getPostByUserNum: async (userInfo) => {
    try {
      const { user_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post WHERE user_num = ?;";
      const [result] = await conn.query(query,[user_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  addPost: async (userInfo) => {
    try {
      const { user_num, grp_num, title, content, open_type, category, file_path } = userInfo;
      const conn = await pool.getConnection();
      const query = "INSERT INTO `post` (user_num, grp_num, title, content, open_type, category, file_path) VALUES (?,?,?,?,?,?,?);";
      const [result] = await conn.query(query,[user_num, grp_num, title, content, open_type, category, file_path]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  }
};
