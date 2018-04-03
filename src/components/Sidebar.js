import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import StarBorder from 'material-ui/svg-icons/toggle/star';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import DoneIcon from 'material-ui/svg-icons/action/done';
import PauseIcon from 'material-ui/svg-icons/av/pause-circle-outline';
import Subheader from 'material-ui/Subheader';
import TodayIcon from 'material-ui/svg-icons/action/today';
import Drawer from 'material-ui/Drawer';
import AllIcon from 'material-ui/svg-icons/navigation/menu';
import Task from './task';

const styles={
    list:{
        width:400
    },
    root:{
        overflow:'auto',
        borderRight: '5px solid #ddd',
        borderBottom: '1px solid gray',
        paddingLeft:5
    }
};
class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    handleToggle=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div style={styles.root}>
                    <List style={styles.list}>
                        <ListItem style={{backgroundColor: 'none'}}>
                            <RaisedButton label={'Add Task'} fullWidth={true}
                                onClick={this.handleToggle}
                            />
                            <Drawer width={500} openSecondary={true} open={this.state.open}>
                                <Task/>
                            </Drawer>
                        </ListItem>
                        <ListItem primaryText="All" leftIcon={<AllIcon/>}/>
                    </List>
                    <Divider/>
                    <List style={styles.list}>
                        <Subheader>Filters</Subheader>
                        <ListItem primaryText="Starred" leftIcon={<StarBorder/>}/>
                        <ListItem primaryText="Deleted" leftIcon={<DeleteIcon/>}/>
                        <ListItem primaryText="Done" leftIcon={<DoneIcon/>}/>
                        <ListItem primaryText="Today" leftIcon={<TodayIcon/>}/>
                        <ListItem primaryText="Paused" leftIcon={<PauseIcon/>}/>
                    </List>
                </div>
            </MuiThemeProvider>
        );
    };
}
export default SideBar;