import React, { Component } from 'react';
import { ConfigWeb } from '../Config'

export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
            events: [],
            groomInfo: [],
            timer: null,
            currentIndex: 0,
            // showTokenFetchDialog: false,
            // showErrorDialog: false,
        }
        // this.next = this.next.bind(this)
        // this.prev = this.prev.bind(this)
        // this.prev = this.prev.bind(this)
    }
  
    componentDidMount() {
      this.getGroomInfo();
    //   this.getEvents();
    //   this.startSlide();
    }

    getGroomInfo() {
        // this.setState({ showTokenFetchDialog: true });
        fetch(
            ConfigWeb.WEB_URL + 'home',
          {
            // method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              // 'Authorization': 'Basic ' + Base64.btoa('apiuser@gmail.com' +':'+ 'apiuser@gmail.com')
              // 'Authorization': 'Basic ' + Buffer.from('apiuser@gmail.com' +':'+ 'apiuser@gmail.com').toString('base64') 
            },
          })
          .then(res => res.json())
          .then(datas => {
            // alert(JSON.stringify(datas));
            // alert(JSON.stringify(datas.groomInfo));
            // this.setState({ showTokenFetchDialog: false });
            this.setState({ 
                
                isLoading: false,
                groomInfo: datas.groomInfo, 
            });
            // alert()
            // this.itemLength()
          })
          .catch((error) => {
            // this.setState({ showTokenFetchDialog: false });
            // this.setState({ showErrorDialog: true });
            console.error(error);
          });
    
        // this.setState({showConnectionProgressDialog: true})
      }

  render() {
    return (
      <div> 
           { this.state.isLoading ? <h1>Loading...</h1>
           : <h1 style={{ textAlign: 'center', color: 'red' }}>{this.state.groomInfo.first_name}</h1>}
      </div>
    );
  }
}
