const DAY = 1000 * 60 * 60 * 24;

const onCountDown = () => {
  const destination = new Date("Nov 30,2022").getTime();
  // eslint-disable-next-line no-undef
  interval = setInterval(() => {
    const now = new Date().getTime();
    const different = destination - now;
    const day = Math.floor(different / DAY);
    return day;
  });
};
console.log(onCountDown());
