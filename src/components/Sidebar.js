import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List,ListItem} from 'material-ui/List';

const TodoList=()=>{
    return(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <List>
                <ListItem primaryText="Inbox"  />
                <ListItem primaryText="Starred"  />
                <ListItem primaryText="Sent mail"  />
                <ListItem primaryText="Drafts"  />
                <ListItem primaryText="Inbox"  />
            </List>
        </MuiThemeProvider>
    );
};
export default TodoList;