import React, { Component } from 'react';

import '../App.css';

import $ from 'jquery';
import Nav from './Nav'




class Datatable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            products: []
        };
    }


    componentDidMount() {
        this.serverRequest = $.get("http://localhost/backend_studienarbeit/db_todo.php", function (list) {

            console.log(list);
            this.setState({
                products: list
            });
            console.log(this.state.products)
        }.bind(this));


    }


    render() {
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');
        return (





                <div className="table-responsive-vertical shadow-z-1">

                    <Nav/>
                    <div className='overflow-hidden'>

                    </div>
                    <table id="table" className="table table-hover table-mc-light-blue">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Beschreibung</th>

                        </tr>
                        </thead>
                        <tbody >
                        {this.state.products.map(post =>  <tr >
                         <td data-title="ID">
                           {post.todo_id}
                       </td>
                        <td data-title="title">  {post.title}</td>
                        <td data-title="Beschreibung">
                            {post.description}
                        </td>
                        <td></td>
                        </tr>)}

                    </tbody>
                </table>

            </div>




        );
    }
}

export default Datatable;
