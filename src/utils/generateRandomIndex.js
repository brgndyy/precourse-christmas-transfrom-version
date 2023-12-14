import { Random } from '@woowacourse/mission-utils';

const generateRandomIndex = (numArr) => {
  return Random.shuffle(numArr)[0];
};

export default generateRandomIndex;
