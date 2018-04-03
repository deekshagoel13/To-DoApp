import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Appbar from 'material-ui/AppBar';

class Task extends React.Component{
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Appbar title='Add New Task' showMenuIconButton={false}/>
                    <TextField
                        hintText={'Task Title'}
                    />
                </div>
            </MuiThemeProvider>
        );
    };
}
export default Task;