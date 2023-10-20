let temp = 25;
let feeling;

switch (true) {
    case temp > 30:
        feeling = "炎熱";
        break;
    case temp >20:
        feeling = "溫暖";
        break;
    default:
        feeling = "寒冷";
}

console.log("今日溫度:" + temp + "度，體感:" + feeling);