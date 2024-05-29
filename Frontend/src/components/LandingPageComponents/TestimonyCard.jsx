import React from 'react'
import styled from 'styled-components'
function TestimonyCard(props) {
  return (
    <Card>
      <h1 className='font-chillax font-normal text-myGrey text-[2vw]'>"{props.comment}"</h1>
      <div className='flex justify-between items-center w-1/3'>
        <img src={props.img} className='w-12 h-12 rounded-[50%]'/>
        <div className='mx-2'>
            <h1 className='font-bold font-chillax text-myGrey'>{props.name}</h1>
            <h1 className='font-light font-chillax text-slate-400'>{props.userName}</h1>
        </div>
      </div>
    </Card>
  )
}

export default TestimonyCard

const Card = styled.div`
background: rgba( 16, 16, 14, 0.55 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 14.5px );
border-radius: 15px;
width: 35vw;
height: auto;
padding : 12px;
margin : 10px auto;
display : flex;
flex-direction: column;
justify-content: space-around;
`;
