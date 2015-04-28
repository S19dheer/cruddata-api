var mongo = require('mongoskin');
var config = require('../config/config');
var db = mongo.db(config.mongo.url);
//insert value to database
exports.insertDataToCrudDao = function(insertValue, databaseCollection, callback) {
    //TO-DO change query when request set to insertvalue.
    var query = insertValue;
    /*var query = {
        name: insertValue.name,
        country: insertValue.country,
        ratings: insertValue.ratings,
        address: {
            state: insertValue.state,
            city: insertValue.city
        }
    };*/
    db.collection(databaseCollection).insert(insertValue, function(error, result) {
        callback(error, result);
        db.close();
    });
}

// delete data from database
exports.deleteDataToCrudDao = function(deleteValue, databaseCollection, callback) {
    var query = {
        "_id": mongo.helper.toObjectID(deleteValue.id)
    };
    db.collection(databaseCollection).remove(query, function(error, result) {
        callback(error, result);
        db.close();
    });

}

// retrive data from the database
exports.retriveDataToCrudDao = function(databaseCollection, callback) {
    db.collection(databaseCollection).find().toArray(function(error, result) {
        callback(error, result);
    });

}

// update value in to database
exports.updateDataToCrudDao = function(updateValue, databaseCollection, callback) {

    var query = {
        "_id": mongo.helper.toObjectID(updateValue.id)
    };

    var setquery = {
        $set: {
            'address.city': updateValue.city,
            'address.state': updateValue.state,
            'ratings': updateValue.ratings
        }
    };
    db.collection(databaseCollection).update(query, setquery, {
        multi: true
    }, function(error, result) {
        callback(error, result);
    });
}

// search data from crudDao 
exports.searchDataToCrudDao = function(serchValue, databaseCollection, callback) {

    var query = {
        "address.city": {
            $regex: serchValue.currentCity,
            $options: '-i'
        }
    };
    db.collection(databaseCollection).find(query).toArray(function(error, result) {
        callback(error, result);
    })
}
