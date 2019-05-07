import * as React from 'react';
import styles from './calendarEvent.module.scss';
import { ICalendarEvents } from '../../reducers/calendarReducer';

export interface IProps {
    event: ICalendarEvents[];
}
 
export interface IState {
    
}
 
class CalendarEvent extends React.Component<IProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
            <article className={styles.event}>
                <h1>Title:</h1>
                <h2>Description - </h2>
                <h2>Start Date and Time:</h2>
                <h2>End Date and time: </h2>
            </article>
         );
    }
}
 
export default CalendarEvent;