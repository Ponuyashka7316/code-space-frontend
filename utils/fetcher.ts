const fetcher = function (url: string) {
  return fetch(`${process.env.BACK}${url}`).then((r) => r.json());
};

export default fetcher;
