export function getSuo(content: string) {
  let m = content.match(/suo(.+?)\)/i);
  return m
    ? m[1].slice(2)
    : "https://wx4.sinaimg.cn/mw690/0060lm7Tly1fvmtrka9p5j30b40b43yo.jpg";
}
