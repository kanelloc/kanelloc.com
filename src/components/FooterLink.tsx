import { Link } from '@chakra-ui/react';
import React from 'react';

type Props = {
  label: string;
  href: string;
};

const FooterLink = ({ href, label }: Props) => (
  <Link color="teal" href={href} isExternal>
    {label}
  </Link>
);
export default FooterLink;
