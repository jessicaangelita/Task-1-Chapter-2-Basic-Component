import React from "react";
import DataTable from "../Components/DataTable";
import Users from "../database/Users";

const UserPage = () => {
    const columns = [
        "USERNAME",
        "EMAIL",
        "ACTION",
    ];
    return (
        <div>
            <DataTable columns={columns} items={Users}/>
        </div>
    )
}

export default UserPage;