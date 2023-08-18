const memoForm = document.querySelector("#memo-form");
const memoFormInput = document.querySelector("#memo-form-input");
const memoFormList = document.querySelector("#memo-form-input-list");


let memo = [];


function savedmemo(){
    localStorage.setItem("memos", JSON.stringify(memo));
}

function deletmemo(event){
    //console.log(event); //>> 어떤 이밴트가 있는지 확인.
    const li = event.target.parentElement;
    li.remove();
    //삭제 후 배열에 저장해줘야됨.
    memo = memo.filter((memos) => memos.id !== parseInt(li.id));
    //삭제 후 다시 로컬에 저장해줘야 다시 출력되지 않음.
    savedmemo();
}

//다섯번째 과정
function paintMemo(text){
    const list = document.createElement("li");
    //id 저장
    list.id = text.id;
    list.classList.add("font");
    const span = document.createElement("span");
    span.innerText = `${text.text}`
    span.classList.add("font");
    const button = document.createElement("button");
    button.classList.add("margin-left");
    button.innerText = "❤️";
    button.classList.add("background-button");

    //여덟번째 과정 >> 배열을 오브젝트 형태로 만든다.
    button.addEventListener("click", deletmemo); //하려고 봤더니만 뭘 삭제해야하는지 모르네?

    list.appendChild(span);
    list.appendChild(button);
    memoFormList.appendChild(list);
    savedmemo(); //여섯번째 과정

}

//두번째 과정
function handleMemo(e){
    e.preventDefault();
    const memotext = memoFormInput.value;
    const memotextOJ = {
        text: memotext,
        id:Date.now(),
    }
    //console.log(memotext);
    memo.push(memotextOJ); //세번째 과정
    //console.log(memo);
    paintMemo(memotextOJ); //네번째 과정

}

//일곱 번째 과정
const savedMemoState = localStorage.getItem("memos");

if(savedMemoState !== null){
    const parseMemo = JSON.parse(savedMemoState);
    memo = parseMemo;
    
    //forEach문은 배열 기준 요소 하나하나를 함수에 집어 넣어줌

    parseMemo.forEach(paintMemo);
   
}

memoForm.addEventListener("submit", handleMemo); //첫 번째 과정.
