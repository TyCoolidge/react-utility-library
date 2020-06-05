import React from "react";
import "./style/master.scss"; //applies global scss styles
import { uiData } from "./data/ui";
import FunctionUi from "./components/FunctionUi";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
  constructor() {
    super();
    console.log(uiData);
    this.state = {
      //state always an object
      isFavoritesChecked: false,
      allFuncs: orderBy(uiData, "order", "desc"), // contains all data
      displayedFuncs: orderBy(uiData, "order", "desc"), //contains all data
      orderBy: '["order", "desc"]', // sets the default dropdown menu to 'Most Recent'
    };
  }
  filterFuncs(e) {
    const isFavoritesCicked = document.getElementById("viewModeFavorites")
      .checked; //grabbing user input, checks id of radio button that user clicks
    const searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    const allFuncs = [...this.state.allFuncs]; //get the copy of all of our functions; assigned to uiData; shallow copy of array
    if (isFavoritesCicked) {
      this.setState({ isFavoritesChecked: true }); //checks current state of function, then reverses it with !this
      const favoriteFuncs = allFuncs.filter((func) => {
        return func.isFavorite; // filtering out functions into new array returning all functions that are favorited
      });
      const filteredFuncs = favoriteFuncs.filter((func) => {
        return func.name.toLowerCase().indexOf(searchInput) >= 0; //TODO add comment
      });
      const orderArr = JSON.parse(this.state.orderBy);
      const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
      this.setState({ displayedFuncs: orderedFuncs }); //will display all filtered functions
    } else {
      this.setState({ isFavoritesChecked: false }); //TODO fix comment; checks current state of function, then reverses it with !this
      const filteredFuncs = allFuncs.filter((func) => {
        return func.name.toLowerCase().indexOf(searchInput) >= 0; //TODO whatever is typed, is filtered and returns similar functions that include user input
      });
      const orderArr = JSON.parse(this.state.orderBy);
      const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
      this.setState({ displayedFuncs: orderedFuncs }); //else will display all functions without filter
    }
  }

  changeOrder(e) {
    //"e" is synthetic event
    this.setState({ orderBy: e.target.value }, () => {
      this.filterFuncs();
    });
  }

  render() {
    //returns components to user (what we see on site)
    const getFunctionSum = () => {
      return uiData.length; //takes the length of all of our libraries
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <h1 className="d-flex justify-content-center">
              JavaScript Utility Library
            </h1>
            <p className="text-center lead mb-4">
              {getFunctionSum()}&nbsp;functions documented
              {/* we call the getFunctionSUm function with parenteses */}
            </p>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="viewModeAll"
                name="viewMode"
                className="custom-control-input"
                checked={!this.state.isFavoritesChecked} //takes the oppposite of isfavoriteschecked which is false, and assigns it to true.
                onChange={(e) => {
                  this.filterFuncs(e); //in the event that the user clicks the show all button, the result will show all funcs
                }}
              />
              {/* react expects closing tag after input */}
              <label className="custom-control-label" htmlFor="viewModeAll">
                Show all
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="viewModeFavorites"
                name="viewMode"
                className="custom-control-input"
                checked={this.state.isFavoritesChecked} //not checked by default
                onChange={(e) => {
                  //e = event
                  this.filterFuncs(e); //in the event that show favorites button is clicked, result will return all favorited funcs
                }}
              />
              <label
                className="custom-control-label"
                htmlFor="viewModeFavorites"
              >
                Favorites
              </label>
            </div>
            <div className="row mt-3 ">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search all functions"
                  aria-label="Search all functions"
                  aria-describedby="basic-addon2"
                  id="search-input"
                  onChange={(e) => this.filterFuncs(e)}
                />
              </div>
              <div className="col-6">
                <select
                  value={this.state.orderBy}
                  className="form-control"
                  onChange={(e) => this.changeOrder(e)}
                >
                  <option value='["order", "desc"]'>Most Recent</option>
                  <option value='["order", "asc"]'>Oldest</option>
                  <option value='["name", "asc"]'>A-Z</option>
                  <option value='["name","desc"]'>Z-A</option>
                </select>
              </div>
            </div>
          </div>

          {this.state.displayedFuncs.map((functionUi) => {
            //creates new array with the results of calling the functionUI
            const { name, desc, inputs } = functionUi; //destructuring
            return (
              <FunctionUi key={name} name={name} desc={desc} inputs={inputs} />
            );
          })}
        </div>
      </div>
    );
  }
}
