function NowTime() {
    var date = new Date();
    var ymd = date.toLocaleDateString().replace(/\//g, '-');
    var h = date.getHours();
    var m = date.getMinutes();
    m = m < 10 ? '0' + m : m;
    var ampm = h < 13 ? '上午' : '下午';
    h = h < 13 ? h : h - 12;
    var time = ymd + ' ' + ampm + h + ': ' + m
    return time
}