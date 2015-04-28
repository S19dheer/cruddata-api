var crudDao = require('../dao/crudDao');

// to select  the collection of database ;
var databaseCollection = 'restaurant';

///  insert data to crud Dao
exports.insertData = function(request, response) {
    // TO-DO data coming from client then uncomment insertvalue and comment second insertvalue
    /*var insertValue = request.body;*/
    var insertValue = {
        name: 'Biryani Boulevard',
        country: 'India',
        ratings: 3,
        address: {
            state: 'Hariyana',
            city: 'Gurgaun'
        }
    };
    crudDao.insertDataToCrudDao(insertValue, databaseCollection, function(error, result) {

        response.json({
            'result': result
        });
        response.end();
    });

}

/// delete data on the _id bases
exports.deleteData = function(request, response) {
    var deleteValue = request.query;
    crudDao.deleteDataToCrudDao(deleteValue, databaseCollection, function(error, result) {

        response.json({
            'result': result
        });
    })
}

/// retrive or get all data
exports.getData = function(request, response) {
    crudDao.retriveDataToCrudDao(databaseCollection, function(error, result) {

        response.json({
            'result': result
        });
    })
}

/// update data on _id bases 
exports.updateData = function(request, response) {
        var updateValue = request.body;

        crudDao.updateDataToCrudDao(updateValue, databaseCollection, function(error, result) {

            response.json({
                'result': result
            });

        })
    }
    ///TO-DO search data on column bases
exports.searchData = function(request, response) {
    var searchValue = request.body;
    crudDao.searchDataToCrudDao(searchValue, databaseCollection, function(error, result) {
        response.json({
            'result': result
        });
    })
}
