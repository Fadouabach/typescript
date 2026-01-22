import { useState } from 'react'
export default function DynamiqueStyle(){
  const[textTransform,setTextTransform]= useState('')
  const[color,setColor]=useState('')
  const[size,setSize]= useState('')

  return(
    <>
      <section>
        <h3>Screen</h3>
        <div style={{
          border: 'solid 1px green',
          textAlign: 'center',
          textTransform: textTransform,
          color:color,
          fontSize: size
        }}>
        <h1>abc</h1>
         </div>
      </section>
      <section>
        <button onClick={()=>{setTextTransform('uppercase')}}>UpperCase</button>
        <button onClick={()=>{ setTextTransform('lowercase')}}>lowerCase</button>
      </section>
       
       <section>
        <h3>choose color</h3>
        <button onClick={()=>{ setColor('green')}}>green</button>
        <button onClick={()=>{ setColor('red')}}>red</button>
        <button onClick={()=>{ setColor('yellow')}}>yellow</button>
        <button onClick={()=>{ setColor('purple')}}>purple</button>
        <button onClick={()=>{ setColor('pink')}}>pink</button>
       </section>
       
       
       <section>
       <h3>size</h3>
       <button onClick={()=>{setSize('10px')}}>10px</button>
       <button onClick={()=>{setSize('15px')}}>15px</button>
       <button onClick={()=>{setSize('20px')}}>20px</button>
       <button onClick={()=>{setSize('25px')}}>25px</button>
       <button onClick={()=>{setSize('30px')}}>30px</button>
       </section>

       </>
        )}
