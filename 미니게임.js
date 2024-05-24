        //게임 재화
        let coin = 0;

        function coinFarming () {
            coin += 10
            }

            // 결과를 표시할 HTML 요소 선택
var cbhElement = document.getElementById("cbh");
var prtElement = document.getElementById("prt");
var fatElement = document.getElementById("fat");
var kcalElement = document.getElementById("kcal");

// 변수 값을 화면에 표시
cbhElement.innerHTML = "탄수화물: " + userCbh.toFixed(2);
prtElement.innerHTML = "단백질: " + userPrt.toFixed(2);
fatElement.innerHTML = "지방: " + userFat.toFixed(2);
kcalElement.innerHTML = "칼로리: " + userKcal.toFixed(2);