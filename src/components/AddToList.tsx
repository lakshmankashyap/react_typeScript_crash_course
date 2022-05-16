import React from "react";
import react,{useState} from "react";
import {IState as Props} from "../App";

interface IProps {
    setPeople:React.Dispatch<React.SetStateAction<Props['people']>>
    people:Props['people'],
}


const AddToList:React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name:"",
        age:"",
        note:"",
        img:""
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        debugger;
         setInput({
             ...input,
             [e.target.name]:e.target.value
         })
    }

    const handleClick = ():void=>{
        if(
            !input.name || !input.age || !input.img
        ){
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }
    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
            />
            <button className="AddToList-btn" onClick={handleClick}>
                Add to List
            </button>
        </div>
    )
}

export default AddToList;