import { Injectable } from '@nestjs/common';
var mysql = require('mysql2/promise');
// const mysqlPromise = require('mysql2/promise');
import { Posts } from "./models/post";

function fnConnect() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todolist',
  });
}

function createData() {
  const connection = fnConnect();

  connection.query(
    'CREATE table todolist(id int,title varchar(100),body varchar(999))',
    function (error, results, fields) {
      if (error) {
        console.log('error | ', error);
      };
      console.log('The solution is: ', results);
    },
  );

  connection.end();
}

async function getData():Promise<Posts[] | []> {
  const connection = await fnConnect();
  try {
    const [rows,fb] = await connection.execute('SELECT * from todolist')
    console.log('rows: ', rows);
    return rows;
  } catch (error) {
    console.log('error: ', error);
  } finally {
    connection.end();
  }
  return []
}

function addData(setdata:Posts) {
  const connection = fnConnect();

  try {
    connection.query(
      'INSERT into todolist(id,title,body) values(?,?,?)',
      [setdata.id, setdata.title, setdata.body],
      function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
      },
    );
  } catch (error) {
    console.log('error: ', error);
  } finally {
    connection.end();
  }

}

function updateData() {
  const connection = fnConnect();

  connection.query('SELECT * from `todolist`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  connection.end();
}

@Injectable()
export class AppService {
  getHello(): string {
    createData();
    return 'Hello World!';
  }
  action(setdata:Posts): string {
    addData(setdata)
    return 'action';
  }
  async list(): Promise<Posts[] | []> {
    const res = await getData()
    return res;
    //[{id:0,title:"load",body:"load"}];
  }
}
