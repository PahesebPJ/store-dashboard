import { useContext } from "react";
import { ContentProvider } from "../context/ContentProvider";

const useContent = () => {
    return useContext(ContentProvider);
}

export default useContent;