import React from 'react'
import {

    From,
    FromGroup,
    Label,
    Input,
    Button,
    img

} from 'reactstrap'

export const Home = () => {
    return (

        <div>
        <div class="container" >
        <div class="row">
            <div class="col-md-50 offset-md-50" >
                <div class="card">
                    <div class="card-header" >
                        <h1>HOME</h1>
                    </div>
                    <div class="card-body">
                          

                        <form method="POST" action="" enctype="multipart/form-data">

                            <a href="/add"class="btn btn-dark">Ajouter une cabane</a><br/><br/>

                            <a href="/edit"class="btn btn-dark">Modifier une cabane</a><br/><br/>

                            <a href="/allElement"class="btn btn-dark">Acceder a la liste de scabane </a><br/><br/>

                        

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  


        </div>
    )
}
