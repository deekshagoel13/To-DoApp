import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Toolbar,ToolbarGroup,ToolbarSeparator} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import TodoList from './Sidebar';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
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
              <GridList cols={2} style={{display:'flex',justifyContent:'space-around',flex:1,height:650}}>
                  <GridTile  style={{width:300}}><TodoList/></GridTile>
                  <GridTile><TodoList/></GridTile>
              </GridList>
          </div>
      </MuiThemeProvider>
  );
};
export default App;