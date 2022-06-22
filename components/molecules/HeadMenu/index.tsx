import { FC } from 'react';
import { Row, Col } from 'antd';
import Button from 'components/atoms/Button';
import NavButton from 'components/atoms/NavButton';
import { HeadMenuList } from 'interfaces';

interface HeadMenuProps {
  menuUrl?: Partial<Record<HeadMenuList, string>>;
  onMenuClick?(item: HeadMenuList): void;
}

const HeadMenu: FC<HeadMenuProps> = ({
  menuUrl = {},
  onMenuClick = () => {},
}) => {
  const getHeadButton = (item: HeadMenuList) =>
    menuUrl[item] ? (
      <a href={menuUrl[item]} target="_blank" rel="noopener noreferrer">
        <Button variant="text">{item}</Button>
      </a>
    ) : (
      <Button variant="text" onClick={() => onMenuClick(item)}>
        {item}
      </Button>
    );
  return (
    <>
      <Row justify="end">
        <Col xs={0} lg={24}>
          <Row justify="end">
            {Object.values(HeadMenuList).map((item, i) => (
              <Col key={i.toString()}>{getHeadButton(item)}</Col>
            ))}
          </Row>
        </Col>
        <Col md={24} lg={0}>
          <Row justify="end">
            <Col>
              <NavButton />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HeadMenu;
