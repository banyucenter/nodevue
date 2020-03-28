'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/product')
        .get(jsonku.products);

    app.route('/product/:id')
        .get(jsonku.productid);

    app.route('/tambah')
        .post(jsonku.tambahProduct);
};