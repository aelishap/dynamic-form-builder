import { Button as AntButton } from 'antd';

const Button = ({ type = 'default', children, ...rest }) => {
  const btnType = ['primary', 'dashed', 'link', 'text', 'ghost', 'default'].includes(type)
    ? type
    : 'default';

  return (
    <AntButton type={btnType} {...rest}>
      {children}
    </AntButton>
  );
};

export default Button;
