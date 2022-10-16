import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminPanel } from '../../pages/admin-panel';
import { AuthPage } from '../../pages/auth';
import { BasketPage } from '../../pages/basket';
import { DevicePanel } from '../../pages/device';
import { ShopPage } from '../../pages/shop';

import { routes, roles } from '../../common/constants';

import { ProtectedRoute } from '../protected-route/protected-route';
import { Contex } from '../../index';

const Routing = () => {
  const { user } = useContext(Contex)
  const isAuth = user.isAuth;
  const role = roles.ADMIN;

  return (
      <Routes>
        <Route
          element={
            <ProtectedRoute isAllowed={role === roles.ADMIN} redirectPath={'login'} />
          }
        >
          <Route path={routes.ADMIN_PANEL} element={<AdminPanel />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isAllowed={isAuth} redirectPath={'login'} />
          }
        >
          <Route path={routes.BASKET} element={<BasketPage />}></Route>
        </Route>
        <Route path={routes.LOGIN} element={<AuthPage />}></Route>
        <Route path={routes.DEVICE + '/:id'} element={<DevicePanel />}></Route>
        <Route path={routes.SHOP} element={<ShopPage />}></Route>
        <Route path={routes.REGISTRATION} element={<AuthPage />}></Route>
        <Route path={'*'} element={<ShopPage />}></Route>
      </Routes>
  );
};

export { Routing };
