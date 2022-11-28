import { useEffect, useState, useRef } from "react";

export default function useObserver(options){

    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);

    const observer = useRef(new IntersectionObserver((observedEntries)=>{
        console.log(observedEntries)
        setEntries(observedEntries)
    }, options));

    useEffect(()=>{
        const currentObserver = observer.current;
        currentObserver.disconnect();
        if(elements.lenght > 0){
            elements.forEach(element => currentObserver.observe(element))
        }
        return function cleanUp(){
            if(currentObserver){
                currentObserver.disconnect(); 
            }
        }
    }, [elements])

    // observer.current.observe()


    return [observer.current, setElements, entries]

}