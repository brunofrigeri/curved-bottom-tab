import React from 'react';
import {Dimensions} from 'react-native';
import {curveBasis, line} from 'd3-shape';
import Svg, {Path} from 'react-native-svg';

const HEIGHT_SIZE = 80;

const {width} = Dimensions.get('window');

const lineGenerator = line();

const rect = lineGenerator([
  [0, 0],
  [width / 2, 0],
  [width, 0],
  [width, HEIGHT_SIZE],
  [0, HEIGHT_SIZE],
  [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
  [(width / 5) * 2, 0],
  [(width / 5) * 2 + 20, HEIGHT_SIZE * 0.5],
  [(width / 5) * 3 - 20, HEIGHT_SIZE * 0.5],
  [(width / 5) * 3, 0],
]);

const d = `${center} ${rect}`;

export default function TabShape() {
  return (
    <Svg width={width} height={HEIGHT_SIZE}>
      <Path fill={'white'} {...{d}} />
    </Svg>
  );
}
