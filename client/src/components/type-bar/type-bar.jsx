import './modul.css';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Contex } from "../..";
import { ListGroup } from "react-bootstrap";


const TypeBar = observer(() => {
  const { device } = useContext(Contex);
  return (
    <ListGroup>
      {device.types.map(type => (
        <ListGroup.Item
          className='type'
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => { device.setSelectedType(type) }}
        >{type.name}</ListGroup.Item>))}
    </ListGroup>
  );
});

export { TypeBar };