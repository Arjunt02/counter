import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterslice'

function Counter() {

  const count=useSelector((state)=>state.counterReducer.value)

  const dispatch=useDispatch()

  return (
    <>

      <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div style={{width:'500px'}} className="border rounded shadow p-5 text-center m-auto">
            <h1 style={{fontSize:'80px'}} className='text-info'>{count}</h1>
            <div>
                <button onClick={()=>dispatch(increment())} className='btn btn-primary'>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-5'>Reset</button>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning ms-5'>Decrement</button>
            </div>

        </div>

      </div>

    </>
  )
}

export default Counter


