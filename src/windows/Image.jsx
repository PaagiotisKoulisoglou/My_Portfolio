import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import useWindowStore from '#store/window.js';
import { WindowControls } from '#components/index.js';

const ImageFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  // If no data (no file selected/opened), render nothing
  if (!data) return null;

  const { name, imageUrl } = data || {};

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
      </div>

      <div className="bg-white h-full p-4 overflow-auto space-y-4">
        {name && (
          <h2 className="text-lg font-semibold text-gray-900 truncate">{name}</h2>
        )}

        {imageUrl && (
          <div className="w-full flex items-center justify-center">
            <img
              src={imageUrl}
              alt={name || 'image-file'}
              className="max-h-[70vh] rounded-md object-contain"
            />
          </div>
        )}
      </div>
    </>
  );
};

const Image = WindowWrapper(ImageFile, 'imgfile');
export default Image;
