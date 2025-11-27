import React from 'react';
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import useWindowStore from '#store/window.js';
import { WindowControls } from '#components/index.js';

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;


  if (!data) return null;

  const { name, image, subtitle, description } = data || {};

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
          <h2>{name}</h2>
      </div>

      <div className="bg-white h-full p-4 overflow-auto space-y-4">
        {name && (
          <h2 className="text-lg font-semibold text-gray-900 truncate">{name}</h2>
        )}

        {subtitle && (
          <p className="text-sm text-gray-600">{subtitle}</p>
        )}

        {image && (
          <div className="w-full">
            <img src={image} alt={name || 'text-image'} className="max-h-60 rounded-md object-cover" />
          </div>
        )}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3">
            {description.map((para, idx) => (
              <p key={idx} className="text-sm leading-6 text-gray-800 whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(TextFile, 'txtfile');
export default TextWindow;
