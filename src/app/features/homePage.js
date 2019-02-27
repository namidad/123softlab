import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSkywalkers } from '../reducers/skywalkersActions'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class HomePage extends Component {

    componentWillMount(){
        fetch('https://swapi.co/api/people/?search=Skywalker&format=json')
        .then(response => response.json())
        .then(skywalkers => {
            this.props.addSkywalkers(skywalkers);
        })
    }

  render() {
    let skyList;
    if(this.props.list.length>0){
        skyList = this.props.list.map((skywalker,index)=>{
            return <Button color="red" animated='fade' as={Link} to={`/skywalker/${index}`} key={index}>
                        <Button.Content visible>{skywalker.name}</Button.Content>
                        <Button.Content hidden>Sprawdź szczegóły</Button.Content>
                     </Button>
        });
    }
    
    

    return (
        <div className={"gridContainer"}>
            {skyList}
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
    return {
        list: state.skywalkers.skywalkersList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSkywalkers: (skywalkers) => dispatch(addSkywalkers(skywalkers))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
