import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Toolbar,ToolbarGroup,ToolbarSeparator} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import SideBar from './Sidebar';
import TodoList from './todoList';
import TextField from 'material-ui/TextField';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

const App=()=>{
  return(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
                <Toolbar>
                    <ToolbarGroup>
                        <Avatar src={'https://sc01.alicdn.com/kf/HTB121uLKpXXXXcFaXXXq6xXFXXXr/2016-New-fashion-frock-designs-for-small.jpg_350x350.jpg'}/>
                            Deeksha
                    </ToolbarGroup>
                    <ToolbarSeparator/>
                    <ToolbarGroup>
                        <TextField hintText={'Search Todo'}/>
                    </ToolbarGroup>
                </Toolbar>
              <div style={styles.root}>
                  <SideBar/>
                  <TodoList/>
              </div>
          </div>
      </MuiThemeProvider>
  );
};
export default App;