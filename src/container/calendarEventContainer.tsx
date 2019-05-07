import * as React from 'react';
import styles from './calendarEventContainer.module.scss';
import NavigationBar from '../components/navBar/navBar';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class CalendarEventContainer extends React.Component<IProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
            <div>
                <NavigationBar />
                <section className={styles.eventContainer} />
            </div>
         );
    }
}
 
export default CalendarEventContainer;