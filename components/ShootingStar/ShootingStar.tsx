import { h } from 'preact';
import { tw } from 'twind';
import { css } from 'twind/css';
// import { ShootingStarProps } from './ShootingStar.types.ts';
import { random } from '../../utils/random.ts';

export const ShootingStar = () => {
  const animationDelay = random(9999);
  return (
    <div
      class={tw`absolute h-[2px] ${css({
        background: 'linear-gradient(30deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))',
        'border-radius': '999px',
        filter: 'drop-shadow(0 0 6px rgba(105, 155, 255, 1))',
        top: `calc(50% - (${random(400)}px - 200px))`,
        right: `calc(40% - (${random(300)}px))`,
        animation: 'tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite',
        'animation-delay': `${animationDelay}ms`,
        '&::before, &::after': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          top: 'calc(50% - 1px)',
          left: '0',
          height: '2px',
          background: 'linear-gradient(30deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))',
          'border-radius': '100%',
          animation: 'shining 3000ms ease-in-out infinite',
          'animation-delay': `${animationDelay}ms`,
        },
        '&::before': {
          transform: 'translateX(-50%) rotateZ(45deg)',
        },
        '&::after': {
          transform: 'translateX(-50%) rotateZ(-45deg)',
        },
        '@keyframes tail': {
          '0%': { width: '0' },
          '30%': { width: '100px' },
          '100%': { width: '0' }
        },
        '@keyframes shining': {
          '100%': { width: '0' },
          '50%': { width: '30px' },
          '0%': { width: '0' }
        },
        '@keyframes shooting': {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(300px)' }
        },
      })}`}
    ></div>
  );
}