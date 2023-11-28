import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import './index.css';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '默认列表',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: '我喜欢',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: '你喜欢',
    children: <p>{text}</p>,
  },
];

export function Index() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="App">
        <header className='head'></header>
        <main className='main'>
          <div className='menu'>
            <Collapse 
            expandIcon={(prop) => {
              if(prop.isActive) {
                return <span className='icon-down-open'></span>
              }
              return <span className='icon-right-open'></span>
            }}
            className='kiwi-collapse' 
            accordion 
            items={items} 
            defaultActiveKey={['1']} 
            onChange={onChange} />
          </div>
          <div className='content'></div>
        </main>
        <footer className='foot'></footer>
      </div>
  )
}
