import React from "react";
import styels from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styels.container}>
      <div>
        © 2024 <a href="mailto:ambrosetall@gmail.com">ambrosetall@gmail.com</a>
      </div>
      <div className={styels.icons}>
        <Link
          href="https://www.linkedin.com/in/ambrose-mbithi-963849214/"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            width={20}
            height={20}
            className={styels.icon}
            alt="facebook"
          />
        </Link>
        <Link href="https://github.com/AmbroTall" target="_blank">
          <Image
            src="/github.png"
            width={20}
            height={20}
            className={styels.icon}
            alt="facebook"
          />
        </Link>
        {/* <Image
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
        /> */}
      </div>
    </div>
  );
};

export default Footer;
