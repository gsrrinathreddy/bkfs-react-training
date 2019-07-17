import React, { Component } from 'react'

class Comp5 extends Component {
    render() {
        return (
            <div>
                I am Comp5
            </div>
        )
    }
}


class Comp6 extends Component {
    render() {
        return (
            <div>
                I am Comp6
            </div>
        )
    }
}

class Comp7 extends Component {
    render() {
        return (
            <div>
                I am Comp7
            </div>
        )
    }
}
export default class Comp8 extends Component {
    render() {
        return (
            <div>
                <Comp5/>
                <Comp6/>
               
            </div>
        )
    }
}

