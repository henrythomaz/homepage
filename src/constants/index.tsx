/**
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

/**
 * Types
 */
import type { LinksType } from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Settings,
  User,
} from 'lucide-react';

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube
} from "react-icons/fa";

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'Projects', link: '#projects', icon: Briefcase },
  { label: 'About', link: '#about', icon: User },
  { label: 'Services', link: '#services', icon: Settings },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Testimonials', link: '#testimonials', icon: MessageCircle },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/henrythomaz/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: 'https://instagram.com/henrythcampos',
  },
  {
    icon: FaGithub,
    label: 'Github',
    link: 'https://github.com/henrythomaz',
  },
  {
    icon: FaYoutube,
    label: 'Youtube',
    link: 'https://youtube.com/@henrythcampos',
  },
];

export {
  socialLinks,
  navLinks,
};
