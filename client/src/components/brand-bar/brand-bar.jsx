import './module.css';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { Contex } from "../..";
import { Card, Row } from "react-bootstrap";
import { clsx } from 'clsx';


const BrandBar = observer(() => {
  const { device } = useContext(Contex);
  return (
    <Row className='d-flex'>
      {device.brands.map(brand => (
        <Card
          key={brand.id}
          onClick={() => device.setSelectedbrand(brand)}
          className={clsx('brand', (brand.id === device.selectedBrand.id) && 'active')}
          >
      {brand.name}
    </Card>
  ))}
    </ Row>
  );
});

export { BrandBar };