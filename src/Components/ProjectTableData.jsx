import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Data } from "./DataAPI";
import COLUMN from "./TableColumns";

export const ProjectTableData = () => {
  const data = useMemo(() => Data, []);
  const columns = useMemo(() => COLUMN, []);
  const tableInstance = useTable({
    data,
    columns,
  });

  const { getTableBodyProps, getTableProps, prepareRow, headerGroups, rows } =
    tableInstance;
  return (
    <div className="bg-black text-white mb-20 overflow-x-scroll lg:overflow-hidden">
      <table {...getTableProps()} className="  lg:w-screen text text-center">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()} className="lg:w-3/4">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className=" border-white/20 font-normal lg:font-bold text-[12px] px-5 lg:px-20 py-3 border lg:text-[16px]"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border-white/20 text-[12px] lg:px-20 lg:text-[14px] py-3 border"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
