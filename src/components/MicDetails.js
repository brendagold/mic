import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  list: {
      backgroundColor: '#fafafa',
      marginBottom: 3
  }
}));

const MicDetails = () => {
  const classes = useStyles();
  return (
    <Container>
        <Typography variant="h5" color="textSecondary"> Open Mic Title</Typography>
        <Typography color="textSecondary">123 Plain New York</Typography>
        <Typography color="textSecondary">12th April 2021, 14:45pm</Typography>
      <List className={classes.root}>
     
        <ListItem alignItems="flex-start" className={classes.list}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/images/record.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Micth Helddy"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  lorem ipsum
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" className={classes.list}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/images/record.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Micth Helddy"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  lorem ipsum
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" className={classes.list}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/images/record.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Micth Helddy"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  lorem ipsum
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" className={classes.list}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/images/record.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Micth Helddy"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  href="www.google.com"
                >
                  lorem ipsum
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default MicDetails;
