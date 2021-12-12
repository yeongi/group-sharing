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
