import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteSkywalker } from '../reducers/skywalkersActions'
import { Button } from 'semantic-ui-react'

class Skywalker extends Component {


    handleDeleteSkywalker = (e) => {
        e.preventDefault();
        this.props.deleteSkywalker(this.props.list[this.props.match.params.id].name);
        this.props.history.push('/123softlab/');
    }

    handleBack = (e) => {
        e.preventDefault();
        this.props.history.push('/123softlab/');
    }

  render() {

    const skywalker = this.props.list[this.props.match.params.id];

    return ( 
      <div className={"skywalkerContainer"}>
      <div className={"detailsContainer"}>
      <div>
        <p>Name: <span>{skywalker.name}</span></p>
        <p>Gender: <span>{skywalker.gender}</span></p>
        <p>Birth Year: <span>{skywalker.birth_year}</span></p>
        <p>Height: <span>{skywalker.height}</span></p>
       </div>
       <div>
        <p>Mass: <span>{skywalker.mass}</span></p>
        <p>Hair Color: <span>{skywalker.hair_color}</span></p>
        <p>Skin Color: <span>{skywalker.skin_color}</span></p>
        <p>Eye color: <span>{skywalker.eye_color}</span></p>
       </div>  
      </div>
       <div className={"buttonsContainer"}>
        <Button onClick={this.handleBack} inverted color="green">Back to Skywalkers family members</Button>
        <Button onClick={this.handleDeleteSkywalker} inverted color="red">Delete {skywalker.name}</Button>
       </div>
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
        deleteSkywalker: (name) => dispatch(deleteSkywalker(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Skywalker)
