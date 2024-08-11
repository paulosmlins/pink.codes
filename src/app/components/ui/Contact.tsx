// import Heading from '@/app/components/generic/Heading';
import CustomLink from '@/app/components/ui/CustomLink';

export default function Contact() {
  const contactLinks = [
    {
      label: '@pinkc0des',
      href: 'https://x.com/pinkc0des',
      ariaLabel: 'Twitter profile'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/pinkc0des',
      ariaLabel: 'GitHub profile'
    },
    {
      label: 'Email',
      href: 'contato@pink.codes',
      ariaLabel: 'Email address'
    }
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
              className={`mx-1 dark:text-secondary-dark ${index === contactLinks.length - 1 && 'hidden'}`}
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
