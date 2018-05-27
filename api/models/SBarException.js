/**
 * SBarException.js
 *
 * 
 */
var baseModel = require('./BaseModel'),
       baseModelAdvanced = require('./BaseModelAdvanced');
module.exports = _.merge({}, baseModel, {	
  tableName: 'SBarException',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    Location : { type: 'STRING' },   
    ReportedDate : { type: 'STRING' }, 		  
    Poured : { type: 'STRING' },        
    Sold : { type: 'STRING' },        
    Variance : { type: 'STRING' },        
    TicketID : { type: 'STRING' },        
    TicketDescription : { type: 'STRING' },
    
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // friends: { collection: 'User', description: 'All of the other users this user can share things with.' },

    // outboundFriendRequests: { collection: 'User', via: 'inboundFriendRequests', description: 'The friend requests this user has sent.' },

    // inboundFriendRequests: { collection: 'User', via: 'outboundFriendRequests', description: 'The friend requests this user has received.' },

  },


});
