import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class AvatarDemo extends React.Component{
    handleDelete=()=>{

    }
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Paper zDepth={2}>
                    <Chip
                        onRequestDelete={this.handleDelete}
                        tooltip={'Chip'}
                    >
                        <Avatar size={32}>A</Avatar>
                        Deletable Text Chip
                    </Chip>
                <Card zDepth={4}>
                    <CardHeader
                        actAsExpander={true}
                        showExpandableButton={false}
                        avatar={'https://sc01.alicdn.com/kf/HTB121uLKpXXXXcFaXXXq6xXFXXXr/2016-New-fashion-frock-designs-for-small.jpg_350x350.jpg'}
                    />
                    <div expandable={true}>
                    <CardMedia
                        expandable={true}
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="https://sc01.alicdn.com/kf/HTB121uLKpXXXXcFaXXXq6xXFXXXr/2016-New-fashion-frock-designs-for-small.jpg_350x350.jpg" alt="" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
            <List>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar src={'https://sc01.alicdn.com/kf/HTB121uLKpXXXXcFaXXXq6xXFXXXr/2016-New-fashion-frock-designs-for-small.jpg_350x350.jpg'}/>
                    }
                >
                    Image
                </ListItem>
            </List>
                    </div>
                </Card>
                </Paper>
            </MuiThemeProvider>
        )
    }
}
export default AvatarDemo;