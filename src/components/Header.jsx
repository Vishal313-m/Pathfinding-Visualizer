import React, { Component } from 'react';
import '../stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <a className='navbar-brand' href='#'>
            Pathfinding Visualizer
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <a className='nav-item nav-link about-header' href='#'>
                About{' '}
                <span className='about-desc'>
                  This application visualizes Dijkstra's Algorithm, finding the
                  shortest path between the start point and endpoint.
                </span>
              </a>
              <a className='nav-item nav-link instructions-header' href='#'>
                Instructions
                <ul className='instructions'>
                  <li>
                    Click and drag the <em>Start</em> and <em>Finish Nodes</em>{' '}
                    to reposition them.
                  </li>
                  <hr />
                  <li className='second-tooltip'>
                    Click on a single <em>Unvisited Node</em> or click and drag
                    throughout the grid to create a wall.
                  </li>
                </ul>
              </a>
              <a
                id='start-button'
                className='nav-item btn btn-success'
                href='#'
                onClick={this.props.handleStart}
                tabIndex='-1'
                aria-disabled='true'
                href='#'
              >
                Start
              </a>
              <a
                id='reset-button'
                className='nav-item nav-link'
                onClick={this.props.resetGrid}
                href='#'
                tabIndex='-1'
                aria-disabled='true'
              >
                Reset
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
