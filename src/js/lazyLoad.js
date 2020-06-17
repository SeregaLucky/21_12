export const findNeedImgs = () => {
  let allImg = document.querySelectorAll('img');
  allImg = Array.from(allImg);

  let needArrImg;

  if (allImg.length <= 20) {
    needArrImg = allImg;
  } else if (!(allImg.length % 2)) {
    const delNum = allImg.length - 20;
    needArrImg = allImg.slice(delNum);
  } else {
    // const delNum = allImg.length - 20;
    // const needNumb = allImg.length - delNum;
    // console.log('needNumb', needNumb);
    // needArrImg = allImg.slice(needNumb);
  }

  needArrImg.forEach(img => lazyLoad(img));
};

function lazyLoad(img) {
  const fnEntry = (entries, observer) => {
    // console.log(entries);

    entries.forEach(entry => {
      // console.log(entry);

      if (entry.isIntersecting) {
        // console.log(entry);
        // console.log(entry.target);
        // console.log(entry.target.dataset.source);

        const img = entry.target;
        const src = img.dataset.source;

        img.src = src;
        // console.log(observer);
        observer.disconnect();
      }
    });
  };

  const intOb = new IntersectionObserver(fnEntry, {});

  intOb.observe(img);
}
