import React, { useState } from 'react';
import classes from './RightNavBarComponent.module.css';
import ToolTip from '../../UI/ToolTip';
import NotiDropdownComponent from '../NotificationDropDown/NotiDropdownComponent';

const RightNavBarComponent = () => {
  const [tootipDisplay, setToolTipDisplay] = useState({
    noti: false,
    chat: false,
    profile: false,
    dropdown: false,
  });
  const [dropDownComponent, setDropDownComponent] = useState(false);

  const displayTooltip = (stateName) => {
    if (stateName === 'noti') {
      setToolTipDisplay((previousState) => ({
        noti: !previousState.noti,
        chat: false,
        profile: false,
        dropdown: false,
      }));
    } else if (stateName === 'chat') {
      setToolTipDisplay((previousState) => ({
        noti: false,
        chat: !previousState.chat,
        profile: false,
        dropdown: false,
      }));
    } else if (stateName === 'profile') {
      setToolTipDisplay((previousState) => ({
        noti: false,
        chat: false,
        profile: !previousState.profile,
        dropdown: false,
      }));
    } else if (stateName === 'dropdown') {
      setToolTipDisplay((previousState) => ({
        noti: false,
        chat: false,
        profile: false,
        dropdown: !previousState.dropdown,
      }));
    }
  };

  const onClickHandlerDropDowns = (event) => {
    event.preventDefault();
    setDropDownComponent((prev) => {
      return !prev;
    });
  };

  return (
    <div className={classes['nav-bar_secondpart']}>
      <div>
        <a
          href="1"
          className={classes['items']}
          onMouseOver={() => displayTooltip('noti')}
          onMouseOut={() => displayTooltip('noti')}
          onClick={onClickHandlerDropDowns}
        >
          <i className={`fas fa-bell`}>
            {/* <div className={classes['notification']}>
            <p>4</p>
          </div> */}
          </i>
          {tootipDisplay.noti && (
            <ToolTip className={classes.tooltip} text="Notification" />
          )}
        </a>
        {!dropDownComponent && <NotiDropdownComponent />}
      </div>
      <div>
        <a
          href="1"
          className={classes['items']}
          onMouseOver={() => displayTooltip('chat')}
          onMouseOut={() => displayTooltip('chat')}
        >
          <i className="fa fa-comment-dots"></i>
          {tootipDisplay.chat && (
            <ToolTip className={classes.tooltip} text="Messages" />
          )}
        </a>
      </div>
      <div>
        <a
          href="1"
          className={classes['avatar']}
          onMouseOver={() => displayTooltip('profile')}
          onMouseOut={() => displayTooltip('profile')}
        >
          <div className={classes['img']}>A</div>
          {tootipDisplay.profile && (
            <ToolTip className={classes.tooltip} text="Your profile" />
          )}
        </a>
      </div>
      <div>
        <a
          href="1"
          className={classes['drop-down']}
          onMouseOver={() => displayTooltip('dropdown')}
          onMouseOut={() => displayTooltip('dropdown')}
        >
          <i className="fas fa-chevron-down"></i>
          {tootipDisplay.dropdown && (
            <ToolTip
              className={classes.tooltip}
              text={`Account \n and \n Other \n option`}
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default RightNavBarComponent;
