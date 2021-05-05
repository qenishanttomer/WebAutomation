const { Client } = require("pg");
async function queryDB(query) {
  const client = new Client({
    connectionString:
      "postgresql://postgres:dunzoLocalDbPassword123@jeet.dunzodev.in/espresso-staging",
  });
  await client.connect();
  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        return reject(err);
      }
      client.end();
      return resolve(res?.rows[0].token);
    });
  });
}
module.exports = (on, config) => {
  on("task", {
    queryDatabase: (phone) => {
      const query = `SELECT token FROM users_verifyphone AS usvp INNER JOIN users_dunzouser AS usdu ON usdu.phone = '${phone}' AND usvp.created_by_id = usdu.id order by created_on desc limit 1;`;
      return queryDB(query);
    },
  });
};