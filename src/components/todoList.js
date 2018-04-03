import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List,ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import AllIcon from 'material-ui/svg-icons/navigation/menu';
import Checkbox from 'material-ui/Checkbox';
import Card from './card';

const styles={
    list:{
        width:800
    },
    root:{
        display: 'flex',
        flexWrap: 'wrap',
    }
}
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            starred:false
        }
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div style={styles.list}>
                    <List>
                        <ListItem
                            leftCheckbox={<Checkbox/>}
                            primaryText={'None'}
                        />
                    </List>
                    <Divider/>
                    <Card/>
                </div>
            </MuiThemeProvider>
        );
    };
}
export default TodoList;