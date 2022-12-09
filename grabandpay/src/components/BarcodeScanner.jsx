import React, { Component } from 'react'
import Scanner from './Scanner'
import {TextareaAutosize, Paper} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";

class BarcodeScanner extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  render() {
    return (
      <div>
        <Link to="/add">
            <ArrowBack/>
        </Link>
        
        <Paper variant="outlined" style={{marginTop:30, width:640, height:320}}>
          <Scanner onDetected={this._onDetected} />
        </Paper>

        <TextareaAutosize
            style={{fontSize:15, width:300, height:50, marginTop:30}}
            maxRows={10}
            defaultValue={'No item scanned'}
            value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />

      </div>
    )
  }
}

export default BarcodeScanner