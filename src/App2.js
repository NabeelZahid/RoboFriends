import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots'; //desutructed as export can have multiple variables / arrays, so not default which returns 1

// PROPS never change, just passed down 1 way data flow. STATE is an object which describes the application, which can change able to pass data up to parent
// Parent feeds STATE into child component, receiving the properties
// SearchBox and CardList need to communicate to be able to search/filter so STATE is used.

// const state = {
//     robots2: robots,
//     searchfield: ''
// }

// const App2 = () => {
class App2 extends Component { //To use state, change to class with a render()
    constructor() { //constructor to declare state
        super() // calls constructor of super which is Component
        this.state = { //These are the things which can change, which lives in the parent component
            // robots2: robots, use empty array rather than using robots file with static array, using API now
            robots2: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        // console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users') // API to retrieve users
            // .then(response=> { return response.json() })
            // .then(users => { this.setState({ robots2: users }) })

            .then(response => response.json())
            .then(users => { this.setState({ robots2: users }) });

        // this.setState({ robots2: robots })
    }

    onSearchChangeFunction = (event) => { //Function for whenever search changes, log it
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value }) //To set the state, this format is used as its an object, not this.state.searchfield = value
        // const filteredRobots = this.state.robots2.filter(eachRobot => {
        //     return eachRobot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filteredRobots);
    }
    render() {
        const { robots2, searchfield } = this.state;
        const filteredRobots = robots2.filter(eachRobot => {
            return eachRobot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // if (robots2.length === 0) {
        // if (!robots2.length) {
        // return <h1>Loading</h1>
        // } else {
        //     return (
        return !robots2.length ?
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1 fw4 ttu tracked">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChangeFunction} />
                    {/* <CardList robots2={robots} /> */}
                    {/* <CardList robots2={this.state.robots2} /> { /* Now robots array can be accessed from state. Now the robots2 from state is passed down as props into CardList */}
                    <Scroll> { /* CHILDREN - Scroll component to allow search box to be usable when you scroll down page, wrapping another component  */}
                        <CardList robots2={filteredRobots} /> { /* Can now pass filteredRobots array which will display them */}
                    </Scroll>
                </div>
            );
    }
}

export default App2;



// --------- Lifecycle Hooks (Part of React) ----------
// Mounting = component replaces the root div in html, adding the entire app in there. Mounting is the start of the app.
// When mounting, these lifecycle hooks are hit in order : constructor(), componentWillMount(), render(), componentDidMount()
// E.g. "Does app have constructor(), if yes run code inside it, if not then ignore it and go to the next hook.. etc"

// Updating = Whenever an update is caused by changes to props or state, these methods called when a component is being re-rendered : 
// componentWillReceiveProps(), shouldComponentUpdate(), render(), componentDidUpdate()
// E.g. whenever typing in the search box, the card list component gets re-rendered.

// Unmounting = When component is removed from page