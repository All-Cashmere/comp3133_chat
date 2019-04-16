import React, { Component } from 'react';
import EventTable from './AdminEventTable'
import HistoryTable from './AdminHistoryTable'
import RoomsTable from './AdminRoomsTable'


class Admin extends Component {
constructor(props){
    super(props)
    this.click1Event=this.click1Event.bind(this)
    this.click1History=this.click1History.bind(this)
    this.click1Rooms=this.click1Rooms.bind(this)
    this.state={
        eventTable:'',
        eventShow:false,
        historyTable:'',
        historyShow:false,
        roomsTable:'',
        roomsShow:false

    }
}     

click1Event(){
this.setState({eventShow:true, eventTable:<EventTable/>, historyShow:false, roomsShow:false, roomsTable:'', historyTable:''})
}
click1History(){
this.setState({eventShow:false, eventTable:'', historyShow:true, roomsShow:false, roomsTable:'', historyTable:<HistoryTable/>})
}
click1Rooms(){
this.setState({eventShow:false, eventTable:'', historyShow:false, roomsShow:true, roomsTable:<RoomsTable/>, historyTable:''})
}

	render() {
        const {eventTable, roomsTable,historyTable}= this.state

		return (
            <div>
                <button onClick={this.click1Event}>Event Table</button>
              
                
                <button onClick={this.click1History}>History Table</button>
                
                
                <button onClick={this.click1Rooms}>Rooms Table</button>
                {roomsTable}{historyTable}{eventTable}
                
               
            </div>
		);
	}
}
export default Admin;