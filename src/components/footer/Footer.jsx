import React from "react";
import styels from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styels.container}>
      <div>© 2023 Ambrose Mbithi.</div>
      <div className={styels.icons}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styels.icon}
          alt="facebook"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styels.icon}
          alt="facebook"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styels.icon}
          alt="facebook"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styels.icon}
          alt="facebook"
        />
      </div>
    </div>
  );
};

export default Footer;
