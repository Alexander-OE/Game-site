import { CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
    return ( <div className="flex flex-col items-center mt-[20rem]">
        <CircularProgress size={40}/>
    </div> );
}
 
export default LoadingSpinner;