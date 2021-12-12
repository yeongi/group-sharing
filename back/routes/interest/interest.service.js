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
  }
};

