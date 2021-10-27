import React, { Component } from 'react'

export default class ChildComponent extends React.Component {
    render() {
        console.log("This is a render method in Child component")
        return (
            <div>
                <p>This is the child component</p>
            </div>
        )
    }
}
