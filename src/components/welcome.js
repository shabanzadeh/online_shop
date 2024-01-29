import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Welcome=()=>{
    return(
        <div className="container">
            <div className="bg-primary text-withe my-3">
                <FontAwesomeIcon
                icon={faClose}
                style={{ float: "right", margin:"5px"}}
                />
                <div className="p-4">welcome</div>

            </div>

        </div>
    )

}

export default Welcome