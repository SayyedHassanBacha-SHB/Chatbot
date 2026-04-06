import {useRef, useEffect} from 'react'

export function useAutoScroll(dependencies){
  const ref = useRef(null);
  useEffect(() =>{
    const element = ref.current;
    if(element){
      element.scrollTop = element.scrollHeight;
    }
  }),[dependencies];
  return ref;
}
