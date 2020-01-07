import React from 'react'
import { Link } from "react-router-dom";

const CreateButtom = ()  => {
    return (
        <React.Fragment>
            <Link to = "/addItem" className = "btn btn-lg btn-info">
                Add to shopping cart
            </Link>
        </React.Fragment>

    )
}
export default CreateButtom;
