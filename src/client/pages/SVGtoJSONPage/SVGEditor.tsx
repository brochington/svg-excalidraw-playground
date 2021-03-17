import React, { FC, useEffect, useRef, useContext } from 'react';
import * as monaco from 'monaco-editor';
import { PageStoreContext } from './pageStore';

const defaultSVG = `<svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <path d="m72.918 41.668c-2.082 0-3.957 0.41797-5.625 1.043l-4.793-7.918 1.457-3.543h0.625c1.25 0 2.082-0.83203 2.082-2.082s-0.83203-2.082-2.082-2.082h-6.25c-1.25 0-2.082 0.83203-2.082 2.082s0.83203 2.082 2.082 2.082h1.043l-0.83203 2.082h-18.961v-8.332h-10.418v4.168h6.25v5.832l-3.75 7.5c-1.457-0.625-2.9141-0.83203-4.582-0.83203-8.125 0-14.582 6.457-14.582 14.582s6.457 14.582 14.582 14.582 14.582-6.457 14.582-14.582c0-5-2.5-9.375-6.25-11.875l2.5-4.793 13.125 18.957h7.5c1.043 7.082 7.082 12.5 14.375 12.5 8.125 0 14.582-6.457 14.582-14.582 0.003906-8.332-6.4531-14.789-14.578-14.789zm-35.418 14.582c0 5.832-4.582 10.418-10.418 10.418-5.832 0-10.418-4.582-10.418-10.418 0-5.832 4.582-10.418 10.418-10.418 0.83203 0 1.875 0.20703 2.707 0.41797l-4.582 9.168c-0.20703 0.20703-0.20703 0.41406-0.20703 0.83203 0 1.25 0.83203 2.082 2.082 2.082 0.83203 0 1.457-0.41797 1.875-1.25l4.582-9.168c2.293 2.0859 3.9609 5.0039 3.9609 8.3359zm26.25-11.25c-2.707 2.293-4.582 5.418-5.207 9.168h-3.332l5.418-14.375zm2.082 3.543l3.332 5.625h-6.457c0.41797-2.293 1.668-4.168 3.125-5.625zm-14.375 3.332l-10-14.375h15.625zm21.461 14.793c-5 0-9.168-3.543-10.207-8.332l10.207-0.003907c1.25 0 2.082-0.83203 2.082-2.082 0-0.41797-0.20703-0.83203-0.41797-1.043l-5.207-8.75c1.043-0.41797 2.293-0.625 3.543-0.625 5.832 0 10.418 4.582 10.418 10.418-0.003907 5.832-4.5859 10.418-10.418 10.418z"/>
</svg>
`

const gAndCircles = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle fill="yellow" stroke="purple" cx="60" cy="60" r="25" />
  </g>

  <g fill="blue" stroke="orange" stroke-width="3">
    <circle cx="20" cy="30" r="14" />
    <circle cx="40" cy="50" r="12" />
  </g>
</svg>`;

const useCircleTest = `<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue"/>
  <use href="#myCircle" x="10" fill="blue"/>
  <use href="#myCircle" x="20" fill="white" stroke="red"/>
</svg>`

const auFlag = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-au" viewBox="0 0 640 480">
  <path id="path617" fill="#006" stroke-width="1.3" d="M0 0h640v480H0z"/>
  <path id="path625" fill="#fff" fill-rule="evenodd" stroke-width="1.3" d="M299.8 392.5l-43.7 3.8 6 43.4L232 408l-30.1 31.7 6-43.4-43.7-3.8 37.7-22.3-24.3-36.5 41 15.5 13.4-41.7 13.5 41.7 41-15.5-24.3 36.5m224.4 62.3L476 416.7l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.7-19 1.7 2.6 18.9-13-13.9-13.2 13.9 2.6-18.9-19-1.6m16.4-291.9L476 134.6l17.8 6.7 5.8-18.1 5.8 18.1 17.8-6.7-10.5 15.8 16.4 9.8-19 1.6 2.6 18.9-13-13.8-13.2 13.7 2.6-18.8-19-1.6M380.8 265l-10.5-15.8 17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7L407 265l16.4 9.7-19 1.7 2.7 18.9-13.2-13.9-13 13.9 2.5-18.9-19-1.6m216.3-38L570 221l17.8 6.7 5.8-18.1 5.9 18.1 17.8-6.7-10.5 15.8 16.3 9.7-19 1.7 2.6 18.8-13-13.8-13.2 13.8 2.6-18.8-19-1.7M542 320l-10.3 6.5 2.9-11.9-9.3-7.8 12.1-1 4.6-11.2 4.7 11.3 12.1.9-9.3 7.8 2.9 11.9"/>
  <path id="path969" fill="#006" stroke-width=".5" d="M0 0h320v240H0z"/>
  <path id="path971" fill="#fff" stroke-width=".5" d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"/>
  <path id="path973" fill="#c8102e" stroke-width=".5" d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"/>
  <path id="path975" fill="#fff" stroke-width=".5" d="M120.5 0v240h80V0zM0 80v80h320V80z"/>
  <path id="path977" fill="#c8102e" stroke-width=".5" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"/>
</svg>`;

