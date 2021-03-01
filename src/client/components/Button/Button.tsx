import React, { PropsWithChildren } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsWithChildren<Props>> = (props: Props) => {

  return (
    <button
      style={{
        backgroundColor: 'purple',
        color: 'white',
        borderRadius: '8px',
        padding: '6px 14px'
      }}
      {...props} 
    />
  );
};

export default Button;
