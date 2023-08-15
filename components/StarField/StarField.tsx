import { h } from 'preact';
import { tw } from 'twind';
import { css } from 'twind/css';
import { ShootingStar } from '../ShootingStar/ShootingStar.tsx';

export const StarField = () => {
  const stars = Array.from({ length: 20 });

  return (
    <div class={tw`h-[100%] w-[100%] relative ${css({
      transform: 'rotateZ(-30deg)',
    })}`}
    >
      {stars.map((star, index) => (
        <ShootingStar key={index} />
      ))}
    </div>
  );
};