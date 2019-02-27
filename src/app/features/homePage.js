import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkywalkers } from '../reducers/skywalkersActions'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Loader from 'react-loader-spinner'

class HomePage extends Component {

    componentWillMount(){
        if(!this.props.fetch || this.props.list.length===0){
            fetch('https://swapi.co/api/people/?search=Skywalker&format=json')
            .then(response => response.json())
            .then(skywalkers => {
                this.props.addSkywalkers(skywalkers);
            })
        } 
    }

  render() {
    let skyList;
    if(this.props.list.length>0){
        skyList = this.props.list.map((skywalker,index)=>{
            return <Button color="red" animated='fade' as={Link} to={`/123softlab/skywalker/${index}`} key={index}>
                        <Button.Content visible>{skywalker.name}</Button.Content>
                        <Button.Content hidden>Check details</Button.Content>
                     </Button>
        });
    }
    if(skyList){
        return (
            <div className={"gridContainer"}>
                {skyList}
            </div>
        )
    } else {
        return(
            <div className={"gridContainer"}>
                <Loader 
                type="Triangle"
                color="red"
                height="100"
                width="100"
                />
            </div>
            
        )  
    } 
  }
}

const mapStateToProps = (state) => {
    return {
        list: state.skywalkers.skywalkersList,
        fetch: state.skywalkers.fetched,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSkywalkers: (skywalkers) => dispatch(addSkywalkers(skywalkers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
