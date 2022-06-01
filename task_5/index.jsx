import { useState } from "react";

import { useState } from "react";

const withMouseCallback = (Component) => (props) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    if (props.mouseEnterCallbak) {
      props.mouseEnterCallbak();
    }
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <Component {...props} />
    </div>
  );
};

export const Block1 = withMouseCallback(({ imgSrc, imgAlt }) => {
  return <img src={imgSrc} alt={imgAlt} />;
});

export const Block2 = withMouseCallback(({ content }) => {
  return <p>{content}</p>;
});

export const Block3 = withMouseCallback(({ userData }) => {
  return (
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  );
});