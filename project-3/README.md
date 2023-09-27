
#### Here you can create ,many types of Accordian -

1 . you can crate state inside child component.
```python
import React, {useState} from "react";

 const Component1 = (prop) => {
   const [active ,setActive] =useState(false)
   const{Question, Answer}=item 
  return(
    <div className="border-2 shadow-lg p-4 pt-6 pb-6 flex justify-between m-auto w-3/5 rounded-lg">
      <div>
        <h>Ques - {Question} </h>
        {active?<p>Ans - {Answer}</p>:null}
      </div>
      <button onClick={()=>{setActive(!active)}}>hint</button> 
    </div>
  )
}
export default Component1 ;

```
in this example we add a "hint" button , when you click on that ,it will expand .and when you click again it will collapse.
 
2.see my Accordian project.