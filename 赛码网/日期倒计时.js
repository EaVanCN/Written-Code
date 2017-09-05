function getDays(day){
    var today = new Date("2015-10-18");
    var todaySec = today.getTime();
    var daySec = new Date(day).getTime();
    var sub = daySec-todaySec;
    return sub/(24*60*60*1000);
}

var line;
while(line=read_line()){

    print(getDays(line));

}
