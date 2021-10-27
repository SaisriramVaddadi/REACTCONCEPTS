// import React, { Component } from 'react'

// export default class Stopwatch extends Component {
//     constructor(){
//         super();
//         this.state={
//             initialTimer: new Date(),
//             timer: new Date(0)
//         }
//     }
//     startTimer(){
//         setInterval(()=>{
//             this.setState({timer:})
//         },1000)
//     }
//     render() {
//         const myStyle = {
//             display:'flex',
//             alignItems:'center',
//             justifyContent:'center'
//         }
//         const timerStyle = {
//             margin:'20px 20px'
//         }
//         return (
//             <div>
//                 <div className="timerblock" style={myStyle}>
//                         <button onClick={this.startTimer}>Start</button>
//                         <h2 style={timerStyle}>{this.state.timer.toLocaleTimeString()}</h2>
//                         <button onClick={this.pauseTimer}>Pause</button>
//                     </div>
//                 <button onClick={this.stopTimer}>Reset</button>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'

export default class StopWatch extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

