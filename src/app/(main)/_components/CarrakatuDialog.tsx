import React, { useState } from 'react';

import BubbleDialogSystem from './BubbleDialogSystem';

interface CarrakatuDialogProps {
  whenDone: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CarrakatuDialog = ({ whenDone, className, style }: CarrakatuDialogProps) => {
  const [child, setChild] = useState(0);

  function nextChild() {
    setChild(child + 1);
  }

  return (
    <BubbleDialogSystem child={child} className={className} style={style || {}}>
      <>
        <span>There you are,</span>
        <br />
        <span>safe and sound.</span>
        <br />
        <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
          Thanks!
        </button>
        <br />
        <button onClick={() => setChild(4)} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
          Why'd you do that?
        </button>
      </>

      <div className="text-left">
        <span>No problemo! Once I heard the apple fall I couldn't help but notice your fall.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>By the way, I found this piece of paper on the ground.</span>
        <br />
        <span>Maybe it'll be useful.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>I'll leave you be. If you fall again, I'll be sure to help! See you around!</span>
        <br />
        <div className="flex justify-end">
          <button onClick={whenDone} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Bye!
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>To...save you? Usually people don't like being stuck.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            ...
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>Well you're not much of a talker are you.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={nextChild} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            ...
          </button>
        </div>
      </div>

      <div className="text-left">
        <span>...Good luck out there, then. 
          You'll have to look around elsewhere for someone to help you, since you obviously don't want me here.</span>
        <br />
        <div className="flex justify-end">
          <button onClick={whenDone} className="bg-gray-300 px-2 mt-2 rounded-sm user-select-none">
            Done
          </button>
        </div>
      </div>
    </BubbleDialogSystem>
  );
};

export default CarrakatuDialog;
