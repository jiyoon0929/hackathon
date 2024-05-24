var a = 0;
var riceCount=0;
var pttCount=0;
var swtpttCount=0;
var breadCount=0;
var ndlCount=0;
var cakeCount=0;
var chickenCount=0;
var cowCount=0;
var fishCount=0;
var eggCount=0;
var tofuCount=0;
var avoCount=0;
var nutCount=0;
var seedCount=0;


            var foods = ['밥', '감자', '고구마', '빵', '국수', '떡', '닭고기', '소고기', '고등어', '삶은계란', '두부', '아보카도', '견과류', '해바라기씨'];
            
            //랜덤 뽑기 시스템
            function showModal() {
                document.getElementById("modal").style.display = "block";
                document.getElementById("overlay").style.display = "block";
                }
                
                // 결과를 저장할 배열 (전역 범위에서 선언)
var drawResults = [];

function RandomDraw() {
    a = 1;


            showModal();

            clearResults();

        
        displayResults();
        displayHistory();
}

// displayResults 함수 수정
function displayResults() {
    // 기존 결과 및 모달 내용 초기화
    document.getElementById("randomFoodResult").innerHTML = '';
    var resultsList = document.getElementById("randomFoodList");
    resultsList.innerHTML = '';
    

}
            

            var results = {};

            function RandomDrawOnce() {
                
                displayResults();
                return foods[Math.floor(Math.random()*foods.length)];

            }

            function RandomDraw10() {
                a = 10;


                showModal();

                clearResults();
            
            displayResults();
            displayHistory();
            

        }

        function RandomDraw20() {
            a = 20;


            showModal();

            clearResults();

        
        displayResults();
        displayHistory();
        

    }




    
        
        function foodCount() {
            var userCbh = riceCbh * riceCount + pttCbh * pttCount + swtpttCbh * swtpttCount + breadCbh * breadCount + ndlCbh * ndlCount + cakeCbh * cakeCount + chickenCbh * chickenCount + cowCbh * cowCount + fishCbh * fishCount + eggCbh * eggCount + tofuCbh * tofuCount + avoCbh * avoCount + nutCbh * nutCount + seedCbh * seedCount;
var userPrt = ricePrt * riceCount + pttPrt * pttCount + swtpttPrt * swtpttCount + breadPrt * breadCount + ndlPrt * ndlCount + cakePrt * cakeCount + chickenPrt * chickenCount + cowPrt * cowCount + fishPrt * fishCount + eggPrt * eggCount + tofuPrt * tofuCount + avoPrt * avoCount + nutPrt * nutCount + seedPrt * seedCount;
var userFat = riceFat * riceCount + pttFat * pttCount + swtpttFat * swtpttCount + breadFat * breadCount + ndlFat * ndlCount + cakeFat * cakeCount + chickenFat * chickenCount + cowFat * cowCount + fishFat * fishCount + eggFat * eggCount + tofuFat * tofuCount + avoFat * avoCount + nutFat * nutCount + seedFat * seedCount;
var userKcal = riceKcal * riceCount + pttKcal * pttCount + swtpttKcal * swtpttCount + breadKcal * breadCount + ndlKcal * ndlCount + cakeKcal * cakeCount + chickenKcal * chickenCount + cowKcal * cowCount + fishKcal * fishCount + eggKcal * eggCount + tofuKcal * tofuCount + avoKcal * avoCount + nutKcal * nutCount + seedKcal * seedCount;
            console.log (userCbh.toFixed(2)+"g")
            console.log (userPrt.toFixed(2)+"g")
            console.log (userFat.toFixed(2)+"g")
            console.log (userKcal.toFixed(2)+"kcal")
        }







            document.getElementById("closeModalBtn").addEventListener("click", function() {
                document.getElementById("modal").style.display="none";
                document.getElementById("overlay").style.display="none";
            });

            function getRandomFood() {
            return foods[Math.floor(Math.random() * foods.length)];
        }

        function updateResults(food) {
        if (results[food]>=1) {
            results[food]++;
        } else {
            results[food] = 1;
        }
    }

        //뽑기 결과가 누적되어서 보여지게 하기
        function displayResults() {
            // 기존 결과 및 모달 내용 초기화
            document.getElementById("randomFoodResult").innerHTML = '';
            var resultsList = document.getElementById("randomFoodList");
            resultsList.innerHTML = '';
        
            // 결과 개수 초기화
            var resultCount = 0;
        
            // 무작위 음식을 가져와서 결과 표시
            while (resultCount < a) {
                var randomFood = getRandomFood();
                if(randomFood=="밥"){
                    riceCount++
                } if(randomFood=="감자"){
                    pttCount++
                } if(randomFood=="고구마"){
                    swtpttCount++
                } if(randomFood=="빵"){
                    breadCount++
                } if(randomFood=="국수"){
                    ndlCount++
                } if(randomFood=="떡"){
                    cakeCount++
                } if(randomFood=="닭고기"){
                    chickenCount++
                } if(randomFood=="소고기"){
                    cowCount++
                } if(randomFood=="고등어"){
                    fishCount++
                } if(randomFood=="삶은계란"){
                    eggCount++
                } if(randomFood=="두부"){
                    tofuCount++
                } if(randomFood=="견과류"){
                    nutCount++
                } if(randomFood=="해바라기씨"){
                    seedCount++
                } 
                
                var listItem = document.createElement("li");
                listItem.textContent = randomFood;
                resultsList.appendChild(listItem);
                updateResults(randomFood);
        
        
                // 결과 개수 증가
                resultCount++;
            }
        
        }
        

        
        
                
        

        function displayHistory() {
        var historyList = document.getElementById("historyList");
        historyList.innerHTML = '';
        for (var food in results) {
            var listItem = document.createElement("li");
            listItem.textContent = food + ' x ' + results[food];
            historyList.appendChild(listItem);
        }
    }

        //결과 리셋하기
        function resetResults() {
        results = {};
        displayHistory();
        clearResults();
        riceCount=0;
        pttCount=0;
        swtpttCount=0;
        breadCount=0;
        ndlCount=0;
        cakeCount=0;
        chickenCount=0;
        cowCount=0;
        fishCount=0;
        eggCount=0;
        tofuCount=0;
        avoCount=0;
        nutCount=0;
        seedCount=0;

        }

        


        function clearResults() {
        document.getElementById("randomFoodResult").innerHTML = '';
        document.getElementById("randomFoodList").innerHTML = '';
    }

    document.getElementById("closeModalBtn").addEventListener("click", function() {
        document.getElementById("modal").style.display="none";
        document.getElementById("overlay").style.display="none";
    });

    
