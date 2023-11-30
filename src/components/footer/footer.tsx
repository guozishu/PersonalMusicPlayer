import './footer.css';

export function Footer() {
    return (
        <>
        <div className='footer_left'>
            <div className='footer_btn'>
                <span className='prev_song icon-to-start-1'></span>
                <span className='play_or_pause icon-play-1'></span>
                <span className='next_song icon-to-end-1'></span>
            </div>
            <div className='footer_time'>
                <span className='time_info'>1:30 </span>
                <span className='total_time'>/ 2:49</span>
            </div>
        </div>
        <div className='footer_center'>
            <div className='song-image'>
                <img src='https://i.ytimg.com/vi/5XK2C9w6oVk/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kqEebIfPWqRr6dt6U0a5JDD76Wkg' />
            </div>
            <div className='song-info'>
                <div className='song-name'>愛在西元前</div>
                <div className='song-singer'>
                    <span>周杰伦</span>
                    <span> • </span>
                    <span>1445万播放</span>
                </div>
            </div>
        </div>
        <div className='footer_right'></div>
        </>
    )
}
