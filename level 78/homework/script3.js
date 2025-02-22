function getMonthInfo(month) {
    let monthName;
    switch(month) {
        case 1: monthName = "იანვარი"; break;
        case 2: monthName = "თებერვალი"; break;
        case 3: monthName = "მარტი"; break;
        case 4: monthName = "აპრილი"; break;
        case 5: monthName = "მაისი"; break;
        case 6: monthName = "ივნისი"; break;
        case 7: monthName = "ივლისი"; break;
        case 8: monthName = "აგვისტო"; break;
        case 9: monthName = "სექტემბერი"; break;
        case 10: monthName = "ოქტომბერი"; break;
        case 11: monthName = "ნოემბერი"; break;
        case 12: monthName = "დეკემბერი"; break;
        default: return "არასწორი თვე";
    }

    let halfOfYear = month <= 6 ? "პირველი ნახევარი" : "მეორე ნახევარი";
    return `Switch -> ${monthName}\nTernary -> ${halfOfYear}`;
}

console.log(getMonthInfo(5));
console.log(getMonthInfo(10)); 
console.log(getMonthInfo(13)); 
