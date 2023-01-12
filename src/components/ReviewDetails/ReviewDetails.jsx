function ReviewDetails({ data }) {
  const { author, content } = data;

  return (
    <li>
      <h5>Author: {author}</h5>
      <p>{content}</p>
    </li>
  );
}

export default ReviewDetails;
