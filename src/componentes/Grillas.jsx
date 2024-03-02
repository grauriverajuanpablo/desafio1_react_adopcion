import MyCards from "./MyCards";
const Grillas =()=>{

    return(
        <div className="container">
        <div className="row">
            <div className="col-md-3">
                <MyCards
                image="https://placedog.net/300/300/sepia?id=195"
                name="Canito"
                descripcion="raza indefinida, es muy  miedoso requiere de mucho cariño"
                color = 'success'
                propietario ='Marcelo'
                />

            </div>

            <div className="col-md-3">
                <MyCards
                image="https://placedog.net/300/300/sepia?id=61"
                name="canela"
                descripcion="salchicha este hermoso perrito es muy cariñoso y regalon"
                color = 'danger'
                propietario ='Juan'
                />

            </div>


            <div className="col-md-3">
                <MyCards
                image="https://placedog.net/300/300/sepia?id=49"
                name="cotito"
                descripcion="raza fox terrier con muchas ganas de ser adoptado"
                color = 'primary'
                propietario ='Pablo'
                />

            </div>

            <div className="col-md-3">
                <MyCards
                image="https://placedog.net/300/300/sepia?id=62"
                name="Rambo"
                descripcion="hermoso pastor aleman, muy inteligente y simpatico"
                color = 'primary'
                propietario ='Pablo'
                />

            </div>

        </div>

        </div>
    )


}

export default Grillas;