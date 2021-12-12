const pool = require("../../config/dbConfig");

module.exports = {
  insertUser: async (userInfo) => {
    try {
      const { name, id, password } = userInfo;
      const conn = await pool.getConnection();
      const query = `INSERT INTO user (name, id, password) VALUES (?,?,?);`;
      const [{ affectRows: result }] = await conn.query(query, [
        name,
        id,
        password,
      ]);
      conn.release();
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getUserList: async () => {
    try {
      const conn = await pool.getConnection();
      const query = "SELECT * FROM user;";
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  checkUser: async (userInfo) => {
    try {
      console.log(userInfo);
      const { id, password } = userInfo;
      const conn = await pool.getConnection();
      const query = "select * from user where id = ?;";
      // const [{ affectRows: result }] = await conn.query(query, [id]);
      const [result] = await conn.query(query, [id]);
      conn.release();
      const { password: my_pw } = result[0];
      if (my_pw === password) {
        return result[0];
      } else {
        return 0;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  updateUser: (userInfo) => {},
  deleteUser: (userInfo) => {}
};
