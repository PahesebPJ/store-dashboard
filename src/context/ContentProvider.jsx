import { createContext, useState } from "react";
import configTables from "../config/configTables";

const ContentContext = createContext({});

export const ContentProvider = ({children}) => {
    const [content, setContent] = useState(configTables[0]);

    return (
        <ContentContext.Provider value={{content,setContent}}>
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContext;