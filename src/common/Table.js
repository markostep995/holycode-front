import * as React from "react";
import MaterialTable from "material-table";

export default function Table(props) {
  return (
    <MaterialTable
      title={props.title}
      columns={props.columns()}
      data={props.data}
      options={{
        grouping: false,
        paging: false,
        search: false,
        sorting: false,
        draggable: false,
        // header: false,
      }}
      style={{ width: "40%", fontSize: "19px" }}
    />
  );
}
