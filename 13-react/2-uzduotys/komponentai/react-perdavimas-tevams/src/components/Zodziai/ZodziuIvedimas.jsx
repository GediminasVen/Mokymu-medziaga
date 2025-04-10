import { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const zodisRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (zodisRef.current.value === '') {
      return;}

    props.pridetiZodi(zodisRef.current.value);

    zodisRef.current.value = '';
  };

  return (
    <form onSubmit={onFormSubmit}>
        <label htmlFor="zodis">Zodis</label>
        <input type="text" id="zodis" ref={zodisRef}/>
        <button type="submit">Ivesti zodi</button>
    </form>
  );
};

export default ZodziuIvedimas;
