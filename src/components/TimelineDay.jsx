import React from 'react';
import './TimelineDay.css';
import { Tooltip } from 'primereact/tooltip';

function TimelineDay({ timeline }) {
  return (
    <div className='timeline__day'>
      <div className='timeline__day--date'><span>{timeline.date}</span></div>
      <div className='timeline__box'>
        <div className={'timeline__circle ' + (!timeline.present ? 'timeline__circle--off' : '')}></div>
      </div>
      {timeline.present && <div className='timeline__box timeline__perf'>
        <div className={'timeline__circle ' + (!timeline.goodPerf ? 'timeline__circle--off' : '')}></div>
        <Tooltip
          className='timeline__popup'
          target=".timeline__perf"
          mouseTrack mouseTrackLeft={10} >
          <h4>Performance Comment: </h4>
          <p>{timeline.perfComment}</p>
        </Tooltip>
      </div>}
      {timeline.present && <div className='timeline__box timeline__behave'>
        <div className={'timeline__circle ' + (!timeline.goodBehave ? 'timeline__circle--off' : '')}></div>
        <Tooltip
          className='timeline__popup'
          target=".timeline__behave"
          mouseTrack mouseTrackLeft={10} >
          <h4>Behaviour Comment: </h4>
          <p>{timeline.behaveComment}</p>
        </Tooltip>
      </div>}
    </div >
  )
}

export default TimelineDay