import * as React from 'react';
import styles from './filterSection.module.scss';
import { connect } from 'react-redux';
import { fetchCalendar } from '../../reducers/calendarReducer';
import { IStore } from '../../reducers/index';

export interface IProps {
}

export interface IOwnProps {}

export interface IStateProps {
    fetchCalendar: () => void
}

export interface IState {
    
}
 
class FilterSection extends React.Component<IOwnProps & IStateProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
            <section className={styles.filterSection}>
                <div className={styles.allBooks}>
                    <h1 onClick={() => this.getBooks()}>All Events</h1>
                </div>
            </section>
         );
    }

    private getBooks = () => {
        this.props.fetchCalendar();
    };
}
 

const mapStateToProps = (state:IStore, props?:IOwnProps) => {
    return {
        ...props
    }
}

const mapDispatchToProps = { fetchCalendar };

export default connect(
    mapStateToProps,
    mapDispatchToProps) 
(FilterSection);