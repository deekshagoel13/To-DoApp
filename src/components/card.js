import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';
import AllIcon from 'material-ui/svg-icons/navigation/menu';
import Checkbox from 'material-ui/Checkbox';
import {List,ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const styles={
    list:{
        width:400
    },
    root:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    listitem:{
        backgroundColor:'none',
    }
};
const colors= {
    Todo: '#caf433',
    Doing:'#60ba00'
};
const Listmenu=(props)=>{
    return(
        <IconMenu
            {...props}
            iconButtonElement={
                <IconButton style={{padding:'0px'}}><AllIcon/></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Edit" />
            <MenuItem primaryText="Delete" />
            <MenuItem primaryText="Stop" />
        </IconMenu>
    )
}
const Lst=()=>{
    return(
        <List style={styles.root}>
            <ListItem style={styles.root}>
                <IconMenu
                    style={styles.root}
                    iconButtonElement={
                        <IconButton style={{padding:'0px'}}><AllIcon/></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Edit" />
                    <MenuItem primaryText="Delete" />
                    <MenuItem primaryText="Stop" />
                </IconMenu>
            </ListItem>
            <ListItem style={styles.listitem}><Checkbox/></ListItem>
            <ListItem style={styles.listitem}><Checkbox
                checkedIcon={<Star/>}
                uncheckedIcon={<StarBorder/>}
            /></ListItem>
        </List>
    )
}
class card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    title:'Reading',
                    description:'Read about React Router Redux.',
                    label:'Todo',
                    starred:true
                },
                {
                    title:'Prepare a Chart',
                    description:`Prepare a Chart using react-easychart.
                    It should be created on current time and date.`,
                    label:'Doing',
                    starred:true
                }
            ]

        }
    }
    render() {

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Card>
                    <CardHeader>
                        <div style={styles.root}>
                            <Lst/>
                        <Card zDepth={0}>
                            <CardHeader
                                actAsExpander={true}
                                title={this.state.data[0].title}
                                subtitle={<div style={{backgroundColor:colors[this.state.data[0].label],
                                        width:60
                                }}>
                                        {this.state.data[0].label}
                                    </div>
                                }
                            />
                            <CardText expandable={true}>
                                <div>
                                    {this.state.data[0].description}
                                </div>
                            </CardText>
                        </Card>
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <div style={styles.root}>
                            <Lst/>
                            <Card zDepth={0}>
                                <CardHeader
                                    actAsExpander={true}
                                    title={this.state.data[1].title}
                                    subtitle={<div style={{backgroundColor:colors[this.state.data[1].label],
                                        width:60
                                    }}>
                                        {this.state.data[1].label}
                                    </div>
                                    }
                                />
                                <CardText expandable={true}>
                                    <div>
                                        {this.state.data[1].description}
                                    </div>
                                </CardText>
                            </Card>
                        </div>
                    </CardHeader>
                </Card>
            </MuiThemeProvider>
        );
    };
}
export default card;