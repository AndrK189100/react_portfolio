import './toolbar.css'

export default function Toolbar(props) {

    const {filters, activeFilter, handler} = props;

    const selectFilter = (e) => {
        e.preventDefault();
        const tb = e.target;
        
        if(tb.classList.contains('item') && !tb.classList.contains('item-active')) {

            tb.parentElement.querySelector('.item-active').classList.remove('item-active');
            tb.classList.add('item-active');
            handler(tb.textContent);
        }
    }
    
    return (
        <div className='toolbar' onClick={selectFilter}>
            {filters[0] === activeFilter ? <div className='item item-active'>{filters[0]}</div> : <div className='item'>{filters[0]}</div>} 
            {filters[1] === activeFilter ? <div className='item item-active'>{filters[1]}</div> : <div className='item'>{filters[1]}</div> }
            {filters[2] === activeFilter ? <div className='item item-active'>{filters[2]}</div> : <div className='item'>{filters[2]}</div> }
            {filters[3] === activeFilter ? <div className='item item-active'>{filters[3]}</div> : <div className='item'>{filters[3]}</div> }
        </div>
    )
}
