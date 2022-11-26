import { React, useEffect, useReducer, useRef, useState } from "react";
import data from "../../databases/dataQ.json";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function questionManager() {
  const [toogle, settoogle] = useState(false);
  const [formData, setformData] = useReducer(formReducer, {});
  function onToggle() {
    settoogle(!toogle);
  }
  return (
    <div>
      <div className="container" style={{ marginBottom: "32px" }}>
        <h2>Question Manager</h2>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={(event) => onToggle()}>
          {toogle ? "Cancel" : "Add Question"}
        </button>
      </div>
      {toogle ? (
        <div className="container">
          <form>
            <div className="form-floating ">
              <input
                name="quest"
                type="text"
                className="form-control"
                id="quest"
                placeholder="Quest"
                onChange={setformData}
              />
              <label htmlFor="floatingInput">Quest</label>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="radio"
                  name="answer"
                  value="a"
                  onChange={setformData}
                />
              </div>
              <div className="col-11">
                <div className="form-floating ">
                  <input
                    name="a"
                    type="text"
                    className="form-control"
                    id="a"
                    placeholder="A"
                    onChange={setformData}
                  />
                  <label htmlFor="floatingInput">A</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="radio"
                  name="answer"
                  value="b"
                  onChange={setformData}
                />
              </div>
              <div className="col-11">
                <div className="form-floating ">
                  <input
                    name="b"
                    type="text"
                    className="form-control"
                    id="b"
                    placeholder="B"
                    onChange={setformData}
                  />
                  <label htmlFor="floatingInput">B</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="radio"
                  name="answer"
                  value="c"
                  onChange={setformData}
                />
              </div>
              <div className="col-11">
                <div className="form-floating ">
                  <input
                    name="c"
                    type="text"
                    className="form-control"
                    id="c"
                    placeholder="C"
                    onChange={setformData}
                  />
                  <label htmlFor="floatingInput">C</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <input
                  type="radio"
                  name="answer"
                  value="d"
                  onChange={setformData}
                />
              </div>
              <div className="col-11">
                <div className="form-floating ">
                  <input
                    name="d"
                    type="text"
                    className="form-control"
                    id="d"
                    placeholder="D"
                    onChange={setformData}
                  />
                  <label htmlFor="floatingInput">D</label>
                </div>
              </div>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="explaination"
                placeholder="Explaination"
                onChange={setformData}
              />
              <label htmlFor="floatingInput">Explaination</label>
            </div>
            <div>
              <h6>section</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="section"
                  id="flexRadioDefault1"
                  onChange={setformData}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="section"
                  id="flexRadioDefault2"
                  onChange={setformData}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>
            <buuton className="btn btn-primary">Save</buuton>
          </form>
        </div>
      ) : (
        <div></div>
      )}

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Quest</th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>Answer</th>
              <th>explanation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((obj, i) => (
              <Tr {...obj} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tr({ id, quest, a, b, c, d, answer, explaination }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{quest}</td>
      <td>{a}</td>
      <td>{b}</td>
      <td>{c}</td>
      <td>{d}</td>
      <td>{answer}</td>
      <td>{explaination}</td>
      <td>
        <button>edit</button>
      </td>
      <td>
        <button>delete</button>
      </td>
    </tr>
  );
}

export default questionManager;
