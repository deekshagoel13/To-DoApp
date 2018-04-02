import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';

const colors=['Red','Yellow','Orange','Green']

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            <AppBar title='To-Do'
                    iconElementLeft={<IconButton><NavigationClose/></IconButton>}
                    iconElementRight={<IconButton><Logged/></IconButton>}
                    zDepth={1}
            />
            <div>
            <AutoComplete
                name={'ok'}
                floatingLabelText="Type 'r', case insensitive"
                filter={AutoComplete.caseInsensitiveFilter}
                hintText={'Type Anything'}
                dataSource={colors}

            />
            </div>
        </div>
    </MuiThemeProvider>
);
export default Main;

