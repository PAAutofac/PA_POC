import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';
import PolicyIcon from '@material-ui/icons/Policy';
import SecurityIcon from '@material-ui/icons/Security';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import { Agency } from './Agency';
import { Claims } from './Claims';
import { Security } from './Security';
import { PolicyAdministration } from './PolicyAdministration';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Layout(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {
                    <ListItem button key={'Home'} component={Link} to='/home' >
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                }
                {
                    <ListItem button key={'Agency'} component={Link} to='/agency'>
                        <ListItemIcon>{<PolicyIcon />}</ListItemIcon>
                        <ListItemText primary={'Agency'} />
                    </ListItem>
                }
                {
                    <ListItem button key={'Claims'} component={Link} to='/claims'>
                        <ListItemIcon>{<FindInPageIcon />}</ListItemIcon>
                        <ListItemText primary={'Claims'} />
                    </ListItem>
                }

            </List>
            <Divider />
            <List>
            {
                <ListItem button key={'Security'} component={Link} to='/security'>
                    <ListItemIcon>{<SecurityIcon />}</ListItemIcon>
                    <ListItemText primary={'Security'} />
                </ListItem>
            }
            {
                <ListItem button key={'Policy Administration'} component={Link} to='/policyAdministration'>
                    <ListItemIcon>{<SupervisorAccountIcon />}</ListItemIcon>
                    <ListItemText primary={'Policy Administration'} />
                </ListItem>
            }
            </List>
        </div>
    );

    return (
        <Router>
            <div className={classes.root} >
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} style={{ background: '#78a02e' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" noWrap style={{ color: 'black' }}>
                            NaturalONE UAT
          </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/agency">
                            <Agency />
                        </Route>
                        <Route path="/claims">
                            <Claims />
                        </Route>
                        <Route path="/security">
                        <Security />
                    </Route>
                    <Route path="/policyAdministration">
                    <PolicyAdministration />
                </Route>
                        <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

Layout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};

export default Layout;
