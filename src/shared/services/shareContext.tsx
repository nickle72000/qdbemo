import React, { createContext, useState } from 'react';
import { Blogdata } from "./interface"
interface blogDataContext {
    blogData: any;
    setBlogData: React.Dispatch<React.SetStateAction<any>>;
}
export const blogDataContext = createContext<blogDataContext>({blogData: null, setBlogData: ()=>{}})

export const BlogDataProvider: React.FC<{children: React.ReactNode}> = ({ children}) => {
    const [blogData, setBlogData] = useState<any>(null)
    return (<blogDataContext.Provider value={{blogData, setBlogData}}>{children}</blogDataContext.Provider>);
}