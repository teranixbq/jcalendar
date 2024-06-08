const { generateAnnualCalendar } = require("../handler/handler");

const routeAPI = [
    {
        method: 'GET',
        path: '/',
        handler: generateAnnualCalendar
    },
];

module.exports = { routeAPI };