const usFlag = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 640 480">
<g fill-rule="evenodd">
  <g stroke-width="1pt">
    <path fill="#bd3d44" d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z" transform="scale(.9375)"/>
    <path fill="#fff" d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z" transform="scale(.9375)"/>
  </g>
  <path fill="#192f5d" d="M0 0h389.1v275.7H0z" transform="scale(.9375)"/>
  <path fill="#fff" d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z" transform="scale(.9375)"/>
</g>
</svg>
`;

const tempRect = `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
<!-- Simple rectangle -->
<rect width="100" height="100" />

<!-- Rounded corner rectangle -->
<rect x="120" width="100" height="100" rx="15" />
</svg>`;

const polyline = `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
<!-- Example of a polyline with the default fill -->
<polyline points="0,100 50,25 50,75 100,0" />

<!-- Example of the same polyline shape with stroke and no fill -->
<polyline points="100,100 150,25 150,75 200,0"
          fill="none" stroke="black" />
</svg>`;

const crazytest = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="620" height="472">
<defs>
 <path id="b" d="m0 0h77v210h-77z" stroke="#000" stroke-width="2"/>
 <path id="a" d="m0 0h77v60h-77z" stroke="#000" stroke-width="2"/>
</defs>
<path d="m0 0h620v472h-620z" fill="#fff"/>
<g transform="translate(2 1)">
 <use fill="#fff" xlink:href="#b"/>
 <use x="77" fill="#ff0" xlink:href="#b"/>
 <use x="154" fill="#0ff" xlink:href="#b"/>
 <use x="231" fill="#0f0" xlink:href="#b"/>
 <use x="308" fill="#f0f" xlink:href="#b"/>
 <use x="385" fill="red" xlink:href="#b"/>
 <use x="462" fill="#00f" xlink:href="#b"/>
 <use x="539" xlink:href="#b"/>
</g>
<g transform="translate(2 230)">
 <use fill="red" xlink:href="#a"/>
 <use x="77" fill="red" xlink:href="#a"/>
 <use x="154" fill="#fff" xlink:href="#a"/>
 <use x="231" fill="#fff" xlink:href="#a"/>
 <use x="308" fill="red" xlink:href="#a"/>
 <use x="385" fill="red" xlink:href="#a"/>
 <use x="462" fill="#fff" xlink:href="#a"/>
 <use x="539" fill="#fff" xlink:href="#a"/>
</g>
<g transform="translate(2 312)">
 <use fill="#0f0" xlink:href="#a"/>
 <use x="77" fill="#0f0" xlink:href="#a"/>
 <use x="154" fill="#0f0" xlink:href="#a"/>
 <use x="231" fill="#0f0" xlink:href="#a"/>
 <use x="308" fill="#fff" xlink:href="#a"/>
 <use x="385" fill="#fff" xlink:href="#a"/>
 <use x="462" fill="#fff" xlink:href="#a"/>
 <use x="539" fill="#fff" xlink:href="#a"/>
</g>
<g transform="translate(2 392)">
 <use fill="#00f" xlink:href="#a"/>
 <use x="77" fill="#fff" xlink:href="#a"/>
 <use x="154" fill="#00f" xlink:href="#a"/>
 <use x="231" fill="#fff" xlink:href="#a"/>
 <use x="308" fill="#00f" xlink:href="#a"/>
 <use x="385" fill="#fff" xlink:href="#a"/>
 <use x="462" fill="#00f" xlink:href="#a"/>
 <use x="539" fill="#fff" xlink:href="#a"/>
</g>
<text font-family="DejaVu Sans" stroke-width="4" x="310" y="174.47" font-size="180" text-anchor="middle">TEST</text>
</svg>`;

