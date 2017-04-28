import React from 'react'
import {renderIcons} from '../../Tabs/styled/icons'
import * as s from '../styled/DrawerStyle'
import * as Icons from 'react-icons/lib/md'

const DrawerItem = ({ name, icon, location, onPush }) => {
    //  console.log(name)
    // console.log(location)
    //  console.log(onPush)

    let active = 'active'

    return (
        <s.DrawerBlueBar>
            <div class="MdKeyboardArrowRight" onClick={e => {e.preventDefault(); onPush(location)}}>
                <s.Ico>{renderIcons(icon,active)}</s.Ico>
                {name}
                <s.Arrow><Icons.MdKeyboardArrowRight /></s.Arrow>
            </div>
        </s.DrawerBlueBar>
    )
}

export default DrawerItem