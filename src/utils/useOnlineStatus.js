import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    //check online or offline
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });
    }, []);
    return onlineStatus;
};

export default useOnlineStatus;