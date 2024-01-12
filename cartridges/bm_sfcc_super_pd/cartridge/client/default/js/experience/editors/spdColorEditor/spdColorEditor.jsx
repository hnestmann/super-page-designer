import React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorEditor } from '@sfccplus/super-pd-kit';

(() => {
    subscribe('sfcc:ready', ({ value }) => {
        const rootElement = document.createElement('div');
        document.body.append(rootElement);

        const root = createRoot(rootElement);
        root.render(<ColorEditor value={value} />);
    });
})();
