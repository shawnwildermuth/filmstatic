export default function () {
  const scrollIntoView = document.getElementsByClassName("scroll-into-view");
  if (scrollIntoView && scrollIntoView.length > 0) {
    // Only scroll first thing
    console.log(`Scrolling to ${scrollIntoView[0]}`);
    const rect = scrollIntoView[0].getBoundingClientRect();
    console.log(rect);
    window.scrollTo(0, rect.top);
  }
}