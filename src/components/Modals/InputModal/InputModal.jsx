import SimpleModal from "../SimpleModal/SimpleModal"
import modalDefaultStyles from "../../../config/modalDefaultStyles";

import './InputModal.css';

const InputModal = ({isOpen,setIsOpen,id}) => {
    
    let inputs = id.inputs;
    console.log(id);
    console.log(inputs);
    return (
        <SimpleModal 
            state={isOpen} 
            changeState={setIsOpen}
            closeButton={true}
        >
            {
                id.name === "Product" || id.name === "User" ? 
                <div className="create-product-user-container">
                    <div className="create-product-user-header">
                        <h1>Add new {id.name}</h1>
                    </div>
                    <div className="product-user-section">
                    <form action="">
                        <div class="input-file-container">  
                            <input type="file" class="input-file" />
                        </div>
                    </form>
                        <div className="inputs">
                            <form className="form-input-modal">
                                {
                                    inputs.map(input => {
                                        return(
                                            <>
                                                <label htmlFor={input.id} key={input.id}>{input.label}</label>
                                                <input 
                                                    type={input.type} 
                                                    autoComplete="off"
                                                    id={input.id}
                                                    placeholder={input.placeholder}
                                                    key={input.id}
                                                />
                                            </>
                                        )
                                    })
                                }
                                <button className="send-button-create">Send</button>
                            </form>
                        </div>
                        </div>
                    
                </div> : 
                
                <h2>Nooo</h2>
            }
            
        </SimpleModal>
    )
}

export default InputModal