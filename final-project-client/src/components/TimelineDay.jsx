import React from 'react';
import './TimelineDay.css'

function TimelineDay({ timeline }) {
  return (
    <div className='timeline__day'>
      <div className='timeline__day--date'><span>{timeline.date}</span></div>
      <div className='timeline__box'>
        <div className={'timeline__circle ' + (!timeline.present ? 'timeline__circle--off' : '')}></div>
      </div>
      {timeline.present && <div className='timeline__box'>
        <div className={'timeline__circle ' + (!timeline.goodPerf ? 'timeline__circle--off' : '')}></div>
      </div>}
      {timeline.present && <div className='timeline__box'>
        <div className={'timeline__circle ' + (!timeline.goodBehave ? 'timeline__circle--off' : '')}></div>
      </div>}
    </div>
  )
}

export default TimelineDay