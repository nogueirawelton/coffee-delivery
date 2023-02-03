import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/payment"
          element={<Payment />}
        />
      </Route>
    </Routes>
  );
};
