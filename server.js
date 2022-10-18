var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyparser = require('body-parser');

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();     
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// var dbConn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Ta241479590@",
//   database: "nodejs_db"
// });
// pool.connect();
const { pool } = require('./config')
app.set('port', process.env.PORT || 3000);
// var server = app.listen(3000, function() {
//   console.log('Server listening on port ' + server.address().port +" " +hours +":"+minutes);
// }); 
var request = require("request");
var cheerio = require("cheerio");
var date_ob = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var listGiaiDB = [];
var listGiai8 = [];
var listGiai70 = [];
var listGiai71 = [];
var listGiai72 = [];
var listGiai73 = [];
var listGiai60 = [];
var listGiai61 = [];
var listGiai62 = [];
var listGiai50 = [];
var listGiai51 = [];
var listGiai52 = [];
var listGiai53 = [];
var listGiai54 = [];
var listGiai55 = [];
var listGiai40 = [];
var listGiai41 = [];
var listGiai42 = [];
var listGiai43 = [];
var listGiai44 = [];
var listGiai45 = [];
var listGiai46 = [];
var listGiai30 = [];
var listGiai31 = [];
var listGiai32 = [];
var listGiai33 = [];
var listGiai34 = [];
var listGiai35 = [];
var listGiai20 = [];
var listGiai21 = [];
var listGiai1 = [];
var url = "";

