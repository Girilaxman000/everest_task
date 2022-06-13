import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import styles from './style.module.css'

const FilterComponent = (props) => {
    const categoryList = []
    const result = props.items.map(item => {
        return item.category[1]
    })
    const uniqueCategory = [...new Set(categoryList.concat(result))];

    const handleWebsite = (e) => {
        props.getCategory(e)
    }

    return (
        <>
        <div className={styles.filter}>
            <p>Filter By Category</p>
            <DropdownButton align="end" title="Category" id="dropdown-menu-align-end" onSelect={handleWebsite}>
                {
                    uniqueCategory.map((item, index) =>
                        <Dropdown.Item key={index} eventKey={item}>{item}</Dropdown.Item>

                    )}
            </DropdownButton>
        </div>
        </>
    )

}

export default FilterComponent