import { Button } from 'antd';

const PrimaryButton = ({ children, ...rest }) => (
  <Button type="primary" {...rest}>
    {children}
  </Button>
);

export default PrimaryButton;
