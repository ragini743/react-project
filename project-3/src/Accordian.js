import React from "react";
import Component1 from "./Component1";
import { useState } from "react";

// console.log("component1",Component1)
const Accordian = () => {
    const [activeId, setActiveId] = useState(0);

    const data=[
        {id:1,
        Question: "What is the capital of France?",
        Answer:" The capital of France is Paris."},
        
        {id:2,
        Question:' Who wrote the play "Romeo and Juliet"?',
        Answer: " 'Romeo and Juliet' was written by William Shakespeare."
    },
        
       {id:3,
         Question: "What is the chemical symbol for water?",

        Answer: "The chemical symbol for water is H2O."},
        
        {   id:4,
            Question: "Who is the current President of the United States?",
        Answer: "I don't have information on the current President since my knowledge cutoff date is September 2021. Please check the latest news or a reliable source for the current President."},
        {  id:5,    
        Question: "What is the tallest mountain in the world?",
        Answer: "The tallest mountain in the world is Mount Everest, located in the Himalayas."},
        {  id:6,      
        Question:" How does photosynthesis work?",
        Answer:" Photosynthesis is the process by which plants convert carbon dioxide, water, and sunlight into glucose (a type of sugar) and oxygen. This process occurs in the chloroplasts of plant cells and is essential for the plant's growth and the production of oxygen in the atmosphere."},
        {id:7,
        Question: "Who painted the Mona Lisa?",
        Answer: "The Mona Lisa was painted by the Italian artist Leonardo da Vinci."},
        {  id:8 ,
        Question:" What is the formula for calculating the area of a rectangle?",
        Answer: "The formula for calculating the area of a rectangle is length multiplied by width (A = L x W)."},

        {  id: 9,
        Question:" What is the speed of light in a vacuum?",
        Answer: "The speed of light in a vacuum is approximately 299,792,458 meters per second (or about 186,282 miles per second)."},
        {  id:10 ,
        Question: "What are the four primary types of tissue in the human body?",
        Answer: "The four primary types of tissue in the human body are epithelial tissue, connective tissue, muscle tissue, and nervous tissue."},
        {  id:11 ,
        Question:' Who is the author of the novel "1984"?',
        Answer: 'The novel "1984" was written by George Orwell.'},
        
]

const onShow = (itemId) => {
    setActiveId(itemId);
}


return(<div>
   {data.map((item)=>(
    <Component1 key={item.id} item={item} 
    isActive={activeId === item.id ? true: false} onShow={onShow}
    />
   )
)
}
</div>
)
}
export default Accordian
