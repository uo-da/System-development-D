// components/MyButton.jsx
import React from 'react';

function MyButton() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      クリックしてね
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default MyButton;
