import React, { useContext, useRef, useState } from 'react';
import BubbleDialogSystem from './BubbleDialogSystem';
import { ScavContext } from '@/components';

const WrenShopDialog = () => {
  const stand = '/assets/svgs/landing/scav/wren_at_sign.png';
  const table = '/assets/svgs/landing/scav/table.png';
  const [currentImage, setCurrentImage] = useState(stand);
  const [counterDialogChild, setCounterDialogChild] = useState(0);

  const ctx = useContext(ScavContext);

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='relative'>
            <img src={currentImage} alt="shop" className="object-contain w-full h-full" />

            {
                ctx.shop.lookingAtTable && <>
                    <div ref={ctx.shop.table} className='bg-blue-600/50 absolute w-[80%] h-[65%] left-[10%] top-[8%] '></div>
                </>
            }
        </div>

        {
            !ctx.shop.lookingAtTable &&
            <BubbleDialogSystem child={counterDialogChild}>
                <div className='p-4'>
                    <span>Hi, welcome to Wren's Waffle Shop!</span>
                    <br />
                    <span>Do you have your ticket?</span>
                    <br />
                    <br />
                    <button 
                        className='bg-gray-300 rounded-md px-2 py-px mr-4'
                        onClick={() => {
                            if (ctx.shards.taped) {
                                ctx.shards.setShards([])
                                setCounterDialogChild(1);
                            }
                            else {
                                setCounterDialogChild(2);
                            } 
                        }}
                    >
                        Yes!
                    </button>
                    <button 
                        className='bg-gray-300 rounded-md px-2 py-px'
                        onClick={() => setCounterDialogChild(3)}
                    >
                        What ticket?
                    </button>
                </div>

                <div className='w-full h-full'>
                    <span>Great! Here's your waffle!</span>
                    <br />
                    <span>Enjoy!</span>
                </div>

                <div className='p-4'>
                    <span>Looks like you don't have your ticket yet.</span>
                    <br />
                    <span>Feel free to sit at a table though.</span>
                    <br />
                    <br />
                    <button 
                        className='bg-gray-300 rounded-md px-2 py-px mr-4'
                        onClick={() => {
                            setCounterDialogChild(0);
                        }}
                    >
                        Back
                    </button>
                    <button 
                        className='bg-gray-300 rounded-md px-2 py-px'
                        onClick={() => {
                            ctx.shop.setLookingAtTable(true);
                            setCurrentImage(table);
                        }}
                    >
                        Go to table
                    </button>
                </div>

                <div className='p-4'>
                    <span>You need a ticket to get a waffle.</span>
                    <br />
                    <span>I told the WaffleHacks Games committee to give everyone one ticket for a waffle.</span>
                    <br />
                    <span>Yours should hopefully be around somewhere. Maybe you need to search for it?</span>
                    <br />
                    <br />
                    <button 
                        className='bg-gray-300 rounded-md px-2 py-px'
                        onClick={() => {
                            setCounterDialogChild(0);
                        }}
                    >
                        Back
                    </button>
                </div>
            </BubbleDialogSystem>
        }
        
    </div>
  );
};

export default WrenShopDialog;
