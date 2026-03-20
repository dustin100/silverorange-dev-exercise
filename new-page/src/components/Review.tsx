import Profile from "./Profile";
import ReviewImage from "./ReviewImage";
import ReviewContent from "./ReviewContent";

const Review = () => {
  return (
    <article>
      <Profile />
      <ReviewImage />
      <ReviewContent
        label="Review"
        title="B&W P5 Headphones"
        score={8}
        scoreEmoji="👌"
        store="Price on Amazon"
        price="$252.00"
        buyUrl="#"
        highlights={[
          {
            emoji: "🎉",
            label: "Pros",
            text: "Super high fidelity, excellent portability, unobtrusive design",
          },
          {
            emoji: "💩",
            label: "Cons",
            text: "Finicky cables, slightly uncomfortable over long periods",
          },
          {
            emoji: "💸",
            label: "Buy?",
            text: "Yes, strong recommendation.",
          },
        ]}
        body="I love these headphones and they're my go to cans when I'm sitting at my desk. The only major con is that they squeeze my head a bit if I wear them all day."
      />
    </article>
  );
};

export default Review;
