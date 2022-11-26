import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Worksheet from "./worksheet";
import QuestionManager from "./questionManager";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Home() {
  // <Router>
  //   <Switch>
  //     <Route path="/">
  //       <Worksheet />
  //     </Route>
  //     <Route path="QM">
  //       <QuestionManager />
  //     </Route>
  //   </Switch>
  // </Router>;
  return <Worksheet />;
}
