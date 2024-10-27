function calculate(){
    var input = document.frm.datas.value;
    var l = input.split("\n")
    var datas = []

    // 자료를 수 배열로 변환
    for (let i = 0; i < l.length; i++){
        if (l[i] == ""){
            continue;
        };
        var a = Number(l[i]);
        if (isNaN(a) == false){
            datas.push(a);
            console.log(datas);
        } else {
            alert("올바른 자료를 입력해 주세요.");
            return;
        }
    };

    if (datas.length == 0){
        alert("자료를 입력해 주세요.");
        return;
    };

    // 통계 계산
    datas.sort((a, b) => a - b)
    var len = datas.length;
    var sum = 0;
    for (let i = 0; i < datas.length; i++){
        sum += datas[i];
    };
    var average = sum / len;
    if (len % 2 == 1){
        var middle = datas[(len - 1) / 2];
    } else {
        var middle = (datas[len / 2] + datas[len / 2 - 1]) / 2;
    };
    var sd = 0;
    for (let i = 0; i < datas.length; i++){
        sd += [(datas[i] - average) ** 2] / len;
    };
    var sd = sd ** 0.5;

    // 결과 출력
    function roundn(x, n){
        return Math.round(x * (10 ** n)) / (10 ** n)
    };

    document.querySelector("#p1").textContent = "개수: " + roundn(len, 3).toLocaleString("ko-KR");
    document.querySelector("#p2").textContent = "합계: " + roundn(sum, 3).toLocaleString("ko-KR");
    document.querySelector("#p3").textContent = "평균: " + roundn(average, 3).toLocaleString("ko-KR");
    document.querySelector("#p4").textContent = "중앙값: " + roundn(middle, 3).toLocaleString("ko-KR");
    document.querySelector("#p5").textContent = "표준편차: " + roundn(sd, 3).toLocaleString("ko-KR");
};

