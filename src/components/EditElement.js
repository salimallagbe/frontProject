import React from 'react'
import {

    From,
    FromGroup,
    Label,
    Input,
    Button,
    img

} from 'reactstrap'

export const EditElement = () => {
    return (
        <div>
                <div class="container">
        <div class="row">
            <div class="col-md-50 offset-md-50">
                <div class="card">
                    <div class="card-header">
                        <h1>Edit Cabane</h1>
                    </div>
                    <div class="card-body">
                          

                        <form method="POST" action="" enctype="multipart/form-data">
                          
                            <div class="form-group">
                                <label for="">Nom de Cabane</label>
                                <input type="text" name="name" class="form-control"/>
                            </div><br/>


                            <div class="form-group">
                                <label for="type">Categorie de la Cabane</label>
                                <input type="number" name="price" class="form-control"/>
                            </div><br/>

                            <div class="form-group">
                                <label for="type">Date de disponibilité</label>
                                <input type="number" name="price" class="form-control"/>
                            </div><br/>

                            <div class="form-group">
                                <label for="">Nom du propriétaire</label>
                                <input type="text" name="name" class="form-control"/>
                            </div><br/>

                            <div class="form-group">
                                    <label for="type">Inserez une photo</label>
                                    <input type="file" name="file" class="form-control" onchange="previewFile(this)"/>
                                    <img id="previewImg"  />
                            </div> <br/>

                            <div class="form-group">
                                <label for="">Prix par nuit</label>
                                <input type="text" name="name" class="form-control"/>
                            </div><br/>

                            <div class="form-group">
                                    <label for="name">Description</label><br/>
                                    <textarea  name="description"
                                    rows="5" cols="33"></textarea>                                
                                </div>



                            

                            <button type="submit" class="btn btn-danger">modifier les information de la cabane cabane</button><br/><br/>

                            <a href="/home"class="btn btn-dark">Back</a>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  

        </div>
    )
}
