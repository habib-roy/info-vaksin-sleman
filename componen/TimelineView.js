import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import HarianView from './HarianView';
import { Container } from '@material-ui/core';

export default function TimelineView({data, tanggal}) {
  return (
    <Container maxWidth="lg">
      <Timeline align="left" maxWidth="lg">
        
      {tanggal.length > 0 ? (
        tanggal.map((t, k) => (
          <TimelineItem key={k}>
            <TimelineOppositeContent style={{flex:0.01}}>
              {new Intl.DateTimeFormat('id', { day: '2-digit', month: '2-digit' }).format(new Date(t))}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <HarianView data={data} tanggal={t} />
            </TimelineContent>
          </TimelineItem>
        ))
      ) : ('')}

      </Timeline>
    </Container>
  ); 
}