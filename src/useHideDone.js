import { useState } from "react";

export const useHideDone = () => {

    const [hideDone, setHideDone] = useState(false);
    
    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);
    };

    return {
        hideDone,
        toggleHideDone
    };
  
};