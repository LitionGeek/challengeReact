/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
export const RoutesNotFound = (props) => {
  return (
    <Routes>
      {props.children}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};
