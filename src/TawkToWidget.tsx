import { useEffect } from "react";

const TawkToWidget = () => {
    useEffect(() => {
        if (typeof document === "undefined") return;

        if (document.getElementById("tawk-script")) return;

        const script = document.createElement("script");
        script.id = "tawk-script";
        script.async = true;
        script.src = "https://embed.tawk.to/67ae9dea3a842732607e95c9/1ika2afmf";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; 
};

export default TawkToWidget; 
