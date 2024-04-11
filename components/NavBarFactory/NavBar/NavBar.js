import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const NavigationBar = (props) => {
    const { tabList, activeTab, handleSelect, setTab } = props;

    const items = [];

    for (const tab of tabList) {
        if (tab === activeTab) {
            items.push(
                <Nav.Item key={tab}>
                    <Nav.Link key={tab} eventKey={tab}>
                        <span> {tab}</span>
                    </Nav.Link>
                </Nav.Item>
            );
        } else {
            items.push(
                <Nav.Item key={tab}>
                    <Nav.Link
                        key={tab}
                        onClick={() => {
                            setTab(tab);
                        }}
                        eventKey={tab}
                    >
                        {tab}
                    </Nav.Link>
                </Nav.Item>
            );
        }
    }

    return (
        <Nav variant="tabs" defaultActiveKey="NIH" onSelect={handleSelect}>
            {items}
        </Nav>
    );
};

NavigationBar.propTypes = {
    activeTab: PropTypes.string,
    handleSelect: PropTypes.func,
    setTab: PropTypes.func,
    tabList: PropTypes.array.isRequired,
};

export default NavigationBar;
