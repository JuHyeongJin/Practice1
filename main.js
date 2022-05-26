//랜덤번호 지정
//유저가 번호를 입력 그리고 go라는 버튼을 누름
//up, down, 정답! 중 하나 출력
//Reset버튼 누르면 게임 리셋
//기회 5번(더 이상 불가, 버튼이 disable)
//유저가 1~100 밖의 숫자를 입력하면 알려주고 기회 차감 x
//유저가 이미 입력했던 숫자를 입력하면 알려주고 기회 차감 x

let computerNum = 0;
let playbutton = document.getElementById("playbutton");
let userinput = document.getElementById("userinput");
let resultarea = document.getElementById("resultarea");
let resetbutton = document.getElementById("reset-button");

playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset);

function picRandomNum(){
    computerNum = Math.floor(100 * Math.random()) + 1;
    console.log("정답",computerNum);
}

function play(){
    let userValue = userinput.value;
    if(userValue < computerNum){
        resultarea.textContent = "UP!";
    }else if(userValue > computerNum){
        resultarea.textContent = "DOWN!";
    }else{
        resultarea.textContent = "정답!";
    }
}

function reset(){
    //user input 창 정리
    userinput.value = "";
    //새로운 번호 생성
    picRandomNum();

    resultarea.textContent = "결과값이 여기 나옵니다";
}



picRandomNum();