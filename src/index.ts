import { getDrafts, getDraftPicks } from './modules/drafts';
import { getNFLState, getLeague } from './modules/leagues';
import { getMatchupsByWeek, getWinnersBracket, getLosersBracket } from './modules/matchups';
import { getUsers, getFullsizeAvatar, getThumbnailAvatar } from './modules/owners';
import { getPlayers } from './modules/players';
import { getRosters, getTransactionsByWeek } from './modules/rosters';

export default {
  getDrafts,
  getDraftPicks,
  getNFLState,
  getLeague,
  getMatchupsByWeek,
  getWinnersBracket,
  getLosersBracket,
  getUsers,
  getFullsizeAvatar,
  getThumbnailAvatar,
  getPlayers,
  getRosters,
  getTransactionsByWeek,
};
