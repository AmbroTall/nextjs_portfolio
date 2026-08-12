import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-24">
      <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl">
        <Image src="/contact.png" fill alt="contact" className="object-cover" />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Let&apos;s keep in touch
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          I&apos;m a Software Engineer & AI/ML Integration Specialist offering
          cutting-edge software solutions. Whether you need a robust backend,
          a dynamic frontend, or an LLM-powered workflow, I&apos;m here to
          help bring your vision to life. Let&apos;s work together to create
          something amazing!
        </p>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:ambrosetall@gmail.com"
            className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            <FaEnvelope /> ambrosetall@gmail.com
          </a>
          <a
            href="tel:+254722808670"
            className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            <FaPhone /> +254 722 808 670
          </a>
          <span className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
            <FaMapMarkerAlt /> Nairobi, Kenya
          </span>
          <a
            href="https://www.linkedin.com/in/ambrose-mbithi-963849214/"
            target="_blank"
            className="flex items-center gap-3 text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            <FaLinkedin /> linkedin.com/in/ambrose-mbithi-963849214
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
