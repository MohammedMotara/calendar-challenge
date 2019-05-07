import * as React from 'react';
import styles from './calendarEvent.module.scss';
import { ICalendarEvents } from '../../reducers/calendarReducer';

export interface IProps {
    event: ICalendarEvents;
}
 
export interface IState {
    
}
 
class CalendarEvent extends React.Component<IProps, IState> {
    public render() { 
        return ( 
            <article className={styles.event}>
                <h1>Title:{this.props.event.items.id}</h1>
                <h2>Description - {this.props.event.items.summary} </h2>
                <h2>Start Date and Time:{this.props.event.items.start}</h2>
                <h2>End Date and time: {this.props.event.items.end} </h2>
            </article>
         );
    }
}

 
export default CalendarEvent;