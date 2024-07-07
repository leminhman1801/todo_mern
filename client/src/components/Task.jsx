/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DetailsIcon } from "./Icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Actions from "./Actions";
function Task({ title, id }) {
  const [isShowActions, setIsShowActions] = useState(false);
  const [isShowDetailsIcon, setIsShowDetailsIcon] = useState(false);
  const actionsRef = useRef();
  const detailsRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const handleDetails = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (detailsRef.current) {
        setIsShowActions(true);
        setIsShowDetailsIcon(false);
        console.log(isShowDetailsIcon);
      }
    };

    const detailsElement = detailsRef.current;
    if (detailsElement) {
      detailsElement.addEventListener("mousedown", handleDetails);
    }

    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener("mousedown", handleDetails);
      }
    };
  }, [isShowActions]);
  const handleTask = (e) => {
    console.log("Click");
    e.preventDefault();
    navigate(`/${id}`);
  };

  useEffect(() => {
    let handler = (e) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target)) {
        setIsShowActions(false);
        console.log("Clicked Out");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="text-sm group">
      <a
        onClick={(e) => handleTask(e)}
        href={id}
        onMouseEnter={() => setIsShowDetailsIcon(true)}
        className="block mb-[5px] h-full min-h-10 rounded bg-[#ffffff0e] group-hover:bg-[#2f2f2f] transition-colors ease-in-out delay-0"
      >
        <div className="task">
          <div className="max-w-full box-content min-h-[21px] font-medium flex-grow p-[2px] leading-normal">
            {title}
          </div>
          <div
            ref={detailsRef}
            className="absolute flex top-2 right-2 min-h-6 text-xs bg-[#252525] rounded transition-opacity ease duration-200 delay-0"
          >
            {isShowDetailsIcon && (
              <div className="relative">
                <Tippy
                  content="Rename, delete, move to and more..."
                  className="text-xs"
                >
                  <div className="flex px-[6px] py-[4px] font-medium fill-[#9b9b9b] select-none opacity-0 group-hover:opacity-100 group-hover:bg-[#252525] transition-opacity ease-in duration-[20] delay-0">
                    <DetailsIcon />
                  </div>
                </Tippy>
                {isShowActions && <Actions actionsRef={actionsRef} />}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Task;
