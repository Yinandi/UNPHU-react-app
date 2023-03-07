import {createContext } from "react";

interface TableData {
  id: string;
  fullName: string;
  email: string;
  gender: string;
}

interface TableDataContextValue{
  tableData: TableData[];
  setTableData: (tableData: TableData) => void;
}

const initialContextValue: TableDataContextValue={
  tableData:[],
  setTableData: () => {},
}
export const TableDataContext = createContext<TableDataContextValue>(initialContextValue);

