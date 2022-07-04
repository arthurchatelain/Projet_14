/**
 * Return a modal component.
 * @prop {string} text - the text to print in the modal
 * @prop {func} CrossOnClick - Function to call when the user click on the modal's cross
 */

export default function Modal (props) {
    return (
        <div className="CreationModal">
            <div className="CreationModalText">
                <p>{props.text}</p>
                <div className="crossContainer">
                    <svg onClick={() => props.CrossOnClick()} version="1.1" id="Layer_2" x="0px" y="0px" viewBox="0 0 16 16" enableBackground="new 0 0 16 16"><polygon fill="#FFFFFF" points="12.7,4.7 11.3,3.3 8,6.6 4.7,3.3 3.3,4.7 6.6,8 3.3,11.3 4.7,12.7 8,9.4 11.3,12.7 12.7,11.3 9.4,8   "/></svg>
                </div>
            </div>
        </div>
    )
} 