import React, { useState } from 'react';
import { Menu, Icon } from 'antd';

const Header = () => {
    const [selectedKey, setSelectedKey] = useState('add');
    const handleClick = (e) => {
        setSelectedKey(e.key)
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[selectedKey]} mode="horizontal">
            <Menu.Item key="add">
                <Icon type="plus-circle" />
                Add Cheque Details
        </Menu.Item>
            <Menu.Item key="view">
                <Icon type="ordered-list" />
                View Cheque Details
        </Menu.Item>
        </Menu>
    )
}

export default Header;