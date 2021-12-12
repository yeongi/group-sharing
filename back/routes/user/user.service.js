const pool = require("../../config/dbConfig");

module.exports = {
  insertUser: async (userInfo) => {
    // try{
    //     const {
    //         user_nm,
    //         user_desc,
    //         user_login_id,
    //         user_login_pw
    //     } = userInfo;
    //     const conn = await pool.getConnection();
    //     const query =
    //     `INSERT INTO t_user
    //     (
    //         user_id,
    //         user_nm,
    //         user_desc,
    //         user_login_id,
    //         user_login_pw,
    //         created_at,
    //         modified_at
    //         ) VALUES (
    //             ?,
    //             ?,
    //             ?,
    //             ?,
    //             ?,
    //             UNIX_TIMESTAMP(),
    //             UNIX_TIMESTAMP()
    //         );`;
    //     const [{affectRows:result}] = await conn.query(query,[v4(), user_nm, user_desc, user_login_id,user_login_pw]);
    //     conn.release();
    //     return result;
    // } catch(error){
    //     console.log(error);
    //      throw error;
    // }
  },
  getUserList: async () => {
    // try{
    //     const conn = await pool.getConnection();
    //     const query = "SELECT * FROM t_user;";
    //     const [result] = await conn.query(query);
    //     conn.release();
    //     return result;
    // } catch(error){
    //      throw error;
    // }
  },
  updateUser: (userInfo) => {},
  deleteUser: (userInfo) => {},
};
