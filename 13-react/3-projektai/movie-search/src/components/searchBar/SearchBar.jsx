import Form from 'react-bootstrap/Form';
import './SearchBar.scss'

const SearchBar = ({onChangeMethod, onEnterPressMethod}) => {

    return (
        <>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Search"
        id='SearchBox'
        onChange={onChangeMethod}
        onKeyUp={onEnterPressMethod}
        />
    </>
  );
}

export default SearchBar