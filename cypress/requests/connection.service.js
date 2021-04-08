const oracledb = require('oracledb');
const dbConfig = require('../plugins/BD.service');
var fs = require('fs');

class Connection{
       
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
            console.log(result)
            for(let i = 0; i < result.rows.length;i++){
                values.push(result.rows[i][0])

            }

            
            var file = fs.createWriteStream('./cypress/requests/code.txt');
            file.on('error', function(err) {
              console.error(err);
            });
            values.forEach(function(v) {
               file.write(v); 

            });

            let a = fs.readFileSync('./cypress/requests/code.txt' , 'utf-8')
            console.log(a)

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
test.run()