function getData(){
    for (let index = 0; index < date_ob.length; index++) {
      const day = date_ob[index];
        if (day == "Monday") {
          url = "https://xoso.me/xsmn-thu-2-sxmn-ket-qua-xo-so-mien-nam-thu-2.html"
        } else if (day == "Tuesday") {
          url = "https://xoso.me/xsmn-thu-3-sxmn-ket-qua-xo-so-mien-nam-thu-3.html"
        } else if (day == "Wednesday") {
          url = "https://xoso.me/xsmn-thu-4-sxmn-ket-qua-xo-so-mien-nam-thu-4.html"
        } else if (day == "Thursday") {
          url = "https://xoso.me/xsmn-thu-5-sxmn-ket-qua-xo-so-mien-nam-thu-5.html"
        } else if (day == "Friday") {
          url = "https://xoso.me/xsmn-thu-6-sxmn-ket-qua-xo-so-mien-nam-thu-6.html"
        } else if (day == "Saturday") {
          url = "https://xoso.me/xsmn-thu-7-sxmn-ket-qua-xo-so-mien-nam-thu-7.html"
        } else if (day == "Sunday") {
          url = "https://xoso.me/xsmn-chu-nhat-sxmn-ket-qua-xo-so-mien-nam-chu-nhat.html"
        }
      
      request(url, function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
            $ = cheerio.load(body);
            var getGiai8 = $(body).find("div.v-g8 ");
            var getGiai7 = $(body).find("div.v-g7 ");
            var getGiai60 = $(body).find("div.v-g6-0 ");
            var getGiai61 = $(body).find("div.v-g6-1 ");
            var getGiai62 = $(body).find("div.v-g6-2 ");
            var getGiai5 = $(body).find("div.v-g5 ");
            var getGiai40 = $(body).find("div.v-g4-0 ");
            var getGiai41 = $(body).find("div.v-g4-1 ");
            var getGiai42 = $(body).find("div.v-g4-2 ");
            var getGiai43 = $(body).find("div.v-g4-3 ");
            var getGiai44 = $(body).find("div.v-g4-4 ");
            var getGiai45 = $(body).find("div.v-g4-5 ");
            var getGiai46 = $(body).find("div.v-g4-6 ");
            var getGiai30 = $(body).find("div.v-g3-0 ");
            var getGiai31 = $(body).find("div.v-g3-1 ");
            var getGiai2 = $(body).find("div.v-g2 ");
            var getGiai1 = $(body).find("div.v-g1 ");
            var getGiaiDB = $(body).find("div.v-gdb ");
  
            getGiai8.each(function (i, e) { if (i < 4) { listGiai8[i] = $(this).text(); } });
            getGiai7.each(function (i, e) { if (i < 4) { listGiai70[i] = $(this).text(); } });
            getGiai60.each(function (i, e) { if (i < 4) { listGiai60[i] = $(this).text(); } });
            getGiai61.each(function (i, e) { if (i < 4) { listGiai61[i] = $(this).text(); } });
            getGiai62.each(function (i, e) { if (i < 4) { listGiai62[i] = $(this).text(); } });
            getGiai5.each(function (i, e) { if (i < 4) { listGiai50[i] = $(this).text(); } });
            getGiai40.each(function (i, e) { if (i < 4) { listGiai40[i] = $(this).text(); } });
            getGiai41.each(function (i, e) { if (i < 4) { listGiai41[i] = $(this).text(); } });
            getGiai42.each(function (i, e) { if (i < 4) { listGiai42[i] = $(this).text(); } });
            getGiai43.each(function (i, e) { if (i < 4) { listGiai43[i] = $(this).text(); } });
            getGiai44.each(function (i, e) { if (i < 4) { listGiai44[i] = $(this).text(); } });
            getGiai45.each(function (i, e) { if (i < 4) { listGiai45[i] = $(this).text(); } });
            getGiai46.each(function (i, e) { if (i < 4) { listGiai46[i] = $(this).text(); } });
            getGiai30.each(function (i, e) { if (i < 4) { listGiai30[i] = $(this).text(); } });
            getGiai31.each(function (i, e) { if (i < 4) { listGiai31[i] = $(this).text(); } });
            getGiai2.each(function (i, e) { if (i < 4) { listGiai20[i] = $(this).text(); } });
            getGiai1.each(function (i, e) { if (i < 4) { listGiai1[i] = $(this).text(); } });
            getGiaiDB.each(function (i, e) { if (i < 4) { listGiaiDB[i] = $(this).text(); } });
            
  
            if (day == "Monday") {
              var sqlTP = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'TP'";
              pool.query(sqlTP, function (err, result) { if (err) throw err; console.log("insert HCM"); });
              var sqlDT = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'DT'";
              pool.query(sqlDT, function (err, result) { if (err) throw err; console.log("insert DT"); });
              var sqlCM =  "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0='"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'CM'";
              pool.query(sqlCM, function (err, result) { if (err) throw err; console.log("insert CM"); });
            } else if (day == "Tuesday") {
              var sqlBT = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'BT'";
              pool.query(sqlBT, function (err, result) { if (err) throw err; console.log("insert BT"); });
              var sqlVT = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'VT'";
              pool.query(sqlVT, function (err, result) { if (err) throw err; console.log("insert VT"); });
              var sqlBLIEU = "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0='"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'BLIEU'";
              pool.query(sqlBLIEU, function (err, result) { if (err) throw err; console.log("insert BLIEU"); });
            } else if (day == "Wednesday") {
              var sqlDN = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'DN'";
              pool.query(sqlDN, function (err, result) { if (err) throw err; console.log("insert DN"); });
              var sqlCT = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'CT'";
              pool.query(sqlCT, function (err, result) { if (err) throw err; console.log("insert CT"); });
              var sqlST = "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0= '"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'ST'";
              pool.query(sqlST, function (err, result) { if (err) throw err; console.log("insert ST"); });
            } else if (day == "Thursday") {
              var sqlTN = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'TN'";
              pool.query(sqlTN, function (err, result) { if (err) throw err; console.log("insert TN"); });
              var sqlAG = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'AG'";
              pool.query(sqlAG, function (err, result) { if (err) throw err; console.log("insert AG"); });
              var sqlBTH = "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0='"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'BTH'";
              pool.query(sqlBTH, function (err, result) { if (err) throw err; console.log("insert BTH"); });
            } else if (day == "Friday") {
              var sqlVL = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'VL'";
              pool.query(sqlVL, function (err, result) { if (err) throw err; console.log("insert VL"); });
              var sqlSBE = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'SBE'";
              pool.query(sqlSBE, function (err, result) { if (err) throw err; console.log("insert SBE"); });
              var sqlTV =  "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0='"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'TV'";
              pool.query(sqlTV, function (err, result) { if (err) throw err; console.log("insert TV"); });
            }else if (day == "Saturday") {
              var sqlTP = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'TP'";
              pool.query(sqlTP, function (err, result) { if (err) throw err; console.log("insert TP"); });
              var sqlLA = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'LA'";
              pool.query(sqlLA, function (err, result) { if (err) throw err; console.log("insert LA"); });
              var sqlBP =  "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0='"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'BP'";
              pool.query(sqlBP, function (err, result) { if (err) throw err; console.log("insert BP"); });
              var sqlHG =  "UPDATE kqsx SET giai8='"+listGiai8[3]+"',giai7_0='"+listGiai70[3]+"',giai6_0='"+listGiai60[3]+"',giai6_1='"+listGiai61[3]+"',giai6_2='"+listGiai62[3]+"',giai5_0='"+listGiai50[3]+"',giai4_0='"+listGiai40[3]+"',giai4_1='"+listGiai41[3]+"',giai4_2='"+listGiai42[3]+"',giai4_3='"+listGiai43[3]+"',giai4_4='"+listGiai44[3]+"',giai4_5='"+listGiai45[3]+"',giai4_6='"+listGiai46[3]+"',giai3_0='"+listGiai30[3]+"',giai3_1='"+listGiai31[3]+"',giai2_0='"+listGiai20[3]+"',giai1='"+listGiai1[3]+"',giai_db ='"+listGiaiDB[3]+"' WHERE name = 'HG'";
              pool.query(sqlHG, function (err, result) { if (err) throw err; console.log("insert HG"); });
            } else if (day == "Sunday") {
              var sqlTG = "UPDATE kqsx SET giai8='"+listGiai8[0]+"',giai7_0='"+listGiai70[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai4_4='"+listGiai44[0]+"',giai4_5='"+listGiai45[0]+"',giai4_6='"+listGiai46[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai2_0='"+listGiai20[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'TG'";
              pool.query(sqlTG, function (err, result) { if (err) throw err; console.log("insert TG"); });
              var sqlKG = "UPDATE kqsx SET giai8='"+listGiai8[1]+"',giai7_0='"+listGiai70[1]+"',giai6_0='"+listGiai60[1]+"',giai6_1='"+listGiai61[1]+"',giai6_2='"+listGiai62[1]+"',giai5_0='"+listGiai50[1]+"',giai4_0='"+listGiai40[1]+"',giai4_1='"+listGiai41[1]+"',giai4_2='"+listGiai42[1]+"',giai4_3='"+listGiai43[1]+"',giai4_4='"+listGiai44[1]+"',giai4_5='"+listGiai45[1]+"',giai4_6='"+listGiai46[1]+"',giai3_0='"+listGiai30[1]+"',giai3_1='"+listGiai31[1]+"',giai2_0='"+listGiai20[1]+"',giai1='"+listGiai1[1]+"',giai_db ='"+listGiaiDB[1]+"' WHERE name = 'KG'";
              pool.query(sqlKG, function (err, result) { if (err) throw err; console.log("insert KG"); });
              var sqlDL = "UPDATE kqsx SET giai8='"+listGiai8[2]+"',giai7_0='"+listGiai70[2]+"',giai6_0='"+listGiai60[2]+"',giai6_1='"+listGiai61[2]+"',giai6_2='"+listGiai62[2]+"',giai5_0='"+listGiai50[2]+"',giai4_0='"+listGiai40[2]+"',giai4_1='"+listGiai41[2]+"',giai4_2='"+listGiai42[2]+"',giai4_3='"+listGiai43[2]+"',giai4_4='"+listGiai44[2]+"',giai4_5='"+listGiai45[2]+"',giai4_6='"+listGiai46[2]+"',giai3_0='"+listGiai30[2]+"',giai3_1='"+listGiai31[2]+"',giai2_0='"+listGiai20[2]+"',giai1='"+listGiai1[2]+"',giai_db ='"+listGiaiDB[2]+"' WHERE name = 'DL'";
              pool.query(sqlDL, function (err, result) { if (err) throw err; console.log("insert DL"); });
            }
          
  
        }
      })
    }
  
    for (let index = 0; index < date_ob.length; index++) {
      const day = date_ob[index];
      
        if (day == "Monday") {
          url = "https://xoso.me/xsmb-thu-2-ket-qua-xo-so-mien-bac-thu-2.html"
        } else if (day == "Tuesday") {
          url = "https://xoso.me/xsmb-thu-3-ket-qua-xo-so-mien-bac-thu-3.html"
        } else if (day == "Wednesday") {
          url = "https://xoso.me/xsmb-thu-4-ket-qua-xo-so-mien-bac-thu-4.html"
        } else if (day == "Thursday") {
          url = "https://xoso.me/xsmb-thu-5-ket-qua-xo-so-mien-bac-thu-5.html"
        } else if (day == "Friday") {
          url = "https://xoso.me/xsmb-thu-6-ket-qua-xo-so-mien-bac-thu-6.html"
        } else if (day == "Saturday") {
          url = "https://xoso.me/xsmb-thu-7-ket-qua-xo-so-mien-bac-thu-7.html"
        } else if (day == "Sunday") {
          url = "https://xoso.me/xsmb-chu-nhat-sxmn-ket-qua-xo-so-mien-bac-chu-nhat.html"
        }
  
      request(url, function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
          
            $ = cheerio.load(body);
            var getGiai70 = $(body).find("div.v-g7-0 ");
            var getGiai71 = $(body).find("div.v-g7-1 ");
            var getGiai72 = $(body).find("div.v-g7-2 ");
            var getGiai73 = $(body).find("div.v-g7-3 ");
  
            var getGiai60 = $(body).find("div.v-g6-0 ");
            var getGiai61 = $(body).find("div.v-g6-1 ");
            var getGiai62 = $(body).find("div.v-g6-2 ");
  
            var getGiai50 = $(body).find("div.v-g5_0 ");
            var getGiai51 = $(body).find("div.v-g5_1 ");
            var getGiai52 = $(body).find("div.v-g5_2 ");
            var getGiai53 = $(body).find("div.v-g5_3 ");
            var getGiai54 = $(body).find("div.v-g5_4 ");
            var getGiai55 = $(body).find("div.v-g5_6 ");
  
            var getGiai40 = $(body).find("div.v-g4-0 ");
            var getGiai41 = $(body).find("div.v-g4-1 ");
            var getGiai42 = $(body).find("div.v-g4-2 ");
            var getGiai43 = $(body).find("div.v-g4-3 ");
            
            var getGiai30 = $(body).find("div.v-g3-0 ");
            var getGiai31 = $(body).find("div.v-g3-1 ");
            var getGiai32 = $(body).find("div.v-g3-2 ");
            var getGiai33 = $(body).find("div.v-g3-3 ");
            var getGiai34 = $(body).find("div.v-g3-4 ");
            var getGiai35 = $(body).find("div.v-g3-5 ");
  
            var getGiai20 = $(body).find("div.v-g2-0 ");
            var getGiai21 = $(body).find("div.v-g2-1 ");
  
            var getGiai1 = $(body).find("div.v-g1 ");
            var getGiaiDB = $(body).find("div.v-gdb ");
  
            getGiai70.each(function (i, e) { if (i < 1) { listGiai70[i] = $(this).text(); } });
            getGiai71.each(function (i, e) { if (i < 1) { listGiai71[i] = $(this).text(); } });
            getGiai72.each(function (i, e) { if (i < 1) { listGiai72[i] = $(this).text(); } });
            getGiai73.each(function (i, e) { if (i < 1) { listGiai73[i] = $(this).text(); } });
            
            getGiai60.each(function (i, e) { if (i < 1) { listGiai60[i] = $(this).text(); } });
            getGiai61.each(function (i, e) { if (i < 1) { listGiai61[i] = $(this).text(); } });
            getGiai62.each(function (i, e) { if (i < 1) { listGiai62[i] = $(this).text(); } });
            
            getGiai50.each(function (i, e) { if (i < 1) { listGiai50[i] = $(this).text(); } });
            getGiai51.each(function (i, e) { if (i < 1) { listGiai51[i] = $(this).text(); } });
            getGiai52.each(function (i, e) { if (i < 1) { listGiai52[i] = $(this).text(); } });
            getGiai53.each(function (i, e) { if (i < 1) { listGiai53[i] = $(this).text(); } });
            getGiai54.each(function (i, e) { if (i < 1) { listGiai54[i] = $(this).text(); } });
            getGiai55.each(function (i, e) { if (i < 1) { listGiai55[i] = $(this).text(); } });
            
            getGiai40.each(function (i, e) { if (i < 1) { listGiai40[i] = $(this).text(); } });
            getGiai41.each(function (i, e) { if (i < 1) { listGiai41[i] = $(this).text(); } });
            getGiai42.each(function (i, e) { if (i < 1) { listGiai42[i] = $(this).text(); } });
            getGiai43.each(function (i, e) { if (i < 1) { listGiai43[i] = $(this).text(); } });
            
            getGiai30.each(function (i, e) { if (i < 1) { listGiai30[i] = $(this).text(); } });
            getGiai31.each(function (i, e) { if (i < 1) { listGiai31[i] = $(this).text(); } });
            getGiai32.each(function (i, e) { if (i < 1) { listGiai32[i] = $(this).text(); } });
            getGiai33.each(function (i, e) { if (i < 1) { listGiai33[i] = $(this).text(); } });
            getGiai34.each(function (i, e) { if (i < 1) { listGiai34[i] = $(this).text(); } });
            getGiai35.each(function (i, e) { if (i < 1) { listGiai35[i] = $(this).text(); } });
            
            getGiai20.each(function (i, e) { if (i < 1) { listGiai20[i] = $(this).text(); } });
            getGiai21.each(function (i, e) { if (i < 1) { listGiai20[i] = $(this).text(); } });
            
            getGiai1.each(function (i, e) { if (i < 1) { listGiai1[i] = $(this).text(); } });
            getGiaiDB.each(function (i, e) { if (i < 1) { listGiaiDB[i] = $(this).text(); } });
            
            if (day == "Monday") {
              var sqlTP = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'mb_t2'";
              pool.query(sqlTP, function (err, result) { if (err) throw err; console.log("insert MB_t2"); });
            } else if (day == "Tuesday") {
              var sqlBT = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name = 'mb_t3'";
              pool.query(sqlBT, function (err, result) { if (err) throw err; console.log("insert MB_t3"); });
              } else if (day == "Wednesday") {
              var sqlDN = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0 ='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name ='mb_t4'";
              pool.query(sqlDN, function (err, result) { if (err) throw err; console.log("insert MB_t4"); });
              } else if (day == "Thursday") {
              var sqlTN = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name ='mb_t5'";
              pool.query(sqlTN, function (err, result) { if (err) throw err; console.log("insert MB_t5"); });
              } else if (day == "Friday") {
              var sqlVL = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name ='mb_t6'";
              pool.query(sqlVL, function (err, result) { if (err) throw err; console.log("insert MB_t6"); });
              }else if (day == "Saturday") {
              var sqlTP = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name ='mb_t7'";
              pool.query(sqlTP, function (err, result) { if (err) throw err; console.log("insert MB_t7"); });
              } else if (day == "Sunday") {
              var sqlTG = "UPDATE kqsx SET giai7_0='"+listGiai70[0]+"',giai7_1='"+listGiai71[0]+"',giai7_2='"+listGiai72[0]+"',giai7_3='"+listGiai73[0]+"',giai6_0='"+listGiai60[0]+"',giai6_1='"+listGiai61[0]+"',giai6_2='"+listGiai62[0]+"',giai5_0='"+listGiai50[0]+"',giai5_1='"+listGiai51[0]+"',giai5_2='"+listGiai52[0]+"',giai5_3='"+listGiai53[0]+"',giai5_4='"+listGiai54[0]+"',giai5_5='"+listGiai55[0]+"',giai4_0='"+listGiai40[0]+"',giai4_1='"+listGiai41[0]+"',giai4_2='"+listGiai42[0]+"',giai4_3='"+listGiai43[0]+"',giai3_0='"+listGiai30[0]+"',giai3_1='"+listGiai31[0]+"',giai3_2='"+listGiai32[0]+"',giai3_3='"+listGiai33[0]+"',giai3_4='"+listGiai34[0]+"',giai3_5='"+listGiai35[0]+"',giai2_0='"+listGiai20[0]+"',giai2_1='"+listGiai21[0]+"',giai1='"+listGiai1[0]+"',giai_db ='"+listGiaiDB[0]+"' WHERE name ='mb_cn'";
              pool.query(sqlTG, function (err, result) { if (err) throw err; console.log("insert MB_CN"); });
              }
          }
  
        }
      )}
}
function loadData(){
  if(hours == "17" ){
    if(minutes == "20"){
      getData();
    }
  }else if(hours == "18" ){
    if(minutes== "35")
     getData();
  }
}
getData();
setInterval(loadData,5*60*1000);
app.get('/user', function (req, res) {
  pool.query('SELECT * FROM user', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'users list.' });
  });
});
app.get('/user/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  pool.query('SELECT * FROM user where id=?', [user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send(results[0] );
  });
});
app.post('/user', function (req, res) {
  let user = req.body.user;
  if (!user) {
      return res.status(400).send({ error:true, message: 'Please provide user' });
  }
  pool.query("INSERT INTO user SET ? ", { user: user }, function (error, results, fields) {
      if (error) throw error;
      return res.send({ results });
  });
});
app.put('/user', function (req, res) {
  let user_id = req.body.user_id;
  let user = req.body.user;
  if (!user_id || !user) {
      return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
  }
  pool.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ results });
  });
});
app.delete('/user', function (req, res) {
  let user_id = req.body.user_id;
  if (!user_id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  pool.query('DELETE FROM user WHERE id = ?', [user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send({ results});
  });
});
app.get('/kqsx', function (req, res) {
  pool.query('SELECT * FROM kqsx', function (error, results, fields) {
      if (error) throw error;
      return res.send({ results });
  });
});
app.get('/kqsx/:id', function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
  }
  pool.query('SELECT * FROM kqsx where name=?', [user_id], function (error, results, fields) {
      if (error) throw error;
      return res.send( results[0] );
  });
});
module.exports = app;