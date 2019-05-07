import * as React from 'react';
import styles from './calendarEventContainer.module.scss';
import NavigationBar from '../components/navBar/navBar';
import FilterSection from '../components/filterSection/filterSection';
import CalendarEvent from '../components/calendarEvent/calendarEvent';
import { connect } from 'react-redux';
import { fetchCalendar, ICalendarEvents } from '../reducers/calendarReducer';
import { IStore } from '../reducers/index';


export interface IOwnProps {
    
}

export interface IStateProps {
    calendarEvents: ICalendarEvents[];
    fetchCalendar: () => void
}

export interface IState {
    calendarEvents: ICalendarEvents[];
}
 
class CalendarEventContainer extends React.Component<IOwnProps & IStateProps, IState> {
   public state = {
       calendarEvents: []
   }


    public componentDidUpdate(prevProps: IStateProps & IOwnProps) {
        if (prevProps !== this.props) {
            this.setState({
                calendarEvents: this.props.calendarEvents
            })};
    }


    public render() { 
        return ( 
            <div>
                <NavigationBar />
                <FilterSection />
                <section className={styles.eventSection}>
                    {this.props.calendarEvents.map((event, index) => (
                        <CalendarEvent key={index} event={event} />
                    )) }
                </section>
            </div>
         );
    }

}


const mapStateToProps = (state:IStore, props?:IOwnProps) => {
    return {
        calendarEvents: state.calendar.calendarEvents,
        ...props
    }
}


const mapDispatchToProps = { fetchCalendar };

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(CalendarEventContainer);