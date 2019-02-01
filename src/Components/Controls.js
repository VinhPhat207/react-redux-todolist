import React, { Component } from 'react';

// IMPORT COMPONENTS
import AddNewTask from './Controls/AddNewTask';
import InitializeData from './Controls/InitializeData';
import FilterAll from './Controls/FilterAll'
import FilterProgress from './Controls/FilterProgress';
import FilterLabel from './Controls/FilterLabel';
import FilterPriority from './Controls/FilterPriority';
import Sort from './Controls/Sort';

class Controls extends Component {
    render() {
        return (
            // Panel
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
                    <h3 className="text-white d-inline font-weight-light ml-2">
                        Lê Quang Song
                  </h3>
                </div>

                <AddNewTask />
                <InitializeData />

                {/* Filter */}
                <div className="px-3">
                    {/* Tất cả */}
                    <FilterAll />

                    {/* Filter Progress */}
                    <FilterProgress />

                    {/* Filter Label */}
                    <FilterLabel />

                    {/* Filter Priority */}
                    <FilterPriority />

                    {/* Sort */}
                    <Sort />
                </div>
            </div>
        );
    }
}

export default Controls;