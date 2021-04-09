const oracledb = require('oracledb');
const dbConfig = require('./DB.service');
var fs = require('fs');

class Connection{
       
  create_json(values){
    const PortfolioCode = {
      "portfolioCodePolos" : values
    }

    const data = JSON.stringify(PortfolioCode);
    fs.writeFile('./cypress/fixtures/requests-portfolios-polos.json', data, (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    });

  }

  async run(){
      let connect, result, values = [];
      try {
        connect = await oracledb.getConnection(dbConfig);

        const table = [
          `DROP TABLE portfolioCodePolos`,

          `CREATE TABLE portfolioCodePolos (code NUMBER)`,
          `INSERT INTO portfolioCodePolos VALUES(222222)`,
          `INSERT INTO portfolioCodePolos VALUES(555555)`,
          `INSERT INTO portfolioCodePolos VALUES(333333)`,
          `INSERT INTO portfolioCodePolos VALUES(444444)`
        ]
        for (const s of table) {
          try {
            await connect.execute(s);
          } catch (e) {
            if (e.errorNum != 942)
              console.error(e);
          }
        }
        await connect.commit();


        const select = `SELECT * FROM portfolioCodePolos`
            
        result = await connect.execute(select);
        for(let i = 0; i < result.rows.length;i++){
          values.push(result.rows[i][0]);

        }

        this.create_json(values);

    } catch (err) {
        console.error(err);
      } finally {
        if (connect) {
          try {
            await connect.close();
          } catch (err) {
            console.error(err);
          }
        }
      }
  }
}


let test = new Connection();
test.run();

