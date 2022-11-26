import { React, useEffect, useState } from "react";
import styles from "../styles/Worksheet.module.css";
import data from "../databases/dataQu.json";
import GenerateQuest from "./helper/generateQuest";
import TimerCD from "./helper/TimerCD";
import Result from "./result";
function Worksheet() {
  const [numQ, setnumQ] = useState(1);
  const [localData, setlocalData] = useState(data);
  const [change, setchange] = useState(false);
  const [finish, setfinish] = useState(false);
  const [timer, settimer] = useState(false);
  const [second, setsecond] = useState(1500);
  let sec = 1500;

  function onFinish() {
    let text = "Finish The Examination?";
    if (confirm(text) == true) {
      setfinish(true);
    } else {
      setfinish(false);
    }
  }
  useEffect(() => {
    let newLocalData = [];
    data.forEach((element) => {
      let newData = {
        _id: element._id,
        quest: element.quest,
        status: 0,
        answer: "",
        a: element.a,
        b: element.b,
        c: element.c,
        d: element.d,
      };
      newLocalData.push(newData);
      setlocalData(newLocalData);
    });
  }, []);

  function onNumberClick(num) {
    setnumQ(num);
  }
  function numberColor(num) {
    console.log(localData[numQ - 1].answer);
    if (localData[num - 1].status == 0) {
      if (numQ == num) {
        return "#cccccc";
      } else {
        return "#F8F9FA";
      }
    } else if (localData[num - 1].status == 1) {
      return "#33FF00";
    } else if (localData[num - 1].status == 2) {
      return "#FFBB00";
    }
  }
  function onAnswered(answer) {
    // console.log(answer);
    let newLocalData = localData;
    // console.log(newLocalData[numQ - 1]);
    newLocalData[numQ - 1].answer = answer;
    newLocalData[numQ - 1].status = 1;
    setlocalData(newLocalData);
    // console.log("change color");
    numberColor(numQ);
    setchange(!change);
  }
  // function generateNumberButton(Max) {
  //   let NumberButton = "";
  //   let num = 0;
  //   for (let number = 0; number < Max; number++) {
  //     NumberButton += `
  //       <div className="row">
  //         <div className="col">
  //           <button
  //           key={${++num}}
  //           type="button"
  //           className="btn btn-light"
  //             style={{ backgroundColor: numberColor(1) }}
  //           onClick={(event) => onNumberClick(${num})}
  //         >${num}</button>
  //         </div>
  //         <div className="col">
  //           <button
  //           key={${++num}}
  //           type="button"
  //           className="btn btn-light"
  //             style={{ backgroundColor: numberColor(1) }}
  //           onClick={(event) => onNumberClick(${num})}
  //         >${num}</button>
  //         </div>
  //         <div className="col">
  //           <button
  //           key={${++num}}
  //           type="button"
  //           className="btn btn-light"
  //             style={{ backgroundColor: numberColor(1) }}
  //           onClick={(event) => onNumberClick(${num})}
  //         >${num}</button>
  //         </div>
  //         <div className="col">
  //           <button
  //           key={${++num}}
  //           type="button"
  //           className="btn btn-light"
  //             style={{ backgroundColor: numberColor(1) }}
  //           onClick={(event) => onNumberClick(${num})}
  //         >${num}</button>
  //         </div>
  //         <div className="col">
  //           <button
  //           key={${++num}}
  //           type="button"
  //           className="btn btn-light"
  //             style={{ backgroundColor: numberColor(1) }}
  //           onClick={(event) => onNumberClick(${num})}
  //         >${num}</button>
  //         </div>
  //       </div>
  //     `;
  //   }
  //   console.log(NumberButton);
  //   return NumberButton;
  // }
  // $.(document).ready(function () {
  //   $("#a").on("click", function () {
  //     console.log("answer a");
  //   });
  //   $("#b").on("click", function () {
  //     console.log("answer b");
  //   });
  // });

  return (
    <div>
      {finish ? (
        <Result data={localData} />
      ) : (
        <div className={styles.ws_container}>
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h1>TOEFL</h1>
              </div>
              <div className="col-sm-5">
                {" "}
                <TimerCD />
              </div>
              <div className="col-sm-2">
                <button
                  id="btnFinish"
                  className="btn btn-primary"
                  style={{ margin: "4px" }}
                  onClick={(event) => onFinish()}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  key={1}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(1) }}
                  onClick={(event) => onNumberClick(1)}
                >
                  1
                </button>
              </div>
              <div className="col">
                <button
                  key={2}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(2) }}
                  onClick={(event) => onNumberClick(2)}
                >
                  2
                </button>
              </div>
              <div className="col">
                <button
                  key={3}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(3) }}
                  onClick={(event) => onNumberClick(3)}
                >
                  3
                </button>
              </div>
              <div className="col">
                <button
                  key={4}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(4) }}
                  onClick={(event) => onNumberClick(4)}
                >
                  4
                </button>
              </div>
              <div className="col">
                <button
                  key={5}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(5) }}
                  onClick={(event) => onNumberClick(5)}
                >
                  5
                </button>
              </div>
              <div className="col">
                <button
                  key={6}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(6) }}
                  onClick={(event) => onNumberClick(6)}
                >
                  6
                </button>
              </div>
              <div className="col">
                <button
                  key={7}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(7) }}
                  onClick={(event) => onNumberClick(7)}
                >
                  7
                </button>
              </div>
              <div className="col">
                <button
                  key={8}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(8) }}
                  onClick={(event) => onNumberClick(8)}
                >
                  8
                </button>
              </div>
              <div className="col">
                <button
                  key={9}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(9) }}
                  onClick={(event) => onNumberClick(9)}
                >
                  9
                </button>
              </div>
              <div className="col">
                <button
                  key={10}
                  type="button"
                  className="btn btn-light"
                  style={{ backgroundColor: numberColor(10) }}
                  onClick={(event) => onNumberClick(10)}
                >
                  10
                </button>
              </div>
            </div>
            {/* <div className="row">
          <div className="col">
            <button
              key={11}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(11)}
            >
              11
            </button>
          </div>
          <div className="col">
            <button
              key={12}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(12)}
            >
              12
            </button>
          </div>
          <div className="col">
            <button
              key={13}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(13)}
            >
              13
            </button>
          </div>
          <div className="col">
            <button
              key={14}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(14)}
            >
              14
            </button>
          </div>
          <div className="col">
            <button
              key={15}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(15)}
            >
              15
            </button>
          </div>
          <div className="col">
            <button
              key={16}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(16)}
            >
              16
            </button>
          </div>
          <div className="col">
            <button
              key={17}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(17)}
            >
              17
            </button>
          </div>
          <div className="col">
            <button
              key={18}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(18)}
            >
              18
            </button>
          </div>
          <div className="col">
            <button
              key={19}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(19)}
            >
              19
            </button>
          </div>
          <div className="col">
            <button
              key={20}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(20)}
            >
              20
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              key={21}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(21)}
            >
              21
            </button>
          </div>
          <div className="col">
            <button
              key={22}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(22)}
            >
              22
            </button>
          </div>
          <div className="col">
            <button
              key={23}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(23)}
            >
              23
            </button>
          </div>
          <div className="col">
            <button
              key={24}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(24)}
            >
              24
            </button>
          </div>
          <div className="col">
            <button
              key={25}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(25)}
            >
              25
            </button>
          </div>
          <div className="col">
            <button
              key={26}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(26)}
            >
              26
            </button>
          </div>
          <div className="col">
            <button
              key={27}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(27)}
            >
              27
            </button>
          </div>
          <div className="col">
            <button
              key={28}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(28)}
            >
              28
            </button>
          </div>
          <div className="col">
            <button
              key={29}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(29)}
            >
              29
            </button>
          </div>
          <div className="col">
            <button
              key={30}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(30)}
            >
              30
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              key={31}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(31)}
            >
              31
            </button>
          </div>
          <div className="col">
            <button
              key={32}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(32)}
            >
              32
            </button>
          </div>
          <div className="col">
            <button
              key={33}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(33)}
            >
              33
            </button>
          </div>
          <div className="col">
            <button
              key={34}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(34)}
            >
              34
            </button>
          </div>
          <div className="col">
            <button
              key={35}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(35)}
            >
              35
            </button>
          </div>
          <div className="col">
            <button
              key={36}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(36)}
            >
              36
            </button>
          </div>
          <div className="col">
            <button
              key={37}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(37)}
            >
              37
            </button>
          </div>
          <div className="col">
            <button
              key={38}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(38)}
            >
              38
            </button>
          </div>
          <div className="col">
            <button
              key={39}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(39)}
            >
              39
            </button>
          </div>
          <div className="col">
            <button
              key={40}
              type="button"
              className="btn btn-light"
              style={{ backgroundColor: numberColor(1) }}
              onClick={(event) => onNumberClick(40)}
            >
              40
            </button>
          </div>
        </div> */}
          </div>
          <div className="container">
            <div className={styles.work_container}>
              {/* <GenerateQuest quest={localData[numQ].quest} /> */}
              <div
                dangerouslySetInnerHTML={{ __html: localData[numQ - 1].quest }}
              ></div>
              <div className="row">
                <div className="col">
                  <button
                    style={{
                      backgroundColor:
                        localData[numQ - 1].answer == "a"
                          ? "#33FF00"
                          : "#F8F9FA",
                      margin: "8px",
                    }}
                    onClick={(event) => onAnswered("a")}
                  >
                    {localData[numQ - 1].a}
                  </button>
                </div>
                <div className="col">
                  <button
                    style={{
                      backgroundColor:
                        localData[numQ - 1].answer == "c"
                          ? "#33FF00"
                          : "#F8F9FA",
                      margin: "8px",
                    }}
                    onClick={(event) => onAnswered("c")}
                  >
                    {localData[numQ - 1].c}
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <button
                    style={{
                      backgroundColor:
                        localData[numQ - 1].answer == "b"
                          ? "#33FF00"
                          : "#F8F9FA",
                      margin: "8px",
                    }}
                    onClick={(event) => onAnswered("b")}
                  >
                    {localData[numQ - 1].b}
                  </button>
                </div>
                <div className="col">
                  <button
                    style={{
                      backgroundColor:
                        localData[numQ - 1].answer == "d"
                          ? "#33FF00"
                          : "#F8F9FA",
                      margin: "8px",
                    }}
                    onClick={(event) => onAnswered("d")}
                  >
                    {localData[numQ - 1].d}
                  </button>
                </div>
              </div>

              <div>
                <span>{localData[numQ - 1].answer}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Worksheet;
