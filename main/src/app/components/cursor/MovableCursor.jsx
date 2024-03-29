import { useState, useEffect } from 'react';

const MovableCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)', // Center the cursor
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'white', // Change background color to white
        cursor: 'none', // Hide default cursor
        WebkitUserSelect: 'none', // Hide default cursor in Webkit-based browsers
        MozUserSelect: 'none', // Hide default cursor in Firefox
        msUserSelect: 'none', // Hide default cursor in Internet Explorer/Edge
        userSelect: 'none', // Disable text selection
        pointerEvents: 'none', // Ensure the cursor doesn't interfere with mouse events
        zIndex: 9999, // Ensure the cursor is above other elements
      }}
    ></div>
  );
};

export default MovableCursor;
