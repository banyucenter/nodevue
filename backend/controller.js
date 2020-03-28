'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST Api Node.Js!", res)
};

//modul Tampilkan semua data produk
exports.products = function (req, res) {
    connection.query('SELECT * FROM product', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

//modul Tampilkan produk berdasarkan ID tertentu
exports.productid = function (req, res) {
    var id = req.params.id;

    connection.query('SELECT * FROM product where product_id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

//modul untuk menambah produk
exports.tambahProduct = function (req, res) {
    let product_name = req.body.product_name;
    let product_price = req.body.product_price;

    connection.query('INSERT INTO product (product_name,product_price) values(?,?)',[product_name, product_price],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan produk",res)
            }
        });
};


