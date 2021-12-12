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
  getAllPublicPost: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post WHERE open_type = 'public';";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getPublicPostByGrpNum: async (grp_num) => {
    try {
      const conn = await pool.getConnection();
      const query =
        "SELECT * FROM post WHERE open_type = 'public' AND grp_num = ?;";
      const [result] = await conn.query(query, [grp_num]);
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
      const [result] = await conn.query(query, [post_num]);
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
      const [result] = await conn.query(query, [grp_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getShared: async (grp_num1,grp_num2) => {
    try {
      const conn = await pool.getConnection();
      const query =
        "SELECT * FROM post WHERE grp_num IN (SELECT grp_num2 FROM group_sharing WHERE grp_num = ?) AND open_type = 'protected' AND post.post_num = ?";
      const [result] = await conn.query(query, [grp_num1,grp_num2]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getPostByUserNum: async (user_num) => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post WHERE user_num = ?;";
      const [result] = await conn.query(query, [user_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getPostByUserNumAndGroupNum: async (userInfo) => {
    try {
      const { user_num, grp_num } = userInfo;
      const conn = await pool.getConnection();
      const query = "SELECT * FROM post WHERE user_num = ? AND grp_num = ?;";
      const [result] = await conn.query(query, [user_num, grp_num]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  addPost: async (userInfo) => {
    try {
      const { user_num, grp_num, title, content, open_type } = userInfo;
      const conn = await pool.getConnection();
      const query =
        "INSERT INTO `post` (user_num, grp_num, title, content, open_type, category, file_path) VALUES (?,?,?,?,?,'글','null');";
      const [result] = await conn.query(query, [
        user_num,
        grp_num,
        title,
        content,
        open_type,
      ]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};
