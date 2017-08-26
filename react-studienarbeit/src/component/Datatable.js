import React, { Component } from 'react';

import '../App.css';




class Datatable extends Component {


    render() {
        return (




                <div className="table-responsive-vertical shadow-z-1">


                    <table id="table" className="table table-hover table-mc-light-blue">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Beschreibung</th>

                        </tr>
                        </thead>
                        <tbody >
                        <tr >
                        <td data-title="ID"></td>
                        <td data-title="title"></td>
                        <td data-title="Beschreibung">

                        </td>
                        <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>




        );
    }
}

export default Datatable;
