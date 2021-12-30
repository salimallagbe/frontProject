import React from 'react'
import {

    From,
    FromGroup,
    Label,
    Input,
    Button,
    img,
    table,
    thead, 
    tr,
    th

} from 'reactstrap'

export const AllElement = () => {
    return (
        <div>
            <div class="container">
            <div class="row">
                
                <div class="col-md-50 offset-md-50">
                   
                        <a href="/add-article/" class="btn btn-primary">Add Medicaments</a>
                        <a href="/Home" class="btn btn-dark">Back</a>
                        </div>
                        <div class="card-body">

                            <div class="card-body">
                                 

                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Nom de Cabane</th>
                                        <th>Categorie de la Cabane</th>
                                        <th>Date de disponibilité</th>
                                        <th>Nom du propriétaire</th>
                                        <th>Photo</th>
                                        <th>Prix par nuit</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                        <tr>
                                            
                                            
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            
                                            <td> 
                                                <a href="/edit-article/{{$article->id}}" class="btn btn-info">Edit</a>
                                                <a href="/delete-article/{{$article->id}}" class="btn btn-info">Delete</a>
                                            </td>
                                        </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
       
    )
}

