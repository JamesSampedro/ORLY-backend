
const dateFormat = (today) => {
    // current date
    // adjust 0 before single digit date    
    let date = ("0" + today.getDate()).slice(-2);
    // current month
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    // current year
    let year = today.getFullYear();

    return `${month}-${date}-${year}`
}

export default dateFormat