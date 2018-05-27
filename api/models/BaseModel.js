var moment = require('moment');
module.exports = {    
    attributes: {        
        Code: { type: 'STRING' },
        CreatedBy: { type: 'NUMBER' },
        ModifiedBy: { type: 'NUMBER' },
        CreatedAt: {  type: 'STRING', columnType: 'date', defaultsTo:moment().format()},
        ModifiedAt: {  type: 'STRING', columnType: 'date', defaultsTo:moment().format() },
        UpdateCount: { type: 'NUMBER' ,defaultsTo: 1 },
        Status: { type: 'BOOLEAN', defaultsTo: true } 
    }
};