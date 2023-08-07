import React, { lazy } from 'react';

const Load = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: () => <div>Complete</div>});
  }, 3000);
}));

export default Load;