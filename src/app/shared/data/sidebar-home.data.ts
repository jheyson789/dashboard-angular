import {
  faCalendar,
  faComments,
  faHome,
  faPlayCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type itemsSideBar = {
  title: string;
  route: string;
  icon: IconDefinition;
};

export const itemsSide: itemsSideBar[] = [
  {
    title: 'Dashboard',
    route: 'home',
    icon: faHome,
  },
  {
    title: 'My Schedule',
    route: 'calendar',
    icon: faCalendar,
  },
  {
    title: 'Message',
    route: 'message',
    icon: faComments,
  },
  {
    title: 'My Course',
    route: 'courses',
    icon: faPlayCircle,
  },
];
