export const FadeUp = (delay: number) => {
    return {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: delay,
          once: true
        },
      },
    
    };
  };