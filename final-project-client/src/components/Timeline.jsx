import React from 'react';
import TimelineDay from './TimelineDay';
import './Timeline.css'

function Timeline() {
  const timeline = [{
    uuid: '1',
    date: '22nd June',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '2',
    date: '23rd June',
    present: true,
    goodPerf: true,
    goodBehave: false,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '3',
    date: '24th June',
    present: true,
    goodPerf: false,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '4',
    date: '25th June',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '5',
    date: '26th June',
    present: true,
    goodPerf: false,
    goodBehave: false,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '6',
    date: '27th June',
    present: false,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '7',
    date: '28th June',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '8',
    date: '29th June',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '9',
    date: '30th June',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '10',
    date: '1st July',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '11',
    date: '2nd July',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '13',
    date: '3rd July',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '14',
    date: '4th July',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }, {
    uuid: '15',
    date: '5th July',
    present: true,
    goodPerf: true,
    goodBehave: true,
    perfComment: 'fake comment',
    behaveComment: 'fake comment',
  }];
  return (
    <div className='timeline'>
      <div className='timeline--fields'>
        <div className='timeline--fields__box'>Timeline</div>
        <div className='timeline--fields__box'>Present</div>
        <div className='timeline--fields__box'>Academic Performance</div>
        <div className='timeline--fields__box'>Behavior</div>
      </div>
      <div className='timeline__calendar'>
        {timeline.map(timelineDay =>
          <TimelineDay
            key={timelineDay.uuid}
            timeline={timelineDay}
          />
        )}</div>
    </div>
  )
}

export default Timeline