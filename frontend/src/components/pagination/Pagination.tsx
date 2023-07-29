import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationProps } from '../props/Item';

const PaginationComponent: React.FC<PaginationProps> = ({ pageCount, currentPage, onChangePage }) => {
    return (
        <div className="pagination-container">
            <Pagination
                aria-label="Pagination"
                count={pageCount}
                page={currentPage}
                onChange={(event, page) => onChangePage(page)}
                shape="rounded"
                color="secondary"
                size="medium"
                className='pagination'
            />
        </div>
    );
};

export default PaginationComponent;
