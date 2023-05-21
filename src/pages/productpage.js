import React from "react";
import DataTable from "../Components/DataTable";

// import ".//ProductPage.css";
import Products from "../database/Products";

const ProductPage = () => {
  const columns = [
    "Product Name",
    "Description",
    "Product Price",
    "Category",
    "Expiry Date",
    "ACTION",
  ];
  return (
    <div>
      <DataTable columns={columns} items={Products} />
    </div>
  );
};

export default ProductPage;