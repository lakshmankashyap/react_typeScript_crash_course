import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import List from "./components/List"
import AddToList from "./components/AddToList"

export interface IState {
  people:{
    name:string,
    age:number,
    img:string,
    note?:string
  }[]
}

function App () {
  const [people, setPeople] = useState<IState['people']>([{
    name:"lakshman",
    img:"https://about.me/cdn-cgi/image/q=40,dpr=2,f=auto,fit=cover,w=120,h=120,gravity=auto/https://assets.about.me/background/users/l/a/k/lakshmankashyap_1652422226_572.jpg",
    age:36,
    note:"software developer"
  }]);

  return (
    <div className="App">
     <h1>
      welcome app
      </h1> 
      <div>
        <List people={people}/>
        <AddToList people={people} setPeople={setPeople} />
      </div>
    </div>
  );
};

export default App;