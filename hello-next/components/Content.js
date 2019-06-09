import React, { Component } from 'react'
import AppartementList from './AppartementList'
import Searchbar from './SearchBar'
import { config } from './config'

import "../css/style.css";

class App extends Component {
  state = {
    showAll: false,
    searchValue: '',
    isLoading: false,
    appartements: [],
    favorites: [],
  }
  
  async componentWillMount() {
    this.setState({
      isLoading: true
    })
    const apiUrl = config.apiUrl
    const req = await fetch(apiUrl)
    const appartements = await req.json()
    this.setState({
      isLoading: false,
      appartements
    })
  }
  toggleShow = () => {
    this.setState({
      showAll: !this.state.showAll
    })
  }
  handleInputText = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  toggleFavorite = (e, id) => {
    const favs = this.state.favorites
    if (favs.includes(id)) {
      const index = favs.indexOf(id)
      favs.splice(index, 1)
      this.setState({
        favorites: favs
      })
    } else {
      favs.push(id)
      this.setState({
        favorites: favs
      })
    }
  }
  render () {
    const { showAll, searchValue, isLoading, appartements, favorites } = this.state

    const filteredAppartements = appartements.filter(el => el.title.rendered.toLowerCase().includes(searchValue))
    const availableAppartements = showAll ? filteredAppartements : filteredAppartements.filter(el => {
      if (el.acf.available) {
        return el
      } else {
        return false
      }
    })
    return (
      <div>
        <h1>Appartment List</h1>

        <div className="flex">
            <button className="showAll" onClick={this.toggleShow}>
            {showAll ? 'Show only available' : 'ShowAll'}
            </button>
        </div>

        <Searchbar
          searchValue={searchValue}
          handleInputText={this.handleInputText}
          found={availableAppartements.length}
          total={appartements.length}
          />
        {isLoading ?
          <p className="loading">Loading ...</p>
          :
          <AppartementList
            appartements={availableAppartements}
            favorites={favorites}
            toggleFav={this.toggleFavorite}
          />
        }
      </div>
    )
  }
}

export default App