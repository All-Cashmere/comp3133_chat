import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class HistoryTable extends React.Component{

    state={
        data:[]
    }

    styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  componentDidMount(){
//get data from database here using axios
//this.setState({data:???})
  }
  render(){
      const { classes } = props;
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="right">historyID</TableCell>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Sender</TableCell>
                <TableCell align="right">Receiver</TableCell>
                <TableCell align="right">Message</TableCell>
                <TableCell align="right">Room</TableCell>    
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.historyID}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.sender}</TableCell>
                  <TableCell align="right">{row.receiver}</TableCell>
                  <TableCell align="right">{row.message}</TableCell>
                  <TableCell align="right">{row.room}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
  
  HistoryTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(HistoryTable);