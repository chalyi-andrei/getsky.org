import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'media';

const TableWrapper = styled.div`
    overflow-x: auto;
`;

const Table = styled.table`
    display: block;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    vertical-align: middle;
    
    ${media.sm`
        display: table;
    `}
`;

const TableHead = styled.thead`
    display: none;
    font-family: ${props => props.theme.fontBold};
    font-size: 14px;
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.grayBlue};
    text-transform: capitalize;
    
    ${media.sm`
        display: table-header-group;
    `}
`;

const TableRowHead = styled.tr``;

const TableCellHead = styled.th`
    height: ${props => props.theme.space[8]}px;
    padding: 0 ${props => props.theme.space[2]}px;   
    text-align: left;
    
    &:hover {
        background-color: ${props => props.theme.colors.lightGray};
        cursor: default;
    }
    
    ${media.sm`
        height: ${props => props.theme.space[10]}px;
        padding: 0 ${props => props.theme.space[4]}px;
    `}
    
    ${media.md`
        padding: 0 ${props => props.theme.space[6]}px;
    `}
`;

const TableBody = styled.tbody`
    display: block;
    
    ${media.sm`
        display: table-row-group;
    `}
`;

export const TableRow = styled.tr`
    display: block;
    border-bottom: 1px solid ${props => props.theme.colors.darkGray};
    
    ${media.sm`
        display: table-row;
        border-bottom: none;
    `}

    &:hover {
        background-color: ${props => props.theme.colors.lightBlue};
        cursor: pointer;
    }
`;

export const TableCell = styled.td`
    display: flex;
    padding: ${props => props.theme.space[1]}px ${props => props.theme.space[2]}px;   
    line-height: 26px;
    font-size: 14px;
    color: ${props => props.theme.colors.darkBlue};
    
    &::before {
        content: attr(data-label);
        display: block;
        width: 30%;
        flex-shrink: 0;
        font-family: ${props => props.theme.fontBold};
        
        ${media.sm`
            display: none;
        `}
    }
    
    ${media.sm`
        display: table-cell;
        padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
    `}
    
    ${media.md`
        padding: ${props => props.theme.space[5]}px ${props => props.theme.space[6]}px;
    `}    
`;

const TableComponent = ({ columns, rowComponent: RowComponent, rowData, rowOperations }) => (
    <TableWrapper>
        <Table>
            <TableHead>
                <TableRowHead>
                    {columns.map((col, i) => <TableCellHead key={i} style={col.style} >{col.name}</TableCellHead>)}
                </TableRowHead>
            </TableHead>
            <TableBody>
                {rowData.map((item, i) => <RowComponent key={i} data={item} rowOperations={rowOperations} columns={columns} />)}
            </TableBody>
        </Table>
    </TableWrapper>
);

TableComponent.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        style: PropTypes.object,
    })).isRequired,
    rowData: PropTypes.array.isRequired,
    rowOperations: PropTypes.object,
    rowComponent: PropTypes.any,
};

export default TableComponent;
