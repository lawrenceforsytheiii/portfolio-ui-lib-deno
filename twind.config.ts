import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      keyframes: {
        tail: {
          '0%': {
            width: '0px'
          },
          '30%': {
            width: '100px'
          },
          '100%': {
            width: '0px'
          }
        },
        shining: {
          '0%': {
            width: '0px'
          },
          '50%': {
            width: '30px'
          },
          '100%': {
            width: '0px'
          }
        },
        shooting: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(300px)'
          }
        },
      },
    },
  },
} as Options;