const everthingTest = `<svg height="400px" width="600px">
<defs>
  <circle id="myCircle" cx="40" cy="40" r="40" stroke="blue"/>
</defs>
<circle r="10" />
<g transform="translate(0 0)">
  <use href="#myCircle" fill="blue"/>
  <use href="#myCircle" x="100" fill="white" stroke="red"/>
  <use href="#myCircle" x="200" fill="#00990044" />
</g>
<g transform="translate(0 80)">
  <ellipse cx="80" cy="40" rx="80" ry="40" fill="orange" stroke="purple" />
</g>
<g transform="translate(0 160)">
   <rect x="40" y="5" width="40" height="40" stroke="blue" stroke-width="3" fill="yellow" />
</g>
<g transform="translate(0 200)">
  <polyline points="0,100 50,25 50,75 100,0" />
  <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />

</g>
<g transform="translate(50 300)">
    <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90"/>
</g>
<g transform="translate(150 300)">
  <polygon stroke="black" points="50,0 21,90 98,35 2,35 79,90"/>
</g>
<g transform="translate(250 300)">
  <polygon stroke="yellow" fill="purple" points="50,0 21,90 98,35 2,35 79,90"/>
</g>
</svg>`

const bicycle = `<svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="m72.918 41.668c-2.082 0-3.957 0.41797-5.625 1.043l-4.793-7.918 1.457-3.543h0.625c1.25 0 2.082-0.83203 2.082-2.082s-0.83203-2.082-2.082-2.082h-6.25c-1.25 0-2.082 0.83203-2.082 2.082s0.83203 2.082 2.082 2.082h1.043l-0.83203 2.082h-18.961v-8.332h-10.418v4.168h6.25v5.832l-3.75 7.5c-1.457-0.625-2.9141-0.83203-4.582-0.83203-8.125 0-14.582 6.457-14.582 14.582s6.457 14.582 14.582 14.582 14.582-6.457 14.582-14.582c0-5-2.5-9.375-6.25-11.875l2.5-4.793 13.125 18.957h7.5c1.043 7.082 7.082 12.5 14.375 12.5 8.125 0 14.582-6.457 14.582-14.582 0.003906-8.332-6.4531-14.789-14.578-14.789zm-35.418 14.582c0 5.832-4.582 10.418-10.418 10.418-5.832 0-10.418-4.582-10.418-10.418 0-5.832 4.582-10.418 10.418-10.418 0.83203 0 1.875 0.20703 2.707 0.41797l-4.582 9.168c-0.20703 0.20703-0.20703 0.41406-0.20703 0.83203 0 1.25 0.83203 2.082 2.082 2.082 0.83203 0 1.457-0.41797 1.875-1.25l4.582-9.168c2.293 2.0859 3.9609 5.0039 3.9609 8.3359zm26.25-11.25c-2.707 2.293-4.582 5.418-5.207 9.168h-3.332l5.418-14.375zm2.082 3.543l3.332 5.625h-6.457c0.41797-2.293 1.668-4.168 3.125-5.625zm-14.375 3.332l-10-14.375h15.625zm21.461 14.793c-5 0-9.168-3.543-10.207-8.332l10.207-0.003907c1.25 0 2.082-0.83203 2.082-2.082 0-0.41797-0.20703-0.83203-0.41797-1.043l-5.207-8.75c1.043-0.41797 2.293-0.625 3.543-0.625 5.832 0 10.418 4.582 10.418 10.418-0.003907 5.832-4.5859 10.418-10.418 10.418z"/>
</svg>`

const SVGEditor: FC = () => {
  const pageStore = useContext(PageStoreContext);
  const monacoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!monacoRef.current) return;
    const editor = monaco.editor.create(monacoRef.current, {
      // value: auFlag,
      value: usFlag,
      // value: gAndCircles,
      // value: defaultSVG,
      // value: tempRect,
      // value: polyline,
      // value: crazytest,
      // value: useCircleTest,
      // value: everthingTest,
      // value: bicycle,
      language: 'html',
    });

    // pageStore.actions.setSVGString(tempRect);
    // pageStore.actions.setSVGString(gAndCircles);
    // pageStore.actions.setSVGString(crazytest);
    // pageStore.actions.setSVGString(bicycle);
    pageStore.actions.setSVGString(usFlag);
    // pageStore.actions.setSVGString(everthingTest);

    editor.onKeyUp(() => {
      const svgString = editor.getValue();

      pageStore.actions.setSVGString(svgString);
    })
  }, [monacoRef]);

  return (
    <div style={{ width: '50vw', height: 'calc(100vh - 64px)' }} ref={monacoRef} />
  );
};

export default SVGEditor;
