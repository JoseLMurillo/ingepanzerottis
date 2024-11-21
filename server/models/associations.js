const Product = require('./product');
const Purchase = require('./purchase');
const Sale = require('./sale');

Purchase.belongsTo(Product, {foreignKey: 'fk_product'});
Sale.belongsTo(Product, {foreignKey: 'fk_product'});

/* 
Attendee.belongsTo(Ticket, { foreignKey: 'fk_ticket' });

Zone.belongsTo(Location, { foreignKey: 'fk_location' });

Payment.belongsTo(PaymentMethod, { foreignKey: 'fk_payment_method' });

Event.belongsToMany(Location, { through: EventsXLocations, foreignKey: 'fk_event' });
Event.belongsTo(EventType, { foreignKey: 'fk_type' });

Ticket.belongsTo(TicketStatus, { foreignKey: 'fk_status' });
Ticket.belongsTo(TicketType, { foreignKey: 'fk_type' });
Ticket.belongsTo(Event, { foreignKey: 'fk_event' });

Location.belongsToMany(Event, { through: EventsXLocations, foreignKey: 'fk_location' }); */