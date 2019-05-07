import * as React from 'react';
import styles from './navBar.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class NavigationBar extends React.Component<IProps, IState> {
    // state = { :  }
    public render() { 
        return ( 
            <nav className={styles.navigationBar}>
                <h1 className={styles.header}>Interpretive Dance Institute Enthusiast - Calendar</h1>
            </nav>
         );
    }
}
 
export default NavigationBar; 