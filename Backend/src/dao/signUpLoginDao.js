const dBConnection = require('./ConnectionPooling');

module.exports = class LoginSignupDao {
 
    async createNewUser(inputData){
        let con = await dBConnection();
        try {
            await con.query('INSERT INTO User SET ?', [inputData]);
            await con.query("COMMIT");
            let result = await con.query('SELECT * FROM User WHERE email = ? AND password = ?', [inputData.Email, inputData.Password]);
            let userid= result[0].id;
            return userid;
          } catch (ex) {
            await con.query("ROLLBACK");
           throw ex;
          } finally {
            await con.release();
            await con.destroy();
          }
    }
    async saveAirQualityData(inputData){
      let con = await dBConnection();
      try {
          await con.query('UPDATE AirQualityData SET ? WHERE id = 1', [inputData]);
          await con.query("COMMIT");
          let result = await con.query('SELECT * FROM AirQualityData WHERE id = 1');
          console.log(result);
          return 1;
        } catch (ex) {
          await con.query("ROLLBACK");
         throw ex;
        } finally {
          await con.release();
          await con.destroy();
        }
  }
  async login(email,password) {
      let con = await dBConnection();
      try {
         let result = await con.query('SELECT * FROM User WHERE email = ? AND password = ?', [email, password]);
          await con.query("COMMIT");
          result = JSON.parse(JSON.stringify(result));
          return result;
        } catch (ex) {
          console.log(ex);
          throw ex;
        } finally {
          await con.release();
          await con.destroy();
        }
      }
      async getAsthmaRisk(){
        let con = await dBConnection();
        try {
            let result = await con.query('SELECT * FROM AirQualityData2 WHERE id = 1');
            await con.query("COMMIT");
             result = JSON.parse(JSON.stringify(result));
            return result;
          } catch (ex) {
            console.log(ex);
            throw ex;
          } finally {
            await con.release();
            await con.destroy();
          }
    }

      async getAirQualityData(){
        let con = await dBConnection();
        try {
            let result = await con.query('SELECT * FROM AirQualityData2 WHERE id = 1');
            await con.query("COMMIT");
             result = JSON.parse(JSON.stringify(result));
            return result;
          } catch (ex) {
            console.log(ex);
            throw ex;
          } finally {
            await con.release();
            await con.destroy();
          }
    }
    }
   

      