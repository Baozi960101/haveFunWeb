const FbStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  border: "0",
};

const FbHinduhope = () => {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      allowtransparency="true"
      scrolling="no"
      src="//www.facebook.com/v2.5/plugins/page.php?href=https://www.facebook.com/hinduhope&amp;width=350&amp;show_facepile=true&amp;small_header=false&amp;hide_cover=false&amp;show_posts=true&amp;locale=zh_TW"
      style={FbStyle}
    ></iframe>
  );
};
// eslint-disable-next-line jsx-a11y/iframe-has-title

export const ClassificationPostRightContent = () => {
  return <FbHinduhope />;
};
