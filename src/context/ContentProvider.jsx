import { createContext, useState } from "react";

const ContentContext = createContext({});

export const ContentProvider = ({children}) => {
    const [content, setContent] = useState({});

    return (
        <ContentContext.Provider value={{content,setContent}}>
            {children}
        </ContentContext.Provider>
    );
}

export default ContentContext;