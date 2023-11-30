import './index.css';
import { Menu } from '../menu/menu';
import { TwoMenu } from '../twomenu/twomenu';
import { Footer } from '../footer/footer';


export function Index() {
  return (
    <div className="App">
        <header className='head'></header>
        <main className='main'>
          <div className='menu'>
            <Menu />
          </div>
          <div className='content'></div>
          <div className='twomenu'>
            <TwoMenu />
          </div>
        </main>
        <footer className='foot'>
          <Footer />
        </footer>
      </div>
  )
}
