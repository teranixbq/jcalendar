const generateAnnualCalendar = (request, h) => {
    let { year } = request.query;

    if (!year || year == 0) {
        year = new Date().getFullYear();
    }

    const months = [
        "januari", "februari", "maret", "april", "mei", "juni",
        "juli", "agustus", "september", "oktober", "november", "desember"
    ];

    const data = [];
    for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const monthData = {
            month: months[month],
            dates: []
        };

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const formattedMonth = (month + 1 < 10) ? `0${month + 1}` : month + 1;
            const formattedDay = (day < 10) ? `0${day}` : day;
            const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
            const isWeekend = (date.getDay() === 0 || date.getDay() === 6);
            monthData.dates.push({ date: formattedDate, weekend: isWeekend });
        }

        data.push(monthData);
    }

    const response = {
        status: true,
        message: "berhasil",
        data: data
    };

    return h.response(response).code(200);
}

module.exports = {
    generateAnnualCalendar
}
