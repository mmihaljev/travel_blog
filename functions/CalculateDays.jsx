const calculateDays = function (date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    console.log(diffTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays+1;
}

export default calculateDays;