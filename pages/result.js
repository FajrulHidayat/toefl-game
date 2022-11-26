import { React, useEffect, useState } from "react";
import dataResult from "../databases/dataQu.json";
export default function result(props) {
  const [result, setresult] = useState([]);
  const [skor, setskor] = useState(0);
  console.log(props);
  console.log(dataResult);
  useEffect(() => {
    let newResult = [];
    let skors = 0;
    props.data.forEach((e) => {
      let dataR = dataResult.find((x) => x._id == e._id);
      let status = false;
      if (e.answer == dataR.answer) {
        skors++;
        status = true;
      } else {
        status = false;
      }
      let newData = {
        _id: e._id,
        quest: e.quest,
        status: status,
        Canswer: dataR.answer,
        Uanswer: e.answer,
        explain: dataR.explaination,
      };
      newResult.push(newData);
      setresult(newResult);
      setskor(skors);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <h3>Result</h3>
        </div>
        <div className="col-2">
          Skor : {skor}/{result.length}
        </div>
      </div>
      {result.map((data, i) => (
        <div
          style={{
            margin: "16px",
            backgroundColor: data.status ? "#F1F794" : "#F76F6F",
            padding: "18px",
          }}
          key={i}
        >
          <div className="row">
            <div className="col-1">
              <p>{i + 1}.</p>
            </div>
            <div className="col-11">
              <div dangerouslySetInnerHTML={{ __html: data.quest }}></div>
              <div
                style={{ backgroundColor: data.status ? "#F1F794" : "#F76F6F" }}
              >
                {data.Uanswer == ""
                  ? "Not Answered"
                  : props.data[i][data.Uanswer]}
              </div>
              <div>Correct answer : {props.data[i][data.Canswer]}</div>
              {/* <div>{data.status ? "Correct" : "Incorrect"}</div> */}
              <div style={{ marginTop: "16px" }}>
                <h6>Explaination :</h6>
                {data.explain}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
