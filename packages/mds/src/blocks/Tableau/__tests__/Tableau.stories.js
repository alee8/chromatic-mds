import {
  BasicExample,
  ErrorExample,
} from './Examples';

import Tableau from '..';
import TableauError from '../TableauError';

export default {
  title: 'MDS/Blocks (Themed)/Tableau',
  component: Tableau,
  subcomponents: { TableauError },
};

export {
  BasicExample,
  ErrorExample,
};
