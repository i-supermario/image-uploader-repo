import { render } from "react-dom";
import Container from "./container";

export default function Loader(props){
    return(
            <Container display={props.display} width='300px' height='100px' padding='1rem' content={
                <>
                    <span className='font-medium text-xl text-gray-700 text-left'> Uploading...</span>
                    <div id="inner" className="bg-blue-500 rounded-2xl h-3" style={{width: `${props.progress}%`}} >&nbsp;</div>
                </>
            } />
                
    )

}