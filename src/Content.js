import ItemList from './ItemList';
import React from 'react';

const Content = ({ items, handleCheck, handleDelete, handleAdd }) => {
    return (
        <>
            {items.length ? (
                <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content
