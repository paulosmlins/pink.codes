// import Heading from '@/app/components/generic/Heading';
import CustomLink from "@/components/ui/CustomLink";

export default function Contact() {
  const contactLinks = [
    {
      label: "GitHub",
      href: "https://github.com/paulosmlins",
      ariaLabel: "GitHub profile",
    },
    {
      label: "Email",
      href: "paulo@pink.codes",
      ariaLabel: "Email address",
    },
  ];

  return (
    <>
      <ul className="flex">
        {contactLinks.map(({ label, href, ariaLabel }, index) => (
          <li key={label}>
            <CustomLink href={href} ariaLabel={ariaLabel}>
              {label}
            </CustomLink>
            <span
              className={`mx-1 dark:text-gray-500 ${
                index === contactLinks.length - 1 && "hidden"
              }`}
              aria-hidden="true"
            >
              &middot;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
