// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5. 금액을 입력하면 환전이 된다
// 6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전됨

// 8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다.
// 7. 숫자를 한국어로 읽는 법

let currencyRatio = {
  USD: {
    KRW: 1309.44,
    USD: 1,
    VND: 23525.0,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00076,
    VND: 17.99,
    unit: "원",
  },
  VND: {
    KRW: 0.056,
    USD: 0.000043,
    VND: 1,
    unit: "동",
  },
};
//1. console.log(currencyRatio.USD.unit);
//console.log(currencyRatio["USD"].unit);
let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    // document.querySelector("#from-input div") = ;
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. 버튼을 가져온다
    //2. 버튼에 값을 바꾼다.
    document.getElementById("to-button").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장해준다.
    toCurrency = this.textContent;
    convert();
  })
);

function convert(type) {
  //   console.log(type);
  let amount = 0;
  if (type == "from") {
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = convertedAmount;
  } else if (type == "to") {
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("from-input").value = convertedAmount;
  }
}

// chatgpt의 응답

// function calculateExchange(inputId) {
//     const usdToKrw = 1130; // Example exchange rate

//     if (inputId === 1) {
//       const inputUSD = document.getElementById("input1").value;
//       const outputKRW = inputUSD * usdToKrw;
//       document.getElementById("output1").value = outputKRW.toFixed(2);
//     } else if (inputId === 2) {
//       const inputKRW = document.getElementById("input2").value;
//       const outputUSD = inputKRW / usdToKrw;
//       document.getElementById("output2").value = outputUSD.toFixed(2);
//     }
//   }
