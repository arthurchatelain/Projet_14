import React, { useMemo } from "react"
import { useTable, useSortBy, useGlobalFilter, usePagination} from "react-table"
import { COLUMNS } from './columns'
import { useSelector } from "react-redux"
import './table.css'
import { GlobalFilter } from "./GlobalFilter"

export const Table = () =>  {

    const employees = useSelector(state => state.employees)
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employees, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, useSortBy, usePagination,)

    const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, state, setGlobalFilter, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize} = tableInstance

    const { globalFilter } = state

    const { pageIndex, pageSize } = state

    return (
        <>
        <div className="tableHeader">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {[10, 25, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize} items
                    </option>
                ))}
            </select>
        </div>
        <table {...getTableProps()} >
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span style={{position: 'relative', top: '-2px', paddingLeft: '3.5px', fontSize: '18px'}}>
                                        {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ""}
                                    </span>
                                </th>  
                            ))
                        }
                    </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                                
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
        <div className="tableFooter">
            <span>
                Go to page {' '}
                <input type='number' className="targetPage" defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }} style={{width: '31px', height: '31px', textAlign: 'center'}}/>
            </span>
            <span className="actualPage"> Page{' '} <strong>{pageIndex + 1 } of {pageOptions.length}</strong> {' '} </span>
            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </div>
        
        </>
    )
}