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
        <h1>Name: {skywalker.name}</h1>
        <h3>Height: {skywalker.height}</h3>
        <h3>Mass: {skywalker.mass}</h3>
        <h3>Hair Color: {skywalker.hair_color}</h3>
        <h3>Skin Color: {skywalker.skin_color}</h3>
        <h3>Eye color: {skywalker.eye_color}</h3>
        <h3>Birth Year: {skywalker.birth_year}</h3>
        <h3>Gender: {skywalker.gender}</h3>
        <h3 className={"btnMargin"}>Amount of films: {skywalker.films.length}</h3>
        <div>
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
