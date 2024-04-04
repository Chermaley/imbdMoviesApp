import {HOME, MOVIES_DETAIL} from './routes';

export type MainNavigatorParamList = {
  [HOME]: undefined;
  [MOVIES_DETAIL]: {imbdId: string};
};
