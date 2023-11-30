import './twomenu.css';
import { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: (
            <span>
              <span className='tab-icon icon-beer' />
              播放
            </span>
          ),
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: (
            <span>
              <span className='tab-icon icon-brush' />
              歌词
            </span>
          ),
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: (
            <span>
              <span className='tab-icon icon-paper-plane' />
              相关内容
            </span>
          ),
        children: 'Content of Tab Pane 3',
    },
];

export function TwoMenu() {

    return (
        <>
            <Tabs 
            className="twomenu_tab"
            defaultActiveKey="1" 
            items={items} 
            onChange={onChange} />
        </>
    )
}
