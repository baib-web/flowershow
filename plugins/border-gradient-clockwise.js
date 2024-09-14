module.exports = {
  // 其他配置...
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.border-gradient': {
          background: 'linear-gradient(0deg, #3b82f6, #3b82f6)',
          backgroundSize: '400% 400%',
          animation: 'gradient-animation 5s ease infinite',
          borderRadius: '10px',
          border: '2px solid transparent',
          position: 'relative',
        },
        '.border-gradient::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: '10px',
          background: 'linear-gradient(90deg, #3b82f6, #3b82f6)',
          backgroundSize: '400% 400%',
          zIndex: '-1',
          animation: 'gradient-animation 5s ease infinite',
        },
        '@keyframes gradient-animation': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
