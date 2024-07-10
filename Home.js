import React ,{useState}from 'react'
import SingleColor from '../SingleColor/singleColor';
import Values from 'values.js'
function Home() {
  const[list, setList]=useState(new Values('#f15025').all(10));

  const[color, setColor] = useState('')
  const[error, setError] = useState(false)


  const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    }catch(error){
      setError(true)
      console.log(error)
    }
  }
  return (
    <div>
      <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>

        <input type='text' placeholder='Enter Color'
        onChange={(e)=> setColor(e.target.value)}
        className={`${error?'error':null}`}></input>


        <button className='btn'>Submit</button>
      </form>
      </section>

     <section className='colors'>
      {
        list.map((color,index)=>( 
       <SingleColor key={index}  {...color} index={index} hexColor = {color.hex}
       />
        ))
      }

      
     </section>
    </div>
  )
}

export default Home;
