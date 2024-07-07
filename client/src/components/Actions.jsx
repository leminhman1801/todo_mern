/* eslint-disable react/prop-types */
import {
  FavoritesIcon,
  LinkIcon,
  DuplicateIcon,
  MoveToIcon,
  TrashIcon,
} from "./Icons";

function Actions({ actionsRef }) {
  return (
    <div className="actions" ref={actionsRef}>
      <div>
        <div>
          <div className="mt-2 py-[6px]">
            <div className="pane-action">
              <div className="mx-3 flex-auto">
                <div className="search-actions">
                  <input
                    placeholder="Search actions…"
                    className=""
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-action">
          <div className="mx-1 rounded hover:bg-[#313131]">
            <div className="pane-action">
              <div className="flex justify-center items-center ml-[10px] mr-1">
                <FavoritesIcon />
              </div>
              <div className=" ml-[6px] mr-3 flex-auto ">Add to Favorites</div>
            </div>
          </div>
          <div className="mx-1 rounded hover:bg-[#313131]">
            <div className="pane-action">
              <div className="flex justify-center items-center ml-[10px] mr-1">
                <LinkIcon />
              </div>
              <div className=" ml-[6px] mr-3 flex-auto ">Copy link</div>
            </div>
          </div>
          <div className="mx-1 rounded hover:bg-[#313131]">
            <div className="pane-action">
              <div className="flex justify-center items-center ml-[10px] mr-1">
                <DuplicateIcon />
              </div>
              <div className=" ml-[6px] mr-3 flex-auto ">Duplicate</div>
              <div className="mr-3">
                <span className="text-[#ffffff48] text-xs">Ctrl+D</span>
              </div>
            </div>
          </div>
          <div className="mx-1 rounded hover:bg-[#313131]">
            <div className="pane-action">
              <div className="flex justify-center items-center ml-[10px] mr-1">
                <MoveToIcon />
              </div>
              <div className=" ml-[6px] mr-3 flex-auto ">Move to</div>
              <div className="mr-3">
                <span className="text-[#ffffff48] text-xs">Ctrl+Shift+P</span>
              </div>
            </div>
          </div>
          <div className="mx-1 rounded group hover:bg-[#313131]">
            <div className="pane-action ">
              <div className="flex justify-center items-center ml-[10px] mr-1">
                <TrashIcon />
              </div>
              <div className=" ml-[6px] mr-3 flex-auto group-hover:text-red-500">
                Delete
              </div>
              <div className="mr-3">
                <span className="text-[#ffffff48] text-xs">Del</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actions;