var riceCbh=64.3; //밥 한공기 (210g) 기준 탄수화물
var ricePrt=5.7; //단백질
var riceFat=1; //지방
var riceKcal=300 //칼로리

var pttCbh=12.6; //감자 100g
var pttPrt=1.6
var pttFat=0.1
var pttKcal=66

var swtpttCbh=25.3 //군고구마 100g 기준
var swtpttPrt=1.4
var swtpttFat=0.5
var swtpttKcal=141

var breadCbh=44 //식빵 한조각 (100g) 기준
var breadPrt=8
var breadFat=6
var breadKcal=286

var ndlCbh=38.1 //요리된 국수 한컵 (160g) 기준
var ndlPrt=7.2
var ndlFat=3.3
var ndlKcal=219

var cakeCbh=46.5 //떡 1개 (100g) 기준
var cakePrt=4.6
var cakeFat=0.8
var cakeKcal=224

//단백질 대표식품

var chickenCbh=0 //닭가슴살 100g 기준
var chickenPrt=25
var chickenFat=7.7
var chickenKcal=120

var cowCbh=0 //소고기구이 100g 기준
var cowPrt=27.9
var cowFat=13.4
var cowKcal=240

var fishCbh=0 //고등어 100g 기준
var fishPrt=19.3
var fishFat=9.4
var fishKcal=167

var eggCbh=0.6 //삶은계란 1개 (50g) 기준
var eggPrt=6.3
var eggFat=5.3
var eggKcal=78

//지방 대표식품

var avoCbh=3.7 //아보카도 1개 (201g) 기준
var avoPrt=4
var avoFat=29.5
var avoKcal=322

var nutCbh=13.3 //혼합 견과류 100g 기준
var nutPrt=16.5
var nutFat=56.3
var nutKcal=617

var seedCbh=8.3 //말린 해바라기씨 100g 기준
var seedPrt=22.8
var seedFat=49.6
var seedKcal=570




    


/*
// 결과를 표시할 HTML 요소 선택
var cbhElement = document.getElementById("cbh");
var prtElement = document.getElementById("prt");
var fatElement = document.getElementById("fat");
var kcalElement = document.getElementById("kcal");

// 변수 값을 화면에 표시
cbhElement.innerHTML = "탄수화물: " + userCbh.toFixed(1);
prtElement.innerHTML = "단백질: " + userPrt.toFixed(1);
fatElement.innerHTML = "지방: " + userFat.toFixed(1);
kcalElement.innerHTML = "칼로리: " + userKcal.toFixed(1); */



 //탄수화물 대표식품

