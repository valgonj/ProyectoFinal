import React from 'react';

export default ({ currentDate, dateBeforeHandler, dateAfterHandler, resetDate })=>{
  if(!currentDate){currentDate = new Date()}
  if(!dateBeforeHandler) {dateBeforeHandler = ()=>{}}
  if (!dateAfterHandler) { dateAfterHandler = ()=> {}}
  if (!resetDate) { resetDate = () => {} }
  return(
    <div className="datePanel">
      <span onClick={resetDate}>{currentDate.getFullYear()}-{currentDate.getMonth() + 1}-{currentDate.getDate()}</span>
    </div>
  )
}