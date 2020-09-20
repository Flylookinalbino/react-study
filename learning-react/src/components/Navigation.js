import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavMenu from './NavMenu';

const barsIcon = <FontAwesomeIcon icon={ faBars }/>
 
const Navigation = () => {
    const [menu, setMenu] = useState(false);

    const easeINOUTtransitions = useTransition(menu, null, {
        from:   { position: 'absolute', opacity: 0 },
        enter:  { opacity: 1 },
        leave:  { opacity: 0 },
    })

    const menuTransitions = useTransition(menu, null, {
        from:   { opacity: 0, transform:'translatex(-100%)' },
        enter:  { opacity: 1, transform:'translatex(0%)' },
        leave:  { opacity: 0, transform:'translatex(-100%)' },
    })

    return (
        <nav>
            <button className="text-red-800 text-2xl hover:text-red-700 "
                    onClick={() => setMenu(!menu)}
                    >{ barsIcon }
            </button>
            {/* Transition for Toggle Background */}
            {
                easeINOUTtransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-teal-900 bg-opacity-75 fixed top-0 left-0 w-full h-full"
                        onClick={() => setMenu(!menu)}
                        > 
                    </animated.div>
                )
            }
            {/* Transition for Nav Menu */}
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-2/5 h-full shadow p-5 rounded-tr-lg"
                        > <NavMenu 
                            Menu = {() => setMenu(false)}    
                        />  
                    </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation;
