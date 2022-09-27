import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";

const Stopwatch = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false }, { reset: true });

  const [savedTime, setSavedTime] = useState([]);

  const pushSavedTime = (time) => {
    setSavedTime((prevState) => [...prevState, time]);
  };

  const loadSavedTime = () => {
    console.log(savedTime);
  };

  const clearSavedTime = () => {
    setSavedTime([]);
  };

  return (
    <div className="stopwatch">
      <div className="text-left">
        <div className="flex">
          <span className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Saved Time:
            <ol>
              {savedTime.map((Items, Index) => (
                <li className="ml-4 my-2" key={Index}>
                  {Items.day === 1 ? "1 day, " : `${Items.day}  days,`}{" "}
                  {Items.hour < 2
                    ? `${Items.hour} hour, `
                    : `${Items.hour}  hours,`}{" "}
                  {Items.minute === 1
                    ? "1 minute, "
                    : `${Items.minute}  minutes,`}{" "}
                  {Items.second === 1
                    ? "1 second "
                    : `${Items.second}  seconds`}{" "}
                </li>
              ))}
            </ol>
          </span>
        </div>
        <div className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mx-auto mb-2">
          Current Time: <span>{days}</span>:<span>{hours}</span>:
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <div className="flex space-x-2">
          {isRunning ? (
            <span
              onClick={pause}
              className="bg-green-900 text-white rounded-lg px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              On
            </span>
          ) : (
            <span
              onClick={start}
              className="bg-red-900 text-white rounded-lg px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              Off
            </span>
          )}
          <span
            className="bg-neutral-500 text-white rounded-lg px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            onClick={() => reset(0, false)}
          >
            Reset Current Time
          </span>
        </div>

        <div className="flex space-x-2 py-2">
          <span
            className="bg-blue-900 text-white rounded-lg px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            onClick={() => {
              /* break if no time has elapsed */
              if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
                return;

              pushSavedTime({
                day: days,
                hour: hours,
                minute: minutes,
                second: seconds,
              });

              reset(0, false);
            }}
          >
            Save
          </span>
          <span
            className="bg-neutral-900 text-white rounded-lg px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            onClick={loadSavedTime}
          >
            Load Saved Time
          </span>
        </div>
        <div className="flex space-x-2">
          <span
            className="bg-neutral-900 text-white rounded-lg px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            onClick={clearSavedTime}
          >
            Clear Saved Time
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
