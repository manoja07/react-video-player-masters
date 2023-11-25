import React from "react";
import sprite from "../../assets/svg/sprite.svg";
import classes from "./PlayersControls.module.css";
import Tooltip from "../Tooltip/Tooltip";

const playerControls = (props) => {
  return (
    <div className={classes.PlayerControlsContainer}>
      <div className={classes.PlayerControls}>
        <div onClick={props.changeProgress} className={classes.Progress}>
          <label htmlFor="progress" hidden>
            video length bar
          </label>
          <input
            type="range"
            name="progressBar"
            id="progress"
            className={classes.ProgressBar}
            value={props.played * 100}
            min="0"
            max="100"
            ref={props.progressBarRef}
            onMouseMove={props.progressTimerHandler}
          />
          <div
            onChange={props.changeProgress}
            ref={props.progressBarThumb}
            className={classes.ProgressBarThumb}
          >
            <div className={classes.ProgressBarThumbBtn}></div>
          </div>
          <div
            ref={props.progressTimeRef}
            className={classes.ProgressBarTimer}
          >
            <video src={props.src}>Video not supported</video>
            <span>&nbsp;</span>
          </div>
          <div
            ref={props.progressBarFilled}
            className={classes.ProgressBarFilled}
            onMouseMove={props.progressTimerHandler}
          >
            &nbsp;
          </div>
          <div
              ref={props.progressBarFilledLoaded}
              className={classes.ProgressBarFilledLoaded}
          >
            &nbsp;
          </div>
        </div>
        <div className={classes.PlayerTime}>
          <span ref={props.currentTimeRef}>00:00</span>
          <span ref={props.durationTimeRef}>00:00</span>
        </div>
        <div className={classes.PlayerOption}>
          <svg
            onClick={props.muteHandler}
            onMouseOver={props.showTooltipHandler}
            onMouseOut={props.hideTooltipHandler}
            data-tooltip="Mute"
          >
            <use href={sprite + props.muteIconHandler}></use>
          </svg>

          <div className={classes.VolumeSlider}>
            <label htmlFor="vol" hidden>
              Volume Slider
            </label>
            <input
              type="range"
              className={classes.VolumeBar}
              id="vol"
              name="volume"
              value={props.volume}
              min="0"
              max="1"
              step="0.01"
              onChange={props.volumeSliderHandler}
            />
          </div>

          <svg
            className={classes.PlayerOptionPlay}
            onClick={props.playPauseHandler}
            onMouseOver={props.showTooltipHandler}
            onMouseOut={props.hideTooltipHandler}
            data-tooltip="Play / Pause"
          >
            <use href={sprite + props.playPauseIcon}></use>
          </svg>

          <svg
            className={classes.PlayerOptionSkip}
            data-skip="-10"
            ref={props.bkwRef}
            onClick={props.bkwBtn}
            onMouseOver={props.showTooltipHandler}
            onMouseOut={props.hideTooltipHandler}
            data-tooltip="Backward 10 sec"
          >
            <use href={sprite + "#icon-replay_10"}></use>
          </svg>

          <svg
            className={classes.PlayerOptionSkip}
            data-skip="10"
            ref={props.fwdRef}
            onClick={props.fwdBtn}
            onMouseOver={props.showTooltipHandler}
            onMouseOut={props.hideTooltipHandler}

            data-tooltip='Forward 10 sec'
          >
            <use href={sprite + "#icon-forward_10"}></use>
          </svg>

          <svg
            className={classes.PlayerOptionFullscreen}
            onClick={props.fullscreenHandler}
            onMouseOver={props.showTooltipHandler}
            onMouseOut={props.hideTooltipHandler}
            data-tooltip='Fullscreen'
          >
            <use href={sprite + props.fullscreenIcon}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default playerControls;
